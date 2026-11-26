// Áudio, Vibração, Notificações Nativas (Capacitor Android/iOS) e PWA (Service Worker)

import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { Haptics, NotificationType } from '@capacitor/haptics';

const REST_NOTIFICATION_ID = 1001;
const REST_CHANNEL_VIBRATE = 'forge-rest-alarm-v2';
const REST_CHANNEL_SILENT_VIBRATE = 'forge-rest-alarm-novib-v2';

let audioCtx: AudioContext | null = null;
let wakeLockSentinel: any = null;
let channelsReady = false;

export function isNativeApp(): boolean {
  try {
    return Capacitor.isNativePlatform();
  } catch {
    return false;
  }
}

// Inicializa e desbloqueia o AudioContext no primeiro toque do usuário (obrigatório para iOS)
export function initAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

// Ouvinte global para destravar áudio na primeira interação
if (typeof window !== 'undefined') {
  const unlockEvents = ['touchstart', 'touchend', 'click', 'keydown'];
  const unlockHandler = () => {
    try {
      initAudioContext();
    } catch {}
    unlockEvents.forEach(evt => window.removeEventListener(evt, unlockHandler));
  };
  unlockEvents.forEach(evt => window.addEventListener(evt, unlockHandler, { once: true, passive: true }));
}

async function ensureAndroidChannels() {
  if (!isNativeApp() || Capacitor.getPlatform() !== 'android' || channelsReady) return;
  try {
    await LocalNotifications.createChannel({
      id: REST_CHANNEL_VIBRATE,
      name: 'Alarme de Descanso (Com Vibração)',
      description: 'Toca e vibra ao concluir o descanso entre séries, mesmo em segundo plano',
      importance: 5,
      visibility: 1,
      lights: true,
      lightColor: '#10b981',
      vibration: true
    });
    await LocalNotifications.createChannel({
      id: REST_CHANNEL_SILENT_VIBRATE,
      name: 'Alarme de Descanso (Sem Vibração)',
      description: 'Alerta sonoro ao concluir o descanso entre séries',
      importance: 5,
      visibility: 1,
      lights: true,
      lightColor: '#10b981',
      vibration: false
    });
    channelsReady = true;
  } catch (err) {
    console.warn('Erro ao criar canal de notificação Android:', err);
  }
}

/**
 * Toca um sinal sonoro de alarme esportivo alto e nítido (Web Audio API)
 * Não pausa a música (Spotify/YouTube Music) em segundo plano
 */
export function playRestAlarm() {
  try {
    const ctx = initAudioContext();
    const now = ctx.currentTime;

    const tones = [
      { freq: 880, start: 0, duration: 0.18 },
      { freq: 1174.66, start: 0.22, duration: 0.20 },
      { freq: 1760, start: 0.46, duration: 0.45 },
      { freq: 1174.66, start: 1.0, duration: 0.18 },
      { freq: 1760, start: 1.22, duration: 0.50 }
    ];

    tones.forEach(t => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(t.freq, now + t.start);

      gain.gain.setValueAtTime(0.001, now + t.start);
      gain.gain.exponentialRampToValueAtTime(0.9, now + t.start + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + t.start + t.duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + t.start);
      osc.stop(now + t.start + t.duration + 0.05);
    });
  } catch (err) {
    console.warn('Erro ao tocar alarme Web Audio:', err);
  }
}

/**
 * Vibração forte e perceptível via Haptics nativo (APK) e Vibration API (Android Web/Chrome)
 */
export async function triggerHapticFeedback() {
  if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
    try {
      navigator.vibrate([400, 150, 400, 150, 600]);
    } catch {
      // Navegador bloqueou
    }
  }

  if (isNativeApp()) {
    try {
      await Haptics.notification({ type: NotificationType.Success });
      await Haptics.vibrate({ duration: 450 });
      setTimeout(() => {
        Haptics.vibrate({ duration: 450 }).catch(() => {});
      }, 600);
    } catch (err) {
      console.warn('Erro ao acionar Haptics nativo:', err);
    }
  }
}

/**
 * Verifica se as notificações já foram permitidas (Nativo ou Web/PWA)
 */
export async function checkNotificationPermission(): Promise<boolean> {
  if (isNativeApp()) {
    try {
      const status = await LocalNotifications.checkPermissions();
      return status.display === 'granted';
    } catch {
      return false;
    }
  }
  if (typeof window !== 'undefined' && 'Notification' in window) {
    return Notification.permission === 'granted';
  }
  return false;
}

/**
 * Solicita permissão de notificação (Nativo ou Web/PWA)
 */
export async function requestNotificationPermission(): Promise<boolean> {
  if (isNativeApp()) {
    try {
      await ensureAndroidChannels();
      const status = await LocalNotifications.requestPermissions();
      return status.display === 'granted';
    } catch (err) {
      console.warn('Erro ao pedir permissão nativa:', err);
      return false;
    }
  }

  if (typeof window === 'undefined' || !('Notification' in window)) return false;
  try {
    const perm = await Notification.requestPermission();
    return perm === 'granted';
  } catch {
    return false;
  }
}

export async function checkExactAlarmPermission(): Promise<boolean> {
  if (!isNativeApp() || Capacitor.getPlatform() !== 'android') return true;
  try {
    const res = await LocalNotifications.checkExactNotificationSetting();
    return res.exact_alarm === 'granted';
  } catch {
    return false;
  }
}

export async function requestExactAlarmPermission(): Promise<boolean> {
  if (!isNativeApp() || Capacitor.getPlatform() !== 'android') return true;
  try {
    const res = await LocalNotifications.changeExactNotificationSetting();
    return res.exact_alarm === 'granted';
  } catch {
    return false;
  }
}

/**
 * Agenda o alerta de fim de descanso para disparar mesmo em segundo plano ou tela bloqueada
 */
export async function scheduleRestAlarm(
  endTimestamp: number,
  exerciseName: string,
  setNumber: number,
  vibrationEnabled = true
) {
  const delayMs = endTimestamp - Date.now();
  if (delayMs <= 500) return;

  if (isNativeApp()) {
    try {
      const perm = await LocalNotifications.checkPermissions();
      if (perm.display !== 'granted') return;

      await ensureAndroidChannels();
      await LocalNotifications.cancel({ notifications: [{ id: REST_NOTIFICATION_ID }] }).catch(() => {});

      const exact = await checkExactAlarmPermission();
      const channelId = vibrationEnabled ? REST_CHANNEL_VIBRATE : REST_CHANNEL_SILENT_VIBRATE;

      await LocalNotifications.schedule({
        notifications: [
          {
            id: REST_NOTIFICATION_ID,
            title: 'Tempo de Descanso Concluído! 🔔',
            body: `Hora da Série ${setNumber} de ${exerciseName}. Bora pra cima!`,
            schedule: {
              at: new Date(endTimestamp),
              allowWhileIdle: true
            },
            channelId,
            smallIcon: 'ic_stat_forge',
            iconColor: '#10b981',
            autoCancel: true,
            foreground: false,
            isExactNotification: exact
          }
        ]
      });
    } catch (err) {
      console.warn('Erro ao agendar notificação nativa:', err);
    }
    return;
  }

  // Web / PWA: envia agendamento para o Service Worker
  if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
    try {
      const reg = await navigator.serviceWorker.ready;
      const target = navigator.serviceWorker.controller || reg.active;
      target?.postMessage({
        type: 'SCHEDULE_REST',
        endTimestamp,
        exerciseName,
        setNumber,
        vibrationEnabled
      });
    } catch {
      // Ignora caso SW não esteja ativo
    }
  }
}

/**
 * Cancela o alerta agendado caso o usuário pule o descanso, pause ou finalize o treino
 */
export async function cancelScheduledRestAlarm() {
  if (isNativeApp()) {
    try {
      await LocalNotifications.cancel({ notifications: [{ id: REST_NOTIFICATION_ID }] });
    } catch {
      // Ignora se não houver notificação pendente
    }
    return;
  }

  if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
    try {
      const reg = await navigator.serviceWorker.ready;
      const target = navigator.serviceWorker.controller || reg.active;
      target?.postMessage({ type: 'CANCEL_REST' });
    } catch {
      // Ignora
    }
  }
}

/**
 * Dispara notificação imediata no navegador/PWA (via ServiceWorker para funcionar no Chrome Android!)
 */
export async function sendRestNotification(
  exerciseName: string,
  setNumber: number,
  vibrationEnabled = true
) {
  if (isNativeApp()) {
    return;
  }

  if (typeof window === 'undefined' || !('Notification' in window)) return;
  if (Notification.permission !== 'granted') return;

  const title = 'Tempo de Descanso Concluído! 🔔';
  const options: NotificationOptions & { vibrate?: number[]; renotify?: boolean } = {
    body: `Hora da Série ${setNumber} de ${exerciseName}. Bora pra cima!`,
    icon: './icon.svg',
    badge: './icon.svg',
    tag: 'forge-rest-done',
    renotify: true,
    requireInteraction: true,
    ...(vibrationEnabled ? { vibrate: [400, 150, 400, 150, 600] } : {})
  };

  try {
    if ('serviceWorker' in navigator) {
      const reg = await navigator.serviceWorker.ready;
      if (reg && reg.showNotification) {
        await reg.showNotification(title, options);
        return;
      }
    }
    new Notification(title, options);
  } catch (err) {
    console.warn('Erro ao disparar notificação:', err);
  }
}

/**
 * Mantém a tela do celular sempre acesa durante o treino (Screen Wake Lock API)
 */
export async function enableScreenWakeLock() {
  if (typeof navigator !== 'undefined' && 'wakeLock' in navigator) {
    try {
      wakeLockSentinel = await (navigator as any).wakeLock.request('screen');
      wakeLockSentinel.addEventListener('release', () => {
        wakeLockSentinel = null;
      });
    } catch {
      // Wake Lock não disponível ou negado
    }
  }
}

export async function releaseScreenWakeLock() {
  if (wakeLockSentinel) {
    try {
      await wakeLockSentinel.release();
    } catch {
      // Ignora erro ao soltar
    }
    wakeLockSentinel = null;
  }
}

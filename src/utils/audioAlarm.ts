// Áudio e Alarmes otimizados para iOS Safari e Android

let audioCtx: AudioContext | null = null;
let isAudioUnlocked = false;
let wakeLockSentinel: any = null;

// Inicializa e desbloqueia o AudioContext no primeiro toque do usuário (obrigatório para iOS)
export function initAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  isAudioUnlocked = true;
  return audioCtx;
}

// Ouvinte global para destravar áudio na primeira interação
if (typeof window !== 'undefined') {
  const unlockEvents = ['touchstart', 'touchend', 'click', 'keydown'];
  const unlockHandler = () => {
    initAudioContext();
    unlockEvents.forEach(evt => window.removeEventListener(evt, unlockHandler));
  };
  unlockEvents.forEach(evt => window.addEventListener(evt, unlockHandler, { once: true, passive: true }));
}

/**
 * Toca um sinal sonoro de alarme esportivo alto e nítido (Web Audio API)
 * Perceptível mesmo em academias barulhentas
 */
export function playRestAlarm() {
  try {
    const ctx = initAudioContext();
    const now = ctx.currentTime;

    // Três beeps harmônicos ascendentes (880Hz -> 1175Hz -> 1760Hz)
    const tones = [
      { freq: 880, start: 0, duration: 0.18 },
      { freq: 1174.66, start: 0.22, duration: 0.20 },
      { freq: 1760, start: 0.46, duration: 0.45 },
      // Segundo toque reforçado
      { freq: 1174.66, start: 1.0, duration: 0.18 },
      { freq: 1760, start: 1.22, duration: 0.50 }
    ];

    tones.forEach(t => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle'; // Som encorpado e penetrante sem distorção
      osc.frequency.setValueAtTime(t.freq, now + t.start);

      // Curva de volume rápida e sem estalos
      gain.gain.setValueAtTime(0.001, now + t.start);
      gain.gain.exponentialRampToValueAtTime(0.9, now + t.start + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + t.start + t.duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + t.start);
      osc.stop(now + t.start + t.duration + 0.05);
    });

    // Feedback háptico (vibração no celular)
    triggerHapticFeedback();

  } catch (err) {
    console.warn('Erro ao tocar alarme Web Audio:', err);
  }
}

/**
 * Feedback háptico via Vibration API para celulares Android e dispositivos com suporte
 */
export function triggerHapticFeedback() {
  if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
    try {
      // Padrão de vibração: Vibra 250ms, pausa 100ms, vibra 250ms, pausa 100ms, vibra 400ms
      navigator.vibrate([250, 100, 250, 100, 400]);
    } catch {
      // Navegador não permitiu ou não suporta
    }
  }
}

/**
 * Dispara notificação nativa do sistema operacional (aparece na tela de bloqueio e na barra superior)
 */
export async function sendRestNotification(exerciseName: string, setNumber: number) {
  if (typeof window === 'undefined' || !('Notification' in window)) return;

  if (Notification.permission === 'granted') {
    try {
      new Notification('Tempo de Descanso Concluído! 🔔', {
        body: `Hora da Série ${setNumber} de ${exerciseName}. Bora pra cima!`,
        icon: '/icon.svg',
        badge: '/icon.svg',
        tag: 'forge-rest-done',
        requireInteraction: false
      });
    } catch (err) {
      console.warn('Erro ao disparar notificação:', err);
    }
  }
}

/**
 * Solicita permissão de notificação nativa
 */
export async function requestNotificationPermission(): Promise<boolean> {
  if (typeof window === 'undefined' || !('Notification' in window)) return false;
  try {
    const perm = await Notification.requestPermission();
    return perm === 'granted';
  } catch {
    return false;
  }
}

/**
 * Mantém a tela do celular sempre acesa durante o treino (Screen Wake Lock API)
 * Evita que o iPhone ou Android bloqueie no meio das séries
 */
export async function enableScreenWakeLock() {
  if (typeof navigator !== 'undefined' && 'wakeLock' in navigator) {
    try {
      wakeLockSentinel = await (navigator as any).wakeLock.request('screen');
      wakeLockSentinel.addEventListener('release', () => {
        wakeLockSentinel = null;
      });
    } catch (err) {
      console.log('Screen Wake Lock não pôde ser ativado:', err);
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

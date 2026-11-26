// Service Worker - Forge Treino Pro
// Suporte a notificações com vibração no PWA (Android Chrome / Desktop / iOS 16.4+)

let restTimeoutId = null;

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

function showRestDoneNotification(exerciseName, setNumber, vibrationEnabled = true) {
  const options = {
    body: exerciseName
      ? `Hora da Série ${setNumber || ''} de ${exerciseName}. Bora pra cima!`
      : 'Hora da próxima série. Bora pra cima!',
    icon: './icon.svg',
    badge: './icon.svg',
    tag: 'forge-rest-done',
    renotify: true,
    requireInteraction: true,
    silent: false,
    ...(vibrationEnabled ? { vibrate: [400, 150, 400, 150, 600] } : {})
  };

  return self.registration.showNotification('Descanso Concluído! 🔔', options);
}

self.addEventListener('message', (event) => {
  const data = event.data;
  if (!data || !data.type) return;

  if (data.type === 'SCHEDULE_REST') {
    if (restTimeoutId) {
      clearTimeout(restTimeoutId);
      restTimeoutId = null;
    }

    const delayMs = Math.max(0, (data.endTimestamp || 0) - Date.now());
    if (delayMs > 0) {
      restTimeoutId = setTimeout(() => {
        restTimeoutId = null;
        showRestDoneNotification(
          data.exerciseName,
          data.setNumber,
          data.vibrationEnabled !== false
        );
      }, delayMs);
    }
  } else if (data.type === 'CANCEL_REST') {
    if (restTimeoutId) {
      clearTimeout(restTimeoutId);
      restTimeoutId = null;
    }
  } else if (data.type === 'SHOW_REST_NOTIFICATION') {
    if (restTimeoutId) {
      clearTimeout(restTimeoutId);
      restTimeoutId = null;
    }
    event.waitUntil(
      showRestDoneNotification(
        data.exerciseName,
        data.setNumber,
        data.vibrationEnabled !== false
      )
    );
  }
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clients) => {
      for (const client of clients) {
        if ('focus' in client) {
          return client.focus();
        }
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow('./');
      }
    })
  );
});

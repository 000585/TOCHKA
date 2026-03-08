if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(reg => {
      console.log('Service Worker зарегистрирован:', reg.scope);
    }).catch(err => {
      console.log('Ошибка регистрации Service Worker:', err);
    });
  });
}

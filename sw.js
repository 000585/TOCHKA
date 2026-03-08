const CACHE_NAME = 'cec-news-v2';
const STATIC_ASSETS = ['/', '/assets/css/main.css', '/assets/js/main.js', '/assets/js/theme.js', '/manifest.json', '/offline.html'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((names) => Promise.all(names.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name)))));
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  if (event.request.url.includes('/.netlify/functions/') || event.request.url.includes('/admin/')) return;
  event.respondWith(caches.match(event.request).then((response) => {
    if (response) {
      fetch(event.request).then((r) => { if (r.ok) caches.open(CACHE_NAME).then((c) => c.put(event.request, r.clone())); }).catch(() => {});
      return response;
    }
    return fetch(event.request).then((r) => {
      if (!r || !r.ok) return r;
      const clone = r.clone();
      caches.open(CACHE_NAME).then((c) => c.put(event.request, clone));
      return r;
    }).catch(() => event.request.mode === 'navigate' ? caches.match('/offline.html') : undefined);
  }));
});

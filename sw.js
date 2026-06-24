const CACHE_NAME = 'magnaghi-solari-v1';
const ASSETS = [
  './index.html',
  './manifest.json',
  './logo-icona.png',
  './LOGO.jpg'
];

// Installa il Service Worker e memorizza i file base
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Gestisce le richieste di rete
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

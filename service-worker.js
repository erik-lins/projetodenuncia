const cacheName = 'denuncia-web-cache-v1';
const cacheFiles = [
  '/',
  '/index.html',
  '/denuncia.html',
  '/confirmacao.html',
  '/assets/icon/29.png',
  '/assets/icon/40.png',
  '/assets/icon/57.png',
  '/assets/icon/58.png',
  '/assets/icon/60.png',
  '/assets/icon/80.png',
  '/assets/icon/87.png',
  '/assets/icon/114.png',
  '/assets/icon/120.png',
  '/assets/icon/180.png',
  '/assets/icon/1024.png',
  '\assets\img\fundo de tela.jpg',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(cacheFiles);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

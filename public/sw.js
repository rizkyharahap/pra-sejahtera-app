importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js',
);

importScripts('/precache-manifest.e1214131ababc1b796f98314a07d688e.js');

if (workbox) {
  console.log('Yay! Workbox is loaded 🎉');
} else {
  console.log("Boo! Workbox didn't load 😬");
}

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(
  new RegExp('https://fonts.googleapis.com/icon?family=Material+Icons'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'icon?family=Material+Icons',
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        maxAgeSeconds: 60 * 24 * 60 * 60,
        maxEntries: 30,
      }),
    ],
  }),
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

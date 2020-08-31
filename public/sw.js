const CACHE_NAME = 'appV1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/js/main.chunk.js',
  '/static/js/1.chunk.js',
  '/index.html',
  '/admin',
  '/dashboard',
  '/manifest.json',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  '/data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlApw1AAACClBMVEVHcEz05YD///////747aX////8+Nv477H79Mr26JL//////////vn05YPu1z72657u1Tf//vf///7//////vf05H3x3Frx32Py4Grv2Ujw20/t1TX47qv///////3//vr///316JLu1jjw3Ffw21ft1jnw3Fjw3Fjy4Gru2Ujw21L////////////y4Gr+/fTu1z3v21Ls1C/t1DTx3mD16JD688Xs0y3////////x32b58Lfx4Gfu2Ub365z26pr//////vv688Xz43ry32fy4W/y4XD37KH26ZXy32f05H3rzxrr0iX9++z////9+ub9+uj688b154zrzxz79cv154z69Mvv2k3////577X68sPu2ELs1TP26ZLy4XD899r9+OL58sTr0SP///8ssqssent6yMTV7Op6pKSy3dqyyMjs0y3s1DHs0y/qzxrs0inr0SHqzhfqzQ/qzhPs0iVEuLHr0B1Yvbj1+vrV4eHpzAqX08/s0iu+4uBEhYbpywW+0NH1+Pjg8fDv2Urr8PCm2NX+/fPr9vWXtrdYkJHK5+X8+Nru10H688LmxQD79Mpqw77g6OnoyQD58bnz43eJzslqmpulv8D//vr477Hw3Vry4W737af9+eHt1TTK2dn16I779tL9+uf365/x32X9/Oz26Zf05X/u1juJra7w3Fbw21L05oapzJBRTmxZAAAAY3RSTlMAc57TN4wCEgoFu/sdXNgu9CXJsC9opJqD2MGkIOVZdu1AnazQ4edqR5M5SGj2Uhfoi/vvuCpR9j5QLpV6y4dQgNw/5hySNWNXxqbt+rBhyJ2+lNhhxHTw3q/ugMyv1N+H3MFFpfsNAAAOUklEQVR42u2dB3cTxxaABQFbBh5gMKGXAKZ3CB2SEFKA5KX38soY2auVtmslryTLcq9ykXvBtRDD+49vJKO2O7NabZPI8T0n4YCk0f12bps7qx2HY13WZV3WZV1KTcoOnTvz+Yb7V88eP3jw4PGzV/dt+OzMuUMVb4XuzrsfbDh+4+SVayRJer3e9P+vXd9/4/i+S+fKS1j3ih17Pjlw5aXI0LxIhwQ6FCIT+sP/QrQQIhmWFsQXVx7sPf2pswS137Hn3f0hgWVEmgxBfUWK5VmKZdnknwykIZMT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',
  '/static/media/happyNeighbour.a6489619.png',
  '/static/media/submission.1786395e.png',
  '/static/media/helping.bdac6d50.png',
  '/static/media/donate.242950ad.png',
];

this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(urlsToCache);
    }),
  );
});

this.addEventListener('fetch', (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((resp) => {
        if (resp) {
          return resp;
        }

        const requestUrl = event.request.clone();

        fetch(requestUrl);
      }),
    );
  }
});

// Clean up caches other than current.
this.addEventListener('activate', (event) => {
  event.waitUntil(
    (async function () {
      const cacheNames = await caches.keys();

      await Promise.all(
        cacheNames
          .filter((cacheName) => {
            const deleteThisCache = cacheName !== CACHE_NAME;

            return deleteThisCache;
          })
          .map((cacheName) => caches.delete(cacheName)),
      );
    }()),
  );
});

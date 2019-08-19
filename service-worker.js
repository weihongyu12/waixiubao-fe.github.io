/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1655e00134488499f664ba7599883619"
  },
  {
    "url": "assets/css/0.styles.5d0c1996.css",
    "revision": "464b21f0fe95ea89be3d5da27b2a03f7"
  },
  {
    "url": "assets/img/ci.6e79138d.svg",
    "revision": "6e79138d2c1f686f690cf20e30f5fe13"
  },
  {
    "url": "assets/img/data-backup.599e47ce.svg",
    "revision": "599e47ce621dd5bd8bf7d33947ec4889"
  },
  {
    "url": "assets/img/data-interaction.1b90e385.png",
    "revision": "1b90e38540f181c53fb51de7f3031d4e"
  },
  {
    "url": "assets/img/file-upload.f2d30162.svg",
    "revision": "f2d3016256a36f4be30406bdd70b657e"
  },
  {
    "url": "assets/img/framework.003085d9.png",
    "revision": "003085d9197dd8567284e88d33e6bdbe"
  },
  {
    "url": "assets/img/http-cache.838d7958.svg",
    "revision": "838d795871a3c1a57c8e374499dd9591"
  },
  {
    "url": "assets/img/mvvm.4fbd3c1b.png",
    "revision": "4fbd3c1bc80d47038f3e66cf1478a1a3"
  },
  {
    "url": "assets/img/passport.865c50aa.svg",
    "revision": "865c50aa5cb2edde3d96756ecbcfdbd1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.98103e8e.js",
    "revision": "cf6445cae0b9e9b44a8435b1e497bab0"
  },
  {
    "url": "assets/js/11.85414391.js",
    "revision": "37aab9abbbc083f40e300ccec6e39a2b"
  },
  {
    "url": "assets/js/12.e49ade69.js",
    "revision": "0f17fd4cf45ca380af171d90365464c0"
  },
  {
    "url": "assets/js/13.a001404a.js",
    "revision": "8afc9f9c87721e0596c4db709460f2e5"
  },
  {
    "url": "assets/js/14.c2da1ebb.js",
    "revision": "4734fbffe538c14118321efe13d580e4"
  },
  {
    "url": "assets/js/15.f6b7e3f7.js",
    "revision": "f09367007a25071758d7eb6a02e5d52f"
  },
  {
    "url": "assets/js/16.33f13782.js",
    "revision": "207e86b26f07506c9bbecc78f0c75ff7"
  },
  {
    "url": "assets/js/17.18999eb1.js",
    "revision": "aa77de6518b6181ff3a7b2dad6960955"
  },
  {
    "url": "assets/js/18.e586e383.js",
    "revision": "e1882334aecc089d1b7ef7c781a70f80"
  },
  {
    "url": "assets/js/19.023927f3.js",
    "revision": "967e30e412081aebfbcff418d8002555"
  },
  {
    "url": "assets/js/2.786d2866.js",
    "revision": "f1fab6d084dacc6da5464e72ff7c2845"
  },
  {
    "url": "assets/js/3.bd1360a0.js",
    "revision": "f3820c2911f0e2b2bb12253613fcd570"
  },
  {
    "url": "assets/js/4.2e0b492a.js",
    "revision": "0af02438559074edaa703a47786676b2"
  },
  {
    "url": "assets/js/5.65392488.js",
    "revision": "efc36eb1fba122b2a170989782b4aa1a"
  },
  {
    "url": "assets/js/6.00dd92b5.js",
    "revision": "9dc170d899a2a8c9bf7d35f4fb9da161"
  },
  {
    "url": "assets/js/7.7a31eeb2.js",
    "revision": "c617c409bbf690cd34f78d299d26cc08"
  },
  {
    "url": "assets/js/8.2f1d4bcb.js",
    "revision": "65e31b80415e5991f01c48dcd947f92b"
  },
  {
    "url": "assets/js/9.9e512cec.js",
    "revision": "687e363f49768b679e6d45b1bccc28e3"
  },
  {
    "url": "assets/js/app.7a9fbc8b.js",
    "revision": "9237d7aed9b2d3b0f54f498c21c848bf"
  },
  {
    "url": "build/index.html",
    "revision": "55bb2c5b916d0737c175c121246ab773"
  },
  {
    "url": "code/index.html",
    "revision": "a01d5a07b691995d3ab332f0d399e3a9"
  },
  {
    "url": "document/example/data-dictionary-mysql/index.html",
    "revision": "10d4125849e7c1b764ffde4170691e7e"
  },
  {
    "url": "document/example/index.html",
    "revision": "8122643e3df482b12a31784e4697eb23"
  },
  {
    "url": "document/example/product-requirements-document/index.html",
    "revision": "66b1338683d2524703e1aeda735bd994"
  },
  {
    "url": "document/example/restful-api/index.html",
    "revision": "7bf3cc31dca35eac14893b1f841ae76f"
  },
  {
    "url": "document/example/vue-components/index.html",
    "revision": "02cc6fe217c8ac2e2d5bab794febe2ef"
  },
  {
    "url": "document/index.html",
    "revision": "6881ae8578ff13053334e9654d11b773"
  },
  {
    "url": "features/index.html",
    "revision": "cbf48d2c4e7a34ef9ccbe511faf29dc2"
  },
  {
    "url": "index.html",
    "revision": "9e5c39548c29eb527fd226efa1fde0aa"
  },
  {
    "url": "restful-api/index.html",
    "revision": "5433273193f8a2b7312a656a64f3c498"
  },
  {
    "url": "test/index.html",
    "revision": "8b510c5d6b0b9bacf1e726831f7b3ae4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

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
    "revision": "fe48b823121d323217d5166e283b0b1a"
  },
  {
    "url": "assets/css/0.styles.90b62c6f.css",
    "revision": "2501c0b41ca7930e1b4c7c485cb90a34"
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
    "url": "assets/js/10.48236b9f.js",
    "revision": "251c5504105bd7f9ba2c9fa347179586"
  },
  {
    "url": "assets/js/11.54905010.js",
    "revision": "20730145620335703908f9014034843a"
  },
  {
    "url": "assets/js/12.c0f4e5f7.js",
    "revision": "4ff8382fc596bf81bce8960d4778794e"
  },
  {
    "url": "assets/js/13.2bfbcb85.js",
    "revision": "bc46e4eab0adfbdb98a33e864bb7a3b9"
  },
  {
    "url": "assets/js/14.039fe173.js",
    "revision": "b8fbf1c24588e421e37418bedcb80087"
  },
  {
    "url": "assets/js/15.4247dd31.js",
    "revision": "1afc7d77887774d536409f7e87c34fa1"
  },
  {
    "url": "assets/js/16.e1f138c0.js",
    "revision": "eaabcafc25b1b662587090aa7f67dbb4"
  },
  {
    "url": "assets/js/17.c7ad2946.js",
    "revision": "df559fce65f5b5c273eac78d0eaeec69"
  },
  {
    "url": "assets/js/18.993556e0.js",
    "revision": "50a6ae0f529559a2de6f1c20d6949001"
  },
  {
    "url": "assets/js/19.023927f3.js",
    "revision": "967e30e412081aebfbcff418d8002555"
  },
  {
    "url": "assets/js/2.9f6098ea.js",
    "revision": "12e457b2bb6550a78d69e01011065de6"
  },
  {
    "url": "assets/js/3.ef9280aa.js",
    "revision": "63ef791c65ad83707717972b027ce1bf"
  },
  {
    "url": "assets/js/4.cef1a59c.js",
    "revision": "5f79ac0865e5ab71f565289619f52e81"
  },
  {
    "url": "assets/js/5.a5c1deb1.js",
    "revision": "b1f18d457aaead9754d0b55686e4c430"
  },
  {
    "url": "assets/js/6.15f1c03d.js",
    "revision": "5cfc5fc4d94b8dde0f44a9f7641f5401"
  },
  {
    "url": "assets/js/7.54ec467a.js",
    "revision": "b13e23180cf7b68266d78df8c1cc6048"
  },
  {
    "url": "assets/js/8.7432fd1d.js",
    "revision": "52df2288c6479f0bff93911d8205d4f9"
  },
  {
    "url": "assets/js/9.8cd23292.js",
    "revision": "239762499d270d852e1a65ec0371ffca"
  },
  {
    "url": "assets/js/app.b3cbc556.js",
    "revision": "d1a53f4ec42aa432270ccb34c5913efd"
  },
  {
    "url": "build/index.html",
    "revision": "70f118961840ec80d748ff5987dc004c"
  },
  {
    "url": "code/index.html",
    "revision": "f8a3862583064ef21d0928897070207c"
  },
  {
    "url": "document/example/data-dictionary-mysql/index.html",
    "revision": "4dd65e0b4ea70f488a5d5718cc764ef3"
  },
  {
    "url": "document/example/index.html",
    "revision": "4db80e36cea8b3bc6d6fd3f54b086a62"
  },
  {
    "url": "document/example/product-requirements-document/index.html",
    "revision": "c67ab144bb82bfd36d5dddf247388c06"
  },
  {
    "url": "document/example/restful-api/index.html",
    "revision": "d64cca8dd5c2af3ad2ff8cc787023883"
  },
  {
    "url": "document/example/vue-components/index.html",
    "revision": "57720a14573feb261cff99c1d7bb4a46"
  },
  {
    "url": "document/index.html",
    "revision": "04aed2d125b4f2591418a577d989bb7b"
  },
  {
    "url": "features/index.html",
    "revision": "aea2bf583016ae07f99a8c2c8eca7abf"
  },
  {
    "url": "index.html",
    "revision": "b07322d245e7f0a860817432f181ce48"
  },
  {
    "url": "restful-api/index.html",
    "revision": "2b090a409a250afd6d0b7e4ca73f3c06"
  },
  {
    "url": "test/index.html",
    "revision": "54ef084d0b0ed807f7cb51ad806d24cb"
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

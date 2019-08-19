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
    "revision": "ce7ef55544bd9347a84c1349513ca01b"
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
    "url": "assets/js/18.e41c049d.js",
    "revision": "64b9f46bdefe43e1b88f903750e43b5f"
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
    "url": "assets/js/app.fb418e6f.js",
    "revision": "dcf8ee4903d7d5152e1fb2655606a5d1"
  },
  {
    "url": "build/index.html",
    "revision": "48612beacdfa947ba0890447143f4d6d"
  },
  {
    "url": "code/index.html",
    "revision": "d3a903ea890858f6b8c5955b85109388"
  },
  {
    "url": "document/example/data-dictionary-mysql/index.html",
    "revision": "5dd0a25df0f3f13f8ceeb8eb01346c1a"
  },
  {
    "url": "document/example/index.html",
    "revision": "c84ae5b32c9cce7f96ce32ab8c70f6d1"
  },
  {
    "url": "document/example/product-requirements-document/index.html",
    "revision": "dcf4c9a4c73e5c9a0463c6e9234b5d72"
  },
  {
    "url": "document/example/restful-api/index.html",
    "revision": "97ae2bceb9519e1c2e92ced4628f0de5"
  },
  {
    "url": "document/example/vue-components/index.html",
    "revision": "2ef550db1f41583582df06ebeff0208d"
  },
  {
    "url": "document/index.html",
    "revision": "0fc8a7b478c0213f5adb53e76aed0875"
  },
  {
    "url": "features/index.html",
    "revision": "f7a4ddd929f45e04fb2a551fe9d4427f"
  },
  {
    "url": "index.html",
    "revision": "28280569182f08d08197c9c29ac9d5a6"
  },
  {
    "url": "restful-api/index.html",
    "revision": "2b6153d9d9f91b3a1397ba1e5066a5cc"
  },
  {
    "url": "test/index.html",
    "revision": "a74b7d2ae8d859979a5b53bbc34a2d02"
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

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
    "revision": "215a00d6b67ef15d49aec08db06f34e5"
  },
  {
    "url": "assets/css/0.styles.cd558dec.css",
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
    "url": "assets/js/10.e5a05d2e.js",
    "revision": "489cb569aaada176045a32f11d36e8ad"
  },
  {
    "url": "assets/js/11.c2461e22.js",
    "revision": "e8fca68e410a3cea4ed438bd45dbde27"
  },
  {
    "url": "assets/js/12.30c61184.js",
    "revision": "deb2208d1b1f589deb51533d57d3d028"
  },
  {
    "url": "assets/js/13.849745d8.js",
    "revision": "4551c97ac01f694f26614587cbdafda1"
  },
  {
    "url": "assets/js/14.4aa73413.js",
    "revision": "2137bf22dc2f0abec4fb5bb4d885875b"
  },
  {
    "url": "assets/js/15.795bc0d0.js",
    "revision": "6fec5ad9216f67835e9b1b3394dd94a7"
  },
  {
    "url": "assets/js/16.4edd0a79.js",
    "revision": "68e93bbda5ebffd5394d027b270c7a0e"
  },
  {
    "url": "assets/js/17.57dc083d.js",
    "revision": "97e561f94a0447d69e714c0e1fd5c1f2"
  },
  {
    "url": "assets/js/18.2dfda4fb.js",
    "revision": "6e463d1dfd24a945cb21c4abfeb6a398"
  },
  {
    "url": "assets/js/19.023927f3.js",
    "revision": "967e30e412081aebfbcff418d8002555"
  },
  {
    "url": "assets/js/2.84ccb2d5.js",
    "revision": "e026ce1011824420f917c8d1bef7211e"
  },
  {
    "url": "assets/js/3.3249ccb8.js",
    "revision": "f1554198acc7f758d6deada3b7e15824"
  },
  {
    "url": "assets/js/4.069a24fd.js",
    "revision": "7c3728676c6691bfdbaf152f52d7a0d9"
  },
  {
    "url": "assets/js/5.57977a5b.js",
    "revision": "139ca25a5f06d45ed51a00183b8b7c5d"
  },
  {
    "url": "assets/js/6.aff1b503.js",
    "revision": "78c0d089759968f439262f8e6bc83d2d"
  },
  {
    "url": "assets/js/7.1e5e7b95.js",
    "revision": "544f37dfe938d0bfc46a7e28d5a8087c"
  },
  {
    "url": "assets/js/8.4818215c.js",
    "revision": "15d67c5f9f80a7692f981adff27d81c2"
  },
  {
    "url": "assets/js/9.1074035d.js",
    "revision": "d3d3a0e1b9c01eaf879c4ce133821de3"
  },
  {
    "url": "assets/js/app.56b201b3.js",
    "revision": "f9a8e65f4cf0f83c2cac03b13cf63566"
  },
  {
    "url": "build/index.html",
    "revision": "0297fea58b7f45e6b8f57e38c2251437"
  },
  {
    "url": "code/index.html",
    "revision": "9edc96e716460be9b59480e43430ee3c"
  },
  {
    "url": "document/example/data-dictionary-mysql/index.html",
    "revision": "11ec3077e2526efbf5c1a789b377e018"
  },
  {
    "url": "document/example/index.html",
    "revision": "e754f84fce42ff7783405d2a6eb4d427"
  },
  {
    "url": "document/example/product-requirements-document/index.html",
    "revision": "c0c2e9ed6473c41724c49487627117ed"
  },
  {
    "url": "document/example/restful-api/index.html",
    "revision": "c7b271a9d59091f2539ff2c2270f5efe"
  },
  {
    "url": "document/example/vue-components/index.html",
    "revision": "4c80f716cb509fd7275cec66d7ed3e90"
  },
  {
    "url": "document/index.html",
    "revision": "2c0027640f14f13b13b5ffafae64cac5"
  },
  {
    "url": "features/index.html",
    "revision": "ee7509ab22eae3d160c98e968606647b"
  },
  {
    "url": "index.html",
    "revision": "2bb4a16ac0ba603ad1fff6ee75db9693"
  },
  {
    "url": "restful-api/index.html",
    "revision": "749433b7df466a946c080a1b02777d3a"
  },
  {
    "url": "test/index.html",
    "revision": "e982b74516053a72de32faaa33f68026"
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

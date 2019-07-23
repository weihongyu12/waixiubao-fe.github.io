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
    "revision": "828a3446fd3e0d4c5f790a1f8f826aa9"
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
    "url": "assets/js/app.ffd069e3.js",
    "revision": "c16e8e7ab485738700d5d5e6c86f99a2"
  },
  {
    "url": "build/index.html",
    "revision": "b827d29f582eda3dd8cf787848e61faa"
  },
  {
    "url": "code/index.html",
    "revision": "c311764e1fa763f602ab88aa250979d6"
  },
  {
    "url": "document/example/data-dictionary-mysql/index.html",
    "revision": "6443e6114ef4d09e928c4d68f7f22a8b"
  },
  {
    "url": "document/example/index.html",
    "revision": "cc4611d8f68c4736f0d5935e9ed59388"
  },
  {
    "url": "document/example/product-requirements-document/index.html",
    "revision": "1326829a0f92f8bbca0ed57a55598ca3"
  },
  {
    "url": "document/example/restful-api/index.html",
    "revision": "9686a0e978c2a742feb55760cc1b7ae5"
  },
  {
    "url": "document/example/vue-components/index.html",
    "revision": "41a46462945b47e3f18566bb297a060b"
  },
  {
    "url": "document/index.html",
    "revision": "e3de1fc3802b90bd3f4e14883610efc9"
  },
  {
    "url": "features/index.html",
    "revision": "206839014871ad610280ada4f83c8b70"
  },
  {
    "url": "index.html",
    "revision": "e456845a1affc89c8e0520eaf1310f66"
  },
  {
    "url": "restful-api/index.html",
    "revision": "20a792fb79763ca7cf6cc03407b4990a"
  },
  {
    "url": "test/index.html",
    "revision": "78b74bf5a760642c95d862d9df175a6d"
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

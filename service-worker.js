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
    "revision": "85a3c83e100febe9aa641f4343b92453"
  },
  {
    "url": "assets/css/0.styles.bb404669.css",
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
    "url": "assets/js/10.8eccb06d.js",
    "revision": "489cb569aaada176045a32f11d36e8ad"
  },
  {
    "url": "assets/js/11.d53e82ac.js",
    "revision": "1a5f9ce5eb559eef86ce2444daf5f560"
  },
  {
    "url": "assets/js/12.d5c4e381.js",
    "revision": "deb2208d1b1f589deb51533d57d3d028"
  },
  {
    "url": "assets/js/13.4caca503.js",
    "revision": "4551c97ac01f694f26614587cbdafda1"
  },
  {
    "url": "assets/js/14.c09a49f4.js",
    "revision": "2137bf22dc2f0abec4fb5bb4d885875b"
  },
  {
    "url": "assets/js/15.5653fbea.js",
    "revision": "6fec5ad9216f67835e9b1b3394dd94a7"
  },
  {
    "url": "assets/js/16.00ca0f79.js",
    "revision": "68e93bbda5ebffd5394d027b270c7a0e"
  },
  {
    "url": "assets/js/17.13d20f31.js",
    "revision": "97e561f94a0447d69e714c0e1fd5c1f2"
  },
  {
    "url": "assets/js/18.0ba7d79f.js",
    "revision": "6e463d1dfd24a945cb21c4abfeb6a398"
  },
  {
    "url": "assets/js/19.54d3b940.js",
    "revision": "967e30e412081aebfbcff418d8002555"
  },
  {
    "url": "assets/js/2.16fbcf30.js",
    "revision": "e026ce1011824420f917c8d1bef7211e"
  },
  {
    "url": "assets/js/3.28801e88.js",
    "revision": "9c82fb1ef4f0ca54a02533d67dcd1e4d"
  },
  {
    "url": "assets/js/4.d264f93e.js",
    "revision": "7c3728676c6691bfdbaf152f52d7a0d9"
  },
  {
    "url": "assets/js/5.9499d5f9.js",
    "revision": "139ca25a5f06d45ed51a00183b8b7c5d"
  },
  {
    "url": "assets/js/6.cf99f977.js",
    "revision": "78c0d089759968f439262f8e6bc83d2d"
  },
  {
    "url": "assets/js/7.78c54bc3.js",
    "revision": "544f37dfe938d0bfc46a7e28d5a8087c"
  },
  {
    "url": "assets/js/8.7f4fcd35.js",
    "revision": "15d67c5f9f80a7692f981adff27d81c2"
  },
  {
    "url": "assets/js/9.bc0f1f3f.js",
    "revision": "d3d3a0e1b9c01eaf879c4ce133821de3"
  },
  {
    "url": "assets/js/app.06854e57.js",
    "revision": "5e857898524bf95a613fd48805c918cc"
  },
  {
    "url": "build/index.html",
    "revision": "6231d0dcab83cea8e6d3214dd512928c"
  },
  {
    "url": "code/index.html",
    "revision": "26e98da2789abf26f7e4578b8fd2b707"
  },
  {
    "url": "document/example/data-dictionary-mysql/index.html",
    "revision": "084e363fa33df034efc95b08be964dcc"
  },
  {
    "url": "document/example/index.html",
    "revision": "ff0e359e2abecc429b81f7abd564c429"
  },
  {
    "url": "document/example/product-requirements-document/index.html",
    "revision": "17ddcb587a4599b31ac6b91efa675ee0"
  },
  {
    "url": "document/example/restful-api/index.html",
    "revision": "b8d5f1d07e6f8b9f6313d57f993059d2"
  },
  {
    "url": "document/example/vue-components/index.html",
    "revision": "0e53b3272e8e776a815625c284f9ea4c"
  },
  {
    "url": "document/index.html",
    "revision": "71bb3ddc6119dc25c8447c9085195bff"
  },
  {
    "url": "features/index.html",
    "revision": "50aeb2c321a11dff49e2aeaaa9141ba9"
  },
  {
    "url": "index.html",
    "revision": "1c13be5777d62ce9f18022d38c15f67e"
  },
  {
    "url": "restful-api/index.html",
    "revision": "b7cb4f4914697a26b0d635183490d7b5"
  },
  {
    "url": "test/index.html",
    "revision": "70f10db6ba3343db0c46815901cd1e7d"
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

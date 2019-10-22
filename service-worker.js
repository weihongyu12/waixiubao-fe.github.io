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
    "revision": "4b4d50afe96764550e03062d9cf0eb4b"
  },
  {
    "url": "assets/css/0.styles.4f64fecc.css",
    "revision": "e4c2ebd4f2382ed2c0310b86db5cef80"
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
    "url": "assets/js/10.530d5af2.js",
    "revision": "5b35b267fef8dbfd6bce8e912b22bfe5"
  },
  {
    "url": "assets/js/11.ad1a12ed.js",
    "revision": "0945274f195ea1acda440b4ee3d7c64d"
  },
  {
    "url": "assets/js/12.6c14c233.js",
    "revision": "e2d527a3fd33494258c30ac134cc93a3"
  },
  {
    "url": "assets/js/13.bdc9e6cb.js",
    "revision": "305d950dec43c29298ee0734304b6c19"
  },
  {
    "url": "assets/js/14.d9f9eba4.js",
    "revision": "6d46d3d9d683064f73e3d1dd5759527a"
  },
  {
    "url": "assets/js/15.c6d96d19.js",
    "revision": "c3fa4525dc82281cd484ca58bcf1e983"
  },
  {
    "url": "assets/js/16.0eff472c.js",
    "revision": "6029542847a6bd9eb171dcc4fd465af4"
  },
  {
    "url": "assets/js/17.41bab65c.js",
    "revision": "d264410fa800fc7ce003fa529b1f8b13"
  },
  {
    "url": "assets/js/18.17b66206.js",
    "revision": "8fb835304f9622f405b18fbd0e4d050c"
  },
  {
    "url": "assets/js/19.9dd2f75b.js",
    "revision": "886719e6c9d2e2752a1a34b2e7a0e09a"
  },
  {
    "url": "assets/js/2.9c7904de.js",
    "revision": "584b8a962720242c12c9f8ce68fea72c"
  },
  {
    "url": "assets/js/3.ec261dc9.js",
    "revision": "5028c96a698add9bac3381d4b9a61100"
  },
  {
    "url": "assets/js/4.01399a86.js",
    "revision": "022c0965cd0562ddf6d08a07316476a8"
  },
  {
    "url": "assets/js/5.8e29705f.js",
    "revision": "da711834d5289ca36fe95a72e4552343"
  },
  {
    "url": "assets/js/6.f65d0484.js",
    "revision": "784ed4e750fc8f029b2645e5fe40758d"
  },
  {
    "url": "assets/js/7.ac456935.js",
    "revision": "ee9951439bd0999d2f80ad95c22211d7"
  },
  {
    "url": "assets/js/8.75dc153a.js",
    "revision": "2d24a290e4f082cefc9649ad710d8c03"
  },
  {
    "url": "assets/js/9.00c45a04.js",
    "revision": "53ccd0a669f325a2f0b9ad78f0331ccf"
  },
  {
    "url": "assets/js/app.8ecca066.js",
    "revision": "2f0ed8418d273119d1fde5af2a84484d"
  },
  {
    "url": "build/index.html",
    "revision": "b003e4ddeda307f7577dae505d9b8055"
  },
  {
    "url": "code/index.html",
    "revision": "7a160eeaa7ea31a9f173185a894ad460"
  },
  {
    "url": "document/example/data-dictionary-mysql/index.html",
    "revision": "9dad8dab2541f4ef2640d19ef7dc0362"
  },
  {
    "url": "document/example/index.html",
    "revision": "2e7bc15cadb14e2510947d194aba72ba"
  },
  {
    "url": "document/example/product-requirements-document/index.html",
    "revision": "6249f2aa0f360b05fa10fac0db874a3f"
  },
  {
    "url": "document/example/restful-api/index.html",
    "revision": "2fa1210e737524ca469d7c6ad7bc1778"
  },
  {
    "url": "document/example/vue-components/index.html",
    "revision": "872d495b6e7ed977f3def906e92ee1d9"
  },
  {
    "url": "document/index.html",
    "revision": "9392c506e1dd6540d7b85e537ecff736"
  },
  {
    "url": "features/index.html",
    "revision": "20a92e59ee8ac7d16c7492b6de5830fb"
  },
  {
    "url": "index.html",
    "revision": "8e3ec249a4c1adef9bba1b7c872b780e"
  },
  {
    "url": "restful-api/index.html",
    "revision": "0a3b0f0d67f9633db8f4626a8f74b9d7"
  },
  {
    "url": "test/index.html",
    "revision": "d863a11f323bc0db0d582887be2feddf"
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

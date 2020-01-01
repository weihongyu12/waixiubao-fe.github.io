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
    "revision": "a70a08a9575496c0b428b55981ae0615"
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
    "url": "assets/js/18.2874ef5b.js",
    "revision": "3155e6e39674148c6fa2393be2bc0dd8"
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
    "url": "assets/js/8.b8ba9232.js",
    "revision": "0ecbe71fba32ab2e6991a9d69ae76f86"
  },
  {
    "url": "assets/js/9.00c45a04.js",
    "revision": "53ccd0a669f325a2f0b9ad78f0331ccf"
  },
  {
    "url": "assets/js/app.6ae12362.js",
    "revision": "a13de1882b6d83b50905eff67a0fab04"
  },
  {
    "url": "build/index.html",
    "revision": "f39024cf2b5795259538e68a9e2cee68"
  },
  {
    "url": "code/index.html",
    "revision": "157a624c7649f62d169539a393d9cd99"
  },
  {
    "url": "document/example/data-dictionary-mysql/index.html",
    "revision": "fa5f08415f997c93ba8918faa0fa9475"
  },
  {
    "url": "document/example/index.html",
    "revision": "cdd46958a3710f2bf07b1a6ed4967cdb"
  },
  {
    "url": "document/example/product-requirements-document/index.html",
    "revision": "d7cc378bd64195d3daff0928239ff447"
  },
  {
    "url": "document/example/restful-api/index.html",
    "revision": "2e7a88e3f2d138fe64a96a86bc9f23a6"
  },
  {
    "url": "document/example/vue-components/index.html",
    "revision": "3b759116c2d2f6371aaf085cbf829929"
  },
  {
    "url": "document/index.html",
    "revision": "718da536ea9f4810380f6675942350df"
  },
  {
    "url": "features/index.html",
    "revision": "f28ede11dd66a8aef8c3b099049a8ec4"
  },
  {
    "url": "index.html",
    "revision": "531cc7937eb137c46b7d2be8c51fb8d9"
  },
  {
    "url": "restful-api/index.html",
    "revision": "36826e6284d2ccac17fff3b2fbc16c85"
  },
  {
    "url": "test/index.html",
    "revision": "3e16b593e9aa946840bf7e4131116a90"
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

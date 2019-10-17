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
    "revision": "44338bfa4dded7449c2b15c17113f4cf"
  },
  {
    "url": "assets/css/0.styles.a3e73c99.css",
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
    "url": "assets/js/10.758f9bd4.js",
    "revision": "cbcfe06efeb4dbaee53e90bf6a53eb1b"
  },
  {
    "url": "assets/js/11.c90335ad.js",
    "revision": "83af62ae34c77ceec9cb9f97c64391a7"
  },
  {
    "url": "assets/js/12.587e79e2.js",
    "revision": "27457145d25e966761694b10249c62f4"
  },
  {
    "url": "assets/js/13.c09b4603.js",
    "revision": "a7621161c0b9c6adcab83e9f17381783"
  },
  {
    "url": "assets/js/14.5efe375e.js",
    "revision": "b1c0704607359ba7b780a5fbb7e99bce"
  },
  {
    "url": "assets/js/15.2b0c62fe.js",
    "revision": "ec2489cea8e22976b9be8d5f4e3dfd6b"
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
    "url": "assets/js/18.07266e49.js",
    "revision": "cb0bd0b84013338753b4cb3e95ed0e89"
  },
  {
    "url": "assets/js/19.9dd2f75b.js",
    "revision": "886719e6c9d2e2752a1a34b2e7a0e09a"
  },
  {
    "url": "assets/js/2.9c7904de.js",
    "revision": "17aa5873603ba131a0c1a3255d4a09ee"
  },
  {
    "url": "assets/js/3.0b8c41a7.js",
    "revision": "58d2ee443207497016d6587decd5d4fe"
  },
  {
    "url": "assets/js/4.4501016e.js",
    "revision": "79296c5f5fef9d25b6cfafdeefad6df4"
  },
  {
    "url": "assets/js/5.66ca651d.js",
    "revision": "6e4bbfcc0f707aae3564c5151ab56d89"
  },
  {
    "url": "assets/js/6.f65d0484.js",
    "revision": "784ed4e750fc8f029b2645e5fe40758d"
  },
  {
    "url": "assets/js/7.2b806245.js",
    "revision": "1292e6fdf2ca76df18f5c2e6762a1fd2"
  },
  {
    "url": "assets/js/8.9fa5374d.js",
    "revision": "1c9f534c288d8d5fa7d30612fa04e781"
  },
  {
    "url": "assets/js/9.54ec7bd6.js",
    "revision": "239762499d270d852e1a65ec0371ffca"
  },
  {
    "url": "assets/js/app.a2b4a0d4.js",
    "revision": "33b7446eb167376bb4ba3b29f7da2731"
  },
  {
    "url": "build/index.html",
    "revision": "201c9d76e85964d0bed2eb7488559c96"
  },
  {
    "url": "code/index.html",
    "revision": "389f77ea123a100444fffde6f5a70770"
  },
  {
    "url": "document/example/data-dictionary-mysql/index.html",
    "revision": "90196d59191a09d8318e1477e181874c"
  },
  {
    "url": "document/example/index.html",
    "revision": "383b1ea68619e578accdbfcced83b444"
  },
  {
    "url": "document/example/product-requirements-document/index.html",
    "revision": "1f00092a2ffea7a427785db0f9605753"
  },
  {
    "url": "document/example/restful-api/index.html",
    "revision": "d93d3fbe4fdce49c2571fe7fbe2c4616"
  },
  {
    "url": "document/example/vue-components/index.html",
    "revision": "aadb7cc74780407a2e22cf56da8f9bf7"
  },
  {
    "url": "document/index.html",
    "revision": "77c139158f40ee66e27b4778f515cc7c"
  },
  {
    "url": "features/index.html",
    "revision": "dbeffbef4dfaee6d3d85774a58d202e7"
  },
  {
    "url": "index.html",
    "revision": "48cc9f6bba9c66cad076233a372ffa5f"
  },
  {
    "url": "restful-api/index.html",
    "revision": "0a276076c2e2040a4aa0c2ab4cd9cc49"
  },
  {
    "url": "test/index.html",
    "revision": "f5105f540b3957709d6d2476b335dfd9"
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

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
    "revision": "c70c8f6213e027e7b197f3a67c48a541"
  },
  {
    "url": "assets/css/0.styles.335a9ac4.css",
    "revision": "797c1805ff63c005e349b9a66f4a4893"
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
    "url": "assets/js/10.47f3ea86.js",
    "revision": "98901c854477e51945bbed52d7011908"
  },
  {
    "url": "assets/js/11.67ed6b50.js",
    "revision": "bb2a0a4e9b304a1e92782660ee098ed3"
  },
  {
    "url": "assets/js/12.2172e6ae.js",
    "revision": "5391ea123d111f2a9a7248922f046006"
  },
  {
    "url": "assets/js/13.58de273c.js",
    "revision": "e118c7dfc06468015a7bde849ab64bdd"
  },
  {
    "url": "assets/js/14.5a9a1894.js",
    "revision": "1fa52ca495e181596bb6c47f1bff4a8f"
  },
  {
    "url": "assets/js/15.8bc84596.js",
    "revision": "04fed460549ee2e9c45108141b8c144b"
  },
  {
    "url": "assets/js/16.3b475bdf.js",
    "revision": "628e6c00f68a2187c6aa94068d0cf03e"
  },
  {
    "url": "assets/js/17.8f3afa2c.js",
    "revision": "4c4f5219a710bd17a1fbe62fd36c16b5"
  },
  {
    "url": "assets/js/18.3f911c3d.js",
    "revision": "2fd2ca368d57225b5a5d49e77e552faf"
  },
  {
    "url": "assets/js/19.08ddc312.js",
    "revision": "886719e6c9d2e2752a1a34b2e7a0e09a"
  },
  {
    "url": "assets/js/2.39559cb8.js",
    "revision": "0311a63bc8cb58b65f4f16106ff41d44"
  },
  {
    "url": "assets/js/3.9b81ea28.js",
    "revision": "d13972b6d9509979ac3fff032dc1b9de"
  },
  {
    "url": "assets/js/4.690dfebd.js",
    "revision": "b133f220ef481eb7b1fd1257fdab5472"
  },
  {
    "url": "assets/js/5.e60a09b1.js",
    "revision": "235388aa338ecd228eb4ea912c09ebb8"
  },
  {
    "url": "assets/js/6.987adecb.js",
    "revision": "35b18ebe9cfc1220b23d5ea6ad6660eb"
  },
  {
    "url": "assets/js/7.443756ef.js",
    "revision": "ee9951439bd0999d2f80ad95c22211d7"
  },
  {
    "url": "assets/js/8.519ef7c9.js",
    "revision": "bd9f06e8d8a4b2ee720d622027960792"
  },
  {
    "url": "assets/js/9.9b1e0c9b.js",
    "revision": "a1bd46347598c91f8137c6f095dca1cd"
  },
  {
    "url": "assets/js/app.5ff6235f.js",
    "revision": "79b26ef7c33b9c2c8b2e5bb87f1ad66f"
  },
  {
    "url": "build/index.html",
    "revision": "36876df36f0d82e41e540455f706ec9c"
  },
  {
    "url": "code/index.html",
    "revision": "86bb57ef7d857282613d6f8f113fbd0b"
  },
  {
    "url": "document/example/data-dictionary-mysql/index.html",
    "revision": "e022d77e3f6f408169bd6a1ecb70bc1d"
  },
  {
    "url": "document/example/index.html",
    "revision": "20c21ab988d928379705c863047bfdfd"
  },
  {
    "url": "document/example/product-requirements-document/index.html",
    "revision": "c2f0cbb2d7c84bd2d31a3f64fed0875f"
  },
  {
    "url": "document/example/restful-api/index.html",
    "revision": "8fbf159a2b183679d3f53f90e9c2ba40"
  },
  {
    "url": "document/example/vue-components/index.html",
    "revision": "ed14c00beafb6817b155430a0b2b8eaf"
  },
  {
    "url": "document/index.html",
    "revision": "066cbc8cf892aa599aa7e162893dfc0c"
  },
  {
    "url": "features/index.html",
    "revision": "22c625292a60b5f6bc78f24f90ab9410"
  },
  {
    "url": "index.html",
    "revision": "2b3d1302f7ea24d86d20a62e00d33cf8"
  },
  {
    "url": "restful-api/index.html",
    "revision": "63fdf3ed5a4bc650bce4132a8ab03022"
  },
  {
    "url": "test/index.html",
    "revision": "d32dd345387426f3b2c1f0cecf8d9014"
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

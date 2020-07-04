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
    "revision": "83684bf85e862ea428de5de63bc3bb4c"
  },
  {
    "url": "assets/css/0.styles.521d31f1.css",
    "revision": "f50d891e96bebb25d60ee75a6a58765c"
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
    "url": "assets/js/10.e49e981c.js",
    "revision": "23c9eea8cf7c532669ed492e72ede757"
  },
  {
    "url": "assets/js/11.b495c04e.js",
    "revision": "77df06b191308d81c7ead7194f9dc76e"
  },
  {
    "url": "assets/js/12.07f8665b.js",
    "revision": "3ba157b252219563e906fecd9efe092f"
  },
  {
    "url": "assets/js/13.61547fe8.js",
    "revision": "fd8039ca3f8d4e362b3e8e772a085c24"
  },
  {
    "url": "assets/js/14.aa9acf7e.js",
    "revision": "40e47ddef51da7ba6d45a5bd64e25d6e"
  },
  {
    "url": "assets/js/15.e5af1fbf.js",
    "revision": "de86770a0c9f3bc87b1373f09a4c456e"
  },
  {
    "url": "assets/js/16.ab30648d.js",
    "revision": "9b499acfb719b7b7f135de912224b68e"
  },
  {
    "url": "assets/js/17.67daa7f6.js",
    "revision": "8b231f408ede710650f504d30d5a6973"
  },
  {
    "url": "assets/js/18.b130ac6d.js",
    "revision": "284d8cafd621793bb928ea206d062d10"
  },
  {
    "url": "assets/js/19.a70381fb.js",
    "revision": "fe7dc0b8d2d4e5dcf7c6e5eaeffad7c6"
  },
  {
    "url": "assets/js/2.93040821.js",
    "revision": "b950b26d67abb31c60eecfd4c1572177"
  },
  {
    "url": "assets/js/3.063211ca.js",
    "revision": "bee733d54a8a2b491bd7903b13e96326"
  },
  {
    "url": "assets/js/4.1fb09417.js",
    "revision": "86eea580f60e98ff10201bb40623f210"
  },
  {
    "url": "assets/js/5.fc185aab.js",
    "revision": "08185dbe6ac2665175de0e2864f4ec36"
  },
  {
    "url": "assets/js/6.25973203.js",
    "revision": "6714bcae2d018e3797c790b17d7baf71"
  },
  {
    "url": "assets/js/7.7296c2cd.js",
    "revision": "e300e9b1adeeb955a4c9367c8fa16175"
  },
  {
    "url": "assets/js/8.2c5b6339.js",
    "revision": "ec319083cbe80c95aaf5e04a0f45c702"
  },
  {
    "url": "assets/js/9.a42a62f8.js",
    "revision": "df62d783386aa1c85d58959d597dd8b0"
  },
  {
    "url": "assets/js/app.d6eea18f.js",
    "revision": "6440c45ee064e932a75d933c621eec81"
  },
  {
    "url": "build/index.html",
    "revision": "ee3dc0040e7f19ecd5aabe55b6f43aa2"
  },
  {
    "url": "code/index.html",
    "revision": "697142831cc5f62169c8c84456950471"
  },
  {
    "url": "document/example/data-dictionary-mysql/index.html",
    "revision": "6e8fae3adec54008807303f7473153fd"
  },
  {
    "url": "document/example/index.html",
    "revision": "2849a9506baabe85ab401909de3374bb"
  },
  {
    "url": "document/example/product-requirements-document/index.html",
    "revision": "249d012f10af265a18e4ec6c90e49c46"
  },
  {
    "url": "document/example/restful-api/index.html",
    "revision": "ea3048ff051722a053338a104d95c64f"
  },
  {
    "url": "document/example/vue-components/index.html",
    "revision": "346a0fc6f3c093e58ef42d274effa7bd"
  },
  {
    "url": "document/index.html",
    "revision": "2dae3f5d68cb281b1ebdd347a60544d2"
  },
  {
    "url": "features/index.html",
    "revision": "e2628a27f304e460dac4bd30db7afb54"
  },
  {
    "url": "index.html",
    "revision": "db8a3dc5654a6fb45ec27f78e86d4851"
  },
  {
    "url": "restful-api/index.html",
    "revision": "5029584159ea119fdf26b23a431225f2"
  },
  {
    "url": "test/index.html",
    "revision": "2266736ca1f69c80e185d00ed5cc64ad"
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

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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9f257c76a42e6c10884f7850283fbe0e"
  },
  {
    "url": "accumulate/index.html",
    "revision": "bef5c7f0750c555b5b8dbb3d0f969e83"
  },
  {
    "url": "algorithm/index.html",
    "revision": "be180e2bb9c23e1fc6d1a86d5f9f009b"
  },
  {
    "url": "assets/css/0.styles.ac25798e.css",
    "revision": "b1c9dadfdcdfb66e34f59b25d8c878d4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.858e80da.js",
    "revision": "59b9e09855a16d382db7d8ff58d74b0d"
  },
  {
    "url": "assets/js/3.7c550f14.js",
    "revision": "fb1e66cb2a0c05156499e1351c9929aa"
  },
  {
    "url": "assets/js/4.5f909aa8.js",
    "revision": "9908f11233d9c73d98498a7dbe013460"
  },
  {
    "url": "assets/js/5.31e04c32.js",
    "revision": "efe375d49d25758c06e874d052537511"
  },
  {
    "url": "assets/js/6.93def9fd.js",
    "revision": "827b1b98858890536011ddcf24752645"
  },
  {
    "url": "assets/js/7.4eff6f2c.js",
    "revision": "4f06051541855034cac021eae5300e90"
  },
  {
    "url": "assets/js/8.12f716cf.js",
    "revision": "96e584c7b994a13aa55791c93c33f368"
  },
  {
    "url": "assets/js/app.0fd53307.js",
    "revision": "f8f003c461d1f51db214c3ceb17f981d"
  },
  {
    "url": "guide.html",
    "revision": "dd57c97c36f69afa2084bbc46da27006"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "7b4a9dd311c20e60f1f67205845deca1"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/photo.jpg",
    "revision": "82b9c7a5a3f405032b1db71a25f67021"
  },
  {
    "url": "index.html",
    "revision": "1e0a836de80315d196b43e2fd71fb48e"
  },
  {
    "url": "others/index.html",
    "revision": "6d06ec60a5e0ffa1f3f3fd13c1fcca0a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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

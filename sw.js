importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "favicon-152.png",
    "revision": "cae6d6e41e6c1c2ebada55eedcb5aa2d"
  },
  {
    "url": "favicon-196.png",
    "revision": "2a13dab4973fbbddbb2b43eae8b616b7"
  },
  {
    "url": "favicon-90opacity.svg",
    "revision": "6cad98736c8a46ee9b3ec64e2b10eff7"
  },
  {
    "url": "favicon.ico",
    "revision": "f83667cb9e74936050acbaf2e5fc9fbc"
  },
  {
    "url": "favicon.svg",
    "revision": "640e720e963d6ed689fd7fd90a586405"
  },
  {
    "url": "index.html",
    "revision": "67ecfed6ed06e0a9af3b3a24b003e1d2"
  },
  {
    "url": "workbox-sw.prod.v2.1.2.js",
    "revision": "685d1ceb6b9a9f94aacf71d6aeef8b51"
  },
  {
    "url": "images/avatar.png",
    "revision": "3b0a335594beeceb4712f2c02c11332e"
  },
  {
    "url": "images/avatar.svg",
    "revision": "fe426f6c699d554348485eb9d97e67e2"
  },
  {
    "url": "images/contact-mail.png",
    "revision": "2f675915c496d5272790f5c6bed93845"
  },
  {
    "url": "images/contact-mail.svg",
    "revision": "14b7a25a19568329231d37d1b6cbb1a1"
  },
  {
    "url": "images/douban-active.png",
    "revision": "7960f1981d7b8474e8fced48f2132f11"
  },
  {
    "url": "images/douban-active.svg",
    "revision": "dc67354057f5d8436afb7d7c458fc58f"
  },
  {
    "url": "images/douban-inactive.png",
    "revision": "987ed141b9d4079b00124af98f5e7fd2"
  },
  {
    "url": "images/douban-inactive.svg",
    "revision": "980c2dde45d08b2d5deb4b2397f92691"
  },
  {
    "url": "images/email-logo.svg",
    "revision": "98a09e284429a18be49884e85a8f62fa"
  },
  {
    "url": "images/external-link.svg",
    "revision": "0ce15b4968f1bd4fd36a95876b81cfa0"
  },
  {
    "url": "images/instagram-active.png",
    "revision": "9b592be24201bd3919529677109af766"
  },
  {
    "url": "images/instagram-active.svg",
    "revision": "57dcbad6c105503706c88d369be6a693"
  },
  {
    "url": "images/instagram-inactive.png",
    "revision": "322ee26f6bbb6e8fe1cb137f6387d6a6"
  },
  {
    "url": "images/instagram-inactive.svg",
    "revision": "22ee0eef26e19f8577770e11061522f9"
  },
  {
    "url": "images/jumbotron-logo.png",
    "revision": "fd52e10041e9bfa62caf19ba1dec3824"
  },
  {
    "url": "images/jumbotron-logo.svg",
    "revision": "074b23b2d97993c3d034c8dfc293f970"
  },
  {
    "url": "images/jumbotron-logo@3x.png",
    "revision": "85e06b5b644ab6af053519e7dc4a974e"
  },
  {
    "url": "images/jumbotron.jpg",
    "revision": "3176c214d3e8fe178cdf1cd698986a42"
  },
  {
    "url": "images/other/01.jpg",
    "revision": "b8df953edec053e5e9d8b4d2fc352faf"
  },
  {
    "url": "images/other/02.jpg",
    "revision": "ad8816982d46d9852f38e50f2ced8c67"
  },
  {
    "url": "images/other/03.jpg",
    "revision": "61ab083fb84c1a22525ae3dfa097efbd"
  },
  {
    "url": "images/other/04.jpg",
    "revision": "c4e475a49da5893fdf3c882b9a5a2757"
  },
  {
    "url": "images/other/05.jpg",
    "revision": "cac037004f693db169a177776e831d51"
  },
  {
    "url": "images/other/06.jpg",
    "revision": "c2105d17728a9ef9b951b174ca8f5f8a"
  },
  {
    "url": "images/other/07.jpg",
    "revision": "90e6737101f7766ab64a19a31058d36f"
  },
  {
    "url": "images/other/08.jpg",
    "revision": "088c4d4ac8c7fb0722d6d8c3db4c7a15"
  },
  {
    "url": "images/other/09.jpg",
    "revision": "d281e0fa3305e92258033911c5632f7a"
  },
  {
    "url": "images/other/10.jpg",
    "revision": "32a93f45dd6c1368e85e3c080cbcf3ac"
  },
  {
    "url": "images/other/11.jpg",
    "revision": "2878a3b893bf5f1bda18cfa86c3efa7c"
  },
  {
    "url": "images/other/12.jpg",
    "revision": "7c94d43c38614cdda8197b679b9bc592"
  },
  {
    "url": "images/other/13.jpg",
    "revision": "999c618b4b71cb1257dd4009b00fccc4"
  },
  {
    "url": "images/other/14.jpg",
    "revision": "f1b655a3ae2c71120da2e7dcd1939263"
  },
  {
    "url": "images/other/15.jpg",
    "revision": "cef07bb223d4b2af4005ae21d81fa61f"
  },
  {
    "url": "images/other/16.jpg",
    "revision": "0b9b56cff550b0a24d2e7a8f592b6307"
  },
  {
    "url": "images/other/17.jpg",
    "revision": "826eda690cbc2a694933b29e6dd7ead0"
  },
  {
    "url": "images/other/18.jpg",
    "revision": "76b154c76b10741745a38b5a50a66314"
  },
  {
    "url": "images/other/19.jpg",
    "revision": "f6dad66722eb407e85fcbdc339a27abc"
  },
  {
    "url": "images/other/20.jpg",
    "revision": "1db90aff505e8787c1f8dc9c130e5864"
  },
  {
    "url": "images/other/21.jpg",
    "revision": "61ec9620bfd0f7887810469ea5019288"
  },
  {
    "url": "images/other/22.jpg",
    "revision": "4fd4d8ddd31c0b055fa84b9780a3ceb8"
  },
  {
    "url": "images/other/23.jpg",
    "revision": "834dad21164266790c6e8fe3b6aab8a9"
  },
  {
    "url": "images/other/24.jpg",
    "revision": "6831c09e3b83ced1965cede87adf2383"
  },
  {
    "url": "images/other/little-planet.jpg",
    "revision": "3463a0f5a7298f937d693427ac28f2dd"
  },
  {
    "url": "images/other/logo-blur2.jpg",
    "revision": "54b05c45189e7aa02cd3cd86069380e1"
  },
  {
    "url": "images/other/logo-change.jpg",
    "revision": "98cb983688bdb9fb4240655bb73d6774"
  },
  {
    "url": "images/other/logo-mo.jpg",
    "revision": "0f7670245b848cb9a2fc5fd35618c1dc"
  },
  {
    "url": "images/other/logo-museum-1.jpg",
    "revision": "eaa8871fda08d49c2b9a3c91d92f1a9c"
  },
  {
    "url": "images/other/logo-museum-2.jpg",
    "revision": "5501923685471f51aa4dae1a769b90c8"
  },
  {
    "url": "images/other/logo-museum.jpg",
    "revision": "776b8e5f80ef38c066edcb0d6bb29a46"
  },
  {
    "url": "images/other/logo-photography-1.jpg",
    "revision": "d50acefb9cb1918a366af3bb7e4bc80a"
  },
  {
    "url": "images/other/logo-photography.jpg",
    "revision": "a5497716aa514d7c04464d1106e13562"
  },
  {
    "url": "images/other/logo-shape.jpg",
    "revision": "cd1bc9b76d3aaf1e25ddf2206989b6df"
  },
  {
    "url": "images/other/sketch-1.jpg",
    "revision": "4325c16ecc5463f1863727f0d6c3639d"
  },
  {
    "url": "images/other/sketch.jpg",
    "revision": "317f99bfc48d42ff9e650af57761e904"
  },
  {
    "url": "images/other/stamp-01.jpg",
    "revision": "df9652463cd85ce2fe092dba4e202c7c"
  },
  {
    "url": "images/other/stamp.jpg",
    "revision": "09770c5560ddf481ade4a76a735b23a6"
  },
  {
    "url": "images/other/whale.jpg",
    "revision": "0825e3b6c6100919302e040a1f22a63d"
  },
  {
    "url": "images/other/yacht-center-1.jpg",
    "revision": "f04528769f8b81a981c20d3d05aec3de"
  },
  {
    "url": "images/other/yacht-center-2.jpg",
    "revision": "9e88fac830da146a370ad26c69d3bb41"
  },
  {
    "url": "images/other/yacht-center-3.jpg",
    "revision": "22a4f7d93badecc83c80c4b344329184"
  },
  {
    "url": "images/other/yacht-center-4.jpg",
    "revision": "4f5a70bb11eb812d7b77f16bde3db1d8"
  },
  {
    "url": "images/other/yacht-center.jpg",
    "revision": "fbf4fde3d8089530cf266acaf10ac978"
  },
  {
    "url": "images/timeline-plane.svg",
    "revision": "3de8e21f9120352b255b25205817c6f0"
  },
  {
    "url": "images/timeline-triangle.svg",
    "revision": "172937517311dfa6aec186054d2c4281"
  },
  {
    "url": "images/work/7up.jpg",
    "revision": "4e6c13a3bcd70edd7eec686aa8c43809"
  },
  {
    "url": "images/work/banner-design.jpg",
    "revision": "dd9019d8be5403041e0396b77e364c4f"
  },
  {
    "url": "images/work/chat-app.jpg",
    "revision": "0b887a2e77f5f966eebf7b761dea70cf"
  },
  {
    "url": "images/work/dashboard.jpg",
    "revision": "9e9fa75ddb8a80166c99aeef0eb68271"
  },
  {
    "url": "images/work/futu.jpg",
    "revision": "1b2d4754495558c3fc70d017a1c8c602"
  },
  {
    "url": "images/work/lalaland.jpg",
    "revision": "974922279795b66c3978390bd40bea29"
  },
  {
    "url": "images/work/portfolio.jpg",
    "revision": "079c5d20708a8fa3b1f5f62dc1cc32a3"
  },
  {
    "url": "images/work/wenjianyou.jpg",
    "revision": "a6f4b5d136f5c4c24a501ee8b1212cdd"
  },
  {
    "url": "images/zcool-active.png",
    "revision": "025cf8e84f5167e27aad684573585ea5"
  },
  {
    "url": "images/zcool-active.svg",
    "revision": "4990b48ac71d86ee7d444c284bc3ea20"
  },
  {
    "url": "images/zcool-inactive.png",
    "revision": "301eb4841824c5606065723b5a97b3dd"
  },
  {
    "url": "images/zcool-inactive.svg",
    "revision": "56046483acfe1be1cfc700d541530ace"
  },
  {
    "url": "smooth-scroll/dist/js/smooth-scroll.polyfills.min.js",
    "revision": "dadb7b9d2bdcad038d63a2e853344806"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);

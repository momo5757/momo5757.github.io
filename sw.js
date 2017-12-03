---
layout: null
title: wzhn.me
---
importScripts('sw-toolbox/sw-toolbox.js');
const fileManifest = [{% for file in site.static_files %}{% if file.extname == ".jpg" or file.extname == ".png" or file.extname == ".svg" or file.extname == ".ico" %}
  "{{file.path | slice: 1, 999}}",{% endif %}{% endfor %}
  "index.html",
  "sw/workbox-sw.prod.v2.1.2.js",
  "smooth-scroll/dist/js/smooth-scroll.polyfills.min.js"
];
toolbox.router.default = toolbox.cacheFirst;
toolbox.precache(fileManifest);

---
layout: null
title: wzhn.me
---
importScripts('workbox-sw/workbox-sw.js');
const fileManifest = [{% for f in site.precache %}
  {% assign i = site.static_files | where: "path", f %}{ url: "{{i[0].path}}", revision: "{{i[0].modified_time | date: '%s'}}" },{% endfor %}
  { url: "/index.html", revision: "{{'now' | date: '%s'}}" }
];

const workboxSW = new WorkboxSW({clientsClaim: true, skipWaiting: true});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\/index\.html/, workboxSW.strategies.networkFirst());
workboxSW.router.registerRoute(/\.(?:png|gif|jpg|jpeg|svg|ico|js)$/, workboxSW.strategies.cacheFirst());

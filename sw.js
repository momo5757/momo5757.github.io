---
layout: null
title: wzhn.me
---
importScripts('workbox-sw/workbox-sw.js');
importScripts('workbox-sw/workbox-core.prod.js');
importScripts('workbox-sw/workbox-expiration.prod.js');
importScripts('workbox-sw/workbox-broadcast-update.prod.js');
importScripts('workbox-sw/workbox-precaching.prod.js');
importScripts('workbox-sw/workbox-routing.prod.js');
importScripts('workbox-sw/workbox-strategies.prod.js');
const minimalFiles = [{% for f in site.precache %}
  {% assign i = site.static_files | where: "path", f %}"{{i[0].path}}",{% endfor %}
  { url: "/index.html", revision: "{{'now' | date: '%s'}}" }
];
const allFiles = [{% for file in site.static_files %}{% if file.extname == ".jpg" or file.extname == ".png" or file.extname == ".svg" or file.extname == ".ico" %}
  "{{file.path}}",{% endif %}{% endfor %}
];

workbox.core.clientsClaim();
workbox.core.skipWaiting();
//workbox.setConfig({debug: true});
//workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);
workbox.core.setCacheNameDetails({prefix: 'workbox', suffix: 'wzhn.me', precache: 'cache'});
// workbox.precaching.precacheAndRoute(minimalFiles);
workbox.routing.registerRoute(/\/$|\.(?:html|json)$/, new workbox.strategies.StaleWhileRevalidate({
  plugins: [
    new workbox.broadcastUpdate.BroadcastUpdatePlugin()
  ]
}));
workbox.routing.registerRoute(/\.(?:png|gif|jpg|jpeg|svg|ico|js)$/, new workbox.strategies.CacheFirst({
  cacheName: 'workbox-cache-wzhn.me',
  plugins: [
    new workbox.expiration.ExpirationPlugin({
      maxAgeSeconds: 365 * 24 * 60 * 60 // 365 Days
    })
  ]
}));

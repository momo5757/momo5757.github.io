module.exports = {
  "globDirectory": "_site/",
  "globPatterns": [
    "*.{png,svg,ico,jpg,js}",
    "images/**/*.{png,svg,ico,jpg}",
    "smooth-scroll/dist/js/smooth-scroll.polyfills.min.js"
  ],
  "swDest": "./sw.js",
  "globIgnores": [
    "workbox-cli-config.js",
    "gulpfile.js",
    "sw.js"
  ]
};

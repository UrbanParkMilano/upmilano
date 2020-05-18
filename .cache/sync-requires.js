const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-shows-js": hot(preferDefault(require("/Users/k/Desktop/upmilano/src/templates/shows.js"))),
  "component---src-templates-news-js": hot(preferDefault(require("/Users/k/Desktop/upmilano/src/templates/news.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/k/Desktop/upmilano/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/k/Desktop/upmilano/src/pages/404.js"))),
  "component---src-pages-contatti-js": hot(preferDefault(require("/Users/k/Desktop/upmilano/src/pages/contatti.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/k/Desktop/upmilano/src/pages/index.js"))),
  "component---src-pages-info-js": hot(preferDefault(require("/Users/k/Desktop/upmilano/src/pages/info.js"))),
  "component---src-pages-lineupandtickets-js": hot(preferDefault(require("/Users/k/Desktop/upmilano/src/pages/lineupandtickets.js"))),
  "component---src-pages-location-js": hot(preferDefault(require("/Users/k/Desktop/upmilano/src/pages/location.js"))),
  "component---src-pages-news-js": hot(preferDefault(require("/Users/k/Desktop/upmilano/src/pages/news.js"))),
  "component---src-pages-privacycookyepolicy-js": hot(preferDefault(require("/Users/k/Desktop/upmilano/src/pages/privacycookyepolicy.js")))
}


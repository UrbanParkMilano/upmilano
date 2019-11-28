const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-shows-js": hot(preferDefault(require("/Users/k/Desktop/sit/hello-gatsby/src/templates/shows.js"))),
  "component---src-templates-news-js": hot(preferDefault(require("/Users/k/Desktop/sit/hello-gatsby/src/templates/news.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/k/Desktop/sit/hello-gatsby/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/k/Desktop/sit/hello-gatsby/src/pages/404.js"))),
  "component---src-pages-contatti-js": hot(preferDefault(require("/Users/k/Desktop/sit/hello-gatsby/src/pages/contatti.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/k/Desktop/sit/hello-gatsby/src/pages/index.js"))),
  "component---src-pages-info-js": hot(preferDefault(require("/Users/k/Desktop/sit/hello-gatsby/src/pages/info.js"))),
  "component---src-pages-lineupandtickets-js": hot(preferDefault(require("/Users/k/Desktop/sit/hello-gatsby/src/pages/lineupandtickets.js"))),
  "component---src-pages-location-js": hot(preferDefault(require("/Users/k/Desktop/sit/hello-gatsby/src/pages/location.js"))),
  "component---src-pages-news-js": hot(preferDefault(require("/Users/k/Desktop/sit/hello-gatsby/src/pages/news.js")))
}


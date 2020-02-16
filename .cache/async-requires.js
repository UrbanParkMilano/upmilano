// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-shows-js": () => import("../src/templates/shows.js" /* webpackChunkName: "component---src-templates-shows-js" */),
  "component---src-templates-news-js": () => import("../src/templates/news.js" /* webpackChunkName: "component---src-templates-news-js" */),
  "component---src-pages-404-js": () => import("../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-contatti-js": () => import("../src/pages/contatti.js" /* webpackChunkName: "component---src-pages-contatti-js" */),
  "component---src-pages-index-js": () => import("../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-info-js": () => import("../src/pages/info.js" /* webpackChunkName: "component---src-pages-info-js" */),
  "component---src-pages-lineupandtickets-js": () => import("../src/pages/lineupandtickets.js" /* webpackChunkName: "component---src-pages-lineupandtickets-js" */),
  "component---src-pages-location-js": () => import("../src/pages/location.js" /* webpackChunkName: "component---src-pages-location-js" */),
  "component---src-pages-news-js": () => import("../src/pages/news.js" /* webpackChunkName: "component---src-pages-news-js" */)
}


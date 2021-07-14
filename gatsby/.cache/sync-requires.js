const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/timoengelvaart/Documents/Websites/Kim-Gatsby/gatsby/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/timoengelvaart/Documents/Websites/Kim-Gatsby/gatsby/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/timoengelvaart/Documents/Websites/Kim-Gatsby/gatsby/src/pages/index.js"))),
  "component---src-pages-kim-js": hot(preferDefault(require("/Users/timoengelvaart/Documents/Websites/Kim-Gatsby/gatsby/src/pages/kim.js")))
}


// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/home/rick/MyPrograms/WebDev/rboshae.github.io/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/rick/MyPrograms/WebDev/rboshae.github.io/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/rick/MyPrograms/WebDev/rboshae.github.io/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/rick/MyPrograms/WebDev/rboshae.github.io/src/pages/index.js")),
  "component---src-pages-my-files-js": preferDefault(require("/home/rick/MyPrograms/WebDev/rboshae.github.io/src/pages/my-files.js")),
  "component---src-pages-blog-js": preferDefault(require("/home/rick/MyPrograms/WebDev/rboshae.github.io/src/pages/blog.js"))
}

exports.json = {
  "layout-index.json": require("/home/rick/MyPrograms/WebDev/rboshae.github.io/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/home/rick/MyPrograms/WebDev/rboshae.github.io/.cache/json/dev-404-page.json"),
  "404.json": require("/home/rick/MyPrograms/WebDev/rboshae.github.io/.cache/json/404.json"),
  "index.json": require("/home/rick/MyPrograms/WebDev/rboshae.github.io/.cache/json/index.json"),
  "my-files.json": require("/home/rick/MyPrograms/WebDev/rboshae.github.io/.cache/json/my-files.json"),
  "404-html.json": require("/home/rick/MyPrograms/WebDev/rboshae.github.io/.cache/json/404-html.json"),
  "blog.json": require("/home/rick/MyPrograms/WebDev/rboshae.github.io/.cache/json/blog.json")
}
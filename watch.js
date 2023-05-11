const fs = require('fs')
const build = require('./build')

const markdownSrc = process.argv[2]
const htmlBuildDest = process.argv[3]
const buildHtml = () => build(markdownSrc, htmlBuildDest)

// build first then watch
buildHtml()
fs.watch(markdownSrc, {}, buildHtml)

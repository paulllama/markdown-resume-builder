const build = require('./build')

const markdownSrc = process.argv[2]
const htmlBuildDest = process.argv[3]
build(markdownSrc, htmlBuildDest)

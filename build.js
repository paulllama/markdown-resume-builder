const showdown  = require('showdown')
const fs = require('fs')

const BASE_TEMPLATE_PATH = './base.html'
const CONTENTS_KEY = '{{contents}}'

const build = (markdownSrc, dest) => {
    if (!markdownSrc) {
        console.log('markdown source not provided')
        return
    }
    const htmlDest = dest || markdownSrc.replace('.md', '.html')

    const mdConverter = new showdown.Converter({ 
        metadata: true,
        tables: true,
        parseImgDimensions: true,
        emoji: true,
    })

    const markdown = fs.readFileSync(markdownSrc).toString()
    const body = mdConverter.makeHtml(markdown)

    const baseTemplate = fs.readFileSync(BASE_TEMPLATE_PATH).toString()
    const html = baseTemplate.replace(CONTENTS_KEY, body)

    fs.writeFileSync(htmlDest, html)
    console.log(`wrote html to ${htmlDest}`)
}

module.exports = build
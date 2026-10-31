import { readFile, writeFile, readdir } from 'node:fs/promises'
import path from 'node:path'

const output = process.argv[2]
if (!output) throw new Error('Pass the destination HTML path.')
let html = await readFile('dist/index.html', 'utf8')
const assets = await readdir('dist/assets')
const jsName = assets.find(name => name.endsWith('.js'))
const cssName = assets.find(name => name.endsWith('.css'))
if (!jsName || !cssName) throw new Error('Build the portfolio first.')
let javascript = await readFile(path.join('dist/assets', jsName), 'utf8')
const css = await readFile(path.join('dist/assets', cssName), 'utf8')

for (const asset of assets.filter(name => /\.(?:jpg|png|svg|webp)$/.test(name))) {
  const mime = asset.endsWith('.svg') ? 'image/svg+xml' : asset.endsWith('.jpg') ? 'image/jpeg' : `image/${asset.split('.').pop()}`
  const data = `data:${mime};base64,${(await readFile(path.join('dist/assets', asset))).toString('base64')}`
  javascript = javascript.replaceAll(`/assets/${asset}`, data)
}
const favicon = `data:image/jpeg;base64,${(await readFile('dist/favicon.jpg')).toString('base64')}`
html = html.replace('/favicon.jpg', favicon)
html = html.replace(/<link\b[^>]*rel="stylesheet"[^>]*>/g, () => `<style>${css}</style>`)
html = html.replace(/<script\b[^>]*src="[^"]+"[^>]*><\/script>/g, '')
html = html.replace('</body>', () => `<script type="module">${javascript.replace(/<\/script/gi, '<\\/script')}</script></body>`)
const inlineScript = html.match(/<script type="module">([\s\S]*?)<\/script>/)?.[1]
if (!inlineScript) throw new Error('Preview script was not embedded.')
new Function(inlineScript)
if (/\b(?:src|href)="\/assets\//.test(html)) throw new Error('Preview still references a local asset.')
await writeFile(output, html)
console.log(`Preview written to ${path.resolve(output)}`)

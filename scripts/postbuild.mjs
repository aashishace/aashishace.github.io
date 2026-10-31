import { copyFile, mkdir } from 'node:fs/promises'

// Preserve direct legal-page URLs on GitHub Pages, which has no SPA rewrites.
for (const route of ['privacy-policy', 'terms-and-conditions', 'refund-policy']) {
  await mkdir(`dist/${route}`, { recursive: true })
  await copyFile('dist/index.html', `dist/${route}/index.html`)
}
await copyFile('dist/index.html', 'dist/404.html')

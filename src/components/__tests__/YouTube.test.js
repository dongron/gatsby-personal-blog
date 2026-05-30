/**
 * Zero-dependency render tests for the YouTube landing section.
 *
 * The repo has no test framework, so this uses Node's built-in `node:test`
 * runner plus `react-dom/server` to assert on the static render output.
 * A require hook compiles our JSX `.js` source files to CommonJS via @babel/core
 * before they are required.
 *
 * Limitation (accepted): static render only. The click -> iframe interaction
 * cannot be exercised here because there is no DOM/event environment.
 *
 * Run: `node --test src/components/__tests__/YouTube.test.js`
 */
const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const fs = require('node:fs')
const Module = require('node:module')
const babel = require('@babel/core')
const React = require('react')
const { renderToStaticMarkup } = require('react-dom/server')

// Transpile our own .js source (which contains JSX) to CommonJS on require.
const nodeModules = `${path.sep}node_modules${path.sep}`
const originalJsLoader = Module._extensions['.js']
Module._extensions['.js'] = function (module, filename) {
  if (filename.includes(nodeModules)) {
    return originalJsLoader(module, filename)
  }
  const source = fs.readFileSync(filename, 'utf8')
  const { code } = babel.transformSync(source, {
    filename,
    babelrc: false,
    configFile: false,
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      ['@babel/preset-react', { runtime: 'classic' }],
    ],
  })
  module._compile(code, filename)
}

const { ThemeProvider } = require('styled-components')
const {
  default: YouTube,
  buildEmbedUrl,
  buildThumbnailUrl,
} = require('../YouTube')
const theme = require('../../styles/theme').default

const sampleContent = {
  title: 'YouTube',
  subtitle: 'I break down software and AI.',
  videos: [
    { id: 'ToxZJ6e2AZU', title: 'First video title' },
    { id: 'OphMn16HG58', title: 'Second video title' },
    { id: 'PEU4xZMyXXg', title: 'Third video title' },
  ],
}

const render = (props) =>
  renderToStaticMarkup(
    React.createElement(
      ThemeProvider,
      { theme },
      React.createElement(YouTube, props)
    )
  )

test('renders nothing when there are no videos', () => {
  assert.equal(render({ content: { videos: [] } }), '')
  assert.equal(render({ content: {} }), '')
  assert.equal(render({}), '')
})

test('renders the section title and subtitle', () => {
  const html = render({ content: sampleContent })
  assert.match(html, /YouTube/)
  assert.match(html, /I break down software and AI\./)
})

test('renders one card per video with correct thumbnail src and alt', () => {
  const html = render({ content: sampleContent })
  for (const video of sampleContent.videos) {
    assert.ok(
      html.includes(`https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`),
      `missing thumbnail for ${video.id}`
    )
    assert.ok(
      html.includes(`alt="${video.title}"`),
      `missing alt text for ${video.id}`
    )
  }
})

test('renders a play-button facade and no iframe before interaction', () => {
  const html = render({ content: sampleContent })
  const buttonCount = (html.match(/<button/g) || []).length
  assert.equal(buttonCount, 3, 'one facade button per video')
  assert.match(html, /aria-label="Play video: First video title"/)
  assert.ok(!html.includes('<iframe'), 'no iframe in initial markup')
  assert.ok(
    !html.includes('youtube-nocookie.com'),
    'no third-party embed before click'
  )
})

test('buildEmbedUrl builds a privacy-friendly autoplay embed URL', () => {
  assert.equal(
    buildEmbedUrl('ToxZJ6e2AZU'),
    'https://www.youtube-nocookie.com/embed/ToxZJ6e2AZU?autoplay=1'
  )
})

test('buildThumbnailUrl builds a 16:9 (mqdefault) thumbnail URL', () => {
  assert.equal(
    buildThumbnailUrl('ToxZJ6e2AZU'),
    'https://i.ytimg.com/vi/ToxZJ6e2AZU/mqdefault.jpg'
  )
})

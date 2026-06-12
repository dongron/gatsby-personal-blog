/**
 * Zero-dependency render tests for the site footer.
 *
 * Same approach as YouTube.test.js: Node's built-in `node:test` runner plus
 * `react-dom/server`, with a require hook that compiles JSX `.js` sources via
 * @babel/core. `gatsby` is mocked so `Link` renders as a plain anchor.
 *
 * Run: `node --test src/components/__tests__/Footer.test.js`
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

// Footer imports `Link` from gatsby, which cannot load outside a gatsby
// build. Replace it with a plain anchor for static rendering.
const originalLoad = Module._load
Module._load = function (request, parent, isMain) {
  if (request === 'gatsby') {
    return {
      Link: ({ to, children, activeStyle, ...rest }) =>
        React.createElement('a', { href: to, ...rest }, children),
    }
  }
  return originalLoad.call(this, request, parent, isMain)
}

const { ThemeProvider, ServerStyleSheet } = require('styled-components')
const { default: Footer } = require('../Footer')
const { default: serviceLinks } = require('../../utils/serviceLinks')
const theme = require('../../styles/theme').default

const render = (props) =>
  renderToStaticMarkup(
    React.createElement(
      ThemeProvider,
      { theme },
      React.createElement(Footer, props)
    )
  )

const renderCss = (props) => {
  const sheet = new ServerStyleSheet()
  try {
    renderToStaticMarkup(
      sheet.collectStyles(
        React.createElement(
          ThemeProvider,
          { theme },
          React.createElement(Footer, props)
        )
      )
    )
    return sheet.getStyleTags().replace(/\s+/g, '')
  } finally {
    sheet.seal()
  }
}

test('serviceLinks lists 13 unique landing pages with canonical paths', () => {
  assert.equal(serviceLinks.length, 13)
  const paths = serviceLinks.map((service) => service.to)
  assert.equal(new Set(paths).size, paths.length, 'paths must be unique')
  for (const service of serviceLinks) {
    assert.ok(service.label, `label missing for ${service.to}`)
    assert.match(
      service.to,
      /^\/[a-z0-9-]+\/$/,
      `path must have leading and trailing slash: ${service.to}`
    )
  }
})

test('default footer links every service landing page', () => {
  const html = render({})
  for (const service of serviceLinks) {
    assert.ok(
      html.includes(`href="${service.to}"`),
      `missing link to ${service.to}`
    )
    assert.ok(html.includes(service.label), `missing anchor ${service.label}`)
  }
  assert.match(html, /Services/)
})

test('footer columns stack on mobile and only stop wrapping at medium', () => {
  const css = renderCss({})
  const mediumQuery = `@mediascreenand(min-width:${theme.responsive.medium})`
  assert.ok(css.includes(mediumQuery), 'medium media query missing')
  const nowrapIndex = css.indexOf('flex-wrap:nowrap')
  assert.ok(nowrapIndex !== -1, 'nowrap rule missing')
  assert.ok(
    nowrapIndex > css.indexOf(mediumQuery),
    'nowrap must apply from the medium breakpoint, not earlier'
  )
})

test('services list splits into two columns from the small breakpoint', () => {
  const css = renderCss({})
  const smallQuery = `@mediascreenand(min-width:${theme.responsive.small})`
  assert.ok(css.includes(smallQuery), 'small media query missing')
  assert.ok(css.includes('column-count:2'), 'two-column services list missing')
})

test('polishLanding footer renders no service links', () => {
  const html = render({ variant: 'polishLanding' })
  for (const service of serviceLinks) {
    assert.ok(
      !html.includes(`href="${service.to}"`),
      `unexpected link to ${service.to}`
    )
  }
})

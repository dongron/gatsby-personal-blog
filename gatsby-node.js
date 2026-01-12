const config = require('./src/utils/siteConfig')
const path = require(`path`)

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type ContentfulPost implements Node {
      tags: [ContentfulTag] @link(by: "id", from: "tags___NODE")
    }
  `
  createTypes(typeDefs)
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const loadPosts = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPost(sort: { publishDate: DESC }, limit: 10000) {
          edges {
            node {
              slug
              publishDate
            }
          }
        }
      }
    `).then((result) => {
      const posts = result.data.allContentfulPost.edges
      const postsPerFirstPage = config.postsPerHomePage
      const postsPerPage = config.postsPerPage
      const numPages = Math.ceil(
        posts.slice(postsPerFirstPage).length / postsPerPage
      )

      // Create main home page
      createPage({
        path: `/`,
        component: path.resolve(`./src/templates/index.js`),
        context: {
          limit: postsPerFirstPage,
          skip: 0,
          numPages: numPages + 1,
          currentPage: 1,
        },
      })

      // Main blog page
      createPage({
        path: `/blog/`,
        component: path.resolve(`./src/templates/blog.js`),
        context: {
          contentType: 'blog',
          limit: postsPerFirstPage,
          skip: 0,
          numPages: numPages + 1,
          currentPage: 1,
        },
      })

      // Create additional pagination on home page if needed
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: `/blog/${i + 2}/`,
          component: path.resolve(`./src/templates/blog.js`),
          context: {
            contentType: 'blog',
            limit: postsPerPage,
            skip: i * postsPerPage + postsPerFirstPage,
            numPages: numPages + 1,
            currentPage: i + 2,
          },
        })
      })

      // Create each individual post
      posts.forEach((edge, i) => {
        if (!edge.node || !edge.node.slug) return
        const prev = i === 0 ? null : posts[i - 1].node
        const next = i === posts.length - 1 ? null : posts[i + 1].node
        createPage({
          path: `/blog/${edge.node.slug}/`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: edge.node.slug,
            prev,
            next,
          },
        })
      })

      // Main photoblog page
      createPage({
        path: `/photoblog/`,
        component: path.resolve(`./src/templates/photoblog.js`),
        context: {
          contentType: 'photoblog',
          limit: postsPerFirstPage,
          skip: 0,
          numPages: numPages + 1,
          currentPage: 1,
        },
      })

      resolve()
    })
  })

  const loadTags = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulTag {
          edges {
            node {
              slug
              post {
                id
              }
            }
          }
        }
      }
    `).then((result) => {
      const tags = result.data.allContentfulTag.edges
      const postsPerPage = config.postsPerPage

      // Create tag pages with pagination if needed
      tags.map(({ node }) => {
        const totalPosts = (node.post && node.post.length) || 0
        const numPages = Math.ceil(totalPosts / postsPerPage)
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path:
              i === 0 ? `/tag/${node.slug}/` : `/tag/${node.slug}/${i + 1}/`,
            component: path.resolve(`./src/templates/tag.js`),
            context: {
              slug: node.slug,
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages: numPages,
              currentPage: i + 1,
            },
          })
        })
      })
      resolve()
    })
  })

  const loadPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPage {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then((result) => {
      const pages = result.data.allContentfulPage.edges
      pages.map(({ node }) => {
        createPage({
          path: `${node.slug}/`,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  // Load portfolio page (no individual item pages - all content displayed on main portfolio page)
  const loadPortfolio = new Promise((resolve, reject) => {
    // Create portfolio index page
    createPage({
      path: `/portfolio/`,
      component: path.resolve(`./src/templates/portfolio.js`),
      context: {},
    })
    resolve()
  })

  return Promise.all([loadPosts, loadTags, loadPages, loadPortfolio])
}

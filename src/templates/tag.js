import React from 'react'
import { graphql } from 'gatsby'
import sortBy from 'lodash/sortBy'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Card from '../components/Card'
import CardList from '../components/CardList'
import PageTitle from '../components/PageTitle'
import Pagination from '../components/Pagination'
import Container from '../components/Container'
import SEO from '../components/SEO'

const TagTemplate = ({ data, pageContext }) => {
  const posts = sortBy(data.contentfulTag.post, 'publishDate').reverse()

  const { title, slug } = data.contentfulTag
  const numberOfPosts = posts.length
  const skip = pageContext.skip
  const limit = pageContext.limit
  const currentPage = pageContext.currentPage
  const isFirstPage = currentPage === 1
  const pageTitle = isFirstPage
    ? `Tag: ${title} - ${config.siteTitle}`
    : `Tag: ${title} - Page ${currentPage} - ${config.siteTitle}`
  const pagePath = isFirstPage ? `tag/${slug}` : `tag/${slug}/${currentPage}`

  return (
    <Layout>
      <SEO
        pagePath={pagePath}
        customTitle
        postNode={{
          title: pageTitle,
          description: `Browse ${numberOfPosts} posts tagged ${title} on ${config.siteTitle}.`,
        }}
      />
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <Container>
        <PageTitle small>
          {numberOfPosts} Posts Tagged: &ldquo;
          {title}
          &rdquo;
        </PageTitle>

        <CardList>
          {posts.slice(skip, limit * currentPage).map((post) => (
            <Card {...post} key={post.id} />
          ))}
        </CardList>
        <Pagination context={pageContext} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    contentfulTag(slug: { eq: $slug }) {
      title
      id
      slug
      post {
        id
        title
        slug
        publishDate(formatString: "MMMM DD, YYYY")
        heroImage {
          title
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1800)
        }
        body {
          childMarkdownRemark {
            html
            excerpt(pruneLength: 80)
          }
        }
      }
    }
  }
`

export default TagTemplate

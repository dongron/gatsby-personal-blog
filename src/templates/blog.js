import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'

const Index = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges
  const featuredPost = posts[0].node
  const { currentPage } = pageContext
  const isFirstPage = currentPage === 1

  return (
    <Layout>
      <SEO />
      {!isFirstPage && (
        <Helmet>
          <title>{`${config.siteTitle} - Page ${currentPage}`}</title>
        </Helmet>
      )}
      <Container>
        {isFirstPage ? (
          <CardList>
            <Card {...featuredPost} featured />
            {posts.slice(1).map(({ node: post }) => (
              <Card key={post.id} {...post} />
            ))}
          </CardList>
        ) : (
          <CardList>
            {posts.map(({ node: post }) => (
              <Card key={post.id} {...post} />
            ))}
          </CardList>
        )}
        <Pagination context={pageContext} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allContentfulPost(sort: { publishDate: DESC }, limit: $limit, skip: $skip) {
      edges {
        node {
          title
          id
          slug
          node_locale
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              width: 1800
            )
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
  }
`

export default Index

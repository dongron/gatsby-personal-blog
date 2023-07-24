import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'
import Welcome from '../components/Welcome'
import Social from '../components/Social'


const Index = ({ data, pageContext }) => {
  const fragments = data.allContentfulFragment.edges
  const { currentPage } = pageContext

  return (
    <Layout>
      <SEO />
      <Helmet>
        <title>{config.siteTitle}</title>
      </Helmet>
      <Welcome />
      <Social />
    </Layout>
  )
}

export const query = graphql`query ($skip: Int!, $limit: Int!) {
  allContentfulFragment(
    sort: {order: DESC}
    limit: $limit
    skip: $skip
    filter: {target: {eq: "home"}}
  ) {
    edges {
      node {
        id
        order
        target
        publishDate(formatString: "MMMM DD, YYYY")
        node_locale
        title
        slug
        body {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
}`

export default Index

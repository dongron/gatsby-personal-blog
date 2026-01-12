import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'
import Welcome from '../components/Welcome'
import Social from '../components/Social'
import Services from '../components/Services'
import FeaturedWork from '../components/FeaturedWork'
import LatestArticles from '../components/LatestArticles'
import AboutTeaser from '../components/AboutTeaser'
import AvailabilityBanner from '../components/AvailabilityBanner'


const Index = ({ data, pageContext }) => {
  const featuredProjects = data.allContentfulPortfolioItem?.edges || []
  const latestPosts = data.allContentfulPost?.edges || []

  return (
    <Layout>
      <SEO />
      <Helmet>
        <title>{config.siteTitle}</title>
      </Helmet>
      <Welcome />
      <Services />
      <FeaturedWork projects={featuredProjects} />
      <LatestArticles posts={latestPosts} />
      <AboutTeaser />
      <AvailabilityBanner />
    </Layout>
  )
}

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allContentfulPortfolioItem(
      filter: {featured: {eq: true}}
      sort: {order: ASC}
      limit: 3
    ) {
      edges {
        node {
          title
          slug
          description
          technologies
        }
      }
    }
    allContentfulPost(
      sort: {publishDate: DESC}
      limit: 3
    ) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 600)
          }
          body {
            childMarkdownRemark {
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
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
  }
`

export default Index

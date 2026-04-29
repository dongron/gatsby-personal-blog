import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import SEO from '../components/SEO'
import Welcome from '../components/Welcome'
import Services from '../components/Services'
import FeaturedWork from '../components/FeaturedWork'
import LatestArticles from '../components/LatestArticles'
import AboutTeaser from '../components/AboutTeaser'
import AvailabilityBanner from '../components/AvailabilityBanner'
import { getLandingPageContent } from '../utils/landingPageContent'


const Index = ({ data, pageContext }) => {
  const locale = pageContext.locale || 'en'
  const landingPageContent = getLandingPageContent(locale)
  const featuredProjects = data.allContentfulPortfolioItem?.edges || []
  const latestPosts = data.allContentfulPost?.edges || []

  return (
    <Layout
      navigationVariant={landingPageContent.layout.navigationVariant}
      menuContent={landingPageContent.menu}
      footerVariant={landingPageContent.layout.footerVariant}
      footerContent={landingPageContent.footer}
    >
      <SEO
        pagePath={landingPageContent.seo.pagePath}
        customTitle
        postNode={{
          title: landingPageContent.seo.title,
          description: landingPageContent.seo.description,
        }}
        localeConfig={landingPageContent.locale}
        alternates={pageContext.seoAlternates}
      />
      <Helmet>
        <title>{landingPageContent.seo.title}</title>
      </Helmet>
      <Welcome content={landingPageContent.welcome} />
      <Services content={landingPageContent.services} />
      {landingPageContent.sections.showFeaturedWork && (
        <FeaturedWork projects={featuredProjects} />
      )}
      {landingPageContent.sections.showLatestArticles && (
        <LatestArticles posts={latestPosts} />
      )}
      <AboutTeaser content={landingPageContent.about} />
      <AvailabilityBanner content={landingPageContent.availability} />
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
          heroImage {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 600)
          }
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

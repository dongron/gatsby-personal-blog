import React from 'react'
import { graphql } from 'gatsby'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import PageBody from '../components/PageBody'
import SEO from '../components/SEO'

const PageTemplate = ({ data }) => {
  const { title, slug, body } = data.contentfulPage
  const postNode = data.contentfulPage

  return (
    <Layout>
      <Container>
        <PageTitle>{title}</PageTitle>
        <PageBody body={body} page $noMaxWidth />
      </Container>
    </Layout>
  )
}

export const Head = ({ data }) => {
  const { title, slug } = data.contentfulPage
  const postNode = data.contentfulPage

  return (
    <>
      <title>{`${title} - ${config.siteTitle}`}</title>
      <SEO pagePath={slug} postNode={postNode} pageSEO />
    </>
  )
}

export const query = graphql`
  query ($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

export default PageTemplate

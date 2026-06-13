import React from 'react'
import { graphql } from 'gatsby'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import TagList from '../components/TagList'
import PostLinks from '../components/PostLinks'
import PostDate from '../components/PostDate'
import CommunityCTA from '../components/CommunityCTA'
import SEO from '../components/SEO'

const PostTemplate = ({ data, pageContext }) => {
  const { title, slug, heroImage, body, publishDate, tags } =
    data.contentfulPost
  const postNode = data.contentfulPost

  const previous = pageContext.prev
  const next = pageContext.next

  return (
    <Layout>
      <Hero title={title} image={heroImage} height={'50vh'} />

      <Container>
        {tags && <TagList tags={tags} />}
        <PostDate date={publishDate} />
        <PageBody body={body} $noMaxWidth />
        <CommunityCTA postSlug={slug} />
        <PostLinks previous={previous} next={next} />
      </Container>
    </Layout>
  )
}

export const Head = ({ data }) => {
  const { title, slug } = data.contentfulPost
  const postNode = data.contentfulPost

  return (
    <>
      <title>{`${title} - ${config.siteTitle}`}</title>
      <SEO pagePath={`blog/${slug}`} postNode={postNode} postSEO />
    </>
  )
}

export const query = graphql`
  query ($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      publishDate(formatString: "MMMM DD, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      tags {
        title
        id
        slug
      }
      heroImage {
        title
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1800)
        ogimg: resize(width: 1800) {
          src
          width
          height
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

export default PostTemplate

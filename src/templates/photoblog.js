import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'
import PhotoCard from '../components/PhotoCard'


const Index = ({ data, pageContext }) => {
  const { currentPage } = pageContext
  const isFirstPage = currentPage === 1
  let photoPosts = extractPhotoPosts(data)
  // todo: pagination

  return (
    <Layout>
      <SEO />
      <Helmet>
        <title>{`${config.siteTitle} - Photoblogs`}</title>
      </Helmet>
      <Container>
        {photoPosts.map((photoPost, index) => (
          <PhotoCard key={index} {...photoPost} />
        ))}
      </Container>
    </Layout>
  )
}

const extractPhotoPosts = (queryResult) => {
  return queryResult.allContentfulAlbumEntry.edges[0].node.urls
}

// scrapping function to run in photo album console
const scrapPhotoblogData = () => {
  let url, image, title, description
  let allHeadMetaTags = document.head.querySelectorAll('meta')

  for (let domElement of allHeadMetaTags) {
    let property = domElement.getAttribute('property')
    if (property === 'og:title')
      title = domElement.getAttribute('content')
    else if (property === 'og:url')
      url = domElement.getAttribute('content')
    else if (property === 'og:description')
      description = domElement.getAttribute('content')
    else if (property === 'og:image')
      image = domElement.getAttribute('content')
  }
  return { url, image, title, description }
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulAlbumEntry(
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          urls {
            title
            image
            url
          }
        }
      }
    }
  }
`

export default Index

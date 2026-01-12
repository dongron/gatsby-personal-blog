import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PageTitle from './PageTitle'
import Card from './Card'

const Wrapper = styled.section`
  width: 100%;
  padding: ${props => props.theme.spacing.xxl} ${props => props.theme.spacing.md};
  background: white;
`

const Inner = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
`

const PostList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 2em 0 0 0;
`

const ViewAllLink = styled(Link)`
  display: inline-block;
  margin-top: 2em;
  color: ${props => props.theme.colors.highlight};
  font-weight: 600;
  text-decoration: none;
  transition: all ${props => props.theme.transitions.default};

  &:hover {
    color: ${props => props.theme.colors.base};
  }
`

const CenterWrapper = styled.div`
  text-align: center;
`

const EmptyState = styled.p`
  text-align: center;
  color: gray;
  margin: 2em 0;
`

const LatestArticles = ({ posts }) => {
  const hasPosts = posts && posts.length > 0

  return (
    <Wrapper>
      <Inner>
        <PageTitle small>Latest Articles</PageTitle>
        {hasPosts ? (
          <PostList>
            {posts.map(({ node }) => (
              <Card
                key={node.slug}
                slug={node.slug}
                heroImage={node.heroImage}
                title={node.title}
                publishDate={node.publishDate}
                body={node.body}
              />
            ))}
          </PostList>
        ) : (
          <EmptyState>
            Articles coming soon. Check back later!
          </EmptyState>
        )}
        <CenterWrapper>
          <ViewAllLink to="/blog/">Read More Articles →</ViewAllLink>
        </CenterWrapper>
      </Inner>
    </Wrapper>
  )
}

export default LatestArticles

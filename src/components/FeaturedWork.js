import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PageTitle from './PageTitle'
import ProjectCard from './ProjectCard'

const Wrapper = styled.section`
  width: 100%;
  padding: ${props => props.theme.spacing.xxl} ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.tertiary};
`

const Inner = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
`

const ProjectList = styled.ul`
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

const FeaturedWork = ({ projects }) => {
  const hasProjects = projects && projects.length > 0

  return (
    <Wrapper>
      <Inner>
        <PageTitle small>Selected Projects</PageTitle>
        {hasProjects ? (
          <ProjectList>
            {projects.map(({ node }) => (
              <ProjectCard
                key={node.slug}
                slug={node.slug}
                heroImage={node.heroImage}
                title={node.title}
                description={node.description}
                technologies={node.technologies}
              />
            ))}
          </ProjectList>
        ) : (
          <EmptyState>
            Projects coming soon. Check back later or view my{' '}
            <a href="https://github.com/dongron" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>{' '}
            for now.
          </EmptyState>
        )}
        <CenterWrapper>
          <ViewAllLink to="/portfolio/">View All Work →</ViewAllLink>
        </CenterWrapper>
      </Inner>
    </Wrapper>
  )
}

export default FeaturedWork

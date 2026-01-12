import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'
import PageTitle from '../components/PageTitle'
import ProjectFilter from '../components/ProjectFilter'
import styled from 'styled-components'

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4em;
`

const ProjectItem = styled.article`
  padding-bottom: 4em;
  border-bottom: 1px solid ${props => props.theme.colors.secondary};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`

const ProjectHeader = styled.div`
  margin-bottom: 1.5em;
`

const ProjectTitle = styled.h2`
  font-size: 2em;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.base};
`

const ProjectDescription = styled.p`
  font-size: 1.1em;
  line-height: 1.6;
  color: gray;
  margin-bottom: 1em;
`

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  margin-bottom: 1.5em;
`

const Tag = styled.span`
  background: ${props => props.theme.colors.tertiary};
  padding: 0.4em 0.8em;
  font-size: 0.85em;
  border-radius: 2px;
  color: ${props => props.theme.colors.base};
`

const ProjectBody = styled.div`
  line-height: 1.8;
  color: ${props => props.theme.colors.text};

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    margin: 1.5em 0 0.5em;
    color: ${props => props.theme.colors.base};
  }

  h2 { font-size: 1.5em; }
  h3 { font-size: 1.25em; }

  p {
    margin-bottom: 1em;
  }

  ul, ol {
    margin-bottom: 1em;
    padding-left: 1.5em;
  }

  li {
    margin-bottom: 0.5em;
  }

  a {
    color: ${props => props.theme.colors.highlight};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  code {
    background: ${props => props.theme.colors.tertiary};
    padding: 0.2em 0.4em;
    border-radius: 2px;
    font-size: 0.9em;
  }

  pre {
    background: ${props => props.theme.colors.base};
    color: white;
    padding: 1em;
    border-radius: 2px;
    overflow-x: auto;
    margin-bottom: 1em;

    code {
      background: none;
      padding: 0;
    }
  }

  blockquote {
    border-left: 3px solid ${props => props.theme.colors.highlight};
    padding-left: 1em;
    margin: 1em 0;
    color: gray;
    font-style: italic;
  }
`

const Intro = styled.p`
  text-align: center;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: 0 auto 2em;
  line-height: 1.7;
  color: gray;
`

const EmptyState = styled.div`
  text-align: center;
  padding: 3em 0;
  color: gray;

  h3 {
    font-size: 1.5em;
    margin-bottom: 1em;
    color: ${props => props.theme.colors.base};
  }

  p {
    max-width: 500px;
    margin: 0 auto;
    line-height: 1.6;
  }

  a {
    color: ${props => props.theme.colors.highlight};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Portfolio = ({ data }) => {
  const allProjects = data.allContentfulPortfolioItem?.edges || []
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = activeFilter === 'all'
    ? allProjects
    : allProjects.filter(({ node }) => node.category === activeFilter)

  return (
    <Layout>
      <Helmet>
        <title>{`Portfolio - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO
        pagePath="portfolio"
        customTitle
        postNode={{
          title: 'Portfolio',
        }}
      />

      <Container>
        <PageTitle>My Work</PageTitle>
        <Intro>
          A selection of projects I've worked on over the years, from healthcare platforms
          to enterprise applications. Each project represents real challenges solved with
          modern web technologies.
        </Intro>

        {allProjects.length > 0 ? (
          <>
            <ProjectFilter
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />

            <ProjectList>
              {filteredProjects.map(({ node }) => (
                <ProjectItem key={node.slug}>
                  <ProjectHeader>
                    <ProjectTitle>{node.title}</ProjectTitle>
                    {node.description && (
                      <ProjectDescription>{node.description}</ProjectDescription>
                    )}
                    {node.technologies && node.technologies.length > 0 && (
                      <TechTags>
                        {node.technologies.map((tech, index) => (
                          <Tag key={index}>{tech}</Tag>
                        ))}
                      </TechTags>
                    )}
                  </ProjectHeader>
                  {node.body && node.body.childMarkdownRemark && (
                    <ProjectBody
                      dangerouslySetInnerHTML={{
                        __html: node.body.childMarkdownRemark.html,
                      }}
                    />
                  )}
                </ProjectItem>
              ))}
            </ProjectList>

            {filteredProjects.length === 0 && (
              <EmptyState>
                <p>No projects found in this category.</p>
              </EmptyState>
            )}
          </>
        ) : (
          <EmptyState>
            <h3>Projects Coming Soon</h3>
            <p>
              I'm currently adding case studies for my recent projects.
              In the meantime, check out my{' '}
              <a href={config.githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>{' '}
              for code samples and open source contributions.
            </p>
          </EmptyState>
        )}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulPortfolioItem(sort: {order: ASC}) {
      edges {
        node {
          title
          slug
          description
          category
          technologies
        }
      }
    }
  }
`

export default Portfolio

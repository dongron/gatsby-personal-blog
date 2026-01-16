import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'
import PageTitle from '../components/PageTitle'
import ProjectFilter from '../components/ProjectFilter'
import PageBody from '../components/PageBody'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faExternalLinkAlt,
  faCalendarAlt,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons'

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4em;
`

const ProjectItem = styled.article`
  padding-bottom: 4em;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`

const HeroImageWrapper = styled.div`
  margin-bottom: 1.5em;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  .gatsby-image-wrapper {
    width: 100%;
    max-height: 400px;
  }
`

const ProjectHeader = styled.div`
  margin-bottom: 1em;
`

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
`

const ClientRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  flex-wrap: wrap;
  margin-top: 0.8rem;
  margin-bottom: 1rem;
`

const ProjectTitle = styled.h2`
  font-size: 2em;
  font-weight: 600;
  color: ${(props) => props.theme.colors.base};
`

const CategoryBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3em;
  background: ${(props) => props.theme.colors.highlight};
  color: white;
  padding: 0.3em 0.6em;
  font-size: 0.75em;
  border-radius: 2px;
  font-weight: 600;
  text-transform: uppercase;
`

const ClientName = styled.p`
  font-size: 1em;
  color: ${(props) => props.theme.colors.highlight};
  font-weight: 600;
`

const ProjectMeta = styled.div`
  gap: 1.5em;
  margin-bottom: 1em;
  font-size: 0.9em;
  color: gray;
`

const MetaItem = styled.div`
  line-height: 2;

  svg {
    color: ${(props) => props.theme.colors.highlight};
  }
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
  background: ${(props) => props.theme.colors.tertiary};
  padding: 0.4em 0.8em;
  font-size: 0.85em;
  border-radius: 2px;
  color: ${(props) => props.theme.colors.base};
`

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5em;
  background: ${(props) => props.theme.colors.highlight};
  color: white;
  padding: 0.6em 1.2em;
  font-size: 0.9em;
  font-weight: 600;
  border-radius: 2px;
  text-decoration: none;
  transition: all 0.2s;
  margin-bottom: 1.5em;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`

const ProjectBody = styled.div`
  line-height: 1.8;
  color: ${(props) => props.theme.colors.text};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    margin: 1.5em 0 0.5em;
    color: ${(props) => props.theme.colors.base};
  }

  h2 {
    font-size: 1.5em;
  }
  h3 {
    font-size: 1.25em;
  }

  p {
    margin-bottom: 1em;
  }

  ul,
  ol {
    margin-bottom: 1em;
    padding-left: 1.5em;
  }

  li {
    margin-bottom: 0.5em;
  }

  a {
    color: ${(props) => props.theme.colors.highlight};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  code {
    background: ${(props) => props.theme.colors.tertiary};
    padding: 0.2em 0.4em;
    border-radius: 2px;
    font-size: 0.9em;
  }

  pre {
    background: ${(props) => props.theme.colors.base};
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
    border-left: 3px solid ${(props) => props.theme.colors.highlight};
    padding-left: 1em;
    margin: 1em 0;
    color: gray;
    font-style: italic;
  }
`

const GallerySection = styled.div`
  margin-top: 2em;
`

const GalleryTitle = styled.h3`
  font-size: 1.2em;
  font-weight: 600;
  margin-bottom: 1em;
  color: ${(props) => props.theme.colors.base};
`

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1em;
`

const GalleryImageWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`

const Intro = styled.p`
  text-align: center;
  max-width: ${(props) => props.theme.sizes.maxWidthCentered};
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
    color: ${(props) => props.theme.colors.base};
  }

  p {
    max-width: 500px;
    margin: 0 auto;
    line-height: 1.6;
  }

  a {
    color: ${(props) => props.theme.colors.highlight};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Portfolio = ({ data }) => {
  const allProjects = data.allContentfulPortfolioItem?.edges || []
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects =
    activeFilter === 'all'
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
          A selection of projects I've worked on over the years, from healthcare
          platforms to enterprise applications. Each project represents real
          challenges solved with modern web technologies.
        </Intro>

        {allProjects.length > 0 ? (
          <>
            <ProjectFilter
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />

            <ProjectList>
              {filteredProjects.map(({ node }) => {
                const heroImage = getImage(node.heroImage)
                return (
                  <ProjectItem key={node.slug}>
                    {heroImage && (
                      <HeroImageWrapper>
                        <GatsbyImage image={heroImage} alt={node.title} />
                      </HeroImageWrapper>
                    )}
                    <ProjectHeader>
                      <TitleRow>
                        <ProjectTitle>{node.title}</ProjectTitle>
                      </TitleRow>
                      {node.client && (
                        <ClientRow>
                          <ClientName>{node.client}</ClientName>
                          {node.category && (
                            <CategoryBadge>{node.category}</CategoryBadge>
                          )}
                        </ClientRow>
                      )}
                      <ProjectMeta>
                        {node.role && (
                          <MetaItem>
                            <FontAwesomeIcon icon={faUserTie} /> {node.role}
                          </MetaItem>
                        )}
                        {node.timeline && (
                          <MetaItem>
                            <FontAwesomeIcon icon={faCalendarAlt} />{' '}
                            {node.timeline}
                          </MetaItem>
                        )}
                      </ProjectMeta>
                      {node.description && (
                        <ProjectDescription>
                          {node.description}
                        </ProjectDescription>
                      )}
                      {node.technologies && node.technologies.length > 0 && (
                        <TechTags>
                          {node.technologies.map((tech, index) => (
                            <Tag key={index}>{tech}</Tag>
                          ))}
                        </TechTags>
                      )}
                      {node.body && node.body.childMarkdownRemark && (
                        <PageBody body={node.body} $noMaxWidth={true} />
                      )}
                      {node.projectUrl && (
                        <ProjectLink
                          href={node.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon icon={faExternalLinkAlt} /> View
                          Project
                        </ProjectLink>
                      )}
                    </ProjectHeader>
                    {node.gallery && node.gallery.length > 0 && (
                      <GallerySection>
                        <GalleryTitle>Project Gallery</GalleryTitle>
                        <GalleryGrid>
                          {node.gallery.map((image, index) => {
                            const galleryImage = getImage(image)
                            return galleryImage ? (
                              <GalleryImageWrapper key={index}>
                                <GatsbyImage
                                  image={galleryImage}
                                  alt={`${node.title} screenshot ${index + 1}`}
                                />
                              </GalleryImageWrapper>
                            ) : null
                          })}
                        </GalleryGrid>
                      </GallerySection>
                    )}
                  </ProjectItem>
                )
              })}
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
              I'm currently adding case studies for my recent projects. In the
              meantime, check out my{' '}
              <a
                href={config.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
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
    allContentfulPortfolioItem(sort: { order: ASC }) {
      edges {
        node {
          title
          slug
          client
          description
          category
          technologies
          timeline
          role
          projectUrl
          featured
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

export default Portfolio

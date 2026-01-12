import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const Project = styled.li`
  position: relative;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 2px;
  margin: 0 0 1em 0;
  width: 100%;
  transition: background ${props => props.theme.transitions.default};
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 0 49%;
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: 0 0 32%;
  }
  &:hover {
    background: ${props => props.theme.colors.tertiary};
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.colors.base};
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
    }
  }
`

const Placeholder = styled.div`
  height: 0;
  padding-bottom: 60%;
  background: ${props => props.theme.colors.secondary};
`

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
`

const Description = styled.p`
  margin: 0 1rem 0.5rem 1rem;
  line-height: 1.6;
  color: gray;
`

const TechTags = styled.div`
  margin: auto 1rem 1rem 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
`

const Tag = styled.span`
  background: ${props => props.theme.colors.tertiary};
  padding: 0.25em 0.5em;
  font-size: 0.8em;
  border-radius: 2px;
  color: ${props => props.theme.colors.base};
`

const ProjectCard = ({ slug, heroImage, title, description, technologies }) => {
  return (
    <Project>
      <Link to={`/portfolio/${slug}/`}>
        {heroImage && heroImage.gatsbyImageData ? (
          <GatsbyImage
            image={heroImage.gatsbyImageData}
            backgroundColor={'#eeeeee'}
            alt={title}
          />
        ) : (
          <Placeholder />
        )}
        <Title>{title}</Title>
        <Description>{description}</Description>
        {technologies && technologies.length > 0 && (
          <TechTags>
            {technologies.slice(0, 4).map((tech, index) => (
              <Tag key={index}>{tech}</Tag>
            ))}
          </TechTags>
        )}
      </Link>
    </Project>
  )
}

export default ProjectCard

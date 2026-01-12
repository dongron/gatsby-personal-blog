import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled.section`
  margin: 3em 0;
`

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: 1.5em;
  color: ${props => props.theme.colors.base};
  text-align: center;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2em;

  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const Category = styled.div`
  h3 {
    font-size: 0.9em;
    text-transform: uppercase;
    color: gray;
    margin-bottom: 1em;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5em;
  }
`

const TechList = styled.ul`
  list-style: none;

  li {
    margin-bottom: 0.5em;
    color: ${props => props.theme.colors.base};
    font-size: 0.95em;
  }
`

const technologies = {
  frontend: {
    icon: 'laptop-code',
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Gatsby', 'Redux', 'Styled Components']
  },
  backend: {
    icon: 'server',
    title: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL', 'GraphQL', 'REST APIs']
  },
  tools: {
    icon: 'tools',
    title: 'Tools',
    items: ['Git', 'VS Code', 'Figma', 'Webpack', 'Jest', 'Cypress']
  },
  platforms: {
    icon: 'globe',
    title: 'Platforms',
    items: ['Netlify', 'Vercel', 'AWS', 'Contentful', 'Firebase']
  }
}

const TechStack = () => {
  return (
    <Wrapper>
      <Title>Technologies I Use</Title>
      <Grid>
        {Object.entries(technologies).map(([key, category]) => (
          <Category key={key}>
            <h3>
              <FontAwesomeIcon icon={category.icon} />
              {category.title}
            </h3>
            <TechList>
              {category.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </TechList>
          </Category>
        ))}
      </Grid>
    </Wrapper>
  )
}

export default TechStack

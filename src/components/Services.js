import React from 'react'
import styled from 'styled-components'
import PageTitle from './PageTitle'
import ServiceCard from './ServiceCard'

const Wrapper = styled.section`
  width: 100%;
  padding: ${props => props.theme.spacing.xxl} ${props => props.theme.spacing.md};
  background: white;
`

const Inner = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2em;
  margin-top: 2em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const defaultServices = [
  {
    icon: 'code',
    title: 'Modern Web Apps',
    description:
      'React, Next.js, TypeScript applications built for performance and scalability.',
  },
  {
    icon: 'heartbeat',
    title: 'Healthcare & Enterprise',
    description:
      'Secure, compliant solutions for healthcare and large organizations.',
  },
  {
    icon: 'mobile-alt',
    title: 'Progressive Web Apps',
    description: 'Offline-first applications with native-like experiences.',
  },
  {
    icon: 'comments',
    title: 'Technical Consulting',
    description: 'Architecture review, code audits, and technology guidance.',
  },
]

const defaultContent = {
  title: 'What I Do',
  items: defaultServices,
}

const Services = ({ content = defaultContent }) => {
  const { title = defaultContent.title, items = defaultContent.items } = content

  return (
    <Wrapper>
      <Inner>
        <PageTitle as="h2" small>{title}</PageTitle>
        <Grid>
          {items.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </Grid>
      </Inner>
    </Wrapper>
  )
}

export default Services

import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'
import AvailabilityBadge from '../components/AvailabilityBadge'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Intro = styled.div`
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: 0 auto 3em;
  text-align: center;

  p {
    font-size: 1.1em;
    line-height: 1.8;
    color: gray;
  }
`

const StatusSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  margin-bottom: 3em;
  padding: 2em;
  background: ${props => props.theme.colors.tertiary};
  border-radius: 2px;
  text-align: center;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin-left: auto;
  margin-right: auto;
`

const StatusInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;
  margin-top: 0.5em;
`

const StatusItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  color: ${props => props.theme.colors.base};
  font-size: 0.95em;

  svg {
    color: ${props => props.theme.colors.highlight};
  }
`

const AlternativeContact = styled.section`
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: 3em auto 0;
  padding-top: 3em;
  border-top: 1px solid ${props => props.theme.colors.secondary};
`

const AlternativeTitle = styled.h2`
  font-size: 1.25em;
  font-weight: 600;
  margin-bottom: 1em;
  color: ${props => props.theme.colors.base};
  text-align: center;
`

const ContactLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;
`

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75em;
  color: ${props => props.theme.colors.base};
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s;
  padding: 1em;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 2px;

  svg {
    font-size: 1.5em;
    color: ${props => props.theme.colors.highlight};
  }

  &:hover {
    border-color: ${props => props.theme.colors.highlight};
    color: ${props => props.theme.colors.highlight};
  }
`

const Contact = ({ data }) => {
  const postNode = {
    title: `Contact - ${config.siteTitle}`,
  }

  return (
    <Layout>
      <Helmet>
        <title>{`Contact - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />

      <Container>
        <PageTitle>Get In Touch</PageTitle>

        <Intro>
          <p>
            Have a project in mind or want to discuss how I can help?
            Fill out the form below and I'll get back to you within 24-48 hours.
          </p>
        </Intro>

        <StatusSection>
          <AvailabilityBadge />
          <StatusInfo>
            <StatusItem>
              <FontAwesomeIcon icon="clock" />
              {config.hoursPerWeek}
            </StatusItem>
            <StatusItem>
              <FontAwesomeIcon icon="map-marker-alt" />
              {config.timezone}
            </StatusItem>
          </StatusInfo>
        </StatusSection>

        <ContactForm />

        <AlternativeContact>
          <AlternativeTitle>Prefer Another Way?</AlternativeTitle>
          <ContactLinks>
            <ContactLink href={`mailto:${config.email}`}>
              <FontAwesomeIcon icon="envelope" />
              <span>Email Me</span>
            </ContactLink>
            <ContactLink
              href={config.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
              <span>LinkedIn</span>
            </ContactLink>
            <ContactLink
              href={config.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={['fab', 'github']} />
              <span>GitHub</span>
            </ContactLink>
          </ContactLinks>
        </AlternativeContact>
      </Container>
    </Layout>
  )
}

export default Contact

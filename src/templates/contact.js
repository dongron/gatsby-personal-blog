import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'
import AvailabilityBadge from '../components/AvailabilityBadge'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import config from '../utils/siteConfig'
import { getLandingPageContent } from '../utils/landingPageContent'
import { getContactPageContent } from '../utils/contactPageContent'

const Intro = styled.div`
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: 0 auto 3em;
  text-align: center;

  p {
    font-size: 1.1em;
    line-height: 1.8;
    color: ${props => props.theme.colors.text};
  }
`

const StatusSection = styled.section`
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

const StatusItem = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5em;
  color: ${props => props.theme.colors.base};
  font-size: 0.95em;
  margin: 0;

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

const ContactTemplate = ({ pageContext }) => {
  const locale = pageContext.locale || 'en'
  const landingPageContent = getLandingPageContent(locale)
  const contactPageContent = getContactPageContent(locale)
  const isPolish = locale === 'pl'

  const menuContent = isPolish
    ? {
        ...landingPageContent.menu,
        ...contactPageContent.menu,
      }
    : undefined

  return (
    <Layout
      navigationVariant={landingPageContent.layout.navigationVariant}
      menuContent={menuContent}
      footerVariant={landingPageContent.layout.footerVariant}
      footerContent={landingPageContent.footer}
    >
      <Helmet>
        <title>{contactPageContent.seo.title}</title>
      </Helmet>
      <SEO
        postNode={{
          title: contactPageContent.seo.title,
          description: contactPageContent.seo.description,
        }}
        pagePath={contactPageContent.seo.pagePath}
        customTitle
        localeConfig={landingPageContent.locale}
        alternates={pageContext.seoAlternates}
      />

      <Container>
        <PageTitle>{contactPageContent.page.title}</PageTitle>

        <Intro>
          <p>{contactPageContent.page.intro}</p>
        </Intro>

        <StatusSection aria-label={landingPageContent.availability.badgeLabel}>
          <AvailabilityBadge
            label={landingPageContent.availability.badgeLabel}
            compactAvailableLabel={landingPageContent.availability.compactAvailableLabel}
            compactBusyLabel={landingPageContent.availability.compactBusyLabel}
          />
          <StatusInfo>
            <StatusItem>
              <FontAwesomeIcon icon="clock" aria-hidden="true" />
              {landingPageContent.availability.hoursText}
            </StatusItem>
            <StatusItem>
              <FontAwesomeIcon icon="map-marker-alt" aria-hidden="true" />
              {landingPageContent.availability.timezoneText}
            </StatusItem>
          </StatusInfo>
        </StatusSection>

        <ContactForm content={contactPageContent.form} />

        <AlternativeContact>
          <AlternativeTitle>{contactPageContent.page.alternativeTitle}</AlternativeTitle>
          <ContactLinks>
            <ContactLink href={`mailto:${config.email}`}>
              <FontAwesomeIcon icon="envelope" aria-hidden="true" />
              <span>{contactPageContent.page.links.email}</span>
            </ContactLink>
            <ContactLink
              href={config.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={['fab', 'linkedin']} aria-hidden="true" />
              <span>{contactPageContent.page.links.linkedIn}</span>
            </ContactLink>
            <ContactLink
              href={config.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={['fab', 'github']} aria-hidden="true" />
              <span>{contactPageContent.page.links.github}</span>
            </ContactLink>
          </ContactLinks>
        </AlternativeContact>
      </Container>
    </Layout>
  )
}

export default ContactTemplate
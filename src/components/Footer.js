import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import config from '../utils/siteConfig'

const defaultContent = {
  footerTitle: 'Site Footer',
  navigationTitle: 'Navigation',
  connectTitle: 'Connect',
  teamProjectsTitle: 'Team Projects',
  emailLabel: 'Email',
  linkedInLabel: 'LinkedIn',
  githubLabel: 'GitHub',
  addressCountryLabel: config.addressCountryLabel,
  builtWithText: 'Built with Gatsby & Contentful.',
}

const FooterTitle = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`

const ContactMeta = styled.address`
  && {
    align-items: flex-start;
  }

  display: inline-flex;
  align-items: flex-start;
  gap: 0.5em;
  color: ${(props) => props.theme.colors.text};
  font-style: normal;
  line-height: 1.2;

  svg {
    align-self: flex-start;
    margin-top: 0;
    flex-shrink: 0;
  }
`

const ContactMetaLine = styled.span`
  display: block;
`

const PositioningLine = styled.p`
  margin: 0 0 0.75em;
  color: ${(props) => props.theme.colors.base};
  font-weight: 600;
`

const LegalFinePrint = styled.p`
  margin: 0.35em auto 0;
  max-width: ${(props) => props.theme.sizes.maxWidthCentered};
  color: ${(props) => props.theme.colors.text};
  font-size: 0.8em;
  line-height: 1.5;
`

const formatPhoneNumber = (phoneNumber) =>
  phoneNumber.replace(/^(\+\d{2})(\d{3})(\d{3})(\d{3})$/, '$1 $2 $3 $4')

const Wrapper = styled.footer`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  max-width: ${(props) => props.theme.sizes.maxWidth};
`

const List = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.colors.secondary};
  padding: 2em 0;
  margin: 0 1.5em;
  gap: 2em;

  @media screen and (min-width: ${(props) => props.theme.responsive.small}) {
    flex-wrap: nowrap;
  }
`

const Column = styled.section`
  flex: 1;
  min-width: 150px;

  ul {
    list-style: none;
  }

  li {
    margin-bottom: 0.5em;
  }

  a {
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
    transition: all 0.2s;
    display: inline-flex;
    align-items: center;
    gap: 0.5em;

    &:hover {
      color: ${(props) => props.theme.colors.highlight};
    }
  }
`

const ColumnTitle = styled.h3`
  font-weight: 600;
  margin-bottom: 1em;
  color: ${(props) => props.theme.colors.base};
`

const BottomRow = styled.div`
  width: 100%;
  text-align: center;
  padding: 1em 1.5em 2em;
  color: ${(props) => props.theme.colors.text};
  font-size: 0.9em;

  a {
    color: ${(props) => props.theme.colors.highlight};
    text-decoration: none;
  }
`

const getCurrentYear = () => new Date().getFullYear()

const Footer = ({ variant = 'default', content = defaultContent }) => {
  const footerContent = {
    ...defaultContent,
    ...content,
  }
  const showNavigation = variant !== 'polishLanding'

  return (
    <Wrapper>
      <FooterTitle>{footerContent.footerTitle}</FooterTitle>
      <List>
        {showNavigation && (
          <Column as="nav" aria-labelledby="footer-navigation-title">
            <ColumnTitle id="footer-navigation-title">
              {footerContent.navigationTitle}
            </ColumnTitle>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/portfolio/">Portfolio</Link>
              </li>
              <li>
                <Link to="/blog/">Blog</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/contact/">Contact</Link>
              </li>
            </ul>
          </Column>
        )}

        <Column aria-labelledby="footer-connect-title">
          <ColumnTitle id="footer-connect-title">
            {footerContent.connectTitle}
          </ColumnTitle>
          <ul>
            <li>
              <ContactMeta as="a" href={`mailto:${config.email}`}>
                <ContactMetaLine>
                  <FontAwesomeIcon icon="envelope" />
                </ContactMetaLine>
                <ContactMetaLine>{footerContent.emailLabel}</ContactMetaLine>
              </ContactMeta>
            </li>
            <li>
              <ContactMeta
                as="a"
                href={config.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ContactMetaLine>
                  <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </ContactMetaLine>
                <ContactMetaLine>{footerContent.linkedInLabel}</ContactMetaLine>
              </ContactMeta>
            </li>
            <li>
              <ContactMeta
                as="a"
                href={config.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ContactMetaLine>
                  <FontAwesomeIcon icon={['fab', 'github']} />
                </ContactMetaLine>
                <ContactMetaLine>{footerContent.githubLabel}</ContactMetaLine>
              </ContactMeta>
            </li>
            <li>
              <ContactMeta as="a" href={`tel:${config.phone}`}>
                <ContactMetaLine>
                  <FontAwesomeIcon icon="phone" />
                </ContactMetaLine>
                <ContactMetaLine>
                  {formatPhoneNumber(config.phone)}
                </ContactMetaLine>
              </ContactMeta>
            </li>
          </ul>
        </Column>

        {footerContent.teamProjectsTitle && (
          <Column as="nav" aria-labelledby="footer-team-projects-title">
            <ColumnTitle id="footer-team-projects-title">
              {footerContent.teamProjectsTitle}
            </ColumnTitle>
            <ul>
              <li>
                <a
                  href="https://8bits.space"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  8bits.space →
                </a>
              </li>
            </ul>
          </Column>
        )}
      </List>

      <BottomRow>
        <PositioningLine>
          {config.serviceAreaText} {config.workingHoursText}
        </PositioningLine>
        © {getCurrentYear()} {config.author}. {footerContent.builtWithText}
        <LegalFinePrint>{config.legalFooterText}</LegalFinePrint>
      </BottomRow>
    </Wrapper>
  )
}

export default Footer

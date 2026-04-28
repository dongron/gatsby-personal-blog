import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import config from '../utils/siteConfig'

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

const ContactMetaLines = styled.span``

const ContactMetaLine = styled.span`
  display: block;
`

const formatPhoneNumber = (phoneNumber) =>
  phoneNumber.replace(/^(\+\d{2})(\d{3})(\d{3})(\d{3})$/, '$1 $2 $3 $4')

const Wrapper = styled.footer`
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

const Column = styled.div`
  flex: 1;
  min-width: 150px;

  h4 {
    font-weight: 600;
    margin-bottom: 1em;
    color: ${(props) => props.theme.colors.base};
  }

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

const Footer = () => (
  <Wrapper>
    <List>
      <Column>
        <h4>Navigation</h4>
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

      <Column>
        <h4>Connect</h4>
        <ul>
          <li>
            <ContactMeta as="a" href={`mailto:${config.email}`}>
              <ContactMetaLine>
                <FontAwesomeIcon icon="envelope" />
              </ContactMetaLine>
              <ContactMetaLine>Email</ContactMetaLine>
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
              <ContactMetaLine>LinkedIn</ContactMetaLine>
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
              <ContactMetaLine>GitHub</ContactMetaLine>
            </ContactMeta>
          </li>
          <li>
            <ContactMeta
              as="a"
              href={config.googleMapsProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${config.formattedAddress} in Google Maps`}
            >
              <ContactMetaLine>
                <FontAwesomeIcon icon="map-marker-alt" />
              </ContactMetaLine>
              <ContactMetaLines>
                <ContactMetaLine>
                  {config.publisher.split(' ').slice(0, 2).join(' ')} <br />
                  {config.publisher.split(' ').slice(2, 4).join(' ')}
                </ContactMetaLine>
                <ContactMetaLine>
                  {config.address.streetAddress},
                </ContactMetaLine>
                <ContactMetaLine>
                  {config.address.postalCode} {config.address.addressLocality},
                </ContactMetaLine>
                <ContactMetaLine>{config.addressCountryLabel}</ContactMetaLine>
              </ContactMetaLines>
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

      <Column>
        <h4>Team Projects</h4>
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
    </List>

    <BottomRow>
      © {getCurrentYear()} {config.author}. Built with Gatsby & Contentful.
    </BottomRow>
  </Wrapper>
)

export default Footer

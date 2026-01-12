import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import config from '../utils/siteConfig'

const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
`

const List = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.secondary};
  padding: 2em 0;
  margin: 0 1.5em;
  gap: 2em;

  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex-wrap: nowrap;
  }
`

const Column = styled.div`
  flex: 1;
  min-width: 150px;

  h4 {
    font-weight: 600;
    margin-bottom: 1em;
    color: ${props => props.theme.colors.base};
  }

  ul {
    list-style: none;
  }

  li {
    margin-bottom: 0.5em;
  }

  a {
    color: gray;
    text-decoration: none;
    transition: all 0.2s;
    display: inline-flex;
    align-items: center;
    gap: 0.5em;

    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
`

const BottomRow = styled.div`
  width: 100%;
  text-align: center;
  padding: 1em 1.5em 2em;
  color: gray;
  font-size: 0.9em;

  a {
    color: ${props => props.theme.colors.highlight};
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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio/">Portfolio</Link></li>
          <li><Link to="/blog/">Blog</Link></li>
          <li><Link to="/about/">About</Link></li>
          <li><Link to="/contact/">Contact</Link></li>
        </ul>
      </Column>

      <Column>
        <h4>Connect</h4>
        <ul>
          <li>
            <a href={`mailto:${config.email}`}>
              <FontAwesomeIcon icon="envelope" /> Email
            </a>
          </li>
          <li>
            <a href={config.linkedInUrl} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'linkedin']} /> LinkedIn
            </a>
          </li>
          <li>
            <a href={config.githubUrl} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'github']} /> GitHub
            </a>
          </li>
        </ul>
      </Column>

      <Column>
        <h4>Team Projects</h4>
        <ul>
          <li>
            <a href="https://8bits.space" target="_blank" rel="noopener noreferrer">
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

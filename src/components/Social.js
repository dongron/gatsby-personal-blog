import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PageTitle from './PageTitle'
import config from '../utils/siteConfig'

const Wrapper = styled.div`
  width: 100%;
  color: #000;
  text-align: center;
  padding: ${props => props.theme.spacing.xxl} ${props => props.theme.spacing.md};
  background: white;
`

const Inner = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
`

const IconContainer = styled.div`
  font-size: 2.5em;
  margin-bottom: 0.5em;
  color: ${props => props.theme.colors.highlight};
`

const UsernameContainer = styled.div`
  font-size: 1em;
  color: gray;
`

const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 3em;
  margin-top: 2em;
`

const ExternalLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.base};
  transition: all ${props => props.theme.transitions.default};
  text-align: center;

  &:hover {
    color: ${props => props.theme.colors.highlight};
  }
`

const Social = () => {
  return (
    <Wrapper>
      <Inner>
        <PageTitle small>Let's Connect</PageTitle>
        <LinksContainer>
          <ExternalLink href={config.githubUrl} target="_blank" rel="noopener noreferrer">
            <IconContainer>
              <FontAwesomeIcon icon={['fab', 'github']} />
            </IconContainer>
            <UsernameContainer>GitHub</UsernameContainer>
          </ExternalLink>

          <ExternalLink href={config.linkedInUrl} target="_blank" rel="noopener noreferrer">
            <IconContainer>
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </IconContainer>
            <UsernameContainer>LinkedIn</UsernameContainer>
          </ExternalLink>

          <ExternalLink href={`mailto:${config.email}`}>
            <IconContainer>
              <FontAwesomeIcon icon="envelope" />
            </IconContainer>
            <UsernameContainer>Email</UsernameContainer>
          </ExternalLink>
        </LinksContainer>
      </Inner>
    </Wrapper>
  )
}

export default Social

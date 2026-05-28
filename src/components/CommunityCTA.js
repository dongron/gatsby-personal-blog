import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import config from '../utils/siteConfig'

const OuterWrapper = styled.div`
  margin: 3em -1.5em;
  padding: 2.75em ${(props) => props.theme.spacing.md};
  overflow: hidden;
  background: linear-gradient(
    160deg,
    #f5f0ff 0%,
    ${(props) => props.theme.colors.tertiary} 40%,
    #f0f4ff 100%
  );
  border-top: 1px solid ${(props) => props.theme.colors.secondary};
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};

  @media screen and (min-width: ${(props) => props.theme.responsive.small}) {
    margin: 4em calc(-50vw + 50%);
    padding: 3.5em ${(props) => props.theme.spacing.md};
  }
`

const InnerWrapper = styled.div`
  max-width: ${(props) => props.theme.sizes.maxWidthCentered};
  margin: 0 auto;
  text-align: center;
  overflow-wrap: break-word;
`

const Heading = styled.h3`
  font-size: 1.3em;
  font-weight: 400;
  margin: 0 0 0.6em;
  color: ${(props) => props.theme.colors.base};
  letter-spacing: -0.01em;
`

const Subtext = styled.p`
  margin: 0 0 1.5em;
  font-size: 0.95em;
  line-height: 1.7;
  color: ${(props) => props.theme.colors.text};
`

const buildCommunityUrl = (postSlug) => {
  const params = [
    ['utm_source', 'dominikgronkiewicz.com'],
    ['utm_medium', 'blog'],
    ['utm_campaign', 'agentic_architect_lab'],
    ['utm_content', postSlug ? `post_cta_${postSlug}` : 'post_cta'],
  ]

  return `${config.skoolCommunityUrl}?${params
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&')}`
}

const CommunityCTA = ({ postSlug }) => {
  const communityUrl = buildCommunityUrl(postSlug)

  return (
    <OuterWrapper>
      <InnerWrapper>
        <Heading>Building with AI beyond this article?</Heading>
        <Subtext>
          I run <strong>{config.skoolCommunityName}</strong>, live builds, agent
          workflows, and a playbook for technical founders shipping solo. No toy
          demos.
        </Subtext>
        <Button
          href={communityUrl}
          target="_blank"
          rel="noopener noreferrer"
          primary
        >
          Join the Lab
        </Button>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default CommunityCTA

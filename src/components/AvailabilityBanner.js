import React from 'react'
import styled from 'styled-components'
import AvailabilityBadge from './AvailabilityBadge'
import Button from './Button'
import config from '../utils/siteConfig'

const Banner = styled.section`
  width: 100%;
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.base};
  color: white;
`

const Inner = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  text-align: center;

  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;

  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex-direction: row;
    gap: 1.5em;
  }
`

const Text = styled.p`
  margin: 0;
  font-size: 1em;
  color: rgba(255, 255, 255, 0.8);

  strong {
    color: white;
    font-weight: 600;
  }
`

const AvailabilityBanner = () => {
  if (!config.availabilityStatus) {
    return null
  }

  return (
    <Banner>
      <Inner>
        <Content>
          <AvailabilityBadge />
          <Text>
            <strong>{config.hoursPerWeek}</strong> • {config.timezone}
          </Text>
        </Content>
        <Button to="/contact/" primary>
          Start a Project
        </Button>
      </Inner>
    </Banner>
  )
}

export default AvailabilityBanner

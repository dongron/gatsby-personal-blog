import React from 'react'
import styled from 'styled-components'
import AvailabilityBadge from './AvailabilityBadge'
import Button from './Button'
import config from '../utils/siteConfig'

const defaultContent = {
  badgeLabel: config.availabilityText,
  compactAvailableLabel: 'Available',
  compactBusyLabel: 'Busy',
  hoursText: config.hoursPerWeek,
  timezoneText: config.timezone,
  ctaLabel: 'Start a Project',
  ctaTo: '/contact/',
}

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

const AvailabilityBanner = ({ content = defaultContent }) => {
  if (!config.availabilityStatus) {
    return null
  }

  const {
    badgeLabel = defaultContent.badgeLabel,
    compactAvailableLabel = defaultContent.compactAvailableLabel,
    compactBusyLabel = defaultContent.compactBusyLabel,
    hoursText = defaultContent.hoursText,
    timezoneText = defaultContent.timezoneText,
    ctaLabel = defaultContent.ctaLabel,
    ctaTo = defaultContent.ctaTo,
  } = content

  return (
    <Banner>
      <Inner>
        <Content>
          <AvailabilityBadge
            label={badgeLabel}
            compactAvailableLabel={compactAvailableLabel}
            compactBusyLabel={compactBusyLabel}
          />
          <Text>
            <strong>{hoursText}</strong> • {timezoneText}
          </Text>
        </Content>
        <Button to={ctaTo} primary>
          {ctaLabel}
        </Button>
      </Inner>
    </Banner>
  )
}

export default AvailabilityBanner

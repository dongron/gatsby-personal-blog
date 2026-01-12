import React from 'react'
import styled from 'styled-components'
import config from '../utils/siteConfig'

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5em;
  background: ${props => props.available ? 'rgba(76, 175, 80, 0.1)' : 'rgba(158, 158, 158, 0.1)'};
  padding: 0.4em 0.8em;
  border-radius: 2px;
  font-size: 0.85em;
  font-weight: 600;
  color: ${props => props.available ? props.theme.colors.success : 'gray'};
  white-space: nowrap;
`

const Dot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.available ? props.theme.colors.success : 'gray'};
  animation: ${props => props.available ? 'pulse 2s infinite' : 'none'};

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.4);
    }
    70% {
      box-shadow: 0 0 0 6px rgba(76, 175, 80, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);
    }
  }
`

const AvailabilityBadge = ({ compact }) => {
  const available = config.availabilityStatus

  return (
    <Badge available={available}>
      <Dot available={available} />
      {compact ? (available ? 'Available' : 'Busy') : config.availabilityText}
    </Badge>
  )
}

export default AvailabilityBadge

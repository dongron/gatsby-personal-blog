import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = styled.div`
  padding: ${props => props.theme.spacing.lg};
  text-align: center;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 2px;
  transition: all ${props => props.theme.transitions.default};

  &:hover {
    background: ${props => props.theme.colors.tertiary};
    transform: translateY(-2px);
  }
`

const IconWrapper = styled.div`
  font-size: 2.5em;
  color: ${props => props.theme.colors.highlight};
  margin-bottom: ${props => props.theme.spacing.sm};
`

const Title = styled.h3`
  font-size: 1.25em;
  font-weight: 600;
  margin-bottom: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.base};
`

const Description = styled.p`
  font-size: 0.95em;
  color: gray;
  line-height: 1.6;
  margin: 0;
`

const ServiceCard = ({ icon, title, description }) => {
  return (
    <Card>
      <IconWrapper>
        <FontAwesomeIcon icon={icon} />
      </IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  )
}

export default ServiceCard

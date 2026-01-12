import React from 'react'
import styled from 'styled-components'

const FilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  margin-bottom: ${props => props.theme.spacing.lg};
  justify-content: center;
`

const FilterButton = styled.button`
  background: ${props => props.active ? props.theme.colors.highlight : 'transparent'};
  color: ${props => props.active ? props.theme.colors.white : props.theme.colors.base};
  border: 2px solid ${props => props.active ? props.theme.colors.highlight : props.theme.colors.secondary};
  padding: 0.5em 1em;
  font-weight: 600;
  font-family: inherit;
  font-size: 0.9em;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.default};
  border-radius: 2px;

  &:hover {
    border-color: ${props => props.theme.colors.highlight};
    color: ${props => props.active ? props.theme.colors.white : props.theme.colors.highlight};
  }
`

const categories = [
  { value: 'all', label: 'All' },
  { value: 'webapp', label: 'Web Apps' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'enterprise', label: 'Enterprise' },
  { value: 'pwa', label: 'PWA' },
]

const ProjectFilter = ({ activeFilter, onFilterChange }) => {
  return (
    <FilterWrapper>
      {categories.map(category => (
        <FilterButton
          key={category.value}
          active={activeFilter === category.value}
          onClick={() => onFilterChange(category.value)}
        >
          {category.label}
        </FilterButton>
      ))}
    </FilterWrapper>
  )
}

export default ProjectFilter

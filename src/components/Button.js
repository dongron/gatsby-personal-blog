import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

const baseStyles = css`
  display: inline-block;
  background: ${(props) => {
    if (props.onDark) {
      return props.primary ? props.theme.colors.white : 'transparent'
    }
    return props.primary ? props.theme.colors.highlight : 'transparent'
  }};
  color: ${(props) => {
    if (props.onDark) {
      return props.primary
        ? props.theme.colors.highlight
        : props.theme.colors.white
    }
    return props.primary
      ? props.theme.colors.white
      : props.theme.colors.highlight
  }};
  border: 2px solid
    ${(props) => {
      if (props.onDark) {
        return props.primary
          ? props.theme.colors.highlight
          : props.theme.colors.white
      }
      return props.primary
        ? props.theme.colors.highlight
        : props.theme.colors.highlight
    }};
  padding: 0.75em 1.5em;
  font-weight: 600;
  font-family: inherit;
  font-size: 1em;
  cursor: pointer;
  transition: all ${(props) => props.theme.transitions.default};
  text-decoration: none;
  text-align: center;
  border-radius: 5px;

  &:hover {
    background: ${(props) => {
      if (props.onDark) {
        return props.primary ? 'transparent' : props.theme.colors.white
      }
      return props.primary ? 'transparent' : props.theme.colors.highlight
    }};
    color: ${(props) => {
      if (props.onDark) {
        return props.primary
          ? props.theme.colors.white
          : props.theme.colors.highlight
      }
      return props.primary
        ? props.theme.colors.highlight
        : props.theme.colors.white
    }};
    border: 2px solid
      ${(props) => {
        if (props.onDark) {
          return props.primary
            ? props.theme.colors.white
            : props.theme.colors.highlight
        }
        return props.primary
          ? props.theme.colors.highlight
          : props.theme.colors.highlight
      }};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const StyledButton = styled.button`
  ${baseStyles}
`

const StyledLink = styled(Link)`
  ${baseStyles}
`

const StyledAnchor = styled.a`
  ${baseStyles}
`

const Button = ({ children, to, href, primary, onDark, ...props }) => {
  if (to) {
    return (
      <StyledLink
        to={to}
        primary={primary ? 1 : 0}
        onDark={onDark ? 1 : 0}
        {...props}
      >
        {children}
      </StyledLink>
    )
  }

  if (href) {
    return (
      <StyledAnchor
        href={href}
        primary={primary ? 1 : 0}
        onDark={onDark ? 1 : 0}
        {...props}
      >
        {children}
      </StyledAnchor>
    )
  }

  return (
    <StyledButton primary={primary} onDark={onDark} {...props}>
      {children}
    </StyledButton>
  )
}

export default Button

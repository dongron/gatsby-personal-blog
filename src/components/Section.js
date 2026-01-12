import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  width: 100%;
  padding: ${props => props.noPadding ? '0' : `${props.theme.spacing.xxl} ${props.theme.spacing.md}`};
  background: ${props => props.background || props.theme.colors.white};
`

const Inner = styled.div`
  max-width: ${props => props.centered ? props.theme.sizes.maxWidthCentered : props.theme.sizes.maxWidth};
  margin: 0 auto;
`

const Section = ({ children, background, centered, noPadding }) => {
  return (
    <Wrapper background={background} noPadding={noPadding}>
      <Inner centered={centered}>
        {children}
      </Inner>
    </Wrapper>
  )
}

export default Section

import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const Wrapper = styled.section`
  position: relative;
  min-height: 300px;
  max-height: ${(props) => props.height};
`
const BgImg = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  min-height: 300px;
  height: auto;
  display: contents;
  @media (min-width: ${(props) => props.theme.responsive.small}) {
    height: ${(props) => props.height || 'auto'};
  }
  & > img {
    object-fit: ${(props) => props.fit || 'cover'} !important;
    object-position: ${(props) => props.position || '50% 50%'} !important;
  }
  &::before {
    content: '';
    background: rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`

const Title = styled.h1`
  font-size: 3em;
  text-transform: capitalize;
  font-weight: 600;
  position: absolute;
  width: 100%;
  max-width: ${(props) => props.theme.sizes.maxWidthCentered};
  padding: 0 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 1;
`

const Hero = (props) => (
  <Wrapper height={props.height}>
    <BgImg
      height={props.height}
      image={props.image?.gatsbyImageData}
      backgroundColor={'#eeeeee'}
      alt="Hero image"
    />
    <Title>{props.title}</Title>
  </Wrapper>
)

export default Hero

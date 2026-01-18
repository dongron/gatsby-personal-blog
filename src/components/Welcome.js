import React from 'react'
import styled from 'styled-components'
import backgrounImage from '../images/welcome-background.jpg'
import theme from '../styles/theme'
import Button from './Button'
import config from '../utils/siteConfig'

const Wrapper = styled.div`
  background: #000000;
`

const Image = styled.div`
  width: 100%;
  height: 100svh;
  background-image:
    linear-gradient(${theme.colors.base} 5%, transparent 90%),
    url(${backgrounImage});
  background-size: cover;
  background-position: center center;
  text-align: center;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1.5em;
  padding-bottom: 5.5em;
`

const Title = styled.h1`
  font-size: 2.5em;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media screen and (min-width: ${theme.responsive.small}) {
    font-size: 3.5em;
  }

  @media screen and (min-width: ${theme.responsive.medium}) {
    font-size: 4em;
    padding-bottom: 0em;
  }
`

const Subtitle = styled.p`
  font-size: 1.1em;
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

  @media screen and (min-width: ${theme.responsive.small}) {
    font-size: 1.25em;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  justify-content: center;
`

const PrimaryButton = styled(Button)`
  background: ${theme.colors.highlight};
  border-color: ${theme.colors.highlight};

  &:hover {
    background: transparent;
    color: white;
    border-color: white;
  }
`

const SecondaryButton = styled(Button)`
  border-color: white;
  color: white;

  &:hover {
    background: white;
    color: ${theme.colors.base};
  }
`

const Welcome = () => {
  return (
    <Wrapper>
      <Image>
        <Title>
          {config.heroTitle} <br />
          {config.heroTitle2}
        </Title>
        <Subtitle>
          {config.heroTagline} <br />
          {config.heroTagline2} <br />
          {config.heroTagline3}
        </Subtitle>
        <ButtonGroup>
          <PrimaryButton to="/contact/" primary>
            Let's Ship It!
          </PrimaryButton>
        </ButtonGroup>
      </Image>
    </Wrapper>
  )
}

export default Welcome

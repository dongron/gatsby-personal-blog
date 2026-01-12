import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Button from './Button'
import config from '../utils/siteConfig'
import profileImage from '../images/profile-picture.jpg'

const Wrapper = styled.section`
  width: 100%;
  padding: ${props => props.theme.spacing.xxl} ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.tertiary};
`

const Inner = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;

  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex-direction: row;
    align-items: center;
  }
`

const PhotoWrapper = styled.div`
  flex-shrink: 0;
`

const Photo = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid ${props => props.theme.colors.white};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    width: 250px;
    height: 250px;
  }
`

const Content = styled.div`
  flex: 1;
  text-align: center;

  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    text-align: left;
  }
`

const Title = styled.h2`
  font-size: 2em;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.base};
`

const Description = styled.p`
  font-size: 1.1em;
  line-height: 1.7;
  color: gray;
  margin-bottom: 1.5rem;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    justify-content: flex-start;
  }
`

const AboutTeaser = () => {
  return (
    <Wrapper>
      <Inner>
        <PhotoWrapper>
          <Photo src={profileImage} alt={config.author} />
        </PhotoWrapper>
        <Content>
          <Title>About Me</Title>
          <Description>
            I'm {config.author}, a {config.authorTitle} with {config.authorTagline.toLowerCase()}.
            I specialize in building scalable web applications for healthcare, enterprise,
            and startups. My approach combines technical excellence with clear communication
            and a focus on delivering real business value.
          </Description>
          <ButtonGroup>
            <Button to="/about/" primary>
              Learn More About Me
            </Button>
            <Button to="/contact/">
              Get In Touch
            </Button>
          </ButtonGroup>
        </Content>
      </Inner>
    </Wrapper>
  )
}

export default AboutTeaser

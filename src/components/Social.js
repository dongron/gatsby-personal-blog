import React from 'react'
import styled from 'styled-components'
import theme from '../styles/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PageTitle from './PageTitle'

const Wrapper = styled.div`
  width: 80vw;
  min-height: 100vh;
  color: #000;
  margin: auto;
  text-align: center;
  padding-top: 25vh;
  padding-bottom: 15vh;
`

const IconContainer = styled.div`
  padding-top: 8vh;
  font-size: 45px;
  line-height: 150%;
`

const UsernameContainer = styled.div`
  font-size: 22px;
  line-height: 130%;
`

const LinksContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 1265px) {
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 1000px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`

const ExternalLink = styled.a`
  text-decoration: none;
  color: #000;
`

const githubUrl = 'https://github.com/dongron'
const linkedInUrl = 'https://www.linkedin.com/in/dominik-gronkiewicz-b696b950/'
const mailtoUrl =
  'mailto:me@dominikgronkiewicz.com?Subject=Mail%20from%20personal%20site'

const Social = () => {
  return (
    <Wrapper>
      <PageTitle> Contact & social media </PageTitle>
      <LinksContainer className="socials-grid-1">
        <div>
          <ExternalLink href={githubUrl}>
            <IconContainer>
              <FontAwesomeIcon icon={['fab', 'github']} />
            </IconContainer>
            <UsernameContainer>@dongron</UsernameContainer>
          </ExternalLink>
        </div>

        <div>
          <ExternalLink href={linkedInUrl}>
            <IconContainer>
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </IconContainer>
            <UsernameContainer>@dominik-gronkiewicz-b696b950</UsernameContainer>
          </ExternalLink>
        </div>

        <div>
          <ExternalLink href={mailtoUrl}>
            <IconContainer>
              <FontAwesomeIcon icon="envelope" />
            </IconContainer>
            <UsernameContainer>me@dominikgronkiewicz.com</UsernameContainer>
          </ExternalLink>
        </div>
      </LinksContainer>
    </Wrapper>
  )
}

export default Social

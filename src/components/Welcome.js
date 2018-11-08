import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import backgrounImage from '../images/welcome-background.jpg'
import theme from '../styles/theme'
import Helmet from 'react-helmet'
import PageTitle from './PageTitle'


const Wrapper = styled.div`
  background: #000000;
`

const Image = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(${theme.colors.base} 5%, transparent 90%), url(${backgrounImage});
  background-size: cover;
  background-position: center center;
  text-align: center;
  color: #FFFFFF;
`

const WelcomeTopSpacer = styled.div`
  height: 38vh;
`

const Welcome = () => {
  return (
    <Wrapper>
      <Image>
        <WelcomeTopSpacer />
        <PageTitle>Welcome to my personal site </PageTitle>
      </Image>
    </Wrapper>
  )
}

export default Welcome
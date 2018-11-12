import React from 'react'
import styled from 'styled-components'
import theme from '../styles/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid, Cell } from 'react-mdl'
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

const Social = () => {
  return (
    <Wrapper>
      <PageTitle> Contact & social media </PageTitle>
      <Grid className="demo-grid-1">
        <Cell col={4}>
          <IconContainer>
            <FontAwesomeIcon icon={['fab', 'github']} />
          </IconContainer>
          <UsernameContainer>
            @dongron
          </UsernameContainer>
        </Cell>
        <Cell col={4}>
          <IconContainer>
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </IconContainer>
          <UsernameContainer>
            @dominik-gronkiewicz-b696b950
          </UsernameContainer>
        </Cell>
        <Cell col={4}>
          <IconContainer>
            <FontAwesomeIcon icon="envelope" />
          </IconContainer>
          <UsernameContainer>
            me@dominikgronkiewicz.com
          </UsernameContainer>
        </Cell>
      </Grid>
    </Wrapper>
  )
}

export default Social

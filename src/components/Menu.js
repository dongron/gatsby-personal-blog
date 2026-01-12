import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = styled.header`
  background: ${props => props.theme.colors.base};
  width: 100%;
  padding: 1.5em 0;
`

const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }

  a {
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all 0.2s;
    border-bottom: 2px solid ${props => props.theme.colors.base};
    &:hover {
      color: white;
    }
  }
`

const DesktopMenu = styled.div`
  display: none;
  align-items: center;
  gap: 0.5em;

  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    display: flex;
  }
`

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: DarkGray;
  font-size: 1.5em;
  cursor: pointer;
  padding: 0.25em;
  transition: all 0.2s;

  &:hover {
    color: white;
  }

  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    display: none;
  }
`

const MobileNav = styled.div`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  flex-direction: column;
  background: ${props => props.theme.colors.base};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  padding: 1em 1.5em;
  z-index: 1000;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    display: none;
  }

  a {
    display: block;
    padding: 0.75em 0;
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all 0.2s;
    border-bottom: none;

    &:hover {
      color: white;
    }
  }
`

const HeaderWrapper = styled.div`
  position: relative;
`

const activeLinkStyle = {
  color: 'white',
}

const Menu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <HeaderWrapper>
      <Header>
        <Nav>
          <ul>
            <li>
              <Link to="/" activeStyle={activeLinkStyle}>
                Home
              </Link>
            </li>
            <DesktopMenu>
              <li>
                <Link to="/portfolio/" activeStyle={activeLinkStyle}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog/" activeStyle={activeLinkStyle}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about/" activeStyle={activeLinkStyle}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact/" activeStyle={activeLinkStyle}>
                  Contact
                </Link>
              </li>
            </DesktopMenu>
            <li>
              <MobileMenuButton onClick={toggleMobileMenu} aria-label="Toggle menu">
                <FontAwesomeIcon icon={mobileMenuOpen ? 'times' : 'bars'} />
              </MobileMenuButton>
            </li>
          </ul>
        </Nav>
      </Header>
      <MobileNav isOpen={mobileMenuOpen}>
        <Link to="/portfolio/" activeStyle={activeLinkStyle} onClick={closeMobileMenu}>
          Portfolio
        </Link>
        <Link to="/blog/" activeStyle={activeLinkStyle} onClick={closeMobileMenu}>
          Blog
        </Link>
        <Link to="/about/" activeStyle={activeLinkStyle} onClick={closeMobileMenu}>
          About
        </Link>
        <Link to="/contact/" activeStyle={activeLinkStyle} onClick={closeMobileMenu}>
          Contact
        </Link>
      </MobileNav>
    </HeaderWrapper>
  )
}

export default Menu

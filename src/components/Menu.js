import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const defaultMenuItems = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Portfolio',
    to: '/portfolio/',
  },
  {
    label: 'Blog',
    to: '/blog/',
  },
  {
    label: 'About',
    to: '/about/',
  },
  {
    label: 'Contact',
    to: '/contact/',
  },
]

const Header = styled.header`
  background: ${(props) => props.theme.colors.base};
  width: 100%;
  padding: 1.5em 0;
`

const Nav = styled.nav`
  width: 100%;
  max-width: ${(props) => props.theme.sizes.maxWidth};
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
    border-bottom: 2px solid ${(props) => props.theme.colors.base};

    &:hover {
      color: white;
    }
  }
`

const DesktopMenu = styled.div`
  display: none;
  align-items: center;
  gap: 0.5em;

  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    display: flex;
  }
`

const MobileMenu = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    display: none;
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

  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    display: none;
  }
`

const MobileNav = styled.div`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  background: ${(props) => props.theme.colors.base};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  padding: 1em 1.5em;
  z-index: 1000;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
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

const UlFullWidth = styled.ul`
  width: 100%;
  display: flex;
`

const HeaderWrapper = styled.div`
  position: relative;
`

const SimpleMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
`

const LanguageSwitch = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  color: DarkGray;
  font-weight: 600;
`

const LanguageCurrent = styled.span`
  color: white;
`

const LanguageDivider = styled.span`
  color: rgba(255, 255, 255, 0.45);
`

const activeLinkStyle = {
  color: 'white',
}

const Menu = ({ variant = 'default', content = {} }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuItems = content.items || defaultMenuItems

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  if (variant === 'polishLanding') {
    const homeLabel = content.homeLabel || 'Home'
    const homePath = content.homePath || '/pl/'
    const languageSwitch = content.languageSwitch || []

    return (
      <HeaderWrapper>
        <Header>
          <Nav>
            <SimpleMenu>
              <Link to={homePath} activeStyle={activeLinkStyle}>
                {homeLabel}
              </Link>

              {languageSwitch.length > 0 && (
                <LanguageSwitch aria-label="Language switch">
                  {languageSwitch.map((item, index) => (
                    <React.Fragment key={`${item.label}-${item.to || index}`}>
                      {index > 0 && <LanguageDivider>/</LanguageDivider>}
                      {item.current ? (
                        <LanguageCurrent aria-current="true">
                          {item.label}
                        </LanguageCurrent>
                      ) : (
                        <Link to={item.to}>{item.label}</Link>
                      )}
                    </React.Fragment>
                  ))}
                </LanguageSwitch>
              )}
            </SimpleMenu>
          </Nav>
        </Header>
      </HeaderWrapper>
    )
  }

  return (
    <HeaderWrapper>
      <Header>
        <Nav>
          <DesktopMenu>
            <UlFullWidth>
              {menuItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} activeStyle={activeLinkStyle}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </UlFullWidth>
          </DesktopMenu>

          <MobileMenu>
            <UlFullWidth>
              <li>
                <Link to="/" activeStyle={activeLinkStyle}>
                  Home
                </Link>
              </li>

              <li>
                <MobileMenuButton
                  onClick={toggleMobileMenu}
                  aria-label="Toggle menu"
                >
                  <FontAwesomeIcon icon={mobileMenuOpen ? 'times' : 'bars'} />
                </MobileMenuButton>
              </li>
            </UlFullWidth>
          </MobileMenu>
        </Nav>

        <MobileNav isOpen={mobileMenuOpen}>
          {menuItems.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeStyle={activeLinkStyle}
              onClick={closeMobileMenu}
            >
              {item.label}
            </Link>
          ))}
        </MobileNav>
      </Header>
    </HeaderWrapper>
  )
}

export default Menu

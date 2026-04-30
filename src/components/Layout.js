import React from 'react'
import { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.ico'
import GlobalStyleComponent from '../styles/global'
import theme from '../styles/theme'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faCheckSquare,
  faCoffee,
  faEnvelope,
  faAt,
  faCode,
  faHeartbeat,
  faMobileAlt,
  faComments,
  faBars,
  faTimes,
  faArrowRight,
  faLaptopCode,
  faServer,
  faTools,
  faPaperPlane,
  faUser,
  faBuilding,
  faDollarSign,
  faGlobe,
  faClock,
  faMapMarkerAlt,
  faPhone,
  faGavel,
  faChartBar,
  faBalanceScale,
  faUserTimes,
  faExclamationTriangle,
  faFileAlt,
  faTasks,
  faShieldAlt,
  faExternalLinkAlt,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons'

const Template = ({
  children,
  navigationVariant = 'default',
  menuContent,
  footerVariant = 'default',
  footerContent,
}) => {
  library.add(
    fab,
    faCheckSquare,
    faCoffee,
    faEnvelope,
    faAt,
    faCode,
    faHeartbeat,
    faMobileAlt,
    faComments,
    faBars,
    faTimes,
    faArrowRight,
    faLaptopCode,
    faServer,
    faTools,
    faPaperPlane,
    faUser,
    faBuilding,
    faDollarSign,
    faGlobe,
    faClock,
    faMapMarkerAlt,
    faPhone,
    faGavel,
    faChartBar,
    faBalanceScale,
    faUserTimes,
    faExclamationTriangle,
    faFileAlt,
    faTasks,
    faShieldAlt,
    faExternalLinkAlt,
    faChevronDown,
  )

  return (
    <div className="siteRoot">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon} />
      </Helmet>

      <ThemeProvider theme={theme}>
        <GlobalStyleComponent>
          <Menu variant={navigationVariant} content={menuContent} />
          <main className="siteContent">{children}</main>
          <Footer variant={footerVariant} content={footerContent} />
        </GlobalStyleComponent>
      </ThemeProvider>
    </div>
  )
}

export default Template

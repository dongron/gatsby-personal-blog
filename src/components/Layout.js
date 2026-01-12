import React from 'react'
import { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.ico'
import GlobalStyleComponent from '../styles/global'
import theme from '../styles/theme'
import config from '../utils/siteConfig'
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
} from '@fortawesome/free-solid-svg-icons'

const Template = ({ children }) => {
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
    faMapMarkerAlt
  )

  return (
    <div className="siteRoot">
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon} />
        <meta name="description" content={config.siteDescription} />
        <meta property="og:title" content={config.siteTitle} />
        <meta property="og:url" content={config.siteUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={config.siteTitle} />
      </Helmet>

      <ThemeProvider theme={theme}>
        <GlobalStyleComponent>
          <div className="siteContent">
            <Menu />
            {children}
          </div>
          <Footer />
        </GlobalStyleComponent>
      </ThemeProvider>
    </div>
  )
}

export default Template

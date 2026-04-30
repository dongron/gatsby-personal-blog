import React, { Component } from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'

const buildPageUrl = (pagePath = '') => {
  const normalizedPath = String(pagePath || '').replace(/^\/+|\/+$/g, '')

  if (!normalizedPath) {
    return `${config.siteUrl}/`
  }

  return `${config.siteUrl}/${normalizedPath}/`
}

const twitterProfileUrl = config.userTwitter
  ? `https://twitter.com/${config.userTwitter.replace(/^@/, '')}`
  : null

const sameAsProfiles = [
  config.linkedInUrl,
  config.githubUrl,
  twitterProfileUrl,
].filter(Boolean)

const organizationId = `${config.siteUrl}/#organization`
const personId = `${config.siteUrl}/#person`

const postalAddress = config.address
  ? {
      '@type': 'PostalAddress',
      streetAddress: config.address.streetAddress,
      addressLocality: config.address.addressLocality,
      postalCode: config.address.postalCode,
      addressCountry: config.address.addressCountry,
    }
  : undefined

const resolveLocaleConfig = (localeConfig = {}) => {
  return {
    htmlLanguage: localeConfig.htmlLanguage || config.htmlLanguage,
    openGraphLocale: localeConfig.openGraphLocale || config.openGraphLocale,
    hreflang: localeConfig.hreflang || config.hreflang,
    xDefaultHreflang:
      localeConfig.xDefaultHreflang || config.xDefaultHreflang,
    availableLanguages:
      localeConfig.availableLanguages || config.availableLanguages,
  }
}

const buildAlternateHref = (alternate = {}) => {
  if (alternate.href) {
    return alternate.href
  }

  if (typeof alternate.path === 'string') {
    return buildPageUrl(alternate.path)
  }

  return null
}

class SEO extends Component {
  render() {
    const {
      postNode,
      pagePath,
      postSEO,
      pageSEO,
      customTitle,
      noIndex,
      localeConfig,
      alternates,
    } = this.props
    let title
    let description
    let image
    let imgWidth
    let imgHeight
    let pageUrl
    let pageType = 'WebPage'
    const pageLocale = resolveLocaleConfig(localeConfig)
    const normalizedPagePath = String(pagePath || '').replace(/^\/+|\/+$/g, '')

    // Set Default OpenGraph Parameters for Fallback
    title = config.siteTitle
    description = config.siteDescription
    image = config.siteUrl + config.shareImage
    imgWidth = config.shareImageWidth
    imgHeight = config.shareImageHeight
    pageUrl = buildPageUrl(pagePath)

    if (customTitle) {
      title = postNode.title
      description = postNode.description || description
    }

    // Replace with Page Parameters if post or page
    if (postSEO || pageSEO) {
      title = postNode.title
      description =
        postNode.metaDescription === null
          ? postNode.body.childMarkdownRemark.excerpt
          : postNode.metaDescription.internal.content

      pageUrl = buildPageUrl(pagePath)
    }
    // Use Hero Image for OpenGraph
    if (postSEO) {
      image = 'https:' + postNode.heroImage.ogimg.src
      imgWidth = postNode.heroImage.ogimg.width
      imgHeight = postNode.heroImage.ogimg.height
    }

    const contactPageUrl = normalizedPagePath.includes('contact')
      ? buildPageUrl(normalizedPagePath)
      : `${config.siteUrl}/contact/`

    const organizationContactPoint = {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: config.email,
      telephone: config.phone,
      areaServed: config.serviceArea,
      availableLanguage: pageLocale.availableLanguages,
      description: config.contactPointDescription,
      url: contactPageUrl,
    }

    const alternateLinks = noIndex
      ? []
      : (alternates || [])
          .map((alternate) => {
            const href = buildAlternateHref(alternate)

            if (!href || !alternate.hrefLang) {
              return null
            }

            return {
              href,
              hrefLang: alternate.hrefLang,
              openGraphLocale: alternate.openGraphLocale,
            }
          })
          .filter(Boolean)

    if (alternateLinks.length === 0 && !noIndex) {
      alternateLinks.push(
        {
          href: pageUrl,
          hrefLang: pageLocale.hreflang,
          openGraphLocale: pageLocale.openGraphLocale,
        },
        {
          href: pageUrl,
          hrefLang: pageLocale.xDefaultHreflang,
        }
      )
    }

    const openGraphAlternateLocales = Array.from(
      new Set(
        alternateLinks
          .map((alternate) => alternate.openGraphLocale)
          .filter(
            (alternateLocale) =>
              alternateLocale && alternateLocale !== pageLocale.openGraphLocale
          )
      )
    )

    // Default Website Schema
    const schemaOrgJSONLD = [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${config.siteUrl}/#website`,
        url: config.siteUrl,
        name: config.siteTitle,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
        inLanguage: pageLocale.availableLanguages,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': personId,
        name: config.author,
        url: config.authorUrl,
        image: config.siteUrl + config.siteLogo,
        jobTitle: config.authorTitle,
        sameAs: sameAsProfiles,
        worksFor: {
          '@id': organizationId,
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': organizationId,
        name: config.publisher,
        url: config.siteUrl,
        description: config.siteDescription,
        logo: {
          '@type': 'ImageObject',
          url: config.siteUrl + config.siteLogo,
        },
        email: config.email,
        telephone: config.phone,
        sameAs: sameAsProfiles,
        founder: {
          '@id': personId,
        },
        address: postalAddress,
        areaServed: config.serviceArea,
        contactPoint: [organizationContactPoint],
      },
    ]

    if (normalizedPagePath.includes('contact')) {
      pageType = 'ContactPage'
    }

    // Blog Post Schema
    if (postSEO) {
      schemaOrgJSONLD.push(
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': config.siteUrl,
                name: config.siteTitle,
              },
            },
            {
              '@type': 'ListItem',
              position: 2,
              item: {
                '@id': pageUrl,
                name: title,
              },
            },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          url: pageUrl,
          name: title,
          alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
          headline: title,
          description: description,
          image: {
            '@type': 'ImageObject',
            url: image,
            width: imgWidth,
            height: imgHeight,
          },
          author: {
            '@id': personId,
          },
          publisher: {
            '@id': organizationId,
          },
          datePublished: postNode.publishDateISO,
          dateModified: postNode.updatedAt || postNode.publishDateISO,
          inLanguage: pageLocale.htmlLanguage,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': pageUrl,
          },
        }
      )
    }

    // Page SEO Schema
    if (pageSEO || customTitle) {
      const pageSchema = {
        '@context': 'https://schema.org',
        '@type': pageType,
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: title,
        description: description,
        inLanguage: pageLocale.htmlLanguage,
      }

      if (pageType === 'ContactPage') {
        pageSchema.mainEntity = {
          '@id': organizationId,
        }
        pageSchema.about = {
          '@id': personId,
        }
      }

      schemaOrgJSONLD.push(pageSchema)
    }

    return (
      <Helmet htmlAttributes={{ lang: pageLocale.htmlLanguage }}>
        {/* General tags */}
        <link rel="canonical" href={pageUrl} />
        {!noIndex &&
          alternateLinks.map((alternate) => (
            <link
              key={`${alternate.hrefLang}-${alternate.href}`}
              rel="alternate"
              hrefLang={alternate.hrefLang}
              href={alternate.href}
            />
          ))}
        <meta name="image" content={image} />
        <meta name="description" content={description} />

        {/* AI/LLM optimization tags */}
        <meta
          name="robots"
          content={
            noIndex
              ? 'noindex, follow'
              : 'index, follow, max-image-preview:large, max-snippet:-1'
          }
        />
        <meta name="author" content={config.author} />
        {postSEO && <meta name="article:author" content={config.author} />}
        {postSEO && <meta name="article:published_time" content={postNode.publishDateISO} />}

        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>

        {/* OpenGraph tags */}
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={config.siteTitle} />
        <meta property="og:locale" content={pageLocale.openGraphLocale} />
        {openGraphAlternateLocales.map((alternateLocale) => (
          <meta
            key={alternateLocale}
            property="og:locale:alternate"
            content={alternateLocale}
          />
        ))}
        {postSEO ? <meta property="og:type" content="article" /> : null}
        {!postSEO && <meta property="og:type" content="website" />}

        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content={imgWidth} />
        <meta property="og:image:height" content={imgHeight} />
        <meta property="og:description" content={description} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:creator"
          content={config.userTwitter ? config.userTwitter : ''}
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:description" content={description} />
      </Helmet>
    )
  }
}

export default SEO

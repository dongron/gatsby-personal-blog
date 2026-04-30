import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Button from '../components/Button'
import AboutTeaser from '../components/AboutTeaser'
import ServiceCard from '../components/ServiceCard'
import config from '../utils/siteConfig'
import { getWcagAuditPageContent } from '../utils/wcagAuditPageContent'

// ─── Hero ──────────────────────────────────────────────────────────────────────

const HeroSection = styled.section`
  background: ${(props) => props.theme.colors.base};
  color: ${(props) => props.theme.colors.white};
  padding: 5em ${(props) => props.theme.spacing.md} 4em;
  text-align: center;
`

const HeroInner = styled.div`
  max-width: ${(props) => props.theme.sizes.maxWidth};
  margin: 0 auto;
`

const HeroEyebrow = styled.p`
  font-size: 0.85em;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.lightBlue};
  margin: 0 0 1.25em;
`

const HeroHeadline = styled.h1`
  font-size: 2em;
  font-weight: 800;
  line-height: 1.2;
  margin: 0 0 0.75em;
  color: ${(props) => props.theme.colors.white};

  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    font-size: 2.75em;
  }

  @media screen and (min-width: ${(props) => props.theme.responsive.large}) {
    font-size: 3.25em;
  }
`

const HeroHeadlineBreak = styled.span`
  display: block;
`

const HeroSubheadline = styled.p`
  font-size: 1.1em;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.9);
  max-width: 680px;
  margin: 0 auto 2em;

  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    font-size: 1.2em;
  }
`

const HeroCtaWrapper = styled.div`
  margin-bottom: 3em;
`

const TrustBadges = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75em;

  @media screen and (min-width: ${(props) => props.theme.responsive.small}) {
    flex-direction: row;
    justify-content: center;
    gap: 2em;
  }
`

const TrustBadge = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-size: 0.9em;
  color: rgba(255, 255, 255, 0.9);

  svg {
    color: ${(props) => props.theme.colors.lightBlue};
    flex-shrink: 0;
  }
`

// ─── Shared section primitives ─────────────────────────────────────────────────

const SectionLight = styled.section`
  padding: ${(props) => props.theme.spacing.xxl}
    ${(props) => props.theme.spacing.md};
  background: ${(props) => props.theme.colors.tertiary};
`

const SectionWhite = styled.section`
  padding: ${(props) => props.theme.spacing.xxl}
    ${(props) => props.theme.spacing.md};
  background: ${(props) => props.theme.colors.white};
`

const SectionInner = styled.div`
  max-width: ${(props) => props.theme.sizes.maxWidth};
  margin: 0 auto;
`

const SectionHeading = styled.h2`
  font-size: 1.75em;
  font-weight: 800;
  color: ${(props) => props.theme.colors.base};
  margin: 0 0 1.25em;
  text-align: center;

  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    font-size: 2em;
    margin: 0 0 1.5em;
  }
`

const SectionIntro = styled.p`
  font-size: 1.05em;
  line-height: 1.75;
  color: ${(props) => props.theme.colors.text};
  max-width: 640px;
  margin: -1em auto 2.75em;
  text-align: center;
`

// ─── Problem cards ─────────────────────────────────────────────────────────────

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5em;

  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

// ─── Audience checklist ────────────────────────────────────────────────────────

const CheckList = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75em;
  max-width: 720px;

  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const CheckItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.85em;
  font-size: 0.975em;
  line-height: 1.55;
  color: ${(props) => props.theme.colors.text};

  svg {
    color: ${(props) => props.theme.colors.success};
    flex-shrink: 0;
    font-size: 1.5em;
    margin-top: 0.05em;
  }
`

// ─── Deliverables ──────────────────────────────────────────────────────────────

const DeliverableGrid = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5em;

  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const DeliverableItem = styled.li`
  display: flex;
  gap: 1.25em;
  align-items: flex-start;
`

const DeliverableIconCircle = styled.div`
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.highlight};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.white};
  font-size: 1em;
`

const DeliverableText = styled.div``

const DeliverableTitle = styled.h3`
  font-size: 1em;
  font-weight: 700;
  color: ${(props) => props.theme.colors.base};
  margin: 0 0 0.4em;
`

const DeliverableBody = styled.p`
  font-size: 0.925em;
  line-height: 1.7;
  color: ${(props) => props.theme.colors.text};
  margin: 0;
`

// ─── Process steps ─────────────────────────────────────────────────────────────

const StepList = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2em;

  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${(props) => props.theme.responsive.large}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const StepItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.75em;
`

const StepNumber = styled.span`
  font-size: 2.5em;
  font-weight: 800;
  color: ${(props) => props.theme.colors.highlight};
  line-height: 1;
`

const StepTitle = styled.h3`
  font-size: 1em;
  font-weight: 700;
  color: ${(props) => props.theme.colors.base};
  margin: 0;
`

const StepBody = styled.p`
  font-size: 0.925em;
  line-height: 1.7;
  color: ${(props) => props.theme.colors.text};
  margin: 0;
`

// ─── Case study ────────────────────────────────────────────────────────────────

const CaseStudySection = styled.section`
  padding: ${(props) => props.theme.spacing.xxl}
    ${(props) => props.theme.spacing.md};
  background: ${(props) => props.theme.colors.tertiary};
  border-left: none;
`

const CaseStudyInner = styled.div`
  max-width: ${(props) => props.theme.sizes.maxWidthCentered};
  margin: 0 auto;
`

const CaseStudyLabel = styled.p`
  font-size: 0.8em;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.highlight};
  margin: 0 0 0.75em;
`

const CaseStudyTitle = styled.h2`
  font-size: 1.5em;
  font-weight: 800;
  color: ${(props) => props.theme.colors.base};
  margin: 0 0 1.5em;

  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    font-size: 1.75em;
  }
`

const CaseStudyQuote = styled.blockquote`
  margin: 0 0 1.5em;
  padding: 1.5em 2em;
  background: ${(props) => props.theme.colors.white};
  border-left: 4px solid ${(props) => props.theme.colors.highlight};
  font-size: 1em;
  line-height: 1.8;
  color: ${(props) => props.theme.colors.text};
  font-style: italic;
  border-radius: 0 4px 4px 0;
`

const CaseStudyLink = styled(Link)`
  font-weight: 600;
  color: ${(props) => props.theme.colors.highlight};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.4em;

  &:hover {
    text-decoration: underline;
  }
`

// ─── FAQ ───────────────────────────────────────────────────────────────────────

const FaqList = styled.div`
  max-width: 720px;
  margin: 0 auto;
`

const FaqItem = styled.details`
  border-bottom: 1px solid
    ${(props) => props.theme.colors.secondary || '#e0e0e0'};

  &:first-of-type {
    border-top: 1px solid
      ${(props) => props.theme.colors.secondary || '#e0e0e0'};
  }

  &[open] summary svg {
    transform: rotate(180deg);
  }
`

const FaqQuestion = styled.summary`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25em 0;
  cursor: pointer;
  font-weight: 600;
  font-size: 1em;
  color: ${(props) => props.theme.colors.base};
  list-style: none;

  &::-webkit-details-marker {
    display: none;
  }

  svg {
    flex-shrink: 0;
    color: ${(props) => props.theme.colors.highlight};
    transition: transform 0.2s ease;
    transform: rotate(0deg);
  }

  @media (prefers-reduced-motion: reduce) {
    svg {
      transition: none;
    }
  }
`

const FaqAnswer = styled.p`
  padding: 0 0 1.25em;
  margin: 0;
  font-size: 0.975em;
  line-height: 1.75;
  color: ${(props) => props.theme.colors.text};
`

// ─── Final CTA ─────────────────────────────────────────────────────────────────

const FinalCtaSection = styled.section`
  background: ${(props) => props.theme.colors.base};
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacing.xxl}
    ${(props) => props.theme.spacing.md};
  text-align: center;
`

const FinalCtaInner = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const FinalCtaTitle = styled.h2`
  font-size: 1.75em;
  font-weight: 800;
  color: ${(props) => props.theme.colors.white};
  margin: 0 0 0.75em;

  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    font-size: 2.25em;
  }
`

const FinalCtaBody = styled.p`
  font-size: 1.05em;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.92);
  margin: 0 0 2.25em;
`

// ─── Sticky mobile CTA ──────────────────────────────────────────────────

const StickyMobileCta = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
  padding: 0.75em ${(props) => props.theme.spacing.md}
    calc(0.75em + env(safe-area-inset-bottom));
  background: ${(props) => props.theme.colors.base};
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.18);
  display: flex;
  justify-content: center;

  a {
    width: 100%;
    max-width: 480px;
    text-align: center;
  }

  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    display: none;
  }
`

// ─── Template ──────────────────────────────────────────────────────────────────

const WcagAuditTemplate = ({ pageContext }) => {
  const locale = pageContext.locale || 'en'
  const content = getWcagAuditPageContent(locale)
  const contactUrl = `${config.siteUrl}${content.hero.cta.to}`
  const pageUrl = `${config.siteUrl}/${content.seo.pagePath}/`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name:
      locale === 'pl'
        ? 'Audyt WCAG dla e-commerce'
        : 'WCAG Audit for E-commerce',
    description: content.seo.description,
    provider: {
      '@type': 'Person',
      name: config.author,
      url: config.siteUrl,
    },
    areaServed: [
      { '@type': 'Place', name: 'European Union' },
      { '@type': 'Place', name: 'United States' },
      { '@type': 'Place', name: 'Worldwide' },
    ],
    audience: {
      '@type': 'BusinessAudience',
      audienceType:
        locale === 'pl'
          ? 'Sklepy internetowe, platformy SaaS, marketplace'
          : 'Online stores, SaaS platforms, marketplaces',
    },
    serviceType:
      locale === 'pl' ? 'Audyt dostępności WCAG' : 'WCAG Accessibility Audit',
    url: pageUrl,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: '2500',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
        minPrice: '2500',
      },
      availability: 'https://schema.org/InStock',
      url: contactUrl,
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.seo.schemaFaq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: locale === 'pl' ? 'Strona główna' : 'Home',
        item: `${config.siteUrl}${content.menu.homePath}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name:
          locale === 'pl'
            ? 'Audyt WCAG dla e-commerce'
            : 'WCAG Audit for E-commerce',
        item: pageUrl,
      },
    ],
  }

  return (
    <Layout
      navigationVariant={content.layout.navigationVariant}
      menuContent={content.menu}
      footerVariant={content.layout.footerVariant}
      footerContent={content.footer}
    >
      <Helmet>
        <title>{content.seo.title}</title>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      <SEO
        pagePath={content.seo.pagePath}
        customTitle
        postNode={{
          title: content.seo.title,
          description: content.seo.description,
        }}
        localeConfig={content.locale}
        alternates={pageContext.seoAlternates}
      />

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <HeroSection aria-labelledby="wcag-hero-heading">
        <HeroInner>
          <HeroEyebrow>{content.hero.eyebrow}</HeroEyebrow>
          <HeroHeadline id="wcag-hero-heading">
            {content.hero.headline.map((line, i) => (
              <HeroHeadlineBreak key={i}>{line}</HeroHeadlineBreak>
            ))}
          </HeroHeadline>
          <HeroSubheadline>{content.hero.subheadline}</HeroSubheadline>
          <HeroCtaWrapper>
            <Button to={content.hero.cta.to} primary onDark>
              {content.hero.cta.label}
            </Button>
          </HeroCtaWrapper>
          <TrustBadges>
            {content.hero.trustBadges.map((badge) => (
              <TrustBadge key={badge.text}>
                <FontAwesomeIcon icon={badge.icon} aria-hidden="true" />
                {badge.text}
              </TrustBadge>
            ))}
          </TrustBadges>
        </HeroInner>
      </HeroSection>

      {/* ── Problem ────────────────────────────────────────────────────── */}
      <SectionLight aria-labelledby="wcag-problem-heading">
        <SectionInner>
          <SectionHeading id="wcag-problem-heading">
            {content.problem.title}
          </SectionHeading>
          <SectionIntro>{content.problem.intro}</SectionIntro>
          <CardGrid>
            {content.problem.cards.map((card) => (
              <ServiceCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                description={card.body}
              />
            ))}
          </CardGrid>
        </SectionInner>
      </SectionLight>

      {/* ── Audience ───────────────────────────────────────────────────── */}
      <SectionWhite aria-labelledby="wcag-audience-heading">
        <SectionInner>
          <SectionHeading id="wcag-audience-heading">
            {content.audience.title}
          </SectionHeading>
          <SectionIntro>{content.audience.intro}</SectionIntro>
          <CheckList>
            {content.audience.items.map((item) => (
              <CheckItem key={item}>
                <FontAwesomeIcon icon="check-square" aria-hidden="true" />
                {item}
              </CheckItem>
            ))}
          </CheckList>
        </SectionInner>
      </SectionWhite>

      {/* ── Deliverables ───────────────────────────────────────────────── */}
      <SectionLight aria-labelledby="wcag-deliverables-heading">
        <SectionInner>
          <SectionHeading id="wcag-deliverables-heading">
            {content.deliverables.title}
          </SectionHeading>
          <DeliverableGrid>
            {content.deliverables.items.map((item) => (
              <DeliverableItem key={item.title}>
                <DeliverableIconCircle aria-hidden="true">
                  <FontAwesomeIcon icon={item.icon} />
                </DeliverableIconCircle>
                <DeliverableText>
                  <DeliverableTitle>{item.title}</DeliverableTitle>
                  <DeliverableBody>{item.body}</DeliverableBody>
                </DeliverableText>
              </DeliverableItem>
            ))}
          </DeliverableGrid>
        </SectionInner>
      </SectionLight>

      {/* ── Process ────────────────────────────────────────────────────── */}
      <SectionWhite aria-labelledby="wcag-process-heading">
        <SectionInner>
          <SectionHeading id="wcag-process-heading">
            {content.process.title}
          </SectionHeading>
          <StepList>
            {content.process.steps.map((step) => (
              <StepItem key={step.number}>
                <StepNumber aria-hidden="true">{step.number}</StepNumber>
                <StepTitle>{step.title}</StepTitle>
                <StepBody>{step.body}</StepBody>
              </StepItem>
            ))}
          </StepList>
        </SectionInner>
      </SectionWhite>

      {/* ── Case Study ─────────────────────────────────────────────────── */}
      <CaseStudySection aria-labelledby="wcag-case-study-heading">
        <CaseStudyInner>
          <CaseStudyLabel>{content.caseStudy.label}</CaseStudyLabel>
          <CaseStudyTitle id="wcag-case-study-heading">
            {content.caseStudy.title}
          </CaseStudyTitle>
          <CaseStudyQuote cite={`${config.siteUrl}${content.caseStudy.linkTo}`}>
            {content.caseStudy.quote}
          </CaseStudyQuote>
          <CaseStudyLink
            to={content.caseStudy.linkTo}
            hrefLang={content.caseStudy.linkHrefLang}
            lang={content.caseStudy.linkLang}
          >
            {content.caseStudy.linkLabel}
          </CaseStudyLink>
        </CaseStudyInner>
      </CaseStudySection>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <SectionWhite aria-labelledby="wcag-faq-heading">
        <SectionInner>
          <SectionHeading id="wcag-faq-heading">
            {content.faq.title}
          </SectionHeading>
          <FaqList>
            {content.seo.schemaFaq.map((item) => (
              <FaqItem key={item.question}>
                <FaqQuestion>
                  {item.question}
                  <FontAwesomeIcon icon="chevron-down" aria-hidden="true" />
                </FaqQuestion>
                <FaqAnswer>{item.answer}</FaqAnswer>
              </FaqItem>
            ))}
          </FaqList>
        </SectionInner>
      </SectionWhite>

      <AboutTeaser content={content.about} />

      {/* ── Final CTA ──────────────────────────────────────────────────── */}
      <FinalCtaSection aria-labelledby="wcag-cta-heading">
        <FinalCtaInner>
          <FinalCtaTitle id="wcag-cta-heading">
            {content.finalCta.title}
          </FinalCtaTitle>
          <FinalCtaBody>{content.finalCta.body}</FinalCtaBody>
          <Button to={content.finalCta.cta.to} primary onDark>
            {content.finalCta.cta.label}
          </Button>
        </FinalCtaInner>
      </FinalCtaSection>
      <StickyMobileCta>
        <Button to={content.hero.cta.to} primary onDark>
          {content.hero.cta.label}
        </Button>
      </StickyMobileCta>    </Layout>
  )
}

export default WcagAuditTemplate

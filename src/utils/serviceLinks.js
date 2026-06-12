// Service landing pages that live in Contentful (plus the wcag-audit
// template) and would otherwise have no internal links pointing at them.
// The Contentful Page model has no field separating service landing pages
// from utility pages (about, resume, privacy-policy, ...), so the list is
// maintained by hand. Add new landing pages here so they get footer links.
const serviceLinks = [
  {
    label: 'Next.js Consultant Switzerland',
    to: '/nextjs-consultant-switzerland/',
  },
  {
    label: 'Freelance React Developer Switzerland',
    to: '/freelance-react-developer-switzerland/',
  },
  {
    label: 'Web App Consultant Switzerland',
    to: '/web-app-consultant-switzerland/',
  },
  {
    label: 'AI Consultant Switzerland',
    to: '/ai-consultant-switzerland/',
  },
  {
    label: 'Headless Sanity Developer Switzerland',
    to: '/headless-sanity-developer-switzerland/',
  },
  {
    label: 'WCAG Accessibility Audit Switzerland',
    to: '/wcag-accessibility-audit-switzerland/',
  },
  {
    label: 'Next.js Consultant Australia',
    to: '/nextjs-consultant-australia/',
  },
  {
    label: 'Freelance React Developer Australia',
    to: '/freelance-react-developer-australia/',
  },
  {
    label: 'Web App Consultant Australia',
    to: '/web-app-consultant-australia/',
  },
  {
    label: 'AI Consultant Australia',
    to: '/ai-consultant-australia/',
  },
  {
    label: 'Headless Sanity Developer Australia',
    to: '/headless-sanity-developer-australia/',
  },
  {
    label: 'WCAG Accessibility Audit Australia',
    to: '/wcag-accessibility-audit-australia/',
  },
  {
    label: 'WCAG Audit for E-commerce',
    to: '/wcag-audit-ecommerce/',
  },
]

export default serviceLinks

# Dominik Gronkiewicz - Senior React & Next.js Developer

I help founders and product teams turn slow, brittle or unfinished web apps into fast, maintainable products that support real business growth.

Available for remote React, Next.js and TypeScript projects: **20-40 hours/week**, with overlapping EU/AU hours.

This repository powers [dominikgronkiewicz.com](https://dominikgronkiewicz.com), my portfolio, technical blog and service website.

**Need help with a React, Next.js or TypeScript product?** Start here: [dominikgronkiewicz.com/contact](https://dominikgronkiewicz.com/contact/)

[Visit the live website](https://dominikgronkiewicz.com) | [View portfolio](https://dominikgronkiewicz.com/portfolio/) | [Read the blog](https://dominikgronkiewicz.com/blog/) | [Start a project](https://dominikgronkiewicz.com/contact/)

[![Live website](https://img.shields.io/badge/live-dominikgronkiewicz.com-121212?style=flat-square)](https://dominikgronkiewicz.com)
[![Gatsby](https://img.shields.io/badge/Gatsby-5-663399?style=flat-square&logo=gatsby)](https://www.gatsbyjs.com/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=121212)](https://react.dev/)
[![Contentful](https://img.shields.io/badge/CMS-Contentful-2478CC?style=flat-square&logo=contentful)](https://www.contentful.com/)
[![Netlify](https://img.shields.io/badge/Hosting-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=121212)](https://www.netlify.com/)

## Proof Of Work

- **Flowrence Healthcare Platform:** Built full-stack product features for a healthcare platform connecting patients with nurse practitioners across clinic locations and mobile services.
- **CeHDI - Global Center For Health Diplomacy And Inclusion:** Rebuilt and improved a global health diplomacy website with modern frontend architecture, accessible UI patterns and maintainable content workflows.
- **Novartis / Altimetrik:** Worked on enterprise pharmaceutical web applications, dashboards, Progressive Web App architecture and shared frontend systems.
- **More case studies:** See the current portfolio at [dominikgronkiewicz.com/portfolio](https://dominikgronkiewicz.com/portfolio/).

## What I Do

- **Modern web apps:** React, Next.js and TypeScript applications built for performance, reliability and scale.
- **Healthcare and enterprise software:** Secure, accessible interfaces for teams that need dependable workflows and careful delivery.
- **Progressive Web Apps:** Offline-capable experiences with app-like behavior across devices.
- **Product rescue and modernization:** Taking over messy, unfinished or aging products and turning them into maintainable systems.
- **Technical consulting:** Architecture reviews, code audits, frontend modernization and delivery guidance.

## Why Teams Work With Me

- **10 years of production experience:** I have shipped real web applications across healthcare, enterprise, SaaS, Web3 and agency environments.
- **Senior execution without hand-holding:** I can own features, clarify requirements, make architecture decisions and keep delivery moving.
- **Strong frontend depth:** React, Next.js, TypeScript, CMS integrations, accessibility, performance and design-system implementation.
- **Business-aware delivery:** I care about conversion, maintainability, product risk and what the software is supposed to unlock for the business.
- **Clear async communication:** Remote-first collaboration with overlap for EU, Australia and Switzerland.

## Best Fit

I am a strong fit if you need:

- A senior React or Next.js developer who can work independently.
- A technical partner for rebuilding, modernizing or finishing a web product.
- Help with frontend architecture, Contentful or Sanity CMS, accessibility or performance.
- Someone comfortable with product delivery, technical communication and practical tradeoffs.

## The Agentic Architect AI Lab

I also run [The Agentic Architect AI Lab](https://www.skool.com/ai-for-software-business-9941), a Skool community for senior developers learning to ship products with AI leverage, agentic workflows and practical software architecture.

## What This Repo Proves

This repository is the production codebase behind the live site and a public example of how I structure a content-driven portfolio with performance, SEO and maintainability in mind.

- Gatsby 5 and React 18 application architecture.
- Contentful-backed pages, blog posts, tags and portfolio entries.
- Styled Components design-system primitives.
- SEO metadata, canonical URLs, Open Graph data, JSON-LD schema and sitemap generation.
- RSS feed, PWA manifest and offline support.
- Netlify deployment setup and contact form integration.
- Responsive templates for home, blog, portfolio, accessibility landing pages and contact flows.
- Public code showing how I organize a real content-driven marketing site.

## Tech Stack

The site is intentionally built as a real production example of the kind of systems I ship: content-driven, SEO-aware, maintainable and deployed.

| Area      | Tools                                                  |
| --------- | ------------------------------------------------------ |
| Framework | Gatsby 5, React 18                                     |
| Content   | Contentful, Markdown, GraphQL                          |
| Styling   | styled-components, shared theme tokens                 |
| Media     | Gatsby Image, Sharp, Contentful assets                 |
| SEO       | React Helmet, canonical URLs, sitemap, robots.txt, RSS |
| Hosting   | Netlify                                                |
| Quality   | ESLint, Stylelint, Prettier                            |

## Work With Me

Use the live site if you want to discuss a React, Next.js, TypeScript, accessibility or web app modernization project:

- Website: [dominikgronkiewicz.com](https://dominikgronkiewicz.com)
- Contact: [dominikgronkiewicz.com/contact](https://dominikgronkiewicz.com/contact/)
- Email: [me@dominikgronkiewicz.com](mailto:me@dominikgronkiewicz.com)
- LinkedIn: [Dominik Gronkiewicz](https://www.linkedin.com/in/dominik-gronkiewicz-b696b950/)
- GitHub: [dongron](https://github.com/dongron)
- Secondary GitHub: [dominikgronkiewicz](https://github.com/dominikgronkiewicz)
- Skool Community: [The Agentic Architect AI Lab](https://www.skool.com/ai-for-software-business-9941)

**Ready to improve a web product?** Send the project context through [the contact page](https://dominikgronkiewicz.com/contact/).

## Repository Tour

- [src/components](src/components) - reusable UI, layout, navigation, service cards, portfolio cards and content sections.
- [src/templates](src/templates) - Gatsby templates for home, pages, blog posts, portfolio listings and case studies.
- [src/pages](src/pages) - file-based pages, including contact.
- [src/styles](src/styles) - theme and global styling foundations.
- [src/utils/siteConfig.js](src/utils/siteConfig.js) - site metadata, contact links, availability and SEO defaults.
- [gatsby-node.js](gatsby-node.js) - dynamic page creation for Contentful content.
- [SETUP_INSTRUCTIONS.md](SETUP_INSTRUCTIONS.md) - extra notes for the portfolio content model and redesign setup.

## Local Development

This project uses Contentful as the content source. You need Contentful credentials before Gatsby can build the full site locally.

1. Install dependencies:

   ```bash
   npm install --legacy-peer-deps
   ```

2. Configure Contentful credentials. The setup script can import the starter content model and create the local environment file:

   ```bash
   npm run setup
   ```

   For Netlify and production builds, configure these environment variables:

   ```bash
   ACCESS_TOKEN
   SPACE_ID
   GOOGLE_ANALYTICS
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Create a production build:

   ```bash
   npm run build
   ```

5. Serve the production build locally:

   ```bash
   npm run serve-local
   ```

Useful maintenance command:

```bash
npm run clean
```

## Content Notes

The live site content is managed in Contentful. Blog posts, pages, tags and portfolio items are generated from Contentful entries at build time.

The portfolio redesign expects a `portfolioItem` content type. See [SETUP_INSTRUCTIONS.md](SETUP_INSTRUCTIONS.md) for the field list and setup checklist.

Do not commit Contentful tokens, space IDs or other credentials. Treat them like production secrets.

## Acknowledgements

This site started from [gatsby-starter-gcn](https://github.com/ryanwiemer/gatsby-starter-gcn), then evolved into a custom portfolio, blog and service website.

## License

This project is available under the [MIT License](LICENSE).

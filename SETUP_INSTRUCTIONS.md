# Portfolio Website Redesign - Setup Instructions

This document contains instructions for completing the portfolio website redesign.

## Changes Made

### New Components Created
- `src/components/Button.js` - Reusable button component with link support
- `src/components/AvailabilityBadge.js` - Availability status indicator
- `src/components/AvailabilityBanner.js` - Full-width availability banner
- `src/components/Section.js` - Consistent section wrapper
- `src/components/ServiceCard.js` - Service offering cards
- `src/components/ProjectCard.js` - Portfolio project cards
- `src/components/ProjectFilter.js` - Portfolio category filter
- `src/components/Services.js` - "What I Do" section
- `src/components/FeaturedWork.js` - Featured projects section
- `src/components/LatestArticles.js` - Latest blog posts section
- `src/components/AboutTeaser.js` - About preview for home
- `src/components/TechStack.js` - Technology grid for About page

### New Templates Created
- `src/templates/portfolio.js` - Portfolio listing page
- `src/templates/portfolio-item.js` - Individual project case study
- `src/templates/about.js` - About page

### Updated Files
- `src/styles/theme.js` - Added new colors and spacing utilities
- `src/utils/siteConfig.js` - Added author info and social URLs
- `src/components/Menu.js` - Updated navigation with all pages + mobile menu
- `src/components/Footer.js` - Expanded footer with multiple columns
- `src/components/Layout.js` - Added new FontAwesome icons
- `src/components/Welcome.js` - Updated hero with CTAs
- `src/components/Social.js` - Simplified social links section
- `src/templates/index.js` - Added all new home page sections
- `src/pages/contact.js` - Enhanced contact page
- `gatsby-node.js` - Added portfolio and about page generation

---

## Contentful Setup Required

You need to create the **Portfolio Item** content type in Contentful:

### Content Type: Portfolio Item
**Content Type ID:** `portfolioItem`

| Field Name | Field ID | Type | Required | Notes |
|------------|----------|------|----------|-------|
| Title | `title` | Short text | Yes | Project name |
| Slug | `slug` | Short text | Yes | URL slug (e.g., "flowrence-app") |
| Client | `client` | Short text | No | Client or company name |
| Description | `description` | Short text | Yes | Brief description for cards (~100 chars) |
| Body | `body` | Long text (Markdown) | No | Full case study content |
| Hero Image | `heroImage` | Media | No | Main project image |
| Gallery | `gallery` | Media (multiple) | No | Additional project screenshots |
| Technologies | `technologies` | Short text list | No | Tech stack tags (e.g., "React", "TypeScript") |
| Category | `category` | Short text | No | Filter category: "webapp", "healthcare", "enterprise", "pwa" |
| Timeline | `timeline` | Short text | No | e.g., "Jan 2024 - Present" |
| Role | `role` | Short text | No | e.g., "Lead Frontend Developer" |
| Project URL | `projectUrl` | Short text | No | Live project URL |
| Featured | `featured` | Boolean | No | Show on home page |
| Order | `order` | Number | No | Display order (lower = first) |
| Meta Description | `metaDescription` | Long text | No | SEO description |

### Steps to Create in Contentful:

1. Go to **Content model** in Contentful
2. Click **Add content type**
3. Enter:
   - Name: `Portfolio Item`
   - Content type ID: `portfolioItem`
4. Add each field from the table above
5. Click **Save**

### Add Sample Portfolio Items:

Create 2-3 portfolio items to test:

**Example 1: Healthcare Platform**
- Title: Flowrence Healthcare Platform
- Slug: flowrence-healthcare
- Client: Flowrence
- Description: Patient management platform serving 10,000+ healthcare providers
- Technologies: React, TypeScript, Node.js, PostgreSQL
- Category: healthcare
- Featured: true
- Order: 1

**Example 2: Enterprise Dashboard**
- Title: Novartis Analytics Dashboard
- Slug: novartis-analytics
- Client: Novartis
- Description: Real-time analytics dashboard for pharmaceutical research teams
- Technologies: Next.js, D3.js, GraphQL, AWS
- Category: enterprise
- Featured: true
- Order: 2

---

## Running the Project

```bash
# Install dependencies (if not already done)
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build for production
npm run build

# Serve production build locally
npm run serve-local
```

---

## Build Errors & Troubleshooting

### "Cannot query field allContentfulPortfolioItem"

This error means the Portfolio Item content type doesn't exist in Contentful yet, or you haven't published any items. The code handles this gracefully - the portfolio page will show an empty state.

**Solution:** Create the content type in Contentful and add at least one portfolio item.

### GraphQL Schema Errors

If you see schema-related errors, try:
```bash
# Clear Gatsby cache
npm run clean

# Restart dev server
npm run dev
```

### Missing Images

If images don't load:
1. Ensure heroImage and gallery fields are properly connected in Contentful
2. Make sure images are published (not in draft)
3. Check that `gatsbyImageData` is being queried correctly

---

## Post-Launch Checklist

- [ ] Create Portfolio Item content type in Contentful
- [ ] Add 2-3 portfolio items
- [ ] Update `siteConfig.js` with correct social URLs
- [ ] Test all navigation links
- [ ] Test contact form submission (Netlify Forms)
- [ ] Verify mobile responsive design
- [ ] Check Lighthouse scores
- [ ] Deploy to Netlify

---

## File Structure Summary

```
src/
├── components/
│   ├── AboutTeaser.js       (NEW)
│   ├── AvailabilityBadge.js (NEW)
│   ├── AvailabilityBanner.js(NEW)
│   ├── Button.js            (NEW)
│   ├── FeaturedWork.js      (NEW)
│   ├── Footer.js            (UPDATED)
│   ├── LatestArticles.js    (NEW)
│   ├── Layout.js            (UPDATED)
│   ├── Menu.js              (UPDATED)
│   ├── ProjectCard.js       (NEW)
│   ├── ProjectFilter.js     (NEW)
│   ├── Section.js           (NEW)
│   ├── ServiceCard.js       (NEW)
│   ├── Services.js          (NEW)
│   ├── Social.js            (UPDATED)
│   ├── TechStack.js         (NEW)
│   └── Welcome.js           (UPDATED)
├── pages/
│   └── contact.js           (UPDATED)
├── styles/
│   └── theme.js             (UPDATED)
├── templates/
│   ├── about.js             (NEW)
│   ├── index.js             (UPDATED)
│   ├── portfolio.js         (NEW)
│   └── portfolio-item.js    (NEW)
└── utils/
    └── siteConfig.js        (UPDATED)

gatsby-node.js               (UPDATED)
```

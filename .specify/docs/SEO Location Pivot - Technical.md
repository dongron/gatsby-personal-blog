# SEO Location Pivot, Technical Changes

Date: 2026-05-13
Companion to: `SEO Location Pivot - Strategy.md`
Scope: On-site technical changes, schema, footer, Google Business Profile. First implementation pass covers existing site-wide pages only: footer, contact copy, central config and global schema. Country landing pages remain a later phase.

## Core principle

Separate three things that get conflated:

1. **Legal address** = must reflect reality (PL registered address if invoicing through działalność).
2. **Marketing positioning** = where you serve clients, working hours, timezone.
3. **Local SEO signals** = GBP, NAP citations, only relevant if targeting local-search queries.

Pivot moves marketing positioning. Legal stays accurate. GBP gets sidelined.

## 1. Google Business Profile

**Action: do not create AU/CH listings. Sideline the PL listing.**

- GBP requires a verifiable physical address per country (postcard or video verification). Can't list Sydney from Chiang Mai.
- GBP is built for "near me" local search (plumbers, dentists, agencies). Senior remote devs are not hired through Maps.
- A Częstochowa GBP listing actively signals "PL-local business" to anyone Googling, undermines pivot.

**Concrete steps:**

- Option A (preferred): delete the Częstochowa GBP listing entirely.
- Option B: convert to **service-area business** mode, hide the physical address, set service area to PL + select EU countries. No city pin.
- Do not list Australia, Switzerland or any other target country in GBP.

## 2. Website footer

**Current (assumed)**: prominent "Częstochowa, Poland" address visible in footer.

**Target**:

- Legal address kept, but shrunk to fine-print at the bottom of the footer (small text, low visual weight).
- Marketing positioning line takes the prominent slot.

**Example footer structure:**

```text
[Logo] [Nav] [Social]

Serving clients in Australia, Switzerland and the EU.
Remote, overlapping AU/EU hours.

---
© 2026 [Business Name]. Registered in Poland.
[Legal Name], [PL Registered Address]
```

The bottom legal line stays for EU/PL compliance (działalność disclosure, EU consumer protection). Visually de-emphasize, do not delete.

## 3. Contact page

- Remove "Częstochowa, Poland" headline.
- Replace with timezone + served regions framing.
- Keep the legal address on this page too (typically required), but in the same fine-print treatment as the footer.

**Example contact hero:**

```text
Get in touch.
Remote-first, working overlapping AU/EU hours. Available for clients in Australia, Switzerland and the EU.
Typical response time: within one business day.
[Book a call button]
```

## 4. Schema.org / JSON-LD

This is where geo-SEO is actually won, more than in footer copy.

Add a `ProfessionalService` entity alongside the existing site-wide `Organization` and `Person` schema in `src/components/SEO.js`. Keep a stable `@id` such as `https://[domain]/#business` so later service pages can reference it.

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "[Business Name]",
  "url": "https://[domain]",
  "image": "https://[domain]/og-image.jpg",
  "description": "Senior React and Next.js developer serving clients in Australia, Switzerland and the EU. Remote, overlapping AU/EU hours.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[PL street]",
    "addressLocality": "Częstochowa",
    "postalCode": "[PL postcode]",
    "addressCountry": "PL"
  },
  "areaServed": [
    { "@type": "Country", "name": "Australia" },
    { "@type": "Country", "name": "Switzerland" },
    { "@type": "AdministrativeArea", "name": "European Union" }
  ],
  "availableLanguage": ["en", "pl"],
  "priceRange": "€€€",
  "founder": {
    "@type": "Person",
    "name": "Dominik Gronkiewicz"
  }
}
```

Also add a `Person` schema on the about page with the same `address` (PL) and `worksFor` reference.

**Notes:**

- `address` stays PL = legal truth, matches what's on invoices and the footer. Inconsistency tanks trust signals.
- `areaServed` is where the geo-SEO leverage lives. First pass targets Australia, Switzerland and the EU only.
- `availableLanguage` add `de` only if planning German-language content for CH/DACH later.

## 5. Per-page geo signals

Later, when country landing pages exist (e.g. `/freelance-react-developer-australia`), add page-level schema overrides:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Freelance React Developer",
  "provider": { "@id": "https://[domain]/#business" },
  "areaServed": { "@type": "Country", "name": "Australia" },
  "audience": {
    "@type": "BusinessAudience",
    "geographicArea": { "@type": "Country", "name": "Australia" }
  }
}
```

Reference the main ProfessionalService entity via `@id`, don't repeat the full block.

## 6. hreflang tags

Later, in `<head>` of country-targeted pages:

```html
<link
  rel="alternate"
  hreflang="en-AU"
  href="https://[domain]/freelance-react-developer-australia"
/>
<link
  rel="alternate"
  hreflang="en-CH"
  href="https://[domain]/freelance-react-developer-switzerland"
/>
<link
  rel="alternate"
  hreflang="en"
  href="https://[domain]/freelance-react-developer"
/>
<link
  rel="alternate"
  hreflang="x-default"
  href="https://[domain]/freelance-react-developer"
/>
```

If pages are managed in a CMS, this needs to be wired so each country variant cross-links to the others.

## 7. Title tags and meta descriptions

Geo-target in the title for country pages:

- `<title>Freelance React Developer for Australian Teams | [Name]</title>`
- `<title>Senior Next.js Consultant in Switzerland (Remote, AU/EU Overlap) | [Name]</title>`

Meta description should include timezone and proof signal:

```html
<meta
  name="description"
  content="Senior React/Next.js developer for Australian startups. 10 years experience, remote AU/EU overlap hours, EU-incorporated. Book a call."
/>
```

## 8. Sitemap and robots

- Regenerate sitemap.xml after new country pages go live, submit to Google Search Console.
- Verify no `noindex` on the new pages.
- Add the new pages to internal linking from the homepage and main services page.

## 9. NAP consistency audit

After footer changes, audit external NAP citations:

- LinkedIn profile location
- Upwork profile location and timezone
- GitHub profile location
- Polish CEIDG/działalność listing
- Any old directories or backlinks pointing to Częstochowa as a business location

**Rule**: legal entity address can remain PL everywhere (it's legally truthful), but marketing-prominent location strings ("based in Częstochowa") should be replaced with "remote, overlapping AU/EU hours" or "serving AU/CH/EU".

## 10. Things NOT to do

- Don't put a fake Sydney/Zurich address anywhere.
- Don't buy a virtual office for SEO purposes.
- Don't drop the PL legal address, it's a compliance and trust signal.
- Don't add multiple country addresses to schema `address` (use `areaServed` instead, that's what it's for).
- Don't create GBP listings for AU/CH.

## Implementation checklist

- [ ] Delete or sideline Częstochowa GBP listing
- [x] Move PL address to footer fine-print, add positioning line above it
- [x] Update contact page hero
- [x] Add/update `ProfessionalService` JSON-LD with `areaServed`
- [ ] Add `Person` JSON-LD on about page
- [ ] Add page-level `Service` schema to country landing pages (later phase)
- [ ] Wire hreflang on country pages (later phase)
- [ ] Update country page title tags and meta descriptions (later phase)
- [ ] Regenerate sitemap after new pages go live, resubmit in Search Console
- [ ] Audit LinkedIn, Upwork, GitHub, CEIDG for NAP consistency

## Related notes

- See: `SEO Location Pivot - Strategy.md` for market analysis, CMS content plan, slugs, keyword targets.

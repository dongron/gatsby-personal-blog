# SEO Location Pivot, Strategy & Targeting

Date: 2026-05-13
Context: Pivoting away from Częstochowa (no local demand) toward markets that match Chiang Mai working hours, pay senior rates and have winnable SEO. Excluding crowded hubs (SF, NYC, London).

## Decision

**Primary market: Australia. Secondary: Switzerland.**

Two markets, not five. Spreading thin kills domain authority and content cadence.

### Why this combo

- AU covers awake hours from Chiang Mai (1 to 4h TZ delta), daily-overlap clients, market large enough to fill a pipeline.
- CH covers evenings, highest-rate ceiling in Europe, async-tolerant clients.
- Both have low Polish-freelancer SEO competition.
- Both pay target rate (€50 to 80/hr+) without negotiation friction.
- Non-overlapping TZ pools, never sitting idle.

## Market analysis

### Tier 1, best fit overall

#### 1. Australia (Sydney, Melbourne, Brisbane, Perth)

- TZ overlap with Chiang Mai unbeatable (1 to 4h).
- Rates AUD 120 to 180/hr senior contractor, comfortable €60 to 90/hr.
- English-first, strong Next.js demand, less Polish/EE freelancer competition than EU.
- SEO winnable: "freelance React developer Melbourne", "Next.js consultant Sydney" reachable.

#### 2. Singapore

- TZ: 1h difference.
- Highest concentration of fintech/SaaS budgets in APAC.
- English-first, small market, niche SEO.
- Caveat: SG companies prefer local entities, watch engagement structure.

#### 3. Switzerland (Zurich, Zug, Basel, Lausanne)

- Highest hourly rates in Europe, CHF 140 to 200/hr.
- TZ bad (6h), Swiss clients async-tolerant and used to remote EU contractors.
- Less crowded SEO than Berlin/Amsterdam.
- PL invoicing works cleanly.

### Tier 2, strong but narrower

#### 4. Dubai / UAE

- TZ: 3h.
- Tax-free clients, Web3, real estate tech, e-commerce greenfield.
- English-first, growing fast, SEO not yet saturated.
- Risk: payment culture varies, vet clients harder.

#### 5. Nordics (Oslo, Stockholm, Copenhagen, Helsinki)

- Rates €70 to 100/hr senior, native-level English.
- 5 to 6h TZ from CM, heavily async-friendly.
- "Senior React developer Oslo freelance" winnable, Stockholm more crowded.

### Avoid

- **US (any city)**: 11 to 13h TZ delta kills daily collaboration. Even Austin, Denver, Miami.
- **London, Berlin, Amsterdam**: rates good, SEO brutally crowded, every EE dev targets them.
- **Bangalore, Manila, Ho Chi Minh**: rates too low, wrong direction.

## CMS / Content strategy

### Landing page structure

Country-first, then service-specific. Don't jump to city pages on day one, country pages establish topical authority first.

#### Phase 1, country landing pages

- `/freelance-react-developer-australia`
- `/freelance-react-developer-switzerland`

#### Phase 2, service + country combos

- `/nextjs-consultant-australia`
- `/headless-sanity-developer-switzerland`
- `/ai-automation-developer-australia`
- `/wcag-accessibility-audit-switzerland` (paid audit positioning, not free)

#### Phase 3, city-level pages (only after country pages rank top 30)

- `/freelance-react-developer-sydney`
- `/freelance-react-developer-melbourne`
- `/freelance-react-developer-zurich`

### Slugs and URL conventions

- Lowercase, hyphen-separated.
- Include market noun ("freelance", "consultant", "developer", "engineer") because that's what buyers type.
- Keep slugs <60 chars where possible.
- Use country/city as the last segment, easier to extend later.

### hreflang

- `en-AU` on AU pages.
- `en-CH` on CH pages (default English).
- Add `de-CH` later if chasing German queries (deferred, English first).
- `x-default` pointing to canonical English page.

### Page content patterns

Each country/service page should include:

1. **H1** with exact match keyword ("Freelance React Developer for Australian Startups").
2. **Hero positioning**: working hours overlap, timezone, response time SLA.
3. **Proof block**: 2 to 3 case studies tagged to similar markets (CeHDI for EU/CH, Flowrence for healthcare/EU).
4. **Services list** with internal links to deeper service pages.
5. **FAQ** answering market-specific objections (engagement model, invoicing currency, working hours, GST/VAT handling).
6. **CTA** to call booking, not a contact form (calls convert harder).

### FAQ topics worth a dedicated page

- "Can I hire a remote senior developer in a different timezone?" (target AU buyers worried about Europe-based devs)
- "How does invoicing work for Australian companies hiring EU contractors?"
- "GST / VAT handling for cross-border dev contracts" (CH and AU angles)
- "What does async-friendly mean in practice?" (CH angle)

### Content cadence

- One pillar article per month per primary market (so two pillars/month minimum).
- Pillar = 2,000+ word piece targeting a fat-head commercial keyword.
- Supporting cluster posts (3 to 5 per pillar) targeting long-tail variants.
- Case studies: convert at least 2 existing clients into AU- or CH-flavored case studies (CeHDI = EU/policy/CH-relatable, Flowrence = healthcare/EU).

### Positioning copy (replaces Częstochowa-specific copy)

Use across hero, about, contact:

> "Remote-first senior developer. Remote, overlapping AU/EU hours. Available for clients in Australia, Switzerland and EU."

Variants by section:

- Hero: "Senior React/Next.js developer for AU and CH teams. Remote, overlapping AU/EU hours."
- About: "Based remotely, available in your timezone, EU-incorporated."
- Contact: "Serving clients in Australia, Switzerland and EU."

### Backlink/authority moves

- Submit 1 case study to Smashing Magazine, CSS-Tricks or similar with AU/CH client angle.
- Guest posts on AU dev blogs (DEV.to AU tag, SitePoint where possible).
- Submit Skool community to AU/CH directories for technical founders.
- LinkedIn posts geo-tagged or audience-targeted toward AU/CH.

### Keyword research targets (starter list)

Australia:

- "freelance React developer Australia"
- "Next.js consultant Sydney"
- "senior frontend developer Melbourne remote"
- "headless CMS developer Australia"
- "Sanity developer Sydney"

Switzerland:

- "freelance React Entwickler Schweiz" (do this in DE only after EN traction)
- "senior frontend developer Zurich"
- "Next.js consultant Switzerland"
- "remote React developer Zug"

## What NOT to do

- Don't claim "based in Australia" or "based in Switzerland". Clients catch it on the first call.
- Don't buy a virtual office address for SEO. Correlates with spammy listings.
- Don't put a fake Sydney/Zurich address anywhere. Google detects NAP inconsistency.
- Don't keep Częstochowa as a marketing-prominent signal (legal fine-print is fine).
- Don't offer free WCAG audits to attract AU/CH leads, WCAG is a paid service.

## Success metrics

- 3-month: country landing pages indexed, ranking top 50 for primary keywords.
- 6-month: top 20 for at least 2 primary keywords per market, first qualified inbound from AU or CH.
- 12-month: top 10 for at least 1 primary keyword per market, pipeline >50% from AU+CH combined.

## Related notes

- See: `SEO Location Pivot - Technical.md` for footer, schema, GBP and on-site changes.

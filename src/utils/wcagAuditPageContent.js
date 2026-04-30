import config from './siteConfig'

const wcagAuditPageContent = {
  pl: {
    locale: {
      code: 'pl',
      htmlLanguage: 'pl',
      openGraphLocale: 'pl_PL',
      hreflang: 'pl',
      xDefaultHreflang: 'x-default',
      availableLanguages: ['Polish', 'English'],
    },
    seo: {
      pagePath: 'pl/audyt-wcag-ecommerce',
      title:
        'Audyt WCAG dla e-commerce | Zgodność z EAA i ADA | Dominik Gronkiewicz',
      description:
        'Audyt WCAG 2.1 AA dla sklepów internetowych. EAA obowiązuje od 28 czerwca 2025. 95,9% stron nie spełnia wymogów. Uniknij kar i pozwów - wycena bezpłatna.',
      schemaFaq: [
        {
          question: 'Czym jest audyt WCAG dla e-commerce?',
          answer:
            'Audyt WCAG to szczegółowa analiza techniczna sklepu internetowego pod kątem spełnienia standardu WCAG 2.1 AA. Każda znaleziona niezgodność jest przypisana do konkretnego kryterium WCAG i opisana z priorytetem naprawy. Wynikiem jest raport gotowy do przekazania zespołowi deweloperskiemu.',
        },
        {
          question: 'Czy mój sklep musi spełniać wymogi WCAG?',
          answer:
            'Jeśli sprzedajesz do klientów w UE, Europejski Akt o Dostępności (EAA, Dyrektywa 2019/882) obowiązuje od 28 czerwca 2025. Niespełnienie wymogów grozi karami finansowymi ustalonymi przez każde państwo członkowskie z osobna. W USA ustawa ADA Title III jest podstawą tysięcy pozwów rocznie - w 2025 roku złożono 3948 spraw.',
        },
        {
          question: 'Jak długo trwa audyt?',
          answer:
            'Standardowy audyt sklepu o rozmiarze MŚP trwa od 3 do 5 dni roboczych od dostarczenia dostępu. Raport końcowy otrzymujesz w uzgodnionym terminie.',
        },
        {
          question: 'Co dostaję po audycie?',
          answer:
            'Otrzymujesz: (1) szczegółowy raport z listą niezgodności przypisanych do kryteriów WCAG 2.1, (2) priorytetyzowaną listę napraw z oceną trudności wdrożenia, (3) podsumowanie statusu zgodności z EAA i ADA, (4) zalecenia dotyczące zapobiegania przyszłym naruszeniom.',
        },
        {
          question: 'Czy audyt obejmuje poprawki w kodzie?',
          answer:
            'Audyt kończy się raportem i priorytetyzowaną listą napraw. Wdrożenie poprawek to oddzielna usługa, którą możemy omówić po dostarczeniu raportu.',
        },
        {
          question: 'Jaka jest cena audytu?',
          answer:
            'Cena zależy od wielkości sklepu, liczby szablonów stron i zakresu audytu. Skontaktuj się, aby omówić szczegóły i otrzymać wycenę.',
        },
      ],
    },
    layout: {
      navigationVariant: 'polishLanding',
      footerVariant: 'polishLanding',
    },
    menu: {
      homeLabel: 'Home',
      homePath: '/pl/',
      languageSwitch: [
        {
          label: 'PL',
          to: '/pl/audyt-wcag-ecommerce/',
          current: true,
        },
        {
          label: 'EN',
          to: '/wcag-audit-ecommerce/',
        },
      ],
    },
    hero: {
      eyebrow: 'Audyt WCAG dla e-commerce',
      headline: ['Twój sklep może być niezgodny z prawem.', 'Sprawdźmy to.'],
      subheadline:
        'Europejski Akt o Dostępności obowiązuje od 28 czerwca 2025. 95,9% stron nie spełnia wymogów WCAG. Audyt wskazuje dokładnie, co naprawić - zanim urząd lub pozew zmusi Cię do działania.',
      cta: {
        label: 'Zamów audyt',
        to: '/pl/contact/',
      },
      trustBadges: [
        { icon: 'gavel', text: 'EAA obowiązuje od 28.06.2025' },
        { icon: 'chart-bar', text: '95,9% stron nie spełnia WCAG' },
        { icon: 'balance-scale', text: '3948 pozwów ADA w 2025 roku' },
      ],
    },
    problem: {
      title: 'Co ryzykujesz?',
      intro:
        'Niespełnienie wymogów dostępności to nie tylko ryzyko reputacyjne. To konkretne konsekwencje prawne i finansowe.',
      cards: [
        {
          icon: 'gavel',
          title: 'Kary i kontrole EAA',
          body: 'W UE organy nadzoru mogą nałożyć kary administracyjne na podstawie Dyrektywy 2019/882. Każde państwo członkowskie ustala stawki samodzielnie - w niektórych krajach sięgają setek tysięcy euro.',
        },
        {
          icon: 'user-times',
          title: 'Utracone przychody',
          body: '15-20% użytkowników ma niepełnosprawność lub używa technologii wspomagających. Niedostępny checkout, formularz lub menu to realna utrata konwersji w tym segmencie.',
        },
        {
          icon: 'exclamation-triangle',
          title: 'Pozwy i naruszenia ADA',
          body: 'Sprzedajesz do USA? ADA Title III obejmuje sklepy internetowe. W 2025 roku złożono 3948 pozwów - wzrost o 23,84% rok do roku. Koszty ugody zaczynają się od kilku tysięcy dolarów.',
        },
      ],
    },
    audience: {
      title: 'Dla kogo jest ten audyt?',
      intro:
        'Pracuję ze średnimi firmami e-commerce, które potrzebują konkretnego raportu - nie ogólnikowych rekomendacji.',
      items: [
        'Sklep internetowy obsługujący klientów z UE lub USA',
        'Platforma SaaS lub marketplace z modułem zakupowym',
        'Firma, która właśnie dowiedziała się o EAA i potrzebuje oceny ryzyka',
        'Zespół developerski przed wdrożeniem nowej wersji sklepu',
        'Właściciel sklepu, który otrzymał reklamację lub zapytanie o dostępność',
        'Dział prawny lub compliance szukający technicznej dokumentacji do raportu',
      ],
    },
    deliverables: {
      title: 'Co dostajesz?',
      items: [
        {
          icon: 'file-alt',
          title: 'Raport z listą niezgodności',
          body: 'Każda znaleziona niezgodność jest przypisana do konkretnego kryterium WCAG 2.1 AA. Widzisz dokładnie, co jest zepsute, gdzie to jest i dlaczego narusza standard.',
        },
        {
          icon: 'tasks',
          title: 'Priorytetyzowana lista napraw',
          body: 'Niezgodności posortowane według priorytetu i trudności wdrożenia. Twój zespół wie, od czego zacząć i ile pracy zajmie każda poprawka.',
        },
        {
          icon: 'balance-scale',
          title: 'Podsumowanie zgodności EAA i ADA',
          body: 'Jasny status: które wymagania spełniasz, które nie, i co grozi za brak poprawki. Dokument nadający się do użytku przez dział prawny lub compliance.',
        },
        {
          icon: 'shield-alt',
          title: 'Zalecenia prewencyjne',
          body: 'Lista dobrych praktyk zapobiegających ponownemu pojawieniu się błędów dostępności: guidelines dla treści CMS, wzorce komponentów i checklist dla QA.',
        },
      ],
    },
    process: {
      title: 'Jak działa audyt?',
      steps: [
        {
          number: '01',
          title: 'Kontakt i zakres',
          body: 'Przesyłasz URL sklepu i opisujesz zakres: ile szablonów stron, czy obejmuje checkout i formularze. Wysyłam wycenę i termin.',
        },
        {
          number: '02',
          title: 'Analiza techniczna',
          body: 'Przeprowadzam audyt manualny i automatyczny: narzędzia axe DevTools, WAVE, Lighthouse plus ręczna nawigacja klawiaturą i test z czytnikiem ekranu.',
        },
        {
          number: '03',
          title: 'Raport i wycena napraw',
          body: 'Otrzymujesz raport z listą niezgodności przypisanych do kryteriów WCAG, priorytety i opcjonalną wycenę wdrożenia poprawek.',
        },
        {
          number: '04',
          title: 'Wsparcie po audycie',
          body: 'Odpowiadam na pytania techniczne Twojego zespołu. Jeśli zdecydujesz się na wdrożenie poprawek - mogę to wykonać.',
        },
      ],
    },
    caseStudy: {
      label: 'Case study',
      title: 'Jak wygląda prawdziwy audyt i naprawa WCAG?',
      quote:
        'Przejąłem CeHDI.org - stronę organizacji zajmującej się dostępem do ochrony zdrowia - po deweloperze, który nie ukończył projektu. Strona naruszała dziesiątki kryteriów WCAG: div zamiast button, brak semantycznego HTML, zepsuta hierarchia nagłówków, zero nawigacji klawiaturą. Naprawiłem warstwę strukturalną w jeden sprint. Wynik: clean pass w Lighthouse, axe DevTools i WAVE. Jeden zestaw poprawek - zgodność z EAA i ADA jednocześnie.',
      linkLabel: 'Przeczytaj pełny opis techniczny (po angielsku)  →',
      linkTo:
        '/blog/how-i-made-cehdi-wcag-compliant-the-real-fixes-behind-eaa-and-ada/',
      linkHrefLang: 'en',
      linkLang: 'en',
    },
    faq: {
      title: 'Najczęstsze pytania',
    },
    finalCta: {
      title: 'Gotowy sprawdzić, gdzie stoi Twój sklep?',
      body: 'Prześlij URL i opisz zakres. Odpowiem z wyceną i terminem w ciągu 24 godzin.',
      cta: {
        label: 'Skontaktuj się',
        to: '/pl/contact/',
      },
    },
    about: {
      title: 'O mnie',
      description:
        'Nazywam się Dominik Gronkiewicz. Jestem Senior Frontend Developerem z 10-letnim doświadczeniem w budowaniu nowoczesnych aplikacji webowych w React, Next.js i TypeScript. Łączę solidne wykonanie techniczne z jasną komunikacją i koncentracją na realnej wartości biznesowej.',
      primaryCta: {
        label: 'Poznaj Mnie Lepiej',
        to: '/about/',
        hidden: true,
      },
      secondaryCta: {
        label: 'Skontaktuj Się',
        to: '/pl/contact/',
      },
    },
    availability: {
      badgeLabel: 'Dostępny do nowych projektów',
      compactAvailableLabel: 'Dostępny',
      compactBusyLabel: 'Zajęty',
      hoursText: '20-40 godzin tygodniowo',
      timezoneText: 'CET (Polska)',
      ctaLabel: 'Rozpocznij Projekt',
      ctaTo: '/pl/contact/',
    },
    footer: {
      footerTitle: 'Stopka strony',
      connectTitle: 'Kontakt',
      teamProjectsTitle: 'Projekty zespołowe',
      emailLabel: 'Email',
      linkedInLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      addressCountryLabel: 'Polska',
      builtWithText: 'Strona zbudowana w Gatsby i Contentful.',
    },
  },

  en: {
    locale: {
      code: 'en',
      htmlLanguage: 'en',
      openGraphLocale: 'en_US',
      hreflang: 'en',
      xDefaultHreflang: 'x-default',
      availableLanguages: ['English', 'Polish'],
    },
    seo: {
      pagePath: 'wcag-audit-ecommerce',
      title:
        'WCAG Audit for E-commerce | EAA & ADA Compliance | Dominik Gronkiewicz',
      description:
        'WCAG 2.1 AA audit for online stores. EAA in force since June 28, 2025. 95.9% of sites fail. Get a detailed report before regulators or lawsuits act.',
      schemaFaq: [
        {
          question: 'What is a WCAG audit for e-commerce?',
          answer:
            'A WCAG audit is a detailed technical review of your online store against the WCAG 2.1 AA standard. Every finding is mapped to a specific success criterion with a fix priority. You receive a report ready to hand to your development team.',
        },
        {
          question: 'Does my store need to comply with WCAG?',
          answer:
            'If you sell to customers in the EU, the European Accessibility Act (EAA, Directive 2019/882) has been enforceable since June 28, 2025. Non-compliance carries financial penalties set by each member state. In the US, ADA Title III is the basis for thousands of lawsuits each year - 3,948 were filed in 2025.',
        },
        {
          question: 'How long does an audit take?',
          answer:
            'A standard SME-sized store audit takes 3 to 5 business days from access being provided. You receive the final report by the agreed date.',
        },
        {
          question: 'What do I receive after the audit?',
          answer:
            'You receive: (1) a detailed report mapping every failure to a WCAG 2.1 success criterion, (2) a prioritised fix list with implementation difficulty ratings, (3) an EAA and ADA compliance summary, and (4) preventive recommendations to avoid regressions.',
        },
        {
          question: 'Does the audit include code fixes?',
          answer:
            'The audit deliverable is a report and a prioritised fix list. Implementation is a separate engagement we can scope after the report is delivered.',
        },
        {
          question: 'How much does the audit cost?',
          answer:
            'Pricing depends on the size of your store, the number of page templates, and the audit scope. Get in touch to discuss the details and receive a quote.',
        },
      ],
    },
    layout: {
      navigationVariant: 'default',
      footerVariant: 'default',
    },
    menu: {
      homeLabel: 'Home',
      homePath: '/',
      languageSwitch: [
        {
          label: 'EN',
          to: '/wcag-audit-ecommerce/',
          current: true,
        },
        {
          label: 'PL',
          to: '/pl/audyt-wcag-ecommerce/',
        },
      ],
    },
    hero: {
      eyebrow: 'WCAG Audit for E-commerce',
      headline: ['Your store may already be non-compliant.', "Let's find out."],
      subheadline:
        'The European Accessibility Act has been enforceable since June 28, 2025. 95.9% of websites fail WCAG. A professional audit tells you exactly what to fix — before a regulator or lawsuit forces your hand.',
      cta: {
        label: 'Request an Audit',
        to: '/contact/',
      },
      trustBadges: [
        { icon: 'gavel', text: 'EAA enforceable since 28 June 2025' },
        { icon: 'chart-bar', text: '95.9% of sites fail WCAG' },
        { icon: 'balance-scale', text: '3,948 ADA lawsuits in 2025' },
      ],
    },
    problem: {
      title: 'What is at risk?',
      intro:
        'Non-compliance with accessibility standards is not just a reputational issue. It carries concrete legal and financial consequences.',
      cards: [
        {
          icon: 'gavel',
          title: 'EAA Fines and Audits',
          body: 'In the EU, supervisory authorities can impose administrative penalties under Directive 2019/882. Each member state sets its own penalty rates — in some countries fines reach hundreds of thousands of euros.',
        },
        {
          icon: 'user-times',
          title: 'Lost Revenue',
          body: '15-20% of users have a disability or use assistive technology. An inaccessible checkout, form, or navigation menu is a measurable conversion loss in that segment.',
        },
        {
          icon: 'exclamation-triangle',
          title: 'ADA Lawsuits',
          body: 'Selling to the US? ADA Title III covers online stores. 3,948 lawsuits were filed in 2025 — a 23.84% increase year on year. Settlement costs start at several thousand dollars.',
        },
      ],
    },
    audience: {
      title: 'Who is this audit for?',
      intro:
        'I work with mid-size e-commerce businesses that need a concrete report — not generic recommendations.',
      items: [
        'An online store serving customers in the EU or US',
        'A SaaS platform or marketplace with a purchasing module',
        'A company that just learned about EAA and needs a risk assessment',
        'A development team before shipping a new version of their store',
        'A store owner who received a complaint or accessibility inquiry',
        'A legal or compliance team looking for technical documentation',
      ],
    },
    deliverables: {
      title: 'What do you get?',
      items: [
        {
          icon: 'file-alt',
          title: 'Failure Report Mapped to WCAG Criteria',
          body: 'Every finding is mapped to a specific WCAG 2.1 AA success criterion. You see exactly what is broken, where it is, and why it violates the standard.',
        },
        {
          icon: 'tasks',
          title: 'Prioritised Fix List',
          body: 'Failures sorted by priority and implementation difficulty. Your team knows where to start and how much work each fix requires.',
        },
        {
          icon: 'balance-scale',
          title: 'EAA and ADA Compliance Summary',
          body: 'A clear status: which requirements you meet, which you do not, and what the risk of non-compliance is. Suitable for use by your legal or compliance team.',
        },
        {
          icon: 'shield-alt',
          title: 'Preventive Recommendations',
          body: 'A list of best practices to prevent accessibility regressions: CMS content guidelines, component patterns, and a QA checklist.',
        },
      ],
    },
    process: {
      title: 'How does the audit work?',
      steps: [
        {
          number: '01',
          title: 'Contact and Scoping',
          body: 'You send your store URL and describe the scope: number of page templates, whether checkout and forms are included. I send a quote and timeline.',
        },
        {
          number: '02',
          title: 'Technical Analysis',
          body: 'I run both automated and manual audit passes: axe DevTools, WAVE, Lighthouse, plus manual keyboard navigation and screen reader testing.',
        },
        {
          number: '03',
          title: 'Report and Fix Estimate',
          body: 'You receive a report with failures mapped to WCAG criteria, priorities, and an optional estimate for implementing the fixes.',
        },
        {
          number: '04',
          title: 'Post-Audit Support',
          body: "I answer technical questions from your team. If you decide to implement the fixes, I can do that too.",
        },
      ],
    },
    caseStudy: {
      label: 'Case Study',
      title: 'What does a real WCAG audit and fix look like?',
      quote:
        'I took over CeHDI.org — a global health diplomacy organisation — from a developer who could not finish the project. The site violated dozens of WCAG criteria: divs as buttons, missing semantic HTML, a broken heading tree, no keyboard navigation. I rebuilt the structural layer in a single sprint. Result: clean pass on Lighthouse, axe DevTools and WAVE. One set of fixes — EAA and ADA compliance covered simultaneously.',
      linkLabel: 'Read the full technical breakdown  →',
      linkTo:
        '/blog/how-i-made-cehdi-wcag-compliant-the-real-fixes-behind-eaa-and-ada/',
    },
    faq: {
      title: 'Frequently Asked Questions',
    },
    finalCta: {
      title: 'Ready to find out where your store stands?',
      body: 'Send your URL and describe the scope. I will reply with a quote and timeline within 24 hours.',
      cta: {
        label: 'Get in Touch',
        to: '/contact/',
      },
    },
    about: {
      title: 'About Me',
      description:
        "I'm Dominik Gronkiewicz, a Senior Frontend Developer with 10 years of experience building modern web applications in React, Next.js, and TypeScript. I combine solid technical execution with clear communication and a focus on real business value.",
      primaryCta: {
        label: 'Learn More About Me',
        to: '/about/',
      },
      secondaryCta: {
        label: 'Get In Touch',
        to: '/contact/',
      },
    },
    availability: {
      badgeLabel: 'Available for new projects',
      compactAvailableLabel: 'Available',
      compactBusyLabel: 'Busy',
      hoursText: '20-40 hours per week',
      timezoneText: 'CET (Poland)',
      ctaLabel: 'Start a Project',
      ctaTo: '/contact/',
    },
    footer: {
      footerTitle: 'Site Footer',
      connectTitle: 'Connect',
      teamProjectsTitle: 'Team Projects',
      emailLabel: 'Email',
      linkedInLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      addressCountryLabel: config.addressCountryLabel,
      builtWithText: 'Built with Gatsby & Contentful.',
    },
  },
}

export const getWcagAuditPageContent = (locale = 'en') => {
  return wcagAuditPageContent[locale] || wcagAuditPageContent['en']
}

export default wcagAuditPageContent

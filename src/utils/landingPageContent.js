import config from './siteConfig'

const englishServices = [
  {
    icon: 'code',
    title: 'Modern Web Apps',
    description:
      'React, Next.js, TypeScript applications built for performance and scalability.',
  },
  {
    icon: 'heartbeat',
    title: 'Healthcare & Enterprise',
    description:
      'Secure, compliant solutions for healthcare and large organizations.',
  },
  {
    icon: 'mobile-alt',
    title: 'Progressive Web Apps',
    description: 'Offline-first applications with native-like experiences.',
  },
  {
    icon: 'comments',
    title: 'Technical Consulting',
    description: 'Architecture review, code audits, and technology guidance.',
  },
]

const polishServices = [
  {
    icon: 'code',
    title: 'Nowoczesne aplikacje webowe',
    description:
      'Aplikacje w React, Next.js i TypeScript budowane z myślą o wydajności i skalowaniu.',
  },
  {
    icon: 'heartbeat',
    title: 'Healthcare i enterprise',
    description:
      'Bezpieczne, zgodne z wymaganiami rozwiązania dla ochrony zdrowia i dużych organizacji.',
  },
  {
    icon: 'mobile-alt',
    title: 'Progressive Web Apps',
    description:
      'Aplikacje offline-first z doświadczeniem zbliżonym do natywnych produktów.',
  },
  {
    icon: 'comments',
    title: 'Doradztwo techniczne',
    description:
      'Przeglądy architektury, audyty kodu i wsparcie w decyzjach technologicznych.',
  },
]

const landingPageContent = {
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
      pagePath: '',
      title: config.siteTitle,
      description: config.siteDescription,
    },
    layout: {
      navigationVariant: 'default',
      footerVariant: 'default',
    },
    menu: {
      homeLabel: 'Home',
      homePath: '/',
      languageSwitch: [],
    },
    welcome: {
      titleLines: [config.heroTitle, config.heroTitle2],
      subtitleLines: [
        config.heroTagline,
        config.heroTagline2,
        config.heroTagline3,
      ],
      primaryCta: {
        label: "Let's Ship It!",
        to: '/contact/',
      },
    },
    services: {
      title: 'What I Do',
      items: englishServices,
    },
    about: {
      title: 'About Me',
      description: `I'm ${config.author}, a ${
        config.authorTitle
      } with ${config.authorTagline.toLowerCase()}. I specialize in building scalable web applications for healthcare, enterprise, and startups. My approach combines technical excellence with clear communication and a focus on delivering real business value.`,
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
      badgeLabel: config.availabilityText,
      compactAvailableLabel: 'Available',
      compactBusyLabel: 'Busy',
      hoursText: config.hoursPerWeek,
      timezoneText: config.timezone,
      ctaLabel: 'Start a Project',
      ctaTo: '/contact/',
    },
    footer: {
      footerTitle: 'Site Footer',
      navigationTitle: 'Navigation',
      connectTitle: 'Connect',
      teamProjectsTitle: 'Team Projects',
      emailLabel: 'Email',
      linkedInLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      addressCountryLabel: config.addressCountryLabel,
      builtWithText: 'Built with Gatsby & Contentful.',
    },
    sections: {
      showFeaturedWork: true,
      showLatestArticles: true,
    },
  },
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
      pagePath: 'pl',
      title:
        'Dominik Gronkiewicz | Frontend Developer dla skalujących się firm',
      description:
        'Pomagam firmom budować szybkie, skalowalne aplikacje webowe w React, Next.js i TypeScript. Tworzę produkty dla healthcare, enterprise i SaaS.',
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
          to: '/pl/',
          current: true,
        },
        {
          label: 'EN',
          to: '/',
        },
      ],
    },
    welcome: {
      titleLines: [
        'Twój biznes jest gotowy na skalowanie.',
        'Czy Twoja aplikacja internetowa również?',
      ],
      subtitleLines: [
        'Szanse uciekają. Konkurencja działa szybciej. Wzrost zwalnia.',
        'Problemem nie jest biznes, tylko oprogramowanie.',
        'Właśnie dlatego buduję produkty.',
      ],
      primaryCta: {
        label: 'Dowieźmy To Razem!',
        to: '/pl/contact/',
      },
    },
    services: {
      title: 'W czym pomagam',
      items: polishServices,
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
    sections: {
      showFeaturedWork: false,
      showLatestArticles: false,
    },
  },
}

export const defaultLandingPageLocale = 'en'

export const getLandingPageContent = (locale = defaultLandingPageLocale) => {
  return (
    landingPageContent[locale] || landingPageContent[defaultLandingPageLocale]
  )
}

export default landingPageContent

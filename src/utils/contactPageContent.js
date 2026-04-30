import config from './siteConfig'

const contactPageContent = {
  en: {
    seo: {
      pagePath: 'contact',
      title: `Contact - ${config.siteTitle}`,
      description: config.contactPageDescription,
    },
    menu: {
      languageSwitch: [],
    },
    page: {
      title: 'Get In Touch',
      intro:
        "Do you have a project in mind or want to discuss how I can assist you? Fill out the form below, and I'll respond within 24–48 hours.",
      alternativeTitle: 'Prefer Another Way?',
      links: {
        email: 'Email Me',
        linkedIn: 'LinkedIn',
        github: 'GitHub',
      },
    },
    form: {
      note: `${config.remoteAvailabilityText} ${config.preferredContactText}`,
      fields: {
        name: {
          label: 'Full Name',
          placeholder: 'John Doe', // Updated example name
        },
        email: {
          label: 'Email',
          placeholder: 'john.doe@example.com', // Updated example email
        },
        message: {
          label: 'Message',
          placeholder: 'Hi, I have a project idea...', // Updated example message
        },
      },
      submitLabel: 'Send',
      loadingLabel: 'Sending...',
      modal: {
        success: {
          title: '',
          message:
            "Thank you for reaching out! I'll respond as soon as possible.",
          closeLabel: 'Ok',
        },
        error: {
          title: '',
          message:
            'Something went wrong while sending your message. You can email me directly at:',
          actionLabel: 'Open email',
        },
      },
    },
  },
  pl: {
    seo: {
      pagePath: 'pl/contact',
      title: 'Kontakt | Dominik Gronkiewicz',
      description:
        'Skontaktuj się ze mną w sprawie projektów React, Next.js i TypeScript. Pracuję zdalnie na całym świecie.',
    },
    menu: {
      languageSwitch: [
        {
          label: 'PL',
          to: '/pl/contact/',
          current: true,
        },
        {
          label: 'EN',
          to: '/contact/',
        },
      ],
    },
    page: {
      title: 'Skontaktuj się',
      intro:
        'Masz pomysł na projekt lub chcesz dowiedzieć się, jak mogę pomóc? Wypełnij formularz poniżej, a odpowiem w ciągu 24–48 godzin.',
      alternativeTitle: 'Wolisz inną formę kontaktu?',
      links: {
        email: 'Napisz Email',
        linkedIn: 'LinkedIn',
        github: 'GitHub',
      },
    },
    form: {
      note: 'Pracuję zdalnie dla klientów z całego świata. Formularz kontaktowy poniżej to najlepszy sposób, aby się ze mną skontaktować.',
      fields: {
        name: {
          label: 'Imię i nazwisko',
          placeholder: 'Jan Kowalski', // Updated example name in Polish
        },
        email: {
          label: 'Adres email',
          placeholder: 'jan.kowalski@example.com', // Updated example email in Polish
        },
        message: {
          label: 'Wiadomość',
          placeholder: 'Cześć, mam pomysł na projekt...', // Updated example message in Polish
        },
      },
      submitLabel: 'Wyślij',
      loadingLabel: 'Wysyłanie...',
      modal: {
        success: {
          title: '',
          message:
            'Dziękuję za wiadomość! Odpowiem najszybciej, jak to możliwe.',
          closeLabel: 'OK',
        },
        error: {
          title: '',
          message:
            'Wystąpił problem podczas wysyłania wiadomości. Możesz napisać do mnie bezpośrednio na adres:',
          actionLabel: 'Otwórz email',
        },
      },
    },
  },
}

export const defaultContactPageLocale = 'en'

export const getContactPageContent = (locale = defaultContactPageLocale) => {
  return (
    contactPageContent[locale] || contactPageContent[defaultContactPageLocale]
  )
}

export default contactPageContent

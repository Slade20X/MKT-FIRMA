import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'MKT Lab - Agencja Marketinga, Strony WWW, Kampanie reklamowe',
  description: 'MKT Lab - agencja marketingu w Gdańsku. Zwiększamy sprzedaż i ROAS. Działamy zdalnie w całej Polsce.',
  keywords: 'agencja marketingowa Gdańsk, marketing internetowy, pozycjonowanie SEO, performance marketing, social media, branding, strategia marketingowa, wzrost sprzedaży',
  authors: [{ name: 'MKT Lab' }],
  creator: 'MKT Lab',
  manifest: '/manifest.json',
  publisher: 'MKT Lab',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://mktlab.pl',
  },
  openGraph: {
    title: 'MKT Lab - Agencja Marketinga, Strony WWW, Kampanie reklamowe',
    description: 'Marketing, który generuje realny wzrost. Działamy w Gdańsku i online w całej Polsce.',
    url: 'https://mktlab.pl',
    siteName: 'MKT Lab',
    images: [
      {
        url: 'https://i.imgur.com/3p3FcG4.png',
        width: 1200,
        height: 630,
        alt: 'MKT Lab - nowoczesna agencja marketingowa',
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MKT Lab - Agencja Marketinga, Strony WWW, Kampanie reklamowe',
    description: 'Zwiększamy sprzedaż dzięki strategii, kreatywności i danym.',
    images: ['https://i.imgur.com/3p3FcG4.png'],
  },
  verification: {
    google: 'tu-wpisz-kod-google-search-console',
  },
  category: 'marketing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ============================================================
  // SCHEMAT 1: LocalBusiness (Twoja firma)
  // ============================================================
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'MKT Lab',
    description: 'Agencja marketingu i wzrostu. Działamy w Gdańsku i zdalnie na terenie całej Polski.',
    url: 'https://mktlab.pl',
    logo: 'https://mktlab.pl/favicon.ico',
    email: 'mktlab.biuro@gmail.com',
    telephone: '+48 883 758 310',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gdańsk',
      addressRegion: 'Pomorskie',
      addressCountry: 'PL',
    },
    areaServed: ['Polska', 'Trójmiasto', 'Gdańsk', 'Sopot', 'Gdynia'],
    knowsLanguage: ['polski', 'angielski'],
    priceRange: '$$',
    openingHours: 'Mo-Fr 09:00-17:00',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+48 883 758 310',
      contactType: 'customer service',
      email: 'mktlab.biuro@gmail.com',
      availableLanguage: ['Polish', 'English'],
    },
    sameAs: [
      'https://www.facebook.com/mktlab',
      'https://www.linkedin.com/company/mktlab',
      'https://www.instagram.com/mktlab',
    ],
  };

  // ============================================================
  // SCHEMAT 2: FAQPage (Najczęściej zadawane pytania)
  // ============================================================
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Ile kosztują usługi MKT Lab?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Nasze pakiety zaczynają się od 3 900 zł/mies. (START), 7 900 zł/mies. (GROWTH) i 14 900 zł/mies. (PRO). Dla większych firm przygotowujemy indywidualną wycenę w pakiecie ENTERPRISE.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Jakie usługi oferuje MKT Lab?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Oferujemy kompleksowe usługi marketingowe: Performance Marketing (kampanie Google Ads, Facebook Ads), SEO (pozycjonowanie stron), Social Media (Facebook, Instagram, LinkedIn, TikTok) oraz Branding (strategia marki, identyfikacja wizualna).'
        }
      },
      {
        '@type': 'Question',
        'name': 'Czy mogę zrezygnować z usług w każdym momencie?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Tak! Nasze umowy są elastyczne – zapewniamy miesięczny okres wypowiedzenia. Możesz zrezygnować bez dodatkowych kosztów.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Jak długo trwa wdrożenie kampanii?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Pierwsze efekty są widoczne już po 2-4 tygodniach od rozpoczęcia kampanii. Pełna optymalizacja i wdrożenie strategii trwa około 3 miesięcy.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Czy oferujecie bezpłatną konsultację?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Tak! Oferujemy bezpłatną konsultację, podczas której poznamy Twoją firmę, przeanalizujemy obecną sytuację marketingową i zaproponujemy pierwsze kroki.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Jakie wyniki mogę oczekiwać?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Nasi klienci osiągają średnio +420% ROAS w kampaniach performance, +450% wzrost ruchu organicznego dzięki SEO, 89% wzrost rozpoznawalności marki oraz 96% retencji klientów.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Czy macie doświadczenie w mojej branży?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Tak! Mamy doświadczenie w e-commerce, fintech, nowych technologiach, usługach B2B, modzie, gastronomii, edukacji i wielu innych branżach.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Jak wygląda proces współpracy?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Nasz proces to 4 etapy: 1) AUDYT – analiza rynku i konkurencji, 2) STRATEGIA – mapa drogowa oparta na danych, 3) WDROŻENIE – realizacja kampanii z optymalizacją, 4) SKALOWANIE – ekspansja na kolejne kanały.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Czy działacie tylko w Gdańsku?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Nie! Nasze biuro znajduje się w Gdańsku (Śródmieście), ale działamy zdalnie w całej Polsce. Oferujemy spotkania osobiste w Gdańsku oraz konsultacje online dla klientów z innych miast.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Czy macie referencje od klientów?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Oczywiście! Posiadamy wiele pozytywnych opinii od naszych klientów. Nasi klienci osiągnęli wzrost ROI o +312%, zyskali 89% rozpoznawalności i 96% retencji.'
        }
      }
    ]
  };

  // ============================================================
  // SCHEMAT 3: BreadcrumbList (Okruszki)
  // ============================================================
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Strona główna',
        'item': 'https://mktlab.pl'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Usługi',
        'item': 'https://mktlab.pl#services'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'Kontakt',
        'item': 'https://mktlab.pl#contact'
      }
    ]
  };

  // ============================================================
  // SCHEMAT 4: WebSite (Dla wyszukiwarki)
  // ============================================================
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'MKT Lab - Agencja Marketingu i Wzrostu',
    'description': 'Marketing, który generuje realny wzrost. Działamy w Gdańsku i online w całej Polsce.',
    'url': 'https://mktlab.pl',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': 'https://mktlab.pl/szukaj?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };

  // ============================================================
  // POŁĄCZONE WSZYSTKIE SCHEMATY
  // ============================================================
  const allSchemas = [localBusinessSchema, faqSchema, breadcrumbSchema, websiteSchema];

  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/logo.png" as="image" type="image/png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" type="image/png" />
        <link rel="preload" href="/_next/static/css/XXXXX.css" as="style"fetchPriority="high" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0F172A" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="PL-PM" />
        <meta name="geo.placename" content="Gdańsk" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>

        {/* ===== Wszystkie schematy w jednym skrypcie ===== */}
        <Script
          id="schemas-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(allSchemas) }}
        />
      </body>
    </html>
  );
}
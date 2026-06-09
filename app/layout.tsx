import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'MKT | Agencja Marketingu',
  description: 'MKT Lab to agencja marketingowa, która łączy strategię, kreatywność i dane. Działamy w Gdańsku i zdalnie w całej Polsce. Zwiększamy sprzedaż, ROAS i rozpoznawalność marki.',
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
    title: 'MKT Lab – Agencja Marketingu i Wzrostu',
    description: 'Marketing, który generuje realny wzrost. Działamy w Gdańsku i online w całej Polsce.',
    url: 'https://mktlab.pl',
    siteName: 'MKT Lab',
    images: [
      {
        url: 'https://i.imgur.com/3p3FcG4.png',
        width: 1200,
        height: 630,
        alt: 'MKT Lab – nowoczesna agencja marketingowa',
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MKT Lab – Agencja Marketingu i Wzrostu',
    description: 'Zwiększamy sprzedaż dzięki strategii, kreatywności i danym.',
    images: ['https://i.imgur.com/3p3FcG4.png'],
  },
  verification: {
    google: 'tu-wpisz-kod-google-search-console', // opcjonalnie
  },
  category: 'marketing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

  return (
    <html lang="pl">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0F172A" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="PL-PM" />
        <meta name="geo.placename" content="Gdańsk" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}


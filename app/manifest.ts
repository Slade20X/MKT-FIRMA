// app/manifest.ts
import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MKT Lab', // Pełna nazwa aplikacji
    short_name: 'MKT Lab', // Krótka nazwa pod ikoną
    description: 'Agencja Marketingu i Wzrostu',
    start_url: '/', // Strona startowa po uruchomieniu z ekranu głównego
    display: 'standalone', // Uruchamia się jako samodzielna aplikacja (bez paska przeglądarki)
    background_color: '#FFFFFF',
    theme_color: '#0F172A',
    icons: [
      {
        src: '/icon192.png', // Ścieżka względem domeny głównej
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  devIndicators: {
    appIsrStatus: false,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  
  // ✅ PEŁNE NAGŁÓWKI BEZPIECZEŃSTWA
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // 1. X-Content-Type-Options – zapobiega MIME-sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // 2. X-Frame-Options – ochrona przed clickjacking
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // 3. Referrer-Policy – kontrola przesyłania refererów
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // 4. Content-Security-Policy (CSP) – ochrona przed XSS
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://vercel.live",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https://images.unsplash.com https://www.google-analytics.com",
              "font-src 'self' data:",
              "connect-src 'self' https://www.google-analytics.com https://vercel.live",
              "frame-src 'self' https://vercel.live",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "upgrade-insecure-requests",
            ].join('; '),
          },
          // 5. Strict-Transport-Security (HSTS) – wymusza HTTPS
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          // 6. Cross-Origin-Opener-Policy (COOP) – izolowanie źródła
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
          // 7. Cross-Origin-Embedder-Policy (COEP) – dodatkowa ochrona
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'credentialless',
          },
          // 8. Permissions-Policy – ograniczenie dostępu do funkcji przeglądarki
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
'use client';

import { Facebook, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const facebookUrl = 'https://www.facebook.com/mktlab'; // ← zmień na swój adres FB

  return (
    <html>
      <body>
        <div className="min-h-screen bg-gradient-to-b from-white to-secondary flex items-center justify-center px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-12 h-12 text-red-500" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Coś poszło nie tak
            </h1>
            
            <p className="text-darkLight/70 text-lg mb-8 max-w-lg mx-auto">
              Przepraszamy za niedogodności. Zespół MKT Lab został powiadomiony o problemie.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={reset}
                className="bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-accent/90 transition-all"
              >
                Spróbuj ponownie
              </button>
              
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#1877F2] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1877F2]/90 transition-all"
              >
                <Facebook className="w-4 h-4" />
                Skontaktuj się przez Facebook
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
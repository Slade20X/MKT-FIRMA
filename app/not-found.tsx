'use client';

import Link from 'next/link';
import { ArrowLeft, Facebook, Home, AlertCircle } from 'lucide-react';
import Image from 'next/image';

export default function NotFound() {
  const facebookUrl = 'https://www.facebook.com/profile.php?id=61590845034777&locale=pl_PL'; // ← zmień na swój adres FB

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animowane logo/404 */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 bg-accent/10 rounded-full animate-pulse" />
          <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center shadow-lg">
            <span className="text-5xl font-bold text-accent">404</span>
          </div>
        </div>

        {/* Główny komunikat */}
        <h1 className="text-3xl md:text-5xl font-bold text-dark mb-4">
          Ups! Strona nie została odnaleziona
        </h1>
        
        <p className="text-darkLight/70 text-lg md:text-xl mb-6 max-w-lg mx-auto">
          Przepraszamy, ale strona, którą próbujesz odwiedzić, nie istnieje lub została przeniesiona.
        </p>

        {/* Przyciski akcji */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-accent/90 transition-all duration-300"
          >
            <Home className="w-4 h-4" />
            Strona główna
          </Link>
          
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#1877F2] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1877F2]/90 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Facebook className="w-4 h-4" />
            Odwiedź nas na Facebooku
          </a>
        </div>

        {/* Dodatkowe informacje */}
        <div className="bg-white/50 rounded-2xl p-6 border border-tertiary max-w-md mx-auto">
          <div className="flex items-start gap-3 text-left">
            <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-dark mb-1">Co mogę zrobić?</h3>
              <ul className="text-sm text-darkLight/70 space-y-1">
                <li>• Sprawdź, czy adres URL jest poprawny</li>
                <li>• Wróć do <Link href="/" className="text-accent hover:underline">strony głównej</Link></li>
                <li>• Skontaktuj się z nami przez Facebooka</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Subtelna stopka */}
        <p className="text-darkLight/40 text-sm mt-8">
          MKT Lab © {new Date().getFullYear()} – Agencja Marketingu i Wzrostu
        </p>
      </div>
    </div>
  );
}
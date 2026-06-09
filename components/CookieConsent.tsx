'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Sprawdź, czy użytkownik już zaakceptował cookies
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Pokazuj powiadomienie po 1 sekundzie
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
    // Możesz tu dodać kod do załadowania skryptów analitycznych
    console.log('Cookies zaakceptowane');
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
    console.log('Cookies odrzucone');
  };

  const closeBanner = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-[200] p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-tertiary p-5 md:p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                {/* Ikona */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-accent" />
                  </div>
                </div>

                {/* Treść */}
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-dark mb-1">
                    Szanujemy Twoją prywatność
                  </h3>
                  <p className="text-sm text-darkLight/70 leading-relaxed">
                    Ta strona używa plików cookie, aby zapewnić najlepsze doświadczenia podczas przeglądania,
                    analizować ruch na stronie i personalizować treści. Klikając "Akceptuję", zgadzasz się
                    na użycie wszystkich plików cookie. W każdej chwili możesz wycofać zgode na używanie plików cookie. Ustawienia → Prywatność i bezpieczeństwo → Pliki cookie
                  </p>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <a href="/polityka-prywatnosci" className="text-xs text-accent hover:underline">
                      Polityka prywatności
                    </a>
                    <a href="/polityka-cookies" className="text-xs text-accent hover:underline">
                      Polityka cookies
                    </a>
                  </div>
                </div>

                {/* Przyciski */}
                <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                  <button
                    onClick={acceptCookies}
                    className="bg-accent text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-accent/90 transition-all duration-300"
                  >
                    Akceptuję
                  </button>
                  <button
                    onClick={declineCookies}
                    className="bg-tertiary text-darkLight px-6 py-2.5 rounded-full text-sm font-medium hover:bg-secondary transition-all duration-300"
                  >
                    Odrzuć
                  </button>
                  <button
                    onClick={closeBanner}
                    className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center hover:bg-secondary transition-all duration-300"
                    aria-label="Zamknij"
                  >
                    <X className="w-4 h-4 text-darkLight" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
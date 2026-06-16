// app/polityka-cookies/page.tsx
import Link from 'next/link';
import { ArrowLeft, Cookie, Info, Settings, Shield, Clock, Database, Mail, Phone, Target } from 'lucide-react';

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="container-premium max-w-4xl mx-auto">
        {/* Link powrotny */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-darkLight/60 hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Powrót do strony głównej
        </Link>

        {/* Nagłówek */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
            <Cookie className="w-7 h-7 text-accent" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-dark">Polityka Cookies</h1>
            <p className="text-darkLight/60 text-sm mt-1">
              Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>

        {/* Wstęp */}
        <div className="bg-secondary rounded-2xl p-6 md:p-8 mb-8">
          <p className="text-darkLight/80 leading-relaxed">
            Niniejsza Polityka Cookies wyjaśnia, w jaki sposób strona internetowa MKT Lab 
            („mktlab.pl”) wykorzystuje pliki cookie i podobne technologie. 
            Dokument ten ma na celu dostarczenie przejrzystych informacji na temat 
            rodzajów używanych plików cookie, ich celu oraz sposobu zarządzania nimi.
          </p>
        </div>

        {/* Spis treści */}
        <div className="bg-white border border-tertiary rounded-2xl p-6 md:p-8 mb-8">
          <h2 className="text-lg font-bold text-dark mb-4">Spis treści</h2>
          <ul className="space-y-2 text-darkLight/70">
            <li><a href="#1" className="hover:text-accent transition-colors">1. Czym są pliki cookie?</a></li>
            <li><a href="#2" className="hover:text-accent transition-colors">2. Jakie pliki cookie używamy?</a></li>
            <li><a href="#3" className="hover:text-accent transition-colors">3. Cel używania plików cookie</a></li>
            <li><a href="#4" className="hover:text-accent transition-colors">4. Czas przechowywania cookie</a></li>
            <li><a href="#5" className="hover:text-accent transition-colors">5. Zarządzanie plikami cookie</a></li>
            <li><a href="#6" className="hover:text-accent transition-colors">6. Pliki cookie podmiotów trzecich</a></li>
            <li><a href="#7" className="hover:text-accent transition-colors">7. Zmiany w polityce</a></li>
            <li><a href="#8" className="hover:text-accent transition-colors">8. Kontakt</a></li>
          </ul>
        </div>

        {/* Treść polityki */}
        <div className="space-y-8">
          {/* 1. Czym są pliki cookie? */}
          <div id="1" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-4">
              <Info className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold text-dark">1. Czym są pliki cookie?</h2>
            </div>
            <div className="bg-secondary rounded-xl p-6">
              <p className="text-darkLight/80 leading-relaxed">
                Pliki cookie (tzw. „ciasteczka”) to małe pliki tekstowe, które są zapisywane 
                na Twoim urządzeniu (komputerze, tablecie, smartfonie) podczas odwiedzania stron 
                internetowych. Zawierają one informacje, które są przechowywane przez przeglądarkę 
                i przesyłane z powrotem do serwera podczas kolejnych wizyt na stronie.
              </p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 text-center">
                  <span className="text-2xl block mb-2">📁</span>
                  <p className="text-sm text-darkLight/70">Mały plik tekstowy</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <span className="text-2xl block mb-2">💻</span>
                  <p className="text-sm text-darkLight/70">Zapisany na Twoim urządzeniu</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <span className="text-2xl block mb-2">🔄</span>
                  <p className="text-sm text-darkLight/70">Przesyłany podczas kolejnych wizyt</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Jakie pliki cookie używamy? */}
          <div id="2" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-4">
              <Settings className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold text-dark">2. Jakie pliki cookie używamy?</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-secondary rounded-xl p-6 border-l-4 border-accent">
                <h3 className="font-bold text-dark mb-2">🟢 Niezbędne (Essential)</h3>
                <p className="text-darkLight/70 text-sm">
                  Są niezbędne do prawidłowego funkcjonowania strony. Umożliwiają podstawowe 
                  funkcje, takie jak nawigacja, logowanie czy zapamiętywanie ustawień sesji. 
                  Nie wymagają zgody użytkownika.
                </p>
                <div className="mt-2 text-xs text-darkLight/50">
                  Przykłady: sesja użytkownika, zapamiętanie koszyka, ustawienia języka
                </div>
              </div>

              <div className="bg-secondary rounded-xl p-6 border-l-4 border-accent/70">
                <h3 className="font-bold text-dark mb-2">🟡 Funkcjonalne (Functional)</h3>
                <p className="text-darkLight/70 text-sm">
                  Zapamiętują Twoje preferencje i wybory, takie jak język, region, 
                  wygląd strony. Dzięki nim strona dostosowuje się do Twoich potrzeb.
                </p>
                <div className="mt-2 text-xs text-darkLight/50">
                  Przykłady: zapamiętanie wybranego języka, preferencji wyświetlania
                </div>
              </div>

              <div className="bg-secondary rounded-xl p-6 border-l-4 border-accent/50">
                <h3 className="font-bold text-dark mb-2">🔵 Analityczne (Analytics)</h3>
                <p className="text-darkLight/70 text-sm">
                  Pomagają nam zrozumieć, w jaki sposób użytkownicy korzystają ze strony. 
                  Zbierają anonimowe informacje o odwiedzinach, ruchu i zachowaniach na stronie.
                </p>
                <div className="mt-2 text-xs text-darkLight/50">
                  Przykłady: Google Analytics – liczba odwiedzin, czas na stronie, podstrony
                </div>
              </div>

              <div className="bg-secondary rounded-xl p-6 border-l-4 border-accent/30">
                <h3 className="font-bold text-dark mb-2">🟣 Marketingowe (Marketing)</h3>
                <p className="text-darkLight/70 text-sm">
                  Służą do wyświetlania spersonalizowanych treści reklamowych i śledzenia 
                  efektywności kampanii marketingowych.
                </p>
                <div className="mt-2 text-xs text-darkLight/50">
                  Przykłady: remarketing, śledzenie konwersji, targetowanie reklam
                </div>
              </div>
            </div>
          </div>

          {/* 3. Cel używania */}
          <div id="3" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold text-dark">3. Cel używania plików cookie</h2>
            </div>
            <ul className="space-y-3 text-darkLight/80 bg-secondary rounded-xl p-6">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Zapewnienie prawidłowego działania strony</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Analiza ruchu i optymalizacja strony</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Zapamiętywanie preferencji użytkowników</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Personalizacja treści i reklam</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Pomiar efektywności kampanii marketingowych</span>
              </li>
            </ul>
          </div>

          {/* 4. Czas przechowywania */}
          <div id="4" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold text-dark">4. Czas przechowywania plików cookie</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-secondary rounded-xl p-6">
                <h3 className="font-bold text-dark mb-2">Sesyjne</h3>
                <p className="text-darkLight/70 text-sm">
                  Są przechowywane tylko podczas trwania sesji przeglądarki. 
                  Po zamknięciu przeglądarki są automatycznie usuwane.
                </p>
                <div className="mt-3 text-xs text-darkLight/50">
                  ⏱️ Czas: do zamknięcia przeglądarki
                </div>
              </div>
              <div className="bg-secondary rounded-xl p-6">
                <h3 className="font-bold text-dark mb-2">Stałe</h3>
                <p className="text-darkLight/70 text-sm">
                  Pozostają na Twoim urządzeniu przez określony czas lub do momentu 
                  ręcznego usunięcia przez użytkownika.
                </p>
                <div className="mt-3 text-xs text-darkLight/50">
                  ⏱️ Czas: od kilku godzin do kilku lat
                </div>
              </div>
            </div>
          </div>

          {/* 5. Zarządzanie */}
          <div id="5" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold text-dark">5. Zarządzanie plikami cookie</h2>
            </div>
            <p className="text-darkLight/80 leading-relaxed mb-4">
              Masz możliwość zarządzania plikami cookie w ustawieniach swojej przeglądarki. 
              Możesz:
            </p>
            <ul className="space-y-3 text-darkLight/80 bg-secondary rounded-xl p-6">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Zablokować wszystkie pliki cookie</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Usunąć istniejące pliki cookie</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Ustawić ostrzeżenia przed zapisaniem</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Zaakceptować tylko wybrane rodzaje cookie</span>
              </li>
            </ul>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener" className="bg-secondary rounded-xl p-3 text-center hover:bg-accent/10 transition-colors">
                <span className="block text-xl mb-1">🌐</span>
                <span className="text-xs font-medium text-dark">Chrome</span>
              </a>
              <a href="https://support.mozilla.org/pl/kb/usuwanie-ciasteczek" target="_blank" rel="noopener" className="bg-secondary rounded-xl p-3 text-center hover:bg-accent/10 transition-colors">
                <span className="block text-xl mb-1">🦊</span>
                <span className="text-xs font-medium text-dark">Firefox</span>
              </a>
              <a href="https://support.microsoft.com/pl-pl/microsoft-edge/usuwanie-plik%C3%B3w-cookie-w-programie-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener" className="bg-secondary rounded-xl p-3 text-center hover:bg-accent/10 transition-colors">
                <span className="block text-xl mb-1">🔷</span>
                <span className="text-xs font-medium text-dark">Edge</span>
              </a>
              <a href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac" target="_blank" rel="noopener" className="bg-secondary rounded-xl p-3 text-center hover:bg-accent/10 transition-colors">
                <span className="block text-xl mb-1">🍏</span>
                <span className="text-xs font-medium text-dark">Safari</span>
              </a>
            </div>
          </div>

          {/* 6. Podmioty trzecie */}
          <div id="6" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold text-dark">6. Pliki cookie podmiotów trzecich</h2>
            </div>
            <p className="text-darkLight/80 leading-relaxed mb-4">
              Na naszej stronie korzystamy z usług zewnętrznych dostawców, którzy mogą 
              umieszczać własne pliki cookie na Twoim urządzeniu:
            </p>
            <div className="space-y-3">
              <div className="bg-secondary rounded-xl p-4">
                <h4 className="font-semibold text-dark">Google Analytics</h4>
                <p className="text-darkLight/70 text-sm">
                  Służy do analizy ruchu na stronie. Zbierane są anonimowe dane o zachowaniach 
                  użytkowników. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" className="text-accent hover:underline">Polityka prywatności Google</a>
                </p>
              </div>
              <div className="bg-secondary rounded-xl p-4">
                <h4 className="font-semibold text-dark">Facebook Pixel</h4>
                <p className="text-darkLight/70 text-sm">
                  Służy do pomiaru efektywności kampanii reklamowych na Facebooku i 
                  targetowania reklam. <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener" className="text-accent hover:underline">Polityka prywatności Facebook</a>
                </p>
              </div>
            </div>
          </div>

          {/* 7. Zmiany */}
          <div id="7" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold text-dark">7. Zmiany w polityce</h2>
            </div>
            <div className="bg-secondary rounded-xl p-6">
              <p className="text-darkLight/80 leading-relaxed">
                Niniejsza Polityka Cookies może być aktualizowana w celu dostosowania do 
                zmieniających się przepisów prawa lub funkcjonalności strony. 
                O wszelkich zmianach będziemy informować poprzez aktualizację daty 
                na górze tego dokumentu.
              </p>
            </div>
          </div>

          {/* 8. Kontakt */}
          <div id="8" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold text-dark">8. Kontakt</h2>
            </div>
            <p className="text-darkLight/80 leading-relaxed mb-4">
              W przypadku pytań dotyczących polityki cookies, prosimy o kontakt:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-secondary rounded-xl p-6 flex items-center gap-4">
                <Mail className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm text-darkLight/60">Email</p>
                  <a href="mailto:mktlab.biuro@gmail.com" className="text-dark font-medium hover:text-accent transition-colors">
                    mktlab.biuro@gmail.com
                  </a>
                </div>
              </div>
              <div className="bg-secondary rounded-xl p-6 flex items-center gap-4">
                <Phone className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm text-darkLight/60">Telefon</p>
                  <a href="tel:+48883758310" className="text-dark font-medium hover:text-accent transition-colors">
                    +48 883 758 310
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stopka */}
        <div className="border-t border-tertiary mt-12 pt-8 text-center text-darkLight/40 text-sm">
          <p>MKT Lab © {new Date().getFullYear()} – Wszystkie prawa zastrzeżone</p>
        </div>
      </div>
    </div>
  );
}
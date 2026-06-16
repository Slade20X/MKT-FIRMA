// app/polityka-prywatnosci/page.tsx
import Link from 'next/link';
import { ArrowLeft, Shield, Mail, Phone, MapPin } from 'lucide-react';

export default function PrivacyPolicy() {
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
            <Shield className="w-7 h-7 text-accent" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-dark">Polityka Prywatności</h1>
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
            Szanujemy Twoją prywatność i dbamy o bezpieczeństwo Twoich danych osobowych. 
            Niniejsza Polityka Prywatności wyjaśnia, jakie dane zbieramy, w jaki sposób je wykorzystujemy 
            oraz jakie masz prawa związane z przetwarzaniem Twoich danych.
          </p>
        </div>

        {/* Spis treści */}
        <div className="bg-white border border-tertiary rounded-2xl p-6 md:p-8 mb-8">
          <h2 className="text-lg font-bold text-dark mb-4">Spis treści</h2>
          <ul className="space-y-2 text-darkLight/70">
            <li><a href="#1" className="hover:text-accent transition-colors">1. Administrator danych</a></li>
            <li><a href="#2" className="hover:text-accent transition-colors">2. Jakie dane zbieramy?</a></li>
            <li><a href="#3" className="hover:text-accent transition-colors">3. Cel przetwarzania danych</a></li>
            <li><a href="#4" className="hover:text-accent transition-colors">4. Podstawa prawna przetwarzania</a></li>
            <li><a href="#5" className="hover:text-accent transition-colors">5. Okres przechowywania danych</a></li>
            <li><a href="#6" className="hover:text-accent transition-colors">6. Odbiorcy danych</a></li>
            <li><a href="#7" className="hover:text-accent transition-colors">7. Twoje prawa</a></li>
            <li><a href="#8" className="hover:text-accent transition-colors">8. Pliki cookie</a></li>
            <li><a href="#9" className="hover:text-accent transition-colors">9. Bezpieczeństwo danych</a></li>
            <li><a href="#10" className="hover:text-accent transition-colors">10. Kontakt</a></li>
          </ul>
        </div>

        {/* Treść polityki */}
        <div className="space-y-8">
          {/* 1. Administrator */}
          <div id="1" className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-dark mb-4">1. Administrator danych</h2>
            <div className="bg-secondary rounded-xl p-6">
              <p className="text-darkLight/80 leading-relaxed mb-2">
                Administratorem Twoich danych osobowych jest:
              </p>
              <div className="space-y-1 text-darkLight/80">
                <p className="font-semibold text-dark">MKT Lab</p>
                <p>📧 mktlab.biuro@gmail.com</p>
                <p>📱 +48 883 758 310</p>
                <p>📍 Gdańsk, Polska</p>
              </div>
            </div>
          </div>

          {/* 2. Jakie dane zbieramy? */}
          <div id="2" className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-dark mb-4">2. Jakie dane zbieramy?</h2>
            <ul className="space-y-3 text-darkLight/80">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong className="text-dark">Dane kontaktowe:</strong> imię, nazwisko, adres e-mail, numer telefonu</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong className="text-dark">Dane firmowe:</strong> nazwa firmy, adres, NIP (jeśli podane)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong className="text-dark">Dane techniczne:</strong> adres IP, typ przeglądarki, system operacyjny, odwiedzane podstrony</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong className="text-dark">Dane z formularzy:</strong> wiadomości wysyłane przez formularz kontaktowy</span>
              </li>
            </ul>
          </div>

          {/* 3. Cel przetwarzania */}
          <div id="3" className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-dark mb-4">3. Cel przetwarzania danych</h2>
            <ul className="space-y-3 text-darkLight/80">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Odpowiedź na zapytania wysłane przez formularz kontaktowy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Realizacja usług marketingowych i świadczenie pomocy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Przesyłanie ofert i informacji handlowych (za zgodą)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Analiza ruchu na stronie i optymalizacja treści</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Dochodzenie roszczeń i obrona przed roszczeniami</span>
              </li>
            </ul>
          </div>

          {/* 4. Podstawa prawna */}
          <div id="4" className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-dark mb-4">4. Podstawa prawna przetwarzania</h2>
            <ul className="space-y-3 text-darkLight/80">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong className="text-dark">Art. 6 ust. 1 lit. a RODO</strong> – Twoja zgoda na przetwarzanie danych</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong className="text-dark">Art. 6 ust. 1 lit. b RODO</strong> – przetwarzanie niezbędne do wykonania umowy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong className="text-dark">Art. 6 ust. 1 lit. f RODO</strong> – prawnie uzasadniony interes administratora</span>
              </li>
            </ul>
          </div>

          {/* 5. Okres przechowywania */}
          <div id="5" className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-dark mb-4">5. Okres przechowywania danych</h2>
            <ul className="space-y-3 text-darkLight/80">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Dane kontaktowe przechowujemy do czasu cofnięcia zgody</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Dane z umów przechowujemy przez okres wymagany przepisami prawa (5-10 lat)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Dane analityczne przechowujemy przez 14 miesięcy</span>
              </li>
            </ul>
          </div>

          {/* 6. Odbiorcy danych */}
          <div id="6" className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-dark mb-4">6. Odbiorcy danych</h2>
            <ul className="space-y-3 text-darkLight/80">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong className="text-dark">Dostawcy usług IT:</strong> hosting, narzędzia analityczne</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong className="text-dark">Podwykonawcy:</strong> firmy wspierające realizację usług</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong className="text-dark">Organy państwowe:</strong> w przypadkach przewidzianych prawem</span>
              </li>
            </ul>
          </div>

          {/* 7. Twoje prawa */}
          <div id="7" className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-dark mb-4">7. Twoje prawa</h2>
            <p className="text-darkLight/80 mb-4">Masz prawo do:</p>
            <ul className="space-y-3 text-darkLight/80">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong className="text-dark">Dostępu</strong> do swoich danych</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong className="text-dark">Sprostowania</strong> nieprawidłowych danych</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong className="text-dark">Usunięcia</strong> danych (prawo do bycia zapomnianym)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong className="text-dark">Ograniczenia</strong> przetwarzania</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong className="text-dark">Przenoszenia</strong> danych</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong className="text-dark">Cofnięcia zgody</strong> w dowolnym momencie</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong className="text-dark">Wniesienia skargi</strong> do Prezesa UODO</span>
              </li>
            </ul>
          </div>

          {/* 8. Pliki cookie */}
          <div id="8" className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-dark mb-4">8. Pliki cookie</h2>
            <p className="text-darkLight/80 leading-relaxed mb-4">
              Nasza strona używa plików cookie w celu zapewnienia prawidłowego działania, 
              analizy ruchu oraz personalizacji treści. Możesz zarządzać ustawieniami cookie 
              w swojej przeglądarce.
            </p>
            <div className="bg-secondary rounded-xl p-6">
              <p className="text-sm text-darkLight/60">
                <strong className="text-dark">Rodzaje cookie:</strong>
              </p>
              <ul className="space-y-2 text-sm text-darkLight/60 mt-2">
                <li>• <strong className="text-dark">Niezbędne:</strong> zapewniają podstawowe działanie strony</li>
                <li>• <strong className="text-dark">Analityczne:</strong> pomagają nam zrozumieć, jak korzystasz ze strony</li>
                <li>• <strong className="text-dark">Funkcjonalne:</strong> zapamiętują Twoje preferencje</li>
              </ul>
            </div>
          </div>

          {/* 9. Bezpieczeństwo */}
          <div id="9" className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-dark mb-4">9. Bezpieczeństwo danych</h2>
            <ul className="space-y-3 text-darkLight/80">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Stosujemy protokół HTTPS (szyfrowanie połączenia)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Regularnie aktualizujemy oprogramowanie</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Dostęp do danych mają tylko upoważnione osoby</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Stosujemy zabezpieczenia przed atakami (CSP, HSTS)</span>
              </li>
            </ul>
          </div>

          {/* 10. Kontakt */}
          <div id="10" className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-dark mb-4">10. Kontakt</h2>
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
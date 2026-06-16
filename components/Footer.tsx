'use client';

import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 🔁 ZMIEŃ NA SWOJE PRAWDZIWE ADRESY SOCIAL MEDIA
  const socialLinks = {
    facebook: 'https://www.facebook.com/profile.php?id=61590845034777',
    instagram: '',
  };

  return (
    <footer className="bg-secondary pt-20 pb-8">
      <div className="container-premium">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Kolumna 1 - Logo, opis i social media */}
          <div className="lg:col-span-2">
            <span className="text-2xl font-bold tracking-tighter text-dark">MKT LAB</span>        
            <ul className="space-y-2">
              <li className="text-darkLight/60"></li>
              <li className="text-darkLight/60">NIP:</li>
              <li className="text-darkLight/60 text-sm">REGON:</li>
            </ul>
            
            {/* Social Media - Facebook i Instagram z opisem */}
            <div className="mt-6">
              <p className="text-sm font-medium text-darkLight/70 mb-3">Znajdź nas w social media:</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1877F2] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#1877F2]/90 transition-all duration-300 hover:shadow-lg hover:scale-105"
                  aria-label="Facebook MKT Lab"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:scale-105"
                  aria-label="Instagram MKT Lab"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>               
              </div>
            </div>
          </div>

          {/* Kolumna 2 - Firma */}
          <div>
            <h4 className="font-bold text-dark mb-4">Firma</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-darkLight/60 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#services" className="text-darkLight/60 hover:text-accent transition-colors">Usługi</a></li>
              <li><a href="#why-us" className="text-darkLight/60 hover:text-accent transition-colors">O nas</a></li>
              <li><a href="#process" className="text-darkLight/60 hover:text-accent transition-colors">Proces</a></li>
              <li><a href="#kalkulator" className="text-darkLight/60 hover:text-accent transition-colors">Kalkulator</a></li>
              <li><a href="#contact" className="text-darkLight/60 hover:text-accent transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Kolumna 3 - Usługi */}
          <div>
            <h4 className="font-bold text-dark mb-4">Usługi</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-darkLight/60 hover:text-accent transition-colors">Performance Marketing</a></li>
              <li><a href="#services" className="text-darkLight/60 hover:text-accent transition-colors">SEO</a></li>
              <li><a href="#services" className="text-darkLight/60 hover:text-accent transition-colors">Social Media</a></li>
              <li><a href="#services" className="text-darkLight/60 hover:text-accent transition-colors">Branding</a></li>
            </ul>
          </div>

          {/* Kolumna 4 - Kontakt */}
          <div>
            <h4 className="font-bold text-dark mb-4">Kontakt</h4>
            <ul className="space-y-2">
              <li className="text-darkLight/60">mktlab.biuro@gmail.com</li>
              <li className="text-darkLight/60">+48 883 758 310</li>
              <li className="text-darkLight/60">Gdańsk, Polska</li>
            </ul>
          </div>
        </div>

        {/* Dolna stopka - copyright i przycisk do góry */}
        <div className="border-t border-tertiary mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-darkLight/40 text-sm">
            © {new Date().getFullYear()} MKT Lab. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex items-center gap-6">
            <a href="/polityka-prywatnosci" className="text-darkLight/40 text-sm hover:text-accent transition-colors">
              Polityka prywatności
            </a>
            <a href="/polityka-cookies" className="text-darkLight/40 text-sm hover:text-accent transition-colors">
              Polityka cookies
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-accent hover:text-white transition-all group"
              aria-label="Przewiń do góry strony"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
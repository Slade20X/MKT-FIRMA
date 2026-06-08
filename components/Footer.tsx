// components/Footer.tsx
'use client';

import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary pt-20 pb-8">
      <div className="container-premium">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <span className="text-2xl font-bold tracking-tighter text-dark">MKT Lab</span>
            <p className="mt-4 text-darkLight/60 max-w-sm">
              Marketing, który generuje realny wzrost. Partner dla wymagających marek.
            </p>

          </div>

          <div>
            <h4 className="font-bold text-dark mb-4">Firma</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-darkLight/60 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#services" className="text-darkLight/60 hover:text-accent transition-colors">Usługi</a></li>
              <li><a href="#case-studies" className="text-darkLight/60 hover:text-accent transition-colors">Case Studies</a></li>
              <li><a href="#why-us" className="text-darkLight/60 hover:text-accent transition-colors">O Nas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-dark mb-4">Usługi</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-darkLight/60 hover:text-accent transition-colors">Performance Marketing</a></li>
              <li><a href="#" className="text-darkLight/60 hover:text-accent transition-colors">SEO</a></li>
              <li><a href="#" className="text-darkLight/60 hover:text-accent transition-colors">Social Media</a></li>
              <li><a href="#" className="text-darkLight/60 hover:text-accent transition-colors">Branding</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-dark mb-4">Kontakt</h4>
            <ul className="space-y-2">
              <li className="text-darkLight/60">mktlab.biuro@gmail.com</li>
              <li className="text-darkLight/60">+48 883 758 310</li>
              <li className="text-darkLight/60">Gdańsk, Poland</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-tertiary mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-darkLight/40 text-sm">© 2025 MKT Lab. Wszystkie prawa zastrzeżone.</p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-accent hover:text-white transition-all group"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
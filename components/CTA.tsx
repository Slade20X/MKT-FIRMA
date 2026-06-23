'use client';

import { useState } from 'react';
import MagneticButton from './ui/MagneticButton';
import { ArrowRight, Facebook } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // 🔁 ZMIEŃ NA SWÓJ PRAWDZIWY ADRES FACEBOOK
  const facebookUrl = 'https://www.facebook.com/profile.php?id=61590845034777';

  return (
    <>
      <section id="contact" className="py-24 md:py-32 bg-white">
        <div className="container-premium">
          <div className="bg-accent rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-white/5 to-transparent" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Gotowy na wzrost?
              </h2>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Umów się na bezpłatną konsultację lub sprawdź nas w social mediach.
              </p>
              
              {/* Przyciski w jednym rzędzie */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/kontakt">
            <MagneticButton>
              <button className="group bg-white text-accent px-8 py-4 rounded-md text-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-xl hover:scale-105">
                Porozmawiajmy
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </MagneticButton>
          </Link>

                {/* Przycisk Facebook */}
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#1877F2] text-white px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-[#1877F2]/90"
                >
                  <Facebook className="w-5 h-5" />
                  Obserwuj nas na Facebooku
                </a>
              </div>

              {/* Dodatkowa informacja */}
              <p className="text-white/50 text-sm mt-6">
                Odpowiadamy w ciągu 24h
              </p>
            </div>
          </div>
        </div>
      </section>

  
    </>
  );
}
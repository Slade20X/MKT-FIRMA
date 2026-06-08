'use client';

import { useState } from 'react';
import MagneticButton from './ui/MagneticButton';
import { ArrowRight } from 'lucide-react';
import ContactModal from './ContactModal';

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section id="contact" className="py-24 md:py-32 bg-white">
        <div className="container-premium">
          <div className="bg-accent rounded-4xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-white/5 to-transparent" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Gotowy na wzrost?
              </h2>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Umów się na bezpłatną konsultację i dowiedz się, jak możemy
                przyspieszyć Twój biznes.
              </p>
              <MagneticButton>
                <button
                  onClick={openModal}
                  className="group bg-white text-accent px-10 py-4 rounded-full text-lg font-semibold flex items-center gap-2 mx-auto transition-all duration-300 hover:shadow-xl"
                >
                  Porozmawiajmy
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
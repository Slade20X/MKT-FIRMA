'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

// 🔁 TUTAJ DODAJ SWOJE ZDJĘCIA (logotypy firm)
// Wrzuć pliki do public/ i wpisz ich nazwy poniżej
const logos = [
  {
    id: 1,
    name: 'Meta Ads',
    src: '/logos/meta.png',  // ← wrzuć plik do public/logos/meta-ads.png
    alt: 'Meta Ads Partner',
  },
  {
    id: 2,
    name: 'Google Ads',
    src: '/logos/google.png',
    alt: 'Google Ads Partner',
  },
  {
    id: 3,
    name: 'Google Ads',
    src: '/logos/google2.png',
    alt: 'Allegro Ads Partner',
  },
  {
    id: 4,
    name: 'Linkedin Ads',
    src: '/logos/linked.png',
    alt: 'TikTok Ads Partner',
  },
  {
    id: 5,
    name: 'Allegro Ads',
    src: '/logos/allegro.png',
    alt: 'LinkedIn Ads Partner',
  },
  {
    id: 6,
    name: 'Snapchat Ads',
    src: '/logos/tiktok.png',
    alt: 'Snapchat Ads Partner',
  },
];

// Jeśli nie masz jeszcze zdjęć – możesz użyć placeholderów z kolorami
// Poniżej przykładowe placeholder-y (odkomentuj, jeśli chcesz użyć)
/*
const logos = [
  {
    id: 1,
    name: 'Meta Ads',
    src: '',
    alt: 'Meta Ads',
    placeholder: true,
    color: 'from-blue-500/20 to-blue-600/20',
    textColor: 'text-blue-600',
  },
  // ... więcej
];
*/

export default function TrustedBy() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

  return (
    <section id="trusted-by" ref={sectionRef} className="py-16 md:py-20 bg-white border-y border-tertiary">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold mt-2 text-dark">
            Współpracujemy z najlepszymi <span className="text-accent">narzędziami reklamowymi na świecie</span>
          </h2>
          <p className="mt-2 text-darkLight/70 text-sm">
            Korzystamy z najnowocześniejszych platform, aby zapewnić naszym klientom 
            najwyższą skuteczność i zasięg kampanii marketingowych.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 items-center"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center justify-center p-4 md:p-6 bg-secondary rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              {logo.src ? (
                // Jeśli masz zdjęcie – wyświetl je
                <div className="relative w-full h-12 md:h-14">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain transition-all duration-500"
                    sizes="(max-width: 640px) 40vw, (max-width: 1024px) 20vw, 120px"
                  />
                </div>
              ) : (
                // Jeśli nie masz zdjęcia – wyświetl placeholder z nazwą
                <div className={`w-full h-12 md:h-14 flex items-center justify-center bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl text-darkLight/60 text-sm font-medium`}>
                  {logo.name}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="text-darkLight/60 text-sm">
            I wiele innych narzędzi, które zaufały naszej ekspertyzie.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
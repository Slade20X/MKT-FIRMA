// components/Process.tsx
'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  { number: '01', title: 'Audyt', description: 'Dogłębna analiza rynku, konkurencji i potencjału.' },
  { number: '02', title: 'Strategia', description: 'Mapa drogowa oparta na danych i celach biznesowych.' },
  { number: '03', title: 'Wdrożenie', description: 'Realizacja kampanii z ciągłą optymalizacją.' },
  { number: '04', title: 'Skalowanie', description: 'Ekspansja na kolejne kanały i rynki.' },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="process" ref={sectionRef} className="py-24 md:py-32 bg-secondary">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm uppercase tracking-wider text-accent/70 font-semibold">
            Proces
          </span>
          <h2 className="text-heading-mobile md:text-heading font-bold mt-4 text-dark">
            Jak <span className="text-accent">wspólnie pracujemy</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Linia pionowa */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-tertiary hidden md:block" />

          <div className="space-y-12 md:space-y-20">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-6 md:gap-12`}
              >
                {/* Lewa strona / Prawa strona dla parzystych */}
                <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <div className="text-5xl md:text-6xl font-bold text-accent/10 mb-2">{step.number}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-dark">{step.title}</h3>
                  <p className="text-darkLight/70 mt-2 max-w-md mx-auto md:mx-0">
                    {step.description}
                  </p>
                </div>

                {/* Kropka */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shadow-lg flex-shrink-0">
                  {idx + 1}
                </div>

                {/* Pusta przestrzeń dla zachowania równowagi */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
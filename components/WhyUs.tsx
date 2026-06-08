'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Sparkles, BarChart3, Rocket } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Strategia',
    description: 'Dane i insights, które definiują drogę do wzrostu.',
    color: 'bg-accent',
  },
  {
    icon: Sparkles,
    title: 'Kreatywność',
    description: 'Pomysły, które wyróżniają markę na tle konkurencji.',
    color: 'bg-accent',
  },
  {
    icon: BarChart3,
    title: 'Dane',
    description: 'Decyzje oparte na analityce, nie na przeczuciach.',
    color: 'bg-accent',
  },
  {
    icon: Rocket,
    title: 'Skalowanie',
    description: 'Procesy i technologie gotowe na ekspansję.',
    color: 'bg-accent',
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="why-us" ref={sectionRef} className="py-24 md:py-32 bg-secondary">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm uppercase tracking-wider text-accent/70 font-semibold">
              Dlaczego my
            </span>
            <h2 className="text-heading-mobile md:text-heading font-bold mt-4 text-dark">
              Łączymy <span className="text-accent">strategię, kreatywność i dane</span>
            </h2>
            <p className="mt-6 text-darkLight/70 text-lg leading-relaxed">
              Nie jesteśmy kolejną agencją marketingową. Jesteśmy partnerem,
              który myśli jak dyrektor zarządzający i działa jak zespół
              growthowy. Każda decyzja opiera się na danych, każda kreacja ma
              cel, każdy kanał jest zoptymalizowany.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all comet-card"
              >
                <div className={`w-12 h-12 rounded-xl ${pillar.color}/10 flex items-center justify-center mb-5`}>
                  <pillar.icon className={`w-6 h-6 text-accent`} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-dark">{pillar.title}</h3>
                <p className="text-darkLight/70 text-sm">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
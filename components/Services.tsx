'use client';

import { useRef, useEffect } from 'react';
import { ArrowUpRight, TrendingUp, Search, Users, Layers } from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion';

const services = [
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    description: 'Kampanie ROI-fokusowane z ciągłą optymalizacją w czasie rzeczywistym.',
    metric: '+300%',
    metricLabel: 'Średni ROAS',
  },
  {
    icon: Search,
    title: 'SEO',
    description: 'Strategie organicznego wzrostu oparte na danych i najnowszych algorytmach.',
    metric: '#1',
    metricLabel: 'Pozycje na TOP3',
  },
  {
    icon: Users,
    title: 'Social Media',
    description: 'Budowanie społeczności i zaangażowania z mierzalnym wpływem na sprzedaż.',
    metric: '1.2M',
    metricLabel: 'Zasięg miesięczny',
  },
  {
    icon: Layers,
    title: 'Branding',
    description: 'Tożsamość marki, która wyróżnia i buduje wartość na lata.',
    metric: '89%',
    metricLabel: 'Rozpoznawalność',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  return (
    <section id="services" ref={sectionRef} className="py-24 md:py-32 bg-secondary">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <span className="text-sm uppercase tracking-wider text-accent/70 font-semibold">
            Ekspertyza
          </span>
          <h2 className="text-heading-mobile md:text-heading font-bold mt-4 text-dark">
            Kompleksowe usługi dla <span className="text-accent">wymagających marek</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer comet-card"
    >
      <div className="flex justify-between items-start">
        <div className="w-14 h-14 rounded-2xl bg-accent/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
          <service.icon className="w-7 h-7 text-accent" />
        </div>
        <ArrowUpRight className="w-6 h-6 text-darkLight/30 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
      </div>
      <h3 className="text-2xl font-bold mt-8 mb-3 text-dark">{service.title}</h3>
      <p className="text-darkLight/70 leading-relaxed mb-6">{service.description}</p>
      <div className="pt-6 border-t border-tertiary">
        <div className="text-3xl font-bold text-accent">{service.metric}</div>
        <div className="text-sm text-darkLight/50 mt-1">{service.metricLabel}</div>
      </div>
    </motion.div>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Klient',
    role: 'CMO',
    content: 'MKT Lab zmienił nasze podejście do marketingu. Wyniki mówią same za siebie – ROI wzrósł o 312% w ciągu 6 miesięcy.',
    image: 'https://images.unsplash.com/photo-1676195470090-7c90bf539b3b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Klient',
    role: 'CEO',
    content: 'Profesjonalizm na najwyższym poziomie. Zespół MKT Lab działa jak przedłużenie naszego działu growth.',
    image: 'https://images.unsplash.com/photo-1676195470090-7c90bf539b3b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Klient',
    role: 'Head of Brand',
    content: 'Branding, który zbudowali wspólnie z nami, jest spójny, skalowalny i przede wszystkim – skuteczny.',
    image: 'https://images.unsplash.com/photo-1676195470090-7c90bf539b3b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-premium">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-wider text-accent/70 font-semibold">
            Opinie
          </span>
          <h2 className="text-heading-mobile md:text-heading font-bold mt-4 text-dark">
            Co mówią nasi <span className="text-accent">klienci</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-secondary rounded-3xl p-8 md:p-12 comet-card"
            >
              <Quote className="w-12 h-12 text-accent/20 mb-6" />
              <p className="text-xl md:text-2xl text-darkLight leading-relaxed">
                "{testimonials[current].content}"
              </p>
              <div className="flex items-center gap-4 mt-8">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-dark">{testimonials[current].name}</div>
                  <div className="text-sm text-darkLight/60">{testimonials[current].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-tertiary flex items-center justify-center hover:bg-accent hover:text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-tertiary flex items-center justify-center hover:bg-accent hover:text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
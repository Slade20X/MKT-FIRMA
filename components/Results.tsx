// components/Results.tsx
'use client';

import { useRef, useEffect, useState } from 'react';
import CountUp from './ui/CountUp';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: 306, suffix: '%', label: 'Średni wzrost ROAS', prefix: '+' },
  { value: 1, suffix: 'M+', label: 'Przychodu klientów', prefix: '+' },
  { value: 97, suffix: '%', label: 'Progres firmy', prefix: '' },
  { value: 5, suffix: '+', label: 'Krajów', prefix: '' },
];

export default function Results() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (inView && !animated) setAnimated(true);
  }, [inView, animated]);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-premium">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-wider text-accent/70 font-semibold">
            Wyniki
          </span>
          <h2 className="text-heading-mobile md:text-heading font-bold mt-4 text-dark">
            Liczby, które <span className="text-accent">mówią same za siebie</span>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-dark">
                {stat.prefix}
                {animated ? <CountUp end={stat.value} duration={2.5} /> : 0}
                {stat.suffix}
              </div>
              <p className="mt-3 text-darkLight/70 text-sm uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
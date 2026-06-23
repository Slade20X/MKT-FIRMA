'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, ExternalLink, MessageCircle, Users } from 'lucide-react';

export default function GoogleReviews() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  // 🔁 ZMIEŃ NA SWÓJ LINK DO OPINII GOOGLE
  const googleReviewsUrl = 'https://g.page/r/Cb6c3wMpLcWcEBM/review';
  const googlePlaceUrl = 'https://g.page/r/Cb6c3wMpLcWcEBM/review';

  return (
    <section id="opinie" ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-sm uppercase tracking-wider text-accent/70 font-semibold">
            Opinie klientów
          </span>
          <h2 className="text-heading-mobile md:text-heading font-bold mt-4 text-dark">
            Co mówią o nas <span className="text-accent">klienci</span>
          </h2>
          <p className="mt-4 text-darkLight/70 text-lg">
            Autentyczne opinie od naszych zadowolonych klientów na Google.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          {/* Główny widget */}
          <div className="bg-secondary rounded-3xl p-8 md:p-10 text-center border border-tertiary hover:shadow-lg transition-shadow duration-300">
            {/* Ocena w gwiazdkach */}
            <div className="flex justify-center items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-8 h-8 md:w-10 md:h-10 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Liczba */}
            <div className="text-5xl md:text-6xl font-bold text-dark">
              5.0
            </div>
            <p className="text-darkLight/60 text-sm mt-1">
              Średnia ocena na podstawie opinii Google
            </p>

            {/* Ikonka z liczbą opinii */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 shadow-sm border border-tertiary">
                <Users className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-dark"></span>
                <span className="text-xs text-darkLight/60">opinie</span>
              </div>
            </div>

            {/* Linia */}
            <div className="w-16 h-0.5 bg-accent/20 mx-auto my-6" />

            {/* Przycisk do opinii */}
            <a
              href={googlePlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors group"
            >
              <span>Zobacz wszystkie opinie na Google</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Dodatkowa zachęta */}
            <p className="text-xs text-darkLight/50 mt-4">
              Twoja opinia też może się tu znaleźć – kliknij powyżej i oceń nas!
            </p>
          </div>
        </motion.div>

        {/* Mała stopka */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-darkLight/50 text-xs flex items-center justify-center gap-1">
            <MessageCircle className="w-3 h-3" />
            <span>Opinie aktualne na bieżąco • Google</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
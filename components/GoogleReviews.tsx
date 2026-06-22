'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, MessageCircle, ExternalLink } from 'lucide-react';
import Link from 'next/link';

declare global {
  interface Window {
    Shapo?: {
      init: (config: any) => void;
    };
  }
}

export default function GoogleReviews() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const widgetRef = useRef<HTMLDivElement>(null);
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  useEffect(() => {
    // Sprawdź, czy skrypt Shapo już istnieje
    const existingScript = document.getElementById('shapo-embed-js');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'shapo-embed-js';
      script.type = 'text/javascript';
      script.src = 'https://cdn.shapo.io/js/embed.js';
      script.defer = true;
      script.onload = () => {
        setWidgetLoaded(true);
        console.log('Shapo widget loaded');
      };
      document.head.appendChild(script);
    } else {
      setWidgetLoaded(true);
    }
  }, []);

  return (
    <section id="opinie" ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="text-sm uppercase tracking-wider text-accent/70 font-semibold">
            Opinie klientów
          </span>
          <h2 className="text-heading-mobile md:text-heading font-bold mt-4 text-dark">
            Co mówią o nas <span className="text-accent">klienci</span>
          </h2>
          <p className="mt-4 text-darkLight/70 text-lg">
            Autentyczne opinie z Google od naszych zadowolonych klientów.
          </p>
        </motion.div>

        {/* Widget Shapo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div 
            id="shapo-widget-b9c05638fc7109619152" 
            ref={widgetRef}
            className="min-h-[200px]"
          />
        </motion.div>

        {/* Link do Google */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <a
            href="https://g.page/mktlab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:underline transition-colors text-sm"
          >
            Zobacz wszystkie opinie na Google
            <ExternalLink className="w-3 h-3" />
          </a>
        </motion.div>

        {/* Stopka */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-4"
        >
          <p className="text-darkLight/40 text-sm">
            Opinie pobierane automatycznie z Google – aktualne na bieżąco.
          </p>
          <div className="flex items-center justify-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-sm font-medium text-dark ml-2">5.0</span>
            <span className="text-sm text-darkLight/40 ml-1">(opinie Google)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
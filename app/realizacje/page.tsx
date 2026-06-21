// app/realizacje/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Realizacje - MKT Lab | Case Studies i projekty',
  description: 'Poznaj nasze realizacje. Zobacz, jak pomogliśmy firmom zwiększyć sprzedaż, ROAS i rozpoznawalność. Case studies z e-commerce i B2B.',
  alternates: {
    canonical: 'https://mktlab.pl/realizacje',
  },
  openGraph: {
    title: 'Realizacje - MKT Lab | Case Studies',
    description: 'Poznaj nasze realizacje i zobacz, jak pomagamy firmom osiągać wyniki.',
    url: 'https://mktlab.pl/realizacje',
    images: [
      {
        url: 'https://mktlab.pl/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MKT Lab - realizacje',
      },
    ],
  },
};

'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Target, BarChart3, Clock, CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Transformacja cyfrowa e-commerce',
    category: 'Performance Marketing',
    description: 'Przeprowadziliśmy kompleksową strategię marketingową dla sklepu odzieżowego. Dzięki optymalizacji kampanii Google Ads i Facebook Ads udało nam się zwiększyć sprzedaż o 312% w ciągu 6 miesięcy.',
    results: {
      sales: '+312%',
      revenue: '+2.4M zł',
      roas: '420%',
      conversions: '+189%',
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    chart: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Budowa marki i pozycjonowanie',
    category: 'SEO & Branding',
    description: 'Przeprowadziliśmy audyt SEO i zbudowaliśmy nową strategię wizerunkową dla firmy fintech. Efekt? 450% wzrost ruchu organicznego i 89% rozpoznawalności marki w branży.',
    results: {
      traffic: '+450%',
      brand: '89%',
      leads: '+267%',
      position: '#1',
    },
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=500&fit=crop',
    chart: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
];

export default function RealizacjePage() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    // Animacje dla elementów - od razu po załadowaniu
    const ctx = gsap.context(() => {
      // Animacje dla wyników - z opóźnieniem 0.3s od startu
      gsap.utils.toArray('.result-number').forEach((el: any, index: number) => {
        gsap.fromTo(el,
          { opacity: 0, scale: 0.8, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            delay: 0.3 + index * 0.1,
            ease: 'power3.out',
          }
        );
      });

      // Animacja dla nagłówka
      gsap.fromTo('.page-title',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.1,
          ease: 'power3.out',
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Variants dla framer-motion (również od razu)
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 0.1 }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.2 + index * 0.15 }
    })
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="container-premium">
        {/* Nagłówek */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-12"
        >
          <Link 
            href="/#home" 
            className="inline-flex items-center gap-2 text-darkLight/60 hover:text-accent transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">Powrót do strony głównej</span>
          </Link>

          <h1 className="page-title text-3xl md:text-5xl font-bold mt-3 text-dark">
            Projekty, które <span className="text-accent">napędzają wzrost</span>
          </h1>
          <p className="mt-4 text-darkLight/70 text-lg max-w-2xl">
            Poznaj nasze najnowsze realizacje – przekonaj się, jak pomagamy firmom osiągać 
            wymierne rezultaty.
          </p>
        </motion.div>

        {/* Lista realizacji */}
        <div className="space-y-20 md:space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={projectVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-b border-tertiary/30 pb-16 md:pb-24 last:border-0 last:pb-0"
            >
              {/* Lewa strona – opis */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                <div>
                  <span className="text-xs font-medium text-accent/70 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-dark mt-2">
                    {project.title}
                  </h2>
                </div>

                <p className="text-darkLight/70 leading-relaxed">
                  {project.description}
                </p>

                {/* Wyniki w gridzie */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {Object.entries(project.results).map(([key, value]) => {
                    const icons: { [key: string]: React.ReactNode } = {
                      sales: <TrendingUp className="w-4 h-4" />,
                      revenue: <BarChart3 className="w-4 h-4" />,
                      roas: <Target className="w-4 h-4" />,
                      conversions: <Users className="w-4 h-4" />,
                      traffic: <TrendingUp className="w-4 h-4" />,
                      brand: <Users className="w-4 h-4" />,
                      leads: <Target className="w-4 h-4" />,
                      position: <CheckCircle className="w-4 h-4" />,
                    };

                    const labels: { [key: string]: string } = {
                      sales: 'Wzrost sprzedaży',
                      revenue: 'Dodatkowy przychód',
                      roas: 'ROAS',
                      conversions: 'Wzrost konwersji',
                      traffic: 'Wzrost ruchu',
                      brand: 'Rozpoznawalność',
                      leads: 'Wzrost leadów',
                      position: 'Pozycja',
                    };

                    return (
                      <div key={key} className="bg-secondary rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-center gap-2 text-accent mb-1">
                          {icons[key] || <Target className="w-4 h-4" />}
                          <span className="text-xs text-darkLight/50 uppercase tracking-wider">
                            {labels[key] || key}
                          </span>
                        </div>
                        <div className="text-2xl md:text-3xl font-bold text-dark result-number">
                          {value}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Przycisk do kontaktu */}
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:scale-105 mt-4"
                >
                  Podobny projekt? Porozmawiajmy
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Prawa strona – zdjęcie / wykres */}
              <div className={`${index % 2 === 1 ? 'lg:order-first' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent" />
                  </div>
                  
                  {/* Nakładka z dodatkowym wykresem */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg max-w-[180px]">
                    <div className="flex items-center gap-2 text-xs text-darkLight/50">
                      <BarChart3 className="w-3 h-3 text-accent" />
                      <span>Wyniki kampanii</span>
                    </div>
                    <div className="flex items-end gap-1 h-8 mt-1">
                      {[65, 80, 45, 95, 70, 100].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-accent/20 rounded-sm hover:bg-accent/40 transition-colors"
                          style={{ height: `${height * 0.6}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA na dole */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 md:mt-32 text-center bg-secondary rounded-3xl p-12 md:p-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">
            Chcesz być kolejną <span className="text-accent">historią sukcesu</span>?
          </h2>
          <p className="text-darkLight/60 max-w-2xl mx-auto mb-8">
            Skontaktuj się z nami i dowiedz się, jak możemy pomóc Twojej firmie osiągnąć podobne wyniki.
          </p>
          <Link 
            href="/#contact" 
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Porozmawiajmy o Twoim projekcie
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
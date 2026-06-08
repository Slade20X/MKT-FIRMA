// @ts-nocheck
'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const cases = [
  {
    id: 1,
    title: 'Transformacja cyfrowa lidera e-commerce',
    category: 'Performance Marketing',
    result: '+312% ROI',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    brand: 'TechStyle',
  },
  {
    id: 2,
    title: 'Globalny branding dla scale-upu',
    category: 'Branding & Strategy',
    result: '89% rozpoznawalności',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72',
    brand: 'NexGen',
  },
  {
    id: 3,
    title: 'SEO dominacja w branży fintech',
    category: 'SEO',
    result: '+450% ruchu organicznego',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f',
    brand: 'FinScale',
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [totalWidth, setTotalWidth] = useState(0);

  useEffect(() => {
    if (!trackRef.current) return;
    
    const track = trackRef.current;
    const cards = Array.from(track.children);
    let width = 0;
    cards.forEach((card) => {
      const style = window.getComputedStyle(card);
      const marginRight = parseFloat(style.marginRight) || 0;
      width += card.offsetWidth + marginRight;
    });
    setTotalWidth(width - (window.innerWidth * 0.05));
  }, []);

  useEffect(() => {
    if (totalWidth === 0) return;

    const ctx = gsap.context(() => {
      if (!containerRef.current) return;
      
      const scrollTrigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${totalWidth}`,
        pin: true,
        anticipatePin: 1,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          if (trackRef.current) {
            const xPercent = -progress * 100;
            gsap.set(trackRef.current, {
              x: `${xPercent}%`,
              ease: 'none',
            });
          }
        },
      });

      window.addEventListener('resize', () => {
        scrollTrigger.refresh();
      });

      return () => {
        scrollTrigger.kill();
      };
    }, containerRef);

    return () => ctx.revert();
  }, [totalWidth]);

  return (
    <section id="case-studies" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container-premium mb-16">
        <span className="text-sm uppercase tracking-wider text-accent/70 font-semibold">
          Case Studies
        </span>
        <h2 className="text-heading-mobile md:text-heading font-bold mt-4 text-dark">
          Projekty, które <span className="text-accent">napędzają wzrost</span>
        </h2>
      </div>

      <div ref={containerRef} className="relative h-screen overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-8 md:gap-12 h-full items-center px-6 md:px-12 lg:px-20 absolute left-0 top-0"
          style={{ width: 'max-content' }}
        >
          {cases.map((item) => (
            <div
              key={item.id}
              className="w-[90vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] flex-shrink-0 group comet-card"
            >
              <div className="relative rounded-3xl overflow-hidden bg-tertiary">
                <div className="aspect-[16/9] relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm opacity-80 mb-2">{item.category}</p>
                      <h3 className="text-2xl md:text-3xl font-bold max-w-md">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-lg font-semibold">{item.result}</p>
                    </div>
                    <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center group-hover:bg-white group-hover:text-dark transition-all">
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
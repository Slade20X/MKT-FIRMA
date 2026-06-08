'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(titleRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power4.out' })
        .fromTo(subtitleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.4')
        .fromTo(buttonsRef.current?.children, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.2 }, '-=0.3')
        .fromTo(imageRef.current, { scale: 0.9, opacity: 0, rotationY: -15, rotationX: -5 }, { scale: 1, opacity: 1, rotationY: 0, rotationX: 0, duration: 1.2 }, '-=0.8');
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        animation: gsap.to(imageRef.current, { rotationY: 25, rotationX: 12, y: 80, scale: 0.95, ease: 'none' }),
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen pt-32 md:pt-40 overflow-hidden">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h1 ref={titleRef} className="text-hero-mobile md:text-hero font-bold tracking-tight text-dark">
              Marketing, który generuje
              <span className="block text-accent">realny wzrost.</span>
            </h1>
            <p ref={subtitleRef} className="mt-6 text-lg md:text-xl text-darkLight/80 leading-relaxed max-w-lg">
              Pomagamy ambitnym markom zwiększać sprzedaż dzięki strategii, kreatywności i danym. Działamy w Gdańsku i zdalnie w całej Polsce.
            </p>
            <div ref={buttonsRef} className="mt-10 flex flex-wrap gap-4">
              <MagneticButton>
                <button onClick={scrollToContact} className="group bg-dark text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-accent">
                  Umów rozmowę <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </button>
              </MagneticButton>
              <MagneticButton>
                <button className="group bg-tertiary text-dark px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-secondary">
                  Zobacz realizacje <Play className="w-4 h-4" />
                </button>
              </MagneticButton>
            </div>
          </div>
          <div ref={imageRef} className="relative transform-gpu" style={{ transformStyle: 'preserve-3d', perspective: '1200px' }}>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl" style={{ transform: 'rotateY(-16deg) rotateX(8deg)' }}>
              <Image
                src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=1173&auto=format"
                alt="Dashboard marketingowy MKT Lab – analiza wyników kampanii"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
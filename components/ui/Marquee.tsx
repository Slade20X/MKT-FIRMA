// components/ui/Marquee.tsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'left' | 'right';
}

export default function Marquee({ children, speed = 30, direction = 'left' }: MarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const children = marquee.children;
    const totalWidth = Array.from(children).reduce(
      (acc, child) => acc + (child as HTMLElement).offsetWidth,
      0
    );

    const duration = totalWidth / (speed * 10);

    const tl = gsap.to(marquee, {
      x: direction === 'left' ? -totalWidth / 2 : totalWidth / 2,
      duration: duration,
      repeat: -1,
      ease: 'none',
      modifiers: {
        x: (x) => `${parseFloat(x) % (totalWidth / 2)}px`,
      },
    });

    return () => {
      tl.kill();
    };
  }, [speed, direction]);

  return (
    <div className="overflow-hidden">
      <div ref={marqueeRef} className="flex whitespace-nowrap">
        {children}
      </div>
    </div>
  );
}
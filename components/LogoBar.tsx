// components/LogoBar.tsx
'use client';

import Marquee from './ui/Marquee';

const logos = [
  { name: 'TechCorp', class: 'text-2xl font-bold text-darkLight/60' },
  { name: 'Innovate', class: 'text-2xl font-bold text-darkLight/60' },
  { name: 'GlobalNet', class: 'text-2xl font-bold text-darkLight/60' },
  { name: 'FutureSoft', class: 'text-2xl font-bold text-darkLight/60' },
  { name: 'DesignLabs', class: 'text-2xl font-bold text-darkLight/60' },
  { name: 'VentureHub', class: 'text-2xl font-bold text-darkLight/60' },
  { name: 'ApexGroup', class: 'text-2xl font-bold text-darkLight/60' },
];

export default function LogoBar() {
  return (
    <section className="py-16 md:py-24 border-y border-tertiary">
      <div className="container-premium">
        <p className="text-center text-darkLight/50 text-sm uppercase tracking-wider mb-8">
          Zaufali nam
        </p>
        <Marquee speed={30}>
          {logos.concat(logos).map((logo, i) => (
            <div key={i} className="mx-12">
              <span className={logo.class}>{logo.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
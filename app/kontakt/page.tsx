// app/kontakt/page.tsx
import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kontakt - MKT Lab | Skontaktuj się z nami',
  description: 'Skontaktuj się z MKT Lab. Wypełnij formularz, a odpowiemy w ciągu 24h. Jesteśmy w Gdańsku i zdalnie w całej Polsce.',
  alternates: {
    canonical: 'https://mktlab.pl/kontakt',
  },
};

export default function KontaktPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="container-premium max-w-2xl mx-auto">
        {/* Link powrotny */}
        <Link 
          href="/#contact" 
          className="inline-flex items-center gap-2 text-darkLight/50 hover:text-accent transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm">Powrót</span>
        </Link>

        {/* Nagłówek */}
        <div className="text-center mb-10">
          <span className="text-sm uppercase tracking-wider text-accent/70 font-semibold">
            Kontakt
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 text-dark">
            Skontaktuj się <span className="text-accent">z nami</span>
          </h1>
          <p className="mt-3 text-darkLight/60">
            Wypełnij formularz, a odpowiemy w ciągu 24h.
          </p>
        </div>

        {/* Formularz */}
        <ContactForm />
      </div>
    </div>
  );
}
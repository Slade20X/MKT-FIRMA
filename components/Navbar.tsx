'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Usługi', href: '#services' },
  { name: 'O nas', href: '#why-us' },
  { name: 'Proces', href: '#process' },
  { name: 'Cennik', href: '#contact' },
  { name: 'Kontakt', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container-premium flex items-center justify-between">
          {/* LOGO - zamiast tekstu */}
          <a href="#home" className="relative z-10 block">
            <Image
              src="/logo.png"
              alt="MKT Lab – Agencja Marketingu i Wzrostu"
              width={120}
              height={40}
              className="h-12 md:h-14 w-auto object-contain"
              priority
            />
          </a>

          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-darkLight/80 hover:text-dark transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <MagneticButton>
              <button
                onClick={scrollToContact}
                className="bg-dark text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-accent transition"
              >
                Umów konsultację
              </button>
            </MagneticButton>
          </div>

          <button onClick={() => setMobileMenuOpen(true)} className="md:hidden">
            <Menu className="w-6 h-6 text-dark" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-50 bg-white"
          >
            <div className="flex justify-end p-6">
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {/* Logo w menu mobilnym */}
              <div className="mb-4">
                <Image
                  src="/logo.png"
                  alt="MKT Lab"
                  width={140}
                  height={46}
                  className="h-10 w-auto object-contain"
                />
              </div>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-medium"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={scrollToContact}
                className="bg-dark text-white px-8 py-3 rounded-full text-lg font-medium"
              >
                Umów konsultację
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
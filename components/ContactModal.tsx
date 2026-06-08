'use client';

import { useEffect } from 'react';
import { X, Mail, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
          />

          {/* Modal – wyśrodkowany, z animacją od dołu */}
          <motion.div
            initial={{
              opacity: 0,
              translateY: '100vh',
              translateX: '-50%',
            }}
            animate={{
              opacity: 1,
              translateY: '-50%',
              translateX: '-50%',
            }}
            exit={{
              opacity: 0,
              translateY: '100vh',
              translateX: '-50%',
            }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 300,
            }}
            className="fixed top-1/2 left-1/2 z-[101] w-[90vw] max-w-md"
            style={{ transform: 'translate(-50%, -50%)' }} // ustawienie początkowe, ale nadpisane przez animate
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex justify-between items-center p-5 border-b border-tertiary">
                <h3 className="text-xl font-bold text-dark">Porozmawiajmy</h3>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-tertiary transition-colors"
                >
                  <X className="w-4 h-4 text-dark" />
                </button>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex items-center gap-3 p-3 bg-secondary rounded-xl">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-darkLight/60">Email</p>
                    <a
                      href="mailto:mktlab.biuro@gmail.com"
                      className="text-sm font-medium text-dark hover:text-accent transition-colors break-all"
                    >
                      mktlab.biuro@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary rounded-xl">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-darkLight/60">Telefon</p>
                    <a
                      href="tel:+48883758310"
                      className="text-sm font-medium text-dark hover:text-accent transition-colors"
                    >
                      +48 883 758 310
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary rounded-xl">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-darkLight/60">Biuro / spotkania</p>
                    <p className="text-sm font-medium text-dark">Gdańsk (Śródmieście)</p>
                    <p className="text-xs text-darkLight/50 mt-0.5">
                      Działamy zdalnie w całej Polsce
                    </p>
                  </div>
                </div>
                <div className="pt-2 text-center">
                  <p className="text-xs text-darkLight/40">
                    Odpowiadamy w ciągu 24h w dni robocze.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
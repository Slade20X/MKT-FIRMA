// components/ContactForm.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Mail, 
  User, 
  Phone, 
  MessageCircle, 
  CheckCircle, 
  AlertCircle,
  Sparkles,
  Shield
} from 'lucide-react';
import Link from 'next/link';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      setStatus({ type: 'error', message: 'Musisz zaakceptować zgodę na przetwarzanie danych osobowych.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Wiadomość wysłana! Odpowiemy w ciągu 24h.' });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '', consent: false });
      } else {
        setStatus({ type: 'error', message: data.error || '❌ Wystąpił błąd. Spróbuj ponownie.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: '❌ Wystąpił błąd połączenia. Spróbuj ponownie.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Status */}
        <AnimatePresence>
          {status.type && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`p-4 rounded-md flex items-center gap-3 text-sm ${
                status.type === 'success' 
                  ? 'bg-green-50 border border-green-200 text-green-700' 
                  : 'bg-red-50 border border-red-200 text-red-700'
              }`}
            >
              {status.type === 'success' ? (
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
              )}
              <span>{status.message}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Imię i nazwisko */}
        <div className="relative group">
          <label htmlFor="name" className="block text-sm font-medium text-dark mb-1.5">
            Imię i nazwisko <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
              focusedField === 'name' ? 'text-accent' : 'text-darkLight/40'
            }`} />
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              placeholder="Wpisz swoje imię i nazwisko"
              required
              className={`w-full pl-12 pr-4 py-3.5 bg-secondary/50 border-2 rounded-md transition-all duration-300 text-dark placeholder:text-darkLight/50 focus:outline-none ${
                focusedField === 'name' 
                  ? 'border-accent bg-white shadow-[0_0_0_4px_rgba(15,23,42,0.05)]' 
                  : 'border-tertiary hover:border-accent/30'
              }`}
            />
          </div>
        </div>

        {/* Email + Telefon (side by side) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="relative group">
            <label htmlFor="email" className="block text-sm font-medium text-dark mb-1.5">
              Adres email <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                focusedField === 'email' ? 'text-accent' : 'text-darkLight/40'
              }`} />
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                placeholder="twoj@email.pl"
                required
                className={`w-full pl-12 pr-4 py-3.5 bg-secondary/50 border-2 rounded-md transition-all duration-300 text-dark placeholder:text-darkLight/50 focus:outline-none ${
                  focusedField === 'email' 
                    ? 'border-accent bg-white shadow-[0_0_0_4px_rgba(15,23,42,0.05)]' 
                    : 'border-tertiary hover:border-accent/30'
                }`}
              />
            </div>
          </div>

          <div className="relative group">
            <label htmlFor="phone" className="block text-sm font-medium text-dark mb-1.5">
              Numer telefonu
            </label>
            <div className="relative">
              <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                focusedField === 'phone' ? 'text-accent' : 'text-darkLight/40'
              }`} />
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                placeholder="+48 123 456 789"
                className={`w-full pl-12 pr-4 py-3.5 bg-secondary/50 border-2 rounded-md transition-all duration-300 text-dark placeholder:text-darkLight/50 focus:outline-none ${
                  focusedField === 'phone' 
                    ? 'border-accent bg-white shadow-[0_0_0_4px_rgba(15,23,42,0.05)]' 
                    : 'border-tertiary hover:border-accent/30'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Temat */}
        <div className="relative group">
          <label htmlFor="subject" className="block text-sm font-medium text-dark mb-1.5">
            Temat wiadomości
          </label>
          <div className="relative">
            <MessageCircle className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
              focusedField === 'subject' ? 'text-accent' : 'text-darkLight/40'
            }`} />
            <input
              id="subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onFocus={() => setFocusedField('subject')}
              onBlur={() => setFocusedField(null)}
              placeholder="Np. Zapytanie ofertowe"
              className={`w-full pl-12 pr-4 py-3.5 bg-secondary/50 border-2 rounded-md transition-all duration-300 text-dark placeholder:text-darkLight/50 focus:outline-none ${
                focusedField === 'subject' 
                  ? 'border-accent bg-white shadow-[0_0_0_4px_rgba(15,23,42,0.05)]' 
                  : 'border-tertiary hover:border-accent/30'
              }`}
            />
          </div>
        </div>

        {/* Wiadomość */}
        <div className="relative group">
          <label htmlFor="message" className="block text-sm font-medium text-dark mb-1.5">
            Treść wiadomości <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              placeholder="Opisz, w czym możemy Ci pomóc..."
              required
              rows={5}
              className={`w-full px-4 py-3.5 bg-secondary/50 border-2 rounded-md transition-all duration-300 text-dark placeholder:text-darkLight/50 focus:outline-none resize-none ${
                focusedField === 'message' 
                  ? 'border-accent bg-white shadow-[0_0_0_4px_rgba(15,23,42,0.05)]' 
                  : 'border-tertiary hover:border-accent/30'
              }`}
            />
          </div>
        </div>

        {/* Zgoda RODO - poprawiona widoczność */}
        <div className="flex items-start gap-3 pt-2">
          <input
            type="checkbox"
            name="consent"
            id="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
            className="mt-1 w-5 h-5 rounded border-2 border-tertiary bg-white text-accent focus:ring-2 focus:ring-accent/20 focus:ring-offset-0 cursor-pointer flex-shrink-0 transition-colors"
          />
          <label htmlFor="consent" className="text-darkLight/60 text-xs leading-relaxed">
            Klikając „<span className="text-dark font-medium">Wyślij wiadomość</span>”, wyrażasz zgodę na przetwarzanie swoich danych osobowych w celu udzielenia odpowiedzi na przesłane zapytanie. Administratorem danych jest MKT Lab. Dane będą przetwarzane zgodnie z obowiązującymi przepisami RODO. Więcej informacji, w tym o przysługujących Ci prawach, znajdziesz w naszej{' '}
            <Link href="/polityka-prywatnosci" className="text-accent hover:underline transition-colors font-medium">
              Polityce Prywatności
            </Link>
            .
          </label>
        </div>

        {/* Przycisk wysyłki */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-4 rounded-md font-semibold text-white bg-accent transition-all duration-300 flex items-center justify-center gap-3 text-sm mt-4 ${
            isSubmitting 
              ? 'opacity-70 cursor-not-allowed' 
              : 'hover:bg-accent/90 hover:shadow-lg'
          }`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Wysyłanie...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Wyślij wiadomość</span>
            </>
          )}
        </motion.button>

        {/* Stopka - poprawiona widoczność */}
        <div className="flex items-center justify-center gap-4 pt-2">
          <div className="flex items-center gap-1.5 text-darkLight/40 text-xs">
            <Shield className="w-3.5 h-3.5" />
            <span>Bezpieczne połączenie</span>
          </div>
          <span className="text-darkLight/20">•</span>
          <div className="text-darkLight/40 text-xs">
            <span>Odpowiadamy w <span className="text-darkLight/60 font-medium">24h</span></span>
          </div>
        </div>
      </form>
    </div>
  );
}
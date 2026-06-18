'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  ChevronDown, 
  Search, 
  TrendingUp, 
  Users, 
  PenTool, 
  BarChart3, 
  Rocket, 
  Shield, 
  Mail,
  Phone,
  Clock,
  Award,
  Sparkles,
  HelpCircle,
  MessageCircle,
  Star
} from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
  icon: React.ElementType;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: 'Ile kosztują usługi MKT Lab?',
    answer: 'Nasze pakiety zaczynają się od 3 900 zł/mies. (START), 7 900 zł/mies. (GROWTH) i 14 900 zł/mies. (PRO). Dla większych firm przygotowujemy indywidualną wycenę w pakiecie ENTERPRISE. Każdy pakiet można modyfikować pod potrzeby klienta. Zapraszamy na bezpłatną konsultację!',
    category: 'Ceny',
    icon: TrendingUp,
  },
  {
    id: 2,
    question: 'Jakie usługi oferuje MKT Lab?',
    answer: 'Oferujemy kompleksowe usługi marketingowe: Performance Marketing (kampanie Google Ads, Facebook Ads), SEO (pozycjonowanie stron), Social Media (Facebook, Instagram, LinkedIn, TikTok) oraz Branding (strategia marki, identyfikacja wizualna). Działamy w Gdańsku i zdalnie w całej Polsce.',
    category: 'Usługi',
    icon: Search,
  },
  {
    id: 3,
    question: 'Czy mogę zrezygnować z usług w każdym momencie?',
    answer: 'Tak! Nasze umowy są elastyczne - zapewniamy miesięczny okres wypowiedzenia. Możesz zrezygnować bez dodatkowych kosztów. Jesteśmy pewni jakości naszych usług, dlatego dajemy Ci pełną swobodę.',
    category: 'Umowa',
    icon: Shield,
  },
  {
    id: 4,
    question: 'Jak długo trwa wdrożenie kampanii?',
    answer: 'Pierwsze efekty są widoczne już po 2-4 tygodniach od rozpoczęcia kampanii. Pełna optymalizacja i wdrożenie strategii trwa około 3 miesięcy. Każdy projekt jest inny - dostosowujemy tempo do Twoich potrzeb i budżetu.',
    category: 'Proces',
    icon: Clock,
  },
  {
    id: 5,
    question: 'Czy oferujecie bezpłatną konsultację?',
    answer: 'Tak! Oferujemy bezpłatną konsultację, podczas której poznamy Twoją firmę, przeanalizujemy obecną sytuację marketingową i zaproponujemy pierwsze kroki. To doskonała okazja, aby sprawdzić, czy możemy Ci pomóc.',
    category: 'Kontakt',
    icon: MessageCircle,
  },
  {
    id: 6,
    question: 'Jakie wyniki mogę oczekiwać?',
    answer: 'Nasi klienci osiągają średnio +420% ROAS w kampaniach performance, +450% wzrost ruchu organicznego dzięki SEO, 89% wzrost rozpoznawalności marki oraz 96% retencji klientów. Wyniki zależą od branży i zaangażowania, ale zawsze dążymy do maksymalizacji ROI.',
    category: 'Wyniki',
    icon: Star,
  },
  {
    id: 7,
    question: 'Czy macie doświadczenie w mojej branży?',
    answer: 'Tak! Mamy doświadczenie w e-commerce, fintech, nowych technologiach, usługach B2B, modzie, gastronomii, edukacji i wielu innych branżach. Każdy projekt traktujemy indywidualnie i dostosowujemy strategię do specyfiki Twojego rynku.',
    category: 'Doświadczenie',
    icon: Award,
  },
  {
    id: 8,
    question: 'Jak wygląda proces współpracy?',
    answer: 'Nasz proces to 4 etapy: 1) AUDYT - analiza rynku i konkurencji, 2) STRATEGIA - mapa drogowa oparta na danych, 3) WDROŻENIE - realizacja kampanii z optymalizacją, 4) SKALOWANIE - ekspansja na kolejne kanały. Każdy etap jest transparentny i oparty na danych.',
    category: 'Proces',
    icon: Rocket,
  },
  {
    id: 9,
    question: 'Czy macie referencje od klientów?',
    answer: 'Oczywiście! Posiadamy wiele pozytywnych opinii od naszych klientów. Nasi klienci osiągnęli wzrost ROI o +312%, zyskali 89% rozpoznawalności i 96% retencji. Chętnie podzielimy się szczegółami case studies podczas konsultacji.',
    category: 'Opinie',
    icon: Users,
  },
  {
    id: 10,
    question: 'Czy działacie tylko w Gdańsku?',
    answer: 'Nie! Nasze biuro znajduje się w Gdańsku (Śródmieście), ale działamy zdalnie w całej Polsce. Oferujemy spotkania osobiste w Gdańsku oraz konsultacje online dla klientów z innych miast. Jesteśmy lokalnie, ale działamy globalnie!',
    category: 'Lokalizacja',
    icon: Mail,
  },
];

const categories = ['Wszystkie', 'Ceny', 'Usługi', 'Proces', 'Kontakt', 'Wyniki', 'Doświadczenie', 'Umowa', 'Opinie', 'Lokalizacja'];

export default function FAQ() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Wszystkie');
  const [searchQuery, setSearchQuery] = useState('');
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const toggleQuestion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  const filteredFaqs = faqItems.filter((item) => {
    const matchesCategory = selectedCategory === 'Wszystkie' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" ref={sectionRef} className="py-24 md:py-32 bg-secondary">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-sm uppercase tracking-wider text-accent/70 font-semibold">
            Najczęściej zadawane pytania
          </span>
          <h2 className="text-heading-mobile md:text-heading font-bold mt-4 text-dark">
            Wszystko, co chcesz <span className="text-accent">wiedzieć</span>
          </h2>
          <p className="mt-4 text-darkLight/80 text-lg">
            Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące naszych usług, cen i współpracy.
          </p>
        </motion.div>

        {/* Wyszukiwarka i filtry */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto mb-8"
        >
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-darkLight/60" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Szukaj pytania..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-tertiary focus:border-accent focus:outline-none transition-colors text-sm"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-accent text-white'
                    : 'bg-white text-darkLight/60 hover:bg-tertiary hover:text-dark'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Lista FAQ */}
        <motion.div 
          className="max-w-3xl mx-auto space-y-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-tertiary">
              <HelpCircle className="w-12 h-12 text-darkLight/20 mx-auto mb-3" />
              <p className="text-darkLight/50">Nie znaleziono pytań spełniających kryteria.</p>
            </div>
          ) : (
            filteredFaqs.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl border border-tertiary hover:border-accent/20 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md"
              >
                <button
                  onClick={() => toggleQuestion(item.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3 flex-1 pr-4">
                    <div className="w-8 h-8 rounded-full bg-accent/5 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-sm md:text-base font-medium text-dark">
                      {item.question}
                    </span>
                    <span className="ml-auto text-xs text-darkLight/60 bg-secondary px-2 py-0.5 rounded-full flex-shrink-0 hidden sm:block">
                      {item.category}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: activeId === item.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-2"
                  >
                    <ChevronDown className="w-5 h-5 text-darkLight/60" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-tertiary/50">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-accent/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Sparkles className="w-3 h-3 text-accent" />
                          </div>
                          <p className="text-darkLight/70 text-sm leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* Stopka */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-darkLight/60 text-sm">
            Nie znalazłeś odpowiedzi?{' '}
            <a href="/#contact" className="text-accent hover:underline font-medium">
              Skontaktuj się z nami
            </a>
            {' '}- odpowiemy w ciągu 24h!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
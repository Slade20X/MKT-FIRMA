'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, Sparkles } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

// ============================================================
// 1. SŁOWNIK WIEDZY BOTA
// ============================================================
const botKnowledge: { keywords: string[]; response: string }[] = [
  // === POWITANIA ===
  {
    keywords: ['cześć', 'hej', 'witaj', 'siema', 'dzień dobry', 'dobry wieczór', 'elo', 'hello', 'hi', 'czesc', 'witam'],
    response: 'Cześć! 😊 Miło Cię widzieć! Jestem MKT Bot - asystentem agencji MKT Lab. Jak mogę Ci pomóc? Możesz zapytać o nasze usługi, ceny, proces współpracy, a nawet o porady marketingowe!'
  },

  // === CHCĘ ZACZĄĆ / NOWY KLIENT ===
  {
    keywords: ['chcę zacząć', 'zaczynamy', 'chcemy współpracować', 'jestem zainteresowany', 'chcemy was zatrudnić', 'jak zacząć', 'pierwsze kroki', 'chcemy zacząć'],
    response: 'Świetnie! 🎉 To najlepsza decyzja! Oto jak wygląda początek współpracy:\n\n1️⃣ Kliknij przycisk "Porozmawiajmy" na stronie\n2️⃣ Umów się na bezpłatną konsultację\n3️⃣ Przeanalizujemy Twoją firmę i cele\n4️⃣ Przygotujemy strategię działania\n\nJesteś gotowy? Kliknij przycisk poniżej, aby przejść do kontaktu! 👇'
  },

  // === CHCĘ KONSULTACJĘ ===
  {
    keywords: ['konsultacja', 'spotkanie', 'rozmowa', 'umów', 'porozmawiać', 'bezpłatna', 'darmowa', 'doradztwo', 'chcę porozmawiać', 'chcemy się spotkać'],
    response: '📅 Bezpłatna konsultacja to pierwszy krok do wzrostu! Oferujemy:\n\n• Poznanie Twojej firmy i celów\n• Analizę obecnej sytuacji marketingowej\n• Wstępną strategię działania\n• Odpowiedzi na wszystkie pytania\n\nKliknij "Porozmawiajmy" na stronie, aby umówić się na konsultację! Odpowiadamy w ciągu 24h. 🤝'
  },

  // === CENY I PAKIETY ===
  {
    keywords: ['cena', 'koszt', 'ile', 'wycena', 'pakiet', 'subskrypcja', 'płatność', 'opłata', 'abonament', 'cennik', 'koszty', 'ile kosztuje'],
    response: '📊 Oto nasze pakiety marketingowe:\n\n🟢 START (3 900 zł/mies.)\n• Audyt marketingowy\n• Strategia na 3 miesiące\n• 1 kanał (Social/SEO/PPC)\n• Raporty miesięczne\n\n🟡 GROWTH (7 900 zł/mies.) - NAJPOPULARNIEJSZY!\n• Wszystko ze Start\n• 3 kanały marketingowe\n• Content marketing\n• Monitoring konkurencji\n\n🔴 PRO (14 900 zł/mies.)\n• Wszystko z Growth\n• Wszystkie kanały\n• Dedykowany account manager\n• 24/7 wsparcie\n\n👑 ENTERPRISE - wycena indywidualna\n\nKliknij "Wybierz pakiet" w sekcji subskrypcji na stronie!'
  },

  // === USŁUGI SZCZEGÓŁOWO ===
  {
    keywords: ['usługa', 'usługi', 'oferta', 'co robicie', 'czym się zajmujecie', 'działalność', 'co oferujecie'],
    response: '🏢 MKT Lab oferuje kompleksowe usługi marketingowe:\n\n🔍 SEO - pozycjonowanie i optymalizacja stron\n📱 Social Media - Facebook, Instagram, LinkedIn\n🚀 Performance Marketing - Google Ads, Facebook Ads\n🎨 Branding - budowanie silnych marek\n📊 Analityka - raporty i optymalizacja\n\nPomagamy firmom zwiększać sprzedaż, ROAS i rozpoznawalność! Który obszar Cię interesuje?'
  },

  // === SEO ===
  {
    keywords: ['seo', 'pozycjonowanie', 'google', 'wyniki', 'ranking', 'organic', 'wyszukiwarka', 'strona w google', 'top1', 'pierwsza strona'],
    response: '🔍 SEO to nasza specjalność! Zwiększamy widoczność w Google poprzez:\n\n✅ Audyt techniczny strony\n✅ Optymalizację treści (on-page)\n✅ Budowanie linków (off-page)\n✅ Content marketing\n✅ Monitoring i raportowanie\n\nNasi klienci osiągają wzrost ruchu organicznego nawet o +450%! Chcesz być na pierwszej stronie Google? To świetny wybór! 🏆'
  },

  // === SOCIAL MEDIA ===
  {
    keywords: ['social media', 'facebook', 'instagram', 'linkedin', 'tiktok', 'social', 'media społecznościowe', 'instagramie', 'fb', 'ig'],
    response: '📱 Prowadzimy Social Media, które angażują i sprzedają! Oferujemy:\n\n✅ Strategię contentową\n✅ Profesjonalne grafiki i wideo\n✅ Zarządzanie reklamami (Facebook Ads, Instagram Ads)\n✅ Budowanie społeczności\n✅ Raportowanie wyników\n\nOsiągamy średnio 3.2M zasięgu miesięcznie dla naszych klientów! Który kanał Cię interesuje?'
  },

  // === BRANDING ===
  {
    keywords: ['branding', 'marka', 'logo', 'identyfikacja', 'wizerunek', 'tożsamość', 'brand', 'rebranding', 'nowe logo'],
    response: '🎨 Branding to fundament sukcesu! Tworzymy:\n\n✅ Strategię marki (pozycjonowanie, wartości)\n✅ Identyfikację wizualną (logo, kolorystyka)\n✅ System identyfikacji (wizytówki, materiały)\n✅ Komunikację (tone of voice, storytelling)\n\n89% naszych klientów odnotowało wzrost rozpoznawalności! Zbudujmy markę, która zostanie zapamiętana! 💪'
  },

  // === PERFORMANCE MARKETING ===
  {
    keywords: ['performance', 'ppc', 'reklamy', 'google ads', 'facebook ads', 'kampania', 'google reklamy', 'płatne reklamy', 'ads', 'reklama'],
    response: '🚀 Performance Marketing to nasz konik! Zarządzamy kampaniami w:\n\n✅ Google Ads (Search, Display, YouTube)\n✅ Facebook Ads i Instagram Ads\n✅ LinkedIn Ads (B2B)\n✅ TikTok Ads\n\nŚredni ROAS naszych klientów to +420%! Optymalizujemy kampanie w czasie rzeczywistym. Chcesz zacząć? Napisz! 💪'
  },

  // === KONTAKT ===
  {
    keywords: ['kontakt', 'telefon', 'email', 'gdzie', 'biuro', 'adres', 'lokalizacja', 'znaleźć', 'dojazd', 'mapa', 'numer', 'komórka'],
    response: '📞 Dane kontaktowe MKT Lab:\n\n📧 mktlab.biuro@gmail.com\n📱 +48 883 758 310\n📍 Gdańsk, Śródmieście\n🌍 Działamy zdalnie w całej Polsce!\n\nMożesz też kliknąć "Porozmawiajmy" na stronie - odpowiadamy w 24h!'
  },

  // === GDZIE JESTEŚCIE ===
  {
    keywords: ['gdańsk', 'trójmiasto', 'pomorskie', 'gdynia', 'sopot', 'lokalnie', 'spotkać', 'biuro gdańsk', 'gdańsku'],
    response: '📍 Tak, działamy w Gdańsku i całym Trójmieście! Nasze biuro znajduje się w Śródmieściu Gdańska.\n\nOferujemy:\n✅ Spotkania osobiste w Gdańsku\n✅ Konsultacje online z całej Polski\n✅ Elastyczne godziny spotkań\n\nJesteśmy lokalnie, ale działamy globalnie! 🌍'
  },

  // === PROCES WSPÓŁPRACY ===
  {
    keywords: ['proces', 'współpraca', 'działanie', 'jak pracujemy', 'etapy', 'procedura', 'kroki', 'jak wygląda'],
    response: '📋 Nasz proces współpracy to 4 etapy:\n\n1️⃣ AUDYT - analiza rynku, konkurencji i potencjału\n2️⃣ STRATEGIA - mapa drogowa oparta na danych\n3️⃣ WDROŻENIE - realizacja kampanii z optymalizacją\n4️⃣ SKALOWANIE - ekspansja na kolejne kanały\n\nKażdy etap jest transparentny i oparty na danych! 💪'
  },

  // === CZAS REALIZACJI ===
  {
    keywords: ['czas', 'ile trwa', 'szybko', 'termin', 'realizacja', 'kiedy', 'długo', 'jak długo'],
    response: '⏱️ Ramy czasowe naszej współpracy:\n\n• Pierwsze efekty - 2-4 tygodnie\n• Pełna optymalizacja - 3 miesiące\n• Strategia długoterminowa - 6-12 miesięcy\n\nKażdy projekt jest inny - dostosowujemy tempo do Twoich potrzeb! 🚀'
  },

  // === DOŚWIADCZENIE ===
  {
    keywords: ['doświadczenie', 'klienci', 'referencje', 'case study', 'portfolio', 'realizacje', 'opinie', 'wyniki', 'sukcesy'],
    response: '🏆 Mamy udokumentowane sukcesy!\n\n📊 +312% ROI w e-commerce\n📈 +450% ruchu organicznego\n🎯 89% wzrost rozpoznawalności\n👥 96% retencji klientów\n\nPracowaliśmy z markami z e-commerce, fintech, nowych technologii i B2B. Chcesz poznać szczegóły? Skontaktuj się z nami!'
  },

  // === OPINIE ===
  {
    keywords: ['opinie', 'recenzje', 'co mówią', 'feedback', 'klienci o nas', 'mówią o was'],
    response: '⭐ Co mówią nasi klienci:\n\n"Profesjonalizm na najwyższym poziomie. Zespół MKT Lab działa jak przedłużenie naszego działu growth." - Marcin, CEO FinScale\n\n"Branding, który zbudowali, jest spójny, skalowalny i skuteczny." - Katarzyna, Head of Brand NexGen\n\n"ROI wzrósł o 312% w 6 miesięcy!" - Anna, CMO TechStyle\n\nChcesz dołączyć do nich? Czekamy na Ciebie! 😊'
  },

  // === UMOWA I WYPOWIEDZENIE ===
  {
    keywords: ['umowa', 'wypowiedzenie', 'zrezygnować', 'elastyczność', 'warunki', 'zobowiązanie', 'kontrakt', 'rozwiązanie'],
    response: '📄 Nasze umowy są przyjazne i elastyczne:\n\n✅ Miesięczny okres wypowiedzenia\n✅ Możliwość rezygnacji bez dodatkowych kosztów\n✅ Transparentne warunki - bez ukrytych opłat\n✅ Dostosowanie zakresu do Twoich potrzeb\n\nJesteśmy pewni jakości naszych usług, dlatego dajemy Ci pełną swobodę!'
  },

  // === BRANŻE ===
  {
    keywords: ['e-commerce', 'sklep', 'sprzedaż', 'produkty', 'online store', 'sklep internetowy'],
    response: '🛒 Specjalizujemy się w marketingu dla e-commerce!\n\n✅ Optymalizacja sklepów pod SEO\n✅ Kampanie Google Ads i Facebook Ads\n✅ Remarketing i automatyzacja\n✅ Analiza koszyka i konwersji\n\nPomogliśmy już wielu sklepom zwiększyć sprzedaż nawet o 300%!'
  },
  {
    keywords: ['b2b', 'usługi', 'firma', 'klient biznesowy', 'profesjonalne usługi', 'biznes'],
    response: '💼 Specjalizujemy się w marketingu B2B!\n\n✅ Strategie pozyskiwania leadów\n✅ LinkedIn Ads i content marketing\n✅ Kampanie kierowane do profesjonalistów\n✅ Pozycjonowanie pod frazy branżowe\n\nPomagamy firmom usługowym zdobywać wartościowych klientów!'
  },

  // === DZIĘKUJĘ ===
  {
    keywords: ['dziękuję', 'dzięki', 'thx', 'super', 'okej', 'ok', 'dzięki wielkie', 'dziękuje', 'dzieki', 'wielkie dzięki', 'dziękuję bardzo'],
    response: '❤️ To dla mnie przyjemność! Jeśli masz jeszcze jakieś pytania, śmiało pytaj - jestem tu po to, aby pomóc! 😊\n\nA może chcesz przejść do konkretów? Kliknij "Porozmawiajmy" na stronie i umów się na konsultację!'
  },

  // === POŻEGNANIA ===
  {
    keywords: ['pa', 'do widzenia', 'nara', 'na razie', 'bye', 'goodbye', 'do zobaczenia', 'do usłyszenia', 'narazie'],
    response: 'Do widzenia! 👋 Dziękuję za rozmowę.\n\n✅ Zapraszam na naszą stronę: mktlab.pl\n✅ Znajdziesz nas na Facebooku\n✅ Kliknij "Porozmawiajmy" jeśli chcesz przejść do konkretów\n\nMiłego dnia i do zobaczenia! 😊'
  },

  // === POMOC ===
  {
    keywords: ['pomoc', 'wsparcie', 'ratunku', 'potrzebuję', 'help', 'pomóż'],
    response: '🆘 Oczywiście, że pomogę! Jesteś w dobrym miejscu.\n\nOpowiedz mi więcej o swoim problemie lub pytaniu:\n• Interesuje Cię konkretna usługa?\n• Potrzebujesz wyceny?\n• Chcesz umówić konsultację?\n• A może szukasz porady marketingowej?\n\nJesteśmy tu dla Ciebie! 🤝'
  },

  // === NIE WIEM ===
  {
    keywords: ['nie wiem', 'nie mam pojęcia', 'zgubiony', 'nowy', 'początek', 'od czego zacząć', 'pierwszy raz'],
    response: '🤗 Spokojnie, każdy kiedyś zaczynał! Nie martw się, pomożemy Ci krok po kroku:\n\n1️⃣ Porozmawiajmy o Twoich celach\n2️⃣ Przeanalizujemy Twoją sytuację\n3️⃣ Zaproponujemy pierwsze działania\n\nWypełnij formularz na stronie lub skontaktuj się z nami - zaczniemy od podstaw! 📅'
  },

  // === CHCĘ WIEDZIEĆ WIĘCEJ ===
  {
    keywords: ['więcej', 'szczegóły', 'dokładniej', 'opowiedz', 'rozwiń', 'konkretnie', 'bardziej szczegółowo'],
    response: '📖 Chętnie opowiem więcej! O co konkretnie chcesz zapytać?\n\n✅ SEO i pozycjonowanie 🔍\n✅ Social Media 📱\n✅ Performance Marketing 🚀\n✅ Branding 🎨\n✅ Ceny pakietów 📊\n✅ Proces współpracy 📋\n\nWybierz temat, który Cię interesuje, a odpowiem szczegółowo!'
  },
];

// ============================================================
// 2. SZYBKIE PRZYCISKI
// ============================================================
const quickReplies = [
  { id: 1, label: '💰 Ceny i pakiety', value: 'Ile kosztują Wasze usługi?' },
  { id: 2, label: '📞 Konsultacja', value: 'Chcę umówić się na konsultację' },
  { id: 3, label: '🔍 SEO', value: 'Opowiedz mi o SEO' },
  { id: 4, label: '📱 Social Media', value: 'Jak prowadzicie Social Media?' },
  { id: 5, label: '🎨 Branding', value: 'Czy zajmujecie się brandingiem?' },
  { id: 6, label: '🚀 Performance', value: 'Opowiedz o Performance Marketingu' },
  { id: 7, label: '📋 Proces', value: 'Jak wygląda współpraca?' },
  { id: 8, label: '📞 Kontakt', value: 'Podaj dane kontaktowe' },
];

// ============================================================
// 3. KOMPONENT GŁÓWNY
// ============================================================
export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: '👋 Cześć! Jestem MKT Bot - Twoim asystentem marketingowym. Jak mogę Ci pomóc? Wybierz jedną z opcji poniżej lub napisz własne pytanie! 😊',
      isBot: true,
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [showGreeting, setShowGreeting] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // ============================================================
  // 4. BLOKADA SCROLLA STRONY (gdy kursor nad oknem czatu)
  // ============================================================
  useEffect(() => {
    if (!isOpen) return;

    const chatContainer = chatContainerRef.current;
    if (!chatContainer) return;

    const handleWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement;
      if (messagesContainerRef.current?.contains(target)) {
        e.stopPropagation();
        const container = messagesContainerRef.current;
        if (container) {
          const isAtTop = container.scrollTop === 0;
          const isAtBottom =
            container.scrollTop + container.clientHeight >=
            container.scrollHeight - 1;

          if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
            return;
          }

          e.preventDefault();
          container.scrollTop += e.deltaY;
        }
      }
    };

    chatContainer.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      chatContainer.removeEventListener('wheel', handleWheel);
    };
  }, [isOpen]);

  // ============================================================
  // 5. POWITANIE PO 3 SEKUNDACH
  // ============================================================
  useEffect(() => {
    const timer = setTimeout(() => setShowGreeting(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // ============================================================
  // 6. AUTO-SCROLL
  // ============================================================
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // ============================================================
  // 7. FOCUS NA INPUT
  // ============================================================
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  // ============================================================
  // 8. SILNIK ODPOWIEDZI
  // ============================================================
  const getBotResponse = (question: string): string => {
    const lowercaseQuestion = question.toLowerCase().trim();

    if (lowercaseQuestion.length < 3) {
      return '😊 Napisz coś więcej, abym mógł Ci pomóc! Możesz zapytać o:\n\n💰 Ceny i pakiety\n📞 Konsultację\n🔍 SEO\n📱 Social Media\n🎨 Branding\n🚀 Performance Marketing\n\nWybierz temat, który Cię interesuje!';
    }

    let bestMatch: { keywords: string[]; response: string } | null = null;
    let maxMatches = 0;

    for (const item of botKnowledge) {
      let matches = 0;
      for (const keyword of item.keywords) {
        if (lowercaseQuestion.includes(keyword.toLowerCase())) {
          matches++;
        }
      }
      if (matches > maxMatches) {
        maxMatches = matches;
        bestMatch = item;
      }
    }

    if (bestMatch && maxMatches > 0) {
      setShowQuickReplies(true);
      return bestMatch.response;
    }

    if (lowercaseQuestion.includes('?')) {
      setShowQuickReplies(true);
      return '🤔 Dobre pytanie! Nie jestem pewien, czy zrozumiałem w 100%.\n\nCzy możesz doprecyzować, który obszar Cię interesuje?\n• SEO i pozycjonowanie 🔍\n• Social Media 📱\n• Performance Marketing 🚀\n• Branding 🎨\n• Ceny pakietów 📊\n• Konsultacja 📅\n\nWybierz temat z przycisków poniżej!';
    }

    setShowQuickReplies(true);
    return '🤔 Interesujące pytanie! Przyznam, że nie do końca jestem pewien, o co dokładnie pytasz.\n\nZapytaj o konkretny obszar:\n• SEO 🔍\n• Social Media 📱\n• Performance Marketing 🚀\n• Branding 🎨\n• Ceny 📊\n• Konsultacja 📅\n\nLub skorzystaj z przycisków poniżej! 😊';
  };

  // ============================================================
  // 9. OBSŁUGA WIADOMOŚCI
  // ============================================================
  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue;
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      isBot: false,
    };
    setMessages((prev) => [...prev, userMessage]);
    const userQuestion = messageText;
    setInputValue('');
    setShowQuickReplies(false);
    setIsTyping(true);

    const delay = 800 + Math.random() * 1200;
    setTimeout(() => {
      const botReply = getBotResponse(userQuestion);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botReply,
        isBot: true,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
      setShowQuickReplies(true);
    }, delay);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setShowGreeting(false);
      setShowQuickReplies(true);
    }
  };

  // ============================================================
  // 10. WIDOK
  // ============================================================
  return (
    <>
      {/* Powiadomienie powitalne */}
      <AnimatePresence>
        {showGreeting && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed bottom-28 right-4 md:bottom-32 md:right-6 z-[60] max-w-[280px] md:max-w-sm bg-white rounded-2xl shadow-2xl p-4 border border-tertiary cursor-pointer hover:shadow-xl transition-shadow hidden lg:block"
            onClick={toggleChat}
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 animate-pulse">
                <Bot className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-dark flex items-center gap-1">
                  MKT Bot
                  <Sparkles className="w-3 h-3 text-accent" />
                </p>
                <p className="text-sm text-darkLight/70 leading-relaxed">
                  👋 Witaj! Kliknij, aby porozmawiać o marketingu, usługach i nie tylko!
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowGreeting(false);
                }}
                className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center hover:bg-tertiary transition-colors flex-shrink-0"
                aria-label="Zamknij powiadomienie"
              >
                <X className="w-3 h-3 text-darkLight/50" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Przycisk czatu */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-[50] w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent text-white shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center group"
        aria-label="Otwórz czat"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <div className="relative">
            <MessageCircle className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
          </div>
        )}
      </button>

      {/* Okno czatu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatContainerRef}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed bottom-24 right-4 md:bottom-32 md:right-8 z-[50] w-[calc(100vw-2rem)] md:w-[400px] max-h-[550px] md:max-h-[650px] bg-white rounded-2xl shadow-2xl border border-tertiary overflow-hidden flex flex-col"
          >
            {/* Nagłówek */}
            <div className="bg-gradient-to-r from-accent to-accent/90 text-white p-4 flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm md:text-base">MKT Bot</p>
                <p className="text-xs text-white/70 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block"></span>
                  Online • Ekspert od marketingu
                </p>
              </div>
              <button
                onClick={toggleChat}
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Zamknij czat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Wiadomości */}
            <div
              ref={messagesContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-3 bg-secondary/30 scroll-smooth"
              style={{ overscrollBehavior: 'contain' }}
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm whitespace-pre-line ${
                      message.isBot
                        ? 'bg-white text-dark shadow-sm'
                        : 'bg-accent text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white text-dark px-4 py-2.5 rounded-2xl shadow-sm">
                    <span className="inline-block animate-pulse">...</span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Szybkie przyciski */}
            {showQuickReplies && messages.length > 0 && (
              <div className="px-4 py-2 flex flex-wrap gap-2 border-t border-tertiary bg-white/50 flex-shrink-0 max-h-[120px] overflow-y-auto">
                {quickReplies.map((reply) => (
                  <button
                    key={reply.id}
                    onClick={() => handleSendMessage(reply.value)}
                    className="text-xs md:text-sm px-3 py-1.5 rounded-full bg-secondary hover:bg-accent hover:text-white transition-all duration-200 whitespace-nowrap border border-tertiary hover:border-accent"
                  >
                    {reply.label}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-tertiary bg-white flex gap-2 flex-shrink-0">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Zadaj pytanie..."
                className="flex-1 px-4 py-2.5 rounded-full border border-tertiary focus:border-accent focus:outline-none transition-colors text-sm"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                className="w-11 h-11 rounded-full bg-accent text-white flex items-center justify-center hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                aria-label="Wyślij wiadomość"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
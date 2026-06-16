'use client';

import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Zap, Target, ArrowRight, Calculator, Percent, DollarSign, PieChart } from 'lucide-react';

interface ROIResult {
  monthlyRevenue: number;
  yearlyRevenue: number;
  yearlyROI: number;
  monthlyROI: number;
  profit: number;
}

export default function ROICalculator() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  
  // Stan dla suwaków
  const [monthlyBudget, setMonthlyBudget] = useState(5000);
  const [expectedROI, setExpectedROI] = useState(320);
  const [campaignDuration, setCampaignDuration] = useState(6);
  const [isVisible, setIsVisible] = useState(false);

  // Obliczenia
  const calculateROI = (): ROIResult => {
    const monthlyRevenue = (monthlyBudget * expectedROI) / 100;
    const yearlyRevenue = monthlyRevenue * campaignDuration;
    const yearlyROI = ((yearlyRevenue - (monthlyBudget * campaignDuration)) / (monthlyBudget * campaignDuration)) * 100;
    const monthlyROI = ((monthlyRevenue - monthlyBudget) / monthlyBudget) * 100;
    const profit = yearlyRevenue - (monthlyBudget * campaignDuration);

    return {
      monthlyRevenue,
      yearlyRevenue,
      yearlyROI,
      monthlyROI,
      profit,
    };
  };

  const results = calculateROI();

  // Formatowanie kwot
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pl-PL', {
      style: 'currency',
      currency: 'PLN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Procent do szerokości paska
  const getBarWidth = (value: number, max: number = 1000) => {
    return Math.min((value / max) * 100, 100);
  };

  return (
    <section id="kalkulator" ref={sectionRef} className="py-24 md:py-32 bg-gradient-to-b from-white to-secondary">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="text-sm uppercase tracking-wider text-accent/70 font-semibold flex items-center justify-center gap-2">
            <Calculator className="w-4 h-4" />
            Kalkulator ROI
          </span>
          <h2 className="text-heading-mobile md:text-heading font-bold mt-4 text-dark">
            Sprawdź, ile zyskasz <span className="text-accent">inwestując w marketing</span>
          </h2>
          <p className="mt-4 text-darkLight/70 text-lg">
            Przesuń suwaki i zobacz potencjalny zwrot z inwestycji na podstawie naszych danych.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEWA STRONA – Suwaki */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-6 md:p-8"
          >
            <div className="space-y-8">
              {/* Budżet miesięczny */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-dark flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-accent" />
                    Budżet miesięczny
                  </label>
                  <span className="text-2xl font-bold text-accent">
                    {formatCurrency(monthlyBudget)}
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="50000"
                  step="500"
                  value={monthlyBudget}
                  onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                  className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-accent"
                  style={{
                    background: `linear-gradient(to right, #0F172A 0%, #0F172A ${(monthlyBudget / 50000) * 100}%, #E5E7EB ${(monthlyBudget / 50000) * 100}%, #E5E7EB 100%)`,
                  }}
                />
                <div className="flex justify-between text-xs text-darkLight/40 mt-1">
                  <span>1 000 zł</span>
                  <span>50 000 zł</span>
                </div>
              </div>

              {/* Oczekiwany ROAS */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-dark flex items-center gap-2">
                    <Percent className="w-4 h-4 text-accent" />
                    Oczekiwany ROAS (średni wynik)
                  </label>
                  <span className="text-2xl font-bold text-accent">
                    +{expectedROI}%
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="800"
                  step="10"
                  value={expectedROI}
                  onChange={(e) => setExpectedROI(Number(e.target.value))}
                  className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-accent"
                  style={{
                    background: `linear-gradient(to right, #0F172A 0%, #0F172A ${(expectedROI / 800) * 100}%, #E5E7EB ${(expectedROI / 800) * 100}%, #E5E7EB 100%)`,
                  }}
                />
                <div className="flex justify-between text-xs text-darkLight/40 mt-1">
                  <span>100%</span>
                  <span>800%</span>
                </div>
              </div>

              {/* Czas trwania */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-dark flex items-center gap-2">
                    <PieChart className="w-4 h-4 text-accent" />
                    Czas trwania kampanii
                  </label>
                  <span className="text-2xl font-bold text-accent">
                    {campaignDuration} mies.
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="24"
                  step="1"
                  value={campaignDuration}
                  onChange={(e) => setCampaignDuration(Number(e.target.value))}
                  className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-accent"
                  style={{
                    background: `linear-gradient(to right, #0F172A 0%, #0F172A ${(campaignDuration / 24) * 100}%, #E5E7EB ${(campaignDuration / 24) * 100}%, #E5E7EB 100%)`,
                  }}
                />
                <div className="flex justify-between text-xs text-darkLight/40 mt-1">
                  <span>1 miesiąc</span>
                  <span>24 miesiące</span>
                </div>
              </div>

              {/* Podsumowanie – małe */}
              <div className="bg-secondary/50 rounded-xl p-4 mt-4">
                <p className="text-sm text-darkLight/60">
                  * Kalkulacja oparta na średnim ROAS naszych klientów. Wyniki mogą się różnić w zależności od branży.
                </p>
              </div>
            </div>
          </motion.div>

          {/* PRAWA STRONA – Wyniki */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Główny wynik */}
            <div className="bg-gradient-to-br from-accent to-accent/90 text-white rounded-3xl shadow-xl p-6 md:p-8">
              <p className="text-sm opacity-80 mb-1">Potencjalny zysk z inwestycji</p>
              <p className="text-3xl md:text-4xl font-bold">
                {formatCurrency(results.profit)}
              </p>
              <p className="text-sm opacity-60 mt-1">
                przez {campaignDuration} miesięcy
              </p>
            </div>

            {/* Statystyki */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-tertiary">
                <p className="text-xs text-darkLight/50 uppercase tracking-wide">Przychód miesięczny</p>
                <p className="text-xl font-bold text-dark mt-1">
                  {formatCurrency(results.monthlyRevenue)}
                </p>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-tertiary">
                <p className="text-xs text-darkLight/50 uppercase tracking-wide">Przychód całkowity</p>
                <p className="text-xl font-bold text-dark mt-1">
                  {formatCurrency(results.yearlyRevenue)}
                </p>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-tertiary">
                <p className="text-xs text-darkLight/50 uppercase tracking-wide">ROI miesięczny</p>
                <p className="text-xl font-bold text-accent mt-1">
                  +{Math.round(results.monthlyROI)}%
                </p>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-tertiary">
                <p className="text-xs text-darkLight/50 uppercase tracking-wide">ROI całkowity</p>
                <p className="text-xl font-bold text-accent mt-1">
                  +{Math.round(results.yearlyROI)}%
                </p>
              </div>
            </div>

            {/* Pasek postępu */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-tertiary">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-darkLight/60">Inwestycja</span>
                <span className="text-darkLight/60">Przychód</span>
              </div>
              <div className="relative h-6 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ 
                    width: `${Math.min((results.monthlyRevenue / (monthlyBudget + results.monthlyRevenue)) * 100, 100)}%` 
                  }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent to-accent/70 rounded-full flex items-center justify-end pr-2"
                >
                  <span className="text-xs text-white font-medium">
                    {Math.round((results.monthlyRevenue / (monthlyBudget + results.monthlyRevenue)) * 100)}%
                  </span>
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-between px-3">
                  <span className="text-xs font-medium text-darkLight/60">
                    {formatCurrency(monthlyBudget)}
                  </span>
                  <span className="text-xs font-medium text-accent">
                    {formatCurrency(results.monthlyRevenue)}
                  </span>
                </div>
              </div>
            </div>

            {/* Przycisk CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-accent text-white py-4 rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              Porozmawiajmy o Twoim przypadku
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  TrendingUp, 
  Search, 
  Users, 
  PenTool, 
  BarChart3, 
  Rocket, 
} from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Wiktor D.',
    role: 'CEO & Founder',
    initials: 'WD',
    specialization: '',
    icon: Rocket,
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 2,
    name: 'Eryk Z.',
    role: 'Marketing Manager',
    initials: 'EZ',
    specialization: '',
    icon: TrendingUp,
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    id: 3,
    name: 'Krzysztof N.',
    role: 'Social Media Manager',
    initials: 'KN',
    specialization: '',
    icon: Search,
    color: 'from-purple-500 to-purple-600',
  },
];

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="team" ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm uppercase tracking-wider text-accent/70 font-semibold">
            Nasz zespół
          </span>
          <h2 className="text-heading-mobile md:text-heading font-bold mt-4 text-dark">
            Ludzie, którzy <span className="text-accent">tworzą wyniki</span>
          </h2>
          <p className="mt-4 text-darkLight/70 text-lg">
            Poznaj ekspertów, którzy stoją za sukcesami naszych klientów.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-secondary rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 comet-card"
            >
              <div className="flex flex-col items-center text-center">
                {/* Awatar z inicjałami */}
                <div className={`w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-3xl md:text-4xl font-bold mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {member.initials}
                </div>

                {/* Imię i stanowisko */}
                <h3 className="text-xl md:text-2xl font-bold text-dark">{member.name}</h3>
                <p className="text-accent text-sm font-semibold mt-1">{member.role}</p>

                {/* Specjalizacja – tylko ikonka */}
                <div className="mt-4 flex items-center gap-2 text-xs text-darkLight/50">
                  <member.icon className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-darkLight/60">{member.specialization}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stopka sekcji */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
        </motion.div>
      </div>
    </section>
  );
}
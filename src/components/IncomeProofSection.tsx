'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

function AnimatedCounter({ end, duration = 2, prefix = '', suffix = '' }: { end: number; duration?: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="counter-number">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

const incomeCards = [
  { name: 'Productivity App', amount: 12400, color: 'from-green-500 to-emerald-600' },
  { name: 'Fitness Tracker', amount: 8700, color: 'from-purple-500 to-pink-600' },
  { name: 'Recipe Manager', amount: 5200, color: 'from-cyan-500 to-blue-600' },
  { name: 'Budget Planner', amount: 15800, color: 'from-orange-500 to-red-600' },
];

export default function IncomeProofSection() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/10 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-light text-sm text-gray-300">
            {t.income.badge}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6"
        >
          <span className="text-white">{t.income.title} </span>
          <span className="gradient-text">{t.income.titleHighlight}</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-center text-lg max-w-2xl mx-auto mb-16"
        >
          {t.income.subtitle}
        </motion.p>

        {/* Main Income Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mb-16"
        >
          <div className="inline-block glass rounded-3xl p-8 sm:p-12">
            <div className="text-6xl sm:text-7xl md:text-8xl font-bold gradient-text-gold glow-text mb-4">
              $<AnimatedCounter end={127439} duration={2.5} />
            </div>
            <div className="text-2xl text-gray-400">{t.income.monthlyIncome}</div>
          </div>
        </motion.div>

        {/* Income Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {incomeCards.map((card, index) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="glass rounded-2xl p-6 tilt-card"
            >
              <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${card.color} text-white text-sm font-medium mb-4`}>
                {card.name}
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                $<AnimatedCounter end={card.amount} duration={2} />
              </div>
              <div className="text-gray-500 text-sm">{t.income.monthlyIncome}</div>
              
              {/* Mini Chart */}
              <div className="mt-4 flex items-end gap-1 h-12">
                {[...Array(7)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`flex-1 rounded-sm bg-gradient-to-t ${card.color}`}
                    initial={{ height: 0 }}
                    animate={isInView ? { height: `${30 + Math.random() * 70}%` } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 + i * 0.05 }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-8 sm:gap-16"
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-1">
              $<AnimatedCounter end={2847000} duration={2.5} />
            </div>
            <div className="text-gray-500">{t.income.totalEarned}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-1">
              {t.income.avgTimeValue}
            </div>
            <div className="text-gray-500">{t.income.avgTime}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-1">
              <AnimatedCounter end={78} suffix="%" />
            </div>
            <div className="text-gray-500">{t.income.successRate}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}




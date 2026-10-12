'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 47,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 47;
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4">
      <TimeBlock value={timeLeft.hours} label="SAAT" />
      <span className="text-2xl text-gray-500">:</span>
      <TimeBlock value={timeLeft.minutes} label="DAK" />
      <span className="text-2xl text-gray-500">:</span>
      <TimeBlock value={timeLeft.seconds} label="SAN" />
    </div>
  );
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <div className="w-16 sm:w-20 h-16 sm:h-20 glass rounded-xl flex items-center justify-center">
        <span className="text-2xl sm:text-3xl font-bold gradient-text">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs text-gray-500 mt-2 block">{label}</span>
    </div>
  );
}

export default function PricingSection() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="pricing" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-light text-sm text-gray-300">
            {t.pricing.badge}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
        >
          <span className="text-white">{t.pricing.title} </span>
          <span className="gradient-text">{t.pricing.titleHighlight}</span>
        </motion.h2>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <p className="text-center text-red-400 font-semibold mb-4">
            🔥 {t.pricing.urgency}
          </p>
          <CountdownTimer />
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative"
        >
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-[28px] blur opacity-30" />
          
          <div className="relative glass rounded-3xl p-8 sm:p-12 overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-0 right-0 px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold text-sm rounded-bl-2xl">
              ⭐ MOST POPULAR
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left - Price */}
              <div className="text-center lg:text-left">
                {/* Discount Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5, type: 'spring' }}
                  className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold mb-6"
                >
                  {t.pricing.discount}
                </motion.div>

                {/* Old Price */}
                <div className="mb-2">
                  <span className="text-3xl text-gray-500 line-through strike-through">
                    {t.pricing.oldPrice}
                  </span>
                </div>

                {/* New Price */}
                <div className="mb-4">
                  <span className="text-6xl sm:text-7xl font-bold gradient-text">
                    {t.pricing.newPrice}
                  </span>
                </div>

                <p className="text-gray-400 mb-8">{t.pricing.perMonth}</p>

                {/* CTA Button */}
                <motion.a
                  href="#"
                  className="inline-block w-full lg:w-auto px-12 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full text-white font-bold text-xl pulse-glow hover:scale-105 transition-transform"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t.pricing.cta}
                </motion.a>

                {/* Guarantee */}
                <div className="flex items-center justify-center lg:justify-start gap-2 mt-6 text-gray-400">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>{t.pricing.guarantee}</span>
                </div>

                {/* Spots Left */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mt-6 inline-block px-4 py-2 rounded-full bg-red-500/20 text-red-400 font-semibold"
                >
                  🔥 {t.pricing.spots}
                </motion.div>
              </div>

              {/* Right - Features */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Dahil Olanlar:</h3>
                <ul className="space-y-4">
                  {t.pricing.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.05, type: 'spring' }}
                        className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center"
                      >
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.span>
                      <span className="text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <p className="text-center text-gray-500 text-sm mb-4">Güvenli Ödeme</p>
              <div className="flex items-center justify-center gap-4 opacity-50">
                <div className="glass-light rounded px-4 py-2 text-sm">💳 Visa</div>
                <div className="glass-light rounded px-4 py-2 text-sm">💳 Mastercard</div>
                <div className="glass-light rounded px-4 py-2 text-sm">🏦 Havale</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}




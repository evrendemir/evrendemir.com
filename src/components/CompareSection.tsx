'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function CompareSection() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-red-900/10 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-green-900/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-light text-sm text-gray-300">
            {t.compare.badge}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="text-white">{t.compare.title} </span>
          <span className="gradient-text">{t.compare.titleHighlight}</span>
        </motion.h2>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Old Way */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 border border-red-500/20 relative overflow-hidden">
              {/* Strikethrough overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="w-full h-1 bg-red-500/50 origin-left"
                />
              </div>

              <h3 className="text-2xl font-bold text-red-400 mb-8">{t.compare.oldWay.title}</h3>
              
              <ul className="space-y-6">
                {t.compare.oldWay.items.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 text-gray-400"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    <span className="text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* New Way */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="gradient-border rounded-3xl p-8 relative overflow-hidden">
              {/* Glow effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-500/20 rounded-full blur-3xl" />
              
              <h3 className="text-2xl font-bold text-green-400 mb-8">{t.compare.newWay.title}</h3>
              
              <ul className="space-y-6">
                {t.compare.newWay.items.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-4 text-white"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1, type: 'spring' }}
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.span>
                    <span className="text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Highlight badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1, type: 'spring' }}
                className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-bold text-sm shadow-lg shadow-purple-500/25"
              >
                ⚡ AI-Powered
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* VS Badge */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6, type: 'spring' }}
            className="w-16 h-16 rounded-full glass flex items-center justify-center text-2xl font-bold gradient-text"
          >
            VS
          </motion.div>
        </div>
      </div>
    </section>
  );
}




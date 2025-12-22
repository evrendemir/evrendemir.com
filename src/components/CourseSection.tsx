'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function CourseSection() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeModule, setActiveModule] = useState<number | null>(0);

  const moduleIcons = ['🚀', '⚡', '📱', '🎨', '💾', '🌍', '💰', '📈'];

  return (
    <section id="course" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-light text-sm text-gray-300">
            {t.course.badge}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6"
        >
          <span className="text-white">{t.course.title} </span>
          <span className="gradient-text">{t.course.titleHighlight}</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-center text-lg max-w-2xl mx-auto mb-8"
        >
          {t.course.subtitle}
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 font-medium">
            🎬 {t.course.totalHours}
          </span>
          <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 font-medium">
            ♾️ {t.course.lifetime}
          </span>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {t.course.modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
            >
              <button
                onClick={() => setActiveModule(activeModule === index ? null : index)}
                className={`w-full text-left glass rounded-2xl p-6 transition-all duration-300 ${
                  activeModule === index ? 'ring-2 ring-purple-500/50' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-2xl">
                    {moduleIcons[index]}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-white">{module.title}</h3>
                      <span className="text-sm text-gray-500">{module.duration}</span>
                    </div>
                    <AnimatePresence>
                      {activeModule === index && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-400"
                        >
                          {module.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <motion.div
                    animate={{ rotate: activeModule === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 text-gray-500"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>

                {/* Progress bar */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                  className="mt-4 h-1 bg-gray-800 rounded-full overflow-hidden origin-left"
                >
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1.5, delay: 0.8 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 origin-left"
                    style={{ width: `${100 - index * 5}%` }}
                  />
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



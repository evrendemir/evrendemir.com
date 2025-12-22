'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import clsx from 'clsx';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.course, href: '#course' },
    { label: t.nav.testimonials, href: '#testimonials' },
    { label: t.nav.pricing, href: '#pricing' },
    { label: t.nav.faq, href: '#faq' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'glass py-3' : 'py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              className="text-xl sm:text-2xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              evrendemir.com
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Right side - Language + CTA */}
            <div className="flex items-center gap-4">
              {/* Language Switcher */}
              <div className="flex items-center gap-1 glass-light rounded-full p-1">
                <button
                  onClick={() => setLanguage('tr')}
                  className={clsx(
                    'px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300',
                    language === 'tr'
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  )}
                >
                  TR
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={clsx(
                    'px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300',
                    language === 'en'
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  )}
                >
                  EN
                </button>
              </div>

              {/* CTA Button */}
              <motion.a
                href="#pricing"
                className="hidden sm:block px-6 py-2.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-semibold text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.nav.cta}
              </motion.a>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  <span
                    className={clsx(
                      'w-full h-0.5 bg-white transition-all duration-300',
                      mobileMenuOpen && 'rotate-45 translate-y-2'
                    )}
                  />
                  <span
                    className={clsx(
                      'w-full h-0.5 bg-white transition-all duration-300',
                      mobileMenuOpen && 'opacity-0'
                    )}
                  />
                  <span
                    className={clsx(
                      'w-full h-0.5 bg-white transition-all duration-300',
                      mobileMenuOpen && '-rotate-45 -translate-y-2'
                    )}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 right-0 z-40 glass md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-lg text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#pricing"
                className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-semibold text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}



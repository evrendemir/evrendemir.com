'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: 'X' },
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'YouTube', href: '#', icon: '▶️' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
  ];

  return (
    <footer className="relative py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <motion.a
              href="#"
              className="text-2xl font-bold gradient-text inline-block mb-4"
              whileHover={{ scale: 1.05 }}
            >
              {t.footer.brand}
            </motion.a>
            <p className="text-gray-500 mb-6">{t.footer.tagline}</p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="w-10 h-10 rounded-full glass-light flex items-center justify-center hover:bg-purple-500/20 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{link.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-3">
              <li>
                <a href="#course" className="text-gray-500 hover:text-white transition-colors">
                  {t.nav.course}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-500 hover:text-white transition-colors">
                  {t.nav.testimonials}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-500 hover:text-white transition-colors">
                  {t.nav.pricing}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-500 hover:text-white transition-colors">
                  {t.nav.faq}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Yasal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  {t.footer.links.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  {t.footer.links.terms}
                </a>
              </li>
              <li>
                <a href="mailto:evren@evrendemir.com" className="text-gray-500 hover:text-white transition-colors">
                  {t.footer.links.contact}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-600 text-sm">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}




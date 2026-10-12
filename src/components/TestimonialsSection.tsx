'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  // Duplicate testimonials for marquee effect
  const testimonials = [...t.testimonials.items, ...t.testimonials.items];

  return (
    <section id="testimonials" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-light text-sm text-gray-300">
            {t.testimonials.badge}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center"
        >
          <span className="text-white">{t.testimonials.title} </span>
          <span className="gradient-text">{t.testimonials.titleHighlight}</span>
        </motion.h2>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

        {/* First Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-6 mb-6"
        >
          <div className="flex gap-6 animate-marquee">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </motion.div>

        {/* Second Row - Reverse */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-6"
        >
          <div className="flex gap-6 animate-marquee-reverse">
            {[...testimonials].reverse().map((testimonial, index) => (
              <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Inline styles for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
      `}</style>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: {
    name: string;
    role: string;
    image: string;
    text: string;
    income: string;
  };
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex-shrink-0 w-[350px] glass rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-2xl">
          {testimonial.image}
        </div>
        <div>
          <div className="font-bold text-white">{testimonial.name}</div>
          <div className="text-sm text-gray-500">{testimonial.role}</div>
        </div>
        <div className="ml-auto px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-bold">
          {testimonial.income}
        </div>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed">{testimonial.text}</p>
      <div className="flex gap-1 mt-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  );
}




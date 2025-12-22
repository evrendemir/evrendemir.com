'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import IncomeProofSection from '@/components/IncomeProofSection';
import CompareSection from '@/components/CompareSection';
import CourseSection from '@/components/CourseSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import StickyBanner from '@/components/StickyBanner';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <HeroSection />
      <IncomeProofSection />
      <CompareSection />
      <CourseSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
      <StickyBanner />
    </main>
  );
}

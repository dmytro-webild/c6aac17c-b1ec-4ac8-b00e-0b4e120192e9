import React from 'react';
import HeroSection from './HomePage/sections/Hero';
import WhyUsSection from './HomePage/sections/WhyUs';
import ServicesSection from './HomePage/sections/Services';
import WorkSection from './HomePage/sections/Work';
import AboutSection from './HomePage/sections/About';
import FaqSection from './HomePage/sections/Faq';
import QuoteSection from './HomePage/sections/Quote';

export default function HomePage(): React.JSX.Element {
  return (
    <>
      <HeroSection />

      <WhyUsSection />

      <ServicesSection />

      <WorkSection />

      <AboutSection />

      <FaqSection />

      <QuoteSection />
    </>
  );
}
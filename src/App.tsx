/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Facilities } from './components/Facilities.tsx';
import { Pricing } from './components/Pricing.tsx';
import { BmiCalculator } from './components/BmiCalculator.tsx';
import { RegistrationForm } from './components/RegistrationForm.tsx';
import { Contact } from './components/Contact.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingMobileBar } from './components/FloatingMobileBar.tsx';

export default function App() {
  const [selectedPlanId, setSelectedPlanId] = useState<string | undefined>(undefined);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (planId: string) => {
    setSelectedPlanId(planId);
    scrollToSection('register');
  };

  return (
    <div className="min-h-screen bg-[#080B0E] text-slate-100 flex flex-col font-sans pb-14 sm:pb-0">
      {/* 1. Header / Navbar */}
      <Navbar onNavigate={scrollToSection} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onJoinClick={() => scrollToSection('register')}
          onViewPlansClick={() => scrollToSection('plans')}
        />

        {/* 3. About Section */}
        <About onExplorePlans={() => scrollToSection('plans')} />

        {/* 4. Facilities & Equipment */}
        <Facilities />

        {/* 5. Membership Plans & Pricing */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* 6. BMI & Fitness Plan Tool */}
        <BmiCalculator onSelectRecommendedPlan={handleSelectPlan} />

        {/* 7. Membership Registration Form */}
        <RegistrationForm
          selectedPlanId={selectedPlanId}
          onClearSelectedPlan={() => setSelectedPlanId(undefined)}
        />

        {/* 8. Contact Us & Interactive Maps */}
        <Contact />

        {/* 9. FAQs */}
        <FaqSection />
      </main>

      {/* 10. Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* 11. Floating Mobile Quick Action Bar */}
      <FloatingMobileBar onJoinClick={() => scrollToSection('register')} />
    </div>
  );
}

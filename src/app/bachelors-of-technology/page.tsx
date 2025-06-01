import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import TopRecruiters from './TopRecruiters';
import ProgramsSection from './ProgramsSection';
import CutoffSection from './CutoffSection';
import CampusLifeSection from './CampusLifeSection';
import LifeAtDau from './LifeAtDau';
import TestimonialsSection from './TestimonialsSection';
import FAQSection from './FAQSection';
import ContactSection from './ContactSection';
import ApplicationForm from './ApplicationForm';
import Footer from './Footer';
import FloatingApplyButton from './FloatingApplyButton';

// Next.js Metadata export
export const metadata = {
  title: 'DAU B.Tech. Admissions 2025',
  description: 'Apply now to Dhirubhai Ambani University and transform your future.',
  openGraph: {
    title: 'DAU B.Tech. Admissions 2025',
    description: 'DAU. NAAC A+ accredited. Strong placements. Vibrant campus life.',
  },
};

const Page = () => {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <FloatingApplyButton />
      <Header branchName='B.Tech.'/>
      <Hero />
      <Features />
      <TopRecruiters />
      <ProgramsSection />
      <CutoffSection />
      <CampusLifeSection />
      <LifeAtDau />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <ApplicationForm />
      <Footer />
    </div>
  );
};

export default Page;

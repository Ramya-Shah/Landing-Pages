import React from 'react';
import Header from '../bachelors-of-technology/Header';
import Hero from './Hero';
import Features from '../bachelors-of-technology/Features';
import TopRecruiters from '../bachelors-of-technology/TopRecruiters';
import ProgramsSection from '../bachelors-of-technology/ProgramsSection';
import CutoffSection from '../bachelors-of-technology/CutoffSection';
import CampusLifeSection from '../bachelors-of-technology/CampusLifeSection';
import LifeAtDau from '../bachelors-of-technology/LifeAtDau';
import TestimonialsSection from '../bachelors-of-technology/TestimonialsSection';
import FAQSection from '../bachelors-of-technology/FAQSection';
import ContactSection from '../bachelors-of-technology/ContactSection';
import ApplicationForm from './ApplicationForm';
import Footer from '../bachelors-of-technology/Footer';
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
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContactFormContext } from '@/contexts/ContactFormContext';

const FloatingApplyButton = () => {
  const { setIsPopupOpen } = useContactFormContext();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isInHeroSection, setIsInHeroSection] = useState(true);

  // Handle scroll behavior - hide when in hero section or scrolling down
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if we're in hero section
      const heroSection = document.querySelector('[id$="hero-section"]') || 
                          document.querySelector('[class*="hero"]');
                          
      const isInHero = heroSection && 
        window.scrollY < (heroSection.getBoundingClientRect().top + window.scrollY + heroSection.getBoundingClientRect().height);
      
      setIsInHeroSection(isInHero);
      
      // Hide button in hero section or when scrolling down rapidly
      setIsVisible((!isInHero) && (currentScrollY <= lastScrollY || currentScrollY < 100));
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Open the contact form popup when clicked
  const handleClick = () => {
    setIsPopupOpen(true);
  };

  return (
    <AnimatePresence>
      {isVisible && !isInHeroSection && (
        <motion.button
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleClick}
          className="fixed bottom-8 right-8 bg-red-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-full shadow-lg flex items-center space-x-2 z-50"
          style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
        >
          <span>Apply Now</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default FloatingApplyButton;
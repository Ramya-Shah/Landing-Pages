"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContactFormContext } from "@/contexts/ContactFormContext";
import { usePathname } from "next/navigation";

const FloatingApplyButton: React.FC = () => {
  const pathname = usePathname();
  const { setIsPopupOpen } = useContactFormContext();
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  if (pathname === "/") return null;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleClick = () => {
    setIsPopupOpen(true);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleClick}
          className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-red-500 hover:bg-amber-600 text-black font-bold px-3 py-8 shadow-lg z-50"
          style={{ writingMode: "vertical-lr", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
        >
          Apply Now
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default FloatingApplyButton;

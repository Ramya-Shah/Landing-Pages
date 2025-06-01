// components/FloatingApplyButton.tsx
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useContactFormContext } from "@/contexts/ContactFormContext";

const FloatingApplyButton: React.FC = () => {
  const pathname = usePathname();
  const { setIsPopupOpen } = useContactFormContext();
  const [isVisible, setIsVisible] = useState(false);

  // 2) After mount, if we're not on ignored pages, wire up scroll listener
  useEffect(() => {
    if (
      pathname === "/" ||
      pathname === "/bachelors-of-technology"
    )
      return;

    const onScroll = () => {
      setIsVisible(window.scrollY > 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial check
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // 3) never render on the ignored pages
  if (
    pathname === "/" ||
    pathname === "/bachelors-of-technology"
  )
    return null;

  const handleClick = () => setIsPopupOpen(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          key="apply-btn"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleClick}
          className="fixed top-1/2 right-0 -translate-y-1/2 bg-red-500 hover:bg-amber-600 text-black font-bold px-3 py-8 shadow-lg z-50"
          style={{ writingMode: "vertical-lr", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
        >
          Apply Now
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default FloatingApplyButton;

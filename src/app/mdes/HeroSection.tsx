"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/legacy/image";
import { useContactFormContext } from "@/contexts/ContactFormContext";

const HeroSection = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { setIsPopupOpen } = useContactFormContext();
  
  function SpecializationsCard() {
  return (
    // Light gray “page” background with modest vertical padding
    <div className="bg-gray-50 py-8 px-4">
      {/* Center the card horizontally, but let it sit nearer the top */}
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl md:text-5xl font-bold text-blue-900 mb-6">
          Specializations
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Interaction &amp; User Experience Design (IUXD)</li>
          <li>Communication Design</li>
        </ul>
      </div>
    </div>
  );
}

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Close sidebar if open
      if (isSidebarOpen) {
        setSidebarOpen(false);
      }

      // Smooth scroll to the section
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleApplyNow = () => {
    // Open the popup contact form instead of scrolling
    setIsPopupOpen(true);
  };

  return (
    <section className="relative bg-white py-12 overflow-hidden">
      {/* Shift the background image down by 100px */}
      {/* <div className="absolute left-0 right-0 top-[300px] h-[600px]">
                <Image
                    src="/Frame 187.png"
                    alt="Background"
                    layout="fill"
                    className="object-cover"
                />
            </div> */}

      <div className="container mx-auto relative z-10 pb-4 md:mt-16">
        {/* Animated text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="py-16 text-center"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
            Master of Design (M.Des)
          </h1>
          <div className="py-8 px-4">
            {/* Center the card horizontally, but let it sit nearer the top */}
            <div className="max-w-md mx-auto bg-white rounded-2xl p-6">
              <h2 className="text-2xl md:text-5xl font-bold text-blue-700 mb-6">
                Specializations
              </h2>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>Interaction &amp; User Experience Design (IUXD)</li>
                <li>Communication Design</li>
              </ul>
            </div>
          </div>
          <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto text-center">
            The M.Des. at DAU is a two-year interdisciplinary program that
            blends technology,
            <br />
            design, and strategy. With specializations in Communication Design
            and
            <br />
            Intelligent User Experience Design (IUXD), it emphasizes hands-on
            projects,
            <br />
            human-centered thinking, and emerging fields like UI/UX, motion
            graphics, and
            <br />
            immersive media, preparing students for impactful careers in design
            and
            <br />
            innovation.
          </p>

          <div className="flex justify-center gap-4">
            <Button
              onClick={handleApplyNow}
              className="bg-red-500 hover:bg-amber-600 text-white px-8 py-6 text-lg rounded-md"
            >
              Apply Now
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg text-center mt-20"
        >
          <h2 className="text-2xl font-semibold mb-16">
            Programs offered under{" "}
            <span className="bg-gradient-to-r from-[#EF4023] to-[#FCBB4D] text-white px-4 py-1 rounded-lg">
              M.Des
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["Intelligent UX Design", "Communication Design"].map(
              (specialization, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="border-l-[1px] border-r-[1px] border-b-[1px] border-[#EF4023] p-4 rounded-lg shadow-md bg-gray-100 hover:bg-red-600 group"
                >
                  <span className="group-hover:text-white">
                    {specialization}
                  </span>
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* Animated image */}
        <div className="mt-[100px] md:mt-[000px]">
          <motion.div
            initial={{ opacity: 0.5, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="my-8 relative"
          >
            <Image
              src="/mdes.png"
              alt="Decorative Path"
              width={1000}
              height={800}
              layout="responsive"
              quality={90}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

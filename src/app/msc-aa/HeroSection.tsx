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
            src="/Background.png"
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
              M.Sc. in AA
              <br />
              (Agriculture Analytics)
            </h1>

            <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto text-center">
              The M.Sc. (Agriculture Analytics) at DAU prepares students to lead
              in data-driven
              <br />
              agriculture. With Python, machine learning, geospatial tools, and
              data forecasting, the
              <br />
              program enables smart, tech-driven solutions for modern farming
              challenges.
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

          {/* Animated image */}
          <div className="md:mt-[50px]">
            <motion.div
              initial={{ opacity: 0.5, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="my-8 relative w-full"
            >
              <Image
                src="/msc-aa.png"
                alt="Decorative Path"
                width={1000}
                height={800}
                layout="responsive"
                priority
              />
            </motion.div>
          </div>

          {/* Animated grid with statistic cards and logo */}
          <motion.div
            className="grid grid-cols-1 px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.1, duration: 0.5 },
              },
              hidden: { opacity: 0, y: 20 },
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 mt-10 max-w-6xl mx-auto w-full">
              {[
                {
                  title: "Centre of Excellence",
                  subtitle: "By Govt. of Gujarat",
                  bg: "bg-white",
                  text: "text-blue-900",
                },
                {
                  title: "5 Star Ranking",
                  subtitle: "By GSIRF",
                  bg: "bg-white",
                  text: "text-blue-900",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, transition: { duration: 0 } }}
                  className={`p-6 shadow-md w-full max-w-md rounded-md transition-transform duration-300 hover:shadow-lg bg-gray-100 hover:bg-red-600 group mx-auto`}
                >
                  <h3 className="text-3xl font-bold text-black group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="text-black group-hover:text-white">
                    {item.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

         
        </div>
      </section>
    );
};

export default HeroSection;

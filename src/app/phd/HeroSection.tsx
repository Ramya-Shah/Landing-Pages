"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
// import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/legacy/image";
import { useContactFormContext } from "@/contexts/ContactFormContext";
// import PopupWidget from "./temp";
// import CrmContact from "./ContactForm";

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
      <section className="relative bg-white md:py-12 overflow-hidden">
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
            initial={{ opacity: 0.5, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="py-16 text-center"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
              Doctor of Philosophy (Ph.D.)
            </h1>

            <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto text-center">
              Advance the frontiers of knowledge with DAU’s esteemed PhD program
              <br />
              Designed for visionary researchers, this rigorous, research-driven
              journey spans AI, data science
              <br />
              engineering, humanities, and beyond. With expert faculty
              mentorship and a dynamic, interdisciplinary
              <br />
              approach, graduates emerge as pioneers in academia and industry
              <br />
              Redefine the future—start your research odyssey today.
            </p>

            <div className="flex justify-center gap-4">
              <Button
                onClick={() => {
                  handleApplyNow();
                }}
                className="bg-red-500 hover:bg-amber-600 text-white px-8 py-6 text-lg rounded-md"
              >
                Apply Now
              </Button>
            </div>
          </motion.div>

          {/* Animated image */}
          <div className="mt-[000px]">
            <motion.div
                initial={{ opacity: 0.5, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="my-8"
            >
                <Image 
                    src="/phd.png" 
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
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {[
                {
                  title: "25 Years",
                  subtitle: "in Academics",
                  bg: "bg-white",
                  text: "text-blue-900",
                },
                {
                  title: "80 LPA",
                  subtitle: "Highest Placement",
                  bg: "bg-red-600",
                  text: "text-white",
                },
                {
                  title: "50 Acres",
                  subtitle: "of campus",
                  bg: "bg-white",
                  text: "text-blue-900",
                },
                {
                  title: "No. 1",
                  subtitle: "College for ICT",
                  bg: "bg-white",
                  text: "text-blue-900",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, transition: { duration: 0 } }}
                  className={`p-6 shadow-md rounded-md transition transform duration-300 hover:shadow-lg bg-gray-100 hover:bg-red-600 group`}
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

            {/* Animated DAU Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className=" hidden md:block"
            >
              <img src="/DAU_Logo.png" alt="DAU Logo" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
};

export default HeroSection;

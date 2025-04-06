"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import NetworkBackground from "./NetworkBackground";
import Link from "next/link";
import { motion } from "framer-motion";
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
      <section className="relative bg-white  overflow-hidden">
        {/* NetworkBackground remains unanimated */}
        {/* <div className="absolute inset-0" style={{ height: "500px" }}>
          <NetworkBackground />
        </div> */}

        <div className="container mx-auto relative z-10">
          {/* Animated text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="py-16 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Bachelors in Technology (B.Tech)
            </h1>

            <p className="text-lg text-black mb-10 max-w-3xl mx-auto">
              Unlock your potential with DAU’s B.Tech program.
              <br />
              Our unique culture fosters innovation, and students work on
              projects
              <br />
              aligned with industry standards, ensuring you gain hands-on
              <br />
              experience and skills that are in high demand.
              <br />
              Prepare for success in the rapidly evolving tech landscape.
            </p>

            <div className="flex justify-center gap-4">
              <Button
                onClick={handleApplyNow}
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg rounded-md"
              >
                Apply Now
              </Button>
            </div>
          </motion.div>
          <div className="bg-white p-6 rounded-lg  text-center mt-20">
            <h2 className="text-2xl font-semibold mb-16">
              Specializations offered under{" "}
              <span className="bg-gradient-to-r from-[#EF4023] to-[#FCBB4D] text-white px-4 py-1 rounded-lg">
                BTech ICT
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-l-[1px] border-r-[1px] border-b-[1px] border-[#EF4023] p-4 rounded-lg hover:shadow-lg shadow-md">
                Mathematics and Computing
              </div>
              <div className="border-l-[1px] border-r-[1px] border-b-[1px] border-[#EF4023] p-4 rounded-lg hover:shadow-lg shadow-md">
                Information and Communication Technology
              </div>
              <div className="border-l-[1px] border-r-[1px] border-b-[1px] border-[#EF4023] p-4 rounded-lg hover:shadow-lg shadow-md">
                Electronics and VLSI Design
              </div>
              <div className="border-l-[1px] border-r-[1px] border-b-[1px] border-[#EF4023] p-4 rounded-lg hover:shadow-lg shadow-md">
                ICT with Minor in Computational Science
              </div>
            </div>
          </div>
          {/* Animated image */}
          <motion.div
            initial={{ opacity: 0.5, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="my-8"
          >
            <img src="./Path.png" alt="Decorative Path" />
          </motion.div>

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
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
              className="hidden md:block"
            >
              <img src="/DAU_Logo.png" alt="DAU Logo" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
};

export default HeroSection;

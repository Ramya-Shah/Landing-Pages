"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
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
            The B.Tech program at DAU equips students with the skills and mindset to excel in 
            <br />
            technology-driven careers. With industry-focused coursework, hands-on projects, and 
            <br />
            exposure to emerging tools, graduates are prepared for diverse roles in engineering, 
            <br />
            design, and research. A vibrant campus culture, active student communities, and tech-
            <br />
            focused events foster collaboration, creativity, and personal growth.
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
              Specializations offered under{" "}
              <span className="bg-gradient-to-r from-[#EF4023] to-[#FCBB4D] text-white px-4 py-1 rounded-lg">
                BTech
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                    "Mathematics and Computing",
                    "Information and Communication Technology",
                    "Electronics and VLSI Design",
                    "ICT with Minor in Computational Science"
                ].map((specialization, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        className="border-l-[1px] border-r-[1px] border-b-[1px] border-[#EF4023] p-4 rounded-lg shadow-md bg-gray-100 hover:bg-red-600 group"
                    >
                        <span className="group-hover:text-white">{specialization}</span>
                    </motion.div>
                ))}
            </div>
          </motion.div>
          {/* Animated image */}
          <motion.div
            initial={{ opacity: 0.5, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="my-8"
          >
            <img src="./btech.png" alt="Decorative Path" />
          </motion.div>

      
                {/* Animated grid with statistic cards and logo */}
                <motion.div
                    className="grid grid-cols-1 gap-8"
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 w-full">
                        {[
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
                            {
                                title: "Center of Excellence",
                                subtitle: "By Govt. of Gujarat",
                                bg: "bg-white",
                                text: "text-blue-900",
                            },
                            {
                                title: "5 Star Ranking",
                                subtitle: "by GSIRF",
                                bg: "bg-red-600",
                                text: "text-white",
                            },
                        ].slice(2,4).map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, transition: { duration: 0 } }}
                                className={`p-6 shadow-md rounded-md transition transform duration-300 hover:shadow-lg bg-gray-100 hover:bg-red-600 group col-span-1 w-full`}
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
                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        className="hidden md:block"
                    >
                        <img src="/DAU_Logo.png" alt="DAU Logo" />
                    </motion.div> */}
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
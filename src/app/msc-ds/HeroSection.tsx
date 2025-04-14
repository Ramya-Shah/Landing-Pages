"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useContactFormContext } from "@/contexts/ContactFormContext";

const HeroSection = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const { setIsPopupOpen } = useContactFormContext();

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const navbarHeight = document.querySelector('header')?.offsetHeight || 0;
            const sectionTop = section.offsetTop - navbarHeight;
            window.scrollTo({
                top: sectionTop,
                behavior: "smooth",
            });
        }
    };
    const handleApplyNow = () => {
        // Open the popup contact form instead of scrolling
        setIsPopupOpen(true);
    };
    return (
        <section className="relative bg-white py-12 overflow-hidden">
            
            <div className="container mx-auto relative z-10">
                {/* Animated text content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="py-16 text-center"
                >
                    {/*<div className="bg-red-600 text-white py-2 px-4 mb-8 mx-auto max-w-md rounded-md">
            ADMISSION OPEN FROM 29TH MAY
          </div>*/}

                    <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                        M.Sc. in DS
                        <br />
                        (Data Science)
                    </h1>

                    <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
                    The M.Sc. (Data Science) at DAU offers a strong theoretical foundation in data science, enabling 
                    
                    students to develop analytical and problem-solving skills. With hands-on learning through projects 
                    
                    and assignments, the program equips graduates to apply tools like Python, machine learning, and 
                
                    forecasting in real-world scenarios across industries.
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
                <motion.div
                    initial={{ opacity: 0.5, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="my-8"
                >
                    <img src="./msc-ds.png" alt="Decorative Path" />
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
                                title: "6 LPA",
                                subtitle: "Median Salary",
                                bg: "bg-white",
                                text: "text-blue-900",
                            },
                            {
                                title: "36.44 LPA",
                                subtitle: "Highest Placement",
                                bg: "bg-red-600",
                                text: "text-white",
                            },
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

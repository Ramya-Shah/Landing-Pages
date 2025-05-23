"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useContactFormContext } from "@/contexts/ContactFormContext";
import Image from "next/image";

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

    const programs = [
        {
            name: "Information and Communication Technology (ICT)",
            applyUrl: "https://www.daiict.ac.in/undergraduate-admissions-all-india-category",
            brochureUrl: "/brochure/ICT.pdf",
        },
        {
            name: "ICT with Minor in Computational Science",
            applyUrl: "https://www.daiict.ac.in/undergraduate-admissions-all-india-category",
            brochureUrl: "/brochure/ICTCS.pdf",
        },
        {
            name: "Mathematics and Computing",
            applyUrl: "https://www.daiict.ac.in/undergraduate-admissions-all-india-category",
            brochureUrl: "/brochure/MnC.pdf",
        },
        {
            name: "Electronics and VLSI Design",
            applyUrl: "https://www.daiict.ac.in/undergraduate-admissions-all-india-category",
            brochureUrl: "/brochure/EVD.pdf",
        },
    ];

    return (
        <section className="py-0 relative bg-white overflow-hidden">
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
                    className="py-0 text-center"
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

                    {/* <div className="flex justify-center gap-4">
              <Button
                onClick={handleApplyNow}
                className="bg-red-500 hover:bg-amber-600 text-white px-8 py-6 text-lg rounded-md"
              >
                Apply Now
              </Button>
            </div> */}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-6 rounded-lg text-center mt-20"
                >
                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
                        {programs.map((prog) => (
                            <div
                                key={prog.name}
                                className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="text-center mb-4">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                                        {prog.name}
                                    </h3>
                                    <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-amber-500 mx-auto rounded-full"></div>
                                </div>

                                <div className="space-y-3">
                                    <Button
                                        onClick={() => window.open(prog.applyUrl, "_blank")}
                                        className="w-full bg-red-500 hover:bg-amber-600 text-white py-3 text-lg rounded-lg transition-colors duration-200 font-semibold"
                                    >
                                        Apply Now
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            const link = document.createElement('a');
                                            link.href = prog.brochureUrl;
                                            link.download = `${prog.name.replace(/\s+/g, '-')}-brochure.pdf`;
                                            document.body.appendChild(link);
                                            link.click();
                                            document.body.removeChild(link);
                                        }}
                                        className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 text-md rounded-lg transition-colors duration-200 border-2 border-blue-500 hover:border-blue-700"
                                    >
                                        📄 Download Brochure
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
                        {programs.map((prog) => (
                            <div
                                key={prog.name}
                                className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
                            >
                                <div className="text-center mb-4 flex-grow">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2 h-24 flex items-center justify-center">
                                        {prog.name}
                                    </h3>
                                    <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-amber-500 mx-auto rounded-full"></div>
                                </div>

                                <div className="space-y-3 mt-auto">
                                    <Button
                                        onClick={() => window.open(prog.applyUrl, "_blank")}
                                        className="w-full bg-red-500 hover:bg-amber-600 text-white py-3 text-lg rounded-lg transition-colors duration-200 font-semibold"
                                    >
                                        Apply Now
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            const link = document.createElement('a');
                                            link.href = prog.brochureUrl;
                                            link.download = `${prog.name.replace(/\s+/g, '-')}-brochure.pdf`;
                                            document.body.appendChild(link);
                                            link.click();
                                            document.body.removeChild(link);
                                        }}
                                        className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 text-md rounded-lg transition-colors duration-200 border-2 border-blue-500 hover:border-blue-700"
                                    >
                                        <span className="flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            Download Brochure
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.5, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="my-4"
                >
                    <Image
                        src="/btech.png"
                        alt="Decorative Path"
                        width={1200}
                        height={600}
                        priority
                        className="w-full h-auto"
                    />
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
                        ].slice(2, 4).map((item, index) => (
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
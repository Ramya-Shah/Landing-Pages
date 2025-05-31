"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useContactFormContext } from "@/contexts/ContactFormContext";
import Image from "next/image";
const programs = [
    {
        name: "M.Sc. in Data Science",
        applyUrl: "https://applyadmission.net/DA-IICT2025/",
        brochureUrl: "/brochure/mscds.pdf",
    },
];



const HeroSection = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const { setIsPopupOpen,isPopupOpen } = useContactFormContext();
    const [pendingDownload, setPendingDownload] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isDownloadAction, setIsDownloadAction] = useState(false);

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
        // Listen for form submission events
        useEffect(() => {
            // Create a custom event listener for form submission
            const handleFormSubmit = () => {
                setFormSubmitted(true);
            };
            
            window.addEventListener('contactFormSubmitted', handleFormSubmit);
            
            // Clean up event listener
            return () => {
                window.removeEventListener('contactFormSubmitted', handleFormSubmit);
            };
        }, []);
        
        // Check if form was submitted and download is pending
        useEffect(() => {
            if (formSubmitted && pendingDownload && !isPopupOpen) {
                // Form submitted and popup closed, process the download
                const link = document.createElement('a');
                link.href = pendingDownload.url;
                link.download = pendingDownload.filename;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                // Reset states
                setPendingDownload(null);
                setFormSubmitted(false);
            }
        }, [formSubmitted, pendingDownload, isPopupOpen]);
    const handleApplyNow = () => {
        // Open the popup contact form
        setIsDownloadAction(false); // Mark that this is not a download action
        localStorage.setItem('isApplyAction', 'true');
        localStorage.removeItem('isDownloadAction');
        setIsPopupOpen(true);
    };

    const handleDownloadBrochure = (prog) => {
        // Store the download info
        setPendingDownload({
            url: prog.brochureUrl,
            filename: `${prog.name.replace(/\s+/g, '-')}-brochure.pdf`
        });

        // Mark that this is a download action (not an apply action)
        setIsDownloadAction(false); // Mark that this is not a download action
        localStorage.setItem('isApplyAction', 'true');
        localStorage.removeItem('isDownloadAction');
        setIsPopupOpen(true);

        // Open the popup form
        setIsPopupOpen(true);
    };
    return (
        <section className="relative bg-white overflow-hidden">

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

                    {/* <div className="flex justify-center gap-4">
                        <Button
                            onClick={handleApplyNow}
                            className="bg-red-500 hover:bg-amber-600 text-white px-8 py-6 text-lg rounded-md"
                        >
                            Apply Now
                        </Button>
                    </div> */}
                    <div className="grid grid-cols-1 gap-6 max-w-xl mx-auto">
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
                                        onClick={handleApplyNow}
                                        className="w-full bg-red-500 hover:bg-amber-600 text-white py-3 text-lg rounded-lg transition-colors duration-200 font-semibold"
                                    >
                                        Apply Now
                                    </Button>
                                    <Button
                                        onClick={() => handleDownloadBrochure(prog)}
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

                {/* Animated image */}
                <motion.div
                    initial={{ opacity: 0.5, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="my-8"
                >
                    <Image
                        src="/msc-ds.png"
                        alt="Decorative Path"
                        width={800}
                        height={450}
                        quality={90}
                        priority
                        className="w-full"
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

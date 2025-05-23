"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useContactFormContext } from "@/contexts/ContactFormContext";
import Image from "next/image";

const HeroSection = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const { setIsPopupOpen, isPopupOpen } = useContactFormContext();
    const [pendingDownload, setPendingDownload] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isDownloadAction, setIsDownloadAction] = useState(false);

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
        setIsDownloadAction(true);
        localStorage.setItem('isDownloadAction', 'true');
        localStorage.removeItem('isApplyAction');
        
        // Open the popup form
        setIsPopupOpen(true);
    };

    const programs = [
        {
            name: "Information and Communication Technology (ICT)",
            applyUrl: "https://applyadmission.net/DA-IICT2025/",
            brochureUrl: "/brochure/ICT.pdf",
        },
        {
            name: "ICT with Minor in Computational Science",
            applyUrl: "https://applyadmission.net/DA-IICT2025/",
            brochureUrl: "/brochure/ICTCS.pdf",
        },
        {
            name: "Mathematics and Computing",
            applyUrl: "https://applyadmission.net/DA-IICT2025/",
            brochureUrl: "/brochure/MnC.pdf",
        },
        {
            name: "Electronics and VLSI Design",
            applyUrl: "https://applyadmission.net/DA-IICT2025/",
            brochureUrl: "/brochure/EVD.pdf",
        },
    ];

    return (
        <section className="py-0 relative bg-white overflow-hidden">
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
                        Bachelors in Technology (B.Tech.)
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
                </motion.div>
                <div className="flex flex-wrap items-center justify-center gap-2 px-2 py-1 text-center sm:text-left">
                    <span className="text-2xl md:text-4xl font-bold">
                        Programs offered under
                    </span>
                    <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-3 py-1 rounded-full text-xl sm:text-base md:text-5xl font-semibold shadow">
                        B.Tech.
                    </span>
                </div>
                <motion.div
                    initial={{ opacity: 0.5, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-2 rounded-lg text-center mt-20"
                >
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
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
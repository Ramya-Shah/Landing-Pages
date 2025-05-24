"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/legacy/image";
import { useContactFormContext } from "@/contexts/ContactFormContext";


const programs = [
    {
        name: "Intelligent User Exeprience Design (IUxD)",
        applyUrl: "https://applyadmission.net/DA-IICT2025/",
        brochureUrl: "/brochure/iuxd.pdf",
    },
    {
        name: "Communication Design (CD)",
        applyUrl: "https://applyadmission.net/DA-IICT2025/",
        brochureUrl: "/brochure/cd.pdf",
    },
];

const HeroSection = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const { setIsPopupOpen,isPopupOpen } = useContactFormContext();
    const [pendingDownload, setPendingDownload] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isDownloadAction, setIsDownloadAction] = useState(false);
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
                    initial={{ opacity: 0.5, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0 }}
                    transition={{ duration: 0.5 }}
                    className="py-16 text-center"
                >
                    <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
                        Master of Design (M.Des)
                    </h1>
                    <div className="py-8 px-4">
                        <div className="max-w-md mx-auto bg-white rounded-2xl p-6">
                            <h2 className="text-2xl md:text-5xl font-bold text-blue-700 mb-6">
                                Specializations
                            </h2>
                            <ul className="list-inside space-y-3 text-gray-700 text-2xl md:text-5xl font-bold mb-6">
                                <li className="relative text-orange-600 drop-shadow-[0_0_8px_rgba(255,165,0,0.8)] animate-pulse">
                                    Intelligent User Experience Design (IUxD)
                                    <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                                        NEW
                                    </span>
                                </li>
                                <li className="text-red-600 drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] animate-pulse">
                                    Communication Design (CD)
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto text-center">
                        The M.Des. at DAU is a two-year transdisciplinary program that
                        blends design,
                        <br />
                        technology and strategy. With specialization in Intelligent User
                        <br />
                        Experience design(IUxD) and Communication Design(CD), emphasizes
                        Design thinking, Human Centered Design, AI, Interaction design,
                        <br />
                        UI, UX research, Experience design, HCI, Motion graphics and
                        Immersive media,
                        <br />
                        preparing students for impactful careers in design and innovation.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 1, y: 20 }}
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
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

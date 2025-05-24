"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/legacy/image";
import { useContactFormContext } from "@/contexts/ContactFormContext";
const programs = [
    {
        name: "M.Sc. in Agriculture Analytics",
        applyUrl: "https://applyadmission.net/DA-IICT2025/",
        brochureUrl: "/brochure/mscaa.pdf",
    },
];
const HeroSection = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const { setIsPopupOpen, isPopupOpen } = useContactFormContext();
    const [pendingDownload, setPendingDownload] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isDownloadAction, setIsDownloadAction] = useState(false);
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
                    initial={{ opacity: 1, y: 20 }}
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

"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useContactFormContext } from "@/contexts/ContactFormContext";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import Image from "next/image";
import CountdownTimer from "./CountdownTimer";

interface Program {
  name: string;
  applyUrl: string;
  brochureUrl: string;
}

const HeroSection = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { setIsPopupOpen, isPopupOpen } = useContactFormContext();
  const [pendingDownload, setPendingDownload] = useState<{
    url: string;
    filename: string;
  } | null>(null);
  const [pendingDownloadAll, setPendingDownloadAll] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const programs: Program[] = [
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

  // Listen for form submission custom event
  useEffect(() => {
    const handleFormSubmit = () => setFormSubmitted(true);
    window.addEventListener("contactFormSubmitted", handleFormSubmit);
    return () =>
      window.removeEventListener("contactFormSubmitted", handleFormSubmit);
  }, []);

  // After form is submitted and popup closes, trigger download(s)
  useEffect(() => {
    if (!formSubmitted || isPopupOpen) return;

    if (pendingDownload) {
      // Single brochure download
      const a = document.createElement("a");
      a.href = pendingDownload.url;
      a.download = pendingDownload.filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else if (pendingDownloadAll) {
      // Bundle all into zip
      const zip = new JSZip();
      Promise.all(
        programs.map((prog) =>
          fetch(prog.brochureUrl)
            .then((res) => res.blob())
            .then((blob) =>
              zip.file(`${prog.name.replace(/\s+/g, "-")}.pdf`, blob)
            )
        )
      )
        .then(() => zip.generateAsync({ type: "blob" }))
        .then((content) => saveAs(content, "All-Brochures.zip"));
    }

    // Reset
    setFormSubmitted(false);
    setPendingDownload(null);
    setPendingDownloadAll(false);
  }, [
    formSubmitted,
    isPopupOpen,
    pendingDownload,
    pendingDownloadAll,
    programs,
  ]);

  const handleApplyNow = () => {
    setPendingDownload(null);
    setPendingDownloadAll(false);
    setIsPopupOpen(true);
  };

  const handleDownloadBrochure = (prog: Program) => {
    setPendingDownload({
      url: prog.brochureUrl,
      filename: `${prog.name.replace(/\s+/g, "-")}.pdf`,
    });
    setPendingDownloadAll(false);
    setIsPopupOpen(true);
  };

  const handleDownloadAll = () => {
    setPendingDownload(null);
    setPendingDownloadAll(true);
    setIsPopupOpen(true);
  };

  return (
    <section className="py-0 relative bg-white overflow-hidden">
      <div className="container mx-auto relative z-10">
        {/* Hero Intro */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Bachelors in Technology (B.Tech.)
            </h1>
            <p className="text-lg text-black mb-4 md:mb-0 max-w-3xl">
              The B.Tech program at DAU equips students with the skills and
              mindset to excel in technology-driven careers. With industry-
              focused coursework, hands-on projects, and exposure to emerging
              tools, graduates are prepared for diverse roles in engineering,
              design, and research. A vibrant campus culture, active student
              communities, and tech-focused events foster collaboration,
              creativity, and personal growth.
            </p>
          </motion.div>

          <div className="w-full md:w-auto">
            <CountdownTimer />
          </div>
        </div>

        {/* Programs Label */}
        <div className="flex flex-wrap items-center justify-center gap-2 px-2 py-1 text-center sm:text-left mb-6">
          <span className="text-2xl md:text-4xl font-bold">
            Programs offered under
          </span>
          <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-3 py-1 rounded-full text-xl sm:text-base md:text-5xl font-semibold shadow">
            B.Tech.
          </span>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
                  Download Brochure
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Download All Button */}
        <div className="text-center mb-16">
          <Button
            onClick={handleDownloadAll}
            className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold"
          >
            Download All Brochures
          </Button>
        </div>

        {/* Decorative Image */}
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
      </div>
    </section>
  );
};

export default HeroSection;

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  branchName: string;
}

const Header:  React.FC<HeaderProps> = ({ branchName }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Track scrolling to add shadow
  useEffect(() => {
    const handleScroll = () => {
      // Add shadow after scrolling down a bit
      if (window.scrollY > 20) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Close sidebar if open
      if (isSidebarOpen) {
        setSidebarOpen(false);
      }

      // Get the height of the navbar
      const navbarHeight = document.querySelector('header')?.offsetHeight || 0;

      // Calculate the scroll position
      const sectionTop = section.offsetTop - navbarHeight;

      // Smooth scroll to the adjusted position
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
    <div className="bg-blue-800 text-white text-center py-2">
        <p className="text-sm md:text-xl lg:text-3xl xl:text-5xl font-medium">
            <b>DA-IICT</b> renamed as <b>Dhirubhai Ambani University</b>
        </p>
    </div>
      <header className={`bg-white p-4 sticky top-0 z-40 transition-shadow duration-300 ${
        hasScrolled ? 'shadow-md' : ''
      }`}>
        <div className="container mx-auto flex justify-between items-center text-center">
          {/* Left side with logo and accreditation - modified for mobile */}
          <div className="flex items-center justify-between flex-1 md:flex-none">
            <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Image
                src="/DAU_Header1.png"
                alt="Dhirubhai Ambani University"
                width={120}
                height={100}
                className="mr-2"
              />
            </div>
            <div className="w-[1px] h-16 bg-blue-700 mx-4">
            </div>
            <div className="flex items-center">
              {/*<div className="flex flex-col items-center pr-3 border-r-2 border-blue-700">
                <h2 className="text-red-600 text-xl md:text-3xl italic">25</h2>
                <h3 className="text-xs md:text-sm">years</h3>
              </div>*/}
              <div className="pl-3 text-left">
                <div className="text-blue-900 text-xs md:text-sm">Accredited with</div>
                <div className="text-amber-500 font-bold text-base md:text-xl">NAAC A+</div>
                <div className="text-blue-900 text-xs md:text-sm">grade</div>
              </div>
            </div>
            {/* Mobile accreditation - visible on all screens but styled differently */}
            
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("hero-section")}
              className="text-black hover:text-blue-700 font-medium cursor-pointer"
            >
              {branchName}
            </button>
            <button
              onClick={() => scrollToSection("faculty-highlights")}
              className="text-black hover:text-blue-700 font-medium cursor-pointer">
              Faculty
            </button>

            
            <button
              onClick={() => scrollToSection("top-recruiters")}
              className="text-black hover:text-blue-700 font-medium cursor-pointer"
            >
              Careers
            </button>
            <button
              onClick={() => scrollToSection("life-at-dau")}
              className="text-black hover:text-blue-700 font-medium cursor-pointer"
            >
              Life at Dau
            </button>
            <button
              onClick={() => scrollToSection("about-us")}
              className="text-black hover:text-blue-700 font-medium cursor-pointer"
            >
              About DAU
            </button>
          </nav>
            {/* Right side image */}
            <div className="hidden md:block">
                <Image
                    src="/Frame 180.png"
                    alt="Header graphic"
                    width={120}
                    height={60}
                    className="object-contain"
                />
            </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleSidebar} aria-label="Toggle Menu">
              {isSidebarOpen ? (
                <X className="h-8 w-8 text-black" />
              ) : (
                <Menu className="h-8 w-8 text-black" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar positioned on the right */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-end">
          <button onClick={toggleSidebar} aria-label="Close Menu">
            <X className="h-8 w-8 text-black" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 px-4">
          <button
            onClick={() => scrollToSection("hero-section")}
            className="text-black hover:text-blue-700 font-medium text-left"
          >
            {branchName}
          </button>
          <button
              onClick={() => scrollToSection("faculty-highlights")}
              className="text-black hover:text-blue-700 font-medium text-left">
              Faculty
            </button>
          <button
            onClick={() => scrollToSection("top-recruiters")}
            className="text-black hover:text-blue-700 font-medium text-left"
          >
            Careers
          </button>
          <button
            onClick={() => scrollToSection("life-at-dau")}
            className="text-black hover:text-blue-700 font-medium text-left"
          >
            Life at DAU
          </button>
          <button
            onClick={() => scrollToSection("about-us")}
            className="text-black hover:text-blue-700 font-medium text-left"
          >
            About DAU
          </button>
        </nav>
      </div>

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Header;
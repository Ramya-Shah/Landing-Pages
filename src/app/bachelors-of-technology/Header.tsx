"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  branchName: string;
}

const navItems = [
  { id: "hero-section", label: "Admissions" },
  { id: "programs-section", label: "Programs" },
  { id: "placements-section", label: "Placements" },
  { id: "cutoff-section", label: "Eligibility & Rank Highlights" },
  { id: "campus-life-section", label: "Campus Life" },
  { id: "alumni-section", label: "Alumni" },
  { id: "faq-section", label: "FAQ" },
];

const Header: React.FC<HeaderProps> = ({ branchName }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => setSidebarOpen(open => !open);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    if (isSidebarOpen) setSidebarOpen(false);
    const navbarHeight = document.querySelector("header")?.clientHeight || 0;
    const top = section.offsetTop - navbarHeight;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      {/* Top Info Strip (always visible) */}
      <div className="bg-[#273586] text-white py-4">
        <div className="text-center">
          <span className="text-xl font-semibold">
            DA-IICT renamed as Dhirubhai Ambani University
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`bg-white sticky top-0 z-40 transition-all duration-300 ${
          hasScrolled
            ? "py-4 shadow-md"
            : "py-4 shadow-[0_2px_8px_0_rgba(0,0,0,0.06)]"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center max-w-[1600px] px-6">
          {/* Left: Logo & Accreditation (hidden on scroll) */}
          {!hasScrolled && (
            <div className="flex items-center flex-1 md:flex-none">
              <div
                className="cursor-pointer md:ml-6 flex-shrink-0 w-[120px] h-[100px]"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <img
                  src="/DAU_Header1.png"
                  alt="Dhirubhai Ambani University"
                  width={120}
                  height={100}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-px h-16 bg-blue-700 mx-4" />
              <div>
                <div className="text-blue-900 text-xs md:text-sm">
                  Accredited with
                </div>
                <div className="text-amber-500 font-bold text-base md:text-xl">
                  NAAC A+
                </div>
                <div className="text-blue-900 text-xs md:text-sm">grade</div>
              </div>
            </div>
          )}

          {/* Center: Navigation Buttons */}
          <nav className="flex-1 flex justify-center">
            <div
              className={`hidden md:flex space-x-8 text-lg ${
                hasScrolled ? "text-lg" : "text-base"
              }`} // 1.4x font size on scroll
            >
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-black hover:text-blue-700 font-medium transition-all duration-200 ${
                    hasScrolled ? "text-xl" : ""
                  }`}
                  style={hasScrolled ? { fontSize: "1.4em" } : {}}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Right: Graphic (hidden on scroll) */}
          {!hasScrolled && (
            <div className="hidden md:block mr-6"> {/* <-- Added mr-6 to shift right image left */}
              <img
                src="/Frame 180.png"
                alt="Header graphic"
                width={120}
                height={60}
              />
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleSidebar} aria-label="Toggle menu">
              {isSidebarOpen ? (
                <X className="h-8 w-8 text-black" />
              ) : (
                <Menu className="h-8 w-8 text-black" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-end">
          <button onClick={toggleSidebar} aria-label="Close menu">
            <X className="h-8 w-8 text-black" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 px-4">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-black hover:text-blue-700 font-medium text-left"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Header;

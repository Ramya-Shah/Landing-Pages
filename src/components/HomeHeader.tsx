// components/HomeHeader.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import { Menu, X, ChevronDown } from "lucide-react";

const branches = [
  { label: "B.Tech.", href: "/btech" },
  { label: "M.Tech.", href: "/mtech" },
  {
    label: "M.Sc.",
    children: [
      { label: "M.Sc. Agriculture Analytics", href: "/msc-aa" },
      { label: "M.Sc. Data Science", href: "/msc-ds" },
      { label: "M.Sc. Information Technology", href: "/msc-it" },
    ],
  },
  {
    label: "M.Des.", href: "/mdes",
  },
  { label: "Ph.D.", href: "/phd" },
];

const HomeHeader: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      <header className="bg-white p-4 sticky top-0 z-40 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo + accreditation (unchanged) */}
          <div className="flex items-center flex-1 md:flex-none">
            <div
              className="flex flex-col cursor-pointer"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
            >
              <Image
                src="/DAU_Header1.png"
                alt="Dhirubhai Ambani University"
                width={120}
                height={100}
              />
            </div>
            <div className="w-[1px] h-16 bg-blue-700 mx-4" />
            <div className="pl-3 text-left">
              <div className="text-blue-900 text-xs md:text-sm">
                Accredited with
              </div>
              <div className="text-amber-500 font-bold text-base md:text-xl">
                NAAC A+
              </div>
              <div className="text-blue-900 text-xs md:text-sm">grade</div>
            </div>
          </div>

          {/* Desktop nav with controlled hover state */}
          <nav className="hidden md:flex items-center space-x-8">
            {branches.map((b) =>
              b.children ? (
                <div
                  key={b.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(b.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center text-lg font-medium text-black hover:text-blue-700">
                    {b.label}
                    <ChevronDown className="w-4 h-4 ml-1 text-gray-600" />
                  </button>

                  <ul
                    className={
                      `absolute top-full left-0 w-60
                       bg-white border border-gray-200 rounded-md shadow-md
                       transition-opacity duration-200 ease-in-out
                       z-20 ` +
                      (openDropdown === b.label
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none")
                    }
                  >
                    {b.children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  key={b.href}
                  href={b.href}
                  className="text-lg font-medium text-black hover:text-blue-700"
                >
                  {b.label}
                </Link>
              )
            )}
          </nav>

          {/* Right‐side graphic & mobile toggle (unchanged) */}
          <div className="hidden md:block">
            <Image
              src="/Frame 180.png"
              alt="Header graphic"
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setSidebarOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {sidebarOpen ? (
                <X className="h-8 w-8 text-black" />
              ) : (
                <Menu className="h-8 w-8 text-black" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sidebar (unchanged) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-end">
          <button onClick={() => setSidebarOpen(false)} aria-label="Close">
            <X className="h-8 w-8 text-black" />
          </button>
        </div>
        <nav className="px-4 space-y-4">
          {branches.map((b) => (
            <div key={b.label}>
              {!b.children ? (
                <Link
                  href={b.href}
                  className="block text-black font-medium py-1"
                  onClick={() => setSidebarOpen(false)}
                >
                  {b.label}
                </Link>
              ) : (
                <>
                  <div className="text-black font-medium py-1">
                    {b.label}
                  </div>
                  <ul className="pl-4 space-y-2">
                    {b.children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          className="block text-gray-700 hover:text-blue-700"
                          onClick={() => setSidebarOpen(false)}
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default HomeHeader;

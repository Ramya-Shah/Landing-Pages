// components/ProgramCards.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Bachelors in Technology (B.Tech)",
    href: "/btech",
  },
  {
    title: "M.Tech. in ICT (Information and Communication Technology)",
    href: "/mtech",
  },
  {
    title: "M.Sc. in AA (Agriculture Analytics)",
    href: "/msc-aa",
  },
  {
    title: "M.Sc. in DS (Data Science)",
    href: "/msc-ds",
  },
  {
    title: "M.Sc. in IT (Information Technology)",
    href: "/msc-it",
  },
  {
    title: "Master of Design (M.Des)",
    href: "/mdes",
  },
  {
    title: "Doctor of Philosophy (Ph.D.)",
    href: "/phd",
  },
];

const ProgramCards: React.FC = () => (
  <div className="flex flex-col items-center space-y-4 px-4 py-8">
    {programs.map((program, i) => (
      <Link
        key={program.href}
        href={program.href}
        className="w-full max-w-md block"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="rounded-lg bg-gradient-to-r from-orange-400 to-red-400 p-px cursor-pointer"
        >
          <div className="bg-white rounded-lg py-4 px-6 text-center">
            <span className="block text-lg font-semibold text-gray-900">
              {program.title}
            </span>
          </div>
        </motion.div>
      </Link>
    ))}
  </div>
);

export default ProgramCards;

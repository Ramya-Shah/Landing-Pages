// components/ProgramNav.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProgramNavProps {
  bgText: string;
}

const programs = ["B.Tech", "M.Tech", "M.Sc.", "M.Des", "Ph.D."];

const ProgramNav: React.FC<ProgramNavProps> = ({ bgText }) => {
  return (
    <div className="relative overflow-hidden py-16 px-4">
      {/* Background text */}
      <span
        className="
          pointer-events-none select-none
          absolute inset-0
          flex items-center justify-center
          text-[10rem] md:text-[10rem]
          font-extrabold uppercase
          text-gray-100 leading-none
          whitespace-nowrap
        "
      >
        {bgText}
      </span>

      {/* Animated nav container */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-wrap justify-center items-center gap-4"
      >
        {programs.map((prog, idx) => (
          <React.Fragment key={prog}>
            <span className="text-3xl md:text-5xl font-bold text-black align-middle">
              {prog}
            </span>
            {idx < programs.length - 1 && (
              <span className="text-3xl md:text-5xl font-bold text-[#FF483C] align-middle">
                *
              </span>
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default ProgramNav;

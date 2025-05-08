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
      {/* Background text (wrapped on mobile, smaller size) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <span
          className="
            block w-full h-full
            flex items-center justify-center
            text-[4.25rem] sm:text-[8rem] md:text-[12rem]
            font-anton uppercase
            text-gray-200 leading-tight
            whitespace-normal text-center
            md:scale-y-100 md:scale-x-100
            scale-y-[140%] scale-x-[130%]
          "
          
        >
          {bgText}
        </span>
      </div>

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

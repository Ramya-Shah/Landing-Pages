"use client";

import React from "react";
import { motion } from "framer-motion";

const programs = [
  "Bachelors in Technology (B.Tech)",
  "M.Tech. in ICT (Information and Communication Technology)",
  "M.Sc. in AA (Agriculture Analytics)",
  "M.Sc. in DS (Data Science)",
  "M.Sc. in IT (Information Technology)",
  "Master of Design (M.Des)",
  "Doctor of Philosophy (Ph.D.)",
];

const ProgramCards: React.FC = () => (
  <div className="flex flex-col items-center space-y-4 px-4 py-8">
    {programs.map((title, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: i * 0.1 }}
        className="w-full max-w-md rounded-lg bg-gradient-to-r from-orange-400 to-red-400 p-px"
      >
        <div className="bg-white rounded-lg py-4 px-6 text-center">
          <span className="block text-lg font-semibold text-gray-900">
            {title}
          </span>
        </div>
      </motion.div>
    ))}
  </div>
);

export default ProgramCards;

"use client";

import React from "react";
import { motion } from "framer-motion";

const leftAwards = [
  {
    title: "Padma Shri",
    subtitle: "by Govt. of India",
  },
  {
    title: "ISCA & APSIPA Distinguished Lecturer",
    subtitle:
      "by Indian Science Congress Association & Asia-Pacific Signal and Information Processing Association",
  },
  {
    title: "NASI Swarnajayanti Purashkar",
    subtitle: "by National Academy of Sciences, India",
  },
  {
    title: "Oscar Buneman Award",
    subtitle: "by International Conference on Numerical Simulation of Plasmas (ICNSP)",
  },
  {
    title: "Dr. Vikram Sarabhai Award",
    subtitle: "by Government of Gujarat",
  },
];

const rightAwards = [
  {
    title: "ISRO Team Excellence Award",
    subtitle: "by Indian Space Research Organisation (ISRO)",
  },
  {
    title: "Sahitya Academy Award",
    subtitle: "by Sahitya Akademi, Govt. of India",
  },
  {
    title: "International Linguapax Award",
    subtitle: "by Linguapax Institute",
  },
  {
    title: "Bihar Gaurav Samman",
    subtitle: "by Government of Bihar",
  },
  {
    title: "Gujarat Sahitya Academy Award",
    subtitle: "by Gujarat Sahitya Akademi, Govt. of Gujarat",
  },
];

export default function NotableAwards () {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
          Notable Awards received by Faculties of DAU
        </h2>

        {/* Two-column layout on desktop; single column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {leftAwards.map((award, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className="p-4 shadow-sm rounded-md transition transform duration-300 hover:shadow-md bg-gray-100 hover:bg-red-600 group flex flex-col justify-center h-full"
              >
                <h3 className="text-2xl font-bold text-black group-hover:text-white mb-1">
                  {award.title}
                </h3>
                <p className="text-xl text-black group-hover:text-white">
                  {award.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {rightAwards.map((award, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className="p-4 shadow-sm rounded-md transition transform duration-300 hover:shadow-md bg-gray-100 hover:bg-red-600 group flex flex-col justify-center h-full"
              >
                <h3 className="text-2xl font-bold text-black group-hover:text-white mb-1">
                  {award.title}
                </h3>
                <p className="text-xl text-black group-hover:text-white">
                  {award.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


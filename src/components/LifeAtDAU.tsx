"use client";

import React from "react";
import { motion } from "framer-motion";

const campusImages = [
  { src: "/1.jpg", alt: "Campus garden path" },
  { src: "/2.jpg", alt: "Campus walkway" },
  { src: "/3.jpg", alt: "Campus buildings" },
  { src: "/4.jpg", alt: "Campus buildings" },
  { src: "/5.jpg", alt: "Campus buildings" },
  { src: "/6.jpg", alt: "Campus buildings" },
  // Add more if available
];

const LifeAtDAU = () => {
  // Duplicate images for seamless loop
  const duplicatedImages = [...campusImages, ...campusImages];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-4">
          Life at DAU
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Experience vibrant campus life at DAU—lush 50-acre greenery, dynamic
          clubs, fests, and innovation.
        </p>

        <div className="relative">
          <motion.div
            className="flex gap-6 w-max"
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
          >
            {duplicatedImages.map((img, index) => (
              <div
                key={index}
                className="w-[300px] h-[320px] rounded-xl overflow-hidden bg-gray-200 flex-shrink-0 shadow-md"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LifeAtDAU;

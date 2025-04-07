"use client";

import React from "react";
import { motion } from "framer-motion";

const campusImages = [
  { src: "/7.jpg", alt: "Campus buildings" },
  { src: "/8.jpg", alt: "Campus buildings" },
  { src: "/9.jpg", alt: "Campus buildings" },
  { src: "/10.jpeg", alt: "Campus buildings" },
  { src: "/11.jpg", alt: "Campus buildings" },
  { src: "/12.jpg", alt: "Campus buildings" },
  { src: "/13.JPG", alt: "Campus buildings" },
  { src: "/14.jpg", alt: "Campus buildings" },
  { src: "/15.JPG", alt: "Campus buildings" },
  { src: "/16.jpg", alt: "Campus buildings" },
  { src: "/17.jpg", alt: "Campus buildings" },
  { src: "/18.jpg", alt: "Campus buildings" },
  { src: "/19.png", alt: "Campus buildings" },
  { src: "/20.jpg", alt: "Campus buildings" },
  { src: "/21.jpg", alt: "Campus buildings" },
  { src: "/22.jpg", alt: "Campus buildings" },
  { src: "/23.JPG", alt: "Campus buildings" },
  { src: "/24.jpg", alt: "Campus buildings" },
  { src: "/25.jpg", alt: "Campus buildings" },
  
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

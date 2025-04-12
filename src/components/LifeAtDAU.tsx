"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/legacy/image";
import { motion, useAnimation } from "framer-motion";

const campusImages = [
  { src: "/7.jpg", alt: "Campus buildings" },
  { src: "/8.jpg", alt: "Campus buildings" },
  { src: "/10.jpeg", alt: "Campus buildings" },
  { src: "/12.jpg", alt: "Campus buildings" },
  { src: "/14.jpg", alt: "Campus buildings" },
  { src: "/16.jpg", alt: "Campus buildings" },
  { src: "/17.JPG", alt: "Campus buildings" },
  { src: "/26.png", alt: "Campus buildings" },
  { src: "/18.jpg", alt: "Campus buildings" },
  { src: "/19.png", alt: "Campus buildings" },
  { src: "/20.jpg", alt: "Campus buildings" },
  { src: "/24.jpg", alt: "Campus buildings" },
  /*}
  { src: "/15.JPG", alt: "Campus buildings" },
  { src: "/16.jpg", alt: "Campus buildings" },
  { src: "/17.jpg", alt: "Campus buildings" },
  { src: "/18.jpg", alt: "Campus buildings" },
  { src: "/21.jpg", alt: "Campus buildings" },
  { src: "/22.jpg", alt: "Campus buildings" },
  { src: "/23.JPG", alt: "Campus buildings" },
  { src: "/24.jpg", alt: "Campus buildings" },
  { src: "/25.jpg", alt: "Campus buildings" },
  */
  // Add more if available
];

const LifeAtDAU = () => {
  const [isClient, setIsClient] = useState(false);
  const controls = useAnimation();

  // Only run animations on client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  const startAnimation = useCallback(async () => {
    await controls.start({
      x: "-50%",
      transition: {
        duration: 40,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  useEffect(() => {
    if (isClient) {
      startAnimation();
    }
  }, [isClient, startAnimation]);

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
            animate={controls}
            style={{
              willChange: "transform", // Optimize for animations
            }}
          >
            {/* First set of images */}
            {campusImages.map((img, index) => (
              <div
                key={`first-${index}`}
                className="w-[300px] h-[320px] rounded-xl overflow-hidden bg-gray-200 flex-shrink-0 shadow-md"
                style={{
                  contain: "paint layout", // Optimize paint and layout
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={300}
                  height={320}
                  className="w-full h-full object-cover"
                  loading={index < 4 ? "eager" : "lazy"}
                  quality={75}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {campusImages.map((img, index) => (
              <div
                key={`second-${index}`}
                className="w-[300px] h-[320px] rounded-xl overflow-hidden bg-gray-200 flex-shrink-0 shadow-md"
                style={{
                  contain: "paint layout", // Optimize paint and layout
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={300}
                  height={320}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  quality={75}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default React.memo(LifeAtDAU);

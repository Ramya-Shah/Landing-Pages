"use client";

import React, { useEffect } from "react";
import Image from "next/legacy/image";
import { motion, useAnimation } from "framer-motion";
import { Card } from "@/components/ui/card";

const testimonials = [
  { name: "Mr. Pavitar Singh",     position: "Co-Founder & CEO",        company: "UnifyApps"      },
  { name: "Bhavesh Manglani",       position: "Co-Founder",              company: "Delhivery"      },
  { name: "Jainam Mehta",           position: "Founder",                 company: "UrbanNaps"      },
  { name: "Indira Negi",            position: "Founder",                 company: "Enginiosity"     },
  { name: "Prachi Kothari",         position: "Vice President",          company: "GoldmanSachs"   },
  { name: "Valay Vaidya",           position: "IPS Officer",             company: "GujaratPolice"  },
  { name: "Shraddha Chabria",       position: "Business Expert",         company: "Apple"          },
  { name: "Abhinav Tripathi",       position: "Senior Program Manager",  company: "Microsoft"      },
  { name: "Vasudhara Kantroo",      position: "Senior Director & Strategy", company: "Dropbox"     },
  { name: "Shashwat Singh",         position: "CIO",                     company: "Boat"           },
];

const TestimonialsSection = React.memo(() => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  return (
    <section
      id="alumni-section"
      className="py-20 bg-gray-50 font-montserrat overflow-hidden"
    >
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Alumni Success <span className="text-orange-500">Stories</span>
        </h2>
        <p className="text-2xl text-gray-600">
          Our graduates are leaders at top companies and successful entrepreneurs
        </p>
      </div>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-6 w-max"
          initial={{ x: 0 }}
          animate={controls}
          style={{ willChange: "transform" }}
        >
          {[...testimonials, ...testimonials].map((t, idx) => {
            const logoFile = t.company.replace(/\s+/g, "") + ".png";
            return (
              <Card
                key={idx}
                className="w-[300px] flex-shrink-0 p-6 bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
              >
                <div className="text-center h-full flex flex-col items-center">
                  {/* Company Logo (large) */}
                  <div className="relative mb-6 h-24 w-32">
                    <Image
                      src={`/${logoFile}`}
                      alt={t.company}
                      layout="fill"
                      objectFit="contain"
                      priority={idx < testimonials.length ? true : false}
                    />
                  </div>

                  {/* Name of Alum (current size: text-lg) */}
                  <p className="text-lg font-semibold text-gray-900 mb-2">
                    {t.name}
                  </p>

                  {/* Position in Company (smaller than current) */}
                  <p className="text-base text-gray-600">
                    {t.position}
                  </p>
                </div>
              </Card>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
});

export default TestimonialsSection;

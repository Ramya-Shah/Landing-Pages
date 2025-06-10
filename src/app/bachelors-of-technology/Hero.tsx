"use client";

import React, { useState, useEffect } from 'react';
import { Clock, Award, Users, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2025-06-20T23:59:59');
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff > 0) {
        return {
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Application & Brochure URLs
  const applyLink = 'https://applyadmission.net/DA-IICT2025/';
  const brochureLink =
    'https://drive.google.com/drive/folders/1zzjJQzXJmgBWK__oKyB6NyOq_vJGHxLO?usp=drive_link';

  const timerLabels: Record<string, { short: string; long: string }> = {
    days: { short: 'days', long: 'days' },
    hours: { short: 'hrs', long: 'hours' },
    minutes: { short: 'mins', long: 'minutes' },
    seconds: { short: 'secs', long: 'seconds' },
  };

  return (
    <div
      id="hero-section"
      className="relative bg-white text-gray-900 overflow-hidden font-montserrat"
    >
      {/* Content & CTA */}
      <div className="container mx-auto px-4 py-20 relative">
        <div className="max-w-3xl mx-auto space-y-10 text-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-4xl font-bold text-gray-900">
              Worried About{' '}
              <span className="text-orange-500">Job Placements?</span>
            </h1>
            <h2 className="text-3xl lg:text-2xl text-gray-600">
              Here's How We Help You Get Hired at Top Companies
            </h2>
          </div>
        </div>

        {/* Placements + Timer Row */}
        <div id="placements-section" className="mt-12 flex flex-col lg:flex-row lg:items-start gap-8">
          {/* Left Column: Placement Boxes */}
          <div className="flex flex-col space-y-6 lg:w-1/3">
            <Card className="bg-[#273586] text-white p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center space-x-3">
                <Award className="w-10 h-10" />
                <div>
                  <motion.p
                    className="text-3xl font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    ₹82 LPA
                  </motion.p>
                  <motion.p
                    className="text-blue-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Highest Placement
                  </motion.p>
                </div>
              </div>
            </Card>

            <Card className="bg-[#273586] text-white p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center space-x-3">
                <Users className="w-10 h-10" />
                <div>
                  <motion.p
                    className="text-3xl font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    ₹18.25 LPA
                  </motion.p>
                  <motion.p
                    className="text-blue-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    Average Placement
                  </motion.p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Countdown Timer */}
          <div className="lg:w-2/3 px-4">
            <Card className="bg-orange-500 text-white p-4 w-full hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="flex flex-col items-center justify-center gap-1 mb-2">
                  <span className="flex items-center gap-2">
                    <Clock className="w-8 h-8 text-white" />
                    <span className="text-lg md:text-xl font-semibold">
                      Applications Closing on
                    </span>
                  </span>
                  <span className="text-3xl sm:text-5xl font-extrabold mt-2">
                    20th June 2025
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 sm:gap-6 text-center">
                {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
                  <div
                    key={unit}
                    className="bg-orange-600 rounded-xl p-4 min-w-[48px] sm:min-w-[80px] flex flex-col items-center"
                  >
                    <div className="text-3xl font-bold">
                      {timeLeft[unit]}
                    </div>
                    <div className="text-sm capitalize break-words">
                      <span className="block sm:hidden">
                        {timerLabels[unit].short}
                      </span>
                      <span className="hidden sm:block">
                        {timerLabels[unit].long}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Apply & Brochure Buttons (Animated) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto"
        >
          <motion.a
            href={applyLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 text-white px-16 py-4 text-xl font-bold rounded-lg text-center w-full flex items-center justify-center gap-2"
          >
            Apply Now
            <ExternalLink className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="/BTech_DAU.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 hover:bg-green-700 text-white px-16 py-4 text-xl font-bold rounded-lg text-center flex items-center justify-center gap-2 w-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
              />
            </svg>
            Brochure
          </motion.a>
        </motion.div>

        {/* Aspirational Message (now white) */}
        <div className="mt-8 text-center p-6 bg-white rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-500 transform hover:scale-105">
          <p className="text-xl font-bold text-gray-900">
            <span className="text-orange-600">10x</span> applications received,
            admissions still open to foster merit and diversity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

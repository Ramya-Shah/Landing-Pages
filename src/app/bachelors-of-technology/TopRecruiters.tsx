"use client";

import React from 'react';
import { motion } from 'framer-motion';

const topCompanies = [
  { name: 'Apple', logo: '/AppleLogo.png', className: 'w-28 h-10' },
  { name: 'Microsoft', logo: '/MicrosoftLogo.png', className: 'w-28 h-10' },
  { name: 'Google', logo: '/GoogleLogo.png', className: 'w-28 h-10' },
  { name: 'Amazon', logo: '/AmazonLogo.png', className: 'w-28 h-10' },
  { name: 'Flipkart', logo: '/FlipKartLogo.png', className: 'w-28 h-10' },
  { name: 'Airtel', logo: '/AirtelLogo.png', className: 'w-28 h-10' },
  { name: 'Oracle', logo: '/OracleLogo.png', className: 'w-28 h-10' },
  { name: 'Atlassian', logo: '/AtlassianLogo.png', className: 'w-28 h-10' },
  { name: 'Deloitte', logo: '/DeloitteLogo.png', className: 'w-28 h-10' },
  { name: 'LinkedIn', logo: '/LinkedInLogo.png', className: 'w-28 h-10' },
];

// Duplicate for seamless scroll
const duplicatedCompanies = [...topCompanies, ...topCompanies];

const TopRecruiters = () => (
  <section className="py-16 bg-white overflow-hidden font-montserrat">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-6">
        Some of our <span className="text-orange-500">Top Recruiters</span>
      </h2>
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-12 w-max"
          initial={{ x: 0 }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          }}
        >
          {duplicatedCompanies.map((company, idx) => (
            <div
              key={idx}
              className="min-w-[140px] h-24 flex items-center justify-center border rounded-lg p-4 bg-white shadow-sm"
            >
              <img
                src={company.logo}
                alt={company.name}
                className={`${company.className} object-contain`}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default TopRecruiters;

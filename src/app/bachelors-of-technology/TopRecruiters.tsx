"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Company {
  name: string;
  logo: string;
  className: string;
}

const topCompanies: Company[] = [
  { name: "Apple", logo: "/AppleLogo.png", className: "w-28 h-10" },
  { name: "Microsoft", logo: "/MicrosoftLogo.png", className: "w-28 h-10" },
  { name: "Google", logo: "/GoogleLogo.png", className: "w-28 h-10" },
  { name: "Amazon", logo: "/AmazonLogo.png", className: "w-28 h-10" },
  { name: "Flipkart", logo: "/FlipKartLogo.png", className: "w-28 h-10" },
  { name: "Airtel", logo: "/AirtelLogo.png", className: "w-28 h-10" },
  { name: "Oracle", logo: "/OracleLogo.png", className: "w-28 h-10" },
  { name: "Atlassian", logo: "/AtlassianLogo.png", className: "w-28 h-10" },
  { name: "Deloitte", logo: "/DeloitteLogo.png", className: "w-28 h-10" },
  { name: "LinkedIn", logo: "/LinkedInLogo.png", className: "w-28 h-10" },
];

const TopRecruiters: React.FC = () => {
  // Duplicate logos for seamless loop
  const duplicatedCompanies = [...topCompanies, ...topCompanies];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto">
          <h2 className="text-3xl text-center lg:text-4xl font-bold text-gray-900 mb-4">
            Some of <span className="text-orange-500">The Top Recruiters</span>
          </h2>
        {/*<p className="text-gray-900 text-xl text-center mb-12">
          More than 160 companies visited Dhirubhai Ambani University Campus for
          placements
        </p>*/}

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-12 w-max"
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
          >
            {duplicatedCompanies.map((company, index) => (
              <div
                key={index}
                className="min-w-[140px] h-24 flex items-center justify-center border rounded-lg p-4 bg-white shadow-sm"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  className={`${company.className} object-contain`}
                  width={112}
                  height={40}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TopRecruiters;

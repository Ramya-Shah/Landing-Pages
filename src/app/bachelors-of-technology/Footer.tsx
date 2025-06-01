import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 font-montserrat">
      <div className="container mx-auto px-4">
        {/* Use 3-column layout on medium+ screens */}
        <div className="grid md:grid-cols-3 gap-10 lg:gap-72">
          {/* University Info (Column 1) */}
          <div className="md:col-span-1 md:min-w-[340px] lg:min-w-[420px]">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src="/DAU_logo_3.png"
                alt="Dhirubhai Ambani University Logo"
                className="h-28 w-auto"
              />
              <div className="text-2xl leading-snug">
                <div>Recognised as</div>
                <div>Center of Excellence</div>
                <div>by Govt. Of Gujarat</div>
              </div>
            </div>
            <div className="space-y-4 text-lg text-gray-300">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span>
                  Near Indroda Circle, Gandhinagar - 382007, Gujarat, India
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>07969080808</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>ug_admissions@daiict.ac.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links + Important Links (Columns 2 & 3) */}
          <div className="md:col-span-2">
            <div className="flex flex-col md:flex-row md:gap-6">
              {/* Quick Links (Column 2) */}
              <div className="flex-1">
                <h4 className="text-3xl font-semibold mb-6">Quick Links</h4>
                <ul className="space-y-4 text-lg text-gray-300">
                  <li>
                    <a
                      href="#hero-section"
                      className="hover:text-orange-400 transition-colors"
                    >
                      Admissions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#programs-section"
                      className="hover:text-orange-400 transition-colors"
                    >
                      Programs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#hero-section"
                      className="hover:text-orange-400 transition-colors"
                    >
                      Placements
                    </a>
                  </li>
                  <li>
                    <a
                      href="#cutoff-section"
                      className="hover:text-orange-400 transition-colors"
                    >
                      Eligibility & Rank Highlights
                    </a>
                  </li>
                  <li>
                    <a
                      href="#campus-life-section"
                      className="hover:text-orange-400 transition-colors"
                    >
                      Campus Life
                    </a>
                  </li>
                  <li>
                    <a
                      href="#alumni-section"
                      className="hover:text-orange-400 transition-colors"
                    >
                      Alumni
                    </a>
                  </li>
                  <li>
                    <a
                      href="#faq-section"
                      className="hover:text-orange-400 transition-colors"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              {/* Important Links (Column 3) */}
              <div className="flex-1 mt-10 md:mt-0">
                <h4 className="text-3xl font-semibold mb-6">Important</h4>
                <ul className="space-y-4 text-lg text-gray-300">
                  <li>
                    <a
                      href="https://applyadmission.net/DA-IICT2025/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-orange-400 transition-colors flex items-center space-x-2"
                    >
                      <span>Application Portal</span>
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.daiict.ac.in/undergraduate-admissions-all-india-category"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-orange-400 transition-colors flex items-center space-x-2"
                    >
                      <span>Fee Structure</span>
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.daiict.ac.in/admissions#tab-4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-orange-400 transition-colors flex items-center space-x-2"
                    >
                      <span>Scholarships</span>
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-10 text-center">
          <div className="text-lg text-gray-400 space-y-2">
            <p>© 2025 Dhirubhai Ambani University. All rights reserved.</p>
            <p className="text-base">
              * Placement statistics and alumni achievements are based on historical data. Individual results may vary.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

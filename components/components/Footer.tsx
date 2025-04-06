import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4 md:grid md:grid-cols-2">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div className="space-y-2">
            <p>DAU, DA-IICT Road,</p>
            <p>Gandhinagar 382 007, Gujarat</p>
            <p>(India)</p>
            <p className="pt-4">(+91) 079 69 08 08 08</p>
            <p className="text-blue-300 hover:underline">
              <a href="mailto:info[at]daiict[dot]ac[dot]in">
              info@daiict.ac.in
              </a>
            </p>
          </div>
        </div>

        <div className="pt-4 border-t relative border-blue-800">
          <h3 className="text-xl rel mb-4 md:absolute  md:bottom-20">Follow Us On</h3>
          <div className="flex space-x-4 md:absolute md:bottom-10">
            <Link
              href="https://x.com/daiictofficial?t=TuIsOlfI3hNWHdaNT4tt4A&s=09"
              target="_blank"
              className="bg-white p-2 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-900"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6L18 18" />
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/daiictofficial?igsh=dGtkcTFqcGdtNHp0"
              target="_blank"
              className="bg-white p-2 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-900"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/school/dhirubhai-ambani-institute-of-information-and-communication-technology/"
              target="_blank"
              className="bg-white p-2 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"  
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-900"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>
            <Link
              href="https://www.facebook.com/DAIICT/"
              target="_blank"
              className="bg-white p-2 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-900"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </Link>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
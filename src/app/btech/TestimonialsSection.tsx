"use client";

import React, { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import clsx from "clsx";

const testimonials = [
  {
    name: "Mr. Pavitar Singh",
    position: "Co-Founder & CEO",
    company: "UnifyApps",
  },
  {
    name: "Mr. Bhavesh Manglani",
    position: "Co-Founder",
    company: "Delhivery",
  },
  {
    name: "Mr. Jainam Mehta",
    position: "Founder",
    company: "Urban Naps",
  },
  {
    name: "Mrs. Indira Negi",
    position: "Founder",
    company: "Enginiosity",
  },
  {
    name: "Mrs. Prachi Kothari",
    position: "Vice President",
    company: "Goldman Sachs",
  },
  {
    name: "Mr. Valay Vaidya",
    position: "IPS Officer",
    company: "Gujarat Police",
  },
  {
    name: "Mrs. Shraddha Chabria",
    position: "Business Expert",
    company: "Apple",
  },
  {
    name: "Mr. Abhinav Tripathi",
    position: "Senior Program Manager",
    company: "Microsoft",
  },
  {
    name: "Mrs. Vasudhara Kantroo",
    position: "Senior Director & Strategy",
    company: "Dropbox",
  },
  {
    name: "Mr. Shashwat Singh",
    position: "CIO",
    company: "Boat",
  },
];

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 bg-gray-50 font-montserrat">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Alumni Success <span className="text-orange-500">Stories</span>
          </h2>
          <p className="text-2xl text-gray-600">
            Our graduates are leaders at top companies and successful
            entrepreneurs
          </p>
        </div>

        <div className="relative">
          {/* Arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 hover:bg-gray-100 rounded-full p-2 shadow"
            aria-label="Scroll left"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 hover:bg-gray-100 rounded-full p-2 shadow"
            aria-label="Scroll right"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-700" />
          </button>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scroll-smooth gap-6 py-4 px-1 hide-scrollbar"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={clsx(
                  "min-w-[300px] md:min-w-[45%] lg:min-w-[30%]",
                  "bg-white border-l-4 border-orange-500 rounded-xl p-8 shadow-md",
                  "hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-in-out"
                )}
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-blue-600 mb-3">
                    {testimonial.position}
                  </h3>
                  <h4 className="text-xl font-semibold text-orange-500 mb-4">
                    {testimonial.company}
                  </h4>
                  <p className="text-lg text-gray-600 font-medium">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

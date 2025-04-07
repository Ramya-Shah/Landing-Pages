"use client";

import React, { useState } from "react";
import Image from "next/legacy/image";

interface Story {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const SuccessStories: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Entrepreneur");

  const stories: Record<string, Story> = {
    Entrepreneur: {
      title: "Umang Varma",
      subtitle: "Founder of business club",
      description: `
        Umang Varma is the visionary founder of the Business Club, a dynamic platform designed to foster entrepreneurship and innovation. 
        With a passion for connecting like-minded individuals, Umang established the club to provide resources, mentorship, and networking opportunities for aspiring business leaders.
        Under his leadership, the club has grown exponentially, hosting workshops, seminars, and events that empower members to share ideas and collaborate on projects. 
        Umang's commitment to nurturing talent and promoting a culture of learning has made the Business Club a cornerstone of the local business community, inspiring many to pursue their entrepreneurial dreams.
      `,
      image: "/placement_1.jpeg",
    },
    Research: {
      title: "Dr. Aditi Sharma",
      subtitle: "AI Researcher",
      description: `
        Dr. Aditi Sharma has been at the forefront of AI research, contributing groundbreaking work in natural language processing and machine learning. 
        Her research has been published in top-tier journals and has influenced the development of cutting-edge AI technologies.
        Dr. Sharma's dedication to mentoring students and fostering innovation has made her a respected figure in the academic and tech communities.
      `,
      image: "/placement_2.jpeg",
    },
    Placement: {
      title: "Ravi Patel",
      subtitle: "Placed at Microsoft",
      description: `
        Ravi Patel, a recent graduate, secured a prestigious position at Microsoft as a Product Manager. 
        His journey at DAU equipped him with the skills and knowledge to excel in the competitive tech industry. 
        Ravi credits his success to the university's robust curriculum, experienced faculty, and hands-on learning opportunities.
      `,
      image: "/placement_3.jpeg",
    },
    Other: {
      title: "Ravi Patel",
      subtitle: "Placed at Microsoft",
      description: `
        Ravi Patel, a recent graduate, secured a prestigious position at Microsoft as a Product Manager. 
        His journey at DAU equipped him with the skills and knowledge to excel in the competitive tech industry. 
        Ravi credits his success to the university's robust curriculum, experienced faculty, and hands-on learning opportunities.
      `,
      image: "/placement_4.jpeg",
    },
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-4">
          Alumini Achievements
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Instructors around the world teach millions of participants on Navarin. We provide the tools and skills.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {Object.keys(stories).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-md text-lg font-medium ${
                activeTab === tab
                  ? "bg-amber-500 text-white"
                  : "bg-white text-blue-900 border border-amber-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              {stories[activeTab].title}
            </h3>
            <h4 className="text-lg font-medium text-gray-700 mb-4">
              {stories[activeTab].subtitle}
            </h4>
            <p className="text-gray-600">{stories[activeTab].description}</p>
          </div>
          <div className="w-full md:w-1/2 relative h-64 md:h-96">
            <Image
              src={stories[activeTab].image}
              alt={stories[activeTab].title}
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-lg object-cover"
              priority={activeTab === "Entrepreneur"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
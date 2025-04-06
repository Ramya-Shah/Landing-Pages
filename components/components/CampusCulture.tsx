import React from "react";
import Image from "next/legacy/image";

const CampusCulture = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              Campus Culture
            </h2>
            <p className="text-gray-700 mb-4">
            Dhirubhai Ambani University  offers a vibrant campus culture where academics and extracurriculars thrive. 
            Student-led clubs, technical fests, and cultural events foster creativity and collaboration.
            </p>
            <p className="text-gray-700 mb-4">
            From music and dance to robotics and coding, Dhirubhai Ambani University ensures every student finds their passion. 
            Workshops, hackathons, and sports tournaments keep the campus dynamic.
            </p>
            <p className="text-gray-700">
            With top-notch facilities and lively festivals, Dhirubhai Ambani University nurtures friendships, leadership, and personal growth in a welcoming environment.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-96 w-full rounded-md overflow-hidden">
              <Image
                src="/CampusMap.jpg"
                alt="Campus Map"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusCulture;

import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center gap-12">
          {/* Left side: Text */}
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              About Dhirubhai Ambani University
            </h2>
            <p className="text-gray-700 mb-4">
            Dhirubhai Ambani University  offers a vibrant campus culture where academics and extracurriculars thrive. Student-led clubs, technical fests, and cultural events foster creativity and collaboration.
            </p>
            <p className="text-gray-700 mb-4">
            From music and dance to robotics and coding, Dhirubhai Ambani University ensures every student finds their passion. Workshops, hackathons, and sports tournaments keep the campus dynamic.
            </p>
            <p className="text-gray-700">
            With top-notch facilities and lively festivals, Dhirubhai Ambani University nurtures friendships, leadership, and personal growth in a welcoming environment.
            </p>
          </div>

          {/* Right side: Image */}
          <div className="md:w-3/5">
            <img
              src="/Aerial View-01.jpg"
              alt="DAU Aerial View"
              className="w-full md:h-[400px] rounded-[16px] border-2 border-[#E7E7E7]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

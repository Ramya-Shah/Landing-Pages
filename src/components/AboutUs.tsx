import Image from 'next/image';
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
            Dhirubhai Ambani University (formerly DA-IICT) is a premier institution in the field of
            Information and Communication Technology, known for academic excellence, cutting-edge
            research, and industry-oriented programs.
            </p>
            <p className="text-gray-700 mb-4">
            Accredited with a NAAC ‘A+’ grade and recognized as a Centre of Excellence by the
            Government of Gujarat, the university blends theoretical foundations with hands-on learning
            to prepare students for real-world impact.
            </p>
            <p className="text-gray-700">
            With over 24 years of academic legacy, DAU is committed to nurturing innovative minds and
            future leaders across undergraduate, postgraduate, and doctoral programs.
            </p>
          </div>

          {/* Right side: Image */}
          <div className="md:w-1/3">
            <Image
              src="/Aerial View-01.jpg"
              alt="DAU Aerial View"
              width={500}
              height={400}
              className="w-full rounded-[16px] border-2 border-[#E7E7E7] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

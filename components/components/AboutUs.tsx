import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">About Dhirubhai Ambani University</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2000, DA-IICT has been a pioneer in ICT education and research. With expert faculty and a strong curriculum, it has shaped future-ready professionals for over two decades.
            </p>
            <p className="text-gray-700 mb-4">
              Recognized under Gujarat Legislature Act No. 6 of 2003, DA-IICT earned NAAC A+ accreditation in 2023. In 2024, it became Dhirubhai Ambani University, expanding into law, management, and emerging fields.
            </p>
            <p className="text-gray-700">
              DAU fosters innovation, excellence, and industry relevance. Named a Centre of Excellence and Nodal Institute, it has produced accomplished alumni and offers strong scholarships, a dynamic campus, and future-focused programs.
            </p>
          </div>
          <div className="md:w-1/3 relative min-h-[300px] hidden md:block">
            <div className="relative w-full h-full ">
              <img src="./DAU_Logo.png" alt="DAU Logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

import React from "react";
import Image from "next/image";

const FacultySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Image */}
          <div className="md:w-1/2">
            <Image
              src="/faculty-highlights.png"
              alt="Faculty highlights including heading and details"
              width={600}       
              height={400}      
              layout="responsive"
              priority         
            />
          </div>

          {/* Right Image */}
          <div className="md:w-1/2">
            <Image
              src="/phds-premier-institutes.png"
              alt="Circular diagram representing PhDs from premier institutes"
              width={600}       
              height={400}      
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;

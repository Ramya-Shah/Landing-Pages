import React from 'react';
import { Card } from '@/components/ui/card';
import { CheckCircle, ExternalLink } from 'lucide-react';

const ApplicationForm = () => {
  const applyLink = 'https://applyadmission.net/DA-IICT2025/';

  
  return (
    <section id="application-form-bottom" className="py-20 bg-[#273586] text-white font-montserrat">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to <span className="text-orange-400">Transform</span> Your Future?
            </h2>
            <p className="text-2xl text-blue-200">
              Join thousands of successful alumni who started their journey here
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Benefits */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold mb-8 text-white">What You Get:</h3>
              <div className="space-y-6">
                {[
                  "Industry-ready curriculum designed by experts",
                  "Placement opportunities in leading tech companies",
                  "50-acre beautiful residential campus",
                  "Vibrant student life with about 30 clubs and activities",
                  "Strong Alumni network throughout leading companies and startups",
                  "100% tuition fee waiver scholarships for meritorious students",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 transform hover:scale-105 transition-all duration-300"
                  >
                    <CheckCircle className="w-8 h-8 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-blue-100 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Actions */}
            <Card className="bg-white/10 backdrop-blur-sm border-orange-500/30 p-10 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 text-center">
              <h3 className="text-3xl font-bold mb-8 text-white">Take the Next Step</h3>
              <div className="space-y-6">
                <a
                  href={applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg font-semibold rounded-lg"
                >
                  <span className="flex items-center gap-2">
                    Apply Now
                    <ExternalLink className="w-5 h-5" />
                  </span>
                </a>

                <a
                  href="/BTech_DAU.pdf"
                  download
                  className="block w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-semibold rounded-lg"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                    </svg>
                    Brochure
                  </span>

                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;

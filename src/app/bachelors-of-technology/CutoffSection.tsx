import React from 'react';
import { Card } from '@/components/ui/card';
import { CheckCircle, Trophy } from 'lucide-react';

const CutoffSection = () => {
  const toppers = [
    {
      year: '2024',
      ranks: ['AIR 2310', 'AIR 2396', 'AIR 2831'],
    },
    {
      year: '2023',
      ranks: ['AIR 3266', 'AIR 3527', 'AIR 3797'],
    },
    {
      year: '2022',
      ranks: ['AIR 1483', 'AIR 1508', 'AIR 1771'],
    },
  ];

  return (
    <section id="cutoff-section" className="py-16 bg-white font-montserrat">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Eligibility & <span className="text-orange-500">Rank Highlights</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
          {/* Eligibility Criteria */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Eligibility Criteria
            </h3>
            <div className="space-y-4">
              <Card className="flex items-start space-x-4 p-6 min-h-[60px] bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CheckCircle className="w-8 h-8 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">
                    All India Category
                  </h4>
                  <p className="text-gray-700 text-base">
                    Give JEE Mains examination
                  </p>
                </div>
              </Card>

              <Card className="flex items-start space-x-4 p-6 min-h-[60px] bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CheckCircle className="w-8 h-8 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">
                    Academic Qualification
                  </h4>
                  <p className="text-gray-700 text-base">
                    Pass 10+2 from a valid Education Board
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* JEE Mains Toppers */}
          <div className="lg:col-span-2 flex items-center">
            <div className="w-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2 justify-center">
                JEE Mains Toppers Choose DAU
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {toppers.map((yearData, idx) => (
                  <Card
                    key={idx}
                    className="w-full p-6 bg-orange-50 border-orange-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105 min-h-[250px] flex flex-col justify-center"
                  >
                    <h4 className="font-bold text-orange-900 text-2xl mb-4 text-center">
                      {yearData.year}
                    </h4>
                    <ul className="space-y-2 flex flex-col items-center justify-center h-full">
                      {yearData.ranks.map((rank, i) => (
                        <li
                          key={i}
                          className="text-base text-lg text-orange-800 font-bold text-center list-disc"
                        >
                          {rank}
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CutoffSection;

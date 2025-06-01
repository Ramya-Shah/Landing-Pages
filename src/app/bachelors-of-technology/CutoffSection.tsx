import React from 'react';
import { Card } from '@/components/ui/card';
import { CheckCircle, Trophy } from 'lucide-react';

const CutoffSection = () => {
  const toppers = [
    {
      year: '2024',
      names: [
        'Parikh Vanshi - 2310',
        'Shah Siddh - 2396',
        'Lathiya Het - 2831',
      ],
    },
    {
      year: '2023',
      names: [
        'Manya Shah - 3266',
        'Patel Vansh - 3527',
        'Chaitanya Vats - 3797',
      ],
    },
    {
      year: '2022',
      names: [
        'Vraj Patel - 1483',
        'Ramya Shah - 1508',
        'Vats Shah - 1771',
      ],
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
              <Card className="flex items-start space-x-4 p-6 min-h-[120px] bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105">
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

              <Card className="flex items-start space-x-4 p-6 min-h-[120px] bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105">
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
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              JEE Mains Toppers Choose DAU
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {toppers.map((yearData, idx) => (
                <Card
                  key={idx}
                  className="w-full p-6 bg-orange-50 border-orange-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105 min-h-[180px]"
                >
                  <h4 className="font-bold text-orange-900 text-2xl mb-4">
                    {yearData.year}
                  </h4>
                  <ul className="list-disc list-inside space-y-2">
                    {yearData.names.map((entry, i) => {
                      // Split "Name - Rank" into [name, rank]
                      const [name, rank] = entry.split(' - ');
                      return (
                        <li key={i} className="text-base text-orange-800 flex flex-col">
                          <span className="font-bold">{rank}</span>
                          <span>{name}</span>
                        </li>
                      );
                    })}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CutoffSection;

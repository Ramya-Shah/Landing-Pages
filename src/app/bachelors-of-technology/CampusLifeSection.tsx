import React from 'react';
import { Card } from '@/components/ui/card';
import { Users, Calendar, Trophy } from 'lucide-react';

const CampusLifeSection = () => {
  return (
    <section id="campus-life-section" className="py-16 bg-gray-50 font-montserrat">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Vibrant <span className="text-orange-500">Campus Life</span>
        </h2>
        <p className="text-2xl text-gray-600">
          Experience a dynamic campus with endless opportunities
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Box 1: Student Led Clubs */}
          <Card className="p-6 text-center bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Users className="w-12 h-12 text-orange-500" />
              <span className="text-5xl font-bold text-gray-900">22</span>
            </div>
            <p className="text-xl text-gray-900 font-semibold">Student Led Clubs</p>
          </Card>

          {/* Box 2: Student Led Committees */}
          <Card className="p-6 text-center bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Calendar className="w-12 h-12 text-orange-500" />
              <span className="text-5xl font-bold text-gray-900">8</span>
            </div>
            <p className="text-xl text-gray-900 font-semibold">Student Led Committees</p>
          </Card>

          {/* Box 3: Major Student Fests */}
          <Card className="p-6 text-center bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Trophy className="w-12 h-12 text-orange-500" />
              <span className="text-5xl font-bold text-gray-900">3</span>
            </div>
            <p className="text-xl text-gray-900 font-semibold">Major Student Fests</p>
            <p className="text-lg text-gray-700 mt-4 font-semibold">Synapse | i.Fest | Concours</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CampusLifeSection;

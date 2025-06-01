
import React from 'react';
import { Card } from '@/components/ui/card';
import { CheckCircle, Users, Calendar } from 'lucide-react';

const StatsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Cutoff & <span className="text-orange-500">Eligibility</span>
          </h2>
          <p className="text-xl text-gray-600">
            Based on last year's admission statistics
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Eligibility Requirements */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Eligibility Criteria
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">All India Category</h4>
                  <p className="text-gray-600">Give JEE Mains examination</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Academic Qualification</h4>
                  <p className="text-gray-600">Pass 10+2 from a valid Education Board</p>
                </div>
              </div>
            </div>
          </div>

          {/* Campus Life Stats */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Vibrant Campus Life
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <Card className="p-6 bg-blue-50 border-blue-200">
                <div className="flex items-center space-x-4">
                  <Users className="w-8 h-8 text-blue-500" />
                  <div>
                    <h4 className="text-xl font-bold text-blue-900">22</h4>
                    <p className="text-blue-700">Student Led Clubs</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-orange-50 border-orange-200">
                <div className="flex items-center space-x-4">
                  <Calendar className="w-8 h-8 text-orange-500" />
                  <div>
                    <h4 className="text-xl font-bold text-orange-900">8</h4>
                    <p className="text-orange-700">Student Led Committees</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-red-50 border-red-200">
                <div className="flex items-center space-x-4">
                  <Calendar className="w-8 h-8 text-red-500" />
                  <div>
                    <h4 className="text-xl font-bold text-red-900">3</h4>
                    <p className="text-red-700">Major Student Fests</p>
                  </div>
                </div>
              </Card>
            </div>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 font-medium">
                <span className="text-red-600">Synapse</span> - Biggest Cultural fest of Gujarat<br/>
                <span className="text-blue-600">i.Fest</span> - Biggest Technical Fest of Gujarat<br/>
                <span className="text-green-600">Concours</span> - One of the biggest Sports fests of Gujarat
              </p>
            </div>
          </div>
        </div>

        {/* Campus Images */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Campus & Fest Highlights
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop" 
                alt="Campus View"
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-semibold">Beautiful Campus</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop" 
                alt="Campus Grounds"
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-semibold">Lush Green Campus</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop" 
                alt="Evening Campus"
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-semibold">Evening Views</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop" 
                alt="Student Activities"
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-semibold">Student Activities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

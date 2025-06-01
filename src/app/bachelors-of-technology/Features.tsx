
import React from 'react';
import { Card } from '@/components/ui/card';
import { Award, Users, MapPin, GraduationCap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Award,
      title: "Center Of Excellence by Govt. of Gujarat",
      description: "Recognized program designed for today's tech industry"
    },
    {
      icon: Users,
      title: "Exceptional Placement Record",
      description: "Highest ₹82 LPA | Average ₹18.25 LPA with top companies"
    },
    {
      icon: MapPin,
      title: "50-Acre Residential Campus",
      description: "Lush green campus with modern facilities and infrastructure"
    },
    {
      icon: GraduationCap,
      title: "Strong Alumni Network",
      description: "Graduates leading at Google, Microsoft, Goldman Sachs & founding unicorns"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 font-montserrat">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-orange-500">Dhirubhai Ambani University?</span>
          </h2>
          <p className="text-xl text-gray-600">
            Experience excellence in education and career outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
              <feature.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

import React from 'react';
import { Card } from '@/components/ui/card';
import { Code, Calculator, Cpu, Zap } from 'lucide-react';

const ProgramsSection = () => {
  const programs = [
    {
      icon: Code,
      title: "B.Tech. ICT",
      points: [
        "Integrates core CS, Electronics, and Communication disciplines.",
        "Offers electives in AI, ML, Data Science, Quantum Computing & more.",
        "Better career scope than both CSE and ECE due to interdisciplinary strength.",
        "Strong foundation in Mathematics, Programming, and Signal Systems.",
        "Includes hands-on Exploration Projects and both rural and industrial internships.",
        "Prepares students for convergence technologies and future tech innovations.",
      ],
    },
    {
      icon: Cpu,
      title: "B.Tech. ICT (Honours) + Computational Science",
      points: [
        "Builds strong foundation in mathematical modeling and simulations",
        "Covers high-performance, parallel, and scientific computing",
        "Includes advanced electives like Quantum Computing and Time Series",
        "Better career scope than standalone CSE or ECE degrees",
        "Ideal for careers or research in AI, ML, Computational Finance & Data Science",
        "Designed for academically driven students with CPI ≥ 6.5 after Semester 3",
      ],
    },
    {
      icon: Calculator,
      title: "B.Tech. Mathematics and Computing (MnC)",
      points: [
        "Deeply integrates mathematics with computer science fundamentals",
        "Builds strong foundations in algorithmic, statistical & analytical thinking",
        "Focuses on real-life modeling, simulations, and high-end computations",
        "Equips students for careers in AI, ML, Data Science & Computational Finance",
        "Offers advanced electives like Quantum Computing and Game Theory",
        "Designed for students aiming for research, finance, and tech innovation roles",
      ],
    },
    {
      icon: Zap,
      title: "B.Tech. Electronics and VLSI Design (EVD)",
      points: [
        "Focus on semiconductor, IC, and embedded system design",
        "Includes hands-on training with tools like Cadence, Synopsys & FPGA",
        "Covers digital, analog, and mixed-signal VLSI circuits and testing",
        "Offers industry-oriented electives like Secure Hardware & IoT Systems",
        "Includes unique chip design-to-fabrication project and group R&D projects",
        "Prepares students for careers in semiconductor, electronics, and hardware R&D",
      ],
    },
  ];

  return (
    <section id="programs-section" className="py-20 bg-gray-50 font-montserrat">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Programs <span className="text-orange-500">Offered</span>
          </h2>
          <p className="text-xl text-gray-600">
            Choose from our industry-aligned B.Tech. programs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="p-6 bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
            >
              <program.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg text-center font-semibold text-gray-900 mb-3">
                {program.title}
              </h3>
              <ul className="space-y-3 text-gray-600 text-base">
                {program.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 self-center flex-shrink-0"></span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;

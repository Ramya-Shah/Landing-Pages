import React from 'react';
import { Card } from '@/components/ui/card';
import { Users, Calendar, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-600">
            Have questions? Our admissions team is here to help
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* WhatsApp */}
          <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-2 border-green-200">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              {/* WhatsApp Icon */}
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-gray-600 mb-4">Quick responses for urgent queries</p>
            <a
              href="https://wa.me/919274417318"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold"
            >
              Chat on WhatsApp
            </a>
          </Card>

          {/* Phone */}
          <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-2 border-blue-200">
            <div className="w-16 h-16 bg-[#273586] rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Call</h3>
            <p className="text-gray-600 mb-4">Speak directly with our team</p>
            <a
              href="tel:07969080808"
              className="inline-block w-full bg-[#273586] hover:bg-[#273586] text-white py-3 rounded-lg font-semibold mt-6"
            >
              Call Now
            </a>
          </Card>

          {/* Email */}
          <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-2 border-orange-200">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 mb-4">Detailed queries and information</p>
            <a
              href="mailto:ug_admissions@daiict.ac.in"
              className="inline-block w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold"
            >
              Send Email
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

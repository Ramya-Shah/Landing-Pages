import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  // Define FAQs, with the first answer rendered as JSX (table with stripes)
  const faqs = [
    {
      question: "What are the fee details for the B.Tech. Program?",
      answer: (
        <>
          <p className="mb-4">
            At the time of counselling an amount of Rs. 2,03,500 (Rs. 1,78,500 towards Tuition Fee for the First Semester and Rs. 25,000 towards Caution Deposit) is to be paid. Subsequently, fees are charged semester‐wise, with the registration at the beginning of each semester.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-3 text-left bg-gray-100">Particulars</th>
                  <th className="border p-3 text-left bg-gray-100">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border p-3">Tuition Fee</td>
                  <td className="border p-3">Rs. 1,78,500 per Semester</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Registration Fee</td>
                  <td className="border p-3">Rs. 2,500 per Semester</td>
                </tr>
                <tr className="bg-white">
                  <td className="border p-3">Caution Deposit</td>
                  <td className="border p-3">Rs. 25,000 (Refundable at the end of the Program)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Hostel Rent</td>
                  <td className="border p-3">Rs. 35,000 per Semester</td>
                </tr>
                <tr className="bg-white">
                  <td className="border p-3">Food</td>
                  <td className="border p-3">
                    On actuals. Mandatory mess for the first-year students. There are multiple food options available in the campus from 2nd year. (Approx. Rs. 5,500 per month)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )
    },
    {
      question: "How can I get admission in B.Tech. programs under All India Category?",
      answer: "Admission to the B.Tech. programs under the All India Category is based on the All India Rank in the Joint Entrance Examination 2025 (JEE-2025) Main conducted by the National Testing Agency (NTA). Only candidates appearing for JEE 2025 Main are eligible to apply."
    },
    {
      question: "Do I have to apply separately for B.Tech. (ICT) and B.Tech. (Mathematics and Computing) under All India category?",
      answer: "No, a single online application form allows you to apply for multiple programs by selecting your preferences in order of choice, including B.Tech. (ICT), B.Tech. (Honours) in ICT with minor in Computational Science, and B.Tech. (Mathematics and Computing)."
    },
    {
      question: "What documents are required at the time of counselling and admission?",
      answer: "At the time of counselling, candidates must present original documents including: JEE Main rank card, 10th and 12th standard mark sheets and certificates, Caste/category certificate (if applicable), Proof of date of birth, Payment receipt of the admission fees. These are mandatory for seat confirmation."
    },
    {
      question: "What is the last date for submission of online applications?",
      answer: "The last date for submitting online applications is 09 June 2025."
    }
  ];

  return (
    <section id="faq-section" className="py-20 bg-white font-montserrat">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>
          <p className="text-2xl text-gray-600">
            Get answers to common concerns about admissions and campus life
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-gray-200 rounded-xl px-8 hover:shadow-xl transition-all duration-500 hover:border-orange-300"
              >
                <AccordionTrigger className="text-left font-bold text-gray-900 hover:text-orange-600 py-6 text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-6 text-lg leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

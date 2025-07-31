"use client";
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid'; 

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Do I need to buy property or open a company?',
      answer: 'No. It’s income-based — not investment-based.',
    },
    {
      question: 'What income do I need?',
      answer: 'Approx. €2,760 for singles / €4,200 for couples / €4,800+ for families',
    },
    {
      question: 'What if my application gets rejected?',
      answer: 'If we mess up: 100% refund. If Spain rejects it: 75% refund',
    },
    {
      question: 'Can I work remotely from Spain?',
      answer: 'Yes — the visa is made for remote professionals.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-8">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full py-4 text-left font-semibold text-xl text-blue-800 focus:outline-none"
              >
                <span>{faq.question}</span>
                <ChevronDownIcon
                  className={`h-6 w-6 text-blue-600 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
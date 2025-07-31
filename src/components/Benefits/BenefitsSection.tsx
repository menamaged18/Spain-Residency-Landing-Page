import Link from 'next/link';
import React from 'react';

const BenefitsSection = () => { 
  const benefits = [ // Changed the array name to 'benefits'
    {
      title: 'Live in Spain for up to 3 years (renewable)',
      icon: '🏠', // Added an appropriate icon
    },
    {
      title: 'Travel freely across 26+ EU countries',
      icon: '🌍', // Added an appropriate icon
    },
    {
      title: 'Apply for permanent residency after 5 years',
      icon: '📜', // Added an appropriate icon
    },
    {
      title: 'Clear path to Spanish citizenship after 10 years',
      icon: '🇪🇸', // Added an appropriate icon
    },
    {
      title: 'Public schools for your kids (no extra fees)',
      icon: '🏫', // Added an appropriate icon
    },
    {
      title: 'Private & public healthcare options',
      icon: '❤️', // Added an appropriate icon
    },
    {
      title: 'Bring your family with you',
      icon: '👨‍👩‍👧‍👦', // Added an appropriate icon
    },
    {
      title: 'No need to buy property or open a company',
      icon: '🚫', // Added an appropriate icon
    },
    {
      title: 'All paperwork, translations & appointments handled by us',
      icon: '✅', // Added an appropriate icon
    },
  ];

  const btnStyle = "bg-yellow-500 text-blue-900 hover:bg-yellow-400 transition font-semibold py-3 px-8 rounded-full hover:from-gray-600 transition-all duration-300 transform hover:scale-105";

  return (
    <section id="benefits-section" className="mb-5 py-16"> 
      <div className="container mx-auto ">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          What You Get 
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-gray-700 to-gray-800 rounded-tl-lg rounded-bl-lg"></div>
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{benefit.icon}</span> {/* Render the icon */}
                <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3> {/* Render the title */}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-6">
            Ready to start your new life in Spain?
          </p>
          <div className='flex flex-row justify-center gap-3'>
            <button className={btnStyle}>
                <Link href="/#contact"> {/* Ensure this links to your pricing section */}
                  Book a Consultation
                </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
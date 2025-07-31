import Link from 'next/link';
import React from 'react'

function Pricing() {
    const packages = [
    {
      name: 'Essential',
      price: '€5,999',
      features: [
        { name: 'Application prep', included: true },
        { name: 'Legal/doc support', included: true },
        { name: 'Certified translations', included: false },
        { name: 'Housing certificate', included: false },
        { name: 'NIE & tax registration', included: true },
        { name: 'Health insurance setup', included: false },
        { name: 'School & housing help', included: false },
        { name: 'Local representation', included: false },
        { name: 'Relocation concierge', included: false },
        { name: 'Fast track & hotline', included: false },
        { name: 'Family support', included: 'Extra fee' },
      ],
    },
    {
      name: 'Professional',
      price: '€9,900',
      features: [
        { name: 'Application prep', included: true },
        { name: 'Legal/doc support', included: true },
        { name: 'Certified translations', included: true },
        { name: 'Housing certificate', included: true },
        { name: 'NIE & tax registration', included: true },
        { name: 'Health insurance setup', included: false },
        { name: 'School & housing help', included: false },
        { name: 'Local representation', included: false },
        { name: 'Relocation concierge', included: false },
        { name: 'Fast track & hotline', included: false },
        { name: 'Family support', included: '€2k–€3k/person' },
      ],
    },
    {
      name: 'VIP Executive',
      price: '€14,900',
      features: [
        { name: 'Application prep', included: true },
        { name: 'Legal/doc support', included: true },
        { name: 'Certified translations', included: true },
        { name: 'Housing certificate', included: true },
        { name: 'NIE & tax registration', included: true },
        { name: 'Health insurance setup', included: true },
        { name: 'School & housing help', included: true },
        { name: 'Local representation', included: true },
        { name: 'Relocation concierge', included: true },
        { name: 'Fast track & hotline', included: true },
        { name: 'Family support', included: '15% family bundle' },
      ],
    },
  ];

  return (
      <section id="packages" className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Choose Your Residency Package</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{pkg.name}</h3>
                <p className="text-3xl text-blue-900 font-semibold mb-6">{pkg.price}</p>
                <ul className="space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      {feature.included === true ? (
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.7 6.3l-4 4a1 1 0 01-1.4 0l-2-2a1 1 0 011.4-1.4l1.3 1.3 3.3-3.3a1 1 0 011.4 1.4z" />
                        </svg>
                      ) : feature.included === false ? (
                        <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm4 4.5l-1.5-1.5L10 7.5 7.5 5 6 6.5 8.5 9 6 11.5 7.5 13 10 10.5l2.5 2.5 1.5-1.5L11.5 9l2.5-2.5z" />
                        </svg>
                      ) : (
                        <span className="text-yellow-500 mr-2">{feature.included}</span>
                      )}
                      <span className="text-gray-900">{feature.name}</span>
                    </li>
                  ))}
                </ul>
                <Link href="#contact" className="block mt-6 bg-yellow-500 text-blue-900 px-4 py-2 rounded-full text-center font-semibold hover:bg-yellow-400">Get Started</Link>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-lg text-gray-900">Flexible payments – You only pay €100 to start</p>
        </div>
      </section>
  );
}

export default Pricing
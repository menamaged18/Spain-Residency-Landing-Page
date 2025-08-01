import React from 'react';

const WhyZiada = () => {
  const reasons = [
    'Clear process. No hidden steps, no surprises.',
    'Full file handling: paperwork, insurance, family docs — all included',
    'You get your money back if we don’t finish your file — and 75% back if Spain rejects your residency',
    'You start with 25% only — we support you all the way',
  ];

  return (
    <section id="whyZiada" className="py-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Why Choose <span className="text-yellow-600">Ziada</span>?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full"></div>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="group flex items-start p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              {/* Check Icon */}
              <div className="flex-shrink-0 mr-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={3} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  {reason}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center px-8 py-4 rounded-full shadow-lg hover:shadow-xl bg-yellow-500 text-blue-900 hover:bg-yellow-400 transition-all duration-300 cursor-pointer group">
            <span className="font-semibold text-lg mr-2">Get Started Today</span>
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyZiada;
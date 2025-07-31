"use client";
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Head>
        <title>Spanish Residency with Ziada</title>
        <meta name="description" content="Get your Spanish residency with ease. Live in Spain, travel the EU, and enjoy a hassle-free process with Ziada." />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" />
      </Head>

      {/* Header */}
      <header className="bg-blue-900 text-white">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-yellow-500">Ziada</h1>
          <div className="hidden md:flex space-x-6">
            <Link href="#benefits" className="text-white hover:text-yellow-500">Benefits</Link>
            <Link href="#why-ziada" className="text-white hover:text-yellow-500">Why Ziada</Link>
            <Link href="#packages" className="text-white hover:text-yellow-500">Packages</Link>
            <Link href="#faq" className="text-white hover:text-yellow-500">FAQ</Link>
            <Link href="#contact" className="text-white hover:text-yellow-500">Contact</Link>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden bg-blue-800 px-6 py-4">
            <Link href="#benefits" className="block py-2 text-white hover:text-yellow-500">Benefits</Link>
            <Link href="#why-ziada" className="block py-2 text-white hover:text-yellow-500">Why Ziada</Link>
            <Link href="#packages" className="block py-2 text-white hover:text-yellow-500">Packages</Link>
            <Link href="#faq" className="block py-2 text-white hover:text-yellow-500">FAQ</Link>
            <Link href="#contact" className="block py-2 text-white hover:text-yellow-500">Contact</Link>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Make Europe Part of Your Life — With Zero Hassle</h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8">Get your Spanish residency and enjoy life in Europe with a clear, hassle-free process.</p>
          <Link href="#contact" className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400">Start with €100</Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              'Live in Spain for up to 3 years (renewable)',
              'Travel freely across 26+ EU countries',
              'Apply for permanent residency after 5 years',
              'Clear path to Spanish citizenship after 10 years',
              'Public schools for your kids (no extra fees)',
              'Private & public healthcare options',
              'Bring your family with you',
              'No need to buy property or open a company',
              'All paperwork, translations & appointments handled by us',
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg text-gray-900">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Ziada Section */}
      <section id="why-ziada" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Why Ziada?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Clear process. No hidden steps, no surprises.',
              'Full file handling: paperwork, insurance, family docs — all included',
              '100% refund if we don’t deliver, 75% if your visa gets rejected',
              'You start with 25% only — we support you all the way',
              'Based in UAE — speak directly with Mr. Mina or our legal team',
            ].map((reason, index) => (
              <div key={index} className="flex items-start">
                <svg className="w-6 h-6 text-yellow-500 mr-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.7 6.3l-4 4a1 1 0 01-1.4 0l-2-2a1 1 0 011.4-1.4l1.3 1.3 3.3-3.3a1 1 0 011.4 1.4z" />
                </svg>
                <p className="text-lg text-gray-900">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16">
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

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Common Questions</h2>
          <div className="space-y-6">
            {[
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
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{faq.question}</h3>
                <p className="text-gray-900">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Services Section */}
      <section id="extra-services" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Extra Services (If Needed)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'UAE company formation',
              'Business license setup or renewal',
              'Bank account opening',
              'Accounting & tax advisory (on request)',
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg text-gray-900">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Talk?</h2>
          <p className="text-lg text-gray-200 mb-6">Pay €100 now — and get a direct call with our team to start preparing your file.</p>
          <p className="text-lg text-gray-200 mb-6">We’ll explain everything clearly, step by step.</p>
          <div className="flex justify-center space-x-6">
            <a href="tel:+971509199750" className="text-yellow-500 hover:text-yellow-400">📞 +971 509199750</a>
            <a href="https://wa.me/+971509199750" className="text-yellow-500 hover:text-yellow-400">📲 WhatsApp</a>
          </div>
          <Link href="#contact" className="inline-block mt-6 bg-yellow-500 text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400">Start with €100</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-200">&copy; 2025 Ziada. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
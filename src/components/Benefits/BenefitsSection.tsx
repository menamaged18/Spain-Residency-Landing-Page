"use client";
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const BenefitsSection = () => { 
  // Array of benefits to be displayed as cards
  const benefits = [
    {
      title: 'Live in Spain for up to 3 years (renewable)',
      icon: '�',
    },
    {
      title: 'Travel freely across 27 EU countries',
      icon: '🌍',
    },
    {
      title: 'Apply for permanent residency after 5 years',
      icon: '📜',
    },
    {
      title: 'Clear path to Spanish citizenship after 10 years',
      icon: '🇪🇸',
    },
    {
      title: 'Public schools for your kids (no extra fees)',
      icon: '🏫',
    },
    {
      title: 'Private & public healthcare options',
      icon: '❤️',
    },
    {
      title: 'Bring your family with you',
      icon: '👨‍👩‍👧‍👦',
    },
    {
      title: 'All paperwork, translations & appointments handled by us',
      icon: '✅',
    },
  ];

  // Tailwind CSS classes for the CTA button
  const btnStyle = "bg-yellow-500 text-blue-900 hover:bg-yellow-400 transition font-semibold py-3 px-8 rounded-full hover:from-gray-600 transition-all duration-300 transform hover:scale-105";

  // State variables for the swipe functionality
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);


  // Function to handle the start of a touch/drag event
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setIsDragging(true);
    setTouchStartX(clientX);
  };

  // Function to handle the end of a touch/drag event
  const handleTouchEnd = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
    setIsDragging(false);
    const distance = touchStartX - clientX;
    const threshold = 50;

    if (distance > threshold) {
      setActiveIndex((prev) => Math.min(prev + 1, benefits.length - 1));
    } else if (distance < -threshold) {
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  // Function to handle touch/drag movement
  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;
    const container = containerRef.current;
    if (container) {
      e.preventDefault();
    }
  };

  // UseEffect to update the scroll position based on activeIndex
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const card = container.querySelector('.benefit-card');
      if (card instanceof HTMLElement) {
        const cardWidth = card.offsetWidth + 32; // card width + gap
        container.scrollLeft = activeIndex * cardWidth;
      }
    }
  }, [activeIndex]);

  return (
    <section id="benefits-section" className="mb-5 py-12 m-4">
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;  /* Internet Explorer 10+ */
          scrollbar-width: none;  /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;  /* Safari and Chrome */
        }
      `}</style>
      <div className="container mx-auto ">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          What You Get
        </h2>

        <div
          ref={containerRef}
          // The `no-scrollbar` class hides the scrollbar across most browsers while maintaining scroll functionality.
          className="flex gap-8 overflow-x-scroll p-4 snap-x snap-mandatory hide-scrollbar"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
          onMouseDown={handleTouchStart}
          onMouseUp={handleTouchEnd}
          onMouseMove={handleTouchMove}
          onMouseLeave={() => setIsDragging(false)} // End drag if mouse leaves container
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`benefit-card flex-shrink-0 w-80 relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 snap-center`}
              style={{ minWidth: '320px' }} // Set a fixed width for the cards
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-gray-700 to-gray-800 rounded-tl-lg rounded-bl-lg"></div>
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{benefit.icon}</span>
                <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {benefits.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === activeIndex ? 'bg-gray-800' : 'bg-gray-300'
              }`}
            ></button>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-6">
            Ready to start your new life in Spain?
          </p>
          <div className='flex flex-row justify-center gap-3'>
            <button className={btnStyle}>
              <Link href="/#contact">
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

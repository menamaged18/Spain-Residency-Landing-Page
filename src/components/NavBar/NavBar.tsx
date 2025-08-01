"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { BtnStyle } from '../ComponentStyles/Button';

// Importing a better icon for the mobile menu button
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navbarHeight = 68;

  // This should be an object or a simple string for consistency
  const linkStyle = `text-lg font-medium text-white hover:text-green-600 transition duration-300 border-b-2 border-transparent hover:border-green-600 pb-1`;

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the mobile menu on link click
  };

  return (
    <>
      {isSticky && (
        <div style={{ height: navbarHeight }}></div>
      )}
      <nav
        className={`
          ${isSticky ? 'fixed top-0 left-0 right-0 rounded-none max' : 'relative mt-6 mx-4 rounded-4xl hover:scale-105'}
          bg-gray-900 text-white shadow-sm z-50 transition-all duration-300 ease-in-out
          `}
        style={{ height: navbarHeight }}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center max-w-7xl">
          <Link href="/" className="flex items-center">
            <Image
              src={'/ZiadaLogo.jpg'}
              height={40}
              width={40}
              alt='Ziada'
              className='rounded-full self-center'
            />
          </Link>
          
          {/* Desktop Navigation Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            <li><Link href="/#home" className={linkStyle}>Home</Link></li>
            <li><Link href="/#benefits-section" className={linkStyle}>Benefits</Link></li>
            <li><Link href="/#whyZiada" className={linkStyle}>Why Ziada</Link></li>
            <li><Link href="/#packages" className={linkStyle}>Prices</Link></li>
            <li><Link href="/#faq" className={linkStyle}>FAQ</Link></li>
            <li>
              {/* Note: The button text should be a child of the Link for proper navigation. */}
              <Link href="/#contact" className={`${BtnStyle} transition duration-300 ease-in-out transform hover:scale-105`}>
                Book Consultation
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-white" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu Content */}
        {isOpen && (
          <ul
            className="md:hidden absolute top-full left-0 right-0 bg-gray-800 text-white p-4 space-y-4 transition-all duration-300 ease-in-out"
            style={{ zIndex: 40 }} // Ensure menu is below the navbar but above other content
          >
            <li><Link href="/#home" onClick={handleLinkClick} className="block w-full p-2 text-center text-lg font-medium hover:bg-gray-700 rounded transition">Home</Link></li>
            <li><Link href="/#benefits-section" onClick={handleLinkClick} className="block w-full p-2 text-center text-lg font-medium hover:bg-gray-700 rounded transition">Benefits</Link></li>
            <li><Link href="/#whyZiada" onClick={handleLinkClick} className="block w-full p-2 text-center text-lg font-medium hover:bg-gray-700 rounded transition">Why Ziada</Link></li>
            <li><Link href="/#packages" onClick={handleLinkClick} className="block w-full p-2 text-center text-lg font-medium hover:bg-gray-700 rounded transition">Prices</Link></li>
            <li><Link href="/#faq" onClick={handleLinkClick} className="block w-full p-2 text-center text-lg font-medium hover:bg-gray-700 rounded transition">FAQ</Link></li>
            <li>
              <Link href="/#contact" onClick={handleLinkClick} className={`${BtnStyle} block w-full text-center transition duration-300 ease-in-out transform hover:scale-105`}>
                Book Consultation
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
}

export default Navbar;
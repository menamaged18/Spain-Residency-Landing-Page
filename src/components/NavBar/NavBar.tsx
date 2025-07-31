"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { BtnStyle } from '../ComponentStyles/Button';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navbarHeight = 68; // Define the height of the navbar

  const linkStyle = `text-lg font-medium text-white hover:text-gray-600 transition duration-300 border-b-2 
                      border-transparent hover:border-green-600 pb-1`;

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

  return (
    <>
      {isSticky && (
        <div style={{ height: navbarHeight }}></div>
      )}
      <nav
        className={`
          ${isSticky ? 'fixed top-0 left-0 right-0 rounded-none' : 'relative mt-6 mx-4 rounded-4xl hover:scale-105'}
          bg-gray-900 text-white shadow-sm z-50 transition-all duration-300 ease-in-out 
        `}
        style={{ height: navbarHeight }}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="text-lg font-bold flex items-center ">
            <Image
              src={'/ZiadaLogo.jpg'}
              height={40}
              width={40}
              alt='Ziada'
              className='rounded-full self-center '
            />
          </Link>
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link href="/#home" className="text-lg font-medium text-white hover:text-green-600 transition duration-300 border-b-2 border-transparent hover:border-green-600 pb-1">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/#benefits-section" className="text-lg font-medium text-white hover:text-green-600 transition duration-300 border-b-2 border-transparent hover:border-green-600 pb-1">
                <span>Benefits</span>
              </Link>
            </li>
            <li>
              <Link href="/#whyZiada" className="text-lg font-medium text-white hover:text-green-600 transition duration-300 border-b-2 border-transparent hover:border-green-600 pb-1">
                <span>Why Ziada</span>
              </Link>
            </li>
            <li>
              <Link href="/#packages" className={linkStyle}>
                <span>Prices</span>
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="text-lg font-medium text-white hover:text-green-600 transition duration-300 border-b-2 border-transparent hover:border-green-600 pb-1">
                <span>FAQ</span>
              </Link>
            </li>
            {/* The Free Consultation button for desktop view */}
            <li className="hidden md:block">
              <button className={`${BtnStyle} transition duration-300 ease-in-out transform hover:scale-105`}>
                <Link href="/#contact">
                  Book Consultation
                </Link>
              </button>
            </li>
          </ul>
          <button
            className="md:hidden flex justify-center w-8 h-8 bg-green-400 hover:bg-green-300 rounded-full"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {isOpen && (
          <ul className="md:hidden flex flex-col items-center space-y-4 py-4 bg-green-300">
            <li>
              <Link href="/" className="hover:text-gray-300 transition duration-300 flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300 transition duration-300 flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>About</span>
              </Link>
            </li>
            <li>
                <Link href="/prices" className="hover:text-gray-300 transition duration-300 flex items-center space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M12 11h.01M12 15h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Prices</span>
                </Link>
            </li>
            {/* The Free Consultation button for mobile view */}
            <li>
              <button className="bg-gradient-to-r from-green-600 to-green-300 hover:from-green-700 hover:to-green-400 text-white font-bold py-2 px-4 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                <Link href="/contact">
                  Book Consultation
                </Link>
              </button>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
}

export default Navbar;
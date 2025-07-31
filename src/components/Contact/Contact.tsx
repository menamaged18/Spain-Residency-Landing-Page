import Link from "next/link";
import { FaPhone, FaWhatsapp } from 'react-icons/fa'; 

function Contact() {
  return (
    <section id="contact" className="bg-gray-900 py-14 text-white">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">Ready to Talk?</h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          Pay **€100** now and get a direct call with our team to start preparing your file. We’ll explain everything clearly, step by step.
        </p>

        {/* Action buttons with icons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-4">
          <a
            href="tel:+971509199750"
            className="flex items-center justify-center bg-gray-800 text-yellow-400 font-semibold px-6 py-3 rounded-full transition-colors duration-300 hover:bg-yellow-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <FaPhone className="mr-3" />
            Call Us
          </a>
          <a
            href="https://wa.me/+971509199750"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gray-800 text-yellow-400 font-semibold px-6 py-3 rounded-full transition-colors duration-300 hover:bg-yellow-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <FaWhatsapp className="mr-3" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
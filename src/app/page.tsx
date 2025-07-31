
import FAQ from "@/components/FAQ/FAQ";
import Pricing from "@/components/Pricing/Pricing";
import Contact from "@/components/Contact/Contact";
import BenefitsSection from "@/components/Benefits/BenefitsSection";
import WhyZiada from "@/components/whyZiada/WhyZiada";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col h-full ">
      <section id="home" className="relative h-screen w-full text-black">
        <Image
          src="/Barcelona.jpg"
          alt="Spain Image"
          fill
          priority
          className="object-cover"
        />
        
        <div className="absolute inset-0 bg-black/40"></div> 

          <div className="container mx-auto max-w-6xl">
            <Navbar />
          </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Make Europe Part of Your Life — With Zero Hassle
          </h2>
          <p className="text-lg md:text-xl text-white mb-8">
            Get your Spanish residency and enjoy life in Europe with a clear, hassle-free process.
          </p>
          <Link
            href="#contact"
            className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition"
          >
            Start with €100
          </Link>
        </div>
      </section>
      <div className="mx-auto max-w-6xl">
      {/* <WhyChooseUs /> */}
        <BenefitsSection />
        <WhyZiada />
        <Pricing />
        <FAQ />
      </div>

      <Contact />

    </div>
  );
}
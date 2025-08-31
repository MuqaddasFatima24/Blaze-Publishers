"use client";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-orange-600 text-white py-10 px-6 relative">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Logo / Name with overlapping effect */}
        <div className="flex flex-col items-center md:items-start">
          <div className="relative inline-block leading-tight">
            {/* Outlined Layer (hide on xs to avoid overlap mess) */}
            <h2 className="hidden sm:block text-3xl sm:text-4xl md:text-5xl italic tracking-wide outline-text font-[Playfair_Display] absolute left-[1px] top-[1px]">
              Blaze Publishers
            </h2>
            {/* Filled Layer */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl italic tracking-wide font-[Playfair_Display] relative">
              Blaze Publishers
            </h2>
          </div>

          <p className="mt-4 text-gray-100 text-sm sm:text-base text-center md:text-left">
            Crafting Stories, Powering Authors
          </p>
        </div>

        {/* Services */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg sm:text-xl font-bold mb-3">Our Services</h3>
          <ul className="space-y-1 text-gray-100 text-sm sm:text-base">
            <li>Ebook Writing</li>
            <li>Editing</li>
            <li>Publishing</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg sm:text-xl font-bold mb-3">Connect With Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-xl sm:text-2xl">
            <a href="#" className="hover:text-black transition"><FaFacebook /></a>
            <a href="#" className="hover:text-black transition"><FaTwitter /></a>
            <a href="#" className="hover:text-black transition"><FaInstagram /></a>
            <a href="#" className="hover:text-black transition"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-white/40 mt-10 pt-5 text-center text-white text-xs sm:text-sm">
        © {new Date().getFullYear()} Blaze Publishers. All rights reserved.
      </div>

      {/* Local CSS for outlined text */}
      <style jsx>{`
        .outline-text {
          color: transparent;
          -webkit-text-stroke: 1px white;
        }
      `}</style>
    </footer>
  );
}

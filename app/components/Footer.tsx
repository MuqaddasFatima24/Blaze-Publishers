"use client";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-10">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <div className="relative w-44 sm:w-52 md:w-60 h-12 sm:h-14 md:h-16">
            <Image
              src="/logo.png"
              alt="Blaze Publishers"
              fill
              sizes="(max-width: 640px) 176px, (max-width: 768px) 208px, 240px"
              className="object-contain"
              priority={false}
            />
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900">
            Our Services
          </h3>
          <ul className="space-y-1 text-gray-600 text-sm sm:text-base">
            <li>Ebook Writing</li>
            <li>Editing</li>
            <li>Publishing</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900">
            Connect With Us
          </h3>
          <div className="flex justify-center md:justify-start gap-4 text-xl sm:text-2xl text-gray-500">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-orange-600 transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-orange-600 transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-orange-600 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-orange-600 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:info@blazepublishers.com"
              aria-label="Email"
              className="hover:text-orange-600 transition-colors"
            >
              <MdEmail />
            </a>
          </div>
        </div>
      </div>

      {/* Divider + Copyright */}
      <div className="border-t border-gray-200 mt-10 pt-5 text-center text-gray-500 text-xs sm:text-sm px-6">
        © {new Date().getFullYear()} Blaze Publishers. All rights reserved.
      </div>
    </footer>
  );
}

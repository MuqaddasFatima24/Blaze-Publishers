"use client";
import Image from "next/image";
import Head from "next/head";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

export default function Footer() {
  const pixelId = "1005200931680502";

  return (
    <>
      {/* ✅ Extra SEO meta for the footer section */}
      <Head>
        <meta
          name="description"
          content="Contact Blaze Publishers for ebook writing, editing, and publishing services. Connect with us on Facebook, Instagram, or LinkedIn."
        />
        <meta
          name="keywords"
          content="Blaze Publishers, ebook writing, editing, publishing, contact, Facebook, Instagram, LinkedIn"
        />
        <meta property="og:site_name" content="Blaze Publishers" />
      </Head>

      <footer
        className="bg-white text-gray-800 py-10"
        aria-labelledby="footer-heading"
      >
        <h2 id="footer-heading" className="sr-only">
          Blaze Publishers Contact Information and Services
        </h2>

        {/* Top Section */}
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Logo */}
          <div className="flex justify-start items-start">
            <div className="relative w-52 sm:w-64 md:w-72 h-16 sm:h-20 md:h-24">
              <Image
                src="/logo.png"
                alt="Blaze Publishers company logo"
                fill
                sizes="(max-width: 640px) 208px, (max-width: 768px) 256px, 288px"
                className="object-contain"
                priority
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

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900">
              Contact Us
            </h3>
            <p className="flex items-center gap-2 text-gray-600 text-sm sm:text-base">
              <MdLocationOn className="text-orange-600" />
              30N N Gould St, Sheridan, WY 82801
            </p>
            <a
              href="tel:+12294660201"
              className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors text-sm sm:text-base"
            >
              <MdPhone className="text-orange-600" />
              +1 229 466-0201
            </a>
            <a
              href="mailto:info@blazepublishers.com"
              className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors text-sm sm:text-base"
            >
              <MdEmail className="text-orange-600" />
              info@blazepublishers.com
            </a>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900">
              Connect With Us
            </h3>
            <div className="flex justify-center md:justify-start gap-4 text-xl sm:text-2xl text-gray-500">
              <a
                href="https://www.facebook.com/blazepublishers"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="hover:text-orange-600 transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/blazepublishers/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram profile"
                className="hover:text-orange-600 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="Visit our LinkedIn page"
                className="hover:text-orange-600 transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-gray-200 mt-10 pt-5 text-center text-gray-500 text-xs sm:text-sm px-6 space-y-2">
          <p>© {new Date().getFullYear()} Blaze Publishers. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

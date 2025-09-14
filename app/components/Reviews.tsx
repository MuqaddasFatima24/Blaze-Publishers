"use client";
import { motion } from "framer-motion";

export default function Reviews() {
  // Add meaningful alt text for each platform
  const logos = [
    { src: "review1.png", alt: "Google Reviews" },
    { src: "review2.png", alt: "Trustpilot Reviews" },
    { src: "review3.png", alt: "Goodreads Community" },
    { src: "review4.png", alt: "Amazon Reader Feedback" },
  ];

  return (
    <section
      id="reviews"
      className="py-20 md:py-24 bg-white"
      aria-labelledby="reviews-heading"
    >
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          id="reviews-heading"
          whileHover={{ scale: 1.05, letterSpacing: "2px" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="font-inter-tight text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 cursor-pointer"
        >
          See Our Reviews On
        </motion.h2>

        {/* Optional subtitle for SEO keywords */}
        <p className="max-w-2xl mx-auto mb-14 text-gray-600 text-lg">
          Discover what readers and authors are saying about Blaze Publishers on
          the world’s top review platforms.
        </p>

        {/* Review Logos */}
        <div className="flex justify-center gap-12 md:gap-20 flex-wrap">
          {logos.map((logo, index) => (
            <motion.img
              key={index}
              src={`/${logo.src}`}
              alt={logo.alt}
              loading="lazy"
              className="h-20 w-auto object-contain md:h-24"
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

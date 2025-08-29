"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const images = ["/background.png", "/background1.png", "/background2.png"];
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Slider */}
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt="Blaze Publishers"
          fill
          priority={index === 0}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-3xl px-6"
      >
        <motion.h1
          whileHover={{ scale: 1.05, letterSpacing: "0.05em" }}
          transition={{ duration: 0.3 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg"
        >
          Blaze{" "}
          <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
            Publishers
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 drop-shadow font-medium"
        >
          Empowering <span className="text-orange-400">authors</span> with
          <span className="text-orange-400"> publishing</span>,
          <span className="text-orange-400"> editing</span>, and
          <span className="text-orange-400"> marketing</span> services.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/services"
            className="px-6 py-3 rounded-full bg-orange-600 text-white font-semibold shadow-md hover:bg-orange-700 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Explore Services
          </Link>
          <Link
            href="/learn-more"
            className="px-6 py-3 rounded-full bg-white text-gray-900 font-semibold shadow-md hover:bg-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Learn More
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

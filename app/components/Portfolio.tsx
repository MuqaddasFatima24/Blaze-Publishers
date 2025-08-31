"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"   // ✅ added for navigation

export default function Portfolio() {
  const images = ["book2.png", "book3.png", "book4.png", "book5.png"]
  const texts = [
    "Transforming your ideas into timeless masterpieces that inspire generations. We bring your vision to life with unmatched creativity and detail, ensuring your work stands out.",
    "Every page is designed with precision, passion, and purpose. We craft books that not only look beautiful but also create an emotional bond with readers.",
    "We believe in publishing that speaks directly to the heart. From cover to content, our work ensures deep connections and lasting impressions.",
    "Turning creativity into premium publishing experiences. With innovation and elegance, we elevate your stories into unforgettable works of art."
  ]

  const [current, setCurrent] = useState(0)

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="relative py-20 bg-white">
      <div className="relative container mx-auto px-6">
        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* Left Side - Text */}
          <div className="text-left">
            <motion.h2
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-extrabold font-[Playfair_Display] bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent transition-all duration-500 hover:scale-105 hover:tracking-tight cursor-pointer"
            >
              Blaze Publisher
            </motion.h2>

            {/* Changing description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="max-w-xl text-lg text-black leading-relaxed mb-10 font-[Merriweather]"
              >
                {texts[current]}
              </motion.p>
            </AnimatePresence>

            {/* Features Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-4">
                <img src="/icon1.png" alt="Icon 1" className="w-10 h-10" />
                <p className="text-black font-[Merriweather]">
                  Publish effortlessly in both print and digital formats.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img src="/icon2.png" alt="Icon 2" className="w-10 h-10" />
                <p className="text-black font-[Merriweather]">
                  Build a lasting connection with your ideal readers.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img src="/icon3.png" alt="Icon 3" className="w-10 h-10" />
                <p className="text-black font-[Merriweather]">
                  Simplify distribution with our streamlined process.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img src="/icon4.png" alt="Icon 4" className="w-10 h-10" />
                <p className="text-black font-[Merriweather]">
                  Establish a powerful, premium author brand identity.
                </p>
              </div>
            </div>

            {/* Premium Button - Changed to Learn More */}
            <Link href="/learnmore">
              <motion.button
                whileHover={{
                  scale: 1.08,
                  backgroundColor: "#FF6A00", // deep orange
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-xl bg-orange-400 text-black font-semibold tracking-wide 
                           shadow-lg transition-all duration-300 hover:shadow-xl font-[Cormorant_Garamond]"
              >
                Learn More
              </motion.button>
            </Link>
          </div>

          {/* Right Side - Slideshow */}
          <div className="relative w-full flex justify-center">
            <div className="relative w-[300px] h-[450px] md:w-[350px] md:h-[500px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={`/${images[current]}`}
                  alt={`Book ${current + 2}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute w-full h-full object-contain"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

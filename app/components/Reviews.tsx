"use client"
import { motion } from "framer-motion"

export default function Reviews() {
  const logos = ["review1.png", "review2.png", "review3.png", "review4.png"]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          whileHover={{ scale: 1.05, letterSpacing: "2px" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="text-4xl md:text-5xl font-[Playfair_Display] text-black font-bold mb-12 cursor-pointer"
        >
          See Our Reviews On
        </motion.h2>

        {/* Static Logos with Hover Zoom */}
        <div className="flex justify-center gap-16 flex-wrap">
          {logos.map((logo, index) => (
            <motion.img
              key={index}
              src={`/${logo}`}
              alt={`Review Logo ${index + 1}`}
              className="h-20 w-auto object-contain"
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

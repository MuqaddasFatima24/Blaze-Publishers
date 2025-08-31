"use client"
import { motion } from "framer-motion"
import { Great_Vibes } from "next/font/google"
import Link from "next/link"   // ✅ Import Link

// Load a royal script font
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"], // this font only has 400
})

export default function Idea() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/idea.png')" }}
      ></div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-lg ${greatVibes.className}`}
        >
          Have <br /> an idea?
        </motion.h2>

        {/* Button now links to /contact */}
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className={`px-12 py-5 border-2 border-white rounded-full text-3xl font-semibold text-white tracking-wide
                       transition-all duration-500 ease-in-out hover:bg-white hover:text-black hover:shadow-2xl hover:tracking-widest ${greatVibes.className}`}
          >
            TELL US
          </motion.button>
        </Link>
      </div>
    </section>
  )
}

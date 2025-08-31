"use client"
import { Playfair_Display } from "next/font/google"
import { motion } from "framer-motion"
import CountUp from "react-countup"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

const milestones = [
  { title: "Best-Selling Titles", number: 45, suffix: "+" },
  { title: "Languages Translated", number: 100, suffix: "+" },
  { title: "Million Copies Sold", number: 15, suffix: "M+" },
]

export default function Milestone() {
  return (
    <section className="relative w-full bg-orange-500 py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20"></div>

      {/* Section Heading */}
      <div className="relative z-10 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className={`${playfair.className} text-4xl md:text-5xl font-bold text-white transition-all duration-500`}
        >
          <span className="relative inline-block cursor-pointer group">
            Our Milestones
            {/* Underline on hover */}
            <span className="absolute left-0 -bottom-1 w-0 h-1 bg-white rounded-full transition-all duration-500 group-hover:w-full"></span>
          </span>
        </motion.h2>
      </div>

      {/* Milestones Grid */}
      <div className="relative grid sm:grid-cols-3 gap-12 max-w-5xl mx-auto text-center z-10">
        {milestones.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Number */}
            <h3
              className={`${playfair.className} text-5xl md:text-6xl font-bold text-white mb-3`}
            >
              <CountUp
                end={item.number}
                duration={2.5}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
              {item.suffix}
            </h3>
            {/* Title */}
            <p className="text-lg text-white/90">{item.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

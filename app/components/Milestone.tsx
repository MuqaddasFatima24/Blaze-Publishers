"use client"
import Head from "next/head"
import { motion } from "framer-motion"
import CountUp from "react-countup"

const milestones = [
  { title: "Best-Selling Titles", number: 45, suffix: "+" },
  { title: "Languages Translated", number: 100, suffix: "+" },
  { title: "Million Copies Sold", number: 15, suffix: "M+" },
]

export default function Milestone() {
  return (
    <>
      {/* ── Page-level SEO ── */}
      <Head>
        <title>Our Milestones | Blaze Publisher Achievements</title>
        <meta
          name="description"
          content="Discover Blaze Publisher's key achievements—best-selling titles, worldwide translations, and millions of copies sold."
        />
        <meta
          name="keywords"
          content="Blaze Publisher milestones, publishing achievements, best-selling books, translations, millions of copies sold"
        />
        <meta property="og:title" content="Our Milestones | Blaze Publisher" />
        <meta
          property="og:description"
          content="Blaze Publisher has 45+ best-selling titles, 100+ language translations, and over 15M copies sold worldwide."
        />
        <meta property="og:image" content="/logo.png" />
        <meta name="robots" content="index, follow" />
      </Head>

      <section
        id="milestones"
        className="relative w-full bg-orange-500 py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
        aria-labelledby="milestone-heading"
      >
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20"></div>

        {/* Section Heading */}
        <div className="relative z-10 text-center mb-16">
          <motion.h2
            id="milestone-heading"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="font-inter-tight text-4xl md:text-5xl font-bold text-white transition-all duration-500"
          >
            <span className="relative inline-block cursor-pointer group">
              Our Milestones
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-white rounded-full transition-all duration-500 group-hover:w-full"></span>
            </span>
          </motion.h2>
        </div>

        {/* Milestones Grid */}
        <div className="relative grid sm:grid-cols-3 gap-12 max-w-5xl mx-auto text-center z-10">
          {milestones.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              aria-label={item.title}
            >
              <h3 className="font-inter-tight text-5xl md:text-6xl font-bold text-white mb-3">
                <CountUp
                  end={item.number}
                  duration={2.5}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
                {item.suffix}
              </h3>
              <p className="text-lg text-white/90">{item.title}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  )
}

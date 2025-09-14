"use client"
import { useEffect, useState } from "react"
import {
  motion,
  AnimatePresence,
  type Variants,
  type Transition
} from "framer-motion"
import Link from "next/link"
import Head from "next/head"

export default function Portfolio() {
  const images = ["book2.png", "book3.png", "book4.png", "book5.png"]
  const texts = [
    "Transforming your ideas into timeless masterpieces that inspire generations. We bring your vision to life with unmatched creativity and detail, ensuring your work stands out.",
    "Every page is designed with precision, passion, and purpose. We craft books that not only look beautiful but also create an emotional bond with readers.",
    "We believe in publishing that speaks directly to the heart. From cover to content, our work ensures deep connections and lasting impressions.",
    "Turning creativity into premium publishing experiences. With innovation and elegance, we elevate your stories into unforgettable works of art."
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  const easeInOutCubic: Transition["ease"] = [0.42, 0, 0.58, 1]
  const easeOutCubic: Transition["ease"] = [0.33, 1, 0.68, 1]

  const textVariants: Variants = {
    initial: { opacity: 0, y: 6, filter: "blur(2px)" },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: easeInOutCubic }
    },
    exit: {
      opacity: 0,
      y: -6,
      filter: "blur(2px)",
      transition: { duration: 0.6, ease: easeOutCubic }
    }
  }

  const imageVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.8, ease: easeInOutCubic }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.6, ease: easeOutCubic }
    }
  }

  return (
    <>
      <Head>
        <title>Portfolio | Blaze Publishers – Premium Book Publishing Showcase</title>
        <meta
          name="description"
          content="Explore the Blaze Publishers portfolio: beautifully crafted books, elegant design, and premium publishing experiences that inspire readers worldwide."
        />
        <meta
          name="keywords"
          content="Blaze Publishers portfolio, book publishing showcase, premium book design, self publishing USA"
        />
        <meta property="og:title" content="Blaze Publishers Portfolio" />
        <meta
          property="og:description"
          content="See how Blaze Publishers transforms ideas into timeless masterpieces with unmatched creativity and detail."
        />
        <meta property="og:type" content="website" />
      </Head>

      <section
        id="portfolio"
        aria-label="Blaze Publishers portfolio of premium books"
        className="relative py-20 bg-white"
      >
        <div className="relative container mx-auto px-6">
          <div className="grid md:grid-cols-2 items-center gap-12">
            {/* Left Side - Text */}
            <div className="text-left">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: easeInOutCubic }}
                viewport={{ once: true }}
                className="font-inter-tight text-5xl md:text-6xl font-extrabold
                           bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent
                           mb-8 md:mb-10"
              >
                Blaze Publishers
              </motion.h2>

              {/* Rotating description */}
              <div aria-live="polite">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={current}
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="font-inter-tight max-w-xl text-lg text-black leading-relaxed md:leading-loose tracking-normal mt-2 md:mt-3"
                  >
                    {texts[current]}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Feature bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 mt-8">
                <div className="flex items-center gap-4">
                  <img
                    src="/icon1.png"
                    alt="Icon showing print and digital publishing"
                    className="w-10 h-10"
                  />
                  <p className="font-inter-tight text-black">
                    Publish effortlessly in both print and digital formats.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src="/icon2.png"
                    alt="Icon showing reader connection"
                    className="w-10 h-10"
                  />
                  <p className="font-inter-tight text-black">
                    Build a lasting connection with your ideal readers.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src="/icon3.png"
                    alt="Icon showing streamlined distribution"
                    className="w-10 h-10"
                  />
                  <p className="font-inter-tight text-black">
                    Simplify distribution with our streamlined process.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src="/icon4.png"
                    alt="Icon representing premium author branding"
                    className="w-10 h-10"
                  />
                  <p className="font-inter-tight text-black">
                    Establish a powerful, premium author brand identity.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <Link href="/learnmore">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="font-inter-tight px-8 py-3 rounded-xl bg-orange-400 text-black font-semibold tracking-wide
                             shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  Learn More
                </motion.button>
              </Link>
            </div>

            {/* Right Side - Slideshow */}
            <div className="relative w-full flex justify-center">
              <div
                className="relative w-[300px] h-[450px] md:w-[350px] md:h-[500px] overflow-hidden"
                aria-label="Book showcase images"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current}
                    src={`/${images[current]}`}
                    alt={`Featured book design example ${current + 1}`}
                    variants={imageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute w-full h-full object-contain"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

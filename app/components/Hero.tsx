"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  const images = ["/background.png", "/background1.png", "/background2.png"]
  const [current, setCurrent] = useState(0)

  // background slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  // Lines for fade-in animation
  const lines = [
    "We specialize in transforming imagination into beautifully crafted books.",
    "With premium publishing, editing, and marketing services,",
    "every story finds its timeless place."
  ]

  const [visibleLines, setVisibleLines] = useState<number>(0)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setVisibleLines((prev) => prev + 1)
      i++
      if (i >= lines.length) clearInterval(interval)
    }, 1200) // each line fades in after 1.2s
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background with fade */}
      <div className="absolute inset-0">
        <Image
          src={images[current]}
          alt="Hero background"
          fill
          className="object-cover transition-opacity duration-1000 ease-in-out"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Gradient premium heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-400 via-yellow-300 to-green-400 bg-clip-text text-transparent animate-gradient-x transition-all duration-500 hover:tracking-wider">
          Blaze Publisher
        </h1>

        {/* Subheading */}
        <p className="mt-5 font-bold text-lg md:text-xl text-white italic">
          Turning Your Stories Into Timeless Books
        </p>

        {/* Animated text lines */}
        <div className="mt-6 text-base md:text-lg text-white max-w-3xl mx-auto leading-relaxed space-y-2">
          {lines.map((line, idx) => (
            <p
              key={idx}
              className={`transition-opacity duration-1000 ${
                visibleLines > idx ? "opacity-100" : "opacity-0"
              }`}
            >
              {line}
            </p>
          ))}
        </div>

        {/* Glassmorphic buttons */}
        <div className="mt-8 flex justify-center gap-6">
          <Link
            href="/services"
            className="px-6 py-3 rounded-xl text-white font-medium backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg hover:scale-105 hover:bg-white/20 transition"
          >
            Explore Books
          </Link>
          <Link
            href="/publishing"
            className="px-6 py-3 rounded-xl text-white font-medium backdrop-blur-lg bg-orange-500/80 border border-orange-400/40 shadow-lg hover:scale-105 hover:bg-orange-500 transition"
          >
            Publish With Us
          </Link>
        </div>

        {/* Divider line with glow */}
        <div className="mt-6 w-40 h-[2px] mx-auto bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-pulse" />

        {/* Stamps Row */}
        <div className="mt-10 flex justify-center gap-6">
          {["/stamp.png", "/stamp1.png", "/stamp2.png"].map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`Stamp ${idx}`}
              width={80}
              height={80}
              className="rounded-full object-contain hover:scale-110 transition-transform duration-300 hover:drop-shadow-[0_0_15px_rgba(255,165,0,0.7)]"
            />
          ))}
        </div>
      </div>

      {/* Gradient Animation CSS */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
      `}</style>
    </section>
  )
}

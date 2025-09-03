"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Brands() {
  const logos = [
    "/brand1.png",
    "/brand2.png",
    "/brand3.png",
    "/brand4.png",
    "/brand5.png",
    "/brand6.png",
    "/brand7.png",
    "/brand8.png",
  ]

  // Optional: for looping animation
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % logos.length)
    }, 2000) // change logo every 2s
    return () => clearInterval(interval)
  }, [logos.length])

  return (
    <section className="w-full py-16 bg-white">
      {/* Upgraded heading with Inter Tight */}
      <h2 className="font-inter-tight text-center text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-500 via-black to-orange-600 bg-clip-text text-transparent tracking-wide mb-14">
        Our Trusted Brands
      </h2>

      {/* Looping logos in a line */}
      <div className="overflow-hidden">
        <div className="flex animate-marquee space-x-16">
          {logos.concat(logos).map((logo, i) => (
            <Image
              key={i}
              src={logo}
              alt={`Brand logo ${i + 1}`}
              width={200}
              height={120}
              className="object-contain transition duration-300 hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(255,102,0,0.6)]"
            />
          ))}
        </div>
      </div>

      {/* Tailwind animation in globals.css */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 14s linear infinite;
        }
      `}</style>
    </section>
  )
}

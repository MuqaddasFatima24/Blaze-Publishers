"use client"
import Image from "next/image"

export default function Brands() {
  const logos = ["/brand1.png", "/brand2.png", "/brand3.png", "/brand4.png", "/brand5.png"]

  return (
    <section className="w-full py-12 bg-white">
      {/* Upgraded heading */}
      <h2 className="text-center text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-orange-500 via-black to-orange-600 bg-clip-text text-transparent tracking-wide mb-10">
        Our Trusted Brands
      </h2>

      {/* Looping logos in a line */}
      <div className="overflow-hidden">
        <div className="flex animate-marquee space-x-12">
          {logos.concat(logos).map((logo, i) => (
            <Image
              key={i}
              src={logo}
              alt={`Brand logo ${i + 1}`}
              width={150}
              height={80}
              className="object-contain transition duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(255,102,0,0.6)]"
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
          animation: marquee 12s linear infinite;
        }
      `}</style>
    </section>
  )
}

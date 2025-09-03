"use client"
import Image from "next/image"
import Link from "next/link"

export default function Detail() {
  return (
    <section className="relative w-full bg-gradient-to-br from-white via-gray-50 to-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Soft glowing backgrounds */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-orange-200/40 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-orange-100/30 rounded-full blur-[120px] animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center z-10">
        
        {/* Left side: Text content */}
        <div className="space-y-8 animate-fadeInLeft">
          {/* Heading now uses Inter Tight */}
          <h2 className="font-inter-tight text-4xl md:text-5xl font-bold leading-tight text-gray-800">
            Unlock{" "}
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent animate-gradient-x">
              Next-Level
            </span>{" "}
            Elegance
          </h2>

          <p className="text-lg text-black leading-relaxed max-w-lg">
            Blaze Publisher empowers creators and businesses with{" "}
            <span className="font-semibold text-gray-800"> refined digital tools </span>
            to publish, manage, and showcase their ideas in a truly premium way. 
            Built with <span className="italic text-orange-500">simplicity</span> and 
            <span className="italic text-gray-800"> precision</span>, 
            it blends timeless elegance with high-tech power to redefine digital publishing.
          </p>

          {/* Elegant Transparent Button */}
          <Link href="/learnmore">
            <button className="relative group px-8 py-3 rounded-full border-2 border-orange-500 text-orange-500 font-semibold shadow-sm overflow-hidden transition-all duration-500 animate-bounce-slow hover:bg-orange-500 hover:text-white">
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </button>
          </Link>
        </div>

        {/* Right side: Clean Image */}
        <div className="relative flex justify-center md:justify-end animate-fadeInRight">
          <Image
            src="/book.png"
            alt="Book Detail"
            width={450}
            height={450}
            className="shadow-2xl animate-float"
          />
        </div>
      </div>

      {/* Subtle orange grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#fbbf24_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] bg-[size:80px_80px] opacity-5"></div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-fadeInLeft { animation: fadeInLeft 1s ease forwards; }
        .animate-fadeInRight { animation: fadeInRight 1s ease forwards; }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 6s ease infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
      `}</style>
    </section>
  )
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LearnMorePage() {
  return (
    <main className="bg-white text-black min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <Image
          src="/learnmore.png"
          alt="Learn More Background"
          fill
          className="object-cover"
          priority
        />
        {/* Black overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative font-inter-tight text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg z-10"
        >
          Learn More About{" "}
          <span className="text-orange-400">Blaze Publishers</span>
        </motion.h1>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg border border-orange-300"
        >
          <h2 className="font-inter-tight text-2xl font-bold text-orange-500 mb-4">
            Ebook Writing
          </h2>
          <p className="text-gray-700">
            Transform your ideas into compelling ebooks with our expert writing
            team. We specialize in creating engaging, polished, and market-ready
            content.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg border border-orange-300"
        >
          <h2 className="font-inter-tight text-2xl font-bold text-orange-500 mb-4">
            Editing
          </h2>
          <p className="text-gray-700">
            Our professional editors refine your manuscripts to perfection,
            ensuring clarity, flow, and error-free content with a premium finish.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg border border-orange-300"
        >
          <h2 className="font-inter-tight text-2xl font-bold text-orange-500 mb-4">
            Publishing
          </h2>
          <p className="text-gray-700">
            From formatting to distribution, we handle the entire publishing
            process so your ebook reaches global audiences effortlessly.
          </p>
        </motion.div>
      </section>

      {/* Extra Section (Image + Text Split) */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/learnmore1.png"
            alt="Publishing Work"
            width={300}
            height={400}
            className="rounded-2xl"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-5"
        >
          <h2 className="font-inter-tight text-3xl md:text-4xl font-extrabold text-orange-500">
            Why Choose Blaze Publishers?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We combine creativity, precision, and technology to deliver
            outstanding publishing solutions. From concept to distribution, our
            team ensures that your work not only stands out but also reaches the
            right audience with maximum impact.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to empower authors, storytellers, and innovators by
            providing them with top-quality services that make their publishing
            journey smooth, efficient, and successful.
          </p>
        </motion.div>
      </section>

      {/* Call To Action */}
      <section className="text-center py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-inter-tight text-3xl md:text-4xl font-extrabold mb-6">
            Ready to Elevate Your Story?
          </h2>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-2xl bg-orange-500 text-white font-semibold shadow-lg hover:bg-white hover:text-orange-600 hover:border hover:border-orange-500 transition-all duration-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

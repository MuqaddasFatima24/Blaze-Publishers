"use client"
import { motion } from "framer-motion"

export default function Author() {
  return (
    <section
      className="relative w-full py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{
        backgroundImage: "url('/background3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Black overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center md:text-left">
        {/* Heading with Inter Tight */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-inter-tight text-4xl md:text-5xl font-bold text-white mb-8"
        >
          Let’s Get Your Book into Readers’ Hands!
        </motion.h2>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-6 text-white/90 text-lg md:text-xl"
        >
          <p>
            Am I a real writer? Is my story even good enough for others to read?
          </p>
          <p>
            If that question’s been echoing in your mind, it’s just your impostor syndrome. 
            It has silenced far too many voices who had something real to say. But it’s time to change that.
          </p>
          <p>
            At Authors Harbor, we work with new and aspiring book authors every day to create finished books that add value to libraries. 
            Our experienced book publishing experts guide you through writing, editing, and publishing with care. 
            As a trusted book publishing company in the USA, we help you write with your own voice intact and your vision clear.
          </p>
          <p className="text-orange-400 font-semibold">
            Reach Readers Everywhere With Our Amazon Self Publishing Services
          </p>
          <p>
            Are you ready to share your book with the world? Partner with our Amazon book publishing company that knows the correct way to share your book. 
            We’ll guide you through the process and make sure everything from ebook ghostwriting services to publishing is set up for success.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

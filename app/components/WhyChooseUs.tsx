"use client"
import { motion } from "framer-motion"
import { Rocket, Zap, Star } from "lucide-react"
import Head from "next/head"

export default function WhyChooseUs() {
  return (
    <>
      <Head>
        <title>Why Choose Blaze Publishers | Premium Book Publishing Services</title>
        <meta
          name="description"
          content="Discover why authors choose Blaze Publishers. We deliver cutting-edge technology, unmatched performance, and trusted excellence in book publishing and self-publishing services."
        />
        <meta
          name="keywords"
          content="why choose Blaze Publishers, book publishing company USA, self publishing services, cutting edge technology, unmatched performance"
        />
        <meta property="og:title" content="Why Choose Blaze Publishers" />
        <meta
          property="og:description"
          content="Premium publishing solutions with innovation, speed, and reliability. Learn why authors trust Blaze Publishers."
        />
        <meta property="og:type" content="website" />
      </Head>

      <section
        id="why-choose-us"
        aria-label="Reasons to choose Blaze Publishers"
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/background7.png')" }}
      >
        {/* Black overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative container mx-auto px-6 text-center text-white">
          {/* Animated Premium Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-inter-tight text-5xl md:text-6xl font-extrabold tracking-wide mb-8 drop-shadow-lg 
                       transition-all duration-500 hover:scale-105 hover:tracking-wider"
          >
            <span className="hover:text-orange-500 transition-colors duration-500">
              Why Choose
            </span>{" "}
            <span className="text-orange-500">Blaze Publishers</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-200 mb-16"
          >
            Blaze Publishers delivers <strong>premium book publishing services</strong> with a focus
            on innovation, speed, and reliability. Whether you need <strong>Amazon self-publishing</strong>,
            editing, or full-service publishing, we integrate cutting-edge technology and
            expert guidance to help your book reach readers everywhere.
          </motion.p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-10 text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <Rocket className="w-7 h-7 text-white" aria-hidden="true" />
                <h3 className="text-2xl font-semibold text-white">Cutting-Edge Technology</h3>
              </div>
              <p className="text-gray-300">
                We integrate the latest publishing tech and trends to keep your book ahead of the competition.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-7 h-7 text-white" aria-hidden="true" />
                <h3 className="text-2xl font-semibold text-white">Unmatched Performance</h3>
              </div>
              <p className="text-gray-300">
                Our solutions are optimized for speed, scalability, and performance, ensuring a seamless publishing journey.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <Star className="w-7 h-7 text-white" aria-hidden="true" />
                <h3 className="text-2xl font-semibold text-white">Trusted Excellence</h3>
              </div>
              <p className="text-gray-300">
                Authors worldwide trust us for transparent processes and results that speak louder than words.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

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
      </Head>

      <section
        id="why-choose-us"
        aria-label="Reasons to choose Blaze Publishers"
        className="relative py-16 sm:py-20 lg:py-28 bg-cover bg-center"
        style={{ backgroundImage: "url('/background7.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-10 text-center text-white">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-inter-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 sm:mb-8 drop-shadow-lg"
          >
            <span className="text-orange-500">Why Choose</span> Blaze Publishers
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed text-gray-200 mb-12 sm:mb-16"
          >
            Blaze Publishers delivers <strong>premium book publishing services</strong> with a focus
            on innovation, speed, and reliability. Whether you need <strong>Amazon self-publishing</strong>,
            editing, or full-service publishing, we integrate cutting-edge technology and
            expert guidance to help your book reach readers everywhere.
          </motion.p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {/* Card Template */}
            {[
              {
                icon: <Rocket className="w-6 h-6 sm:w-7 sm:h-7 text-orange-400" aria-hidden="true" />,
                title: "Cutting-Edge Technology",
                desc: "We integrate the latest publishing tech and trends to keep your book ahead of the competition."
              },
              {
                icon: <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-orange-400" aria-hidden="true" />,
                title: "Unmatched Performance",
                desc: "Our solutions are optimized for speed, scalability, and performance, ensuring a seamless publishing journey."
              },
              {
                icon: <Star className="w-6 h-6 sm:w-7 sm:h-7 text-orange-400" aria-hidden="true" />,
                title: "Trusted Excellence",
                desc: "Authors worldwide trust us for transparent processes and results that speak louder than words."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="w-full h-full p-5 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 shadow-lg text-left flex flex-col justify-start"
              >
                <div className="flex items-center gap-3 mb-3">
                  {item.icon}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

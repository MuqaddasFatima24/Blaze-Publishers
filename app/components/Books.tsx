"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

export default function Books() {
  return (
    <>
      <Head>
        <title>Discover Inspiring Books | Blaze Publishers</title>
        <meta
          name="description"
          content="Browse Blaze Publishers’ collection of inspiring books. Find knowledge, imagination, and stories that matter—curated for readers who love to dream."
        />
        <meta
          name="keywords"
          content="discover books, inspiring reads, Blaze Publishers collection, knowledge books, imagination stories"
        />
        <meta property="og:title" content="Discover Inspiring Books | Blaze Publishers" />
        <meta
          property="og:description"
          content="Open the door to imagination and knowledge with Blaze Publishers’ handpicked book collection."
        />
        <meta property="og:type" content="website" />
      </Head>

      <section
        id="books"
        aria-label="Discover inspiring books collection"
        className="relative w-full py-28 px-6 md:px-12 lg:px-20 bg-white"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h1 className="font-inter-tight text-5xl md:text-6xl font-bold">
              <span className="text-black">Discover </span>
              <span className="text-orange-500">Books</span>{" "}
              <span className="text-black">That Inspire</span>
            </h1>

            <p className="text-lg text-black leading-relaxed">
              Every book is a <span className="font-semibold">doorway into a new world.</span>
              Whether you’re seeking <span className="font-semibold">knowledge</span>, 
              <span className="font-semibold">inspiration</span>, or 
              <span className="font-semibold">pure imagination</span>, 
              our curated collection offers something for every reader.
            </p>

            <p className="text-lg text-black leading-relaxed font-medium">
              Explore stories that matter, written by authors who 
              <span className="text-orange-500 font-semibold"> dare to dream.</span>
            </p>

            <div className="pt-6">
              <Link
                href="/about"
                className="px-10 py-4 rounded-2xl font-medium text-black border border-orange-400 
                bg-white/30 backdrop-blur-lg shadow-[0_0_25px_rgba(255,165,0,0.4)]
                hover:scale-105 hover:shadow-[0_0_45px_rgba(255,165,0,0.7)] 
                hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out text-lg"
              >
                Explore More
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="/book1.png"
              alt="Stack of inspiring books from Blaze Publishers"
              width={500}
              height={600}
              className="rounded-2xl"
            />
          </motion.div>
        </div>
      </section>
    </>
  )
}

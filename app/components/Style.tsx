"use client";

import { motion } from "framer-motion";
import Head from "next/head";

const rows = [
  ["EBOOKS", "PUBLISHING", "AUTHORS"],
  ["CREATIVE WRITING", "BOOK DESIGN", "READERS"],
  ["STORYTELLING", "DIGITAL LIBRARY", "INSPIRATION"],
  ["KNOWLEDGE", "IMAGINATION", "GROWTH"],
];

export default function Style() {
  const speeds = [18, 22, 20, 25];

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        <title>Creative Book Publishing Styles & Inspiration</title>
        <meta
          name="description"
          content="Explore trending publishing styles: ebooks, storytelling, digital libraries, and creative writing inspiration for authors and readers."
        />
        <meta
          name="keywords"
          content="ebooks, publishing, authors, creative writing, book design, storytelling, digital library, inspiration"
        />
        <meta property="og:title" content="Creative Book Publishing Styles & Inspiration" />
        <meta
          property="og:description"
          content="Animated showcase of modern book publishing and creative writing trends."
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* ✅ Section with accessible heading */}
      <section
        className="w-full bg-white py-20 overflow-hidden"
        aria-labelledby="publishing-style-heading"
      >
        <h2 id="publishing-style-heading" className="sr-only">
          Book Publishing Styles and Creative Writing Inspiration
        </h2>

        {rows.map((words, index) => (
          <motion.div
            key={index}
            className="flex whitespace-nowrap"
            initial={{ x: index % 2 === 0 ? "0%" : "-50%" }}
            animate={{ x: index % 2 === 0 ? "-50%" : "0%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: speeds[index],
            }}
            aria-hidden="true" // decorative animation
          >
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="flex items-center text-black text-6xl md:text-8xl font-light tracking-wide uppercase"
              >
                {words.map((word, j) => (
                  <span
                    key={j}
                    className={`mx-8 ${
                      j % 2 === 1 ? "italic text-gray-700" : "font-bold text-black"
                    }`}
                  >
                    {word}
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        ))}
      </section>
    </>
  );
}

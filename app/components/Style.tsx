"use client";

import { motion } from "framer-motion";

const rows = [
  ["EBOOKS", "PUBLISHING", "AUTHORS"],
  ["CREATIVE WRITING", "BOOK DESIGN", "READERS"],
  ["STORYTELLING", "DIGITAL LIBRARY", "INSPIRATION"],
  ["KNOWLEDGE", "IMAGINATION", "GROWTH"],
];

export default function Style() {
  const speeds = [18, 22, 20, 25]; // Different scroll speeds

  return (
    <section className="w-full bg-white py-20 overflow-hidden">
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
                    j % 2 === 1
                      ? "italic text-gray-700"
                      : "font-bold text-black"
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
  );
}

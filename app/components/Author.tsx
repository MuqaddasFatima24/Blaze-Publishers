"use client"
import { motion } from "framer-motion"
import Head from "next/head"

export default function Author() {
  return (
    <>
      <Head>
        <title>Amazon Self-Publishing & Book Publishing Services | Blaze Publishers USA</title>
        <meta
          name="description"
          content="Blaze Publishers helps new and aspiring authors write, edit, and publish books worldwide. Expert Amazon self-publishing services to reach readers everywhere."
        />
        <meta
          name="keywords"
          content="book publishing, Amazon self publishing, ebook ghostwriting, Blaze Publishers USA, publish my book"
        />
        <meta property="og:title" content="Amazon Self-Publishing & Book Publishing Services" />
        <meta
          property="og:description"
          content="Partner with Blaze Publishers to turn your story into a published book that reaches readers globally."
        />
        <meta property="og:type" content="website" />
      </Head>

      <section
        id="author-services"
        aria-label="Amazon self-publishing and book publishing services section"
        className="relative w-full py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
        style={{
          backgroundImage: "url('/background3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Black overlay for readability */}
        <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="font-inter-tight text-4xl md:text-5xl font-bold text-white mb-8"
          >
            Let’s Get Your Book into Readers’ Hands!
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6 text-white/90 text-lg md:text-xl"
          >
            <p>
              Wondering, “Am I a real writer? Is my story even good enough for others to read?”
              That’s impostor syndrome talking—don’t let it silence your voice.
            </p>
            <p>
              At <strong>Blaze Publishers</strong>, we help new and aspiring authors create finished
              books that enrich libraries and inspire readers. Our experienced editors and publishing
              experts guide you through every step while keeping your unique voice intact.
            </p>
            <p className="text-orange-400 font-semibold">
              Reach Readers Everywhere With Our Amazon Self-Publishing Services
            </p>
            <p>
              Ready to share your book with the world? Partner with our trusted Amazon book
              publishing team. From ebook ghostwriting to final publication, we make sure your story
              is set up for success.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

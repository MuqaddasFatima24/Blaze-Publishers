"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// If you want stricter typing:
type Service = {
  title: string;
  desc: string;
  img: string;
};

// 12 services with images book7.png -> book18.png (no icons on image)
const services: Service[] = [
  {
    title: "Self-Publishing Support",
    desc: "Full control, zero chaos. We guide ISBNs, setup & distribution while you keep your vision intact.",
    img: "/book7.png",
  },
  {
    title: "Manuscript Editing & Proofreading",
    desc: "Polish for flow, clarity and impact—so your story reads like you intended.",
    img: "/book8.png",
  },
  {
    title: "Book Cover Design",
    desc: "Genre-fit covers that stand out on shelves and screens—crafted to sell the click.",
    img: "/book9.png",
  },
  {
    title: "Interior Formatting & Typesetting",
    desc: "Precision layouts for print and eBook so reading feels effortless.",
    img: "/book10.png",
  },
  {
    title: "ISBN & Distribution Setup",
    desc: "We register, configure, and distribute globally without the paperwork pain.",
    img: "/book11.png",
  },
  {
    title: "Print-on-Demand & eBook",
    desc: "Seamless POD + digital on major platforms—reach readers everywhere.",
    img: "/book12.png",
  },
  {
    title: "Audiobook Production",
    desc: "Professional voice, clean edits, platform-ready masters.",
    img: "/book13.png",
  },
  {
    title: "Author Website & Branding",
    desc: "A crisp site and brand system that converts visitors to readers.",
    img: "/book14.png",
  },
  {
    title: "Marketing & Promotion",
    desc: "Launch plans, ads, and outreach that put your book in front of the right readers.",
    img: "/book15.png",
  },
  {
    title: "ARC & Reviews",
    desc: "Advance reader copies and ethical review strategies to build early momentum.",
    img: "/book16.png",
  },
  {
    title: "Retail & Metadata Optimization",
    desc: "Categories, keywords, and metadata tuned to rank and convert.",
    img: "/book17.png",
  },
  {
    title: "Global Distribution",
    desc: "Worldwide print & digital distribution with transparent reporting.",
    img: "/book18.png",
  },
];

const steps = [
  {
    title: "A Chat About Your Story",
    desc: "We start with a relaxed, no-pressure conversation to know your goals, challenges, and what kind of book you want to create.",
    img: "/scott-graham-5fNmWej4tAA-unsplash.jpg",
  },
  {
    title: "Personalized Publishing Plan",
    desc: "Based on your ideas, we create a clear, step-by-step roadmap for your genre, timeline, and level of involvement.",
    img: "/scott-graham-5fNmWej4tAA-unsplash (1).jpg",
  },
  {
    title: "Creative Collaboration",
    desc: "You will work closely with our ghostwriters, editors, and designers who respect your voice and keep it intact.",
    img: "/headway-5QgIuuBxKwM-unsplash.jpg",
  },
  {
    title: "Confident Launch & Beyond",
    desc: "We guide you through publishing and marketing, so your book reaches the right readers and doesn’t get lost in the crowd.",
    img: "/jason-goodman-Oalh2MojUuk-unsplash.jpg",
  },
];

const bookCovers = [
  { img: "/WhatsApp Image 2025-08-31 at 12.20.14 AM.jpeg", name: "Beyond The Horizon" },
  { img: "/WhatsApp Image 2025-08-31 at 12.17.01 AM.jpeg", name: "The Hidden Chapters" },
  { img: "/WhatsApp Image 2025-08-31 at 12.17.17 AM.jpeg", name: "Echoes of Time" },
  { img: "/WhatsApp Image 2025-08-31 at 12.17.34 AM.jpeg", name: "Unwritten Dreams" },
  { img: "/WhatsApp Image 2025-08-31 at 12.19.55 AM.jpeg", name: "Shadows of Ink" },
  { img: "/WhatsApp Image 2025-08-31 at 12.24.26 AM.jpeg", name: "The Final Draft" },
  { img: "/WhatsApp Image 2025-08-31 at 12.22.10 AM.jpeg", name: "Waves of Imagination" },
  { img: "/WhatsApp Image 2025-08-31 at 12.21.56 AM.jpeg", name: "Fragments of Light" },
  { img: "/WhatsApp Image 2025-08-31 at 12.21.19 AM.jpeg", name: "The Silent Quill" },
  { img: "/WhatsApp Image 2025-08-31 at 12.20.38 AM.jpeg", name: "Inkbound Journeys" },
];

export default function PublishingSection() {
  return (
    <section className="flex flex-col w-full">
      {/* Hero */}
      <section
        className="relative w-full min-h-[60vh] flex items-center justify-center text-center px-6 py-32 md:py-48 bg-cover bg-center"
        style={{ backgroundImage: "url('/background.avif')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl text-white"
        >
          {/* Inter Tight on the big heading */}
          <h1 className="font-inter-tight text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Book Publishing
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed drop-shadow-md">
            From idea to bestseller, we help authors bring their stories to life with clarity, creativity, and confidence.
          </p>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="w-full bg-gradient-to-b from-white to-orange-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Inter Tight on h2 */}
            <h2 className="font-inter-tight text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
              You are One Step Away from Becoming a Published Author
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-4 leading-relaxed">
              Transform your manuscript — or even just your ideas — into a book readers will love. At{" "}
              <span className="font-semibold">Blaze Publishers</span>, we guide you through every step: ghostwriting, editing, cover design, ISBNs, global distribution, and marketing.
            </p>
            <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
              We handle the technical work so you can focus on your story. If you have been waiting for the perfect moment to publish your book, this is it. Let us bring your story to life together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full font-semibold text-white shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
            >
              Get Started
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="/book6.png"
              alt="Creative book publishing"
              width={500}
              height={500}
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Services — 12 image cards with glass hover (no icons) */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-inter-tight text-3xl md:text-4xl font-extrabold text-gray-800"
          >
            What We Handle <span className="text-orange-600">(So You Do Not Have To)</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, idx) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
            >
              {/* Card background image */}
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Glass overlay (becomes more “glass” on hover) */}
              <div
                className="
                  pointer-events-none
                  absolute inset-0 flex items-end
                  bg-gradient-to-t from-black/60 via-black/30 to-transparent
                  opacity-100
                  transition-all duration-500
                  group-hover:bg-white/10 group-hover:backdrop-blur-md group-hover:opacity-100
                "
              />

              {/* Text content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <h3 className="font-inter-tight text-xl font-bold text-white drop-shadow-sm">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/90 group-hover:text-white">
                  {service.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="w-full bg-gradient-to-b from-orange-50 to-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-inter-tight text-3xl md:text-4xl font-extrabold text-gray-800"
          >
            Here is <span className="text-orange-600">How We Help Writers</span> Find Their Way
          </motion.h2>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-orange-200 transform -translate-x-1/2 hidden md:block" />
          <div className="space-y-16">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className={`md:flex items-center gap-10 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="md:w-1/2 w-full">
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src={step.img}
                      alt={step.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 w-full mt-6 md:mt-0">
                  <h3 className="font-inter-tight text-xl md:text-2xl font-bold text-gray-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Published Books Showcase */}
      <section className="w-full bg-[#111] py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-inter-tight text-3xl md:text-5xl font-extrabold text-white"
          >
            Our Published Masterpieces
          </motion.h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A curated collection of books we have proudly brought to life — each crafted with passion, creativity, and precision.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {bookCovers.map((book, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden group shadow-lg bg-gray-900"
            >
              <div className="aspect-[2/3] w-full overflow-hidden">
                <Image
                  src={book.img}
                  alt={book.name}
                  width={400}
                  height={600}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <h3 className="font-inter-tight text-white font-semibold text-lg">{book.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
}

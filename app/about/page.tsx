"use client";
import Head from "next/head";
import {
  PhoneCall,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Star,
  Plus,
  Minus,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/* --- Data --- */
const carouselItems = [
  {
    title: "Professional Editing",
    description:
      "Our expert editors polish your manuscript to industry standards, ensuring clarity, consistency, and quality.",
    image: "/hands-3456365_1280.jpg",
  },
  {
    title: "Creative Book Design",
    description:
      "From covers to layouts, our design team makes your book visually stunning and reader-friendly.",
    image: "/carusel1.avif",
  },
  {
    title: "Global Distribution",
    description:
      "We connect your book to leading online retailers and bookstores worldwide for maximum reach.",
    image: "/global-distribution.avif",
  },
  {
    title: "Marketing & Promotion",
    description:
      "Custom marketing campaigns to help your book get the attention it deserves.",
    image: "/book-3531412_1280.jpg",
  },
];

const testimonials = [
  { name: "Amelia Rhodes", role: "Author of “Golden Threads”", feedback: "From draft to publication, their guidance was thoughtful and precise. I felt supported at every step.", image: "/client1.png" },
  { name: "Natalie Grant", role: "Debut Novelist", feedback: "Their editorial feedback was invaluable. My story reads cleaner and stronger than I imagined.", image: "/client2.png" },
  { name: "Daniel Hayes", role: "Author of “Silent Harbor”", feedback: "Design, formatting, and distribution were seamless. They made a complex process feel easy.", image: "/client3.png" },
  { name: "Sophia Bennett", role: "Children’s Book Author", feedback: "Beautiful layouts and a cover that truly pops. The team nailed the tone for young readers.", image: "/client4.png" },
  { name: "Liam Carter", role: "Memoirist", feedback: "Professional, responsive, and creative. My memoir finally feels like a real book.", image: "/client5.png" },
  { name: "Olivia Chen", role: "Poet", feedback: "They understood my voice and preserved it through careful edits. Gorgeous print quality too.", image: "/client6.png" },
  { name: "Isabella Flores", role: "Non-fiction Author", feedback: "Clear timelines, transparent communication, and a beautiful final product. Highly recommend.", image: "/client7.png" },
  { name: "Ethan Brooks", role: "Fantasy Author", feedback: "The marketing kickoff gave my launch real momentum. Couldn’t ask for a better partner.", image: "/client8.png" },
];

const faqs = [
  { question: "What services do you provide?", answer: "We offer editing, book design, global distribution, marketing, and more to make your publishing journey seamless." },
  { question: "Do you help first-time authors?", answer: "Absolutely! We provide complete guidance for first-time authors to ensure their publishing process is smooth and enjoyable." },
  { question: "Can you design custom book covers?", answer: "Yes, our design team specializes in creating unique, eye-catching book covers tailored to your story and genre." },
  { question: "How long does publishing take?", answer: "The timeline depends on the services required, but on average it takes 2–4 months from editing to publication." },
  { question: "Do you provide marketing support?", answer: "Yes, we run targeted marketing campaigns to promote your book across online platforms and bookstores." },
  { question: "Where will my book be available?", answer: "We distribute globally, including Amazon, Barnes & Noble, and many other leading retailers." },
  { question: "Can I retain the rights to my book?", answer: "Yes, you maintain complete ownership and rights over your book." },
];

export default function AboutPage() {
  const [current, setCurrent] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const prevSlide = () =>
    setCurrent((p) => (p === 0 ? carouselItems.length - 1 : p - 1));
  const nextSlide = () =>
    setCurrent((p) => (p === carouselItems.length - 1 ? 0 : p + 1));

  // Auto-slide
  useEffect(() => {
    const t = setInterval(nextSlide, 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* ✅ Page-level SEO */}
      <Head>
        <title>About Blaze Publishers – Professional Book Publishing Services</title>
        <meta
          name="description"
          content="Learn about Blaze Publishers: expert editing, creative book design, global distribution, and marketing services that help authors succeed."
        />
        <meta
          name="keywords"
          content="Blaze Publishers, about, book publishing, editing, design, global distribution, marketing"
        />
        <meta property="og:title" content="About Blaze Publishers" />
        <meta
          property="og:description"
          content="Professional book publishing company helping authors worldwide with editing, design, and marketing."
        />
        <meta property="og:type" content="website" />
      </Head>

      <div className="flex flex-col">
        {/* HERO */}
        <section
          className="relative min-h-screen flex flex-col items-center justify-center text-center text-white px-6 pt-24 mb-3"
          style={{
            backgroundImage: "url('/blazepublisher.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-labelledby="about-heading"
        >
          <div className="absolute inset-0 bg-black/60"></div>

          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 max-w-2xl"
          >
            <h1
              id="about-heading"
              className="font-inter-tight text-5xl font-extrabold mb-6 text-white drop-shadow-lg"
            >
              About Blaze Publisher
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-gray-200">
              We are a professional book publishing company, providing both
              first-time and experienced authors with a complete solution to
              bring their creative literary works to the market.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" aria-label="Book a consultant">
                <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-700 transition shadow-lg">
                  <Calendar size={20} /> Book a Consultant
                </button>
              </Link>
              <Link href="/contact" aria-label="Call us now">
                <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-orange-600 font-semibold hover:bg-gray-100 transition shadow-lg">
                  <PhoneCall size={20} className="text-orange-600" /> Call Us Now
                </button>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* CAROUSEL */}
        <section
          className="w-full bg-gradient-to-b from-white to-orange-50 py-20 px-6 flex flex-col items-center text-center"
          aria-labelledby="services-heading"
        >
          <motion.h2
            id="services-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-inter-tight text-4xl font-bold mb-12 text-gray-800"
          >
            Here’s How We Help Writers Find Their Voice
          </motion.h2>

          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl w-full"
          >
            <div className="w-full flex flex-col md:flex-row items-center gap-8 bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-orange-100">
              <Image
                src={carouselItems[current].image}
                alt={carouselItems[current].title}
                width={600}
                height={400}
                unoptimized
                className="w-full md:w-1/2 rounded-2xl object-cover shadow-lg h-64 md:h-96"
              />
              <div className="flex-1 text-left">
                <h3 className="font-inter-tight text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {carouselItems[current].title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {carouselItems[current].description}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-3 mt-6 justify-center">
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition shadow-md"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition shadow-md"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="flex justify-center mt-4 gap-2">
              {carouselItems.map((_, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                    index === current ? "bg-orange-600 w-6" : "bg-orange-300"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </section>

        {/* TESTIMONIALS */}
        <section
          className="w-full bg-white py-20 px-6"
          aria-labelledby="testimonials-heading"
        >
          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-inter-tight text-4xl font-bold mb-6 text-gray-800 text-center"
          >
            See Why Authors Love Working With Us
          </motion.h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto mt-12">
            {testimonials.map((t, index) => (
              <motion.figure
                key={index}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-orange-50 rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
              >
                <Image
                  src={t.image}
                  alt={`Photo of ${t.name}`}
                  width={100}
                  height={100}
                  unoptimized
                  className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-white shadow-md"
                />
                <figcaption>
                  <h3 className="font-inter-tight text-xl font-semibold text-gray-800">
                    {t.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{t.role}</p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    “{t.feedback}”
                  </p>
                </figcaption>
                <div className="flex text-orange-500" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
              </motion.figure>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section
          className="w-full bg-orange-50 py-20 px-6"
          aria-labelledby="faq-heading"
        >
          <div className="max-w-4xl mx-auto">
            <h2
              id="faq-heading"
              className="font-inter-tight text-4xl font-bold mb-8 text-center text-gray-800"
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
                >
                  <button
                    className="flex justify-between items-center w-full text-left"
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                    aria-expanded={openFaq === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="font-semibold text-gray-800">
                      {faq.question}
                    </span>
                    {openFaq === index ? (
                      <Minus className="text-orange-600" size={20} />
                    ) : (
                      <Plus className="text-orange-600" size={20} />
                    )}
                  </button>
                  {openFaq === index && (
                    <motion.p
                      id={`faq-answer-${index}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 text-gray-600 text-sm leading-relaxed"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

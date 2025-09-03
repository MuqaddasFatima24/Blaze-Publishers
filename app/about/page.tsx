"use client";
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

// 8 clients, images client1.png -> client8.png with gender-based names
const testimonials = [
  {
    name: "Amelia Rhodes", // client1 - female
    role: "Author of “Golden Threads”",
    feedback:
      "From draft to publication, their guidance was thoughtful and precise. I felt supported at every step.",
    image: "/client1.png",
  },
  {
    name: "Natalie Grant", // client2 - female
    role: "Debut Novelist",
    feedback:
      "Their editorial feedback was invaluable. My story reads cleaner and stronger than I imagined.",
    image: "/client2.png",
  },
  {
    name: "Daniel Hayes", // client3 - male
    role: "Author of “Silent Harbor”",
    feedback:
      "Design, formatting, and distribution were seamless. They made a complex process feel easy.",
    image: "/client3.png",
  },
  {
    name: "Sophia Bennett", // client4 - female
    role: "Children’s Book Author",
    feedback:
      "Beautiful layouts and a cover that truly pops. The team nailed the tone for young readers.",
    image: "/client4.png",
  },
  {
    name: "Liam Carter", // client5 - male
    role: "Memoirist",
    feedback:
      "Professional, responsive, and creative. My memoir finally feels like a real book.",
    image: "/client5.png",
  },
  {
    name: "Olivia Chen", // client6 - female
    role: "Poet",
    feedback:
      "They understood my voice and preserved it through careful edits. Gorgeous print quality too.",
    image: "/client6.png",
  },
  {
    name: "Isabella Flores", // client7 - female
    role: "Non-fiction Author",
    feedback:
      "Clear timelines, transparent communication, and a beautiful final product. Highly recommend.",
    image: "/client7.png",
  },
  {
    name: "Ethan Brooks", // client8 - male
    role: "Fantasy Author",
    feedback:
      "The marketing kickoff gave my launch real momentum. Couldn’t ask for a better partner.",
    image: "/client8.png",
  },
];

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We offer editing, book design, global distribution, marketing, and more to make your publishing journey seamless.",
  },
  {
    question: "Do you help first-time authors?",
    answer:
      "Absolutely! We provide complete guidance for first-time authors to ensure their publishing process is smooth and enjoyable.",
  },
  {
    question: "Can you design custom book covers?",
    answer:
      "Yes, our design team specializes in creating unique, eye-catching book covers tailored to your story and genre.",
  },
  {
    question: "How long does publishing take?",
    answer:
      "The timeline depends on the services required, but on average it takes 2–4 months from editing to publication.",
  },
  {
    question: "Do you provide marketing support?",
    answer:
      "Yes, we run targeted marketing campaigns to promote your book across online platforms and bookstores.",
  },
  {
    question: "Where will my book be available?",
    answer:
      "We distribute globally, including Amazon, Barnes & Noble, and many other leading retailers.",
  },
  {
    question: "Can I retain the rights to my book?",
    answer: "Yes, you maintain complete ownership and rights over your book.",
  },
];

export default function AboutPage() {
  const [current, setCurrent] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === carouselItems.length - 1 ? 0 : prev + 1
    );
  };

  // Auto-slide every 6 sec
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === carouselItems.length - 1 ? 0 : prev + 1
      );
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center text-white px-6 pt-24 mb-3"
        style={{
          backgroundImage: "url('/blazepublisher.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-2xl"
        >
          <h1 className="font-inter-tight text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
            About Blaze Publisher
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-8 text-lg leading-relaxed text-gray-200"
          >
            We are a professional book publishing company, providing both
            first-time and experienced authors with a complete solution to bring
            their creative literary works to the market.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-700 transition shadow-lg">
                <Calendar size={20} /> Book a Consultant
              </button>
            </Link>
            <Link href="/contact">
              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-orange-600 font-semibold hover:bg-gray-100 transition shadow-lg">
                <PhoneCall size={20} className="text-orange-600" /> Call Us Now
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Carousel Section */}
      <section className="w-full bg-gradient-to-b from-white to-orange-50 py-20 px-6 flex flex-col items-center text-center">
        <motion.h2
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
              className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition shadow-md"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
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
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  index === current ? "bg-orange-600 w-6" : "bg-orange-300"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-white py-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-inter-tight text-4xl font-bold mb-6 text-gray-800 text-center"
        >
          See Why Authors Love Working With Us
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto mt-12"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 40, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              transition={{ duration: 0.6 }}
              className="bg-orange-50 rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <Image
                src={t.image}
                alt={t.name}
                width={100}
                height={100}
                unoptimized
                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-white shadow-md"
              />
              <h3 className="font-inter-tight text-xl font-semibold text-gray-800">
                {t.name}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{t.role}</p>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                “{t.feedback}”
              </p>
              <div className="flex text-orange-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-orange-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-inter-tight text-4xl font-bold mb-8 text-center text-gray-800">
            Frequently Asked Questions
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { y: 30, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
              >
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}

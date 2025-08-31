"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const services = [
  {
    title: "Writing Services",
    description:
      "Professional writing solutions tailored to your needs, from ghostwriting to storytelling.",
    image:
      "/book-1.jpg",
    subServices: [
      "Ghost Writing",
      "Children Book",
      "Narrative Writing",
      "Novel Writing",
      "E-Book Writing",
      "Story Writing",
    ],
  },
  {
    title: "Book Editing",
    description:
      "Enhance your manuscript with our expert editing, design, and publishing services.",
    image:
      "/book-2.jpg",
    subServices: [
      "Book Illustration",
      "Children Book Illustration",
      "Children Book Printing",
      "Book Editing",
      "Book Cover Design",
      "Book Publishing",
    ],
  },
  {
    title: "Other Services",
    description:
      "Additional creative services to support your author journey and boost visibility.",
    image:
      "/book-3.jpg",
    subServices: [
      "Book Marketing",
      "Book Review",
      "Author Website Design",
      "Book Audio",
      "Book Promotion",
    ],
  },
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  description: string;
};

export default function ServicesPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    description: "",
  });

  const allServices = services.flatMap((s) => s.subServices);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
            Our Services
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
            From writing to publishing and beyond, we provide comprehensive services to bring your book to life.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-20 px-6 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700 text-left">
                    {service.subServices.map((sub, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 bg-orange-50 rounded-lg px-3 py-2 hover:bg-orange-100 transition"
                      >
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-white via-orange-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12 border border-orange-100"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800"
          >
            Book an Appointment
          </motion.h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Service
              </label>
              <select
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="">Select a service</option>
                {allServices.map((service, i) => (
                  <option key={i} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Preferred Time
              </label>
              <input
                type="time"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
                placeholder="Tell us a bit about your project..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            <div className="md:col-span-2 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
              >
                Submit Appointment
              </motion.button>
            </div>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
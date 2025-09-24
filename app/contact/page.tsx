"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  description: string;
}

// ⏰ Utility: Convert 24h (HH:mm) → 12h with AM/PM
function formatTimeTo12Hour(time: string) {
  if (!time) return "";
  const [hour, minute] = time.split(":").map(Number);
  const ampm = hour >= 12 ? "PM" : "AM";
  const adjustedHour = hour % 12 || 12;
  return `${adjustedHour}:${minute.toString().padStart(2, "0")} ${ampm}`;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const services = [
    "Ghost Writing",
    "Book Publishing",
    "Book Editing",
    "Cover Design",
    "Book Marketing",
  ];

  // ⏱️ Auto-hide message after 5 sec
  useEffect(() => {
    if (status !== "idle") {
      const timer = setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (status !== "idle") {
      setStatus("idle");
      setMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      // 🕒 Convert time before sending
      const formattedData = {
        ...formData,
        time: formatTimeTo12Hour(formData.time),
      };

      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedData),
      });

      if (!res.ok) throw new Error("Network response was not ok");

      // ✅ Facebook Pixel Lead event fire
      // Define fbq type on window
      interface WindowWithFbq extends Window {
        fbq?: (event: string, action: string, data?: Record<string, unknown>) => void;
      }
      const win = window as WindowWithFbq;
      if (typeof window !== "undefined" && win.fbq) {
        win.fbq("track", "Lead", {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
        });
        console.log("📌 Facebook Pixel Lead event fired", formData);
      }

      setStatus("success");
      setMessage("Your appointment request has been submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        service: "",
        description: "",
      });
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative h-screen flex flex-col items-center justify-center text-center px-6"
        style={{
          backgroundImage: "url('/contact.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 px-6"
        >
          <h1 className="font-inter-tight text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Get in Touch With Us
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-white/90">
            Whether you&apos;re an aspiring author or a seasoned writer, we’re
            here to support you at every stage of your publishing journey.
          </p>
        </motion.div>
      </section>

      {/* Illustration + Text Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl shadow-xl"
          >
            <Image
              src="/contact-1.avif"
              alt="Book Appointment Illustration"
              width={600}
              height={400}
              className="w-full h-[300px] md:h-[420px] object-cover rounded-2xl shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="font-inter-tight text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
              Book an Appointment With Our Experts
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-base md:text-lg">
              Schedule a consultation with our publishing specialists. Let us
              help you edit, design, and market your book with confidence.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 bg-gradient-to-r from-white via-orange-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-8 md:p-12 border border-orange-100"
        >
          <h2 className="font-inter-tight text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
            Book an Appointment
          </h2>

          {/* Status message */}
          <AnimatePresence mode="wait">
            {status !== "idle" && (
              <motion.div
                key={status + message}
                initial={{ opacity: 0, y: 6, filter: "blur(2px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -6, filter: "blur(2px)" }}
                transition={{ duration: 0.4 }}
                className={`mb-6 rounded-lg px-4 py-3 text-sm ${
                  status === "success"
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
                role="status"
                aria-live="polite"
              >
                {message}
              </motion.div>
            )}
          </AnimatePresence>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleSubmit}
          >
            {/* Name, Email, Phone */}
            {["name", "email", "phone"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {field === "name"
                    ? "Your Name"
                    : field === "email"
                    ? "Email Address"
                    : "Phone Number"}
                </label>
                <input
                  type={field === "phone" ? "tel" : field}
                  name={field}
                  value={formData[field as keyof FormData]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
                  required
                />
              </div>
            ))}

            {/* Service */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Service
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
                required
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Date & Time */}
            {["date", "time"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred {field === "date" ? "Date" : "Time"}
                </label>
                <input
                  type={field}
                  name={field}
                  value={formData[field as keyof FormData]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
                  required
                />
              </div>
            ))}

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description
              </label>
              <textarea
                name="description"
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
                placeholder="Tell us a bit about your project..."
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 disabled:opacity-70"
              >
                {loading ? "Submitting..." : "Submit Appointment"}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </section>
    </div>
  );
}

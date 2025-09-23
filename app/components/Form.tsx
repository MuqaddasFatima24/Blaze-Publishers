"use client";

import { useState, useEffect, type FormEvent, type ChangeEvent } from "react";
import { motion, AnimatePresence, type Variants, type Transition } from "framer-motion";

const services = [
  "Book Publishing",
  "Editing & Proofreading",
  "Cover Design",
  "Marketing & Distribution",
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  description: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  date: "",
  time: "",
  description: "",
};

// ⏰ Utility: Convert 24h (HH:mm) → 12h with AM/PM
function formatTimeTo12Hour(time: string) {
  if (!time) return "";
  const [hour, minute] = time.split(":").map(Number);
  const ampm = hour >= 12 ? "PM" : "AM";
  const adjustedHour = hour % 12 || 12;
  return `${adjustedHour}:${minute.toString().padStart(2, "0")} ${ampm}`;
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const easeInOutCubic: Transition["ease"] = [0.42, 0, 0.58, 1];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeInOutCubic },
    },
  };

  // ⏱️ Auto-hide status after 5s
  useEffect(() => {
    if (status !== "idle") {
      const timer = setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const onChange =
    (key: keyof FormData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormData((prev) => ({ ...prev, [key]: e.target.value }));
      if (status !== "idle") {
        setStatus("idle");
        setMessage("");
      }
    };

  const validate = () => {
    if (!formData.name.trim()) return "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return "Please enter a valid email.";
    if (!formData.phone.trim()) return "Please enter your phone number.";
    if (!formData.service) return "Please choose a service.";
    if (!formData.date) return "Please choose a preferred date.";
    if (!formData.time) return "Please choose a preferred time.";
    return null;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      setStatus("error");
      setMessage(error);
      return;
    }

    try {
      setLoading(true);

      // 🕒 Convert time to AM/PM before sending
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

      setStatus("success");
      setMessage("Your appointment request has been submitted. We’ll get back to you soon!");
      setFormData(initialForm);
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="book-appointment"
      className="py-20 px-6 bg-gradient-to-r from-white via-orange-50 to-white"
      aria-labelledby="appointment-heading"
    >
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-8 md:p-12 border border-orange-100"
      >
        <h2
          id="appointment-heading"
          className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 font-inter-tight"
        >
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
              transition={{ duration: 0.4, ease: easeInOutCubic }}
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
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          aria-busy={loading}
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
              placeholder="Enter your name"
              value={formData.name}
              onChange={onChange("name")}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
              placeholder="Enter your email"
              value={formData.email}
              onChange={onChange("email")}
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={onChange("phone")}
              required
            />
          </div>

          {/* Service */}
          <div>
            <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
              Service
            </label>
            <select
              id="service"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
              value={formData.service}
              onChange={onChange("service")}
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

          {/* Date */}
          <div>
            <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
              Preferred Date
            </label>
            <input
              id="date"
              type="date"
              min={new Date().toISOString().split("T")[0]}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
              value={formData.date}
              onChange={onChange("date")}
              required
            />
          </div>

          {/* Time */}
          <div>
            <label htmlFor="time" className="block text-sm font-semibold text-gray-700 mb-2">
              Preferred Time
            </label>
            <input
              id="time"
              type="time"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
              value={formData.time}
              onChange={onChange("time")}
              required
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
              placeholder="Tell us a bit about your project..."
              value={formData.description}
              onChange={onChange("description")}
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300
                hover:from-orange-600 hover:to-orange-700 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit Appointment"}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}

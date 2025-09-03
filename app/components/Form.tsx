"use client"

import { useState, type FormEvent, type ChangeEvent } from "react"
import { motion, AnimatePresence, type Variants, type Transition } from "framer-motion"

// Adjust these to your actual services
const services = [
  "Book Publishing",
  "Editing & Proofreading",
  "Cover Design",
  "Marketing & Distribution",
]

type FormData = {
  name: string
  email: string
  phone: string
  service: string
  date: string
  time: string
  description: string
  company?: string // honeypot
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  date: "",
  time: "",
  description: "",
  company: "", // honeypot (bots often fill this)
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>(initialForm)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [message, setMessage] = useState<string>("")

  // Framer Motion typesafe easings (avoid plain string eases in TS)
  const easeInOutCubic: Transition["ease"] = [0.42, 0, 0.58, 1]

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeInOutCubic },
    },
  }

  const onChange =
    (key: keyof FormData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormData((prev) => ({ ...prev, [key]: e.target.value }))
      if (status !== "idle") {
        setStatus("idle")
        setMessage("")
      }
    }

  const validate = () => {
    if (!formData.name.trim()) return "Please enter your name."
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return "Please enter a valid email."
    if (!formData.phone.trim()) return "Please enter your phone number."
    if (!formData.service) return "Please choose a service."
    if (!formData.date) return "Please choose a preferred date."
    if (!formData.time) return "Please choose a preferred time."
    return null
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Honeypot: if filled, treat as spam silently
    if (formData.company && formData.company.length > 0) {
      setStatus("success")
      setMessage("Thanks! We’ll be in touch shortly.")
      setFormData(initialForm)
      return
    }

    const error = validate()
    if (error) {
      setStatus("error")
      setMessage(error)
      return
    }

    try {
      setLoading(true)
      // TODO: implement your API route at /api/appointments
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error("Network response was not ok")

      setStatus("success")
      setMessage("Your appointment request has been submitted. We’ll get back to you soon!")
      setFormData(initialForm)
    } catch (err) {
      setStatus("error")
      setMessage("Something went wrong. Please try again or contact us directly.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-white via-orange-50 to-white">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-8 md:p-12 border border-orange-100"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 font-inter-tight">
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

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Honeypot (hidden) */}
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={onChange("company")}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
              placeholder="Enter your name"
              value={formData.name}
              onChange={onChange("name")}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
              placeholder="Enter your email"
              value={formData.email}
              onChange={onChange("email")}
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={onChange("phone")}
              required
            />
          </div>

          {/* Service */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Service</label>
            <select
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
            <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date</label>
            <input
              type="date"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
              value={formData.date}
              onChange={onChange("date")}
              required
            />
          </div>

          {/* Time */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Time</label>
            <input
              type="time"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
              value={formData.time}
              onChange={onChange("time")}
              required
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
            <textarea
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
              className={`bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300
                hover:from-orange-600 hover:to-orange-700 disabled:opacity-70 disabled:cursor-not-allowed`}
            >
              {loading ? "Submitting..." : "Submit Appointment"}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  )
}

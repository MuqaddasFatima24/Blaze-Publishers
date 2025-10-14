"use client"
import { useEffect, useState } from "react"
import type { ChangeEvent, FormEvent } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  BookOpenCheck,
  Sparkle,
  Rocket,
  PenLine,
  Users,
  Palette,
  FileEdit,
  Medal,
  ShieldCheck,
  Star,
} from "lucide-react"

interface FormData {
  name: string
  email: string
  phone: string
  date: string
  time: string
  service: string
  description: string
}

interface WindowWithFbq extends Window {
  fbq?: (event: string, action: string, data?: Record<string, unknown>) => void
}

const services = [
  {
    title: "Illustrations That Spark Imagination",
    copy: "Hand-crafted art direction and scene compositions tailored to young readers.",
    icon: Palette,
  },
  {
    title: "Story Writing & Development",
    copy: "Collaborative storytelling that balances educational value with engaging adventures.",
    icon: PenLine,
  },
  {
    title: "Editing & Proofreading",
    copy: "Developmental edits, sensitivity reviews, and copy edits to polish every page.",
    icon: FileEdit,
  },
  {
    title: "Author Coaching",
    copy: "Dedicated coaches help shape character arcs, pacing, and series continuity.",
    icon: Users,
  },
  {
    title: "Book Formatting",
    copy: "Print and digital layouts optimized for picture books, early readers, and chapter books.",
    icon: BookOpenCheck,
  },
  {
    title: "Publishing Support",
    copy: "ISBN registration, distribution strategy, and launch planning guidance.",
    icon: Rocket,
  },
]

const specializedServices = [
  {
    title: "Illustration Direction",
    copy: "Color palettes, mood boards, and character sheets that keep every panel cohesive.",
  },
  {
    title: "Story Writing & Scriptwriting",
    copy: "Outline-to-manuscript support that ensures strong plot arcs and cliffhanger chapter endings.",
  },
  {
    title: "Editing & Proofreading",
    copy: "Editorial passes that cover developmental, line, and final proofing checks.",
  },
  {
    title: "Book Promotion",
    copy: "Launch assets, educator kits, and social content to grow young reader communities.",
  },
]

const promisePillars = [
  "Child development specialists on every project",
  "Collaborative author workshops and feedback loops",
  "Accessible design compliant with dyslexia-friendly standards",
  "Print and digital file readiness for Amazon KDP, IngramSpark, and more",
  "Marketing launch plan tailored to schools, libraries, and parents",
  "Dedicated success manager from concept through launch",
]

const portfolioItems = [
  { image: "/children-book1.jpg" },
  { image: "/children-book2.jpg" },
  { image: "/children-book3.jpg" },
  { image: "/children-book4.jpg" },
  { image: "/children-book5.jpg" },
  { image: "/children-book6.jpg" },
]

const servicesList = [
  "Ghost Writing",
  "Book Publishing",
  "Book Editing",
  "Cover Design",
  "Book Marketing",
] as const

function formatTimeTo12Hour(time: string) {
  if (!time) return ""
  const [hourString, minuteString] = time.split(":")
  const hour = Number(hourString)
  const minute = Number(minuteString)
  const ampm = hour >= 12 ? "PM" : "AM"
  const adjustedHour = hour % 12 || 12
  return `${adjustedHour}:${minute.toString().padStart(2, "0")} ${ampm}`
}

export default function ChildrenBookPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    description: "",
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (status === "idle") return
    const timer = setTimeout(() => {
      setStatus("idle")
      setMessage("")
    }, 5000)
    return () => clearTimeout(timer)
  }, [status])

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (status !== "idle") {
      setStatus("idle")
      setMessage("")
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setLoading(true)
      const formattedData = {
        ...formData,
        time: formatTimeTo12Hour(formData.time),
      }
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedData),
      })
      if (!res.ok) throw new Error("Request failed")

      if (typeof window !== "undefined") {
        const win = window as WindowWithFbq
        if (typeof win.fbq === "function") {
          win.fbq("track", "Lead", {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
          })
        }
      }

      setStatus("success")
      setMessage("Your appointment request has been submitted successfully!")
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        service: "",
        description: "",
      })
    } catch (error) {
      setStatus("error")
      setMessage("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="bg-[#f6f7fb] text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-slate-50">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-28 md:grid-cols-[1.1fr_0.9fr] md:px-10 lg:gap-16 lg:pt-32">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
              Children&apos;s Book Services
            </span>
            <h1 className="font-inter-tight text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-[52px]">
              Why Choose Our Children&apos;s Book Studio?
            </h1>
            <p className="text-base text-slate-600 sm:text-lg">
              We create joyful, meaningful stories that inspire curiosity and confidence. From imaginative illustration
              to curriculum-aligned storytelling, our team collaborates with authors, educators, and parents to bring
              unforgettable children&apos;s books to life.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Dedicated kid-lit writers and illustrators",
                "Age-appropriate vocabulary guidance",
                "Inclusive character development",
                "Print, ebook, and audio formats ready",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-orange-100 bg-white/80 p-4 shadow-sm"
                >
                  <Sparkle className="mt-1 h-5 w-5 flex-shrink-0 text-orange-500" />
                  <p className="text-sm text-slate-700">{item}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 px-8 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-20px_rgba(234,88,12,0.6)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_46px_-20px_rgba(234,88,12,0.75)]"
              >
                Book a Story Consult
              </Link>
              <span className="text-sm font-medium text-orange-500">Trusted by authors, educators, and publishers</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-[36px] bg-gradient-to-br from-orange-200/40 via-orange-300/25 to-amber-200/45 blur-3xl opacity-70" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/70 p-4 shadow-[0_32px_64px_-38px_rgba(15,23,42,0.45)] backdrop-blur">
              <Image
                src="/hero-children.jpg"
                alt="Colorful children's book illustration scene with kids and balloons"
                width={780}
                height={580}
                className="h-full w-full rounded-[24px] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative -mt-10 pb-16">
        <div className="mx-auto max-w-6xl rounded-[30px] border border-white bg-white px-6 py-14 shadow-[0_24px_60px_-34px_rgba(15,23,42,0.5)] md:px-10">
          <div className="space-y-5 text-center">
            <h2 className="font-inter-tight text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Our Expertise In Children&apos;s Book Services
            </h2>
            <p className="mx-auto max-w-3xl text-base text-slate-600 sm:text-lg">
              From concept to classroom, we deliver end-to-end support that harmonizes compelling storytelling,
              captivating visuals, and publishing precision.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="flex h-full flex-col gap-4 rounded-[26px] border border-slate-100 bg-slate-50/80 p-6 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.65)] transition hover:-translate-y-1 hover:border-orange-200 hover:bg-white"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-inter-tight text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.copy}</p>
                </div>
              )
            })}
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 px-8 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-20px_rgba(234,88,12,0.6)] transition hover:-translate-y-0.5"
            >
              Let&apos;s Craft Your Story
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="space-y-4 text-center">
            <h2 className="font-inter-tight text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Our Specialized Children&apos;s Book Services
            </h2>
            <p className="mx-auto max-w-3xl text-base text-slate-600 sm:text-lg">
              Choose the support you need or let us tailor a full-service package for your publishing goals.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {specializedServices.map((item) => (
              <div
                key={item.title}
                className="rounded-[32px] bg-gradient-to-br from-orange-500 via-amber-500 to-orange-400 p-px shadow-[0_30px_64px_-36px_rgba(234,88,12,0.6)] transition hover:-translate-y-1"
              >
                <div className="flex h-full flex-col gap-3 rounded-[30px] bg-white px-6 py-8 text-center">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                    <Star className="h-6 w-6" />
                  </span>
                  <h3 className="font-inter-tight text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="space-y-4 text-center">
            <h2 className="font-inter-tight text-3xl font-extrabold text-slate-900 sm:text-4xl">
              What We Promise With Each Book Project
            </h2>
            <p className="mx-auto max-w-3xl text-base text-slate-600 sm:text-lg">
              Every partnership is rooted in playful creativity, educational value, and publishing excellence.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {promisePillars.map((item) => (
              <div
                key={item}
                className="flex h-full flex-col gap-3 rounded-3xl border border-orange-100 bg-white p-6 shadow-[0_24px_50px_-36px_rgba(234,88,12,0.45)] transition hover:-translate-y-1 hover:border-orange-200"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/15 text-orange-500">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <p className="text-sm font-semibold leading-relaxed text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="space-y-4 text-center">
            <h2 className="font-inter-tight text-3xl font-extrabold text-slate-900 sm:text-4xl">Our Work Portfolio</h2>
            <p className="mx-auto max-w-3xl text-base text-slate-600 sm:text-lg">
              A glimpse at the imaginative worlds we have recently crafted alongside authors and educators.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <div
                key={item.image}
                className="group relative overflow-hidden rounded-[26px] border border-slate-100 bg-slate-900 shadow-[0_28px_56px_-38px_rgba(15,23,42,0.65)] transition hover:-translate-y-1 hover:shadow-[0_32px_60px_-36px_rgba(234,88,12,0.55)]"
              >
                <Image
                  src={item.image}
                  alt="Children's book illustration sample"
                  width={420}
                  height={520}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1fr_0.85fr] md:px-10">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
              Ready To Launch
            </span>
            <h2 className="font-inter-tight text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Ready To Kick-Start Your Book Project?
            </h2>
            <p className="text-base text-slate-600 sm:text-lg">
              Whether you are preparing a debut picture book or expanding a beloved series, our team is ready to help
              you plan, design, and market with confidence.
            </p>
            <ul className="grid gap-3 text-sm text-slate-600 sm:text-base">
              {[
                "Complete creative direction across illustration and storytelling",
                "Educator-approved content that aligns with literacy standards",
                "Launch-ready marketing assets for parents, teachers, and retailers",
                "Ongoing production support for sequels and companion titles",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Sparkle className="mt-1 h-5 w-5 flex-shrink-0 text-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 px-8 py-3 text-sm font-semibold text-white shadow-[0_20px_45px_-24px_rgba(234,88,12,0.6)] transition hover:-translate-y-0.5"
            >
              Start Your Discovery Session
            </Link>
          </div>
          <div className="relative overflow-hidden rounded-[32px] border border-orange-100 bg-orange-50 p-6 shadow-[0_36px_70px_-38px_rgba(234,88,12,0.45)]">
            <Image
              src="/illustration-book.jpg"
              alt="Illustration of an author planning a children book launch"
              width={520}
              height={420}
              className="mx-auto h-full w-full max-w-sm object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </section>

     <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f97316_0%,#0f172a_70%)] opacity-60" />
  <div className="relative mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1fr_0.9fr] md:px-10">
    <div className="space-y-6">
      <h2 className="font-inter-tight text-3xl font-extrabold sm:text-4xl">
        Blaze Publishers - Author Websites, Publishing & Editing
      </h2>
      <p className="text-base text-slate-200 sm:text-lg">
        Our designers, writers, and editors work side-by-side to craft compelling books and
        professional author brands — from polished manuscripts to high-impact launches.
      </p>
      <div className="grid gap-4 text-sm text-slate-200">
        {[
          "Custom author website design tailored to your voice and genre.",
          "Manuscript development and ghostwriting with clear structure and authentic tone.",
          "Editing services: developmental, copyediting, and final proofreading.",
          "Cover design and interior layout for print and ebook (KDP-ready).",
          "Publishing setup and global distribution across major retailers.",
          "Marketing playbooks with social posts, email copy, press notes, and launch plan.",
        ].map((item) => (
          <div key={item} className="flex items-start gap-3 rounded-3xl bg-white/5 p-4">
            <Medal className="mt-1 h-5 w-5 flex-shrink-0 text-orange-300" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_28px_60px_-38px_rgba(8,47,73,0.7)] backdrop-blur">
      <div className="space-y-5 text-sm text-slate-200">
        <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
          <Palette className="h-5 w-5 text-orange-300" />
          <div>
            <p className="font-semibold text-white">Author Website Design</p>
            <p className="text-xs text-slate-300">
              Fast, modern sites with bio, book pages, newsletter, and media kit.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
          <PenLine className="h-5 w-5 text-orange-300" />
          <div>
            <p className="font-semibold text-white">Writing & Editing</p>
            <p className="text-xs text-slate-300">
              Ghostwriting, developmental edits, copyedits, and final proofreading.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
          <Rocket className="h-5 w-5 text-orange-300" />
          <div>
            <p className="font-semibold text-white">Publishing & Launch</p>
            <p className="text-xs text-slate-300">
              KDP setup, metadata, categories, and a step-by-step launch strategy.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
          <ShieldCheck className="h-5 w-5 text-orange-300" />
          <div>
            <p className="font-semibold text-white">Quality Assurance</p>
            <p className="text-xs text-slate-300">
              Preflight checks, accessibility reviews, and print/ebook proofing.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
                Let&apos;s Work Together
              </span>
              <h2 className="font-inter-tight text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Get In Touch Today And Receive A Complimentary Consultation
              </h2>
              <p className="text-base text-slate-600 sm:text-lg">
                Share your vision and timeline—we&apos;ll craft a tailored roadmap outlining story development,
                illustration milestones, and launch deliverables.
              </p>
              <div className="grid gap-4 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <Sparkle className="mt-1 h-5 w-5 text-orange-500" />
                  <span>Strategic consultation focused on your publishing goals and audience.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkle className="mt-1 h-5 w-5 text-orange-500" />
                  <span>Actionable next steps within 48 hours of receiving your message.</span>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-orange-100 bg-white p-8 shadow-2xl md:p-12"
            >
              <h3 className="font-inter-tight text-2xl font-bold text-center text-slate-900 md:text-3xl">
                Book an Appointment
              </h3>
              <AnimatePresence mode="wait">
                {status !== "idle" && (
                  <motion.div
                    key={status + message}
                    initial={{ opacity: 0, y: 6, filter: "blur(2px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -6, filter: "blur(2px)" }}
                    transition={{ duration: 0.4 }}
                    className={`mt-6 rounded-lg px-4 py-3 text-sm ${
                      status === "success"
                        ? "border border-green-200 bg-green-50 text-green-700"
                        : "border border-red-200 bg-red-50 text-red-700"
                    }`}
                    role="status"
                    aria-live="polite"
                  >
                    {message}
                  </motion.div>
                )}
              </AnimatePresence>

              <form className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2" onSubmit={handleSubmit}>
                {["name", "email", "phone"].map((field) => (
                  <div key={field}>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
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
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>
                ))}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
                    required
                  >
                    <option value="">Select a service</option>
                    {servicesList.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {["date", "time"].map((field) => (
                  <div key={field}>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Preferred {field === "date" ? "Date" : "Time"}
                    </label>
                    <input
                      type={field}
                      name={field}
                      value={formData[field as keyof FormData]}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>
                ))}

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Description</label>
                  <textarea
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
                    placeholder="Tell us a bit about your project..."
                  />
                </div>

                <div className="md:col-span-2 flex justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={loading}
                    className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:from-orange-600 hover:to-orange-700 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {loading ? "Submitting..." : "Submit Appointment"}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

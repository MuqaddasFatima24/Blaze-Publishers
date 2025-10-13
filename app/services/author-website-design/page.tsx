"use client"
import { useEffect, useState } from "react"
import type { ChangeEvent, FormEvent } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  Palette,
  MonitorSmartphone,
  BookOpen,
  Sparkle,
  TrendingUp,
  Globe2,
  ShieldCheck,
  PenSquare,
  Rocket,
  Layers,
  Stars,
  CheckCircle2,
  Crown,
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

const contactServices = [
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

const serviceHighlights = [
  {
    title: "Custom Author Homepages",
    description:
      "Signature landing experiences tailored to your genre, tone, and latest releases - built to convert browsers into loyal readers.",
    icon: Palette,
  },
  {
    title: "Book Series Showcases",
    description:
      "Interactive book sliders, launch countdowns, and spotlight banners that keep your titles front and center.",
    icon: BookOpen,
  },
  {
    title: "Responsive Mobile Design",
    description:
      "Pixel-perfect layouts that adapt to every screen, ensuring fans can explore your catalog from any device.",
    icon: MonitorSmartphone,
  },
  {
    title: "SEO & Author Branding",
    description:
      "Strategic keyword foundations, schema, and author brand storytelling woven into every page element.",
    icon: TrendingUp,
  },
  {
    title: "Newsletter Automation",
    description:
      "Built-in opt-ins, lead magnet delivery, and integrations with your preferred email marketing platform.",
    icon: Rocket,
  },
  {
    title: "Reader Community Tools",
    description:
      "Blog hubs, event calendars, and ARC sign-up flows crafted to nurture and grow your reader ecosystem.",
    icon: Globe2,
  },
]

const expertisePillars = [
  {
    title: "Custom Author Websites",
    copy: "Hand-crafted, on-brand experiences with flexible CMS controls so you can publish updates effortlessly.",
    icon: ShieldCheck,
  },
  {
    title: "Interactive Book Showcases",
    copy: "Immersive reveals for every launch - trailer embeds, sample chapters, and universal buy links.",
    icon: Layers,
  },
  {
    title: "Responsive Motion Design",
    copy: "Micro-interactions and parallax storytelling that keep visitors scrolling all the way to your CTA.",
    icon: Stars,
  },
  {
    title: "SEO & Email Integration",
    copy: "Technical SEO best practices plus fuss-free integrations with Mailchimp, ConvertKit, and more.",
    icon: Sparkle,
  },
]

const portfolioItems = [
  {
    title: "Mythic Realms Saga",
    image: "/project-1.webp",
    description: "Epic fantasy author showcase with launch countdowns and reader quests.",
  },
  {
    title: "Neon City Detectives",
    image: "/project-2.webp",
    description: "Gritty thriller portal featuring character dossiers and podcast tie-ins.",
  },
  {
    title: "Legends of Astra",
    image: "/project-3.webp",
    description: "YA sci-fi series hub with interactive timelines and merch integration.",
  },
  {
    title: "Chronicles of Aurora",
    image: "/project-4.webp",
    description: "Illustration-rich portal spotlighting author events and behind-the-scenes art.",
  },
  {
    title: "Ethereal Ink Society",
    image: "/project-5.webp",
    description: "Collective author community with multi-author blogs and ARC signups.",
  },
  {
    title: "Rising Stars Anthology",
    image: "/project-6.webp",
    description: "Anthology showcase pairing cinematic galleries with universal purchase links.",
  },
]

const differentiators = [
  {
    title: "Dedicated Author Strategists",
    description:
      "Our consultants collaborate on tone, positioning, and launch milestones so your site mirrors your publishing roadmap.",
  },
  {
    title: "Launch-Day Resource Suite",
    description:
      "We package social assets, email templates, and press-friendly media kits to kick-start your promotional efforts.",
  },
  {
    title: "Structured Content Guidance",
    description:
      "Interview-driven content frameworks keep copywriting swift while preserving your authentic author voice.",
  },
  {
    title: "Optimization & Support",
    description:
      "Post-launch performance reviews, conversion tracking, and optional maintenance retainers keep momentum strong.",
  },
]

export default function AuthorWebsiteDesignPage() {
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
    <main className="bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-slate-100">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-32 md:grid-cols-[1.05fr_0.95fr] md:px-10 lg:gap-16 lg:pt-36">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-orange-600">
              Author Website Design
            </span>
            <h1 className="font-inter-tight text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-[52px]">
              Our Creative Author Website Designers Elevate Your Voice &amp; Your Book Sales
            </h1>
            <p className="text-base text-slate-600 sm:text-lg">
              We craft immersive, conversion-focused author websites that blend cinematic design with reader-first user
              journeys. From debut storytellers to bestselling franchises, we build digital homes that ignite fandoms and
              showcase your literary portfolio.
            </p>
            <p className="text-base text-slate-600 sm:text-lg">
              Every project begins with a deep-dive strategy session, positioning roadmap, and visual moodboard. The
              result? A stunning online presence that captures your voice, builds credibility, and sells books around
              the clock.
            </p>
            <ul className="grid gap-3 text-sm text-slate-600 sm:grid-cols-2 sm:text-base">
              {[
                "Launch timelines aligned with publication dates",
                "CMS training for effortless updates",
                "Marketing-ready landing pages & funnels",
                "Analytics, SEO, and conversion best practices",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 px-8 py-3 text-sm font-semibold text-white shadow-[0_20px_40px_-24px_rgba(234,88,12,0.75)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_44px_-20px_rgba(234,88,12,0.85)] sm:text-base"
              >
                Schedule a Creative Consult
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-[40px] bg-gradient-to-br from-orange-200/40 via-orange-400/25 to-amber-300/40 blur-3xl opacity-60" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/70 p-6 shadow-[0_28px_54px_-32px_rgba(15,23,42,0.35)] backdrop-blur">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,#fb923c_0,#ea580c_35%,#0f172a_100%)] text-center text-sm font-semibold uppercase tracking-[0.4em] text-white/80">
                  <Image src="/author-hero.webp" alt="Undersea World" layout="fill" objectFit="cover" />
                </div>
              </div>
              <div className="mt-6 grid gap-3 rounded-2xl border border-orange-100/80 bg-white/60 p-4 backdrop-blur">
                <div className="flex items-center justify-between text-xs uppercase text-slate-500">
                  <span>Featured Modules</span>
                  <span>Q2 - 2025</span>
                </div>
                <div className="grid gap-2 text-sm text-slate-600">
                  <span className="flex items-center justify-between rounded-xl bg-orange-50 px-3 py-2 font-medium text-orange-600">
                    Book Launch Microsite <Crown className="h-4 w-4" />
                  </span>
                  <span className="flex items-center justify-between rounded-xl border border-orange-100 px-3 py-2">
                    Interactive Reading Timeline <Sparkle className="h-4 w-4 text-orange-400" />
                  </span>
                  <span className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2">
                    Custom Newsletter Onboarding <PenSquare className="h-4 w-4 text-slate-400" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative -mt-12 pb-20">
        <div className="mx-auto max-w-6xl rounded-[36px] border border-white bg-white px-6 py-16 shadow-[0_35px_65px_-45px_rgba(15,23,42,0.7)] md:px-10">
          <div className="space-y-4 text-center">
            <h2 className="font-inter-tight text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Professional Author Website Design Services
            </h2>
            <p className="mx-auto max-w-3xl text-base text-slate-600 sm:text-lg">
              From bespoke storytelling pages to marketing-ready launch funnels, we build digital platforms that amplify
              your literary brand and nurture reader loyalty.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceHighlights.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="flex h-full flex-col gap-4 rounded-[28px] border border-slate-100 bg-slate-50/60 p-6 shadow-[0_22px_48px_-34px_rgba(15,23,42,0.9)] transition hover:-translate-y-1 hover:border-orange-200 hover:bg-white hover:shadow-[0_28px_54px_-32px_rgba(234,88,12,0.45)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-amber-500 to-orange-400 text-white shadow-[0_15px_32px_-22px_rgba(234,88,12,0.9)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-inter-tight text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              )
            })}
          </div>
          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <span className="text-sm uppercase tracking-[0.28em] text-orange-500">Get Started</span>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 px-8 py-3 text-sm font-semibold text-white shadow-[0_22px_42px_-24px_rgba(234,88,12,0.7)] transition hover:-translate-y-0.5"
            >
              Get Your Author Website Today
            </Link>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="space-y-4 text-center">
            <h2 className="font-inter-tight text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Our Expertise In Author Website Design
            </h2>
            <p className="mx-auto max-w-3xl text-base text-slate-600 sm:text-lg">
              Strategic insight, cinematic visuals, and seamless technologyâ€”harmonized to deliver memorable experiences
              for readers, agents, and media.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {expertisePillars.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="flex h-full flex-col gap-4 rounded-[26px] border border-slate-100 bg-slate-50/80 p-6 shadow-[0_20px_42px_-32px_rgba(15,23,42,0.75)] transition hover:-translate-y-1 hover:border-orange-200 hover:bg-white"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-inter-tight text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.copy}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="space-y-4 text-center">
            <h2 className="font-inter-tight text-3xl font-extrabold text-slate-900 sm:text-4xl">Our Work Portfolio</h2>
            <p className="mx-auto max-w-3xl text-base text-slate-600 sm:text-lg">
              Explore a curated selection of recent author website launches. Every tile below represents a bespoke
              story-driven experience.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map(({ title, image, description }) => (
              <div
                key={title}
                className="group relative aspect-[4/3] overflow-hidden rounded-[26px] border border-slate-100 bg-slate-900 shadow-[0_30px_54px_-40px_rgba(15,23,42,0.9)] transition hover:-translate-y-1 hover:shadow-[0_32px_60px_-36px_rgba(234,88,12,0.55)]"
              >
                <Image
                  src={image}
                  alt={`${title} website preview`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 space-y-2 p-5">
                  <span className="text-sm font-semibold text-white">{title}</span>
                  <p className="text-xs text-white/80">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-orange-50 via-white to-amber-50 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1fr_0.8fr] md:px-10">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-orange-600">
              Ready To Launch
            </span>
            <h2 className="font-inter-tight text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Ready To Kick-Start Your Book Project?
            </h2>
            <p className="text-base text-slate-600 sm:text-lg">
              Whether youâ€™re planning a debut launch or scaling an established catalog, our author website team builds
              narrative-rich digital experiences that sell books, build communities, and grow your readership.
            </p>
            <ul className="grid gap-3 text-sm text-slate-600 sm:text-base">
              {[
                "Strategic launch mapping & funnel architecture",
                "Dynamic landing pages for every major release",
                "High-impact visuals, animation, and interactivity",
                "End-to-end marketing assets & training resources",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Sparkle className="mt-1 h-5 w-5 flex-shrink-0 text-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 px-8 py-3 text-sm font-semibold text-white shadow-[0_20px_38px_-24px_rgba(234,88,12,0.7)] transition hover:-translate-y-0.5"
            >
              Start Your Discovery Call
            </Link>
          </div>
          <div className="relative overflow-hidden rounded-[32px] border border-orange-200/70 bg-white/80 p-8 shadow-[0_34px_70px_-40px_rgba(234,88,12,0.45)]">
            <div className="aspect-[5/4] rounded-3xl border border-dashed border-orange-200 bg-orange-50/80">
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-center text-xs font-semibold uppercase tracking-[0.45em] text-orange-400">
                Illustration Placeholder
                <span className="rounded-full bg-white px-4 py-1 text-[10px] tracking-[0.32em] text-orange-500">
                  <Image src="/author-web-bottom.png" alt="Illustration Placeholder" layout="fill" objectFit="cover" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#fb923c22,transparent_45%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-10">
          <div className="space-y-6">
            <h2 className="font-inter-tight text-3xl font-extrabold sm:text-4xl">
              Included Author Website Services
            </h2>
            <p className="text-base text-slate-300 sm:text-lg">
              Beyond aesthetics, we deliver conversion strategy, content clarity, and post-launch momentum for every
              author we partner with.
            </p>
            <div className="grid gap-6">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_26px_48px_-38px_rgba(8,47,73,0.8)]"
                >
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 translate-x-10 translate-y-10 rounded-[36px] bg-orange-500/40 blur-3xl opacity-70" />
            <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-10 shadow-[0_32px_66px_-38px_rgba(8,47,73,0.7)]">
              <div className="flex flex-col gap-5 text-sm text-slate-300">
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
                  <Sparkle className="h-5 w-5 text-orange-400" />
                  <div>
                    <p className="font-semibold text-white">Comprehensive Brand Audit</p>
                    <p className="text-xs text-slate-400">
                      Visual, messaging, and marketing review to align your site with reader expectations.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
                  <PenSquare className="h-5 w-5 text-orange-400" />
                  <div>
                    <p className="font-semibold text-white">Content Strategy Guidance</p>
                    <p className="text-xs text-slate-400">
                      Copy outlines and storytelling prompts designed to speed up approvals.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
                  <Stars className="h-5 w-5 text-orange-400" />
                  <div>
                    <p className="font-semibold text-white">Signature Motion Moments</p>
                    <p className="text-xs text-slate-400">
                      Delightful scroll-based reveals, hover states, and animated book carousels.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
                  <Globe2 className="h-5 w-5 text-orange-400" />
                  <div>
                    <p className="font-semibold text-white">Global Distribution Integrations</p>
                    <p className="text-xs text-slate-400">
                      Universal buy links, localized messaging, and analytics dashboards tailored to your goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:px-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-orange-600">
              Let&apos;s Work Together
            </span>
            <h2 className="font-inter-tight text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Get In Touch Today And Receive A Complimentary Consultation
            </h2>
            <p className="text-base text-slate-600 sm:text-lg">
              Share your goals and upcoming releases - we&apos;ll map out the perfect author website experience, timeline,
              and launch strategy. No reCAPTCHA, just a simple form to start the conversation.
            </p>
            <div className="grid gap-4 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <Sparkle className="mt-1 h-5 w-5 text-orange-500" />
                <span>Strategic consultation focused on your publishing roadmap</span>
              </div>
              <div className="flex items-start gap-3">
                <Sparkle className="mt-1 h-5 w-5 text-orange-500" />
                <span>Actionable next steps within 48 hours of receiving your message</span>
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
                  {contactServices.map((service) => (
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
      </section>
    </main>
  )
}






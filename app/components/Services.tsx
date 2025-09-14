"use client"
import Head from "next/head"
import {
  ShieldCheck,
  RocketLaunch,
  Handshake,
  Crown,
} from "@phosphor-icons/react"

const services = [
  {
    title: "Quality Work",
    description:
      "We deliver results that reflect your vision and purpose with unmatched precision and attention to detail.",
    icon: <ShieldCheck size={48} weight="duotone" className="text-orange-500" />,
  },
  {
    title: "Timely Delivery",
    description:
      "Our expert team ensures your project is completed right on schedule without ever compromising on quality.",
    icon: <RocketLaunch size={48} weight="duotone" className="text-orange-500" />,
  },
  {
    title: "Customer Satisfaction",
    description:
      "Your happiness is our top priority. We collaborate with you at every stage to ensure tailored solutions.",
    icon: <Handshake size={48} weight="duotone" className="text-orange-500" />,
  },
  {
    title: "100% Ownership",
    description:
      "You retain full ownership of your work and ideas. We empower your journey while keeping rights fully yours.",
    icon: <Crown size={48} weight="duotone" className="text-orange-500" />,
  },
]

export default function Services() {
  return (
    <>
      {/* ── Page-level SEO tags ── */}
      <Head>
        <title>Premium Digital Services | Blaze Publisher</title>
        <meta
          name="description"
          content="Explore Blaze Publisher's premium services—quality work, timely delivery, full ownership, and customer-first collaboration."
        />
        <meta
          name="keywords"
          content="premium services, digital publishing, timely delivery, quality work, customer satisfaction, ownership"
        />
        <meta property="og:title" content="Premium Digital Services | Blaze Publisher" />
        <meta
          property="og:description"
          content="Excellence, precision, and innovation tailored to your vision with elegance and speed."
        />
        <meta property="og:image" content="/book.png" />
        <meta name="robots" content="index, follow" />
      </Head>

      <section
        id="services"
        className="relative w-full bg-gradient-to-b from-white via-gray-50 to-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
      >
        {/* glowing bg accents */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-orange-200/40 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[120px] animate-pulse"></div>

        {/* Section heading */}
        <header className="relative max-w-7xl mx-auto z-10 text-center mb-16">
          <h2 className="font-inter-tight text-4xl md:text-5xl font-bold text-gray-900">
            Our <span className="text-orange-500">Premium</span> Services
          </h2>
          <p className="mt-4 text-lg text-black max-w-2xl mx-auto">
            Excellence, precision, and innovation tailored to your vision with
            elegance and speed.
          </p>
        </header>

        {/* Services Grid */}
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto z-10">
          {services.map((service, index) => (
            <article
              key={index}
              className="group relative p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-orange-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]"
              aria-label={service.title}
            >
              {/* Glow behind card */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-200/40 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition duration-500"></div>

              {/* Icon */}
              <div className="mb-6 flex justify-center" aria-hidden="true">
                {service.icon}
              </div>

              {/* Card Title */}
              <h3 className="font-inter-tight text-xl font-semibold text-gray-900 mb-4 relative inline-block">
                {service.title}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 group-hover:w-full transition-all duration-500 ease-out shadow-[0_0_8px_#f97316]"></span>
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        {/* Subtle tech grid bg */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fbbf24_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] bg-[size:80px_80px] opacity-5"></div>
      </section>
    </>
  )
}

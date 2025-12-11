"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ShieldCheck,
  FileText,
  Lock,
  Mail,
  Globe2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

function SectionCard({
  id,
  icon: Icon,
  title,
  children,
}: {
  id: string
  icon: React.ElementType
  title: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 rounded-[30px] border border-slate-100 bg-white p-6 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] md:p-10"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
            <Icon className="h-6 w-6" />
          </span>
          <div className="space-y-1">
            <h2 className="font-inter-tight text-2xl font-extrabold text-slate-900 md:text-3xl">
              {title}
            </h2>
            <p className="text-sm text-slate-500">
              Blaze Publishers LLC • Last Updated: 10 December 2025
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <a
            href="#terms"
            className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-600 transition hover:bg-orange-100"
          >
            <FileText className="h-4 w-4" />
            Terms
          </a>
          <a
            href="#privacy"
            className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-600 transition hover:bg-orange-100"
          >
            <Lock className="h-4 w-4" />
            Privacy
          </a>
        </div>
      </div>

      <div className="mt-8 space-y-6 text-sm text-slate-700 md:text-base">
        {children}
      </div>
    </section>
  )
}

function Clause({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-[26px] border border-slate-100 bg-slate-50/70 p-5 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.5)] transition hover:-translate-y-0.5 hover:border-orange-200 hover:bg-white">
      <div className="flex items-start gap-3">
        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-orange-500" />
        <div className="space-y-1">
          <h3 className="font-inter-tight text-base font-semibold text-slate-900 md:text-lg">
            {title}
          </h3>
          <div className="text-sm text-slate-600 md:text-[15px] leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TermsConditionPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-slate-100">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-28 md:grid-cols-[1.1fr_0.9fr] md:px-10 lg:gap-16 lg:pt-32">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-orange-600">
              <ShieldCheck className="h-4 w-4" />
              Legal & Trust Center
            </span>

            <h1 className="font-inter-tight text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-[52px]">
              Terms &amp; Conditions <span className="text-orange-500">+</span>{" "}
              Privacy Policy
            </h1>

            <p className="text-base text-slate-600 sm:text-lg">
              We believe authors deserve clarity. These policies explain how Blaze
              Publishers works, what we expect from clients, and how we protect
              your data and manuscripts.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <a
                href="#terms"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 px-8 py-3 text-sm font-semibold text-white shadow-[0_20px_40px_-24px_rgba(234,88,12,0.75)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_44px_-20px_rgba(234,88,12,0.85)]"
              >
                <FileText className="mr-2 h-4 w-4" />
                Read Terms
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <a
                href="#privacy"
                className="inline-flex items-center justify-center rounded-full border border-orange-200 bg-white px-8 py-3 text-sm font-semibold text-orange-600 shadow-sm transition hover:-translate-y-0.5 hover:bg-orange-50"
              >
                <Lock className="mr-2 h-4 w-4" />
                Read Privacy
              </a>
            </div>

            <p className="text-sm text-slate-500">
              Last Updated:{" "}
              <span className="font-semibold">10 December 2025</span>
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="relative"
          >
            <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-[40px] bg-gradient-to-br from-orange-200/40 via-orange-400/25 to-amber-300/40 blur-3xl opacity-60" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/70 p-6 shadow-[0_28px_54px_-32px_rgba(15,23,42,0.35)] backdrop-blur">
              <div className="grid gap-4 rounded-3xl border border-orange-100 bg-white/60 p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                    <FileText className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-inter-tight text-lg font-semibold text-slate-900">
                      Transparent Agreements
                    </p>
                    <p className="text-sm text-slate-600">
                      Clear scope, responsibilities, and timelines.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                    <Lock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-inter-tight text-lg font-semibold text-slate-900">
                      Manuscript Confidentiality
                    </p>
                    <p className="text-sm text-slate-600">
                      Your drafts stay private and protected.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                    <Globe2 className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-inter-tight text-lg font-semibold text-slate-900">
                      Platform-Based Distribution
                    </p>
                    <p className="text-sm text-slate-600">
                      KDP & partners control royalties and policies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white">
                <p className="text-xs uppercase tracking-[0.35em] text-white/70">
                  Need Help?
                </p>
                <p className="mt-2 text-sm text-white/80">
                  If you have questions about these policies, contact our team —
                  we’ll guide you clearly.
                </p>
                <div className="mt-4 flex flex-col gap-2 text-sm">
                  <span className="flex items-center gap-2 text-white/80">
                    <Mail className="h-4 w-4 text-orange-300" />
                    support@blazepublishers.com
                  </span>
                  <span className="flex items-center gap-2 text-white/80">
                    <Mail className="h-4 w-4 text-orange-300" />
                    privacy@blazepublishers.com
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTENT WRAP */}
      <section className="relative -mt-10 pb-20">
        <div className="mx-auto max-w-6xl rounded-[36px] border border-white bg-white px-6 py-14 shadow-[0_35px_65px_-45px_rgba(15,23,42,0.7)] md:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.33fr_0.67fr]">
            {/* TOC */}
            <aside className="space-y-4">
              <div className="rounded-[26px] border border-slate-100 bg-slate-50/70 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-600">
                  On this page
                </p>
                <div className="mt-4 grid gap-2 text-sm">
                  <a
                    href="#terms"
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-800 transition hover:border-orange-200 hover:bg-orange-50"
                  >
                    <FileText className="h-4 w-4 text-orange-500" />
                    Terms & Conditions
                  </a>
                  <a
                    href="#privacy"
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-800 transition hover:border-orange-200 hover:bg-orange-50"
                  >
                    <Lock className="h-4 w-4 text-orange-500" />
                    Privacy Policy
                  </a>
                </div>
              </div>

              <div className="rounded-[26px] bg-gradient-to-br from-orange-500 via-amber-500 to-orange-400 p-px shadow-[0_30px_64px_-40px_rgba(234,88,12,0.6)]">
                <div className="rounded-[24px] bg-white p-6">
                  <p className="font-inter-tight text-lg font-extrabold text-slate-900">
                    Ready to publish?
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    Tell us your project goal and we’ll recommend the best
                    package.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-22px_rgba(234,88,12,0.65)] transition hover:-translate-y-0.5"
                  >
                    Contact Blaze
                  </Link>
                </div>
              </div>
            </aside>

            {/* MAIN POLICY */}
            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <SectionCard id="terms" icon={FileText} title="Terms & Conditions">
                  <p className="text-slate-600">
                    Welcome to{" "}
                    <span className="font-semibold text-slate-900">
                      Blaze Publishers LLC
                    </span>{" "}
                    (“Company”, “we”, “us”, or “our”). By accessing, browsing, or
                    using our services including publishing, editing, design,
                    marketing, distribution, or any related service (“Services”),
                    you agree to comply with these Terms.
                  </p>

                  <div className="grid gap-4">
                    <Clause title="1. Acceptance of Terms">
                      By using our website or services, you acknowledge that you
                      have read, understood, and agree to be bound by these Terms
                      and all applicable laws.
                    </Clause>

                    <Clause title="2. Services Provided">
                      Blaze Publishers offers Book Publishing (KDP, Paperback,
                      eBook, global platforms), Editing, Proofreading & Formatting,
                      Book Cover & Interior Design, ISBN & Barcode Services,
                      Marketing, Launch & Author Branding, and Distribution across
                      partner platforms. Service scope varies based on package.
                    </Clause>

                    <Clause title="3. Client Responsibilities">
                      Clients agree to provide original content or proof of rights
                      to publish, submit files in required format and time frame,
                      and approve drafts/request revisions within the set revision
                      period. We are not responsible for delays due to late
                      approvals or incomplete material.
                    </Clause>

                    <Clause title="4. Ownership & Copyright">
                      Authors retain full rights to their work unless otherwise
                      agreed in writing. Blaze Publishers may use book covers,
                      excerpts, or design samples for portfolio and promotion
                      unless the author requests removal. The client confirms
                      content does not violate copyright or contain illegal
                      material.
                    </Clause>

                    <Clause title="5. Payments & Refunds">
                      All payments are non-refundable once the project has
                      started. Pricing may vary depending on additional services.
                      Work begins only after full or agreed partial payment is
                      received.
                    </Clause>

                    <Clause title="6. Revisions">
                      Each package includes limited revisions (as stated per
                      package). Additional revisions beyond limits may incur extra
                      cost.
                    </Clause>

                    <Clause title="7. Distribution">
                      Distribution is processed through KDP or third-party
                      platforms. Royalty payments are controlled by the platform,
                      not Blaze Publishers. Blaze Publishers is not liable for
                      platform pricing changes, delays, or policy updates.
                    </Clause>

                    <Clause title="8. Limitation of Liability">
                      Blaze Publishers is not responsible for sales volume,
                      ranking, or revenue guarantees; losses caused by platform
                      policies, strikes, technical issues, or third-party systems;
                      or misprints caused by unapproved drafts.
                    </Clause>

                    <Clause title="9. Termination">
                      We can terminate collaboration if the client violates these
                      terms, or content is illegal, plagiarized, or harmful. The
                      client must pay for completed work up to termination date.
                    </Clause>

                    <Clause title="10. Governing Law">
                      These Terms are governed by applicable publishing and
                      business laws of the region/country of operation.
                    </Clause>

                    <Clause title="11. Contact Information">
                      Email:{" "}
                      <span className="font-semibold">
                        support@blazepublishers.com
                      </span>
                      <br />
                      Website:{" "}
                      <span className="font-semibold">
                        www.blazepublishers.com
                      </span>
                    </Clause>
                  </div>
                </SectionCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                viewport={{ once: true }}
              >
                <SectionCard id="privacy" icon={Lock} title="Privacy Policy">
                  <p className="text-slate-600">
                    Your privacy is important to us. This policy explains how we
                    collect, use, and protect your personal data when you interact
                    with Blaze Publishers.
                  </p>

                  <div className="grid gap-4">
                    <Clause title="1. Information We Collect">
                      We may collect name, email address, contact number; book
                      title, manuscript files & project details; payments & invoice
                      information; social media or portfolio links; and website
                      usage analytics.
                    </Clause>

                    <Clause title="2. How We Use Your Information">
                      We use your data to provide publishing and editing services,
                      communicate project progress, process payments and invoicing,
                      improve user experience & support, and marketing/showcasing
                      with permission.
                    </Clause>

                    <Clause title="3. Storage & Security">
                      Your data is securely stored and accessed only by authorized
                      staff. We do not sell or trade personal information to third
                      parties.
                    </Clause>

                    <Clause title="4. File & Content Confidentiality">
                      Manuscripts, drafts & creative assets remain confidential.
                      We may only use content for portfolio with author approval
                      or unless publicly available after launch.
                    </Clause>

                    <Clause title="5. Third-Party Sharing">
                      We may share necessary information only with service
                      providers like KDP, IngramSpark, marketing tools, and payment
                      gateways — only to complete your project. No third party
                      receives your data for marketing unless you approve.
                    </Clause>

                    <Clause title="6. Cookies & Tracking">
                      Our website may use cookies for analytics and improved user
                      experience. Users may disable cookies in browser settings.
                    </Clause>

                    <Clause title="7. Author Rights">
                      You may request a copy of your stored information, edit or
                      update personal details, or request deletion of data after
                      project completion. Email us for any request.
                    </Clause>

                    <Clause title="8. Policy Updates">
                      We may update this policy periodically. Updated versions will
                      be posted on our website.
                    </Clause>

                    <Clause title="9. Contact">
                      Email:{" "}
                      <span className="font-semibold">
                        privacy@blazepublishers.com
                      </span>
                      <br />
                      Website:{" "}
                      <span className="font-semibold">
                        www.blazepublishers.com
                      </span>
                    </Clause>
                  </div>
                </SectionCard>
              </motion.div>

              {/* Bottom CTA */}
              <div className="rounded-[30px] bg-gradient-to-br from-orange-500 via-amber-500 to-orange-400 p-px shadow-[0_30px_64px_-40px_rgba(234,88,12,0.6)]">
                <div className="rounded-[28px] bg-white px-6 py-10 text-center md:px-10">
                  <h3 className="font-inter-tight text-2xl font-extrabold text-slate-900 md:text-3xl">
                    Questions about policies?
                  </h3>
                  <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
                    If anything is unclear, message us and we’ll explain it in
                    simple words — no legal confusion.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 px-8 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-22px_rgba(234,88,12,0.65)] transition hover:-translate-y-0.5"
                    >
                      Contact Support <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <a
                      href="mailto:support@blazepublishers.com"
                      className="inline-flex items-center justify-center rounded-full border border-orange-200 bg-white px-8 py-3 text-sm font-semibold text-orange-600 transition hover:-translate-y-0.5 hover:bg-orange-50"
                    >
                      Email Us <Mail className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Blaze Publishers LLC. All rights reserved.
          </p>
        </div>
      </section>
    </main>
  )
}

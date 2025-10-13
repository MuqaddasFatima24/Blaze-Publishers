"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [svcDesktopOpen, setSvcDesktopOpen] = useState(false)
  const [svcMobileOpen, setSvcMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // tiny hover-intent timer to prevent flicker
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!isOpen) setSvcMobileOpen(false)
  }, [isOpen])

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services", dropdown: true },
    { name: "Publishing", path: "/publishing" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Learn More", path: "/learnmore" },
    { name: "Blog", path: "/blog" },
  ]

  const serviceLinks = [
    { name: "Author Website Design", path: "/services/author-website-design" },
    { name: "Children Book", path: "/services/children-book" },
  ]

  // helper: clear any pending close
  const clearHideTimer = () => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current)
      hideTimer.current = null
    }
  }

  // open immediately on hover/focus; close with a tiny delay on leave
  const handleSvcEnter = () => {
    clearHideTimer()
    setSvcDesktopOpen(true)
  }
  const handleSvcLeave = () => {
    clearHideTimer()
    hideTimer.current = setTimeout(() => setSvcDesktopOpen(false), 120)
  }

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-[0_10px_40px_-25px_rgba(15,23,42,0.25)] border-b border-gray-100"
          : "bg-white"
      }`}
      aria-label="Main navigation"
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-6 px-4 md:h-24 md:px-8">
        {/* Logo (no background) */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Blaze Publishers company logo"
            width={220}
            height={72}
            priority
            className="h-10 w-auto object-contain sm:h-12"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8 text-[16px] font-medium text-gray-700">
          {navLinks.map((link) => {
            if (link.dropdown) {
              return (
                <div
                  key={link.name}
                  className="relative flex items-center gap-1"
                  onPointerEnter={handleSvcEnter}
                  onPointerLeave={handleSvcLeave}
                >
                  <Link href={link.path} className="relative transition duration-300">
                    <span className="hover:text-gray-900">{link.name}</span>
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 rounded-full bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                  <button
                    type="button"
                    aria-expanded={svcDesktopOpen}
                    aria-haspopup="true"
                    aria-label="Toggle services menu"
                    onClick={() => setSvcDesktopOpen((prev) => !prev)}
                    className="p-1 text-gray-500 hover:text-gray-800 transition"
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        svcDesktopOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {svcDesktopOpen && (
                    <div
                      className="
                        absolute left-1/2 top-full z-50 w-56 -translate-x-1/2
                        rounded-xl border border-gray-100 bg-white shadow-lg
                        /* bridge the hover gap to avoid flicker */
                        before:absolute before:content-[''] before:left-0 before:right-0 before:-top-2 before:h-2
                      "
                    >
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.name}
                          href={service.path}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            }

            return (
              <Link
                key={link.name}
                href={link.path}
                className="relative transition duration-300 hover:text-gray-900"
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white p-2 text-gray-700 shadow-sm transition hover:border-gray-300 hover:text-gray-900 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-6 text-base font-medium text-gray-700">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.name} className="flex flex-col gap-2">
                    <button
                      type="button"
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-left hover:bg-gray-50 transition"
                      onClick={() => setSvcMobileOpen((prev) => !prev)}
                      aria-expanded={svcMobileOpen}
                    >
                      <span className="font-semibold">{link.name}</span>
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${
                          svcMobileOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {svcMobileOpen && (
                      <div className="flex flex-col gap-2 rounded-lg border border-gray-100 bg-white px-4 py-3">
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.name}
                            href={service.path}
                            onClick={() => setIsOpen(false)}
                            className="block px-2 py-1 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition"
                >
                  {link.name}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}

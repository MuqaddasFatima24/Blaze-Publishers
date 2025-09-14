"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Publishing", path: "/publishing" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Learn More", path: "/learnmore" },
  ]

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-md"
      aria-label="Main Navigation"  // ✅ Accessibility/SEO
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-24">
        {/* Bigger Logo in the corner */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Blaze Publishers company logo"   // ✅ More descriptive alt
            width={300}
            height={100}
            className="object-contain"
            priority   // ✅ Improves Largest Contentful Paint
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 font-medium text-lg text-gray-800">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="relative group transition duration-300"
            >
              <span className="hover:text-orange-600 transition duration-300">
                {link.name}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800"
          aria-label="Toggle navigation menu"  // ✅ Better accessibility
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="flex flex-col items-center space-y-5 py-5 font-medium text-lg text-gray-800">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="relative group transition duration-300"
              >
                <span className="hover:text-orange-600 transition duration-300">
                  {link.name}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

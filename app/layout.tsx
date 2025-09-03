// app/layout.tsx
import "./globals.css"
import { Inter_Tight } from "next/font/google"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
})

export const metadata = {
  title: "Blaze Publishers",
  description: "Turning Your Stories Into Timeless Books",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={interTight.variable}>
      <body>
        {/* Navbar always visible at top */}
        <Navbar />

        {/* Page content */}
        {children}

        {/* Footer always visible at bottom */}
        <Footer />
      </body>
    </html>
  )
}

// app/layout.tsx
import "./globals.css";
import { Inter_Tight } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import type { Metadata } from "next";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

// 🔑 Global site-wide metadata
export const metadata: Metadata = {
  title: {
    default: "Blaze Publishers – Professional Book Publishing & Writing Services",
    template: "%s | Blaze Publishers",
  },
  description:
    "Blaze Publishers turns your stories into timeless books with expert writing, editing, design, and global publishing services.",
  keywords: [
    "book publishing",
    "ghostwriting",
    "ebook publishing",
    "children's books",
    "book editing",
    "author services",
    "Blaze Publishers",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com/",
    siteName: "Blaze Publishers",
    title: "Blaze Publishers – Professional Book Publishing & Writing Services",
    description:
      "From writing and editing to global distribution, Blaze Publishers helps authors bring their stories to life.",
    images: [
      {
        url: "https://yourdomain.com/og-default.jpg", // replace with a real image
        width: 1200,
        height: 630,
        alt: "Blaze Publishers – Books and Publishing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blaze Publishers – Professional Book Publishing & Writing Services",
    description:
      "Your one-stop solution for ghostwriting, editing, design, and publishing.",
    images: ["https://yourdomain.com/og-default.jpg"],
  },
  icons: {
    icon: "/favicon.ico",           // 16×16 or 32×32 favicon
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // optional: add apple-touch icon in /public
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={interTight.variable}>
      <body className="antialiased text-gray-900 bg-white">
        {/* Global navigation */}
        <Navbar />

        {/* Page-specific content */}
        {children}

        {/* Global footer */}
        <Footer />
      </body>
    </html>
  );
}

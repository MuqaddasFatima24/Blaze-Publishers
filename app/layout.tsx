// app/layout.tsx
import "./globals.css";
import { Inter_Tight } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

const FB_PIXEL_ID = "1005200931680502"; // Facebook Pixel ID
const ADSENSE_PUB_ID = "ca-pub-8108022846497938"; // Update if your AdSense publisher ID changes

export const metadata: Metadata = {
  title: {
    default: "Blaze Publishers - Professional Book Publishing & Writing Services",
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
    url: "https://www.blazepublishers.com/",
    siteName: "Blaze Publishers",
    title: "Blaze Publishers - Professional Book Publishing & Writing Services",
    description:
      "From writing and editing to global distribution, Blaze Publishers helps authors bring their stories to life.",
    images: [
      {
        url: "https://www.blazepublishers.com/logo1.png",
        width: 512,
        height: 512,
        alt: "Blaze Publishers logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blaze Publishers - Professional Book Publishing & Writing Services",
    description:
      "Your one-stop solution for ghostwriting, editing, design, and publishing.",
    images: ["https://www.blazepublishers.com/logo1.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    // Important for AdSense site verification
    "google-adsense-account": ADSENSE_PUB_ID,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={interTight.variable}>
      <head>
        {/* Google AdSense loader */}
        <Script
          id="adsense-script"
          async
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUB_ID}`}
        />

        {/* Facebook Pixel code */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Noscript fallback for Facebook */}
        <noscript>
          <Image
            height={1}
            width={1}
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
            unoptimized
            priority
          />
        </noscript>

        {/* Organization structured data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Blaze Publishers",
            url: "https://www.blazepublishers.com",
            logo: "https://www.blazepublishers.com/logo.png",
            sameAs: [
              "https://www.facebook.com/blazepublishers",
              "https://www.instagram.com/blazepublishers/",
              "https://x.com/Blazepublishers",
            ],
          })}
        </Script>
      </head>

      <body className="antialiased text-gray-900 bg-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
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
const ADSENSE_PUB_ID = "ca-pub-8108022846497938"; // ✅ Your AdSense publisher ID

// export const metadata: Metadata = {
//   title: {
//     default:
//       "Blaze Publishers – Professional Book Publishing & Writing Services",
//     template: "%s | Blaze Publishers",
//   },
//   description:
//     "Blaze Publishers turns your stories into timeless books with expert writing, editing, design, and global publishing services.",
//   keywords: [
//     "book publishing",
//     "ghostwriting",
//     "ebook publishing",
//     "children's books",
//     "book editing",
//     "author services",
//     "Blaze Publishers",
//   ],
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://www.blazepublishers.com/",
//     siteName: "Blaze Publishers",
//     title: "Blaze Publishers – Professional Book Publishing & Writing Services",
//     description:
//       "From writing and editing to global distribution, Blaze Publishers helps authors bring their stories to life.",
//     images: [
//       {
//         url: "https://www.blazepublishers.com/og-default.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Blaze Publishers – Books and Publishing",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Blaze Publishers – Professional Book Publishing & Writing Services",
//     description:
//       "Your one-stop solution for ghostwriting, editing, design, and publishing.",
//     images: ["https://www.blazepublishers.com/og-default.jpg"],
//   },
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon.ico",
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
//   other: {
//     // ✅ Important for AdSense site verification
//     "google-adsense-account": ADSENSE_PUB_ID,
//   },
// };



export const metadata: Metadata = {
   title: {
    default:
      "Blaze Publishers – Professional Book Publishing & Writing Services",
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
    title: "Blaze Publishers – Professional Book Publishing & Writing Services",
    description:
      "From writing and editing to global distribution, Blaze Publishers helps authors bring their stories to life.",
    images: [
      {
        url: "https://www.blazepublishers.com/og-default.jpg",
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
    images: ["https://www.blazepublishers.com/og-default.jpg"],
  },
    icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" }, // fallback / old browsers
      { url: "/favicon.png", type: "image/png", sizes: "32x32" }, // modern PNG
      { url: "/favicon.svg", type: "image/svg+xml" }, // vector
    ],
    apple: "/apple-touch-icon.png", // optional (180x180 PNG)
  },
   robots: {
    index: true,
    follow: true,
  },
  other: {
    // ✅ Important for AdSense site verification
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
        {/* ✅ Google AdSense Loader */}
        <Script
          id="adsense-script"
          async
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUB_ID}`}
        />

        {/* ✅ Facebook Pixel Code */}
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
      </head>

      <body className="antialiased text-gray-900 bg-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

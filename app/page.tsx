import type { Metadata } from "next";

// SEO metadata (server-side, works in the App Router)
export const metadata: Metadata = {
  title: "Blaze Publishers - Professional Book Publishing & Writing Services",
  description:
    "Blaze Publishers offers expert ghostwriting, editing, design, and marketing to bring your story to life. Publish your book globally with our complete end-to-end services.",
  keywords: [
    "book publishing",
    "ghostwriting",
    "ebook publishing",
    "book editing",
    "children's books",
    "author services",
    "Blaze Publishers",
  ],
  openGraph: {
    title: "Blaze Publishers - Professional Book Publishing & Writing Services",
    description:
      "From writing and editing to global distribution, Blaze Publishers turns your ideas into polished books.",
    url: "https://www.blazepublishers.com/",
    siteName: "Blaze Publishers",
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
};

import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Detail from "./components/Detail";
import Services from "./components/Services";
import Milestone from "./components/Milestone";
import Author from "./components/Author";
import Books from "./components/Books";
import WhyChoooseUs from "./components/WhyChooseUs";
import Portfolio from "./components/Portfolio";
import Reviews from "./components/Reviews";
import Form from "./components/Form";
import Style from "./components/Style";

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Detail />
      <Services />
      <Milestone />
      <Author />
      <Books />
      <WhyChoooseUs />
      <Portfolio />
      <Reviews />
      <Form />
      <Style />
    </>
  );
}
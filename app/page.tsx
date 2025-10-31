import type { Metadata } from "next";

// 🔑 SEO / Metadata (server-side, works perfectly in the App Router)
export const metadata: Metadata = {
  title: "Blaze Publishers – Professional Book Publishing & Writing Services",
  description:
    "Blaze Publishers offers expert ghostwriting, editing, design, and marketing to bring your story to life. Publish your book globally with our complete end-to-end services.",
  keywords: [
    "book publishing",
    "ghostwriting",
    "ebook publishing",
    "book editing",
    "children’s books",
    "author services",
    "Blaze Publishers",
  ],
  openGraph: {
    title: "Blaze Publishers – Professional Book Publishing & Writing Services",
    description:
      "From writing and editing to global distribution, Blaze Publishers turns your ideas into polished books.",
    url: "https://blazepublishers.com",
    siteName: "Blaze Publishers",
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

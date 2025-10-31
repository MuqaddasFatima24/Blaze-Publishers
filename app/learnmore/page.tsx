import type { Metadata } from "next";
import LearnMoreClient from "./learnmoreclient";

export const metadata: Metadata = {
  title: "Learn More About Blaze Publishers | Professional Ebook Publishing",
  description:
    "Discover how Blaze Publishers turns your ideas into polished ebooks. From expert writing and editing to global distribution, we handle the entire publishing process.",
  keywords: [
    "ebook writing",
    "ebook editing",
    "ebook publishing",
    "Blaze Publishers",
    "book publishing services",
    "self publishing help",
  ],
  alternates: {
    canonical: "https://blazepublishers.com/learnmore",
  },
  openGraph: {
    title: "Learn More About Blaze Publishers",
    description:
      "Professional ebook writing, editing, and publishing services to help your story reach global readers.",
    url: "https://blazepublishers.com/learnmore",
    siteName: "Blaze Publishers",
    locale: "en_US",
    type: "website",
  },
};

export default function LearnMorePage() {
  return <LearnMoreClient />;
}

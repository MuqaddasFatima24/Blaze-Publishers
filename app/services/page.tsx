import type { Metadata } from "next";
import ServicesPage from "./ServicesPage";

export const metadata: Metadata = {
  title: "Our Services | Blaze Publishers",
  description:
    "Explore Blaze Publishers’ full range of professional writing, editing, and publishing services. Book your appointment today to bring your book to life.",
  keywords: [
    "book publishing",
    "ghostwriting",
    "editing",
    "book design",
    "children’s books",
    "author services",
    "Blaze Publishers",
  ],
  openGraph: {
    title: "Our Services | Blaze Publishers",
    description:
      "From ghostwriting to marketing, discover the complete set of services that help authors succeed.",
    url: "https://yourdomain.com/services",
    siteName: "Blaze Publishers",
    images: [
      {
        url: "https://yourdomain.com/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Blaze Publishers Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Blaze Publishers",
    description:
      "Professional writing, editing, design, and marketing for authors worldwide.",
    images: ["https://yourdomain.com/og-services.jpg"],
  },
};

export default function Page() {
  return <ServicesPage />;
}

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
    url: "https://blazepublishers.com",
    siteName: "Blaze Publishers",
  },
};

export default function Page() {
  return <ServicesPage />;
}

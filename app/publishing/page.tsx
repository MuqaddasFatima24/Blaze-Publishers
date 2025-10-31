import type { Metadata } from "next";
import PublishingSection from "./PublishingSection";

export const metadata: Metadata = {
  title: "Book Publishing | Blaze Publishers",
  description:
    "From editing to global distribution, Blaze Publishers helps authors publish professional books and ebooks with ease and creativity.",
  keywords: [
    "book publishing",
    "ebook publishing",
    "self publishing",
    "editing",
    "cover design",
    "Blaze Publishers",
  ],
  openGraph: {
    title: "Professional Book Publishing | Blaze Publishers",
    description:
      "End-to-end publishing: editing, design, ISBN, marketing and worldwide distribution.",
    url: "https://blazepublishers.com",
    siteName: "Blaze Publishers",
  },
};

// Server component wraps the client one
export default function Page() {
  return <PublishingSection />;
}

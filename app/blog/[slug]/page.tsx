import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { articles } from "../data";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return notFound();

  return (
    <article className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      {/* ✅ Hero Section */}
      <div className="relative w-full flex items-center justify-center bg-black mt-24">
        {/* Image */}
        <Image
          src={article.image}
          alt={article.title}
          width={1600}
          height={900}
          priority
          className="w-full max-h-[75vh] object-contain rounded-none sm:rounded-2xl shadow-lg"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8">
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 max-w-2xl">
            <span className="text-xs sm:text-sm text-orange-400 font-semibold block">
              {new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <h1 className="mt-2 font-bold text-white leading-tight text-[20px]">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      {/* ✅ Article Body */}
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-20 py-12 md:py-20">
        <div className="prose prose-lg md:prose-xl prose-orange max-w-none">
          {article.content.map((block, i) => (
            <section key={i} className="mb-12">
              {block.heading && (
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {block.heading}
                </h2>
              )}
              <p className="text-gray-800 leading-relaxed">{block.text}</p>
            </section>
          ))}
        </div>
      </div>

      {/* ✅ Related Articles */}
      <div className="bg-white py-12 md:py-20 border-t border-orange-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
            Related Articles
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles
              .filter((a) => a.slug !== slug)
              .slice(0, 3)
              .map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-gradient-to-b from-orange-50 to-white"
                >
                  <div className="relative w-full aspect-[16/9]">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-sm text-orange-600 font-semibold">
                      {new Date(related.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-gray-900 group-hover:text-orange-600 transition">
                      {related.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                      {related.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </article>
  );
}

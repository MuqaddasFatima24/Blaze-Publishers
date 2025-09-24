import Link from "next/link";
import Image from "next/image";
import { articles } from "./data";

export default function BlogListPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section
        className="relative h-[55vh] md:h-[70vh] flex items-center justify-center px-6 sm:px-12"
        style={{
          backgroundImage: "url('/blog.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        <div className="relative z-10 max-w-4xl text-center">
          <h1 className="text-white font-extrabold text-[clamp(2rem,6vw,4rem)] leading-tight drop-shadow-lg">
            Our Blog
          </h1>
          <p className="mt-4 text-gray-200 text-[clamp(1rem,2vw,1.25rem)] max-w-2xl mx-auto">
            Insights and reflections on society, resilience, and empowerment.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="w-full py-16 px-6 sm:px-12 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <Link
              href={`/blog/${a.slug}`}
              key={a.slug}
              className="group flex flex-col bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200"
            >
              {/* Image */}
              <div className="w-full">
                <Image
                  src={a.image}
                  alt={a.title}
                  width={1200}
                  height={800}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02] rounded-t-3xl"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-1 p-6 sm:p-8">
                <span className="text-sm text-orange-600 font-semibold">
                  {new Date(a.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <h2 className="mt-3 font-bold text-[clamp(1.25rem,2vw,1.5rem)] group-hover:text-orange-600 transition-colors">
                  {a.title}
                </h2>
                <p className="mt-3 text-gray-700 text-base leading-relaxed line-clamp-3">
                  {a.description}
                </p>
                <span className="mt-5 inline-block text-orange-600 font-semibold group-hover:underline">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

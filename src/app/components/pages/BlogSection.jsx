// components/BlogSection.jsx
import { ArrowUpRight, Feather } from "lucide-react";
import Link from "next/link"; // Next.js ka Link component
import { blogPosts } from "@/lib/blog"; // ✅ Nayi file se import karein

// ... Placeholder/BlogImage component ...

export default function BlogSection() {
  return (
    <section
      id="blog" // Header se link karne ke liye ID
      className="relative w-full py-20 sm:py-28 overflow-hidden bg-gray-50/50"
    >
      {/* ... Floating Element ... */}
      <Feather
        className="absolute bottom-[20%] left-[10%] text-teal-300 animate-floatReverse"
        size={28}
        style={{ animationDelay: "0.5s" }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-primary text-gray-900 mb-4">
            Our Recent Insights
          </h2>
          {/* ✅ Ye line change ho gayi hai */}
          <p className="text-lg text-gray-600">
            Our latest thoughts on technology and marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            // <Link> component ka istemaal karein
            <Link
              href={`/blog/${post.slug}`} // ✅ Dynamic Link yahaan banega
              key={post.slug}
              className="group bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 transition-shadow hover:shadow-xl"
            >
              {/* Image ko <img> tag se render karein */}
              <div
                className="aspect-video bg-gray-300 bg-cover bg-center group-hover:opacity-90 transition-opacity"
                style={{ backgroundImage: `url(${post.mainImage})` }}
              ></div>
              
              <div className="p-6">
                <p className="text-sm text-teal-600 font-semibold mb-1">
                  {post.category}
                </p>
                <h3 className="text-xl font-semibold font-primary text-gray-800 mb-4 group-hover:text-teal-700">
                  {post.title}
                </h3>
                <span className="font-semibold text-gray-700 inline-flex items-center">
                  Read More
                  <ArrowUpRight
                    size={16}
                    className="ml-1 transform-gpu group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
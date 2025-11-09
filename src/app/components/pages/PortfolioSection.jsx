// components/PortfolioSection.jsx
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import Link from "next/link"; // Use Next.js Link component
import { portfolioItems } from "@/lib/projects"; // Import items from your data file

// ...existing code...

export default function PortfolioSection() {
  return (
    <section
      id="portfolio" // ID to link from header
      className="relative w-full py-20 sm:py-28 overflow-hidden bg-gray-50/50"
    >
      {/* ... Floating Element ... */}
      <BadgeCheck
        className="absolute bottom-[20%] left-[10%] text-green-500 animate-floatReverse"
        size={28}
        style={{ animationDelay: "0.5s" }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-primary text-gray-900 mb-4">
            Our Best Work
          </h2>
          <p className="text-lg text-gray-600">
            We're proud of our work. Check out some of our recent projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {portfolioItems.map((item) => (
            // Use <Link> for client-side navigation
            <Link
              href={`/portfolio/${item.slug}`}
              key={item.slug}
              className="group bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 transition-shadow hover:shadow-xl"
            >
              <div
                className="aspect-video bg-gray-300 bg-cover bg-center group-hover:opacity-90 transition-opacity"
                style={{ backgroundImage: `url(${item.mainImage})` }}
              ></div>

              <div className="p-6">
                <p className="text-sm text-teal-600 font-semibold mb-1">
                  {item.category}
                </p>
                <h3 className="text-xl font-semibold font-primary text-gray-800 mb-4 group-hover:text-teal-700">
                  {item.title}
                </h3>
                <span className="font-semibold text-gray-700 inline-flex items-center">
                  View Case Study
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
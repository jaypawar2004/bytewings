// components/WhyChooseUs.jsx
import { Users, Zap, ShieldCheck, ThumbsUp } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="relative w-full py-20 sm:py-28 overflow-hidden bg-white">
      {/* Floating Element */}
      <ThumbsUp
        className="absolute top-[30%] right-[15%] text-blue-500 animate-float"
        size={24}
        style={{ animationDelay: "4s" }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold font-primary text-gray-900 mb-6">
              Why Partner With Us?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're not just a service provider; we're your technology partner.
              We're committed to your success.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start">
                <ShieldCheck className="w-6 h-6 text-teal-500 mr-3 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold font-primary text-gray-800">
                    Expert Team
                  </h4>
                  <p className="text-gray-600">
                    Our team consists of industry experts who deliver the best results.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Zap className="w-6 h-6 text-teal-500 mr-3 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold font-primary text-gray-800">
                    Fast Delivery
                  </h4>
                  <p className="text-gray-600">
                    We deliver projects on time without compromising on quality.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Users className="w-6 h-6 text-teal-500 mr-3 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold font-primary text-gray-800">
                    Client-First Approach
                  </h4>
                  <p className="text-gray-600">
                    Your needs are our top priority. We listen, understand, and deliver.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center border border-gray-100">
              <span className="text-4xl font-bold text-teal-600">50+</span>
              <p className="text-gray-600 mt-2">Happy Clients</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center border border-gray-100">
              <span className="text-4xl font-bold text-teal-600">100+</span>
              <p className="text-gray-600 mt-2">Projects Done</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center border border-gray-100">
              <span className="text-4xl font-bold text-teal-600">99%</span>
              <p className="text-gray-600 mt-2">Satisfaction Rate</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center border border-gray-100">
              <span className="text-4xl font-bold text-teal-600">5+</span>
              <p className="text-gray-600 mt-2">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
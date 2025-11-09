// components/ServicesSection.jsx
import { Code, Smartphone, Megaphone } from "lucide-react";

const services = [
  {
    icon: <Code size={32} />,
    title: "Web Development",
    description:
      "We build fast, responsive, and secure websites tailored for your business.",
  },
  {
    icon: <Smartphone size={32} />,
    title: "App Development",
    description:
      "High-performance native and hybrid apps for iOS and Android platforms.",
  },
  {
    icon: <Megaphone size={32} />,
    title: "Digital Marketing",
    description:
      "Boost your reach with targeted Meta ads, Google ads, and SEO strategies.",
  },
];

export default function ServicesSection() {
  return (
    // Is section ko white background diya hai
    <section className="relative w-full py-20 sm:py-28 overflow-hidden bg-white">
      {/* Floating Element */}
      <span
        className="absolute top-[15%] right-[10%] text-2xl animate-float"
        style={{ animationDelay: "2s" }}
      >
        ✨
      </span>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-primary text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-gray-600">
            We provide innovative solutions and services that bring your ideas to life with precision and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center transition-transform hover:scale-105"
            >
              <div className="inline-block text-teal-500 bg-teal-50 p-4 rounded-full mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold font-primary text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
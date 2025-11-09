// components/AboutSection.jsx
import { Award } from "lucide-react";

// Avatar component (Hero section se)
const Avatar = ({ img, className }) => (
  <div
    className={`w-10 h-10 rounded-full bg-cover bg-center shadow-md ${className}`}
    style={{ backgroundImage: `url(${img})` }}
  ></div>
);

export default function AboutSection() {
  return (
    // Section ko alternate color diya hai
    <section className="relative w-full py-20 sm:py-28 overflow-hidden bg-gray-50/50">
      {/* Floating Elements */}
      <Avatar
        img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop" // Placeholder image
        className="absolute top-[20%] left-[10%] animate-float"
        style={{ animationDelay: "1s" }}
      />
      <Award
        className="absolute bottom-[25%] right-[15%] text-purple-500 animate-floatReverse"
        size={24}
        style={{ animationDelay: "3s" }}
      />

      <div className="relative z-10 container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold font-primary text-gray-900 mb-6">
          About Our Company
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          At ByteWings, we believe in delivering excellence through innovation.
We’re a team of passionate developers, designers, and strategists dedicated to building digital solutions that truly make an impact.

From startups to established brands, we’ve helped businesses grow through modern web development, clean design, and strategic execution.
Every project we deliver reflects our commitment to quality, creativity, and measurable results.
        </p>
      </div>
    </section>
  );
}
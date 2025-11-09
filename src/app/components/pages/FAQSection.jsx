// components/FAQSection.jsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on the project size and complexity. A simple website may take 2–4 weeks, while a custom web application can take 3–6 months.",
  },
  {
    question: "What is your development process?",
    answer:
      "Our process follows four steps: 1. Discovery & Planning, 2. Design & Prototyping, 3. Development & Testing, 4. Deployment & Support.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes — we offer 30 days of free support after launch. After that, monthly maintenance plans are available.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "We use modern technologies like Next.js, React, Node.js, Tailwind CSS, and Python for AI/ML tasks.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null); // Which question is open

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-20 sm:py-28 overflow-hidden bg-white">
      {/* Floating Element */}
      <span
        className="absolute top-[20%] right-[15%] text-4xl animate-float"
        style={{ animationDelay: "3s" }}
      >
        ?
      </span>

      <div className="relative z-10 container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-primary text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Answers to your common questions.
          </p>
        </div>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left p-6 bg-gray-50/50 hover:bg-gray-100 focus:outline-none"
              >
                <h3 className="text-lg font-semibold font-primary text-gray-800">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={24}
                  className={`text-teal-600 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {/* Answer */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                } overflow-hidden`}
              >
                <p className="p-6 pt-0 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client"
import React, { useEffect, useRef, useState } from "react";

/* Small Reveal component: animates children into view using IntersectionObserver */
function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transform transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </div>
  );
}

const services = [
  {
    id: "web",
    title: "Web Development",
    desc: "Custom websites, progressive web apps, e-commerce, and CMS-driven solutions — performance-first and mobile-ready.",
    icon: (
      <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" fill="none">
        <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 6h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "ai",
    title: "AI Services",
    desc: "AI integrations, chatbots, recommendation engines, and automation to boost conversion & efficiency.",
    icon: (
      <svg className="w-8 h-8 text-violet-400" viewBox="0 0 24 24" fill="none">
        <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "ads",
    title: "Meta / Google Ads",
    desc: "Strategy, high-converting creatives, audience targeting and full-funnel campaign management.",
    icon: (
      <svg className="w-8 h-8 text-pink-400" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "social",
    title: "Social Media",
    desc: "Content calendars, community management, influencer collaborations and growth strategies.",
    icon: (
      <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="none">
        <path d="M4 7h16M4 12h12M4 17h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "video",
    title: "Video Editing",
    desc: "Short-form and long-form editing, motion graphics and promos designed for distribution across channels.",
    icon: (
      <svg className="w-8 h-8 text-green-400" viewBox="0 0 24 24" fill="none">
        <path d="M4 7v10l10-5L4 7z" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "seo",
    title: "SEO & Analytics",
    desc: "Technical SEO, content optimization, analytics setup and data-driven growth experiments.",
    icon: (
      <svg className="w-8 h-8 text-indigo-400" viewBox="0 0 24 24" fill="none">
        <path d="M3 12h18M12 3v18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function page() {
  return (
    <main className="font-sans text-neutral-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-violet-600 to-pink-500 opacity-40 blur-3xl transform-gpu -translate-y-10" />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <Reveal>
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white drop-shadow-md">
                  ByteWings — Technology Digital product & marketing studio
                </h1>
                <p className="text-neutral-100 max-w-xl">
                  We design, build and grow digital experiences — websites, apps, AI integrations,
                  video content and performance marketing. From idea to launch and continuous
                  growth, we partner with ambitious teams to ship measurable results.
                </p>

                <div className="flex flex-wrap gap-3 mt-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-neutral-900 font-medium shadow hover:scale-[1.02] transition-transform"
                  >
                    Get a free quote
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition"
                  >
                    Our Services
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-xl overflow-hidden shadow-lg bg-black">
                {/* Video preview: muted autoplay loop for visual motion */}
                <video
                  src="https://cdn.prod.website-files.com/679cb8f2875d404c7de22f8a%2F67e4f53561d1b2ebf4d1850a_Atlantiser_showreel_website_home-transcode.mp4"
                  className="w-full h-64 md:h-80 object-cover"
                  poster="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
                  muted
                  autoPlay
                  loop
                  playsInline
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <Reveal>
            <h2 className="text-3xl font-bold mb-4">What we do</h2>
            <p className="text-neutral-600 max-w-2xl">
              Full-stack product & marketing: from brand and UX to engineering, AI and paid media.
              We blend creativity and analytics to help your business scale.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Reveal key={s.id} className="bg-neutral-50 p-6 rounded-xl shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-white to-neutral-100 rounded-lg shadow-inner">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-neutral-600">{s.desc}</p>
                    <div className="mt-4">
                      <a
                        href={`/services#${s.id}`}
                        className="text-cyan-600 font-medium hover:underline text-sm"
                      >
                        Learn more →
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS & APPROACH */}
      <section className="bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <Reveal>
              <div>
                <h3 className="text-2xl font-bold">Our approach</h3>
                <p className="mt-3 text-neutral-300">
                  Research → Prototype → Build → Optimize. We measure impact and prioritize what
                  moves metrics.
                </p>
                <ul className="mt-4 space-y-2 text-neutral-300">
                  <li>• Design-driven engineering</li>
                  <li>• Data-informed decisions</li>
                  <li>• Scalable architecture & operations</li>
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex justify-between gap-6">
                <div className="text-center">
                  <div className="text-4xl font-extrabold">+150</div>
                  <div className="text-sm text-neutral-300">Projects delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-extrabold">+60%</div>
                  <div className="text-sm text-neutral-300">Average growth in 6 months</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-extrabold">24/7</div>
                  <div className="text-sm text-neutral-300">Support & monitoring</div>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h4 className="font-semibold">Tech & tools</h4>
                <p className="mt-2 text-neutral-300 text-sm">
                  React, Next.js, Node, Python, TensorFlow/PyTorch, SQL/NoSQL, Docker, cloud
                  providers, Google/Meta ad platforms, analytics & marketing tooling.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-cyan-500 to-violet-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <Reveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold">Ready to start?</h3>
                <p className="text-neutral-100">Tell us about your project — we'll propose a roadmap and estimate.</p>
              </div>
              <div className="flex gap-3">
                <a
                  href="/contact"
                  className="px-6 py-3 bg-white text-neutral-900 rounded-full font-medium shadow hover:scale-[1.02] transition-transform"
                >
                  Contact us
                </a>
                <a
                  href="/portfolio"
                  className="px-6 py-3 border border-white/40 rounded-full text-white hover:bg-white/10 transition"
                >
                  View portfolio
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* <footer className="bg-neutral-100 text-neutral-700 py-8">
        <div className="max-w-6xl mx-auto px-6 text-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>© {new Date().getFullYear()} ByteWings — All rights reserved.</div>
            <div className="flex gap-4">
              <a href="/privacy" className="hover:underline">Privacy</a>
              <a href="/terms" className="hover:underline">Terms</a>
              <a href="/contact" className="hover:underline">Contact</a>
            </div>
          </div>
        </div>
      </footer> */}
    </main>
  );
}
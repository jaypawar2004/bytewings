"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun, PhoneCall, MessageCircle } from "lucide-react";


// The navigation links remain the same
const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// Initial state for the contact form
const initialFormData = {
  name: '',
  phone: '',
  email: '',
  packageType: '',
  adBudget: 'Under ₹10,000', // Default value
  diagnose:'',
  message: '',
};

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // State for Contact Form Logic
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState('idle'); // status: 'idle', 'loading', 'success', 'error'

  const containerClass = isDark
    ? "bg-slate-950 text-slate-50"
    : "bg-slate-50 text-slate-900";
    
  // WhatsApp link and Agency Name
  const whatsAppLink = "https://wa.me/918358097389?text=Hi%20ByteWings,%20I%20want%20more%20leads%20for%20my%20travel%20agency";
  const agencyName = "ByteWings Collab DigitalXabhi";


  // --- FORM HANDLERS ---
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Basic Validation
    if (!formData.name || !formData.phone) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    // Backend API Call (Placeholder)
    const API_ENDPOINT = '/api/contact'; 

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      });

      if (response.ok) {
        setStatus('success');
        setFormData(initialFormData); // Reset form
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error'); // Network ya anya error
    }
  };
  
  // Button text based on status
  const buttonText = 
    status === 'loading' ? 'Sending...' : 
    status === 'success' ? 'Sent!' : 
    'Submit Form →';
    
  const isSubmitting = status === 'loading';
// Logos ka data (Original)
  const logos = [
    "/photos/logo1.jpeg",
    "/photos/logo2.jpeg",
    "/photos/logo3.jpeg",
    "/photos/logo4.jpeg",
    "/photos/logo5.jpeg",
  ];

  // Seamless loop ke liye array ko 4 baar repeat karte hain
  // Isse aisa lagega ki bahut saare logos hain aur loop smooth chalega
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];
  // --- JSX START ---
  return (
    <main className={`min-h-screen ${containerClass} transition-colors duration-300`}>
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur bg-slate-950/70">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-blue-500 via-sky-400 to-cyan-300 flex items-center justify-center text-xl font-bold">
              <img className="object-cover object-center rounded-full" src="/photos/digitalabhi logo.jpeg" alt="ByteWings Logo" onError={(e) => {e.target.src='https://placehold.co/36x36/2563EB/FFFFFF?text=D'}} />
            </div>
            <div>
              <p className="font-semibold text-lg">{agencyName}</p>
              <p className="text-xs text-slate-400">
                Travel Marketing Specialists
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              <PhoneCall size={16} />
              Free Strategy Call
            </a>
            <button
              onClick={() => setIsDark((prev) => !prev)}
              className="p-2 rounded-full border border-white/10 hover:bg-white/5 transition"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          {/* Mobile Icons */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setIsDark((prev) => !prev)}
              className="p-2 rounded-full border border-white/10 hover:bg-white/5 transition"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="p-2 rounded-lg border border-white/10"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 bg-slate-950/95">
            <nav className="flex flex-col px-4 py-3 gap-3 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-200 py-1"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
              >
                <PhoneCall size={16} />
                Free Strategy Call
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-slate-900 to-slate-950 opacity-90" />
        <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 flex flex-col md:flex-row items-center gap-10">
          {/* Left */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="inline-flex items-center gap-2 text-xs font-medium text-slate-200 bg-white/10 border border-white/20 rounded-full px-3 py-1 mb-4">
              🎯 Travel Agents Only — Meta + Google Ads
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white">
              Get <span className="text-blue-300">40–100 Daily Leads</span> & 1000+ Monthly Travel Inquiries — Guaranteed
            </h1>
            <p className="text-base md:text-lg text-slate-200 max-w-xl mb-6">
              Struggling to get consistent travel inquiries? We help travel agencies generate high-quality, ready-to-book leads every single day through proven Meta & Google Ads strategies.
              <br />
              <span className="font-semibold mt-2 block">Even if you’ve tried ads earlier and didn’t get results — we fix that.</span>
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl text-sm md:text-base font-semibold shadow-lg shadow-blue-500/30 transition"
              >
                <PhoneCall size={18} />
                Free Strategy Call
              </a>
              <span className="text-xs md:text-sm text-slate-300">
                Cost Per Lead: ₹15–₹30 | No Long-Term Contract
              </span>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white/5 border border-white/15 rounded-2xl p-5 md:p-6 backdrop-blur">
              <p className="text-sm text-slate-200 mb-4 font-medium">
                ⭐ What Results You Can Expect
              </p>
              <div className="space-y-3 text-sm text-slate-100">
                <div className="flex justify-between">
                  <span>✔ 40–100 daily travel leads</span>
                </div>
                <div className="flex justify-between">
                  <span>✔ 1000+ monthly inquiries</span>
                </div>
                <div className="flex justify-between">
                  <span>✔ ₹15–₹30 cost per lead</span>
                </div>
                <div className="flex justify-between">
                  <span>✔ WhatsApp leads within 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>✔ Domestic + International package leads</span>
                </div>
                <div className="flex justify-between">
                  <span>✔ High-intent travel audience targeting</span>
                </div>
              </div>
              <p className="mt-4 text-xs text-slate-300">
                We work exclusively with travel businesses — so we know what works.
              </p>
            </div>
          </motion.div>
        </div>
        {/* Animated CTA */}
        <div className="mt-8 flex justify-center">
          <motion.a
            href="#form"
            aria-label="Get Free Audit"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm md:text-base font-semibold shadow-lg shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <PhoneCall size={18} />
            Get Free Marketing Audit
          </motion.a>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            id="why"
            className="text-2xl md:text-3xl font-bold text-center mb-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            ✅ Why Travel Agencies Choose Us
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "🔹 Experts in Travel Lead Generation",
                text: "We only serve travel companies — strategies tested and proven.",
              },
              {
                title: "🔹 1000+ Travel Leads in 3 Months",
                text: "Domestic, international & group tours.",
              },
              {
                title: "🔹 Hyper-Targeted Travel Audience",
                text: "Target specific cities, routes, and traveler intent.",
              },
              {
                title: "🔹 Consistent CPL: ₹15–₹30",
                text: "Affordable & predictable results.",
              },
              {
                title: "🔹 Dedicated Performance Manager",
                text: "Weekly optimization + reporting + scaling.",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 shadow-lg shadow-black/30"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-300">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Animated CTA */}
        <div className="mt-8 flex justify-center">
          <motion.a
            href="#form"
            aria-label="Get Free Audit"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm md:text-base font-semibold shadow-lg shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <PhoneCall size={18} />
            Get Free Marketing Audit
          </motion.a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 md:py-20 px-4 bg-slate-900/60">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-center mb-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            📢 Our Services
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="p-6 rounded-2xl border border-slate-800 bg-slate-950/70"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3">🟦 Meta Ads (Facebook + Instagram)</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Lead generation ads</li>
                <li>• WhatsApp integration</li>
                <li>• Custom travel targeting</li>
                <li>• Professional creatives</li>
                <li>• Instant form setup</li>
              </ul>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl border border-slate-800 bg-slate-950/70"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
            >
              <h3 className="text-xl font-semibold mb-3">🟥 Google Ads</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Search ads for ready-to-book travelers</li>
                <li>• Keyword & city targeting</li>
                <li>• Conversion-focused setup</li>
                <li>• High-quality inquiries</li>
              </ul>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl border border-slate-800 bg-slate-950/70"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-3">🌐 Landing Page / Website</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• High-converting travel landing pages</li>
                <li>• Fast loading + mobile-first</li>
                <li>• Pixel & tracking setup</li>
                <li>• WhatsApp click-to-chat integration</li>
              </ul>
            </motion.div>
          </div>
        </div>
        {/* Animated CTA */}
        <div className="mt-8 flex justify-center">
          <motion.a
            href="#form"
            aria-label="Get Free Audit"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm md:text-base font-semibold shadow-lg shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <PhoneCall size={18} />
            Get Free Marketing Audit
          </motion.a>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-16 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-center mb-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            🛠 How We Grow Your Travel Agency
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                title: "Step 1: Free Strategy Call",
                text: "We understand your packages, destinations & audience.",
              },
              {
                title: "Step 2: Ad Setup",
                text: "We launch high-performing Meta & Google campaigns.",
              },
              {
                title: "Step 3: Leads Start Coming In",
                text: "Get inquiries directly on WhatsApp, email, or CRM.",
              },
              {
                title: "Step 4: Scale",
                text: "Increase leads while keeping CPL at ₹15–₹30.",
              },
            ].map((step, idx) => (
              <motion.div
                key={step.title}
                className="flex gap-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="mt-1 h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-semibold">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-slate-300">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="#calendly" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl text-sm md:text-base font-semibold inline-flex items-center gap-2"
            >
              <PhoneCall size={18} />
              Book a Strategy Call Now
            </a>
          </div>
        </div>
        {/* Animated CTA */}
        {/* <div className="mt-8 flex justify-center">
          <motion.a
            href="#form"
            aria-label="Get Free Audit"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm md:text-base font-semibold shadow-lg shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <PhoneCall size={18} />
            Get Free Marketing Audit
          </motion.a>
        </div> */}
      </section>

      {/* RESULTS */}
      <section
        id="results"
        className="py-16 md:py-20 px-4 bg-slate-900/60 border-y border-slate-800"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            🚀 Recent Wins
          </motion.h2>

          <motion.div
            className="space-y-4 text-sm md:text-base text-slate-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p>🏔 **Himachal Tour Agency (Domestic):** 214 leads in 14 days | 35% conversion rate</p>
            <p>💰 **Domestic Packages CPL:** Average CPL: ₹15–₹30 (Himachal, Kashmir, Kerala, Goa, etc.)</p>
            <p>🌍 **International Packages:** 30% conversion rate</p>
            <p>📱 **WhatsApp Lead Cost:** ₹15–₹30 per lead</p>
            <p>🚌 **Kashmir Group Departures:** 7 groups filled in 3 weeks</p>
          </motion.div>
        </div>
        {/* Animated CTA */}
        <div className="mt-8 flex justify-center">
          <motion.a
            href="#form"
            aria-label="Get Free Audit"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm md:text-base font-semibold shadow-lg shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <PhoneCall size={18} />
            Get Free Marketing Audit
          </motion.a>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            💬 Who Is This For?
          </motion.h2>
          <ul className="space-y-3 text-sm md:text-base text-slate-200">
            <li>✔ Travel Agencies</li>
            <li>✔ Tour Operators</li>
            <li>✔ Holiday Package Providers</li>
            <li>✔ Group Tour Sellers</li>
            <li>✔ Honeymoon Package Providers</li>
            <li>✔ New Travel Startups</li>
          </ul>
        </div>
        {/* Animated CTA */}
        <div className="mt-8 flex justify-center">
          <motion.a
            href="#form"
            aria-label="Get Free Audit"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm md:text-base font-semibold shadow-lg shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <PhoneCall size={18} />
            Get Free Marketing Audit
          </motion.a>
        </div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="py-16 md:py-20 px-4 bg-slate-900/70 border-y border-slate-800"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-center mb-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            💸 Cost Per Lead & Pricing
          </motion.h2>

          <div className="flex justify-center mb-10">
            <div className="p-7 rounded-2xl border-2 border-blue-500 bg-slate-950 text-center shadow-lg shadow-blue-500/30">
              <p className="text-xs uppercase tracking-wide text-blue-300 mb-2">
                Predictable Cost
              </p>
              <h3 className="text-xl font-semibold mb-2">Average Cost Per Lead (CPL)</h3>
              <p className="text-4xl font-bold mb-3">₹15–₹30</p>
              <p className="text-sm text-slate-300 mb-4">
                (Varies based on niche and city targeting)
              </p>
              <p className="text-sm font-medium text-slate-100">
                No hidden charges. No long-term contract.
              </p>
            </div>
          </div>
          
          <p className="text-center text-sm font-medium text-slate-400 mb-6">
            For management fees, please book a free strategy call to discuss customized plans.
          </p>
          
          <p className="text-center text-xs md:text-sm text-slate-400 mt-6">
            *Ad spend is not included in the management fee.
          </p>
        </div>
        {/* Animated CTA */}
        <div className="mt-8 flex justify-center">
          <motion.a
            href="#form"
            aria-label="Get Free Audit"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm md:text-base font-semibold shadow-lg shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <PhoneCall size={18} />
            Get Free Marketing Audit
          </motion.a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About Us
          </motion.h2>
          <p className="text-sm md:text-base text-slate-200 max-w-2xl mx-auto">
            We are <span className="font-semibold">{agencyName}</span> — a digital marketing agency specializing in **travel industry lead generation**. With **1000+ travel leads generated in the last 3 months**, we help agencies scale fast with predictable results.
          </p>
        </div>
        {/* Animated CTA */}
        <div className="mt-8 flex justify-center">
          <motion.a
            href="#form"
            aria-label="Get Free Audit"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm md:text-base font-semibold shadow-lg shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <PhoneCall size={18} />
            Get Free Marketing Audit
          </motion.a>
        </div>
      </section>

      {/* TESTIMONIALS - horizontal infinite marquee of circular logos + subtle animated CTA */}
     <section id="testimonials" className="py-16 md:py-20 px-4 bg-slate-900/60 border-y border-slate-800 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          🗣 Trusted by Travel Brands
        </motion.h2>
        <p className="text-center text-slate-300 mb-10 max-w-2xl mx-auto">
          A few partners and brands we've worked with.
        </p>

        {/* Infinite Marquee Container */}
        <div className="relative w-full">
          
          {/* Left/Right Fade Effect (Gradient Mask) */}
          <div className="absolute inset-y-0 left-0 w-10 md:w-20 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-10 md:w-20 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>

          <div className="bg-slate-950/30 border border-slate-800 rounded-2xl py-6 overflow-hidden flex">
            <motion.div
              className="flex items-center gap-6 md:gap-10 pr-6 md:pr-10"
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear",
              }}
              style={{ width: "fit-content" }}
            >
              {duplicatedLogos.map((src, idx) => (
                <div
                  key={`${src}-${idx}`}
                  className="flex-shrink-0 h-16 w-16 md:h-24 md:w-24 rounded-full bg-slate-800/40 flex items-center justify-center overflow-hidden border border-slate-700 hover:border-slate-500 transition-colors duration-300"
                >
                  <img
                    src={src}
                    alt={`Client Logo ${idx + 1}`}
                    className="h-10 w-10 md:h-16 md:w-16 object-contain rounded-full"
                    onError={(e) => {
                      e.target.src = "https://placehold.co/80x80?text=Logo";
                    }}
                  />
                </div>
              ))}
            </motion.div>

            {/* Duplicate for seamless loop */}
            <motion.div
              className="flex items-center gap-6 md:gap-10 pr-6 md:pr-10"
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear",
              }}
              style={{ width: "fit-content" }}
              aria-hidden="true"
            >
              {duplicatedLogos.map((src, idx) => (
                <div
                  key={`duplicate-${src}-${idx}`}
                  className="flex-shrink-0 h-16 w-16 md:h-24 md:w-24 rounded-full bg-slate-800/40 flex items-center justify-center overflow-hidden border border-slate-700 hover:border-slate-500 transition-colors duration-300"
                >
                  <img
                    src={src}
                    alt=""
                    className="h-10 w-10 md:h-16 md:w-16 object-contain rounded-full"
                    onError={(e) => {
                      e.target.src = "https://placehold.co/80x80?text=Logo";
                    }}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Centered animated CTA */}
        <div className="mt-8 flex justify-center">
          <motion.a
            href="#form"
            aria-label="Get Free Audit"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm md:text-base font-semibold shadow-lg shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <PhoneCall size={18} />
            Get Free Marketing Audit
          </motion.a>
        </div>
      </div>
    </section>
      
      {/* CONTACT FORM SECTION - LOGIC MERGED HERE */}
      <section
        id="form"
        className="py-20 px-4 bg-slate-900/70 border-y border-slate-800"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Get a Free Marketing Audit
          </h2>
          <p className="text-center text-slate-300 mb-10 max-w-2xl mx-auto">
            Fill out the form and our team will contact you within 24 hours.
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-8 rounded-2xl border border-slate-800 shadow-xl"
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="text-slate-300 mb-1">Your Name*</label>
              <input
                type="text"
                id="name"
                name="name" // State se bind karne ke liye name
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="text-slate-300 mb-1">Phone Number*</label>
              <input
                type="tel" // tel type use kiya
                id="phone"
                name="phone" // State se bind
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                required
                className="px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-slate-300 mb-1">Email*</label>
              <input
                type="email" // tel type use kiya
                id="email"
                name="email" // State se bind
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email "
                required
                className="px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="packageType" className="text-slate-300 mb-1">Type of Package</label>
              <input
                type="text"
                id="packageType"
                name="packageType" // State se bind
                value={formData.packageType}
                onChange={handleChange}
                placeholder="Dubai, Himachal, Kashmir etc."
                className="px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="adBudget" className="text-slate-300 mb-1">Monthly Ad Budget</label>
              <select 
                id="adBudget" 
                name="adBudget" // State se bind
                value={formData.adBudget}
                onChange={handleChange}
                className="px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Under ₹10,000</option>
                <option>₹10,000 – ₹25,000</option>
                <option>₹25,000 – ₹50,000</option>
                <option>₹50,000 – ₹1,00,000</option>
                <option>₹1,00,000+</option>
              </select>
            </div>
 <div className="flex flex-col">
              <label htmlFor="diagnose" className="text-slate-300 mb-1">Website or pages Link (Free diagnose)</label>
              <input
                type="text"
                id="diagnose"
                name="diagnose" // State se bind
                value={formData.diagnose}
                onChange={handleChange}
                placeholder="Website or pages link"
                className="px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="col-span-1 md:col-span-2 flex flex-col">
              <label htmlFor="message" className="text-slate-300 mb-1">Message</label>
              <textarea
                id="message"
                name="message" // State se bind
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your agency..."
                className="px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            
            {/* Status Messages */}
            <div className="col-span-1 md:col-span-2 text-center">
                {status === 'success' && (
                    <p className="text-green-400 font-medium">✅ Success! Your message has been sent. We will contact you within 24 hours.</p>
                )}
                {status === 'error' && (
                    <p className="text-red-400 font-medium">❌ Error! Something went wrong. Please try again or WhatsApp us.</p>
                )}
            </div>

            <div className="col-span-1 md:col-span-2 flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting || status === 'success'}
                className={`px-8 py-3 rounded-xl text-lg font-semibold shadow-lg transition duration-200 ${
                    (status === 'success' || status === 'loading') 
                    ? 'bg-blue-800 opacity-70 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/30'
                } text-white`}
              >
                {buttonText}
              </button>
            </div>
          </form>

        </div>
      </section>

      {/* CALENDLY SECTION */}
      <section
        id="calendly"
        className="py-20 px-4 bg-slate-950 border-t border-slate-800"
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Book a 30-Minute Strategy Call</h2>
          <p className="text-slate-300 mb-6">
            Select a time slot that works best for you.
          </p>

          <div className="bg-slate-900 border border-slate-700 p-4 rounded-2xl shadow-xl">
            <iframe
              src="https://calendly.com/infobytewings/30min?hide_event_type_details=1&hide_gdpr_banner=1"
              width="100%"
              height="650"
              className="rounded-xl"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CONTACT / FINAL CTA */}
      <section
        id="contact"
        className="py-16 md:py-20 px-4 bg-gradient-to-r from-blue-600 to-sky-500"
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            📞 Ready to Get 1000+ Monthly Travel Leads?
          </h2>
          <p className="text-base md:text-lg mb-8 max-w-xl mx-auto font-medium">
            Choose Your Preferred Way to Get Started
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {/* 1. Fill the Form (Quickest) */}
            <a
              href="#form"
              className="inline-flex items-center gap-2 bg-white text-blue-700 px-7 py-3 rounded-xl text-sm md:text-base font-semibold shadow-lg hover:bg-slate-100 transition"
            >
              <span className="text-xl"></span> Fill the Form
            </a>

            {/* 2. WhatsApp Us */}
            <a
              href={whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-7 py-3 rounded-xl text-sm md:text-base font-semibold shadow-lg hover:bg-green-600 transition"
            >
             <img className="w-5" src="https://img.icons8.com/?size=100&id=7OeRNqg6S7Vf&format=png&color=FFFFFF" alt="WhatsApp Icon" />
              Contact on WhatsApp
            </a>
            
            {/* 3. Book a Calendly Meeting */}
             <a
              href="#calendly"
              className="inline-flex items-center gap-2 bg-purple-500 text-white px-7 py-3 rounded-xl text-sm md:text-base font-semibold shadow-lg hover:bg-purple-600 transition"
            >
              <PhoneCall size={20} />
              Book a Calendly Meeting
            </a>
          </div>
           <p className="text-xs md:text-sm text-blue-100 mt-4">
              Instant support | Fast replies
            </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-5 px-4 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {agencyName}. All rights reserved.</p>
          <p>Travel Ads • Lead Generation • Meta & Google Ads</p>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={whatsAppLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 inline-flex items-center justify-center rounded-full shadow-xl bg-green-500 hover:bg-green-600 w-12 h-12"
      >
         <img className="w-7" src="https://img.icons8.com/?size=100&id=7OeRNqg6S7Vf&format=png&color=FFFFFF" alt="Floating WhatsApp Icon" />
      </a>
    </main>
  );
}
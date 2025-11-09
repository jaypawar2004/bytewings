// "use client"
// import React, { useEffect, useRef, useState } from "react";
// import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

// export default function page() {
//   const [visible, setVisible] = useState(false);
//   const [status, setStatus] = useState({ type: "", message: "" });
//   const [loading, setLoading] = useState(false);
//   const formRef = useRef(null);

//   useEffect(() => {
//     // small entrance animation
//     const t = setTimeout(() => setVisible(true), 80);
//     return () => clearTimeout(t);
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = formRef.current;
//     const name = form.name.value.trim();
//     const email = form.email.value.trim();
//     const phone = form.phone.value.trim();
//     const service = form.service.value;
//     const message = form.message.value.trim();

//     if (!name || !email || !message) {
//       setStatus({ type: "error", message: "Please fill name, email and message." });
//       return;
//     }

//     // basic email check
//     if (!/^\S+@\S+\.\S+$/.test(email)) {
//       setStatus({ type: "error", message: "Please enter a valid email." });
//       return;
//     }

//     setLoading(true);
//     setStatus({ type: "", message: "" });

//     try {
//       // TODO: Replace with your API endpoint to send email/store lead
//       // Example:
//       // await fetch("/api/contact", { method: "POST", body: JSON.stringify({ name, email, phone, service, message }) });

//       // temporary simulated request
//       await new Promise((r) => setTimeout(r, 900));

//       setStatus({ type: "success", message: "Thanks! We received your request — we will contact you soon." });
//       form.reset();
//     } catch (err) {
//       setStatus({ type: "error", message: "Something went wrong. Please try again later." });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 font-sans">
//       <div className="max-w-6xl mx-auto px-6 py-16">
//         <div
//           className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start transition-all duration-700 ${
//             visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//           }`}
//         >
//           {/* CONTACT DETAILS */}
//           <aside className="rounded-2xl bg-gradient-to-tr from-cyan-600 via-violet-600 to-pink-500 p-8 text-white shadow-lg">
//             <h1 className="text-4xl font-extrabold mb-2">Get in touch</h1>
//             <p className="text-neutral-100/90 mb-6 max-w-md">
//               Whether you need a website, AI integration, marketing campaigns, video editing, or
//               long-term product support — we’re here to help. Tell us about your project and we’ll
//               propose a plan and estimate.
//             </p>

//             <div className="space-y-4 text-sm">
//               <div>
//                 <div className="text-xs text-white/80">Email</div>
//                 <a href="mailto:info@bytewings.com" className="font-medium block">
//                   info@bytewings.com
//                 </a>
//               </div>

//               <div>
//                 <div className="text-xs text-white/80">Phone</div>
//                 <a href="tel:+917000654043" className="font-medium block">
//                   +91 70006 54043
//                 </a>
//               </div>

//               <div>
//                 <div className="text-xs text-white/80">Address</div>
//                 <address className="not-italic text-sm">
//                   ByteWings Studio<br />
//                   123 Tech Park, Sector 9<br />
//                   Your City, State — PIN 000000
//                 </address>
//               </div>

//               <div>
//                 <div className="text-xs text-white/80 mb-2">Working hours</div>
//                 <div className="text-sm">Mon — Fri: 9:00 — 18:00</div>
//               </div>
//             </div>

//             <div className="mt-8 flex items-center gap-3">
//               <a href="#" aria-label="Instagram" className="p-2 rounded-md bg-white/10 hover:bg-white/20">
//                 <FaInstagram />
//               </a>
//               <a href="#" aria-label="Twitter" className="p-2 rounded-md bg-white/10 hover:bg-white/20">
//                 <FaXTwitter />
//               </a>
//               <a href="#" aria-label="LinkedIn" className="p-2 rounded-md bg-white/10 hover:bg-white/20">
//                 <FaLinkedinIn />
//               </a>
//             </div>

//             {/* Small map preview */}
//             <div className="mt-8 rounded-lg overflow-hidden border border-white/10">
//               <iframe
//                 title="ByteWings location"
//                 src="https://maps.google.com/maps?q=New%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
//                 className="w-full h-36"
//                 loading="lazy"
//               />
//             </div>
//           </aside>

//           {/* CONTACT FORM */}
//           <section className="bg-white rounded-2xl p-8 shadow-md">
//             <h2 className="text-2xl font-bold mb-1">Send us a message</h2>
//             <p className="text-sm text-neutral-500 mb-6">
//               Fill the form and we will reach out to schedule a free consultation.
//             </p>

//             <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <label className="block">
//                   <span className="text-sm text-neutral-600">Name</span>
//                   <input
//                     name="name"
//                     type="text"
//                     required
//                     className="mt-1 block w-full rounded-md border border-neutral-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
//                     placeholder="Your full name"
//                   />
//                 </label>

//                 <label className="block">
//                   <span className="text-sm text-neutral-600">Email</span>
//                   <input
//                     name="email"
//                     type="email"
//                     required
//                     className="mt-1 block w-full rounded-md border border-neutral-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
//                     placeholder="you@example.com"
//                   />
//                 </label>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <label className="block">
//                   <span className="text-sm text-neutral-600">Phone</span>
//                   <input
//                     name="phone"
//                     type="tel"
//                     className="mt-1 block w-full rounded-md border border-neutral-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
//                     placeholder="+91 000-000-0000"
//                   />
//                 </label>

//                 <label className="block">
//                   <span className="text-sm text-neutral-600">Service</span>
//                   <select
//                     name="service"
//                     className="mt-1 block w-full rounded-md border border-neutral-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
//                     defaultValue=""
//                   >
//                     <option value="" disabled>
//                       Select service
//                     </option>
//                     <option>Web Development</option>
//                     <option>AI & Automation</option>
//                     <option>Meta / Google Ads</option>
//                     <option>Social Media</option>
//                     <option>Video Editing</option>
//                     <option>SEO & Analytics</option>
//                   </select>
//                 </label>
//               </div>

//               <label className="block">
//                 <span className="text-sm text-neutral-600">Message</span>
//                 <textarea
//                   name="message"
//                   rows="5"
//                   required
//                   className="mt-1 block w-full rounded-md border border-neutral-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
//                   placeholder="Tell us about your project, timeline and budget (if any)..."
//                 />
//               </label>

//               <div className="flex items-center justify-between gap-4">
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="inline-flex items-center gap-2 px-5 py-3 bg-cyan-600 text-white font-medium rounded-md shadow hover:bg-cyan-700 transition disabled:opacity-60"
//                 >
//                   {loading ? "Sending..." : "Send message"}
//                 </button>

//                 <div className="text-sm text-neutral-500">
//                   By sending, you agree to our <a href="/privacy" className="underline">privacy policy</a>.
//                 </div>
//               </div>

//               {status.message && (
//                 <div
//                   role="status"
//                   className={`mt-3 p-3 rounded-md text-sm ${
//                     status.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
//                   }`}
//                 >
//                   {status.message}
//                 </div>
//               )}
//             </form>
//           </section>
//         </div>
//       </div>
//     </main>
//   );
// }




// src/app/contact/page.jsx
import ContactForm from "@/app/components/ContactForm"; // Form component import karein

export const metadata = {
  title: "Contact Us | ByteWings",
  description: "Get in touch with the ByteWings team for your project.",
};

export default function ContactPage() {
  return (
    <section className="relative w-full min-h-screen py-20 md:py-28 overflow-hidden">
      {/* Background Gradient (Theme) */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-100/50 via-cyan-50/30 to-gray-50"></div>

      {/* Floating Elements (Optional, for theme) */}
      <span
        className="absolute top-[15%] left-[5%] text-2xl animate-float"
        style={{ animationDelay: "1s" }}
      >
        👋
      </span>
      <span
        className="absolute bottom-[10%] right-[5%] text-2xl animate-floatReverse"
        style={{ animationDelay: "2s" }}
      >
        ✨
      </span>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Column 1: Image & Text */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold font-primary text-gray-900 mb-6">
              Let's build something great.
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We're excited to hear about your project. Fill out the form,
              and we'll get back to you as soon as possible.
            </p>
            {/* Badi Image */}
            <div className="relative w-full aspect-square rounded-2xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=800&fit=crop" // Placeholder
                alt="Contact Us"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Column 2: Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
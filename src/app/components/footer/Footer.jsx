"use client"
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    // outer container now relative + overflow-hidden so decorative layers can sit behind content
    <footer className="relative overflow-hidden w-full">
      {/* Decorative background layers (behind content) */}
      <div className="absolute inset-0 -z-10">
        {/* Colorful blurred gradient */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-violet-600 to-pink-500 opacity-70 blur-3xl transform-gpu -translate-y-6"
        />
        {/* Dark overlay for contrast so text remains readable */}
        <div aria-hidden className="absolute inset-0 bg-neutral-900/80 backdrop-blur-sm" />
        {/* Optional subtle pattern or highlight */}
        <div
          aria-hidden
          className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/2 rounded-full blur-2xl"
        />
      </div>

      {/* Main content stays on top */}
      <div className="relative z-10 bg-transparent text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand / Description */}
            <div>
              <h3 className="text-2xl font-semibold">ByteWings</h3>
              <p className="mt-3 text-sm text-neutral-300">
                Building delightful digital experiences. Follow us for updates,
                products, and community events.
              </p>

              <div className="flex items-center gap-3 mt-6">
                {/* Social icons */}
                <a href="#" aria-label="Twitter" className="text-neutral-300 hover:text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M22 5.92c-.7.31-1.45.52-2.24.61a3.93 3.93 0 0 0 1.72-2.17 7.86 7.86 0 0 1-2.49.95A3.92 3.92 0 0 0 11.5 8.5c0 .31.03.62.1.92A11.13 11.13 0 0 1 3 5.15a3.9 3.9 0 0 0-.53 1.97c0 1.36.69 2.56 1.74 3.27a3.9 3.9 0 0 1-1.78-.49v.05c0 1.9 1.35 3.48 3.14 3.84a3.95 3.95 0 0 1-1.77.07 3.93 3.93 0 0 0 3.66 2.72A7.87 7.87 0 0 1 2 19.54 11.12 11.12 0 0 0 8.29 21c6.55 0 10.14-5.42 10.14-10.12v-.46A7.1 7.1 0 0 0 22 5.92z" />
                  </svg>
                </a>

                <a href="#" aria-label="Instagram" className="text-neutral-300 hover:text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                    <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </a>

                <a href="#" aria-label="LinkedIn" className="text-neutral-300 hover:text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-.9 1.8-1.8 3.7-1.8 4 0 4.7 2.6 4.7 6v7H17v-6.2c0-1.5 0-3.5-2.2-3.5-2.2 0-2.5 1.6-2.5 3.4V21H9z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/store" className="hover:text-white">Store</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>

            {/* Support / Contact */}
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="text-sm text-neutral-300 space-y-2">
                <li>Help Center</li>
                <li>Shipping & Returns</li>
                <li>Privacy Policy</li>
                <li className="mt-3">
                  <span className="block text-xs text-neutral-400">Email</span>
                  <a href="mailto:hello@bytewings.com" className="hover:text-white">info@bytewings.com</a>
                </li>
                <li className="mt-2">
                  <span className="block text-xs text-neutral-400">Phone</span>
                  <a href="tel:+91 7000654043" className="hover:text-white">+1 (234) 567-890</a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-3">Newsletter</h4>
              <p className="text-sm text-neutral-300">Get the latest news and updates right in your inbox.</p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-4 flex flex-col sm:flex-row gap-3"
                aria-label="Subscribe to newsletter"
              >
                <label className="sr-only" htmlFor="footer-email">Email address</label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full px-3 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-cyan-500 text-neutral-900 rounded-md text-sm font-medium hover:bg-cyan-600"
                >
                  Subscribe
                </button>
              </form>

              <p className="text-xs text-neutral-500 mt-4">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-neutral-400">
            <p>© {new Date().getFullYear()} ByteWings. All rights reserved.</p>
            <div className="flex gap-4 mt-3 md:mt-0">
              <Link href="/terms" className="hover:text-white">Terms</Link>
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
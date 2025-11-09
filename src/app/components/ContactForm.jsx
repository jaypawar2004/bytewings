// src/app/components/ContactForm.jsx
'use client';

import { useState } from 'react';
import { Phone, Mail } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'Web Development', // Default value
    message: '',
  });

  const [status, setStatus] = useState(''); // 'loading', 'success', 'error'

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (e) => {
    setFormData((prev) => ({ ...prev, service: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Hum wahi backend API use kar sakte hain
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ // Form reset karein
          name: '',
          company: '',
          phone: '',
          email: '',
          service: 'Web Development',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-white/70 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-lg border border-gray-200/50">
      <h2 className="text-3xl font-bold font-primary text-gray-900 mb-6">
        Get in Touch
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Company Name (Optional)
          </label>
          <input
            type="text"
            id="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Phone & Email (Side-by-side) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
        </div>

        {/* Service Inquiry */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Service Inquiry
          </label>
          <select
            id="service"
            value={formData.service}
            onChange={handleSelectChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
          >
            <option>Web Development</option>
            <option>App Development</option>
            <option>Digital Marketing</option>
            <option>AI/ML Solutions</option>
            <option>Cloud Services</option>
            <option>Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Your Message
          </label>
          <textarea
            id="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Tell us more about your project..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-gray-900 text-white font-semibold py-3 px-10 rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-300 disabled:bg-gray-400"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
          </button>
        </div>

        {/* Status Messages */}
        <div className="text-center mt-4 h-5">
          {status === 'success' && (
            <p className="text-green-600">Thanks! We'll be in touch soon.</p>
          )}
          {status === 'error' && (
            <p className="text-red-600">Oops! Something went wrong.</p>
          )}
        </div>
      </form>

      {/* Form ke Bahar Wale Buttons (Jaisa aapne kaha) */}
      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-4">Or, if you prefer, call us directly:</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:+910000000000" // Yahaan apna phone number daalein
            className="inline-flex items-center justify-center gap-2 bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-teal-500 transition-colors"
          >
            <Phone size={18} />
            Call for Queries
          </a>
          <a
            href="mailto:infobytewings@gmail.com" // Aapka email
            className="inline-flex items-center justify-center gap-2 bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors"
          >
            <Mail size={18} />
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
}
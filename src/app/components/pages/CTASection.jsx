// // components/CTASection.jsx
// export default function CTASection() {
//   return (
//     <section id="contact" className="relative w-full py-24 sm:py-32 overflow-hidden">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-100/50 via-cyan-50/30 to-gray-50"></div>

//       {/* Floating Elements */}
//       <span
//         className="absolute top-[20%] left-[15%] text-2xl animate-float"
//         style={{ animationDelay: "1s" }}
//       >
//         🎉
//       </span>
//       <span
//         className="absolute bottom-[20%] right-[15%] text-2xl animate-floatReverse"
//         style={{ animationDelay: "2s" }}
//       >
//         👋
//       </span>

//       <div className="relative z-10 container mx-auto px-4 max-w-4xl">
//         <div className="max-w-3xl text-center mx-auto">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-primary text-gray-900 mb-8">
//             Let’s Grow Your Business Together 🚀
//           </h2>
//           <p className="text-lg text-gray-600 mb-10 max-w-lg mx-auto">
//             Have an idea? We have the expertise. Fill the form and let's talk.
//           </p>
//         </div>

//         {/* Contact Form */}
//         <form className="bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-200/50 max-w-3xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//             {/* First Name */}
//             <div>
//               <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-2">
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 id="first-name"
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
//                 placeholder="Your first name"
//               />
//             </div>
//             {/* Last Name */}
//             <div>
//               <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-2">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 id="last-name"
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
//                 placeholder="Your last name"
//               />
//             </div>
//           </div>
//           {/* Email */}
//           <div className="mb-6">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
//               placeholder="Your email address"
//             />
//           </div>
//           {/* Message */}
//           <div className="mb-8">
//             <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//               Message
//             </label>
//             <textarea
//               id="message"
//               rows="4"
//               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
//               placeholder="Tell us about your project..."
//             ></textarea>
//           </div>
//           {/* Submit Button */}
//           <div className="text-center">
//             <button
//               type="submit"
//               className="bg-gray-900 text-white font-semibold py-3 px-10 rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-300"
//             >
//               Send Message
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// }


// src/app/components/pages/CTASection.jsx
'use client'; 

import { useState } from 'react';

export default function CTASection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '', // ✅ Naya field add kiya
    message: '',
  });
  
  const [status, setStatus] = useState(''); 

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '', // ✅ Ise bhi reset kiya
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative w-full py-24 sm:py-32 overflow-hidden">
      {/* ... (Background aur Floating Elements) ... */}
      
      <div className="relative z-10 container mx-auto px-4 max-w-4xl">
        {/* ... (Header Text) ... */}
        <div className="max-w-3xl text-center mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-primary text-gray-900 mb-8">
            Let’s Grow Your Business Together 🚀
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-lg mx-auto">
            Have an idea? We have the expertise. Fill out the form and let's talk.
          </p>
        </div>
        
        <form
          onSubmit={handleSubmit}
          className="bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-200/50 max-w-3xl mx-auto"
        >
          {/* First/Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your first name"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your last name"
                required
              />
            </div>
          </div>
          
          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Your email address"
              required
            />
          </div>

          {/* ✅ NAYA FIELD: Mobile Number */}
          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Mobile Number
            </label>
            <input
              type="tel" // 'tel' type mobile par number pad laata hai
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Your mobile number"
              required
              // Isko 'required' nahi banaya
            />
          </div>

          {/* Message */}
          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Tell us about your project..."
              required
            ></textarea>
          </div>
          
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gray-900 text-white font-semibold py-3 px-10 rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-300 disabled:bg-gray-400"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          
          {/* Status Messages */}
          <div className="text-center mt-4">
            {status === 'success' && (
              <p className="text-green-600">Thanks! Your message has been sent.</p>
            )}
            {status === 'error' && (
              <p className="text-red-600">Oops! Something went wrong. Please try again.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
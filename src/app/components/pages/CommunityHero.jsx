// components/CommunityHero.jsx
"use client";
import { ThumbsUp, MessageSquare, BadgeCheck, Star, Award } from "lucide-react";
import { useState } from "react";

// Ek chhota helper component avatars ke liye
const Avatar = ({ img, className }) => {
  // Aap yahaan <Image> component bhi use kar sakte hain
  return (
    <div
      className={`w-10 h-10 rounded-full bg-cover bg-center shadow-md ${className}`}
      style={{ backgroundImage: `url(${img})` }}
    ></div>
  );
};

export default function CommunityHero() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // 'loading', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Apne naye backend API ko call karein
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail(''); // Input field ko khaali karein
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setStatus('error');
    }
  };
  return (
    <section className="relative flex items-center justify-center w-full min-h-screen overflow-hidden bg-gray-50 text-gray-800 px-4">
      {/* 1. Background Gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-100/50 via-cyan-50/30 to-gray-50"></div>

      {/* 2. Concentric Circles (Responsive) */}
      <div className="absolute z-[-1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vw] sm:w-[150vw] sm:h-[150vw] md:w-[90rem] md:h-[90rem] border border-gray-300/40 rounded-full"></div>
      <div className="absolute z-[-1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] sm:w-[100vw] sm:h-[100vw] md:w-[60rem] md:h-[60rem] border border-gray-300/40 rounded-full"></div>

      {/* 3. Central Content */}
      <div className="relative z-10 text-center max-w-xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-primary mb-6">
          Community to grow
          <br />
          up your skills
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-lg mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        
        {/* ✅ YAHAN BADA CHANGE HAI: Button ko Form banaya hai */}
        <form 
          onSubmit={handleSubmit} 
          className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-auto flex-grow px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-gray-900 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-300 disabled:bg-gray-400"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Joining...' : 'Join Now'}
          </button>
        </form>

        {/* Status Messages */}
        <div className="text-center mt-4 h-5"> {/* h-5 taaki layout na bigde */}
          {status === 'success' && (
            <p className="text-green-600">Thanks for subscribing!</p>
          )}
          {status === 'error' && (
            <p className="text-red-600">Oops! Please try again.</p>
          )}
        </div>
        
      </div>
      {/* 4. Floating Icons & Avatars */}
      {/* In icons ko "absolute" position kiya gaya hai.
        'top', 'left', 'right', 'bottom' ki percentages change karke aap inki position badal sakte hain.
        'animate-float' aur 'animate-floatReverse' animation apply karti hai.
        'animation-delay' se sab icons ek saath nahi, alag-alag time par animate honge.
      */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {/* Avatars */}
        <Avatar
          img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop"
          className="absolute top-[10%] left-[12%] sm:left-[20%] animate-float"
          style={{ animationDelay: "0s" }}
        />
        <Avatar
          img="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=50&h=50&fit=crop"
          className="absolute top-[20%] right-[10%] sm:right-[18%] animate-floatReverse"
          style={{ animationDelay: "2s" }}
        />
        <Avatar
          img="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop"
          className="absolute bottom-[15%] left-[10%] sm:left-[22%] animate-float"
          style={{ animationDelay: "4s" }}
        />
        <Avatar
          img="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop"
          className="absolute bottom-[20%] right-[12%] sm:right-[25%] animate-floatReverse"
          style={{ animationDelay: "1s" }}
        />
        <Avatar
          img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop"
          className="absolute top-[50%] left-[5%] sm:left-[15%] animate-float"
          style={{ animationDelay: "3s" }}
        />
        <Avatar
          img="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&h=50&fit=crop"
          className="absolute top-[60%] right-[8%] sm:right-[15%] animate-floatReverse"
          style={{ animationDelay: "5s" }}
        />

        {/* Icons & Badges (Emojis + Lucide) */}
        <span
          className="absolute top-[15%] left-[40%] sm:left-[45%] text-2xl animate-float"
          style={{ animationDelay: "1.5s" }}
        >
          <Award className="text-purple-600" size={28} />
        </span>

        <span
          className="absolute top-[15%] right-[35%] sm:right-[40%] text-2xl animate-floatReverse"
          style={{ animationDelay: "0.5s" }}
        >
          🎉
        </span>

        <span
          className="absolute bottom-[10%] right-[40%] sm:right-[45%] text-2xl animate-float"
          style={{ animationDelay: "2.5s" }}
        >
          <Star className="text-yellow-500 fill-yellow-400" size={24} />
        </span>

        <span
          className="absolute bottom-[10%] left-[30%] sm:left-[35%] text-2xl animate-floatReverse"
          style={{ animationDelay: "3.5s" }}
        >
          <ThumbsUp className="text-blue-500" size={24} />
        </span>

        <span
          className="absolute top-[30%] right-[25%] sm:right-[30%] text-2xl animate-float"
          style={{ animationDelay: "4.5s" }}
        >
          <MessageSquare className="text-gray-500" size={22} />
        </span>
        
        <span
          className="absolute top-[70%] left-[20%] sm:left-[30%] text-2xl animate-floatReverse"
          style={{ animationDelay: "5.5s" }}
        >
          <BadgeCheck className="text-green-500" size={24} />
        </span>
      </div>
    </section>
  );
}
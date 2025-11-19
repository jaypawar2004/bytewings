import React from 'react';
import Link from "next/link";
import { blogPosts } from '@/lib/blog';

// The new theme uses a dark background and light foreground for contrast.
const Page = () => {
  return (
    // Set a dark background for the entire page container
    <div className="min-h-screen bg-gray-900 text-white">
      
      {/* Centered content area with padding */}
      <div className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24">

        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
           Latest Blog Posts
        </h1>

        {/* Responsive Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`} 
              className="group"
            >
              <div className="
                // Card styling for dark theme
                bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-2xl 
                // Hover effects
                hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1
              ">
                
                {/* Image Container */}
                <div className="w-full h-52 overflow-hidden">
                  <img 
                    src={post.mainImage} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-400 text-base line-clamp-3">
                    {post.description}
                  </p>

                  {/* Read More button/indicator */}
                  <span className="mt-4 inline-block text-sm font-medium text-blue-500 group-hover:text-blue-300 transition-colors">
                    Read Post &rarr;
                  </span>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
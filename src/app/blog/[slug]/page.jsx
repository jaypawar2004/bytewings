// src/app/blog/[slug]/page.jsx
import { blogPosts } from "@/lib/blog"; // Your data file
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Helper function to fetch a post by slug
async function getPost(slug) {
  const post = blogPosts.find((item) => item.slug === slug);
  return post;
}

// Set page title and description for SEO
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  if (!post) {
    return { title: "Post Not Found" };
  }
  return {
    title: `${post.title} | ByteWings Blog`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }) {
  // 1. Extract slug from URL
  const { slug } = params;
  
  // 2. Find post data using slug
  const post = await getPost(slug);

  // 3. If not found, show 404
  if (!post) {
    notFound();
  }

  // 4. Render the post
  return (
    <div className="relative bg-white py-20 sm:py-28">
      {/* Background Gradient (same theme) */}
      <div className="absolute inset-x-0 top-0 z-0 h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-100/50 via-cyan-50/30 to-white"></div>
      
      <div className="relative z-10 container mx-auto px-4 max-w-3xl">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Blog
        </Link>
        
        {/* Header */}
        <p className="text-teal-600 font-semibold mb-2">{post.category}</p>
        <h1 className="text-4xl sm:text-5xl font-bold font-primary text-gray-900 mb-6">
          {post.title}
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          {post.description}
        </p>
        
        {/* Main Image (using <img> tag) */}
        <div className="relative w-full h-96 rounded-lg shadow-lg overflow-hidden mb-12">
          <img
            src={post.mainImage}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        
        {/* Blog Post Content */}
        {/* The `prose` class comes from Tailwind Typography plugin.
            We use dangerouslySetInnerHTML because the post content is stored as an HTML string.
        */}
        <div
          className="prose prose-lg max-w-none prose-teal prose-headings:font-primary"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}
// src/lib/blog.js

export const blogPosts = [
  {
    slug: "nextjs-14-new-features", // This is used in the URL
    title: "What's New in Next.js 14?",
    category: "Technology",
    mainImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600", // Placeholder
    description:
      "Next.js 14 has arrived with several new features. In this post, we'll look at Server Actions and Partial Prerendering.",
    content: `
      <p>Next.js 14 was released with a "focus on the basics." This means core performance and developer experience have been improved.</p>
      <h3>Server Actions (Stable)</h3>
      <p>Previously, Server Actions were experimental, but now they are stable. This allows you to call server-side functions directly from React components, eliminating the need to create API routes.</p>
      <pre><code>
        // Example of a server action
        'use server'
        
        export async function createItem(formData) {
          // ... database logic here ...
        }
      </code></pre>
      <h3>Partial Prerendering (Preview)</h3>
      <p>This is a new rendering model that combines static speed with dynamic content. Your page is served as a static shell, and the dynamic parts are streamed in later.</p>
      `,
  },
  {
    slug: "top-5-digital-marketing-trends",
    title: "Top 5 Digital Marketing Trends",
    category: "Marketing",
    mainImage: "https://images.unsplash.com/photo-1557862921-3e16092bb49c?w=600", // Placeholder
    description:
      "Digital marketing is changing rapidly. Learn about this year's top 5 trends that will help grow your business.",
    content: `
      <p>The world of digital marketing is always evolving. This year, these trends are at the forefront:</p>
      <ul>
        <li><strong>AI in Marketing:</strong> AI-powered tools are automating content creation, personalization, and customer service.</li>
        <li><strong>Video Marketing:</strong> The craze for short-form video (Reels, Shorts) continues to grow.</li>
        <li><strong>Voice Search Optimization:</strong> People are now using voice search more than typing.</li>
        <li><strong>Hyper-Personalization:</strong>
Providing customers with personalized experiences based on their data.</li>
        <li><strong>Privacy-First Marketing:</strong> Due to data privacy regulations (like GDPR), the focus has shifted to cookie-less marketing.</li>
      </ul>
      `,
  },
  {
    slug: "why-good-ui-ux-is-important",
    title: "Why is a Good UI/UX Important?",
    category: "Design",
    mainImage: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=600", // Placeholder
    description:
      "No matter how good your product is, if its UI/UX is bad, users will abandon it. Learn why it's so important.",
    content: `
      <p>UI (User Interface) and UX (User Experience) are often used together, but they are different.</p>
      <ul>
        <li><strong>UI (User Interface):</strong> This is about how the product *looks* - buttons, colors, layout.</li>
        <li><strong>UX (User Experience):</strong> This is about how the product *works* - is it easy to use, is the user's goal being met.</li>
      </ul>
      <h3>Why Is It Important?</h3>
      <p>A good UI/UX directly impacts your business:</p>
      <ol>
        <li><strong>Increases Customer Retention:</strong> If the app/website is easy to use, people will come back.</li>
        <li><strong>Boosts Conversion Rates:</strong> A clear 'Buy Now' button or an easy checkout process increases sales.</li>
        <li><strong>Reduces Support Costs:</strong> If the product is easy to understand, fewer people will need customer support.</li>
      </ol>
      `,
  },
];
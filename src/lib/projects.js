// // lib/projects.js

// export const portfolioItems = [
//   {
//     slug: "ecommerce-platform", // This is used in the URL
//     title: "E-commerce Platform",
//     category: "Web Development",
//        mainImage: "/photos/E-comWeb_Img1.png", // Placeholder

//     description:
//       "Built a full-featured e-commerce platform for a client. It uses React, Next.js, and Stripe integration. Its main features include a user-friendly cart, secure checkout, and an admin dashboard.",
//   },
//   {
//     slug: "social-media-app",
//     title: "Social Media App",
//     category: "App Development",
//     mainImage: "https://plus.unsplash.com/premium_photo-1721080251113-6da8c18b2992?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder
//     description:
//       "Created a social media app for a new startup. It includes real-time chat (using Firebase), image uploads, and 'like/comment' functionality. The main focus was on performance and scalability.",
//   },
//   {
//     slug: "saas-dashboard",
//     title: "SaaS Dashboard",
//     category: "Web Design",
//     mainImage: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder
//     description:
//       "Designed and developed an analytics dashboard for a B2B SaaS company. It features data visualization (using Charts.js) and presents complex data in a simple way.",
//   },
// ];


export const portfolioItems = [
  {
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    category: "Web Development",
    mainImage: "/photos/E-comWeb_Img1.png",
    shortDescription:
      "A modern and high-performance e-commerce platform with secure payments, product management, and a complete admin dashboard.",
    caseStudy: {
      overview:
        "This project was developed for a retail client who needed a fast, scalable, and conversion-optimized e-commerce platform. The goal was to improve customer experience and automate the client’s order workflow.",
      challenges: [
        "Client needed a secure and smooth checkout experience.",
        "Real-time inventory updates required.",
        "Admin dashboard for managing products, orders, and customers."
      ],
      solution:
        "I built the platform using Next.js for performance and SEO benefits, integrated Stripe for secure payments, and created a custom admin dashboard to manage the entire store from a single place.",
      features: [
        "Product listing with filters",
        "Add to Cart & Order Management",
        "Stripe Secure Checkout",
        "Admin Dashboard",
        "Responsive UI"
      ],
      techStack: ["Next.js", "React", "MongoDB", "Stripe", "Tailwind"],
      outcome:
        "The client’s conversion rate improved and the entire order process was automated, saving hours of manual work daily."
    }
  },

  {
    slug: "social-media-app",
    title: "Social Media App",
    category: "App Development",
    mainImage:
      "https://i.pinimg.com/736x/b4/07/d9/b407d97642d266013347c4855046fdb5.jpg",
    shortDescription:
      "A real-time, lightweight, and scalable social media application featuring chat, media uploads, and engagement tools.",
    caseStudy: {
      overview:
        "A startup required a high-engagement social media application with smooth performance and real-time interactions. The app needed to handle thousands of users without lag.",
      challenges: [
        "Real-time chat and notifications",
        "Fast media uploads",
        "Scalable backend without huge server cost"
      ],
      solution:
        "I used Firebase’s real-time features along with Next.js for UI performance. Implemented chat, media uploads, likes/comments, and a clean social feed.",
      features: [
        "Real-time Chat",
        "Likes & Comments",
        "User Profiles",
        "Image/Video Uploads",
        "Push Notifications"
      ],
      techStack: ["Next.js", "Firebase", "Firestore", "Cloud Storage"],
      outcome:
        "The app successfully handled 1,000+ DAUs, and Firebase reduced backend costs significantly while maintaining performance."
    }
  },

  {
    slug: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    category: "Web Design",
    mainImage:
      "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=2073&auto=format",
    shortDescription:
      "A powerful analytics dashboard for a B2B SaaS company featuring real-time data visualization and KPI tracking.",
    caseStudy: {
      overview:
        "A B2B SaaS company needed a dashboard to visualize business-critical data for non-technical teams. The dashboard had to be clean, fast, and easy to understand.",
      challenges: [
        "Visualizing large datasets",
        "Real-time metric updates",
        "Simple UI for non-technical users"
      ],
      solution:
        "I designed and developed a sleek dashboard using React, Charts.js, and custom API integration. Added multiple visual components like graphs, KPI boxes, and tables.",
      features: [
        "Interactive Charts",
        "Role-Based Authentication",
        "KPI Metrics",
        "Data Export (CSV/PDF)",
        "Responsive Layout"
      ],
      techStack: ["React", "Next.js", "Charts.js", "Node.js", "JWT"],
      outcome:
        "The dashboard reduced manual reporting effort by 70% and helped the client make faster business decisions."
    }
  },
  {
  slug: "lerose-real-estate",
  title: "Lerose Real Estate (Dubai)",
  category: "Full-Stack Development",
  mainImage: "/photos/Dubai_img.png",
  shortDescription:
    "A premium Dubai real estate website with a fully functional admin panel for property and blog management.",
  description:
    "Developed a full-stack Dubai real estate platform with a modern frontend and a powerful admin dashboard for managing properties, blogs, and profile settings.",
  caseStudy: {
    overview:
      "Lerose Real Estate is a Dubai-based property company. They needed a modern website to showcase premium properties and a full admin panel to manage listings, blogs, images, and profiles without developer dependency.",
    challenges: [
      "Client had no system to manage property listings.",
      "Needed a premium UI matching Dubai real estate standards.",
      "Required blog CMS to improve SEO and traffic.",
      "Admin needed secure access & full control."
    ],
    solution:
      "I built a high-performance real estate website using MERN Stack with a powerful Node.js admin panel. The admin can manage properties, blogs, and profile settings with full CRUD features and image uploads via Cloudinary.",
    features: [
      "Property Listing + Filters",
      "Dynamic Property Details",
      "Blog System (CRUD)",
      "Admin Panel with Authentication",
      "Upload Multiple Images",
      "Profile Update Section",
      "Fully Responsive UI"
    ],
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
      "JWT Auth"
    ],
    outcome:
      "The website increased client credibility, enabled hassle-free content management, and helped them grow their digital presence in the Dubai real estate market."
  }
}

];

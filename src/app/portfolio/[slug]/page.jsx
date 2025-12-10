// // app/portfolio/[slug]/page.jsx
// import { portfolioItems } from "@/lib/projects"; // Data file
// import { notFound } from "next/navigation"; // Show 404 if project not found
// import Link from "next/link";
// import { ArrowLeft, Share2 } from "lucide-react";

// // Helper function to fetch project by slug
// async function getProject(slug) {
//   const project = portfolioItems.find((item) => item.slug === slug);
//   return project;
// }

// // Generate page metadata (title/description)
// export async function generateMetadata({ params }) {
//   const project = await getProject(params.slug);
//   if (!project) {
//     return { title: "Project Not Found" };
//   }
//   return {
//     title: `${project.title} | ByteWings Case Study`,
//     description: project.description.substring(0, 150),
//   };
// }

// export default async function CaseStudyPage({ params }) {
//   // 1. Extract slug from URL
//   const { slug } = params;
  
//   // 2. Find project data by slug
//   const project = await getProject(slug);

//   // 3. If not found, show 404
//   if (!project) {
//     notFound();
//   }

//   // 4. Render the project
//   return (
//     <div className="relative bg-white py-20 sm:py-28">
//       {/* Background Gradient (same theme) */}
//       <div className="absolute inset-x-0 top-0 z-0 h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-100/50 via-cyan-50/30 to-white"></div>
      
//       <div className="relative z-10 container mx-auto px-4 max-w-4xl">
//         {/* Back Button */}
//         <Link
//           href="/"
//           className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
//         >
//           <ArrowLeft size={18} className="mr-2" />
//           Back to Portfolio
//         </Link>
        
//         {/* Header */}
//         <p className="text-teal-600 font-semibold mb-2">{project.category}</p>
//         <h1 className="text-4xl sm:text-5xl font-bold font-primary text-gray-900 mb-6">
//           {project.title}
//         </h1>
//         <p className="text-lg text-gray-600 mb-10">
//           {project.description}
//         </p>
        
//         {/* Main Image (using native <img> to avoid next/image host config) */}
//         <div className="relative w-full h-auto rounded-lg shadow-lg overflow-hidden mb-12">
//           <img
//             src={project.mainImage}
//             alt={project.title}
//             className="w-full h-full object-cover"
//             loading="eager"
//           />
//         </div>
        
//         {/* Case Study Content */}
//         <div className="prose prose-lg max-w-none prose-teal">
//           <h2>Project Overview</h2>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
//             eget felis eget nunc lobortis. Vestibulum ante ipsum primis in
//             faucibus orci luctus et ultrices posuere cubilia Curae; Donec
//             velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
//             ligula.
//           </p>
//           <h3>Challenges We Faced</h3>
//           <p>
//             Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
//             Vivamus suscipit tortor eget felis porttitor volutpat. Mauris
//             blandit aliquet elit, eget tincidunt nibh pulvinar a.
//           </p>
//           <ul>
//             <li>The first challenge we encountered.</li>
//             <li>The second challenge was related to scalability.</li>
//             <li>The third challenge involved project timelines.</li>
//           </ul>
//           <h3>Our Solution</h3>
//           <p>
//             Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut
//             libero malesuada feugiat. Sed porttitor lectus nibh. Curabitur
//             aliquet quam id dui posuere blandit.
//           </p>
          
//           <figure>
//             <img
//               src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600" // Placeholder
//               alt="Project detail"
//               className="rounded-md shadow-md w-full h-auto"
//               loading="lazy"
//             />
//             <figcaption>Solution screenshot.</figcaption>
//           </figure>
          
//           <h2>Results</h2>
//           <p>
//             Nulla porttitor accumsan tincidunt. Praesent sapien massa,
//             convallis a pellentesque nec, egestas non nisi. Donec rutrum
//             congue leo eget malesuada.
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// }




import { portfolioItems } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Fetch project
async function getProject(slug) {
  return portfolioItems.find((item) => item.slug === slug);
}

// Meta Data
export async function generateMetadata({ params }) {
  const project = await getProject(params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Case Study`,
    description: project.shortDescription || project.description,
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = params;
  const project = await getProject(slug);

  if (!project) notFound();

  const cs = project.caseStudy; // Case Study DATA from lib/projects.js

  return (
    <div className="relative bg-white py-20 sm:py-28">
      {/* Background Gradient */}
      <div className="absolute inset-x-0 top-0 z-0 h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-100/50 via-cyan-50/30 to-white" />

      <div className="relative z-10 container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/portfolio"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Portfolio
        </Link>

        {/* Header */}
        <p className="text-teal-600 font-semibold mb-2">{project.category}</p>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          {project.title}
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          {project.shortDescription || project.description}
        </p>

        {/* Main Image */}
        <div className="relative w-full rounded-lg shadow-lg overflow-hidden mb-12">
          <img
            src={project.mainImage}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        {/* Case Study Sections */}
        <div className="prose prose-lg max-w-none prose-teal">

          {/* Overview */}
          <h2 className="font-bold text-xl">Project Overview</h2>
          <br />
          <p>{cs.overview}</p>
<br />
          {/* Challenges */}
          <h3 className="font-bold text-md">Challenges</h3>
          <ul>
            {cs.challenges.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
<br />
          {/* Solution */}
          <h3 className="font-bold text-md">Solution</h3>
          <p>{cs.solution}</p>
<br />
          {/* Features */}
          <h2 className="font-bold text-md">Key Features</h2>
          <ul>
            {cs.features.map((feat, index) => (
              <li key={index}>{feat}</li>
            ))}
          </ul>
<br />
          {/* Tech Stack */}
          <h2 className="font-bold text-md">Tech Stack Used</h2>
          <div className="flex flex-wrap gap-3 mt-4">
            {cs.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Outcome */}
          <h2 className="mt-10">Outcome / Results</h2>
          <p>{cs.outcome}</p>

          {/* Optional Extra Image */}
          {project.extraImage && (
            <figure className="mt-10">
              <img
                src={project.extraImage}
                alt="Project screenshot"
                className="rounded-md shadow-md w-full h-auto"
              />
              <figcaption className="text-center text-gray-500 mt-2">
                Additional project preview.
              </figcaption>
            </figure>
          )}
        </div>
      </div>
    </div>
  );
}

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//     domains: ['t.commonsupport.com'],
//   },
// };

// export default nextConfig;




// (in root: bytewings/next.config.mjs)

import path from 'path'; // ✅ path module import karein
import { fileURLToPath } from 'url'; // ✅ fileURLToPath import karein

// __dirname ko ES Module mein define karein
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Images: yahi setting rehne dein
    // images: {
    //     domains: ['t.commonsupport.com', 'images.unsplash.com'], 
    // },
images: {
    domains: ['t.commonsupport.com', 'images.unsplash.com'],     
  remotePatterns: [
    {
        
      protocol: 'https',
      hostname: '**', // Filhal sab allow karne ke liye ye use kar sakte ho
    },
  ],
},
    // ✅ WEBPACK CONFIGURATION UPDATE KAREIN
    webpack: (config, { isServer }) => {
        // 'require' ki jagah seedha path ko resolve karein
        config.resolve.alias['@/sanity-config'] = path.join(__dirname, 'sanity.config.js');

        return config;
    },
};

export default nextConfig;
// src/app/studio/[[...tool]]/page.jsx


/**
 * Ye Sanity Studio (v3) ko App Router mein embed karne ka sahi tareeka hai
 * (jab next-sanity v9 use kar rahe ho)
 */
// import { NextStudio } from 'next-sanity'
// import config from '../../../../sanity.config' // Ye config file ko root se load karega

// export default function StudioPage() {
//   // Studio ko 'config' file deta hai
//   return <NextStudio config={config} />
// }
// src/app/studio/[[...tool]]/page.jsx
// src/app/studio/[[...tool]]/page.jsx
// src/app/studio/[[...tool]]/page.jsx
'use client'
// src/app/studio/[[...tool]]/page.jsx
import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}
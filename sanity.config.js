// (in root: bytewings/sanity.config.js)

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

// Sahi path se schemas aur structure import karein
import { schemaTypes } from './src/sanity/schemaTypes'
import { structure } from './src/sanity/structure' 

const config = defineConfig({
  base: '/studio', 
  
  name: 'default',
  title: 'ByteWings Studio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,

  plugins: [
    structureTool({ structure }),
    visionTool(), 
  ],

  schema: {
    types: schemaTypes,
  },
});

// ✅ FINAL FIX: Is file ko 'default export' karein
export default config;
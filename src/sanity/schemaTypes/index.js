// src/sanity/schemaTypes/index.js (Naya Code)

import { authorType } from './authorType'
import { postType } from './postType'
import { categoryType } from './categoryType'
import { blockContentType } from './blockContentType'

// ✅ 1. Apni 'projectType' file ko yahaan import karein
import { projectType } from './projectType'

export const schemaTypes = [
  // Blog waale (jo pehle se the)
  authorType,
  postType,
  categoryType,
  blockContentType,

  // ✅ 2. 'projectType' ko is list (array) mein add kar dein
  projectType,
]
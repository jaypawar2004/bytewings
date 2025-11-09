// src/sanity/schema.js

import { authorType } from './schemaTypes/authorType'
import { blockContentType } from './schemaTypes/blockContentType'
import { categoryType } from './schemaTypes/categoryType'
import { postType } from './schemaTypes/postType'

// ✅ 1. Kya ye import line yahaan hai?
import { projectType } from './schemaTypes/projectType'


export const schemaTypes = [
  postType,
  authorType,
  categoryType,
  blockContentType,
  
  // ✅ 2. Kya 'projectType' is list ke andar hai?
  projectType, 
]
// types/blog.ts
//
// CREATE this file at: primal-fm/types/blog.ts
// (same level as your app/, sanity/, lib/, components/ folders)

import type { PortableTextBlock } from '@portabletext/react'

export interface SanityPost {
  _id: string
  title: string
  slug: { current: string }
  date: string
  excerpt: string
  readTimeMinutes?: number
  tags?: string[]
  heroImage?: {
    asset: {
      _id: string
      url: string
      metadata?: {
        dimensions?: { width: number; height: number }
        lqip?: string
      }
    }
    alt?: string
  }
  body?: PortableTextBlock[]
}
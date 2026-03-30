// sanity/lib/client.ts
// ⚠️  REPLACE your current client.ts with this file.
//
// Keeps the base client your live.ts imports from,
// AND adds a manual sanityFetch() for server components
// that don't use the Live API.

import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

/**
 * Manual fetch wrapper with ISR caching for server components.
 * Use this in page.tsx files:
 *
 *   import { sanityFetch } from '@/sanity/lib/client'
 *   const posts = await sanityFetch<Post[]>({ query: allPostsQuery })
 */
export async function sanityFetch<T>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: {
  query: string
  params?: Record<string, unknown>
  revalidate?: number | false
  tags?: string[]
}): Promise<T> {
  return client.fetch<T>(query, params, {
    next: {
      revalidate: tags.length ? false : revalidate,
      tags,
    },
  })
}
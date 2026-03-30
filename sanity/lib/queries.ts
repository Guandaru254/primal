// sanity/lib/queries.ts
import { groq } from 'next-sanity'

// Blog listing — all posts, newest first
export const allPostsQuery = groq`
  *[_type == "post"] | order(date desc) {
    _id,
    title,
    slug,
    date,
    excerpt,
    readTimeMinutes,
    tags,
    heroImage {
      asset-> {
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      },
      alt
    }
  }
`

// Single post by slug — includes full Portable Text body
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    date,
    excerpt,
    readTimeMinutes,
    tags,
    heroImage {
      asset-> {
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      },
      alt
    },
    body[] {
      ...,
      _type == "image" => {
        ...,
        asset-> {
          _id,
          url,
          metadata {
            dimensions,
            lqip
          }
        }
      }
    }
  }
`

// All slugs — for generateStaticParams
export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current
  }
`
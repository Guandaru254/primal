// components/PortableTextRenderer.tsx
'use client'

import {
  PortableText,
  type PortableTextComponents,
  type PortableTextBlock,
} from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

const components: PortableTextComponents = {
  block: {
    // These render INSIDE .blog-content which already styles h2, h3, p, ul
    // so we just use plain elements — the CSS does the work.
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    normal: ({ children }) => <p>{children}</p>,
    blockquote: ({ children }) => (
      <div className="blog-quote">{children}</div>
    ),
  },

  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },

  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => {
      const href = value?.href || '#'
      const isExternal = href.startsWith('http')
      return (
        <a
          href={href}
          style={{ color: '#2563eb', fontWeight: 600, textDecoration: 'none' }}
          {...(isExternal
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
        >
          {children}
        </a>
      )
    },
  },

  types: {
    image: ({ value }) => {
      if (!value?.asset) return null
      return (
        <figure style={{ margin: '32px 0' }}>
          <Image
            src={urlFor(value).width(800).quality(80).auto('format').url()}
            alt={value.alt || 'Blog image'}
            width={800}
            height={450}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '16px',
            }}
          />
          {value.caption && (
            <figcaption
              style={{
                fontSize: '13px',
                color: '#6b7280',
                marginTop: '8px',
                textAlign: 'center',
              }}
            >
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
}

interface PortableTextRendererProps {
  value: PortableTextBlock[]
}

export function PortableTextRenderer({ value }: PortableTextRendererProps) {
  if (!value || value.length === 0) {
    return (
      <p style={{ color: '#6b7280', fontStyle: 'italic' }}>
        This article is being updated. Check back soon.
      </p>
    )
  }
  return <PortableText value={value} components={components} />
}
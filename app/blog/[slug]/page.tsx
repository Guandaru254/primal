// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "../blog.css";
import "./slug.css";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/client";
import {
  postBySlugQuery,
  postSlugsQuery,
  allPostsQuery,
} from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableTextRenderer } from "@/components/PortableTextRenderer";
import type { SanityPost } from "@/types/blog";

type Params = { slug: string };

// ✅ Pre-render all known slugs at build time
export async function generateStaticParams(): Promise<Params[]> {
  const slugs = await sanityFetch<{ slug: string }[]>({
    query: postSlugsQuery,
  });
  return slugs.map((s) => ({ slug: s.slug }));
}

// ✅ Dynamic SEO metadata per post
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await sanityFetch<SanityPost | null>({
    query: postBySlugQuery,
    params: { slug },
  });

  if (!post) return {};

  const url = `https://primalfacilitiesmanagement.co.ke/blog/${post.slug.current}`;
  const ogImage = post.heroImage?.asset
    ? urlFor(post.heroImage).width(1200).height(630).quality(80).url()
    : undefined;

  return {
    title: `${post.title} | Primal Facilities Management Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Primal Facilities Management Blog`,
      description: post.excerpt,
      type: "article",
      url,
      ...(ogImage ? { images: [{ url: ogImage, width: 1200, height: 630 }] } : {}),
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-KE", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function getJsonLd(post: SanityPost) {
  const url = `https://primalfacilitiesmanagement.co.ke/blog/${post.slug.current}`;
  const image = post.heroImage?.asset
    ? urlFor(post.heroImage).width(1200).height(630).url()
    : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    url,
    ...(image ? { image } : {}),
    author: {
      "@type": "Organization",
      name: "Primal Facilities Management",
    },
    publisher: {
      "@type": "Organization",
      name: "Primal Facilities Management",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  // Fetch the current post
  const post = await sanityFetch<SanityPost | null>({
    query: postBySlugQuery,
    params: { slug },
  });

  if (!post) notFound();

  // Fetch other posts for "More insights" section
  const allPosts = await sanityFetch<SanityPost[]>({
    query: allPostsQuery,
  });
  const morePosts = allPosts
    .filter((p) => p.slug.current !== post.slug.current)
    .slice(0, 3);

  const formattedDate = formatDate(post.date);
  const jsonLd = getJsonLd(post);

  return (
    <main className="blog-single-page">
      {/* Breadcrumbs */}
      <nav className="blog-breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="separator">/</span>
        <Link href="/blog">Blog</Link>
        <span className="separator">/</span>
        <span>{post.title}</span>
      </nav>

      {/* Cover Image */}
      {post.heroImage?.asset && (
        <div className="blog-single-cover">
          <Image
            src={urlFor(post.heroImage)
              .width(900)
              .height(420)
              .quality(80)
              .auto("format")
              .url()}
            alt={post.heroImage.alt || post.title}
            fill
            priority
            style={{ objectFit: "cover" }}
            placeholder={
              post.heroImage.asset.metadata?.lqip ? "blur" : "empty"
            }
            blurDataURL={post.heroImage.asset.metadata?.lqip}
          />
        </div>
      )}

      {/* Article */}
      <article>
        <h1 className="blog-title">{post.title}</h1>

        {post.excerpt && (
          <p className="blog-subtitle">{post.excerpt}</p>
        )}

        <div className="blog-meta">
          <span>{formattedDate}</span>
          <span>{post.readTimeMinutes ?? "—"} min read</span>
          <span>Nairobi, Kenya</span>
        </div>

        {/* ✅ Portable Text body replaces the old post.body.map(para) */}
        <div className="blog-content">
          {post.body ? (
            <PortableTextRenderer value={post.body} />
          ) : (
            <p style={{ color: "#6b7280", fontStyle: "italic" }}>
              This article is being updated. Check back soon.
            </p>
          )}
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="blog-keywords">
            {post.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="blog-cta-box">
          Looking for professional support with{" "}
          <strong>machines, cold rooms or facilities in Nairobi?</strong>{" "}
          <Link href="/contact">Talk to the Primal team →</Link>
        </div>
      </article>

      {/* More posts */}
      {morePosts.length > 0 && (
        <section className="blog-more-section">
          <h3>More facility management insights</h3>
          <div className="blog-more-grid">
            {morePosts.map((p) => (
              <div key={p._id} className="blog-more-card">
                <Link href={`/blog/${p.slug.current}`}>
                  <div className="blog-card-meta-row">
                    <span className="blog-card-date">
                      {formatDate(p.date)}
                    </span>
                    <span className="blog-card-readtime">
                      {p.readTimeMinutes ?? "—"} min read
                    </span>
                  </div>
                  <div className="blog-card-title">{p.title}</div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
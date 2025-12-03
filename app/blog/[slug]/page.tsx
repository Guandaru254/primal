// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "../blog.css";
import {
  blogPosts,
  getBlogPostBySlug,
  type BlogPost
} from "@/lib/blog";
import { notFound } from "next/navigation";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

// Next 16: params is a Promise in metadata
export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  const url = `https://primalfacilitiesmanagement.co.ke/blog/${post.slug}`;

  return {
    title: `${post.title} | Primal Facilities Management Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Primal Facilities Management Blog`,
      description: post.excerpt,
      type: "article",
      url
    }
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-KE", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}

function getJsonLd(post: BlogPost) {
  const url = `https://primalfacilitiesmanagement.co.ke/blog/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    url,
    image: post.heroImage,
    author: {
      "@type": "Organization",
      name: "Primal Facilities Management"
    },
    publisher: {
      "@type": "Organization",
      name: "Primal Facilities Management"
    }
  };
}

export default async function BlogPostPage(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = formatDate(post.date);
  const jsonLd = getJsonLd(post!);

  const morePosts = blogPosts
    .filter((p) => p.slug !== post!.slug)
    .slice(0, 3);

  return (
    <main className="blog-single-page">
      {/* Breadcrumbs */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="separator">/</span>
        <Link href="/blog">Blog</Link>
        <span className="separator">/</span>
        <span>{post!.title}</span>
      </nav>

      {/* Article */}
      <article className="blog-single-article">
        <p className="blog-single-kicker">PRIMAL BLOG</p>

        <h1 className="blog-single-title">{post!.title}</h1>

        <div className="blog-single-meta-row">
          <span>{formattedDate}</span>
          <span>{post!.readTimeMinutes} min read</span>
          <span>Nairobi, Kenya</span>
        </div>

        <div className="blog-single-hero">
          <Image
            src={post!.heroImage}
            alt={post!.title}
            fill
            className="hero-main-image"
          />
        </div>

        <div className="blog-single-body">
          {post!.body.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        <div className="blog-single-tags">
          {post!.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="blog-single-footer-cta">
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
              <div key={p.slug} className="blog-more-card">
                <Link href={`/blog/${p.slug}`}>
                  <div className="blog-card-meta-row">
                    <span className="blog-card-date">
                      {formatDate(p.date)}
                    </span>
                    <span className="blog-card-readtime">
                      {p.readTimeMinutes} min read
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
    </main>
  );
}

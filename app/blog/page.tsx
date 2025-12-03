// app/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./blog.css";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Primal Facilities Management",
  description:
    "Practical guides on facility management, washing machine repair, cold rooms, HVAC, cleaning services and maintenance tips for homes and businesses in Nairobi and across Kenya.",
  openGraph: {
    title: "Blog | Primal Facilities Management",
    description:
      "Facility management tips, maintenance checklists and machine care guides for Kenyan homes, businesses and industries.",
    url: "https://primalfacilitiesmanagement.co.ke/blog",
    type: "website"
  }
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-KE", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="blog-page">
      {/* HERO */}
      <section className="blog-hero">
        <div className="blog-hero-inner">
          <div className="blog-hero-text">
            <p className="blog-eyebrow">PRIMAL INSIGHTS</p>
            <h1 className="blog-hero-title">
              Facilities &amp; <span>Maintenance Insights</span>
            </h1>
            <p className="blog-hero-subtitle">
              Practical, Kenya-focused tips on washing machines, cold rooms,
              HVAC, cleaning and facility management — written for busy
              landlords, managers and business owners.
            </p>

            <div className="blog-hero-tags">
              <span>Washing machine repair</span>
              <span>Cold rooms</span>
              <span>HVAC &amp; AC</span>
              <span>Commercial laundry</span>
              <span>Cleaning &amp; janitorial</span>
              <span>Facility management</span>
            </div>

            <div className="blog-hero-meta">
              <div>
                <p className="blog-hero-meta-label">Updated</p>
                <p className="blog-hero-meta-value">
                  {formatDate(sorted[0].date)}
                </p>
              </div>
              <div>
                <p className="blog-hero-meta-label">Articles</p>
                <p className="blog-hero-meta-value">{sorted.length}+ guides</p>
              </div>
            </div>
          </div>

          <div className="blog-hero-visual" aria-hidden="true">
            <div className="blog-hero-grid" />
            <div className="blog-hero-floating">
              <strong>Written for Nairobi &amp; Kenya</strong>
              <span>
                Real facility management stories from laundromats, offices,
                hotels and apartments.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="blog-list-section">
        <div className="blog-list-meta">
          <p>
            Showing <strong>{sorted.length}</strong> facility management &amp;
            maintenance articles.
          </p>
          <div className="blog-list-filters">
            <span>All topics</span>
            <span>Practical guides</span>
          </div>
        </div>

        <div className="blog-list-grid">
          {sorted.map((post) => (
            <article key={post.slug} className="blog-card">
              <Link
                href={`/blog/${post.slug}`}
                className="blog-card-link"
              >
                <div className="blog-card-meta-row">
                  <span className="blog-card-date">
                    {formatDate(post.date)}
                  </span>
                  <span className="blog-card-readtime">
                    {post.readTimeMinutes} min read
                  </span>
                </div>

                <h2 className="blog-card-title">{post.title}</h2>
                <p className="blog-card-excerpt">{post.excerpt}</p>

                <div className="blog-card-tags">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="blog-card-footer-row">
                  <span className="blog-card-cta">
                    Read article <span>↗</span>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

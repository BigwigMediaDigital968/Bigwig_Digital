// src/app/sitemap.ts
import { MetadataRoute } from "next";

async function getBlogs() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE}/viewblog`,
      { cache: "no-store" }, // always fresh
    );

    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error("Sitemap blog fetch error:", error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getBlogs();
  const baseUrl = "https://www.bigwigmediadigital.com";

  /* =========================
     STATIC PAGES (Hardcoded)
  ========================== */

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date("2025-08-14"),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date("2025-08-14"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/our-works`,
      lastModified: new Date("2025-08-14"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2025-08-14"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date("2025-08-14"),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/clients`,
      lastModified: new Date("2025-08-14"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2025-08-14"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/career`,
      lastModified: new Date("2025-08-14"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date("2025-08-14"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terms-and-condition`,
      lastModified: new Date("2025-08-14"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date("2025-08-14"),
      changeFrequency: "yearly",
      priority: 0.5,
    },

    /* ========= SERVICES ========= */

    {
      url: `${baseUrl}/services/search-engine-optimization`,
      lastModified: new Date("2025-08-14"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/social-media-marketing`,
      lastModified: new Date("2025-08-14"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/performance-marketing`,
      lastModified: new Date("2025-08-14"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/content-marketing`,
      lastModified: new Date("2025-08-14"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/website-development-company-in-delhi`,
      lastModified: new Date("2026-01-22"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/email-marketing`,
      lastModified: new Date("2025-08-14"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/social-media-optimization`,
      lastModified: new Date("2025-08-14"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/graphic-designing`,
      lastModified: new Date("2025-08-14"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/ai-cgi-marketing`,
      lastModified: new Date("2025-08-14"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/landing-page-optimization`,
      lastModified: new Date("2025-08-14"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/affiliate-marketing`,
      lastModified: new Date("2025-08-14"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/video-shoot`,
      lastModified: new Date("2025-08-14"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/public-relations`,
      lastModified: new Date("2025-08-14"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/influencer-marketing`,
      lastModified: new Date("2025-08-14"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/online-reputation-management`,
      lastModified: new Date("2025-08-14"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  /* =========================
     DYNAMIC BLOGS
  ========================== */

  const blogUrls: MetadataRoute.Sitemap = blogs.map((blog: any) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(blog.lastUpdated || blog.datePublished),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticPages, ...blogUrls];
}

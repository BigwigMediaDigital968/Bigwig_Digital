import { Metadata } from "next";
import BlogDetailsClient from "./BlogDetailsClient";

interface FAQ {
  question: string;
  answer: string;
}

interface Breadcrumb {
  name: string;
  url: string;
  position: number;
}

interface SchemaSettings {
  article: boolean;
  breadcrumb: boolean;
  faq: boolean;
  organization: boolean;
  speakable: boolean;
  video: boolean;
  image: boolean;
}

interface BlogType {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  author: string;
  category?: string;
  tags?: string[];
  coverImage: string;
  datePublished: string;
  lastUpdated?: string;
  faqs?: FAQ[];
  breadcrumbs?: Breadcrumb[];
  schemaSettings?: SchemaSettings;
  customSchemas?: Record<string, any>[];
}

// Fetch single blog by slug
async function getBlog(slug: string): Promise<BlogType | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/viewblog`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    const blogs: BlogType[] = await res.json();
    return blogs.find((b) => b.slug === slug) || null;
  } catch (err) {
    console.error("Error fetching blog:", err);
    return null;
  }
}

// Generate metadata for SEO

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "This blog does not exist.",
      alternates: {
        canonical: "https://www.bigwigmediadigital.com/blogs",
      },
    };
  }

  const canonicalUrl = `https://www.bigwigmediadigital.com/blogs/${blog.slug}`;

  return {
    title: blog.title,
    description: blog.excerpt,
    keywords: blog.tags,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: canonicalUrl,
      siteName: "Bigwig Media Digital",
      images: [
        {
          url: blog.coverImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      type: "article",
      publishedTime: blog.datePublished,
      modifiedTime: blog.lastUpdated || blog.datePublished,
      authors: [blog.author],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [blog.coverImage],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <BlogDetailsClient slug={slug} />;
}

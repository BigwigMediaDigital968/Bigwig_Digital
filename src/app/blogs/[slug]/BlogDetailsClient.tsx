"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Script from "next/script";

import Navbar from "../../../../components/Nav";
import Footer from "../../../../components/Footer";
import GetInTouch from "../../../../components/GetInTouch";
import PopupForm from "../../../../components/PopupForm";

/* ================= TYPES ================= */

interface FAQ {
  question: string;
  answer: string;
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
  title: string;
  excerpt: string;
  coverImage: string;
  author: string;
  datePublished: string;
  lastUpdated?: string;
  content: string;
  slug: string;
  category?: string;

  faqs?: FAQ[];
  schemaSettings?: SchemaSettings;
  customSchemas?: Record<string, any>[];
}

/* ================= CATEGORIES ================= */

const categories = [
  "Search Engine Optimization",
  "Social Media Marketing",
  "Performance Marketing",
  "Content Marketing",
  "Website Designing & Development",
  "Email Marketing",
  "Social Media Optimization",
  "Graphic Designing",
  "AI and CGI Marketing",
  "Landing Page Optimization",
  "Affiliate Marketing",
  "Video Shoot",
  "Public Relations",
  "Influencer Marketing",
  "Online Reputation Management",
  "Digital Marketing",
];

export default function BlogDetailsClient({ slug }: { slug: string }) {
  const router = useRouter();

  const [blog, setBlog] = useState<BlogType | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [relatedBlogs, setRelatedBlogs] = useState<BlogType[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* ================= POPUP HANDLER ================= */

  useEffect(() => {
    const handlePopupClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-open-popup='true']")) {
        setIsPopupOpen(true);
      }
    };
    document.addEventListener("click", handlePopupClick);
    return () => document.removeEventListener("click", handlePopupClick);
  }, []);

  /* ================= SHARE ================= */

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog?.title,
        text: "Check out this blog I just read on BigWig Digital!",
        url: window.location.href,
      });
    } else {
      alert("Sharing is not supported in your browser.");
    }
  };

  /* ================= FETCH BLOG ================= */

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE}/viewblog`,
        );
        const list: BlogType[] = res.data;
        const found = list.find((b) => b.slug === slug);

        if (!found) {
          setError("Blog not found");
        } else {
          setBlog(found);
          setRelatedBlogs(
            list
              .filter(
                (b) =>
                  b.slug !== slug &&
                  b.category?.toLowerCase() === found.category?.toLowerCase(),
              )
              .slice(0, 4),
          );
        }
      } catch {
        setError("Error fetching blog");
      }
      setLoading(false);
    };

    if (slug) fetchBlog();
  }, [slug]);

  console.log(blog);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading blog content...
      </div>
    );

  if (error) return <div className="pt-40 text-center">{error}</div>;
  if (!blog) return null;

  const pageUrl = `https://www.bigwigmediadigital.com/blogs/${blog.slug}`;
  const currentSlug = blog.category?.replace(/\s+/g, "-").toLowerCase() || "";

  /* ================= SCHEMA GENERATION ================= */

  const schemas: any[] = [];

  if (blog.schemaSettings?.article) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: blog.title,
      description: blog.excerpt,
      image: blog.coverImage,
      author: { "@type": "Person", name: blog.author },
      publisher: {
        "@type": "Organization",
        name: "Bigwig Media Digital",
        logo: {
          "@type": "ImageObject",
          url: "https://www.bigwigmediadigital.com/logo.png",
        },
      },
      datePublished: blog.datePublished,
      dateModified: blog.lastUpdated || blog.datePublished,
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    });
  }

  if (blog.schemaSettings?.breadcrumb) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.bigwigmediadigital.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blogs",
          item: "https://www.bigwigmediadigital.com/blogs",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: blog.title,
          item: pageUrl,
        },
      ],
    });
  }

  if (blog.schemaSettings?.faq && blog.faqs?.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: blog.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  blog.customSchemas?.forEach((s) => schemas.push(s));

  /* ================= RENDER ================= */

  return (
    <div className="bg-[var(--color1)] text-white min-h-screen">
      {/* JSON-LD Schemas */}
      {schemas.map((schema, i) => (
        <Script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Navbar />

      <div className="w-11/12 md:w-5/6 mx-auto py-10 flex flex-col lg:flex-row gap-8">
        {/* Blog Content */}
        <div className="w-full lg:w-2/3">
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          <p className="text-gray-600 mb-2">
            By {blog.author} –{" "}
            {new Date(blog.datePublished).toLocaleDateString()}
          </p>

          <img
            src={blog.coverImage}
            className="mb-4 w-full rounded"
            alt={blog.title}
          />

          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* ================= FAQ ACCORDION ================= */}
          {blog.faqs?.length ? (
            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {blog.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;

                  return (
                    <div
                      key={idx}
                      className="bg-white text-black rounded-lg p-4 cursor-pointer"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                    >
                      {/* Question */}
                      <div className="flex justify-between items-center font-semibold">
                        <span>{faq.question}</span>
                        <span className="text-xl">{isOpen ? "−" : "+"}</span>
                      </div>

                      {/* Animated Answer */}
                      <div
                        className={`
                overflow-hidden transition-all duration-300 ease-in-out
                ${isOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"}
              `}
                      >
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}

          {/* Thank You Section (UNCHANGED) */}
          <div className="mt-10 p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Thank You for Reading! 😊
            </h2>
            <p className="text-gray-600 mb-4">
              We hope you found this blog helpful and engaging.
            </p>
            <button
              onClick={handleShare}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg cursor-pointer"
            >
              Share this Blog
            </button>
          </div>
        </div>

        {/* Categories Sidebar */}
        <div className="w-72 hidden lg:block sticky top-32 self-start">
          <div className="bg-gradient-to-bl from-[var(--color2)] via-[var(--color1)] to-[var(--color2)] rounded-2xl shadow-md p-6 ">
            <h3 className="text-xl font-semibold mb-5 text-[var(--color5)] ">
              Categories
            </h3>

            <ul className="space-y-3">
              {categories.map((cat, idx) => {
                const slug = cat.replace(/\s+/g, "-").toLowerCase();
                return (
                  <li
                    key={idx}
                    onClick={() => router.push(`/blogs/category/${slug}`)}
                    className={`
    group relative
    px-4 py-2 rounded-xl text-sm capitalize transition-all duration-300 cursor-pointer
    ${
      slug === currentSlug
        ? "-translate-x-3 bg-blue-100 text-blue-700 font-semibold shadow-lg"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:-translate-y-1 hover:translate-x-1 hover:shadow-lg"
    }
  `}
                  >
                    {/* Glow border */}
                    <div
                      className={`
      absolute inset-0 rounded-xl pointer-events-none transition-all duration-300
      ${
        slug === currentSlug
          ? "opacity-100 border border-blue-400/60 shadow-[0_0_15px_3px_rgba(59,130,246,0.55)]"
          : "opacity-0 group-hover:opacity-100 border border-blue-300/40 shadow-[0_0_10px_2px_rgba(59,130,246,0.3)]"
      }
    `}
                    ></div>

                    {cat}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Related Blogs */}
      {relatedBlogs?.length > 0 && (
        <div className="w-11/12 md:w-5/6 mx-auto my-10">
          <h2 className="text-2xl font-semibold mb-4">Related Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedBlogs.map((relBlog) => (
              <div
                key={relBlog.slug}
                className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
                onClick={() => router.push(`/blogs/${relBlog.slug}`)}
              >
                <img
                  src={relBlog.coverImage}
                  alt={relBlog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    {relBlog.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {new Date(relBlog.datePublished).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <GetInTouch />
      <Footer />
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}

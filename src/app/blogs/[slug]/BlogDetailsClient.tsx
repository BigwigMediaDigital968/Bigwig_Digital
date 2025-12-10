"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../../../components/Nav";
import Footer from "../../../../components/Footer";
import GetInTouch from "../../../../components/GetInTouch";

interface BlogType {
  title: string;
  excerpt: string;
  coverImage: string;
  author: string;
  datePublished: string;
  content: string;
  slug: string;
  category?: string;
  schemaMarkup?: string[];
}

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

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: blog?.title,
          text: "Check out this blog I just read on BigWig Digital!",
          url: window.location.href,
        })
        .catch((error) => console.log("Error sharing:", error));
    } else {
      alert("Sharing is not supported in your browser. Please copy the link.");
    }
  };

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE}/viewblog`
        );
        const blogList: BlogType[] = res.data;
        const found = blogList.find((b) => b.slug === slug);

        if (!found) {
          setError("Blog not found");
        } else {
          setBlog(found);
          const related = blogList
            .filter(
              (b) =>
                b.slug !== slug &&
                b.category?.toLowerCase() === found.category?.toLowerCase()
            )
            .slice(0, 4);
          setRelatedBlogs(related);
        }
      } catch (err) {
        console.error(err);
        setError("Error fetching blog");
      }
      setLoading(false);
    };

    if (slug) fetchBlog();
  }, [slug]);

  if (loading)
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-white">
        <div
          className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"
          role="status"
          aria-label="Loading"
        ></div>
        <p className="text-gray-600 text-lg">Loading blog content...</p>
      </div>
    );

  if (error)
    return <div className="pt-40 text-center text-red-600">{error}</div>;
  if (!blog) return null;

  const currentSlug = blog.category?.replace(/\s+/g, "-").toLowerCase() || "";

  return (
    <div className="bg-[var(--color1)] text-white min-h-screen">
      {/* <!-- Open Graph Meta Tags --> */}
      <meta property="og:title" content={blog.title} />
      <meta property="og:description" content={blog.excerpt} />
      <meta property="og:type" content="article" />
      <meta
        property="og:url"
        content={`https://www.bigwigmediadigital.com/blogs/${blog.slug}`}
      />
      <meta property="og:image" content={blog.coverImage} />
      <meta property="og:site_name" content="Bigwig Media Digital" />
      <meta property="og:locale" content="en_IN" />

      {/* ================== AUTO BREADCRUMB SCHEMA ================== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                item: `https://www.bigwigmediadigital.com/blogs/${blog.slug}`,
              },
            ],
          }),
        }}
      />
      {/* ================== AUTO ARTICLE SCHEMA ================== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://www.bigwigmediadigital.com/blogs/${blog.slug}`,
            },
            headline: blog.title,
            description: blog.excerpt,
            image: [blog.coverImage],
            author: {
              "@type": "Person",
              name: blog.author || "Team KPD",
            },
            publisher: {
              "@type": "Organization",
              name: "Bigwig Media Digital",
              logo: {
                "@type": "ImageObject",
                url: "https://www.bigwigmediadigital.com/logo.png",
              },
            },
            url: `https://www.bigwigmediadigital.com/blogs/${blog.slug}`,
            datePublished: blog.datePublished,
            dateModified: blog.datePublished,
          }),
        }}
      />
      {/* ✅ Schema Markup */}
      {/* {Array.isArray(blog.schemaMarkup) &&
        blog.schemaMarkup.map((markup, idx) => (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: markup }}
          />
        ))} */}

      <Navbar />

      <div className="w-11/12 md:w-5/6 mx-auto py-10 flex flex-col lg:flex-row gap-8 text-white">
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
            alt={`Cover image for ${blog.title}`}
          />

          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Thank You Section */}
          <div className="mt-10 p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Thank You for Reading! 😊
            </h2>
            <p className="text-gray-600 mb-4">
              We hope you found this blog helpful and engaging. If you enjoyed
              it, feel free to share it with your friends or leave a comment
              below.
            </p>
            <button
              onClick={handleShare}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Share this Blog
            </button>
          </div>
        </div>

        {/* Categories Sidebar */}
        <div className="hidden lg:block w-72 sticky top-32 self-start">
          <div
            className="bg-gradient-to-bl from-[var(--color2)] via-[var(--color1)] to-[var(--color2)]
                  rounded-2xl shadow-md p-6"
          >
            <h3 className="text-xl font-semibold mb-5 text-[var(--color5)]">
              Categories
            </h3>

            <ul className="space-y-3">
              {categories.map((cat, idx) => {
                const slug = cat.replace(/\s+/g, "-").toLowerCase();
                const active = slug === currentSlug;

                return (
                  <li
                    key={idx}
                    onClick={() => router.push(`/blogs/category/${slug}`)}
                    className={`
                    group relative cursor-pointer select-none
                    pl-6 pr-4 py-2 rounded-xl text-sm capitalize transition-all duration-300 
                    ${
                      active
                        ? "translate-x-[-8px] bg-blue-100 text-blue-700 font-semibold shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:-translate-y-1 hover:translate-x-1 hover:shadow-lg"
                    }
                  `}
                  >
                    {/* Glow Border */}
                    <div
                      className={`
                      absolute inset-0 rounded-xl pointer-events-none transition-all duration-300
                      ${
                        active
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
      {relatedBlogs.length > 0 && (
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
    </div>
  );
}

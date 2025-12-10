"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import Nav from "../../../../../components/Nav";
import Footer from "../../../../../components/Footer";
import Image from "next/image";
import GetInTouch from "../../../../../components/GetInTouch";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  coverImage: string;
  author: string;
  datePublished: string;
  categoryName: string;
  readTime?: string;
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

const ITEMS_PER_PAGE = 6;

export default function CategoryBlogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const { categoryName } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (!categoryName) return;

    window.scrollTo(0, 0);

    const fetchCategoryBlogs = async () => {
      try {
        setLoading(true);
        const res = await axios.get<BlogPost[]>(
          `${process.env.NEXT_PUBLIC_API_BASE}/category/${categoryName}`
        );
        setBlogs(res.data);
        setFilteredBlogs(res.data);
        setCurrentPage(1);
      } catch (err) {
        console.error("Failed to fetch category blogs", err);
        setBlogs([]);
        setFilteredBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryBlogs();
  }, [categoryName]);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredBlogs(blogs);
      setCurrentPage(1);
    } else {
      const term = searchTerm.toLowerCase();
      const filtered = blogs.filter(
        (blog) =>
          blog.title.toLowerCase().includes(term) ||
          blog.author.toLowerCase().includes(term)
      );
      setFilteredBlogs(filtered);
      setCurrentPage(1);
    }
  }, [searchTerm, blogs]);

  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);
  const currentBlogs = filteredBlogs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const currentSlug = String(categoryName).toLowerCase();

  return (
    <div className="min-h-screen bg-[var(--color2)] text-black">
      <Nav />

      {/* Page Layout */}
      <div className="w-11/12 md:w-5/6 mx-auto py-12 flex gap-8 px-4">
        {/* LEFT SECTION */}
        <div className="flex-1">
          <div className="bg-white rounded-3xl shadow-sm p-8 md:p-10 bg-gradient-to-bl from-[var(--color2)] via-[var(--color1)] to-[var(--color2)]">
            {/* HEADING */}
            <h1 className="text-3xl font-semibold mb-8 capitalize text-[var(--color5)] ">
              Category: {String(categoryName).replace(/-/g, " ")}
            </h1>

            {/* SEARCH */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 border rounded-lg bg-white text-black shadow-sm mb-8"
            />

            {/* BLOG CARDS */}
            {loading ? (
              <p className="text-gray-500">Loading blogs...</p>
            ) : currentBlogs.length === 0 ? (
              <p>No blogs found.</p>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  {currentBlogs.map((blog) => (
                    <div
                      key={blog._id}
                      onClick={() => router.push(`/blogs/${blog.slug}`)}
                      className="
      group relative
      bg-white rounded-2xl shadow-sm border border-gray-100 p-4
      transition-all duration-300 cursor-pointer
      hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl
    "
                    >
                      {/* Glow Border */}
                      <div
                        className="
        absolute inset-0 rounded-2xl pointer-events-none
        opacity-0 group-hover:opacity-100 
        transition-all duration-300
        border-[2px] border-blue-400/50
        shadow-[0_0_20px_4px_rgba(59,130,246,0.4)]
      "
                      ></div>

                      {/* Image */}
                      <div className="w-full h-48 bg-[#e8eff4] rounded-xl overflow-hidden mb-4">
                        <Image
                          src={blog.coverImage}
                          alt={blog.title}
                          width={600}
                          height={300}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-2 line-clamp-2">
                        {blog.title}
                      </h3>

                      {/* Author + Date */}
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span className="px-3 py-1 text-xs rounded-full bg-[#eaf4f6] text-[#5aa1b4]">
                          {blog.author ?? "General"}
                        </span>
                        <span>
                          {new Date(blog.datePublished).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* PAGINATION */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`px-4 py-2 rounded-lg border ${
                            page === currentPage
                              ? "bg-blue-600 text-white"
                              : "bg-white text-black hover:bg-gray-100"
                          }`}
                        >
                          {page}
                        </button>
                      )
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
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
      <GetInTouch />
      <Footer />
    </div>
  );
}

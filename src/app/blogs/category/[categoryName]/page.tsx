"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import Nav from "../../../../../components/Nav";
import Footer from "../../../../../components/Footer";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  coverImage: string;
  author: string;
  datePublished: string;
  categoryName: string;
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

  const { categoryName } = useParams(); // ✅ next/navigation
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

  return (
    <div className="min-h-screen bg-white text-black">
      <Nav />
      <div className="w-11/12 md:w-5/6 mx-auto py-8 flex flex-col lg:flex-row gap-6">
        {/* Left: Blog Posts */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-4 capitalize">
            Category: {String(categoryName).replace(/-/g, " ")}
          </h1>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search by title or author"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-6"
          />

          {loading ? (
            <p className="text-gray-500">Loading blogs...</p>
          ) : currentBlogs.length === 0 ? (
            <p>No blogs found.</p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentBlogs.map((blog) => (
                  <div
                    key={blog._id}
                    onClick={() => router.push(`/blogs/${blog.slug}`)}
                    className="bg-white border rounded-lg shadow-sm hover:shadow-lg cursor-pointer overflow-hidden transition-shadow"
                  >
                    <img
                      src={blog.coverImage}
                      alt={blog.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h2 className="text-lg font-bold mb-2">{blog.title}</h2>
                      <p className="text-sm text-gray-500 mb-1">
                        {new Date(blog.datePublished).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-gray-700">
                        By <strong>{blog.author}</strong>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 py-1 border rounded ${
                          page === currentPage
                            ? "bg-black text-white"
                            : "bg-white text-black border-gray-400"
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

        {/* Right: Category List */}
        <div className="lg:w-64 bg-gray-100 p-4 rounded-sm shrink-0 h-fit lg:sticky top-28">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <ul className="space-y-2">
            {categories.map((cat, idx) => {
              const slug = cat.replace(/\s+/g, "-").toLowerCase();
              const currentSlug = String(categoryName).toLowerCase();
              return (
                <li
                  key={idx}
                  onClick={() => router.push(`/blogs/category/${slug}`)}
                  className={`text-sm cursor-pointer hover:underline ${
                    slug === currentSlug
                      ? "text-black font-semibold"
                      : "text-blue-600"
                  }`}
                >
                  {cat}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

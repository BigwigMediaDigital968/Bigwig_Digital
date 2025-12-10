"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import Fuse from "fuse.js";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import GetInTouch from "../../../components/GetInTouch";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  coverImage: string;
  author: string;
  datePublished: string;
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

export default function Blogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const blogsPerPage = 9;
  const params = useParams();
  const categoryName = params?.categoryName as string | undefined;
  const router = useRouter();

  // Fetch Blogs
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      let res;
      if (categoryName) {
        res = await axios.get<BlogPost[]>(
          `${process.env.NEXT_PUBLIC_API_BASE}/blogs/category/${categoryName}`
        );
      } else {
        res = await axios.get<BlogPost[]>(
          `${process.env.NEXT_PUBLIC_API_BASE}/viewblog`
        );
      }
      setBlogs(res.data);
      setFilteredBlogs(res.data);
      setCurrentPage(1);
    } catch (err) {
      console.error("Failed to fetch blogs", err);
      setBlogs([]);
      setFilteredBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [categoryName]);

  // Search Logic
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredBlogs(blogs);
    } else {
      const fuse = new Fuse(blogs, {
        keys: ["title", "author"],
        threshold: 0.4,
      });
      const results = fuse.search(searchTerm).map((res) => res.item);
      setFilteredBlogs(results);
      setCurrentPage(1);
    }
  }, [searchTerm, blogs]);

  const indexOfLast = currentPage * blogsPerPage;
  const indexOfFirst = indexOfLast - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  return (
    <div className="min-h-screen bg-[var(--color2)] text-black">
      <Nav />
      <title>BigWig Digital Blog</title>
      <meta
        name="description"
        content="Explore insights, strategies, and trends in digital marketing through our expert-written blogs."
      />
      <link rel="canonical" href="https://www.bigwigmediadigital.com/blogs" />
      {/* Page Main Wrapper */}
      <div className="w-11/12 md:w-5/6 mx-auto flex gap-8 py-12 ">
        {/* LEFT SECTION (BLOG GRID AREA INSIDE WHITE BOX) */}
        <div className="flex-1 ">
          <div className="bg-white rounded-3xl shadow-sm py-4 px-2 md:p-10 bg-gradient-to-bl from-[var(--color2)] via-[var(--color1)] to-[var(--color2)]">
            {/* HEADING */}
            <h1 className="text-center text-[var(--color5)] text-3xl md:text-4xl font-semibold mb-10">
              Featured Blogs
            </h1>

            {/* SEARCH */}
            <div className="mb-8 max-w-xl mx-auto">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by title or author"
                className="w-full p-3 border rounded-lg bg-white text-black shadow-sm"
              />
            </div>

            {/* BLOG GRID */}
            {loading ? (
              <div className="flex flex-col justify-center items-center min-h-[40vh] ">
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-600 text-lg mt-3">Loading blogs...</p>
              </div>
            ) : (
              <>
                {currentBlogs.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {currentBlogs.map((blog) => (
                      <Link
                        key={blog._id}
                        href={`/blogs/${blog.slug}`}
                        className="
    group relative bg-white rounded-2xl shadow-sm border border-gray-100 p-4
    transition-all duration-300 cursor-pointer
    hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl
  "
                      >
                        {/* GLOW BORDER */}
                        <div
                          className="
      absolute inset-0 rounded-2xl pointer-events-none
      opacity-0 group-hover:opacity-100 
      transition-all duration-300
      border-[2px] border-blue-400/50
      shadow-[0_0_20px_4px_rgba(59,130,246,0.4)]
    "
                        ></div>

                        {/* IMAGE BLOCK */}
                        <div className="w-full h-48 bg-[#e8eff4] rounded-xl overflow-hidden mb-4">
                          <Image
                            src={blog.coverImage}
                            alt={blog.title}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover rounded-xl"
                          />
                        </div>

                        {/* TITLE */}
                        <h3 className="text-base font-semibold text-gray-900 leading-snug line-clamp-2 mb-2">
                          {blog.title}
                        </h3>

                        {/* AUTHOR + DATE */}
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <span className="px-3 py-1 text-xs rounded-full bg-[#eaf4f6] text-[#5aa1b4]">
                            {blog.author ?? "General"}
                          </span>
                          <span>
                            {new Date(blog.datePublished).toLocaleDateString()}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-gray-600 text-lg">
                    No blogs found.
                  </p>
                )}
              </>
            )}

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-10 space-x-2">
                <button
                  onClick={() =>
                    currentPage > 1 && setCurrentPage(currentPage - 1)
                  }
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg border ${
                    currentPage === 1
                      ? "bg-gray-200 cursor-not-allowed"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  Prev
                </button>

                {Array.from({ length: totalPages }, (_, idx) => idx + 1)
                  .filter(
                    (page) =>
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 2 && page <= currentPage + 2)
                  )
                  .map((page, i, arr) => (
                    <>
                      {i > 0 && arr[i] - arr[i - 1] > 1 && (
                        <span
                          key={`ellipsis-${i}`}
                          className="px-2 text-gray-500"
                        >
                          ...
                        </span>
                      )}

                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 rounded-lg border ${
                          currentPage === page
                            ? "bg-blue-600 text-white"
                            : "bg-white hover:bg-gray-100"
                        }`}
                      >
                        {page}
                      </button>
                    </>
                  ))}

                <button
                  onClick={() =>
                    currentPage < totalPages && setCurrentPage(currentPage + 1)
                  }
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg border ${
                    currentPage === totalPages
                      ? "bg-gray-200 cursor-not-allowed"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT SIDEBAR (CATEGORIES) */}
        <div className="w-72 hidden lg:block sticky top-32 self-start">
          <div className="bg-gradient-to-bl from-[var(--color2)] via-[var(--color1)] to-[var(--color2)] rounded-2xl shadow-md p-6 ">
            <h3 className="text-xl font-semibold mb-5 text-[var(--color5)] ">
              Categories
            </h3>

            <ul className="space-y-3">
              {categories.map((cat, idx) => (
                <li
                  key={idx}
                  onClick={() =>
                    router.push(
                      `/blogs/category/${cat.toLowerCase().replace(/\s+/g, "-")}`
                    )
                  }
                  className="
    group relative
    px-4 py-2 
    bg-gray-100 
    rounded-xl 
    text-sm 
    text-gray-700 
    cursor-pointer 
    capitalize
    transition-all duration-300
    hover:-translate-y-1 hover:translate-x-1 hover:shadow-lg
    hover:bg-gray-200
  "
                >
                  {/* Glow Border */}
                  <div
                    className="
      absolute inset-0 rounded-xl
      opacity-0 group-hover:opacity-100 
      transition-all duration-300
      pointer-events-none
      border border-blue-400/50
      shadow-[0_0_12px_2px_rgba(59,130,246,0.35)]
    "
                  ></div>

                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <GetInTouch />
      <Footer />
    </div>
  );
}

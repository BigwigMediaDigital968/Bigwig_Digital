"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import Fuse from "fuse.js";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";

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

function Blogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const blogsPerPage = 9;
  const params = useParams();
  const categoryName = params?.categoryName as string | undefined;
  const router = useRouter();

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
    <div className="min-h-screen bg-white text-black">
      <title>BigWig Digital Blog</title>
      <meta
        name="description"
        content="Explore insights, strategies, and trends in digital marketing through our expert-written blogs."
      />
      <link rel="canonical" href="https://www.bigwigmediadigital.com/blogs" />

      <Nav />

      <div className="w-11/12 md:w-5/6 mx-auto py-8 flex gap-6">
        {/* Left: Blogs */}
        <div className="flex-1 h-[calc(100vh-120px)] overflow-y-auto no-scrollbar pr-4">
          {/* Search */}
          <div className="mb-4">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by title or author"
              className="w-full p-2 border rounded bg-white text-black"
            />
          </div>

          {/* Blog Grid */}
          {loading ? (
            <div className="flex flex-col justify-center items-center min-h-screen bg-white">
              <div
                className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-2"
                role="status"
                aria-label="Loading"
              ></div>
              <p className="text-gray-600 text-lg">Loading blog content...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentBlogs.length > 0 ? (
                currentBlogs.map((blog) => (
                  <Link
                    key={blog._id}
                    href={`/blogs/${blog.slug}`}
                    className="block bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                  >
                    <Image
                      src={blog.coverImage}
                      alt={blog.title}
                      width={600}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h2 className="text-xl font-semibold mb-2">
                        {blog.title}
                      </h2>
                      <p className="text-sm text-gray-600 mb-1">
                        {new Date(blog.datePublished).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-gray-800">
                        By <strong>{blog.author}</strong>
                      </p>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-center col-span-3">No blogs found.</p>
              )}
            </div>
          )}

          {/* Pagination */}
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              {/* Previous Button */}
              <button
                onClick={() =>
                  currentPage > 1 && setCurrentPage(currentPage - 1)
                }
                disabled={currentPage === 1}
                className={`px-3 py-1 border rounded ${
                  currentPage === 1
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                Prev
              </button>

              {/* Page Numbers with Ellipsis */}
              {Array.from({ length: totalPages }, (_, idx) => idx + 1)
                .filter(
                  (page) =>
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 2 && page <= currentPage + 2)
                )
                .map((page, i, arr) => (
                  <>
                    {/* Add ellipsis if there’s a gap */}
                    {i > 0 && arr[i] - arr[i - 1] > 1 && (
                      <span key={`ellipsis-${i}`} className="px-2">
                        ...
                      </span>
                    )}
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-1 border rounded ${
                        currentPage === page
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
                    >
                      {page}
                    </button>
                  </>
                ))}

              {/* Next Button */}
              <button
                onClick={() =>
                  currentPage < totalPages && setCurrentPage(currentPage + 1)
                }
                disabled={currentPage === totalPages}
                className={`px-3 py-1 border rounded ${
                  currentPage === totalPages
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>

        {/* Right: Categories */}
        <div className="w-64 hidden md:block sticky top-32 self-start">
          <div className="bg-gray-100 p-4 rounded shadow">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((cat, idx) => (
                <li
                  key={idx}
                  onClick={() =>
                    router.push(
                      `/blogs/category/${cat
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`
                    )
                  }
                  className="text-sm text-blue-600 hover:underline cursor-pointer capitalize"
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Blogs;

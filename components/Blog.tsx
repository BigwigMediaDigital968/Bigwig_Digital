"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  coverImage: string;
  tags: string[];
  datePublished: string;
  lastUpdated: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "https://bigwigdigitalbackend.onrender.com/viewblog"
        );
        const data = await res.json();

        const sorted = data
          .sort(
            (a: BlogPost, b: BlogPost) =>
              new Date(b.datePublished).getTime() -
              new Date(a.datePublished).getTime()
          )
          .slice(0, 4);

        setBlogs(sorted);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const handlePostClick = (slug: string) => {
    router.push(`/blogs/${slug}`);
  };

  return (
    <div className="bg-white text-gray-900 font-raleway font-light py-10">
      <h1 className="text-5xl text-center py-4 font-bold leading-tight mb-7">
        Our Blogs
      </h1>

      <section className="w-[90%] mx-auto">
        {blogs.length === 0 ? (
          <p className="text-center text-gray-500">
            No blog posts available at the moment.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {blogs.map((post) => (
              <div
                key={post._id}
                className="cursor-pointer rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all"
                onClick={() => handlePostClick(post.slug)}
              >
                <div className="rounded-lg h-[340px] flex flex-col overflow-hidden text-left">
                  <img
                    src={post.coverImage}
                    alt={`Cover image for ${post.title}`}
                    className="w-full h-[160px] object-cover rounded-t-lg"
                  />

                  <div className="p-4 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>

                    <p className="text-xs text-gray-500 italic">
                      By {post.author} •{" "}
                      {new Date(post.datePublished).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Blogs;

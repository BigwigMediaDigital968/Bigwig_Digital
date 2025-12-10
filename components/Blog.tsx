"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BlogSkeleton from "./BlogSkeleton";

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
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/viewblog`);
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
      } finally {
        setLoading(false); // <-- IMPORTANT
      }
    };

    fetchBlogs();
  }, []);

  const handlePostClick = (slug: string) => {
    router.push(`/blogs/${slug}`);
  };

  return (
    <div className="py-12 bg-[var(--color1)] text-white">
      <section className="w-11/12 md:w-5/6 mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-[var(--color5)] text-lg font-semibold border-b w-fit  mb-3 uppercase tracking-widest">
            Our Blog
          </p>

          <h1 className="text-3xl md:text-4xl font-bold leading-tight text-[var(--color4)] drop-shadow-lg">
            Insights that Inspire Smarter Decisions
          </h1>
        </div>

        {/* Blog Cards */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <BlogSkeleton key={i} />
            ))}
          </div>
        ) : blogs.length === 0 ? (
          <p className="text-center text-gray-400">
            No blog posts available at the moment.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {blogs.map((post) => (
              <div
                key={post._id}
                className="group cursor-pointer rounded-xl bg-white/10 backdrop-blur-md border border-white/20 
                 shadow-md hover:shadow-2xl transition-all duration-300"
                onClick={() => handlePostClick(post.slug)}
              >
                {/* Image */}
                <div className="overflow-hidden rounded-t-xl">
                  <img
                    src={post.coverImage}
                    alt={`Cover image for ${post.title}`}
                    className="w-full h-[180px] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col justify-between h-[200px]">
                  <div>
                    <h3 className="text-base font-semibold text-[var(--color5)] mb-2 line-clamp-2 leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <p className="text-xs text-gray-400 italic">
                    By {post.author} •{" "}
                    {new Date(post.datePublished).toLocaleDateString()}
                  </p>
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

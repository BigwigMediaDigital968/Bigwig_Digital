"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { LoaderCircle } from "lucide-react";
import type { BlogPost } from "../../../../../../components/AddBlogs";
import "../../../../../../components/blog-editor/editor.css";

const BlogComposer = dynamic(() => import("../../../../../../components/AddBlogs"), {
  ssr: false,
  loading: () => <Loading />,
});

function Loading() {
  return (
    <p className="flex items-center gap-2 py-16 text-white/60">
      <LoaderCircle size={18} className="animate-spin" /> Loading post…
    </p>
  );
}

export default function EditBlogPage() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    setBlog(null);
    setError("");
    // The admin API only lists all posts (including drafts), so pick the one we need.
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/admin/viewblog`)
      .then((res) => res.json())
      .then((list: BlogPost[]) => {
        if (cancelled) return;
        const found = list.find((b) => b.slug === decodeURIComponent(slug));
        if (found) setBlog(found);
        else setError("This post doesn't exist or was deleted.");
      })
      .catch(() => !cancelled && setError("Could not load the post."));
    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (error) {
    return (
      <div className="py-16 text-center text-white/70">
        <p className="mb-4">{error}</p>
        <Link href="/admin/blogs" className="bw-btn-primary">
          Back to all posts
        </Link>
      </div>
    );
  }

  return (
    <>
      {blog ? (
        // key: a different post gets a fresh composer
        <BlogComposer key={blog.slug} existingBlog={blog} onClose={() => router.push("/admin/blogs")} />
      ) : (
        <Loading />
      )}
      <ToastContainer position="bottom-right" autoClose={3500} theme="dark" />
    </>
  );
}

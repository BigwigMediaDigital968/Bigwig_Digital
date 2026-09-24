"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { LoaderCircle } from "lucide-react";

const BlogComposer = dynamic(() => import("../../../../../components/AddBlogs"), {
  ssr: false,
  loading: () => (
    <p className="flex items-center gap-2 py-16 text-white/60">
      <LoaderCircle size={18} className="animate-spin" /> Loading editor…
    </p>
  ),
});

export default function NewBlogPage() {
  const router = useRouter();

  return (
    <>
      <BlogComposer
        onClose={() => router.push("/admin/blogs")}
        // Once created, continue on the post's edit page (later saves update it).
        onSaved={(slug) => router.replace(`/admin/blogs/edit/${slug}`)}
      />
      <ToastContainer position="bottom-right" autoClose={3500} theme="dark" />
    </>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";
import { CodeXml, ExternalLink, ImageIcon, LoaderCircle, Pencil, Plus, Search, Trash2 } from "lucide-react";
import Fuse from "fuse.js";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { formatHtml } from "../../../../utils/formatHtml";
import type { BlogPost as EditableBlog, Status } from "../../../../components/AddBlogs";
import { Modal } from "../../../../components/blog-editor/ui";
import "../../../../components/blog-editor/editor.css";

interface BlogPost extends EditableBlog {
  _id: string;
  author: string;
  category: string;
  datePublished: string;
  lastUpdated?: string;
  coverImage: string;
  status: Status;
}

const API = process.env.NEXT_PUBLIC_API_BASE;
const PER_PAGE = 10;

const STATUS_STYLES: Record<Status, string> = {
  PUBLISHED: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  DRAFT: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  INACTIVE: "bg-white/10 text-white/60 border-white/15",
};

export default function AdminBlogsPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const editBlog = (blog: BlogPost) => router.push(`/admin/blogs/edit/${blog.slug}`);

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<Status | "ALL">("ALL");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [htmlEdit, setHtmlEdit] = useState<{ slug: string; html: string } | null>(null);
  const [coverEdit, setCoverEdit] = useState<{ slug: string; file: File | null } | null>(null);
  const [busy, setBusy] = useState(false);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/admin/viewblog`);
      setBlogs(await res.json());
    } catch (error) {
      console.error("Error fetching blogs:", error);
      toast.error("Could not load blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  /* ---------------- Filtering ---------------- */

  const counts = useMemo(() => {
    const c = { ALL: blogs.length, PUBLISHED: 0, DRAFT: 0, INACTIVE: 0 };
    blogs.forEach((b) => c[b.status]++);
    return c;
  }, [blogs]);

  const categories = useMemo(() => Array.from(new Set(blogs.map((b) => b.category).filter(Boolean))).sort(), [blogs]);

  const filteredBlogs = useMemo(() => {
    let list = blogs;
    if (searchQuery.trim()) {
      const fuse = new Fuse(blogs, { keys: ["title", "author", "slug", "category"], threshold: 0.3, ignoreLocation: true });
      list = fuse.search(searchQuery).map((r) => r.item);
    }
    if (statusFilter !== "ALL") list = list.filter((b) => b.status === statusFilter);
    if (categoryFilter) list = list.filter((b) => b.category === categoryFilter);
    return list;
  }, [blogs, searchQuery, statusFilter, categoryFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / PER_PAGE));
  const page = Math.min(currentPage, totalPages);
  const paginated = filteredBlogs.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  /* ---------------- Actions ---------------- */

  const handleDelete = async (blog: BlogPost) => {
    if (!confirm(`Delete "${blog.title}"? This cannot be undone.`)) return;
    try {
      const res = await fetch(`${API}/${blog.slug}`, { method: "DELETE" });
      const json = await res.json();
      if (!res.ok) throw new Error(json.msg);
      toast.success(json.msg || "Deleted");
      fetchBlogs();
    } catch (err) {
      toast.error((err as Error).message || "Error deleting blog post");
    }
  };

  const changeStatus = async (blog: BlogPost, status: Status) => {
    if (status === blog.status) return;
    setBlogs((list) => list.map((b) => (b._id === blog._id ? { ...b, status } : b)));
    try {
      const res = await fetch(`${API}/${blog.slug}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error();
      toast.success(`Marked as ${status.toLowerCase()}`);
      fetchBlogs();
    } catch {
      toast.error("Failed to update status");
      setBlogs((list) => list.map((b) => (b._id === blog._id ? { ...b, status: blog.status } : b)));
    }
  };

  const saveHtml = async () => {
    if (!htmlEdit) return;
    setBusy(true);
    try {
      const res = await fetch(`${API}/${htmlEdit.slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: htmlEdit.html }),
      });
      if (!res.ok) throw new Error();
      toast.success("HTML saved");
      setHtmlEdit(null);
      fetchBlogs();
    } catch {
      toast.error("Failed to update blog");
    } finally {
      setBusy(false);
    }
  };

  const saveCover = async () => {
    if (!coverEdit?.file) return;
    setBusy(true);
    const formData = new FormData();
    formData.append("coverImage", coverEdit.file);
    try {
      const res = await fetch(`${API}/${coverEdit.slug}/image`, { method: "PATCH", body: formData });
      if (!res.ok) throw new Error();
      toast.success("Cover image updated");
      setCoverEdit(null);
      fetchBlogs();
    } catch {
      toast.error("Failed to update image");
    } finally {
      setBusy(false);
    }
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="min-h-screen bg-[#0b121a] p-4 text-white sm:p-6">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Blog posts</h1>
          <p className="text-sm text-white/50">
            {counts.PUBLISHED} published · {counts.DRAFT} drafts · {counts.INACTIVE} inactive
          </p>
        </div>
        <Link href="/admin/blogs/new" className="bw-btn-primary">
          <Plus size={16} /> New post
        </Link>
      </div>

      <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
          <input
            type="text"
            placeholder="Search title, author, slug or category…"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="bw-input pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-1 rounded-lg bg-white/5 p-1">
          {(["ALL", "PUBLISHED", "DRAFT", "INACTIVE"] as const).map((s) => (
            <button
              key={s}
              onClick={() => {
                setStatusFilter(s);
                setCurrentPage(1);
              }}
              className={`rounded-md px-3 py-1.5 text-xs font-medium capitalize ${
                statusFilter === s ? "bg-[#26658c] text-white" : "text-white/65 hover:bg-white/10"
              }`}
            >
              {s.toLowerCase()} <span className="opacity-60">{counts[s]}</span>
            </button>
          ))}
        </div>
        <select
          value={categoryFilter}
          onChange={(e) => {
            setCategoryFilter(e.target.value);
            setCurrentPage(1);
          }}
          className="bw-input lg:w-60"
        >
          <option value="">All categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p className="flex items-center gap-2 py-16 text-white/60">
          <LoaderCircle size={18} className="animate-spin" /> Loading posts…
        </p>
      ) : filteredBlogs.length === 0 ? (
        <p className="py-16 text-center text-white/50">No blogs found.</p>
      ) : (
        <>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[860px] text-sm">
              <thead className="bg-white/[0.04] text-left text-xs uppercase tracking-wide text-white/50">
                <tr>
                  <th className="px-4 py-3 font-medium">Post</th>
                  <th className="px-4 py-3 font-medium">Author</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Published</th>
                  <th className="px-4 py-3 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {paginated.map((blog) => (
                  <tr key={blog._id} className="transition hover:bg-white/[0.03]">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={blog.coverImage} alt="" className="h-12 w-20 shrink-0 rounded-md bg-white/5 object-cover" />
                        <div className="min-w-0">
                          <Link href={`/admin/blogs/edit/${blog.slug}`} className="line-clamp-1 text-left font-medium hover:text-[#a7ebf2]">
                            {blog.title}
                          </Link>
                          <p className="line-clamp-1 text-xs text-white/45">
                            {blog.category} · /{blog.slug}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-white/75">{blog.author}</td>
                    <td className="px-4 py-3">
                      <select
                        value={blog.status}
                        onChange={(e) => changeStatus(blog, e.target.value as Status)}
                        className={`cursor-pointer rounded-full border px-2.5 py-1 text-xs font-semibold outline-none ${STATUS_STYLES[blog.status]}`}
                        aria-label="Change status"
                      >
                        <option value="DRAFT">DRAFT</option>
                        <option value="PUBLISHED">PUBLISHED</option>
                        <option value="INACTIVE">INACTIVE</option>
                      </select>
                    </td>
                    <td className="px-4 py-3 text-white/65">
                      {new Date(blog.datePublished).toLocaleDateString()}
                      {blog.lastUpdated && (
                        <p className="text-[11px] text-white/40">Updated {new Date(blog.lastUpdated).toLocaleDateString()}</p>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex justify-end gap-1">
                        <RowAction label="Edit" onClick={() => editBlog(blog)}>
                          <Pencil size={15} />
                        </RowAction>
                        {blog.status === "PUBLISHED" && (
                          <a
                            href={`/blogs/${blog.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-md p-2 text-white/60 hover:bg-white/10 hover:text-white"
                            title="View live"
                          >
                            <ExternalLink size={15} />
                          </a>
                        )}
                        <RowAction
                          label="Edit raw HTML"
                          onClick={async () => {
                            let html = blog.content;
                            try {
                              html = await formatHtml(blog.content);
                            } catch {}
                            setHtmlEdit({ slug: blog.slug, html });
                          }}
                        >
                          <CodeXml size={15} />
                        </RowAction>
                        <RowAction label="Change cover image" onClick={() => setCoverEdit({ slug: blog.slug, file: null })}>
                          <ImageIcon size={15} />
                        </RowAction>
                        <RowAction label="Delete" danger onClick={() => handleDelete(blog)}>
                          <Trash2 size={15} />
                        </RowAction>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {totalPages > 1 && (
            <div className="mt-5 flex flex-wrap items-center justify-center gap-1.5">
              <PageButton disabled={page === 1} onClick={() => setCurrentPage(page - 1)}>
                Prev
              </PageButton>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                <PageButton key={num} active={num === page} onClick={() => setCurrentPage(num)}>
                  {num}
                </PageButton>
              ))}
              <PageButton disabled={page === totalPages} onClick={() => setCurrentPage(page + 1)}>
                Next
              </PageButton>
            </div>
          )}
        </>
      )}

      {htmlEdit && (
        <Modal
          title="Edit raw HTML"
          width={960}
          onClose={() => setHtmlEdit(null)}
          footer={
            <>
              <button className="bw-btn-ghost" onClick={() => setHtmlEdit(null)}>
                Cancel
              </button>
              <button className="bw-btn-primary" disabled={busy} onClick={saveHtml}>
                {busy && <LoaderCircle size={15} className="animate-spin" />} Save HTML
              </button>
            </>
          }
        >
          <p className="mb-3 text-xs text-white/55">
            Saved exactly as written, without going through the visual editor. Use this for hand-written layouts.
          </p>
          <textarea
            value={htmlEdit.html}
            onChange={(e) => setHtmlEdit({ ...htmlEdit, html: e.target.value })}
            spellCheck={false}
            className="bw-input h-[55vh] resize-y font-mono text-[13px] leading-relaxed"
          />
        </Modal>
      )}

      {coverEdit && (
        <Modal
          title="Update cover image"
          width={460}
          onClose={() => setCoverEdit(null)}
          footer={
            <>
              <button className="bw-btn-ghost" onClick={() => setCoverEdit(null)}>
                Cancel
              </button>
              <button className="bw-btn-primary" disabled={!coverEdit.file || busy} onClick={saveCover}>
                {busy && <LoaderCircle size={15} className="animate-spin" />} Update
              </button>
            </>
          }
        >
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setCoverEdit({ ...coverEdit, file: e.target.files?.[0] || null })}
            className="block w-full text-sm text-white/80 file:mr-3 file:rounded-md file:border-0 file:bg-[#26658c] file:px-3 file:py-1.5 file:text-white"
          />
          <p className="mt-2 text-xs text-white/45">1200 × 630 recommended.</p>
        </Modal>
      )}

      <ToastContainer position="bottom-right" autoClose={3000} theme="dark" />
    </div>
  );
}

function RowAction({
  label,
  onClick,
  danger,
  children,
}: {
  label: string;
  onClick: () => void;
  danger?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      title={label}
      aria-label={label}
      className={`rounded-md p-2 ${danger ? "text-red-300/80 hover:bg-red-500/10 hover:text-red-300" : "text-white/60 hover:bg-white/10 hover:text-white"}`}
    >
      {children}
    </button>
  );
}

function PageButton({
  active,
  disabled,
  onClick,
  children,
}: {
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`min-w-9 rounded-md px-3 py-1.5 text-sm ${
        active ? "bg-[#26658c] text-white" : "bg-white/5 text-white/70 hover:bg-white/10 disabled:opacity-40"
      }`}
    >
      {children}
    </button>
  );
}

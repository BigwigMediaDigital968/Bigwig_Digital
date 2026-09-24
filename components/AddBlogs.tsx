"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
// Toasts render in the admin page's <ToastContainer>.
import { toast } from "react-toastify";
import {
  ArrowLeft,
  ChevronDown,
  ImagePlus,
  LoaderCircle,
  Lock,
  Plus,
  Save,
  Trash2,
  TriangleAlert,
} from "lucide-react";
import BlogEditor, { type Notify } from "./blog-editor/BlogEditor";
import "./blog-editor/editor.css";

/* ---------------- Types ---------------- */

interface FAQ {
  question: string;
  answer: string;
}

interface Breadcrumb {
  name: string;
  url: string;
  position: number;
}

interface CustomSchema {
  name: string;
  json: string; // raw JSON-LD string
}

interface SchemaSettings {
  article: boolean;
  breadcrumb: boolean;
  faq: boolean;
  organization: boolean;
  speakable: boolean;
  video: boolean;
  image: boolean;
}

export type Status = "DRAFT" | "PUBLISHED" | "INACTIVE";

export interface BlogPost {
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  tags?: string | string[];
  coverImage?: string;
  category: string;
  status?: Status;
  faqs?: FAQ[];
  breadcrumbs?: Breadcrumb[];
  schemaSettings?: SchemaSettings;
  customSchemas?: (CustomSchema | Record<string, unknown>)[];
}

interface FormState {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  tags: string;
  category: string;
  status: Status;
  faqs: FAQ[];
  breadcrumbs: Breadcrumb[];
  schemaSettings: SchemaSettings;
  customSchemas: CustomSchema[];
}

/* ---------------- Constants ---------------- */

const categoryOptions = [
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

const defaultSchemaSettings: SchemaSettings = {
  article: true,
  breadcrumb: true,
  faq: true,
  organization: true,
  speakable: false,
  video: false,
  image: true,
};

const SCHEMA_LABELS: Record<keyof SchemaSettings, string> = {
  article: "Article",
  breadcrumb: "Breadcrumb",
  faq: "FAQ",
  organization: "Organization",
  speakable: "Speakable",
  video: "Video",
  image: "Image",
};

const SITE = "https://www.bigwigmediadigital.com";
const API = process.env.NEXT_PUBLIC_API_BASE;

/* ---------------- Helpers ---------------- */

const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/[\s-]+/g, "-");

/** Custom schemas were stored either as {name, json} or as raw JSON-LD objects. */
function toCustomSchema(s: CustomSchema | Record<string, unknown>): CustomSchema {
  if (typeof (s as CustomSchema).json === "string") return s as CustomSchema;
  return {
    name: String((s as Record<string, unknown>)["@type"] || "Schema"),
    json: JSON.stringify(s, null, 2),
  };
}

function toForm(blog: BlogPost | null): FormState {
  return {
    title: blog?.title || "",
    slug: blog?.slug || "",
    excerpt: blog?.excerpt || "",
    content: blog?.content || "",
    author: blog?.author || "",
    tags: Array.isArray(blog?.tags) ? blog.tags.join(", ") : blog?.tags || "",
    category: blog?.category || "",
    status: blog?.status || "DRAFT",
    faqs: blog?.faqs?.map((f) => ({ ...f })) || [],
    breadcrumbs: blog?.breadcrumbs?.map((b) => ({ ...b })) || [],
    schemaSettings: { ...defaultSchemaSettings, ...(blog?.schemaSettings || {}) },
    customSchemas: (blog?.customSchemas || []).map(toCustomSchema),
  };
}

const hasRealContent = (html: string) =>
  !!html && (/<(img|iframe|table|div data-html-block)/i.test(html) || html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim().length > 0);

/* ---------------- Component ---------------- */

/**
 * Blog composer page body. Rendered inside the admin layout by
 * /admin/blogs/new and /admin/blogs/edit/[slug].
 */
const AddBlog = ({
  onClose,
  onSaved,
  existingBlog = null,
}: {
  /** Leave the composer (back to the list). */
  onClose: () => void;
  /** Called after a successful save with the saved post's slug. */
  onSaved?: (slug: string, created: boolean) => void;
  existingBlog?: BlogPost | null;
}) => {
  const isEdit = !!existingBlog;
  // Last saved state; "unsaved changes" compares against it.
  const [initial, setInitial] = useState<FormState>(() => toForm(existingBlog));
  const [form, setForm] = useState<FormState>(initial);
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(existingBlog?.coverImage || null);
  const [slugTouched, setSlugTouched] = useState(isEdit);
  const [submitting, setSubmitting] = useState(false);
  const [pendingUploads, setPendingUploads] = useState(0);
  const [showSidebar, setShowSidebar] = useState(true);

  const notify: Notify = useCallback((type, message) => {
    if (type === "success") toast.success(message);
    else if (type === "error") toast.error(message);
    else toast.info(message);
  }, []);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => setForm((f) => ({ ...f, [key]: value }));

  const dirty = useMemo(() => coverFile !== null || JSON.stringify(form) !== JSON.stringify(initial), [form, initial, coverFile]);

  // Local drafts were removed; clear any left over in this browser.
  useEffect(() => {
    try {
      Object.keys(localStorage)
        .filter((k) => k.startsWith("bw-blog-draft:"))
        .forEach((k) => localStorage.removeItem(k));
    } catch {}
  }, []);

  /* ---------------- Leave guards ---------------- */

  useEffect(() => {
    if (!dirty) return;
    const handler = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [dirty]);

  const requestClose = () => {
    if (dirty && !confirm("You have unsaved changes that will be lost. Leave the editor?")) return;
    onClose();
  };

  // The editor toolbar sticks just below the sticky page header.
  const rootRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const header = headerRef.current;
    const root = rootRef.current;
    if (!header || !root) return;
    // `top` is negative (it cancels the admin <main> padding), so the header's
    // visible bottom edge is its height plus that offset.
    const ro = new ResizeObserver(() => {
      const top = parseFloat(getComputedStyle(header).top) || 0;
      root.style.setProperty("--bw-sticky-offset", `${header.offsetHeight + top}px`);
    });
    ro.observe(header);
    return () => ro.disconnect();
  }, []);

  /* ---------------- Cover image ---------------- */

  useEffect(() => {
    if (!coverFile) return;
    const url = URL.createObjectURL(coverFile);
    setCoverPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [coverFile]);

  const pickCover = (file?: File | null) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) return toast.error("Cover must be an image");
    if (file.size > 10 * 1024 * 1024) return toast.error("Cover image must be under 10MB");
    setCoverFile(file);
  };

  /* ---------------- List helpers ---------------- */

  const updateItem = <K extends "faqs" | "breadcrumbs" | "customSchemas">(key: K, index: number, patch: Partial<FormState[K][number]>) =>
    setForm((f) => ({
      ...f,
      [key]: (f[key] as FormState[K][number][]).map((item, i) => (i === index ? { ...item, ...patch } : item)),
    }));

  const removeItem = (key: "faqs" | "breadcrumbs" | "customSchemas", index: number) =>
    setForm((f) => ({ ...f, [key]: (f[key] as unknown[]).filter((_, i) => i !== index) }));

  /* ---------------- Validation & submit ---------------- */

  const schemaErrors = form.customSchemas.map((s) => {
    if (!s.json.trim()) return null;
    try {
      JSON.parse(s.json);
      return null;
    } catch (e) {
      return (e as Error).message;
    }
  });

  const validate = (): string | null => {
    if (!form.title.trim()) return "Title is required";
    if (!form.slug.trim()) return "Slug is required";
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(form.slug)) return "Slug can only contain lowercase letters, numbers and hyphens";
    if (!hasRealContent(form.content)) return "Blog content is empty";
    if (pendingUploads > 0) return "Please wait for images to finish uploading";
    if (/src="blob:/.test(form.content)) return "Some images haven't finished uploading";
    if (!form.excerpt.trim()) return "Meta description is required";
    if (!form.category) return "Select a category";
    if (!form.author.trim()) return "Author is required";
    if (!isEdit && !coverFile) return "Cover image is required";
    if (schemaErrors.some(Boolean)) return "One of the custom schemas is not valid JSON";
    if (form.faqs.some((f) => !f.question.trim() !== !f.answer.trim())) return "Every FAQ needs both a question and an answer";
    return null;
  };

  const handleSubmit = async () => {
    const error = validate();
    if (error) {
      toast.error(error);
      return;
    }
    setSubmitting(true);

    try {
      const blogData = new FormData();
      blogData.append("title", form.title.trim());
      blogData.append("slug", form.slug);
      blogData.append("excerpt", form.excerpt.trim());
      blogData.append("content", form.content);
      blogData.append("author", form.author.trim());
      blogData.append("tags", form.tags);
      blogData.append("category", form.category);
      blogData.append("faqs", JSON.stringify(form.faqs.filter((f) => f.question.trim() && f.answer.trim())));
      blogData.append(
        "breadcrumbs",
        JSON.stringify(form.breadcrumbs.filter((b) => b.name && b.url).map((b, i) => ({ ...b, position: i + 1 }))),
      );
      blogData.append("customSchemas", JSON.stringify(form.customSchemas.filter((s) => s.name && s.json.trim())));
      blogData.append("schemaSettings", JSON.stringify(form.schemaSettings));
      // Re-sending PUBLISHED would reset the publish date, only send on change.
      if (!isEdit || form.status !== initial.status) blogData.append("status", form.status);
      if (coverFile) blogData.append("coverImage", coverFile);

      const res = await fetch(isEdit ? `${API}/${existingBlog!.slug}` : `${API}/add`, {
        method: isEdit ? "PUT" : "POST",
        body: blogData,
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || data.msg || "Something went wrong");

      toast.success(isEdit ? "Blog updated" : "Blog created");

      // The saved state becomes the new baseline.
      setInitial(form);
      if (coverFile) {
        setCoverFile(null);
        if (data.blogPost?.coverImage) setCoverPreview(data.blogPost.coverImage);
      }
      onSaved?.(form.slug, !isEdit);
    } catch (err) {
      console.error(err);
      toast.error((err as Error).message || "Network or server error");
    } finally {
      setSubmitting(false);
    }
  };

  const submitRef = useRef(handleSubmit);
  submitRef.current = handleSubmit;
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
        e.preventDefault();
        submitRef.current();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* ---------------- UI ---------------- */

  const titleLen = form.title.length;
  const descLen = form.excerpt.length;

  return (
    // Negative margin cancels the admin <main> padding so the page runs edge to edge.
    <div ref={rootRef} className="-m-4 flex min-h-[calc(100%+2rem)] flex-col bg-[#0b121a] text-white sm:-m-6 sm:min-h-[calc(100%+3rem)]">
      {/* ---------- Header ---------- */}
      <header
        ref={headerRef}
        className="sticky -top-4 z-30 flex flex-wrap items-center gap-3 border-b sm:-top-6 border-white/10 bg-[#0d1726]/95 px-4 py-2.5 backdrop-blur"
      >
        <button type="button" onClick={requestClose} className="rounded-lg p-2 text-white/70 hover:bg-white/10 hover:text-white" aria-label="Back to all posts" title="Back to all posts">
          <ArrowLeft size={18} />
        </button>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] uppercase tracking-wider text-white/45">{isEdit ? "Editing post" : "New post"}</p>
          <p className="truncate text-sm font-medium">{form.title || "Untitled"}</p>
        </div>

        <span className="hidden text-xs text-white/50 sm:block">
          {pendingUploads > 0 ? (
            <span className="flex items-center gap-1.5 text-[#54acbf]">
              <LoaderCircle size={13} className="animate-spin" /> Uploading images…
            </span>
          ) : dirty ? (
            "Unsaved changes"
          ) : (
            "All changes saved"
          )}
        </span>

        <select
          value={form.status}
          onChange={(e) => update("status", e.target.value as Status)}
          className="bw-input w-auto py-1.5 text-sm"
          aria-label="Status"
        >
          <option value="DRAFT">Draft</option>
          <option value="PUBLISHED">Published</option>
          <option value="INACTIVE">Inactive</option>
        </select>

        <button type="button" className="bw-btn-sm hidden xl:inline-flex" onClick={() => setShowSidebar((s) => !s)}>
          {showSidebar ? "Hide settings" : "Show settings"}
        </button>

        <button type="button" onClick={handleSubmit} disabled={submitting || pendingUploads > 0} className="bw-btn-primary" title="Save (Ctrl+S)">
          {submitting ? <LoaderCircle size={16} className="animate-spin" /> : <Save size={16} />}
          {submitting ? "Saving…" : isEdit ? "Update" : form.status === "PUBLISHED" ? "Publish" : "Save"}
        </button>
      </header>

      {/* ---------- Body ---------- */}
      <div className="flex flex-1 flex-col xl:flex-row">
        <div className="min-w-0 flex-1">
          <div className="mx-auto max-w-[960px] px-4 py-6 sm:px-8">
            <textarea
              value={form.title}
              onChange={(e) => {
                const title = e.target.value.replace(/\n/g, " ");
                setForm((f) => ({ ...f, title, slug: slugTouched ? f.slug : slugify(title) }));
              }}
              placeholder="Post title"
              rows={1}
              className="w-full resize-none bg-transparent text-3xl font-bold leading-tight outline-none placeholder:text-white/25 sm:text-4xl [field-sizing:content]"
            />

            <div className="mb-5 mt-2 flex flex-wrap items-center gap-1 text-sm text-white/50">
              <span>{SITE.replace("https://", "")}/blogs/</span>
              {isEdit ? (
                <span className="flex items-center gap-1 text-white/80" title="The slug can't change after publishing (it would break links and SEO)">
                  {form.slug} <Lock size={12} />
                </span>
              ) : (
                <input
                  value={form.slug}
                  onChange={(e) => {
                    setSlugTouched(true);
                    update("slug", slugify(e.target.value));
                  }}
                  className="min-w-[200px] flex-1 rounded border border-transparent bg-transparent px-1 text-white/85 outline-none hover:border-white/15 focus:border-[#54acbf]"
                  placeholder="post-url-slug"
                  aria-label="Slug"
                />
              )}
            </div>

            <BlogEditor
              value={form.content}
              onChange={(content) => update("content", content)}
              onPendingChange={setPendingUploads}
              notify={notify}
            />
          </div>
        </div>

        {/* ---------- Sidebar ---------- */}
        {showSidebar && (
          <aside className="w-full shrink-0 border-t border-white/10 bg-[#0d1726] xl:sticky xl:top-[var(--bw-sticky-offset,57px)] xl:max-h-[calc(100vh-var(--bw-sticky-offset,57px)-1.5rem)] xl:w-[360px] xl:self-start xl:overflow-y-auto xl:border-l xl:border-t-0">
            <Section title="Publishing" defaultOpen>
              <Label text="Category">
                <select className="bw-input" value={form.category} onChange={(e) => update("category", e.target.value)}>
                  <option value="">Select category</option>
                  {categoryOptions.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </Label>
              <Label text="Author">
                <input className="bw-input" value={form.author} onChange={(e) => update("author", e.target.value)} placeholder="Author name" />
              </Label>
              <Label text="Tags" hint="Comma separated">
                <input className="bw-input" value={form.tags} onChange={(e) => update("tags", e.target.value)} placeholder="seo, local seo, google ranking" />
              </Label>
              {form.tags.trim() && (
                <div className="-mt-1 flex flex-wrap gap-1.5">
                  {form.tags
                    .split(",")
                    .map((t) => t.trim())
                    .filter(Boolean)
                    .map((t, i) => (
                      <span key={`${t}-${i}`} className="rounded-full bg-[#26658c]/40 px-2 py-0.5 text-xs text-[#a7ebf2]">
                        {t}
                      </span>
                    ))}
                </div>
              )}
            </Section>

            <Section title="Cover image" defaultOpen badge={!isEdit && !coverFile ? "Required" : undefined}>
              <label
                className="group relative block cursor-pointer overflow-hidden rounded-lg border border-dashed border-white/20 hover:border-[#54acbf]"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  pickCover(e.dataTransfer.files?.[0]);
                }}
              >
                {coverPreview ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={coverPreview} alt="Cover preview" className="aspect-[1200/630] w-full object-cover" />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/50 text-sm opacity-0 transition group-hover:opacity-100">
                      Replace cover
                    </span>
                  </>
                ) : (
                  <span className="flex aspect-[1200/630] flex-col items-center justify-center gap-2 text-sm text-white/60">
                    <ImagePlus size={26} />
                    Click or drop an image
                    <span className="text-xs text-white/40">1200 × 630 recommended</span>
                  </span>
                )}
                <input type="file" accept="image/*" hidden onChange={(e) => pickCover(e.target.files?.[0])} />
              </label>
              {coverFile && <p className="mt-2 truncate text-xs text-white/50">New: {coverFile.name}</p>}
            </Section>

            <Section title="SEO" defaultOpen>
              <Label
                text="Meta description"
                hint={
                  <span className={descLen > 160 ? "text-amber-300" : descLen >= 120 ? "text-emerald-300" : ""}>
                    {descLen}/160 · 120–160 characters works best
                  </span>
                }
              >
                <textarea
                  className="bw-input min-h-[88px] resize-y"
                  value={form.excerpt}
                  onChange={(e) => update("excerpt", e.target.value)}
                  placeholder="Summary shown in Google results and social shares"
                />
              </Label>

              <div className="rounded-lg bg-white p-3 text-left">
                <p className="text-[11px] text-[#4d5156]">
                  bigwigmediadigital.com › blogs › {form.slug || "…"}
                </p>
                <p className="mt-0.5 line-clamp-1 text-[17px] leading-snug text-[#1a0dab]">{form.title || "Post title"}</p>
                <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-[#4d5156]">
                  {form.excerpt || "Your meta description will appear here."}
                </p>
              </div>
              {titleLen > 60 && (
                <p className="mt-2 flex items-center gap-1 text-xs text-amber-300">
                  <TriangleAlert size={12} /> Title is {titleLen} characters, Google usually shows ~60.
                </p>
              )}
            </Section>

            <Section title="FAQs" count={form.faqs.length}>
              {form.faqs.map((faq, index) => (
                <div key={index} className="mb-3 rounded-lg border border-white/10 bg-white/[0.03] p-3">
                  <div className="mb-2 flex items-center justify-between text-xs text-white/50">
                    <span>Question {index + 1}</span>
                    <IconButton label="Remove FAQ" onClick={() => removeItem("faqs", index)} />
                  </div>
                  <input
                    className="bw-input mb-2"
                    placeholder="Question"
                    value={faq.question}
                    onChange={(e) => updateItem("faqs", index, { question: e.target.value })}
                  />
                  <textarea
                    className="bw-input resize-y"
                    rows={3}
                    placeholder="Answer"
                    value={faq.answer}
                    onChange={(e) => updateItem("faqs", index, { answer: e.target.value })}
                  />
                </div>
              ))}
              <AddButton onClick={() => update("faqs", [...form.faqs, { question: "", answer: "" }])}>Add FAQ</AddButton>
            </Section>

            <Section title="Breadcrumbs" count={form.breadcrumbs.length}>
              {form.breadcrumbs.map((bc, index) => (
                <div key={index} className="mb-3 rounded-lg border border-white/10 bg-white/[0.03] p-3">
                  <div className="mb-2 flex items-center justify-between text-xs text-white/50">
                    <span>Level {index + 1}</span>
                    <IconButton label="Remove breadcrumb" onClick={() => removeItem("breadcrumbs", index)} />
                  </div>
                  <input
                    className="bw-input mb-2"
                    placeholder="Name"
                    value={bc.name}
                    onChange={(e) => updateItem("breadcrumbs", index, { name: e.target.value })}
                  />
                  <input
                    className="bw-input"
                    placeholder="URL (https://...)"
                    value={bc.url}
                    onChange={(e) => updateItem("breadcrumbs", index, { url: e.target.value })}
                  />
                </div>
              ))}
              <AddButton
                onClick={() => update("breadcrumbs", [...form.breadcrumbs, { name: "", url: "", position: form.breadcrumbs.length + 1 }])}
              >
                Add breadcrumb
              </AddButton>
            </Section>

            <Section title="Structured data (schema)">
              <div className="mb-4 grid grid-cols-2 gap-2">
                {(Object.keys(SCHEMA_LABELS) as (keyof SchemaSettings)[]).map((key) => (
                  <label key={key} className="flex items-center gap-2 text-sm text-white/85">
                    <input
                      type="checkbox"
                      checked={form.schemaSettings[key]}
                      onChange={(e) => update("schemaSettings", { ...form.schemaSettings, [key]: e.target.checked })}
                    />
                    {SCHEMA_LABELS[key]}
                  </label>
                ))}
              </div>

              <p className="mb-2 text-xs uppercase tracking-wide text-white/50">Custom JSON-LD</p>
              {form.customSchemas.map((schema, index) => (
                <div key={index} className="mb-3 rounded-lg border border-white/10 bg-white/[0.03] p-3">
                  <div className="mb-2 flex items-center gap-2">
                    <input
                      className="bw-input"
                      placeholder="Name (e.g. Event, Product)"
                      value={schema.name}
                      onChange={(e) => updateItem("customSchemas", index, { name: e.target.value })}
                    />
                    <IconButton label="Remove schema" onClick={() => removeItem("customSchemas", index)} />
                  </div>
                  <textarea
                    className={`bw-input resize-y font-mono text-xs ${schemaErrors[index] ? "!border-red-400" : ""}`}
                    rows={7}
                    placeholder='{ "@context": "https://schema.org", "@type": "…" }'
                    value={schema.json}
                    spellCheck={false}
                    onChange={(e) => updateItem("customSchemas", index, { json: e.target.value })}
                  />
                  {schemaErrors[index] && <p className="mt-1 text-xs text-red-300">Invalid JSON: {schemaErrors[index]}</p>}
                </div>
              ))}
              <AddButton onClick={() => update("customSchemas", [...form.customSchemas, { name: "", json: "" }])}>Add custom schema</AddButton>
            </Section>
          </aside>
        )}
      </div>
    </div>
  );
};

/* ---------------- Small UI pieces ---------------- */

function Section({
  title,
  children,
  defaultOpen = false,
  count,
  badge,
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  count?: number;
  badge?: string;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section className="border-b border-white/10">
      <button type="button" onClick={() => setOpen((o) => !o)} className="flex w-full items-center gap-2 px-5 py-3.5 text-left hover:bg-white/[0.03]">
        <span className="flex-1 text-sm font-semibold">{title}</span>
        {badge && <span className="rounded-full bg-amber-400/15 px-2 py-0.5 text-[10px] text-amber-200">{badge}</span>}
        {!!count && <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white/70">{count}</span>}
        <ChevronDown size={16} className={`text-white/50 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-5">{children}</div>}
    </section>
  );
}

function Label({ text, hint, children }: { text: string; hint?: ReactNode; children: ReactNode }) {
  return (
    <label className="mb-3.5 block">
      <span className="mb-1.5 block text-xs font-medium text-white/60">{text}</span>
      {children}
      {hint && <span className="mt-1 block text-[11px] text-white/45">{hint}</span>}
    </label>
  );
}

function AddButton({ onClick, children }: { onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-dashed border-white/20 py-2 text-sm text-white/75 hover:border-[#54acbf] hover:text-white"
    >
      <Plus size={14} /> {children}
    </button>
  );
}

function IconButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="shrink-0 rounded p-1.5 text-red-300/80 hover:bg-red-500/10 hover:text-red-300" aria-label={label} title={label}>
      <Trash2 size={14} />
    </button>
  );
}

export default AddBlog;

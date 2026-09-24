"use client";

import { useEffect, useRef, useState } from "react";
import { ImagePlus, Library, Link2, LoaderCircle, Upload } from "lucide-react";
import { Field, Modal } from "./ui";
import { fetchImageLibrary, uploadImageFile, type LibraryImage } from "./upload";
import { altFromFilename } from "../../utils/blogHtml";
import type { ImageAlign, ImageAttrs } from "./shared";

type Notify = (type: "success" | "error" | "info", message: string) => void;

const isCloudinary = (src: string) => /^https?:\/\/res\.cloudinary\.com\//i.test(src);

/* ------------------------------------------------------------------ */
/* Image                                                               */
/* ------------------------------------------------------------------ */

const WIDTHS = [
  { label: "Auto (original)", value: "" },
  { label: "25%", value: "25%" },
  { label: "33%", value: "33%" },
  { label: "50%", value: "50%" },
  { label: "66%", value: "66%" },
  { label: "75%", value: "75%" },
  { label: "100% (full width)", value: "100%" },
];

export function ImageDialog({
  mode,
  initial,
  onClose,
  onSubmit,
  notify,
}: {
  mode: "insert" | "edit";
  initial?: Partial<ImageAttrs>;
  onClose: () => void;
  onSubmit: (attrs: Partial<ImageAttrs>) => void;
  notify: Notify;
}) {
  const [tab, setTab] = useState<"upload" | "url" | "library">("upload");
  const [replacing, setReplacing] = useState(mode === "insert");
  const [src, setSrc] = useState(initial?.src || "");
  const [urlInput, setUrlInput] = useState("");
  const [copyToCloud, setCopyToCloud] = useState(true);
  const [progress, setProgress] = useState<number | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const [alt, setAlt] = useState(initial?.alt || "");
  const [title, setTitle] = useState(initial?.title || "");
  const [caption, setCaption] = useState(initial?.caption || "");
  const [href, setHref] = useState(initial?.href || "");
  const [newTab, setNewTab] = useState(initial?.newTab ?? true);
  const [width, setWidth] = useState(initial?.width || "");
  const [align, setAlign] = useState<ImageAlign>(initial?.align ?? (mode === "insert" ? "center" : null));

  const [library, setLibrary] = useState<LibraryImage[] | null>(null);
  const [libPage, setLibPage] = useState(1);
  const [libTotal, setLibTotal] = useState(0);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (tab !== "library" || library) return;
    fetchImageLibrary(1)
      .then((r) => {
        setLibrary(r.images);
        setLibTotal(r.total);
      })
      .catch(() => {
        setLibrary([]);
        notify("error", "Could not load the image library");
      });
  }, [tab, library, notify]);

  const loadMore = async () => {
    const next = libPage + 1;
    const r = await fetchImageLibrary(next);
    setLibrary((l) => [...(l || []), ...r.images]);
    setLibPage(next);
  };

  const handleFile = async (file?: File | null) => {
    if (!file) return;
    setProgress(0);
    try {
      const res = await uploadImageFile(file, setProgress);
      setSrc(res.url);
      if (!alt) setAlt(altFromFilename(file.name));
      setReplacing(false);
    } catch (err) {
      notify("error", (err as Error).message);
    } finally {
      setProgress(null);
    }
  };

  const applyUrl = () => {
    const value = urlInput.trim();
    if (!/^https?:\/\//i.test(value)) {
      notify("error", "Enter a full image URL starting with https://");
      return;
    }
    setSrc(value);
    setReplacing(false);
  };

  const submit = () => {
    if (!src) return;
    let finalAlign = align;
    let finalWidth = width || null;
    // floated images need a width, otherwise a large image fills the column
    if ((finalAlign === "left" || finalAlign === "right") && !finalWidth) finalWidth = "50%";
    if (finalWidth === "100%" && finalAlign !== "center") finalAlign = null;

    onSubmit({
      src,
      alt: alt.trim(),
      title: title.trim() || null,
      caption: caption.trim() || null,
      href: href.trim() || null,
      newTab: !!href.trim() && newTab,
      width: finalWidth,
      align: finalAlign,
      pending: !isCloudinary(src) && copyToCloud && !src.startsWith("blob:"),
    });
  };

  const uploading = progress !== null;

  return (
    <Modal
      title={mode === "insert" ? "Insert image" : "Image settings"}
      onClose={onClose}
      width={680}
      footer={
        <>
          <button type="button" className="bw-btn-ghost" onClick={onClose}>
            Cancel
          </button>
          <button type="button" className="bw-btn-primary" disabled={!src || uploading} onClick={submit}>
            {mode === "insert" ? "Insert image" : "Save changes"}
          </button>
        </>
      }
    >
      {/* ---------- Source ---------- */}
      {!replacing && src ? (
        <div className="mb-4 flex items-center gap-4 rounded-lg border border-white/10 bg-white/5 p-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="" className="h-20 w-28 rounded object-cover" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs text-white/60">{src}</p>
            {!isCloudinary(src) && (
              <label className="mt-2 flex items-center gap-2 text-xs text-white/80">
                <input type="checkbox" checked={copyToCloud} onChange={(e) => setCopyToCloud(e.target.checked)} />
                Copy this image to Cloudinary (recommended, external links can break)
              </label>
            )}
          </div>
          <button type="button" className="bw-btn-sm" onClick={() => setReplacing(true)}>
            Replace
          </button>
        </div>
      ) : (
        <div className="mb-4">
          <div className="mb-3 flex gap-1 rounded-lg bg-white/5 p-1">
            {(
              [
                ["upload", "Upload", <Upload key="u" size={14} />],
                ["url", "From URL", <Link2 key="l" size={14} />],
                ["library", "Media library", <Library key="m" size={14} />],
              ] as const
            ).map(([key, label, icon]) => (
              <button
                key={key}
                type="button"
                onClick={() => setTab(key)}
                className={`flex flex-1 items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-sm ${
                  tab === key ? "bg-[#26658c] text-white" : "text-white/70 hover:bg-white/10"
                }`}
              >
                {icon}
                {label}
              </button>
            ))}
          </div>

          {tab === "upload" && (
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragOver(false);
                handleFile(e.dataTransfer.files?.[0]);
              }}
              onClick={() => !uploading && fileRef.current?.click()}
              className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-4 py-10 text-center transition ${
                dragOver ? "border-[#54acbf] bg-[#54acbf]/10" : "border-white/20 hover:border-white/40"
              }`}
            >
              {uploading ? (
                <>
                  <LoaderCircle className="animate-spin text-[#54acbf]" />
                  <p className="text-sm text-white/80">Uploading… {progress}%</p>
                  <div className="h-1.5 w-48 overflow-hidden rounded bg-white/10">
                    <div className="h-full bg-[#54acbf] transition-all" style={{ width: `${progress}%` }} />
                  </div>
                </>
              ) : (
                <>
                  <ImagePlus className="text-white/50" size={32} />
                  <p className="text-sm text-white/80">Drop an image here or click to browse</p>
                  <p className="text-xs text-white/45">JPG, PNG, WebP, GIF or SVG · max 10MB · stored on Cloudinary</p>
                </>
              )}
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => {
                  handleFile(e.target.files?.[0]);
                  e.target.value = "";
                }}
              />
            </div>
          )}

          {tab === "url" && (
            <div className="flex gap-2">
              <input
                className="bw-input flex-1"
                placeholder="https://example.com/image.jpg"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), applyUrl())}
                autoFocus
              />
              <button type="button" className="bw-btn-primary" onClick={applyUrl}>
                Use URL
              </button>
            </div>
          )}

          {tab === "library" && (
            <div>
              {!library ? (
                <p className="flex items-center gap-2 py-8 text-sm text-white/60">
                  <LoaderCircle size={16} className="animate-spin" /> Loading images…
                </p>
              ) : library.length === 0 ? (
                <p className="py-8 text-center text-sm text-white/60">No uploaded images yet.</p>
              ) : (
                <>
                  <div className="grid max-h-72 grid-cols-3 gap-2 overflow-y-auto sm:grid-cols-4">
                    {library.map((img) => (
                      <button
                        key={img._id}
                        type="button"
                        title={img.originalName}
                        onClick={() => {
                          setSrc(img.url);
                          if (!alt && img.originalName) setAlt(altFromFilename(img.originalName));
                          setReplacing(false);
                        }}
                        className="group aspect-[4/3] overflow-hidden rounded-md border border-white/10 hover:border-[#54acbf]"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={img.url} alt="" loading="lazy" className="h-full w-full object-cover transition group-hover:scale-105" />
                      </button>
                    ))}
                  </div>
                  {library.length < libTotal && (
                    <button type="button" className="bw-btn-sm mt-3 w-full" onClick={loadMore}>
                      Load more
                    </button>
                  )}
                </>
              )}
            </div>
          )}

          {mode === "edit" && src && (
            <button type="button" className="mt-2 text-xs text-white/60 underline" onClick={() => setReplacing(false)}>
              Keep current image
            </button>
          )}
        </div>
      )}

      {/* ---------- Details ---------- */}
      <Field
        label="Alt text"
        hint={
          <>
            Describes the image for Google and screen readers. {alt.length}/125
            {!alt && <span className="text-amber-300"> · Recommended for SEO</span>}
          </>
        }
      >
        <input className="bw-input" value={alt} onChange={(e) => setAlt(e.target.value)} placeholder="e.g. Team reviewing SEO report on a laptop" />
      </Field>

      <div className="grid gap-x-4 sm:grid-cols-2">
        <Field label="Title (tooltip)">
          <input className="bw-input" value={title} onChange={(e) => setTitle(e.target.value)} />
        </Field>
        <Field label="Caption">
          <input className="bw-input" value={caption} onChange={(e) => setCaption(e.target.value)} placeholder="Shown under the image" />
        </Field>
        <Field label="Width">
          <select className="bw-input" value={width} onChange={(e) => setWidth(e.target.value)}>
            {WIDTHS.map((w) => (
              <option key={w.value} value={w.value}>
                {w.label}
              </option>
            ))}
            {width && !WIDTHS.some((w) => w.value === width) && <option value={width}>{width} (custom)</option>}
          </select>
        </Field>
        <Field label="Alignment">
          <select className="bw-input" value={align ?? ""} onChange={(e) => setAlign((e.target.value || null) as ImageAlign)}>
            <option value="">None (block)</option>
            <option value="center">Center</option>
            <option value="left">Left, text wraps right</option>
            <option value="right">Right, text wraps left</option>
          </select>
        </Field>
      </div>

      <Field label="Link (optional)">
        <input className="bw-input" value={href} onChange={(e) => setHref(e.target.value)} placeholder="https://… (clicking the image opens this)" />
      </Field>
      {href && (
        <label className="-mt-1 flex items-center gap-2 text-sm text-white/80">
          <input type="checkbox" checked={newTab} onChange={(e) => setNewTab(e.target.checked)} /> Open in new tab
        </label>
      )}
    </Modal>
  );
}

/* ------------------------------------------------------------------ */
/* Link                                                                */
/* ------------------------------------------------------------------ */

export interface LinkValues {
  href: string;
  text: string;
  newTab: boolean;
  nofollow: boolean;
}

const SITE_HOST = "bigwigmediadigital.com";

export function LinkDialog({
  initial,
  askText,
  onClose,
  onSubmit,
  onRemove,
}: {
  initial: LinkValues;
  askText: boolean;
  onClose: () => void;
  onSubmit: (v: LinkValues) => void;
  onRemove?: () => void;
}) {
  const [v, setV] = useState(initial);
  const [touchedTab, setTouchedTab] = useState(!!initial.href);

  const setHref = (href: string) => {
    // default: external links open in a new tab, internal ones don't
    const external = /^https?:\/\//i.test(href) && !href.includes(SITE_HOST);
    setV((s) => ({ ...s, href, newTab: touchedTab ? s.newTab : external }));
  };

  const submit = () => {
    let href = v.href.trim();
    if (!href) return;
    if (!/^(https?:|mailto:|tel:|\/|#)/i.test(href)) href = `https://${href}`;
    onSubmit({ ...v, href });
  };

  return (
    <Modal
      title={initial.href ? "Edit link" : "Insert link"}
      onClose={onClose}
      width={480}
      footer={
        <>
          {onRemove && (
            <button type="button" className="bw-btn-ghost mr-auto text-red-300" onClick={onRemove}>
              Remove link
            </button>
          )}
          <button type="button" className="bw-btn-ghost" onClick={onClose}>
            Cancel
          </button>
          <button type="button" className="bw-btn-primary" disabled={!v.href.trim()} onClick={submit}>
            Apply
          </button>
        </>
      }
    >
      <Field label="URL" hint="Use /blogs/… for pages on this site, #heading-id for anchors">
        <input
          className="bw-input"
          value={v.href}
          onChange={(e) => setHref(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), submit())}
          placeholder="https://"
          autoFocus
        />
      </Field>
      {askText && (
        <Field label="Text to display">
          <input className="bw-input" value={v.text} onChange={(e) => setV({ ...v, text: e.target.value })} />
        </Field>
      )}
      <label className="mb-2 flex items-center gap-2 text-sm text-white/80">
        <input
          type="checkbox"
          checked={v.newTab}
          onChange={(e) => {
            setTouchedTab(true);
            setV({ ...v, newTab: e.target.checked });
          }}
        />
        Open in new tab
      </label>
      <label className="flex items-center gap-2 text-sm text-white/80">
        <input type="checkbox" checked={v.nofollow} onChange={(e) => setV({ ...v, nofollow: e.target.checked })} />
        Add rel=&quot;nofollow&quot; (sponsored or untrusted links)
      </label>
    </Modal>
  );
}

/* ------------------------------------------------------------------ */
/* Raw HTML / YouTube                                                  */
/* ------------------------------------------------------------------ */

export function HtmlDialog({
  initial,
  onClose,
  onSubmit,
}: {
  initial: string;
  onClose: () => void;
  onSubmit: (html: string) => void;
}) {
  const [html, setHtml] = useState(initial);
  return (
    <Modal
      title="Custom HTML block"
      onClose={onClose}
      width={860}
      footer={
        <>
          <button type="button" className="bw-btn-ghost" onClick={onClose}>
            Cancel
          </button>
          <button type="button" className="bw-btn-primary" onClick={() => onSubmit(html)}>
            Save block
          </button>
        </>
      }
    >
      <p className="mb-3 text-xs text-white/60">
        Rendered exactly as written. Use it for embeds, CTA cards, accordions or custom layouts. Any &lt;style&gt; here only
        applies inside the blog post, not the rest of the page.
      </p>
      <textarea
        className="bw-input h-[50vh] resize-y font-mono text-[13px] leading-relaxed"
        value={html}
        onChange={(e) => setHtml(e.target.value)}
        spellCheck={false}
        autoFocus
      />
    </Modal>
  );
}

export function YoutubeDialog({ onClose, onSubmit }: { onClose: () => void; onSubmit: (url: string) => void }) {
  const [url, setUrl] = useState("");
  const valid = /(youtube\.com\/(watch|embed|shorts)|youtu\.be\/)/i.test(url);
  return (
    <Modal
      title="Embed YouTube video"
      onClose={onClose}
      width={480}
      footer={
        <>
          <button type="button" className="bw-btn-ghost" onClick={onClose}>
            Cancel
          </button>
          <button type="button" className="bw-btn-primary" disabled={!valid} onClick={() => onSubmit(url.trim())}>
            Embed
          </button>
        </>
      }
    >
      <Field label="Video URL" hint="youtube.com/watch?v=…, youtu.be/… or a Shorts link">
        <input className="bw-input" value={url} onChange={(e) => setUrl(e.target.value)} autoFocus placeholder="https://www.youtube.com/watch?v=" />
      </Field>
    </Modal>
  );
}

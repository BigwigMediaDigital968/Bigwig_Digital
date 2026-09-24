"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { EditorContent, useEditor, useEditorState, type Editor } from "@tiptap/react";
import { BubbleMenu } from "@tiptap/react/menus";
import type { JSONContent } from "@tiptap/core";
import {
  ExternalLink,
  ImageUp,
  Pencil,
  TextAlignCenter,
  TextAlignEnd,
  TextAlignStart,
  Trash2,
  TriangleAlert,
  Unlink,
  RectangleHorizontal,
} from "lucide-react";
import { buildExtensions } from "./extensions";
import Toolbar from "./Toolbar";
import { HtmlDialog, ImageDialog, LinkDialog, YoutubeDialog, type LinkValues } from "./dialogs";
import { nodeStorage, type ImageAlign, type ImageAttrs } from "./shared";
import { dataUrlToFile, uploadImageFile, uploadImageFromUrl, validateImageFile } from "./upload";
import { altFromFilename, cleanPastedHtml, prepareHtmlForEditor, type PasteMode } from "../../utils/blogHtml";
import { formatHtml } from "../../utils/formatHtml";
import "./editor.css";

export type Notify = (type: "success" | "error" | "info", message: string) => void;

interface Props {
  /** Initial HTML. The editor is uncontrolled after mount; remount with a new `key` to reset. */
  value: string;
  onChange: (html: string) => void;
  /** Number of images still uploading. Saving should wait until it's 0. */
  onPendingChange?: (count: number) => void;
  notify: Notify;
  placeholder?: string;
}

const PASTE_MODE_KEY = "bw-editor-paste-mode";

type ImageDialogState = { mode: "insert" } | { mode: "edit"; pos: number; initial: ImageAttrs };
type LinkDialogState = { initial: LinkValues; askText: boolean };
type HtmlDialogState = { pos: number | null; initial: string };

export default function BlogEditor({ value, onChange, onPendingChange, notify, placeholder }: Props) {
  const [pasteMode, setPasteModeState] = useState<PasteMode>(() => {
    try {
      return (localStorage.getItem(PASTE_MODE_KEY) as PasteMode) || "clean";
    } catch {
      return "clean";
    }
  });
  const pasteModeRef = useRef(pasteMode);
  const setPasteMode = (m: PasteMode) => {
    pasteModeRef.current = m;
    setPasteModeState(m);
    try {
      localStorage.setItem(PASTE_MODE_KEY, m);
    } catch {}
  };

  const [source, setSource] = useState<string | null>(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [imageDialog, setImageDialog] = useState<ImageDialogState | null>(null);
  const [linkDialog, setLinkDialog] = useState<LinkDialogState | null>(null);
  const [htmlDialog, setHtmlDialog] = useState<HtmlDialogState | null>(null);
  const [youtubeOpen, setYoutubeOpen] = useState(false);

  const editorRef = useRef<Editor | null>(null);
  const notifyRef = useRef(notify);
  notifyRef.current = notify;
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  /* ---------------- Image uploads (paste, drop, external URLs) ---------------- */

  const blobFiles = useRef(new Map<string, File>());
  const inflight = useRef(new Set<string>());

  /** Updates (or removes, when attrs is null) every image node with this src. */
  const patchImages = useCallback((src: string, attrs: Partial<ImageAttrs> | null) => {
    const ed = editorRef.current;
    if (!ed || ed.isDestroyed) return;
    const { tr } = ed.state;
    const hits: { pos: number; size: number; attrs: Record<string, unknown> }[] = [];
    ed.state.doc.descendants((node, pos) => {
      if (node.type.name === "image" && node.attrs.src === src) hits.push({ pos, size: node.nodeSize, attrs: node.attrs });
    });
    if (!hits.length) return;
    for (const hit of hits.reverse()) {
      if (attrs) tr.setNodeMarkup(hit.pos, undefined, { ...hit.attrs, ...attrs });
      else tr.delete(hit.pos, hit.pos + hit.size);
    }
    tr.setMeta("addToHistory", false);
    ed.view.dispatch(tr);
  }, []);

  const uploadPending = useCallback(
    async (src: string) => {
      inflight.current.add(src);
      try {
        let url: string;
        if (src.startsWith("blob:")) {
          const file = blobFiles.current.get(src);
          if (!file) throw new Error("File is no longer available");
          url = (await uploadImageFile(file)).url;
        } else if (src.startsWith("data:")) {
          url = (await uploadImageFile(dataUrlToFile(src))).url;
        } else {
          url = (await uploadImageFromUrl(src)).url;
        }
        patchImages(src, { src: url, pending: false });
        if (src.startsWith("blob:")) {
          URL.revokeObjectURL(src);
          blobFiles.current.delete(src);
        }
      } catch (err) {
        const reason = (err as Error).message;
        if (src.startsWith("blob:")) {
          patchImages(src, null);
          notifyRef.current("error", `Image upload failed: ${reason}`);
        } else if (src.startsWith("data:")) {
          patchImages(src, { pending: false });
          notifyRef.current("error", "A pasted image couldn't be uploaded and is embedded in the post. Replace it to keep the page light.");
        } else {
          patchImages(src, { pending: false });
          notifyRef.current("info", "An image couldn't be copied to Cloudinary and still loads from its original website.");
        }
      } finally {
        inflight.current.delete(src);
      }
    },
    [patchImages],
  );

  const scanPending = useCallback(
    (ed: Editor) => {
      let count = 0;
      const toStart = new Set<string>();
      ed.state.doc.descendants((node) => {
        if (node.type.name === "image" && node.attrs.pending) {
          count++;
          if (!inflight.current.has(node.attrs.src)) toStart.add(node.attrs.src);
        }
      });
      toStart.forEach((src) => uploadPending(src));
      onPendingChange?.(count);
    },
    [onPendingChange, uploadPending],
  );

  const insertFiles = useCallback((files: File[], pos?: number) => {
    const ed = editorRef.current;
    if (!ed) return;
    const nodes: JSONContent[] = [];
    for (const file of files) {
      const invalid = validateImageFile(file);
      if (invalid) {
        notifyRef.current("error", invalid);
        continue;
      }
      const url = URL.createObjectURL(file);
      blobFiles.current.set(url, file);
      nodes.push({ type: "image", attrs: { src: url, alt: altFromFilename(file.name), align: "center", pending: true } });
    }
    if (!nodes.length) return;
    if (typeof pos === "number") ed.chain().focus().insertContentAt(pos, nodes).run();
    else ed.chain().focus().insertContent(nodes).run();
  }, []);

  /* ---------------- Editor ---------------- */

  const [initialContent] = useState(() => prepareHtmlForEditor(value));
  const initialValueRef = useRef(value);
  /** Editor HTML right after load. Matching it again (e.g. after undo) means "no changes". */
  const baselineRef = useRef<string | null>(null);
  const settlingRef = useRef(false);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: buildExtensions(placeholder || "Start writing your post… paste from Google Docs, Word or any website"),
    content: initialContent,
    editorProps: {
      attributes: { class: "blog-content bw-prose", spellcheck: "true" },

      transformPastedHTML: (html) => {
        const result = cleanPastedHtml(html, pasteModeRef.current);
        if (result.droppedImages) {
          notifyRef.current(
            "info",
            `${result.droppedImages} image(s) from Word can't be pasted directly. Insert them with the image button.`,
          );
        }
        return result.html;
      },

      handlePaste: (view, event) => {
        const data = event.clipboardData;
        if (!data) return false;
        const html = data.getData("text/html");
        const files = Array.from(data.files || []).filter((f) => f.type.startsWith("image/"));

        // Screenshots / copied image files
        if (files.length && !html) {
          insertFiles(files);
          return true;
        }

        if (pasteModeRef.current === "plain" && !editorRef.current?.isActive("codeBlock")) {
          const text = data.getData("text/plain");
          if (!text) return false;
          const paragraphs: JSONContent[] = text
            .replace(/\r\n?/g, "\n")
            .split(/\n{2,}/)
            .map((block) => {
              const lines = block.split("\n");
              const content: JSONContent[] = [];
              lines.forEach((line, i) => {
                if (i > 0) content.push({ type: "hardBreak" });
                if (line) content.push({ type: "text", text: line });
              });
              return { type: "paragraph", content };
            });
          editorRef.current?.chain().focus().insertContent(paragraphs).run();
          return true;
        }
        return false;
      },

      handleDrop: (view, event, _slice, moved) => {
        if (moved) return false;
        const files = Array.from(event.dataTransfer?.files || []).filter((f) => f.type.startsWith("image/"));
        if (!files.length) return false;
        event.preventDefault();
        const pos = view.posAtCoords({ left: event.clientX, top: event.clientY })?.pos;
        insertFiles(files, pos);
        return true;
      },

      handleKeyDown: (_view, event) => {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
          event.preventDefault();
          openLinkRef.current();
          return true;
        }
        return false;
      },
    },
    onCreate: ({ editor: ed }) => {
      editorRef.current = ed;
      // Let normalising plugins (table fixing, trailing paragraph) run now, so
      // the first click on a legacy post doesn't look like an edit.
      settlingRef.current = true;
      ed.view.dispatch(ed.state.tr.setMeta("addToHistory", false));
      settlingRef.current = false;
      baselineRef.current = ed.getHTML();
      scanPending(ed);
    },
    onUpdate: ({ editor: ed }) => {
      if (!settlingRef.current) {
        const html = ed.getHTML();
        if (html === baselineRef.current) onChangeRef.current(initialValueRef.current);
        else onChangeRef.current(ed.isEmpty ? "" : html);
      }
      scanPending(ed);
    },
  });

  useEffect(() => {
    editorRef.current = editor;
    if (!editor) return;
    nodeStorage(editor, "image").onEdit = (pos) => {
      const node = editor.state.doc.nodeAt(pos);
      if (node?.type.name === "image") setImageDialog({ mode: "edit", pos, initial: node.attrs as ImageAttrs });
    };
    nodeStorage(editor, "htmlBlock").onEdit = (pos) => {
      const node = editor.state.doc.nodeAt(pos);
      if (node?.type.name === "htmlBlock") setHtmlDialog({ pos, initial: node.attrs.html });
    };
  }, [editor]);

  // Clean up object URLs on unmount.
  useEffect(() => {
    const files = blobFiles.current;
    return () => files.forEach((_f, url) => URL.revokeObjectURL(url));
  }, []);

  /* ---------------- Actions ---------------- */

  const openLink = useCallback(() => {
    const ed = editorRef.current;
    if (!ed) return;
    const attrs = ed.getAttributes("link");
    const { from, to, empty } = ed.state.selection;
    setLinkDialog({
      initial: {
        href: attrs.href || "",
        text: ed.state.doc.textBetween(from, to, " "),
        newTab: attrs.target === "_blank",
        nofollow: /nofollow/.test(attrs.rel || ""),
      },
      askText: empty && !attrs.href,
    });
  }, []);
  const openLinkRef = useRef(openLink);
  openLinkRef.current = openLink;

  const applyLink = (v: LinkValues) => {
    const ed = editorRef.current;
    if (!ed || !linkDialog) return;
    const rel = [v.newTab && "noopener noreferrer", v.nofollow && "nofollow"].filter(Boolean).join(" ") || null;
    const attrs = { href: v.href, target: v.newTab ? "_blank" : null, rel };
    if (linkDialog.askText) {
      ed.chain()
        .focus()
        .insertContent({ type: "text", text: v.text || v.href, marks: [{ type: "link", attrs }] })
        .run();
    } else {
      ed.chain().focus().extendMarkRange("link").setLink(attrs).run();
    }
    setLinkDialog(null);
  };

  const submitImage = (attrs: Partial<ImageAttrs>) => {
    const ed = editorRef.current;
    if (!ed || !imageDialog) return;
    if (imageDialog.mode === "insert") {
      ed.chain().focus().insertContent({ type: "image", attrs }).run();
    } else {
      const { pos } = imageDialog;
      ed.chain()
        .focus()
        .command(({ tr }) => {
          const node = tr.doc.nodeAt(pos);
          if (!node || node.type.name !== "image") return false;
          tr.setNodeMarkup(pos, undefined, { ...node.attrs, ...attrs });
          return true;
        })
        .run();
    }
    setImageDialog(null);
  };

  const submitHtml = (html: string) => {
    const ed = editorRef.current;
    if (!ed || !htmlDialog) return;
    const { pos } = htmlDialog;
    if (pos === null) {
      if (html.trim()) ed.chain().focus().insertContent({ type: "htmlBlock", attrs: { html } }).run();
    } else {
      ed.chain()
        .focus()
        .command(({ tr }) => {
          const node = tr.doc.nodeAt(pos);
          if (!node) return false;
          if (html.trim()) tr.setNodeMarkup(pos, undefined, { html });
          else tr.delete(pos, pos + node.nodeSize);
          return true;
        })
        .run();
    }
    setHtmlDialog(null);
  };

  const toggleSource = async () => {
    const ed = editorRef.current;
    if (!ed) return;
    if (source === null) {
      const html = ed.getHTML();
      let pretty = html;
      try {
        pretty = await formatHtml(html);
      } catch {
        /* malformed HTML: show it unformatted */
      }
      setSource(pretty);
    } else {
      ed.commands.setContent(prepareHtmlForEditor(source), { emitUpdate: true });
      setSource(null);
    }
  };

  // Esc leaves fullscreen (dialogs capture Esc first).
  useEffect(() => {
    if (!fullscreen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setFullscreen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [fullscreen]);

  if (!editor) {
    return <div className="bw-editor bw-editor-loading">Loading editor…</div>;
  }

  return (
    <div className={`bw-editor ${fullscreen ? "is-fullscreen" : ""}`}>
      <Toolbar
        editor={editor}
        pasteMode={pasteMode}
        sourceMode={source !== null}
        fullscreen={fullscreen}
        actions={{
          openLink,
          openImage: () => setImageDialog({ mode: "insert" }),
          openYoutube: () => setYoutubeOpen(true),
          insertHtml: () => setHtmlDialog({ pos: null, initial: "" }),
          toggleSource,
          toggleFullscreen: () => setFullscreen((f) => !f),
          setPasteMode,
        }}
      />

      <div className="bw-editor-body">
        {source !== null ? (
          <div className="bw-source">
            <p className="bw-source-hint">
              Editing raw HTML. Elements the visual editor doesn&apos;t support are kept as &quot;Custom HTML&quot; blocks when you switch back.
            </p>
            <textarea
              value={source}
              spellCheck={false}
              onChange={(e) => {
                setSource(e.target.value);
                onChangeRef.current(e.target.value);
              }}
            />
          </div>
        ) : (
          <EditorContent editor={editor} />
        )}
      </div>

      <StatusBar editor={editor} />

      <ImageBubble editor={editor} onEdit={(pos) => nodeStorage(editor, "image").onEdit?.(pos)} />
      <LinkBubble editor={editor} onEdit={openLink} />

      {imageDialog && (
        <ImageDialog
          mode={imageDialog.mode}
          initial={imageDialog.mode === "edit" ? imageDialog.initial : undefined}
          onClose={() => setImageDialog(null)}
          onSubmit={submitImage}
          notify={notify}
        />
      )}
      {linkDialog && (
        <LinkDialog
          initial={linkDialog.initial}
          askText={linkDialog.askText}
          onClose={() => setLinkDialog(null)}
          onSubmit={applyLink}
          onRemove={
            linkDialog.initial.href
              ? () => {
                  editor.chain().focus().extendMarkRange("link").unsetLink().run();
                  setLinkDialog(null);
                }
              : undefined
          }
        />
      )}
      {htmlDialog && <HtmlDialog initial={htmlDialog.initial} onClose={() => setHtmlDialog(null)} onSubmit={submitHtml} />}
      {youtubeOpen && (
        <YoutubeDialog
          onClose={() => setYoutubeOpen(false)}
          onSubmit={(src) => {
            const ok = editor.chain().focus().setYoutubeVideo({ src }).run();
            if (!ok) notify("error", "That doesn't look like a valid YouTube link");
            setYoutubeOpen(false);
          }}
        />
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Bubble menus                                                         */
/* ------------------------------------------------------------------ */

function ImageBubble({ editor, onEdit }: { editor: Editor; onEdit: (pos: number) => void }) {
  const state = useEditorState({
    editor,
    selector: ({ editor: e }) => ({
      attrs: e.isActive("image") ? (e.getAttributes("image") as ImageAttrs) : null,
      pos: e.state.selection.from,
    }),
  });
  const attrs = state.attrs;

  const update = (patch: Partial<ImageAttrs>) => editor.chain().focus().updateAttributes("image", patch).run();
  const setAlign = (align: ImageAlign) => {
    const patch: Partial<ImageAttrs> = { align };
    if ((align === "left" || align === "right") && (!attrs?.width || attrs.width === "100%")) patch.width = "50%";
    update(patch);
  };

  return (
    <BubbleMenu
      editor={editor}
      pluginKey="imageBubble"
      shouldShow={({ editor: e }) => e.isEditable && e.isActive("image")}
      options={{ placement: "top", offset: 8 }}
      className="bw-bubble"
    >
      {attrs && (
        <>
          <BubbleBtn label="Align left (text wraps)" active={attrs.align === "left"} onClick={() => setAlign("left")}>
            <TextAlignStart size={15} />
          </BubbleBtn>
          <BubbleBtn label="Center" active={attrs.align === "center"} onClick={() => setAlign("center")}>
            <TextAlignCenter size={15} />
          </BubbleBtn>
          <BubbleBtn label="Align right (text wraps)" active={attrs.align === "right"} onClick={() => setAlign("right")}>
            <TextAlignEnd size={15} />
          </BubbleBtn>
          <BubbleBtn label="Full width" active={attrs.width === "100%"} onClick={() => update({ width: "100%", align: null })}>
            <RectangleHorizontal size={15} />
          </BubbleBtn>
          <span className="bw-bubble-sep" />
          {["25%", "50%", "75%"].map((w) => (
            <BubbleBtn key={w} label={`Width ${w}`} active={attrs.width === w} onClick={() => update({ width: w })}>
              <span className="text-[11px]">{w}</span>
            </BubbleBtn>
          ))}
          <BubbleBtn label="Original size" active={!attrs.width} onClick={() => update({ width: null })}>
            <span className="text-[11px]">Auto</span>
          </BubbleBtn>
          <span className="bw-bubble-sep" />
          <BubbleBtn label="Alt text, caption, link, replace" onClick={() => onEdit(state.pos)}>
            {!attrs.alt && <TriangleAlert size={13} className="text-amber-300" />}
            <Pencil size={14} /> <span className="text-xs">Edit</span>
          </BubbleBtn>
          <BubbleBtn label="Replace image" onClick={() => onEdit(state.pos)}>
            <ImageUp size={15} />
          </BubbleBtn>
          <BubbleBtn label="Delete image" onClick={() => editor.chain().focus().deleteSelection().run()}>
            <Trash2 size={15} className="text-red-300" />
          </BubbleBtn>
        </>
      )}
    </BubbleMenu>
  );
}

function LinkBubble({ editor, onEdit }: { editor: Editor; onEdit: () => void }) {
  const href = useEditorState({
    editor,
    selector: ({ editor: e }) => (e.isActive("link") ? (e.getAttributes("link").href as string) : null),
  });

  return (
    <BubbleMenu
      editor={editor}
      pluginKey="linkBubble"
      shouldShow={({ editor: e }) => e.isEditable && e.isActive("link") && !e.isActive("image")}
      options={{ placement: "bottom", offset: 6 }}
      className="bw-bubble"
    >
      {href && (
        <>
          <a href={href} target="_blank" rel="noopener noreferrer" className="max-w-[260px] truncate px-2 text-xs text-[#a7ebf2] underline">
            {href}
          </a>
          <span className="bw-bubble-sep" />
          <BubbleBtn label="Edit link" onClick={onEdit}>
            <Pencil size={14} />
          </BubbleBtn>
          <BubbleBtn label="Open link" onClick={() => window.open(href, "_blank", "noopener")}>
            <ExternalLink size={14} />
          </BubbleBtn>
          <BubbleBtn label="Remove link" onClick={() => editor.chain().focus().extendMarkRange("link").unsetLink().run()}>
            <Unlink size={14} />
          </BubbleBtn>
        </>
      )}
    </BubbleMenu>
  );
}

function BubbleBtn({
  label,
  active,
  onClick,
  children,
}: {
  label: string;
  active?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      className={`bw-tool ${active ? "is-active" : ""}`}
    >
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Status bar: counts + content checks                                  */
/* ------------------------------------------------------------------ */

function StatusBar({ editor }: { editor: Editor }) {
  const s = useEditorState({
    editor,
    selector: ({ editor: e }) => {
      let images = 0;
      let missingAlt = 0;
      let h1 = 0;
      let htmlBlocks = 0;
      let pending = 0;
      let skipped = false;
      let lastLevel = 1;
      e.state.doc.descendants((node) => {
        if (node.type.name === "image") {
          images++;
          if (!node.attrs.alt) missingAlt++;
          if (node.attrs.pending) pending++;
        } else if (node.type.name === "heading") {
          const level = node.attrs.level as number;
          if (level === 1) h1++;
          if (level > lastLevel + 1) skipped = true;
          lastLevel = level;
        } else if (node.type.name === "htmlBlock") htmlBlocks++;
      });
      const storage = (e.storage as unknown as { characterCount: { words: () => number; characters: () => number } }).characterCount;
      return { words: storage.words(), chars: storage.characters(), images, missingAlt, h1, htmlBlocks, pending, skipped };
    },
  });

  const minutes = Math.max(1, Math.round(s.words / 220));

  return (
    <div className="bw-statusbar">
      <span>{s.words.toLocaleString()} words</span>
      <span>{s.chars.toLocaleString()} characters</span>
      <span>~{minutes} min read</span>
      <span>{s.images} images</span>
      {s.pending > 0 && <span className="text-[#54acbf]">Uploading {s.pending} image(s)…</span>}
      <span className="ml-auto flex flex-wrap items-center gap-3">
        {s.missingAlt > 0 && <Warn>{s.missingAlt} image(s) missing alt text</Warn>}
        {s.h1 > 0 && <Warn>Use H2 for sections, the post title is already the H1</Warn>}
        {s.skipped && <Warn>Heading levels skip (e.g. H2 → H4)</Warn>}
        {s.htmlBlocks > 0 && <span className="text-white/50">{s.htmlBlocks} custom HTML block(s)</span>}
      </span>
    </div>
  );
}

function Warn({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-1 text-amber-300">
      <TriangleAlert size={12} /> {children}
    </span>
  );
}

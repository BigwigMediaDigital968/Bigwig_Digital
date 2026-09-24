"use client";

import { useEffect, useMemo, useRef } from "react";
import { NodeViewWrapper, type NodeViewProps } from "@tiptap/react";
import { CodeXml, Pencil, Trash2 } from "lucide-react";
import { scopeCss } from "../../utils/blogHtml";
import { nodeStorage } from "./shared";

const PREVIEW_BASE_CSS = `
  :host { display: block; color: #fff; font-size: 15px; line-height: 1.6; }
  img, video, iframe { max-width: 100%; height: auto; }
  table { border-collapse: collapse; width: 100%; }
  td, th { border: 1px solid rgba(255,255,255,.2); padding: 6px 10px; }
  a { color: #a7ebf2; }
`;

/** Short description of what a raw block contains, for blocks with nothing visible (e.g. only <style>). */
function describe(html: string) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const tags = Array.from(doc.querySelectorAll("style, script, link")).map((el) => `<${el.tagName.toLowerCase()}>`);
  const visible = (doc.body.textContent || "").trim() || doc.body.querySelector("img, svg, iframe, input, button, video");
  return { invisible: !visible, tags: Array.from(new Set(tags)) };
}

export default function HtmlBlockView({ node, editor, getPos, selected, deleteNode }: NodeViewProps) {
  const html: string = node.attrs.html || "";
  const hostRef = useRef<HTMLDivElement>(null);
  const info = useMemo(() => describe(html), [html]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const root = host.shadowRoot ?? host.attachShadow({ mode: "open" });
    root.innerHTML = `<style>${PREVIEW_BASE_CSS}</style>${html}`;
    // Styles written for the whole page (body, :root) are mapped onto the preview host.
    root.querySelectorAll("style").forEach((style, i) => {
      if (i > 0) style.textContent = scopeCss(style.textContent || "", ":host");
    });
    root.querySelectorAll("script").forEach((s) => s.remove());
  }, [html]);

  const edit = () => {
    const pos = typeof getPos === "function" ? getPos() : null;
    if (typeof pos === "number") nodeStorage(editor, "htmlBlock").onEdit?.(pos);
  };

  return (
    <NodeViewWrapper className={`bw-html-block ${selected ? "is-selected" : ""}`} data-drag-handle>
      <div className="bw-html-block-bar" contentEditable={false}>
        <span className="flex items-center gap-1.5">
          <CodeXml size={14} /> Custom HTML
          {info.tags.length > 0 && <span className="opacity-60">· {info.tags.join(" ")}</span>}
        </span>
        <span className="flex items-center gap-1">
          <button type="button" onClick={edit} title="Edit HTML">
            <Pencil size={13} /> Edit
          </button>
          <button type="button" onClick={() => deleteNode()} title="Remove block">
            <Trash2 size={13} />
          </button>
        </span>
      </div>
      {info.invisible ? (
        <pre className="bw-html-block-code" onDoubleClick={edit}>
          {html.trim().slice(0, 400)}
          {html.length > 400 ? "…" : ""}
        </pre>
      ) : (
        <div ref={hostRef} className="bw-html-block-preview" onDoubleClick={edit} />
      )}
    </NodeViewWrapper>
  );
}

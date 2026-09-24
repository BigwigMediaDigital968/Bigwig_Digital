"use client";

import { useRef, useState } from "react";
import { NodeViewWrapper, type NodeViewProps } from "@tiptap/react";
import { LoaderCircle, Link2, TriangleAlert } from "lucide-react";
import { imageBoxCss, nodeStorage, type ImageAttrs } from "./shared";

const toReactStyle = (css: Record<string, string>) =>
  Object.fromEntries(
    Object.entries(css).map(([k, v]) => [k.replace(/-([a-z])/g, (_, c) => c.toUpperCase()), v]),
  ) as React.CSSProperties;

export default function ImageNodeView({ node, selected, editor, getPos, updateAttributes }: NodeViewProps) {
  const attrs = node.attrs as ImageAttrs;
  const boxRef = useRef<HTMLDivElement>(null);
  const liveWidth = useRef<string | null>(null);
  const [dragWidth, setDragWidth] = useState<string | null>(null);
  const [broken, setBroken] = useState(false);

  const width = dragWidth ?? attrs.width;
  const style = toReactStyle(imageBoxCss(width, attrs.align));

  const startResize = (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const box = boxRef.current;
    const content = editor.view.dom as HTMLElement;
    if (!box) return;

    const cs = getComputedStyle(content);
    const available = content.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    const startX = e.clientX;
    const startW = box.getBoundingClientRect().width;
    const direction = attrs.align === "right" ? -1 : 1;

    const onMove = (ev: PointerEvent) => {
      const px = Math.max(60, startW + (ev.clientX - startX) * direction);
      const pct = Math.min(100, Math.max(10, Math.round((px / available) * 100)));
      liveWidth.current = `${pct}%`;
      setDragWidth(liveWidth.current);
    };
    const onUp = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      if (liveWidth.current) updateAttributes({ width: liveWidth.current });
      liveWidth.current = null;
      setDragWidth(null);
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  };

  const openEditor = () => {
    const pos = typeof getPos === "function" ? getPos() : null;
    if (typeof pos === "number") nodeStorage(editor, "image").onEdit?.(pos);
  };

  return (
    <NodeViewWrapper
      as="div"
      className={`bw-image-view ${selected ? "is-selected" : ""}`}
      data-align={attrs.align || undefined}
      style={style}
      data-drag-handle
    >
      <div ref={boxRef} className="bw-image-inner" onDoubleClick={openEditor}>
        {broken ? (
          <div className="bw-image-broken">
            <TriangleAlert size={18} /> Image could not be loaded
            <span className="truncate">{attrs.src}</span>
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={attrs.src} alt={attrs.alt} title={attrs.title || undefined} draggable={false} onError={() => setBroken(true)} />
        )}

        {attrs.pending && (
          <div className="bw-image-overlay">
            <LoaderCircle className="animate-spin" size={22} />
            <span>Uploading to Cloudinary…</span>
          </div>
        )}

        <div className="bw-image-badges">
          {!attrs.alt && <span className="bw-badge warn">No alt text</span>}
          {attrs.href && (
            <span className="bw-badge">
              <Link2 size={12} /> Linked
            </span>
          )}
          {dragWidth && <span className="bw-badge">{dragWidth}</span>}
        </div>

        {selected && editor.isEditable && (
          <span className="bw-resize-handle" onPointerDown={startResize} title="Drag to resize" />
        )}
      </div>
      {attrs.caption && <div className="bw-image-caption">{attrs.caption}</div>}
    </NodeViewWrapper>
  );
}

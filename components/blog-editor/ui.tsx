"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, TriangleAlert, X } from "lucide-react";
import { isLowContrastOnSite } from "../../utils/blogHtml";

/* Buttons keep the editor selection: mousedown is prevented so focus stays in the editor. */

export function ToolButton({
  icon,
  label,
  active,
  disabled,
  onClick,
  children,
}: {
  icon?: ReactNode;
  label: string;
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
  children?: ReactNode;
}) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      aria-pressed={active}
      disabled={disabled}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      className={`bw-tool ${active ? "is-active" : ""}`}
    >
      {icon}
      {children}
    </button>
  );
}

export function Divider() {
  return <span className="bw-tool-divider" aria-hidden />;
}

export function Dropdown({
  label,
  trigger,
  children,
  width = 220,
  align = "left",
  active,
}: {
  label: string;
  trigger: ReactNode;
  children: (close: () => void) => ReactNode;
  width?: number;
  align?: "left" | "right";
  active?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        title={label}
        aria-label={label}
        aria-expanded={open}
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => setOpen((o) => !o)}
        className={`bw-tool ${open || active ? "is-active" : ""}`}
      >
        {trigger}
        <ChevronDown size={12} className="opacity-60" />
      </button>
      {open && (
        <div
          className="bw-popover"
          style={{ width, [align]: 0 }}
          onMouseDown={(e) => {
            // keep editor selection unless the user clicks into an input
            if (!(e.target as HTMLElement).closest("input, textarea, select")) e.preventDefault();
          }}
        >
          {children(() => setOpen(false))}
        </div>
      )}
    </div>
  );
}

export function MenuItem({
  onClick,
  active,
  children,
}: {
  onClick: () => void;
  active?: boolean;
  children: ReactNode;
}) {
  return (
    <button type="button" onClick={onClick} className={`bw-menu-item ${active ? "is-active" : ""}`}>
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------ */

/** Colours chosen to stay readable on the site's navy background. */
export const TEXT_COLORS = [
  "#ffffff",
  "#cbd5e1",
  "#a7ebf2",
  "#54acbf",
  "#93c5fd",
  "#a78bfa",
  "#f472b6",
  "#f87171",
  "#fb923c",
  "#facc15",
  "#4ade80",
  "#2dd4bf",
];

/** Highlights render with dark text (see .blog-content mark). */
export const HIGHLIGHT_COLORS = ["#fef08a", "#bbf7d0", "#a5f3fc", "#bfdbfe", "#fbcfe8", "#fed7aa", "#e9d5ff", "#fecaca"];

/** Table cell backgrounds that keep white text readable. */
export const CELL_COLORS = [
  "rgba(255,255,255,0.06)",
  "rgba(255,255,255,0.12)",
  "#023859",
  "#26658c",
  "#1e3a8a",
  "#134e4a",
  "#4c1d95",
  "#7f1d1d",
];

export function ColorPalette({
  colors,
  current,
  onPick,
  onClear,
  clearLabel = "Default",
  checkContrast,
}: {
  colors: string[];
  current?: string | null;
  onPick: (color: string) => void;
  onClear: () => void;
  clearLabel?: string;
  checkContrast?: boolean;
}) {
  const [custom, setCustom] = useState(current && current.startsWith("#") ? current : "#ffffff");
  const lowContrast = checkContrast && isLowContrastOnSite(custom);

  return (
    <div className="p-2">
      <div className="grid grid-cols-6 gap-1.5">
        {colors.map((c) => (
          <button
            key={c}
            type="button"
            title={c}
            onClick={() => onPick(c)}
            className={`h-7 w-7 rounded-md border ${current === c ? "border-white ring-2 ring-[#54acbf]" : "border-white/20"}`}
            style={{ background: c }}
          />
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2">
        <input
          type="color"
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
          className="h-8 w-10 cursor-pointer rounded border border-white/20 bg-transparent"
          aria-label="Custom colour"
        />
        <input
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
          className="bw-input h-8 flex-1 font-mono text-xs"
          aria-label="Hex colour"
        />
        <button type="button" className="bw-btn-sm" onClick={() => onPick(custom)}>
          Apply
        </button>
      </div>
      {lowContrast && (
        <p className="mt-2 flex items-start gap-1.5 text-[11px] leading-snug text-amber-300">
          <TriangleAlert size={13} className="mt-px shrink-0" />
          This colour is hard to read on the site&apos;s dark background.
        </p>
      )}
      <button type="button" onClick={onClear} className="bw-menu-item mt-2 justify-center border border-white/10">
        {clearLabel}
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export function Modal({
  title,
  onClose,
  children,
  footer,
  width = 560,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
  footer?: ReactNode;
  width?: number;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
      }
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [onClose]);

  return createPortal(
    <div className="bw-modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="bw-modal" style={{ maxWidth: width }} role="dialog" aria-modal="true" aria-label={title}>
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
          <h3 className="text-base font-semibold text-white">{title}</h3>
          <button type="button" onClick={onClose} className="rounded p-1 text-white/60 hover:bg-white/10 hover:text-white" aria-label="Close">
            <X size={18} />
          </button>
        </div>
        <div className="max-h-[70vh] overflow-y-auto px-5 py-4">{children}</div>
        {footer && <div className="flex justify-end gap-2 border-t border-white/10 px-5 py-3">{footer}</div>}
      </div>
    </div>,
    document.body,
  );
}

export function Field({ label, hint, children }: { label: string; hint?: ReactNode; children: ReactNode }) {
  return (
    <label className="mb-3 block">
      <span className="mb-1 block text-xs font-medium uppercase tracking-wide text-white/60">{label}</span>
      {children}
      {hint && <span className="mt-1 block text-[11px] text-white/45">{hint}</span>}
    </label>
  );
}

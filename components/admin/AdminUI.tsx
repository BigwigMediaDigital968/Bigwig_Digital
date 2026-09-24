"use client";

import type { ReactNode } from "react";
import { ChevronLeft, ChevronRight, Inbox } from "lucide-react";

/* Shared building blocks for the admin panel, matching the blog editor's
   dark navy look. Controls (bw-input, bw-btn-*) come from blog-editor/editor.css,
   which AdminLayout loads for every admin page. */

export function PageHeader({
  title,
  description,
  actions,
}: {
  title: string;
  description?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div className="min-w-0">
        <h1 className="text-2xl font-bold tracking-tight text-white">{title}</h1>
        {description && <p className="mt-1 text-sm text-white/50">{description}</p>}
      </div>
      {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
    </div>
  );
}

export function Panel({
  title,
  description,
  actions,
  children,
  className = "",
  bodyClassName = "p-5",
}: {
  title?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <section className={`overflow-hidden rounded-xl border border-white/10 bg-[#0d1726] ${className}`}>
      {(title || actions) && (
        <header className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
          <div>
            {title && <h2 className="text-sm font-semibold text-white">{title}</h2>}
            {description && <p className="mt-0.5 text-xs text-white/45">{description}</p>}
          </div>
          {actions}
        </header>
      )}
      <div className={bodyClassName}>{children}</div>
    </section>
  );
}

export function StatCard({
  label,
  value,
  icon,
  hint,
}: {
  label: string;
  value: ReactNode;
  icon: ReactNode;
  hint?: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0d1726] p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-white/60">{label}</p>
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#26658c]/35 text-[#a7ebf2]">{icon}</span>
      </div>
      <p className="mt-3 text-3xl font-bold tabular-nums text-white">{value}</p>
      {hint && <p className="mt-1 text-xs text-white/45">{hint}</p>}
    </div>
  );
}

export function EmptyState({ title, description, action }: { title: string; description?: ReactNode; action?: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-white/15 px-6 py-16 text-center">
      <Inbox className="text-white/30" size={30} />
      <p className="font-medium text-white/80">{title}</p>
      {description && <p className="max-w-sm text-sm text-white/45">{description}</p>}
      {action && <div className="mt-3">{action}</div>}
    </div>
  );
}

const BADGE_TONES = {
  green: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  amber: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  red: "bg-red-500/15 text-red-300 border-red-500/30",
  blue: "bg-[#26658c]/30 text-[#a7ebf2] border-[#54acbf]/30",
  gray: "bg-white/10 text-white/65 border-white/15",
};

export function Badge({ tone = "gray", children }: { tone?: keyof typeof BADGE_TONES; children: ReactNode }) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${BADGE_TONES[tone]}`}>
      {children}
    </span>
  );
}

/** Row action button (icon + accessible label). */
export function IconAction({
  label,
  onClick,
  danger,
  children,
}: {
  label: string;
  onClick: () => void;
  danger?: boolean;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={label}
      aria-label={label}
      className={`rounded-md p-2 transition ${
        danger ? "text-red-300/80 hover:bg-red-500/10 hover:text-red-300" : "text-white/60 hover:bg-white/10 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

/** Shared table classes. */
export const table = {
  wrap: "overflow-x-auto",
  table: "w-full text-sm",
  thead: "bg-white/[0.03] text-left text-xs uppercase tracking-wide text-white/50",
  th: "px-4 py-3 font-medium whitespace-nowrap",
  tbody: "divide-y divide-white/[0.06]",
  tr: "transition hover:bg-white/[0.03]",
  td: "px-4 py-3 text-white/80",
};

/** Compact numbered pagination: 1 … 4 5 6 … 12 */
export function Pagination({
  page,
  totalPages,
  onChange,
}: {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}) {
  if (totalPages <= 1) return null;
  const pages: (number | "…")[] = [];
  for (let p = 1; p <= totalPages; p++) {
    if (p === 1 || p === totalPages || Math.abs(p - page) <= 1) pages.push(p);
    else if (pages[pages.length - 1] !== "…") pages.push("…");
  }
  const btn = "flex h-8 min-w-8 items-center justify-center rounded-md px-2 text-sm transition";
  return (
    <nav className="flex items-center justify-end gap-1" aria-label="Pagination">
      <button
        type="button"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className={`${btn} text-white/70 hover:bg-white/10 disabled:opacity-35`}
        aria-label="Previous page"
      >
        <ChevronLeft size={16} />
      </button>
      {pages.map((p, i) =>
        p === "…" ? (
          <span key={`gap-${i}`} className="px-1 text-white/40">
            …
          </span>
        ) : (
          <button
            key={p}
            type="button"
            onClick={() => onChange(p)}
            aria-current={p === page ? "page" : undefined}
            className={`${btn} ${p === page ? "bg-[#26658c] text-white" : "text-white/70 hover:bg-white/10"}`}
          >
            {p}
          </button>
        ),
      )}
      <button
        type="button"
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
        className={`${btn} text-white/70 hover:bg-white/10 disabled:opacity-35`}
        aria-label="Next page"
      >
        <ChevronRight size={16} />
      </button>
    </nav>
  );
}

/** Labelled form field for admin forms. */
export function FormField({ label, children, className = "" }: { label: string; children: ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-xs font-medium text-white/60">{label}</span>
      {children}
    </label>
  );
}

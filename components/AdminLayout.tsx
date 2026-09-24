"use client";

import { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import {
  Briefcase,
  ClipboardList,
  ExternalLink,
  LayoutDashboard,
  Menu,
  NotebookPen,
  Tag,
  Users,
  X,
} from "lucide-react";
// Shared admin controls (bw-input, bw-btn-*, modals) for every admin page.
import "./blog-editor/editor.css";

interface AdminLayoutProps {
  children: ReactNode;
}

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", to: "/admin" },
  { icon: NotebookPen, label: "Blogs", to: "/admin/blogs" },
  { icon: Users, label: "Leads", to: "/admin/leads" },
  { icon: Briefcase, label: "Job Applications", to: "/admin/job-application" },
  { icon: ClipboardList, label: "Job Vacancies", to: "/admin/jobs" },
  { icon: Tag, label: "Offers", to: "/admin/offermanagement" },
];

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sub-pages (e.g. /admin/blogs/new) keep their section highlighted.
  const isActive = (to: string) => pathname === to || (to !== "/admin" && pathname.startsWith(`${to}/`));

  // Redirect if not logged in
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("login") === "true";
    if (!isLoggedIn) router.push("/login");
  }, [router]);

  const nav = (onNavigate?: () => void) => (
    <nav className="flex flex-col gap-1">
      <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-white/35">Manage</p>
      {navItems.map(({ icon: Icon, label, to }) => {
        const active = isActive(to);
        return (
          <Link
            key={to}
            href={to}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={`group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
              active ? "bg-[#26658c]/35 font-medium text-white" : "text-white/65 hover:bg-white/[0.06] hover:text-white"
            }`}
          >
            {active && <span className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r bg-[#54acbf]" />}
            <Icon size={18} className={active ? "text-[#a7ebf2]" : "text-white/50 group-hover:text-white/80"} />
            {label}
          </Link>
        );
      })}
    </nav>
  );

  const footer = (
    <Link
      href="/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/55 transition hover:bg-white/[0.06] hover:text-white"
    >
      <ExternalLink size={16} /> View website
    </Link>
  );

  return (
    <div className="relative flex h-screen flex-col overflow-hidden bg-[#0b121a] font-raleway text-white lg:flex-row">
      {/* Mobile top bar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-[#0d1726] px-4 py-3 lg:hidden">
        <Link href="/admin">
          <Image src="/Bigwig_logo.png" alt="BigWig Media Digital" width={791} height={909} className="h-6 w-auto" />
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-2 text-white/80 hover:bg-white/10"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute inset-y-0 left-0 flex w-72 flex-col border-r border-white/10 bg-[#0d1726] p-4">
            <div className="mb-6 flex items-center justify-between">
              <Image src="/Bigwig_logo.png" alt="BigWig Media Digital" width={791} height={909} className="h-12 w-auto" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg p-2 text-white/80 hover:bg-white/10"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">{nav(() => setMobileMenuOpen(false))}</div>
            <div className="border-t border-white/10 pt-3">{footer}</div>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <aside className="fixed hidden h-full w-64 flex-col border-r border-white/10 bg-[#0d1726] lg:flex">
        <Link href="/admin" className="flex items-baseline gap-2 justify-center border-b border-white/10 px-4 py-4">
          <Image src="/Bigwig_logo_icon.png" alt="BigWig Media Digital" width={791} height={909} className="h-16 w-auto" priority />
          <Image src="/Bigwig_brandname.png" alt="BigWig Media Digital" width={791} height={909} className="h-11 w-auto" priority />
        </Link>
        <div className="flex-1 overflow-y-auto p-3 pt-5">{nav()}</div>
        <div className="border-t border-white/10 p-3">{footer}</div>
      </aside>

      {/* Main Content */}
      <main className="h-full flex-1 overflow-y-auto p-4 pb-20 sm:p-6 lg:ml-64 lg:pb-6">{children}</main>
    </div>
  );
};

export default AdminLayout;

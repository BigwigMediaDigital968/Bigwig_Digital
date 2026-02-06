"use client";

import { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { Briefcase, FileText, Gauge, NotebookPen, User } from "lucide-react";
import logo from "../Assets/bigwig digital logo (11).png";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { icon: <Gauge />, label: "Dashboard", to: "/admin" },
    { icon: <NotebookPen />, label: "Blogs", to: "/admin/blogs" },
    { icon: <User />, label: "Leads", to: "/admin/leads" },
    {
      icon: <Briefcase />,
      label: "Job Application",
      to: "/admin/job-application",
    },
    { icon: <FileText />, label: "Job Vacancy", to: "/admin/jobs" },
    {icon:<FileText />, label:"Offer",to:"/admin/offermanagement"}
  ];

  // Redirect if not logged in
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("login") === "true";
    if (!isLoggedIn) router.push("/login");
  }, [router]);

  return (
    <div className="h-screen flex flex-col lg:flex-row overflow-hidden bg-black text-white font-raleway relative">
      {/* Mobile Top Nav */}
      <div className="lg:hidden bg-[#111] flex items-center justify-between px-4 py-3 shadow-md">
        <Link href="/">
          <Image src={logo} alt="logo" className="h-10 w-auto" />
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white text-xl"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-[#111] z-50 p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <Image src={logo} alt="logo" className="h-12" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-2xl"
            >
              <FaTimes />
            </button>
          </div>
          <nav className="flex flex-col gap-4 text-base">
            {navItems.map(({ icon, label, to }) => (
              <Link
                key={to}
                href={to}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded ${
                  pathname === to
                    ? "bg-[var(--primary-color)] text-black font-semibold"
                    : "hover:bg-[var(--primary-color)] hover:text-black"
                }`}
              >
                {icon} {label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Sidebar */}
      <aside className="hidden lg:flex lg:flex-col w-64 bg-[#111] shadow-md p-4 space-y-4 fixed h-full">
        <Link href="/">
          <Image src={logo} alt="logo" className="h-20 w-auto mx-auto mb-2" />
        </Link>
        <nav className="flex flex-col gap-2 text-sm overflow-y-auto">
          {navItems.map(({ icon, label, to }) => (
            <Link
              key={to}
              href={to}
              className={`flex items-center gap-2 px-3 py-2 rounded whitespace-nowrap ${
                pathname === to
                  ? "bg-[var(--primary-color)] text-black font-semibold"
                  : "hover:bg-[var(--primary-color)] hover:text-black"
              }`}
            >
              {icon} {label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 overflow-y-auto p-4 sm:p-6 pb-20 lg:pb-6 h-full">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;

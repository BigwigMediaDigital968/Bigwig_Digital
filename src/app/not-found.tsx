"use client";

import Link from "next/link";
import { Home, ArrowRight, Phone } from "lucide-react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const quickLinks = [
  { label: "Our Services", href: "/services" },
  {
    label: "Website Development",
    href: "services/website-development-company-in-delhi",
  },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

export default function NotFound() {
  return (
    <>
      <Nav />

      <main
        className="relative min-h-screen overflow-hidden flex items-center justify-center py-24"
        style={{ backgroundColor: "var(--color1)" }}
      >
        {/* ── Background grid ── */}
        <div className="absolute inset-0 pointer-events-none select-none">
          {/* Horizontal lines */}
          {[15, 35, 55, 75, 90].map((y) => (
            <div
              key={y}
              className="absolute w-full h-px"
              style={{
                top: `${y}%`,
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(84,172,191,0.12) 30%, rgba(84,172,191,0.12) 70%, transparent 100%)",
              }}
            />
          ))}

          {/* Vertical lines */}
          {[10, 25, 50, 75, 90].map((x) => (
            <div
              key={x}
              className="absolute h-full w-px"
              style={{
                left: `${x}%`,
                background:
                  "linear-gradient(180deg, transparent 0%, rgba(84,172,191,0.12) 30%, rgba(84,172,191,0.12) 70%, transparent 100%)",
              }}
            />
          ))}

          {/* Watermark */}
          <div
            className="absolute inset-0 flex items-center justify-center font-bold"
            style={{
              fontSize: "clamp(180px, 35vw, 420px)",
              color: "rgba(78,108,186,0.05)",
              letterSpacing: "-0.05em",
            }}
          >
            404
          </div>
        </div>

        {/* ── Main Content ── */}
        <div className="relative z-10 w-11/12 md:w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Section */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-10 h-px"
                style={{ backgroundColor: "var(--primary-color)" }}
              />
              <p
                className="text-xs uppercase tracking-[0.4em] font-semibold"
                style={{ color: "var(--primary-color)" }}
              >
                Page Not Found
              </p>
            </div>

            {/* 404 */}
            <div
              className="font-bold leading-none mb-4"
              style={{
                fontSize: "clamp(80px, 14vw, 160px)",
                color: "transparent",
                WebkitTextStroke: "2px var(--primary-color)",
              }}
            >
              404
            </div>

            {/* Heading */}
            <h1
              className="font-bold leading-tight mb-5"
              style={{
                fontSize: "clamp(24px, 3.5vw, 40px)",
                color: "#fff",
              }}
            >
              Oops! This Page Doesn’t Exist
            </h1>

            {/* Description */}
            <p
              className="text-[15px] leading-relaxed mb-8 max-w-md"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Looks like the page you're trying to access doesn’t exist or has
              been moved. Let’s get you back to growing your digital presence.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105"
                style={{
                  backgroundColor: "var(--primary-color)",
                  color: "#fff",
                }}
              >
                <Home size={16} />
                Back to Home
              </Link>

              <a
                href="tel:+919685892813"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border transition-all hover:bg-white/5"
                style={{
                  borderColor: "var(--secondary-color)",
                  color: "var(--secondary-color)",
                }}
              >
                <Phone size={16} />
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <div
              className="rounded-3xl overflow-hidden"
              style={{
                border: "1px solid rgba(78,108,186,0.3)",
              }}
            >
              {/* Header */}
              <div
                className="px-8 py-6"
                style={{
                  backgroundColor: "rgba(78,108,186,0.1)",
                  borderBottom: "1px solid rgba(78,108,186,0.2)",
                }}
              >
                <p
                  className="text-xs uppercase tracking-[0.3em]"
                  style={{ color: "var(--primary-color)" }}
                >
                  Quick Navigation
                </p>
                <p className="text-white font-semibold text-lg">
                  Explore Bigwig Media
                </p>
              </div>

              {/* Links */}
              <div
                className="divide-y"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                }}
              >
                {quickLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center justify-between px-8 py-5 group transition-all"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(78,108,186,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    <span
                      className="text-[15px]"
                      style={{ color: "rgba(255,255,255,0.75)" }}
                    >
                      {label}
                    </span>
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                      style={{ color: "var(--primary-color)" }}
                    />
                  </Link>
                ))}
              </div>

              {/* Contact strip */}
              <div
                className="px-8 py-5 flex items-center justify-between"
                style={{
                  backgroundColor: "var(--color2)",
                }}
              >
                <div>
                  <p
                    className="text-xs uppercase tracking-widest"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    Need Help?
                  </p>
                  <p className="text-white text-sm font-semibold">
                    +91 96858 92813
                  </p>
                </div>
                <a
                  href="tel:+919685892813"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold"
                  style={{
                    backgroundColor: "var(--secondary-color)",
                    color: "#fff",
                  }}
                >
                  <Phone size={13} />
                  Call Now
                </a>
              </div>
            </div>

            {/* Footer note */}
            <p
              className="text-center mt-6 text-xs"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              Bigwig Media Digital · Digital Growth Agency
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

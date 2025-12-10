// components/Nav.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../Assets/Bigwig_logo__final.png";
import {
  Search,
  Globe,
  Mail,
  PenTool,
  ThumbsUp,
  Megaphone,
  MapPin,
  Phone,
  TrendingUp,
  FileText,
  Monitor,
  Link2,
  ShieldCheck,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faXTwitter,
  faLinkedin,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { FaEnvelope } from "react-icons/fa";
import PopupForm from "./PopupForm";
import Button from "./Button";
import ButtonFill from "./Button";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

type Service = {
  title: string;
  slug: string;
  desc?: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const services: Service[] = [
  {
    title: "Website Development",
    slug: "/services/website-design-development",
    icon: Monitor,
  },
  {
    title: "Search Engine Optimization",
    slug: "/services/search-engine-optimization",
    icon: Search,
  },
  {
    title: "Social Media Optimization",
    slug: "/services/social-media-optimization",
    icon: ThumbsUp,
  },
  {
    title: "Social Media Marketing",
    slug: "/services/social-media-marketing",
    icon: Globe,
  },
  {
    title: "Performance Marketing",
    slug: "/services/performance-marketing",
    icon: TrendingUp,
  },
  {
    title: "Online Reputation Management",
    slug: "/services/online-reputation-management",
    icon: ShieldCheck,
  },
  {
    title: "Graphic designing & Video Editing",
    slug: "/services/graphic-designing",
    icon: PenTool,
  },
  { title: "Email Marketing", slug: "/services/email-marketing", icon: Mail },
  {
    title: "Affiliate Marketing",
    slug: "/services/affiliate-marketing",
    icon: Link2,
  },
  {
    title: "Influencer Marketing",
    slug: "/services/influencer-marketing",
    icon: Megaphone,
  },

  {
    title: "Content Marketing",
    slug: "/services/content-marketing",
    icon: FileText,
  },
];

const socialLinks = [
  {
    icon: faFacebookF,
    href: "https://www.facebook.com/profile.php?id=61575340735142",
    color: "#1877F2",
  },
  {
    icon: faInstagram,
    href: "https://www.instagram.com/bigwigmediadigital/",
    color: "#E1306C",
  },
  {
    icon: faYoutube,
    href: "https://www.youtube.com/@BigwigMediaDigital",
    color: "#FF0000",
  },
  {
    icon: faXTwitter,
    href: "https://x.com/bigwig_digital",
    color: "#000000",
  },
  {
    icon: faLinkedin,
    href: "https://www.linkedin.com/company/106698073/admin/dashboard/",
    color: "#0077B5",
  },
  {
    icon: faPinterest,
    href: "https://in.pinterest.com/bigwigmediadigital/",
    color: "#E60023",
  },
];

const Nav: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const splitIntoColumns = (items: Service[], columns = 3) => {
    const per = Math.ceil(items.length / columns);
    return Array.from({ length: columns }, (_, i) =>
      items.slice(i * per, i * per + per)
    );
  };
  const cols = splitIntoColumns(services, 3);

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-gradient-to-b from-[#011c40] via-[#023859]  to-[#26658c]">
      {/* Top Info Bar */}
      {/* <div className="bg-[#011c40] shadow text-white text-sm px-4 md:px-12 py-2 flex justify-between items-center flex-wrap gap-2">
        <div className="hidden lg:flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[var(--primary-color)]" />
          <span>Plot # 2, Sanjay Nagar, Gulabi Bagh, Delhi 110007, India</span>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <a
            href="tel:+919685892813"
            className="hidden md:flex items-center gap-1"
          >
            <Phone className="w-4 h-4 hover:text-[var(--primary-color)]" />
            <span>+91 9685892813</span>
          </a>
          <a
            href="mailto:support@bigwigmediadigital.com"
            className="w-7 h-7 flex items-center justify-center border border-gray-500 rounded-full transition-transform duration-500 hover:rotate-[360deg]"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--primary-color)";
              const icon = e.currentTarget.querySelector("svg");
              if (icon) icon.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              const icon = e.currentTarget.querySelector("svg");
              if (icon) icon.style.color = "var(--primary-color)";
            }}
          >
            <FaEnvelope
              className="text-md"
              style={{ color: "var(--primary-color)" }}
            />
          </a>

          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 flex items-center justify-center border border-gray-500 rounded-full transition-all duration-300 hover:rotate-[360deg]"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = social.color;
                const icon = e.currentTarget.querySelector("svg");
                if (icon) icon.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                const icon = e.currentTarget.querySelector("svg");
                if (icon) icon.style.color = social.color;
              }}
            >
              <FontAwesomeIcon
                icon={social.icon}
                className="text-sm"
                style={{ color: social.color }}
              />
            </a>
          ))}
        </div>
      </div>
      <hr className="border-0 h-[1px] bg-[#A7EBF2]" /> */}

      {/* Main Nav */}
      <div className=" px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 items-center  ">
          {/* Logo */}
          <div className="flex items-center col-span-1">
            <Link href="/">
              <Image
                src={logo}
                alt="Bigwig Digital"
                className="w-16 md:w-24"
                draggable={false}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex justify-center whitespace-nowrap col-span-3">
            <ul className="flex items-center gap-8 font-medium text-white">
              <li
                className="relative flex items-center gap-1"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href="/services"
                  className="px-2 py-10 flex items-center gap-1 hover:text-[#A7EBF2] font-medium"
                >
                  Services
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      servicesOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </Link>

                {/* Mega dropdown */}
                <div
                  role="menu"
                  aria-hidden={!servicesOpen}
                  className={`absolute  top-full w-[900px] bg-[#023859] text-white  shadow-xl transition-all duration-300 ${
                    servicesOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  <div className="grid grid-cols-3 gap-6 p-4">
                    {cols.map((col, i) => (
                      <div key={i} className="space-y-3">
                        {col.map((svc) => {
                          const Icon = svc.icon;
                          return (
                            <Link
                              key={svc.title}
                              href={svc.slug}
                              className="flex items-start gap-3 p-2 rounded"
                            >
                              <Icon className="w-5 h-5 mt-1 text-[#A7EBF2]" />
                              <div className=" text-sm">{svc.title}</div>
                            </Link>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </li>

              <li>
                <Link
                  href="/our-works"
                  className="px-2 py-2 hover:text-[#A7EBF2]"
                >
                  Our Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="px-2 py-2 hover:text-[#A7EBF2]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="px-2 py-2 hover:text-[#A7EBF2]">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/clients"
                  className="px-2 py-2 hover:text-[#A7EBF2]"
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="px-2 py-2 hover:text-[#A7EBF2]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right: get in touch + mobile menu */}
          <div className="flex items-center justify-end gap-3 col-span-1">
            <Button
              onClick={() => setIsPopupOpen(true)}
              text="Get in Touch"
              className="hidden md:block"
            />

            {/* Desktop Sidebar Button */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="hidden md:inline-flex p-2 text-white hover:bg-[#A7EBF2] rounded cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 rounded text-white hover:bg-[#A7EBF2]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar ( mobile) */}
      <div
        className={`lg:hidden fixed inset-0 z-50 flex transition-transform duration-500 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-[011c40]/50 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />

        <aside className="relative ml-auto w-80 bg-[#023859] text-white h-full p-6 shadow-xl flex flex-col transition-transform duration-500">
          <div className="flex items-center justify-between mb-6">
            <Link href="/">
              <Image src={logo} alt="logo" className="w-28" />
            </Link>
            <button onClick={() => setSidebarOpen(false)} className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Menu */}
          <nav className="flex-1 space-y-3">
            {[
              { title: "Services", slug: "/services" },
              { title: "Our Works", slug: "/our-works" },
              { title: "About", slug: "/about" },
              { title: "Blog", slug: "/blogs" },
              { title: "Clients", slug: "/clients" },
              { title: "Contact Us", slug: "/contact" },
            ].map((link) => (
              <Link
                key={link.title}
                href={link.slug}
                className="block px-3 py-2 rounded hover:bg-white/10"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="mt-auto">
            <h4 className="text-sm text-gray-400 mb-2">Contact us</h4>
            <div className="flex flex-col gap-2 mb-4 text-gray-300 text-sm">
              <a
                href="mailto:support@bigwigmediadigital.com"
                className="flex items-center gap-2 hover:text-white"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                support@bigwigmediadigital.com
              </a>

              <a
                href="tel:+919685892813"
                className="flex items-center gap-2 hover:text-white"
              >
                <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                +91 78279 77879
              </a>

              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4" />
                Plot # 2, Sanjay Nagar, Gulabi Bagh, Delhi 110007, India
              </div>
            </div>
            <h4 className="text-sm text-gray-400 mb-2">Follow us</h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 flex items-center justify-center border rounded"
                >
                  <FontAwesomeIcon icon={s.icon} />
                </a>
              ))}
            </div>

            <ButtonFill
              onClick={() => setIsPopupOpen(true)}
              className="block w-full "
              text="Get in Touch"
            />
          </div>
        </aside>
      </div>
      {/* Sidebar ( desktop) */}
      <div
        className={`hidden fixed inset-0 z-50 lg:flex transition-transform duration-500 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-[#011c40]/50 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />

        <aside className="relative ml-auto max-w-xl bg-[#023859] text-white h-full p-6 shadow-xl flex flex-col transition-transform duration-500">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <Link href="/">
              <Image src={logo} alt="logo" className="w-40" />
            </Link>
            <button onClick={() => setSidebarOpen(false)} className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* About Us */}
          <div className="flex-1">
            <h4 className="text-xl font-semibold mb-2 text-[#a7ebf2]">
              About Us
            </h4>
            <p className="text-gray-200 text-base mb-4">
              Based in New Delhi, we are a dynamic digital media agency
              delivering impactful experiences. With 8+ years of expertise, we
              help brands grow and achieve measurable results.
            </p>

            <hr className="border-gray-700 my-4" />

            {/* Social Media */}
            {/* Social Media */}
            <h4 className="text-xl font-semibold mb-2 text-[#a7ebf2]">
              Follow Us
            </h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((s, i) => {
                const bgHover =
                  s.icon === faXTwitter
                    ? "hover:bg-blue-500"
                    : "hover:bg-white";
                const iconColor = s.icon === faXTwitter ? "#ffffff" : s.color; // Twitter blue
                return (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-9 h-9 flex items-center justify-center border rounded transition-all duration-300 ${bgHover}`}
                    style={{ color: iconColor }}
                  >
                    <FontAwesomeIcon icon={s.icon} />
                  </a>
                );
              })}
            </div>

            <hr className="border-gray-700 my-4" />

            {/* Contact Us */}
            <h4 className="text-xl font-semibold mb-2 text-[#a7ebf2]">
              Contact Us
            </h4>
            <div className="flex items-center gap-2 mb-2 ">
              <MapPin className="w-4 h-4 text-[#a7ebf2]" />
              <span className="text-gray-300 text-base">
                Plot #2, Sanjay Nagar, Gulabi Bagh, Delhi 110007, India
              </span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Phone className="w-4 h-4 text-[#a7ebf2]" />
              <span className="text-gray-300 text-base">+91 78279 77879</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <FaEnvelope className="w-4 h-4 text-[#a7ebf2]" />
              <span className="text-gray-300 text-base">
                support@bigwigmediadigital.com
              </span>
            </div>

            <ButtonFill
              onClick={() => setIsPopupOpen(true)}
              text="Get in Touch"
              className="mt-10"
            />
          </div>
        </aside>
      </div>
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </header>
  );
};

export default Nav;

"use client";
import React, { useState } from "react";
import logo from "../Assets/bigwig digital logo (11).png";
import {
  LayoutDashboard,
  Info,
  FileText,
  Users,
  Phone,
  MapPin,
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
import Image from "next/image";
import Link from "next/link";

const Nav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <nav className="bg-[#1f1f1f] sticky top-0 z-50 text-white w-full shadow-lg">
      {/* Top Bar */}
      <div className="bg-gray-100 shadow text-black text-sm px-4 md:px-16 py-2 flex justify-between items-center flex-wrap gap-2">
        <div className="hidden md:flex items-center gap-2">
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
            href="mailto:support@bigwigmedia.in"
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

      <div className="px-4 md:px-16 container mx-auto flex justify-between items-center py-3 w-full">
        {/* Logo */}
        <div className="flex items-center font-bold text-2xl">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              className="w-44 md:w-48 transition duration-300"
              draggable="false"
            />
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-[#1752B4]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-7 h-7"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-3 text-white font-medium relative">
          {["services", "Our Works", "about", "blogs", "clients"].map(
            (section) => {
              const path =
                section.toLowerCase() === "our works"
                  ? "/our-works"
                  : `/${section.toLowerCase()}`;

              return (
                <li key={section}>
                  <Link href={path}>
                    <button className="relative cursor-pointer overflow-hidden group rounded-lg px-3 py-2 hover:text-white transition-colors duration-300">
                      <span className="relative z-10 capitalize">
                        {section}
                      </span>
                      <span className="absolute inset-0 bg-[#1752B4] transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out" />
                    </button>
                  </Link>
                </li>
              );
            }
          )}

          <li className="flex space-x-3 items-center">
            <Link href="/contact">
              <button className="relative overflow-hidden group rounded-lg py-2 hover:text-white transition">
                <span className="relative z-10 border-2 border-[#D10B0B] px-3 py-1 rounded-md text-white hover:text-white">
                  Contact Us
                </span>
                <span className="absolute inset-0 bg-[#D10B0B] transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out" />
              </button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-32 bg-black bg-opacity-50 backdrop-blur-sm z-40 transition-all" />
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-32 right-0 bg-[#1f1f1f] shadow-xl rounded-md p-6 w-full max-w-md z-50">
          <ul className="flex flex-col space-y-5 text-white font-medium">
            <li className="flex items-center gap-2">
              <LayoutDashboard size={18} />
              <Link href="/services">
                <button>Services</button>
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <LayoutDashboard size={18} />
              <Link href="/our-works">
                <button>Our Works</button>
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Info size={18} />
              <Link href="/about">
                <button>About</button>
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FileText size={18} />
              <Link href="/blogs">
                <button>Blog</button>
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Users size={18} />
              <Link href="/clients">
                <button>Clients</button>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="flex items-center gap-2 py-2 rounded-md text-[#D10B0B] transition"
              >
                <Phone size={18} />
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;

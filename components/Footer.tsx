"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faPinterest,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import logo from "../Assets/bigwig digital logo (11).png";
import line2 from "../Assets/line2.png";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="relative">
      <Image
        src={line2}
        alt=""
        className="absolute top-0 left-0"
        draggable="false"
      />
      <footer className="bg-[#1f1f1f] text-white pt-12 pb-6">
        <div className="w-11/12 mx-auto px-2">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row gap-14 mb-8">
            {/* Branding */}
            <div className="md:w-1/3">
              <div className="py-2 flex justify-center md:justify-start mb-4">
                <Image
                  src={logo}
                  alt="Bigwig Logo"
                  className="w-60"
                  draggable="false"
                />
              </div>
              <p className="md:w-2/3 text-sm leading-relaxed">
                Elevating your media presence with innovative solutions and
                unmatched creativity. Let’s build something extraordinary
                together.
              </p>
              <div className="flex gap-3 mt-4">
                {[
                  "https://media.istockphoto.com/id/482478655/photo/arab-emirates-flag.jpg?s=612x612&w=0&k=20&c=fJfB5DUYTEWrJ96RbIxJoLo7uQrYkCPqo0F2BTNNp8A=",
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/1200px-Flag_of_New_Zealand.svg.png",
                  "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
                  "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg",
                ].map((flag, i) => (
                  <Image
                    key={i}
                    src={flag}
                    alt=""
                    width={40} // specify width
                    height={30} // specify height
                    className="object-contain w-8 md:w-10 h-auto"
                    draggable="false"
                  />
                ))}
              </div>
            </div>

            {/* Columns */}
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  {[
                    { name: "Careers", path: "/career" },
                    { name: "Blogs", path: "/blogs" },
                    { name: "FAQ", path: "/faq" },
                    { name: "T&C", path: "/terms-and-condition" },
                    { name: "Privacy Policy", path: "/privacy-policy" },
                    { name: "Sitemap", path: "/sitemap" },
                    {
                      name: "Services In Dubai",
                      path: "/digital-marketing-agency-dubai-uae",
                    },
                  ].map((link) => (
                    <li key={link.path}>
                      <Link
                        href={link.path}
                        className="hover:text-blue-600 transition"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industries */}
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Industries We Serve
                </h3>
                <ul className="space-y-2 text-sm">
                  {[
                    "Real Estate",
                    "Beauty",
                    "Education",
                    "Finance/Lending",
                    "Healthcare",
                    "Manufacturer",
                    "Events",
                    "Astrology",
                  ].map((name, index) => (
                    <li key={index}>{name}</li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                    <a
                      href="mailto:vipul@bigwigmedia.in"
                      className="hover:underline"
                    >
                      support@bigwigmedia.in
                    </a>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faPhone} className="mr-2" />
                    +91 96858 92813
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Category Sections */}
          <div className="border-t border-gray-700 pt-6 space-y-6 text-sm">
            {[
              {
                title: "Popular Services",
                clickable: true,
                links: [
                  {
                    name: "Search Engine Optimization",
                    path: "/services/search-engine-optimization",
                  },
                  {
                    name: "Social Media Marketing",
                    path: "/services/social-media-marketing",
                  },
                  {
                    name: "Performance Marketing",
                    path: "/services/performance-marketing",
                  },
                  {
                    name: "Content Marketing",
                    path: "/services/content-marketing",
                  },
                  {
                    name: "Website Designing & Development",
                    path: "/services/website-design-development",
                  },
                  {
                    name: "Email Marketing",
                    path: "/services/email-marketing",
                  },
                  // {
                  //   name: "Whatsapp Marketing",
                  //   path: "#",
                  // },
                  {
                    name: "Social Media Optimization",
                    path: "/services/social-media-optimization",
                  },
                  {
                    name: "Graphic Designing & Video Editing",
                    path: "/services/graphic-designing",
                  },

                  {
                    name: "Affiliate Marketing",
                    path: "/services/affiliate-marketing",
                  },

                  {
                    name: "Influencer Marketing",
                    path: "/services/influencer-marketing",
                  },
                  {
                    name: "Online Reputation Management",
                    path: "/services/online-reputation-management",
                  },
                ],
              },
              // {
              //   title: "Free Resources",
              //   clickable: false,
              //   links: [
              //     { name: "Digital Marketing Starter Guide" },
              //     { name: "Ultimate SEO Checklist" },
              //     { name: "Social Media Content Calendar" },
              //     { name: "PPC Campaign Templates" },
              //     { name: "Email Marketing Best Practices" },
              //     { name: "Content Strategy Workbook" },
              //     { name: "Facebook Ads Targeting Cheatsheet" },
              //     { name: "Google Ads Keyword Planner Guide" },
              //     { name: "Influencer Collaboration Checklist" },
              //     { name: "Landing Page Conversion Tips" },
              //     { name: "SEO Audit Template" },
              //     { name: "Instagram Hashtag Guide" },
              //     { name: "E-commerce Product Page Optimization Guide" },
              //   ],
              // },
              // {
              //   title: "Industries We Serve",
              //   clickable: false,
              //   links: [
              //     { name: "E-commerce Brands" },
              //     { name: "Real Estate Agencies" },
              //     { name: "Healthcare & Wellness" },
              //     { name: "Education & EdTech" },
              //     { name: "Hospitality & Travel" },
              //   ],
              // },
            ].map((section, idx) => (
              <div key={idx}>
                <h4 className="font-semibold mb-2">{section.title}</h4>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  {section.links.map((link, i) => (
                    <span key={i} className="flex items-center">
                      {section.clickable && "path" in link ? (
                        <Link
                          href={link.path}
                          className="hover:text-blue-600 cursor-pointer"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <span className="text-gray-400 cursor-default">
                          {link.name}
                        </span>
                      )}
                      {i !== section.links.length - 1 && (
                        <span className="mx-2 text-gray-400">|</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-500 pt-6 flex flex-col items-center gap-6 md:flex-row md:justify-between mt-6">
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
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
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl transition duration-300"
                  style={{ color: "#ffffff" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = social.color)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#ffffff")
                  }
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-sm text-center">
              © 2025 BigwigDigital.in All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

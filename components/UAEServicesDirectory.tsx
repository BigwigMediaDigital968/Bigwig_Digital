"use client";

import Link from "next/link";
import {
  FaSearch,
  FaShareAlt,
  FaBullhorn,
  FaEnvelope,
  FaUsers,
  FaPenNib,
  FaPalette,
  FaGlobe,
  FaLaptopCode,
} from "react-icons/fa";

export default function ServicesNavigation() {
  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      icon: <FaSearch />,
      link: "/digital-marketing-agency-dubai-uae/seo-services-in-dubai-uae",
    },
    {
      title: "Social Media Marketing (SMM)",
      icon: <FaShareAlt />,
      link: "/digital-marketing-agency-dubai-uae/social-media-marketing-services-in-dubai-uae",
    },
    {
      title: "Performance Marketing",
      icon: <FaBullhorn />,
      link: "/digital-marketing-agency-dubai-uae/ppc-services-in-dubai-uae",
    },
    {
      title: "Content Marketing",
      icon: <FaPenNib />,
      link: "/digital-marketing-agency-dubai-uae/content-marketing-services-in-dubai-uae",
    },
    {
      title: "Website Designing & Development",
      icon: <FaLaptopCode />,
      link: "/digital-marketing-agency-dubai-uae/website-designing-services-in-dubai-uae",
    },
    {
      title: "Email Marketing",
      icon: <FaEnvelope />,
      link: "/digital-marketing-agency-dubai-uae/email-marketing-services-in-dubai-uae",
    },
    {
      title: "Social Media Optimization (SMO)",
      icon: <FaGlobe />,
      link: "/digital-marketing-agency-dubai-uae/social-media-optimization-services-in-dubai-uae",
    },
    {
      title: "Graphic Designing & Video Editing",
      icon: <FaPalette />,
      link: "/digital-marketing-agency-dubai-uae/graphic-designing-services-in-dubai-uae",
    },
    {
      title: "Affiliate Marketing",
      icon: <FaBullhorn />,
      link: "/digital-marketing-agency-dubai-uae/affiliate-marketing-services-in-dubai-uae",
    },
    {
      title: "Influencer Marketing",
      icon: <FaUsers />,
      link: "/digital-marketing-agency-dubai-uae/influencer-marketing-services-in-dubai-uae",
    },
    {
      title: "Online Reputation Management (ORM)",
      icon: <FaPenNib />,
      link: "/digital-marketing-agency-dubai-uae/orm-services-in-dubai-uae",
    },
  ];

  return (
    <section className="w-11/12 md:w-5/6 mx-auto py-12">
      <h2 className="text-3xl  font-bold text-[var(--color5)] mb-10">
        Explore All Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-10">
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.link}
            className="
              group flex items-center gap-3
              text-white hover:text-[var(--color5)]
              transition-all duration-300
            "
          >
            {/* Icon */}
            <span className="text-[var(--color5)] text-xl group-hover:text-white transition">
              {service.icon}
            </span>

            {/* Title */}
            <span className="text-base hover:underline">{service.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

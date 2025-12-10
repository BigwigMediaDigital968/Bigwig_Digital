"use client";

import Link from "next/link";
import {
  Search,
  Globe,
  MonitorSmartphone,
  Mail,
  Cpu,
  PenTool,
  MessageCircle,
  Users,
  ThumbsUp,
  Megaphone,
} from "lucide-react";

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    slug: "services/search-engine-optimization",
    desc: "Rank higher on Google and attract organic traffic with proven SEO strategies.",
    icon: Search,
  },
  {
    title: "Social Media Marketing (SMM)",
    slug: "/services/social-media-marketing",
    desc: "Grow your brand with targeted ad campaigns on Facebook, Instagram & more.",
    icon: Globe,
  },
  {
    title: "Performance Marketing",
    slug: "/services/performance-marketing",
    desc: "Maximize ROI with conversion-driven paid advertising.",
    icon: MonitorSmartphone,
  },
  {
    title: "Content Marketing",
    slug: "/services/content-marketing",
    desc: "Engaging blogs, articles, and creatives that build authority.",
    icon: PenTool,
  },
  {
    title: "Website Designing & Development",
    slug: "/services/website-design-development",
    desc: "High-performance websites built for conversions.",
    icon: Cpu,
  },
  {
    title: "Email Marketing",
    slug: "/services/email-marketing",
    desc: "Automation and personalization that improves conversions.",
    icon: Mail,
  },
  //   {
  //     title: "WhatsApp Marketing",
  //     slug: "#",
  //     desc: "Instant customer engagement with automated flows.",
  //     icon: MessageCircle,
  //   },
  {
    title: "Social Media Optimization (SMO)",
    slug: "/services/social-media-optimization",
    desc: "Improve your online presence with optimized profiles.",
    icon: ThumbsUp,
  },
  {
    title: "Graphic Designing & Video Editing",
    slug: "/services/graphic-designing",
    desc: "Eye-catching visuals and creative video edits.",
    icon: PenTool,
  },
  {
    title: "Affiliate Marketing",
    slug: "/services/affiliate-marketing",
    desc: "Boost sales with strategic affiliate networks.",
    icon: Users,
  },
  {
    title: "Influencer Marketing",
    slug: "/services/influencer-marketing",
    desc: "Work with influencers to expand brand reach.",
    icon: Megaphone,
  },
  {
    title: "Online Reputation Management (ORM)",
    slug: "/services/online-reputation-management",
    desc: "Protect & enhance your brand reputation.",
    icon: ThumbsUp,
  },
];

export default function ServicesPage() {
  return (
    <section className="w-11/12 md:w-5/6 mx-auto py-12">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Explore Our{" "}
          <span className="text-[var(--primary-color)]">Premium Services</span>
        </h1>
        <p className="text-gray-600 md:text-lg max-w-3xl mx-auto">
          Cutting-edge digital solutions crafted to grow your brand faster in
          the modern world.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <Link
              key={index}
              href={`/${service.slug}`}
              className="group relative bg-white rounded-3xl p-8 border border-gray-200 shadow-lg
              hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Soft gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Icon */}
              <div
                className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-100 text-[var(--primary-color)]
              group-hover:bg-[var(--primary-color)] group-hover:text-white transition-all duration-300 shadow-inner"
              >
                <Icon size={32} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3 group-hover:text-[var(--primary-color)] transition-all">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>

              {/* Hover bottom bar */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[var(--primary-color)] group-hover:w-full transition-all duration-500"></div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

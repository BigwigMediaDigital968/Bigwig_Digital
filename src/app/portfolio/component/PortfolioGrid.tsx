"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

// --- Types & Constants ---
const TABS = ["Industries", "Services", "Country"] as const;
type Tab = (typeof TABS)[number];

const FILTERS: Record<Tab, string[]> = {
  Industries: [
    "Show All",
    "eCommerce",
    "Healthcare",
    "FinTech",
    "Astrology",
    "Real Estate",
    "FoodTech",
  ],
  Services: [
    "Show All",
    "UI/UX Design",
    "Web Development",
    "SEO",
    "Social Media",
    "Digital Marketing",
  ],
  Country: ["Show All", "India", "UAE", "USA", "UK", "Europe"],
};

const portfolioItems = [
  {
    id: 1,
    brand: "Mondus Properties",
    industry: "Real Estate",
    service: "Web Development",
    country: "UAE",
    title: "Elevating Dubai's Luxury Real Estate Presence",
    description:
      "Bigwig Media Digital partnered with Mondus Properties to create a premium digital experience that showcases luxury properties, drives qualified investor leads, and strengthens their position as a trusted real estate advisor in Dubai's competitive property market.",
    image: "/mondus-webpage.png",
    stats: [
      { label: "Qualified Property Leads Generated", value: "3X" },
      { label: "Increase in Website Engagement", value: "185%" },
      { label: "Luxury Listings Showcased", value: "8,000+" },
    ],
    accentColor: "#D4AF37",
    tag: "Luxury Real Estate",
    url: "https://www.mondusproperties.ae/",
    author: "Mondus Properties Management",
    testimonial:
      "Bigwig Media Digital transformed our online presence into a high-converting luxury real estate platform that reflects our brand and attracts serious investors worldwide.",
    tagline: "Connecting Global Investors with Dubai's Finest Properties",
  },
  {
    id: 2,
    brand: "Dr. Himanshu Verma",
    industry: "Healthcare",
    service: "Web Development",
    country: "India",
    title: "Building a Premium Digital Presence for Advanced Orthopedic Care",
    description:
      "Bigwig Media Digital partnered with Dr. Himanshu Verma to create a modern healthcare platform that showcases orthopedic expertise, streamlines appointment bookings, and enhances patient trust through an engaging digital experience.",
    image: "/himanshu-verma.png",
    stats: [
      { label: "Patient Inquiry Growth", value: "240%" },
      { label: "Appointment Booking Increase", value: "3X" },
      { label: "Organic Search Visibility", value: "+180%" },
    ],
    accentColor: "#0F766E",
    tag: "Healthcare",
    url: "https://www.drhimanshuverma.com/",
    author: "Dr. Himanshu Verma",
    testimonial:
      "Bigwig Media Digital helped us establish a professional online presence that reflects our commitment to patient care while making it easier for patients to connect with us and book consultations.",
    tagline: "Transforming Patient Care Through Digital Excellence",
  },
  {
    id: 3,
    brand: "Global Technologies India",
    industry: "Industrial Automation & Engineering",
    service: "Corporate Website & Lead Generation",
    country: "India",
    title:
      "Digitizing Industrial Excellence for Global Manufacturing Solutions",
    description:
      "Bigwig Media Digital partnered with Global Technologies India to develop a modern industrial website that showcases engineering expertise, automation solutions, and manufacturing capabilities while generating high-quality B2B inquiries from domestic and international markets.",
    image: "/global-tech.png",
    stats: [
      { label: "Increase in Qualified B2B Leads", value: "320%" },
      { label: "Growth in Website Engagement", value: "210%" },
      { label: "Industrial Solutions Showcased", value: "50+" },
    ],
    accentColor: "#1E40AF",
    tag: "Industrial Technology",
    url: "https://www.globaltechnologiesindia.com/",
    author: "Management Team, Global Technologies India",
    testimonial:
      "Bigwig Media Digital successfully transformed our digital presence into a powerful business development platform that effectively communicates our technical expertise and generates valuable industry inquiries.",
    tagline: "Engineering Digital Growth for Industrial Innovation",
  },
  {
    id: 4,
    brand: "Destiny By Numberrs",
    industry: "Astrology",
    service: "Brand Website & Lead Generation",
    country: "India",
    title:
      "Transforming a Personal Numerology Brand into a Digital Growth Engine",
    description:
      "Bigwig Media Digital partnered with Destiny By Numberrs to create a premium digital platform that showcases numerology expertise, streamlines consultation bookings, and attracts clients seeking personalized life, career, relationship, and business guidance.",
    image: "/destiny-by-number.png",
    stats: [
      { label: "Consultation Booking Growth", value: "4X" },
      { label: "Organic Traffic Increase", value: "220%" },
      { label: "Lead Conversion Improvement", value: "175%" },
    ],
    accentColor: "#7C3AED",
    tag: "Personal Branding",
    url: "https://www.destinybynumberrs.com/",
    author: "Team Destiny By Numberrs",
    testimonial:
      "Bigwig Media Digital helped us establish a strong digital presence that reflects our brand philosophy while making it easier for clients worldwide to discover our services and book consultations.",
    tagline: "Guiding Life Decisions Through the Power of Numbers",
  },
  {
    id: 5,
    brand: "Ethical Infrastructures",
    industry: "Real Estate",
    service: "Web Development",
    country: "India",
    title:
      "Driving Premium Real Estate Leads Through a Modern Digital Experience",
    description:
      "Bigwig Media Digital partnered with Ethical Infrastructures to build a high-converting real estate platform that showcases premium residential and commercial properties across Delhi NCR while streamlining lead acquisition, property discovery, and client engagement.",
    image: "/ethical-infrastructures-showcase.png",
    stats: [
      { label: "Qualified Property Inquiries", value: "300%+" },
      { label: "Property Categories Showcased", value: "50+" },
      { label: "Growth in User Engagement", value: "210%" },
    ],
    accentColor: "#0F766E",
    tag: "Real Estate",
    url: "https://www.ethicalinfrastructures.com/",
    author: "Sorabh Chopra, Founder",
    testimonial:
      "Bigwig Media Digital helped us transform our online presence into a powerful real estate lead-generation platform. The new experience reflects our commitment to transparency while helping buyers, sellers, and investors connect with the right opportunities.",
    tagline:
      "Building Trust, Driving Growth, and Connecting People with Premium Properties",
  },
  {
    id: 6,
    brand: "Pearls India",
    industry: "eCommerce",
    service: "SEO",
    country: "India",
    title: "Scaling Organic Revenue for a Growing eCommerce Brand",
    description:
      "Bigwig Media Digital partnered with Pearls India to execute a comprehensive SEO strategy focused on technical optimization, category-page rankings, content marketing, and high-intent keyword targeting. The campaign significantly improved organic visibility, increased qualified traffic, and drove sustainable revenue growth through search engines.",
    image: "/pearls-india-showcase.png",
    stats: [
      { label: "Organic Traffic Growth", value: "320%" },
      { label: "Keywords Ranked on Page 1", value: "500+" },
      { label: "Increase in Organic Revenue", value: "245%" },
    ],
    accentColor: "#0F4C81",
    tag: "SEO",
    url: "https://pearlsindia.co.in/",
    author: "Marketing Team, Pearls India",
    testimonial:
      "Bigwig Media Digital helped us achieve remarkable search visibility and consistent organic growth. Their SEO strategy significantly increased our online reach, qualified traffic, and eCommerce sales.",
    tagline: "Driving Sustainable eCommerce Growth Through Search Excellence",
  },
  {
    id: 7,
    brand: "Rehnoor Jewels",
    industry: "eCommerce",
    service: "Web Development",
    country: "India",
    title: "Crafting a High-Converting Jewelry eCommerce Experience",
    description:
      "Bigwig Media Digital partnered with Rehnoor Jewels to design and develop a premium eCommerce platform that showcases gold-plated jewelry collections, streamlines online shopping, and drives sales through a mobile-first user experience optimized for conversions and customer trust.",
    image: "/rehnoor-jewels-showcase.png",
    stats: [
      { label: "Happy Customers Served", value: "50K+" },
      { label: "Unique Jewelry Designs", value: "500+" },
      { label: "Customer Satisfaction", value: "98%" },
    ],
    accentColor: "#D4AF37",
    tag: "eCommerce",
    url: "https://www.rehnoorjewels.com/",
    author: "Team Rehnoor Jewels",
    testimonial:
      "Bigwig Media Digital helped us transform our online store into a premium shopping experience that perfectly reflects our brand while making it easier for customers across India to discover and purchase our collections.",
    tagline: "Bringing Timeless Jewelry Elegance to the Digital World",
  },
  {
    id: 8,
    brand: "Crownpoint Estates",
    industry: "Luxury Real Estate",
    service: "Local SEO & Performance Marketing",
    country: "India",
    title: "Building a Predictable Lead Engine for Gurgaon Real Estate",
    description:
      "Through advanced local SEO, location-specific landing pages, technical optimization, and conversion-focused content, Bigwig Media Digital transformed Crownpoint Estates into a highly visible real estate brand that consistently attracts buyers, sellers, investors, and NRI clients searching for premium properties in Gurgaon.",
    image: "/crownpoint-estates-leads.png",
    stats: [
      { label: "Local Search Visibility Growth", value: "420%" },
      { label: "Monthly Qualified Leads", value: "500+" },
      { label: "Organic Conversion Rate Increase", value: "225%" },
    ],
    accentColor: "#1E3A8A",
    tag: "Lead Generation",
    url: "https://www.crownpointestates.com/",
    author: "Crownpoint Estates Team",
    testimonial:
      "The SEO and lead generation strategy transformed our digital presence into a reliable source of high-quality property inquiries and investment opportunities.",
    tagline: "Where Search Visibility Meets Real Estate Growth",
  },
  {
    id: 12,
    brand: "Rehnoor Jewels",
    industry: "eCommerce",
    service: "SEO",
    country: "India",
    title: "Dominating Search Rankings in the Online Jewelry Market",
    description:
      "Through strategic SEO, content optimization, and technical improvements, Bigwig Media Digital helped Rehnoor Jewels strengthen its online presence, outrank competitors, and attract high-intent shoppers actively searching for premium jewelry collections.",
    image: "/portfolio/rehnoor-jewels-showcase.png",
    stats: [
      { label: "Keyword Visibility Growth", value: "380%" },
      { label: "Organic Conversion Increase", value: "215%" },
      { label: "Monthly Organic Visitors", value: "100K+" },
    ],
    accentColor: "#B8860B",
    tag: "SEO",
    url: "https://www.rehnoorjewels.com/",
    author: "Digital Growth Team",
    testimonial:
      "The SEO campaign delivered exceptional results, helping us reach more customers organically while reducing dependence on paid advertising.",
    tagline: "Building Long-Term eCommerce Growth Through Search Excellence",
  },
];

// --- Sub-components ---

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function AutoScrollImage({ src, inView }: { src: string; inView: boolean }) {
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    const img = imgRef.current;
    const container = containerRef.current;
    if (!img || !container) return;

    const calculateDistance = () => {
      const distance = img.offsetHeight - container.offsetHeight;
      setScrollDistance(distance > 0 ? distance : 0);
    };

    // Use ResizeObserver to reliably monitor size modifications of the flexible wrapper
    const resizeObserver = new ResizeObserver(() => {
      calculateDistance();
    });

    resizeObserver.observe(container);
    if (img.complete) {
      calculateDistance();
    } else {
      img.onload = calculateDistance;
    }

    return () => resizeObserver.disconnect();
  }, [src]);

  const animationDuration =
    scrollDistance > 0 ? Math.max(8, scrollDistance / 50) : 0;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pt-10 overflow-hidden rounded-r-none lg:rounded-r-[2rem]"
    >
      {scrollDistance > 0 && (
        <style>{`
          @keyframes continuousYoyoScroll {
            0%, 10% { transform: translateY(0); }
            50% { transform: translateY(calc(-1px * var(--scroll-dist))); }
            90%, 100% { transform: translateY(0); }
          }
          .animate-yoyo-scroll {
            animation: continuousYoyoScroll ${animationDuration}s ease-in-out infinite;
          }
        `}</style>
      )}

      <img
        ref={imgRef}
        src={src}
        style={{ "--scroll-dist": scrollDistance } as React.CSSProperties}
        className={`w-full object-cover vertical-align-top transition-transform ${
          inView && scrollDistance > 0 ? "animate-yoyo-scroll" : ""
        }`}
        alt="Portfolio Preview"
      />
    </div>
  );
}

function PortfolioCard({
  item,
  index,
}: {
  item: (typeof portfolioItems)[0];
  index: number;
}) {
  const { ref, inView } = useInView(0.1);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`
        relative grid grid-cols-1 lg:grid-cols-5 items-stretch rounded-[2rem] border border-white/10 overflow-hidden
        transition-all duration-1000 ease-out bg-[#050b18]/60 backdrop-blur-xl
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
      `}
    >
      {/* --- Left Side: Content Box (Spans 3 Columns) --- */}
      <div
        className={`w-full lg:col-span-3 p-8 md:p-12 xl:p-16 flex flex-col justify-between z-10 ${
          !isEven
            ? "lg:order-2 border-l lg:border-white/10"
            : "border-r lg:border-white/10"
        }`}
      >
        <div>
          {/* Brand & Tagline Header Row */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 border border-white/20">
              <div
                className="w-5 h-5 rounded-full border-4"
                style={{ borderColor: item.accentColor }}
              />
            </div>
            <h4 className="text-xl font-bold tracking-tighter text-white uppercase">
              {item.brand}
            </h4>
          </div>

          <p className="text-lg md:text-xl text-slate-300 font-medium mb-10 max-w-2xl leading-relaxed">
            {item.tagline}
          </p>

          {/* Core Metrics Array */}
          <div className="flex flex-nowrap items-center gap-8 md:gap-14 mb-10 py-6 border-y border-white/5">
            {item.stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-3xl md:text-4xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-[11px] uppercase tracking-widest text-slate-500 font-bold">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Testimonial Quote Block */}
          <div className="relative pl-6 mb-10 border-l-2 border-blue-500/50 italic">
            <p className="text-slate-400 text-sm md:text-base mb-2">
              "{item.testimonial}"
            </p>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              — {item.author}
            </span>
          </div>
        </div>

        {/* CTA Case Study Link Trigger */}
        <div className="pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-sm uppercase tracking-tighter hover:bg-blue-500 hover:text-white transition-all duration-300 group"
          >
            Request A Case Study Demo
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* --- Right Side: Visual Device Interface (Spans 2 Columns) --- */}
      <div
        className={`w-full lg:col-span-2 relative min-h-[450px] lg:min-h-full bg-slate-950 overflow-hidden ${
          !isEven ? "lg:order-1" : ""
        }`}
      >
        {/* Absolute Window Header Frame Top-bar */}
        <div className="absolute top-0 left-0 right-0 h-10 bg-slate-950/90 backdrop-blur-md flex items-center px-4 z-20 border-b border-white/5">
          <div className="flex gap-1.5 mr-4">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
          </div>
          <div className="text-[10px] text-slate-500 font-mono truncate">
            {item.url}
          </div>
        </div>

        {/* Full-height viewport-aware scroll image viewport engine */}
        <AutoScrollImage src={item.image} inView={inView} />

        {/* Blended bottom mask shadow gradient for small display breakpoints */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#050b18] via-transparent to-transparent lg:hidden" />
      </div>
    </div>
  );
}

export default function PortfolioGrid() {
  const [activeTab, setActiveTab] = useState<Tab>("Industries");
  const [activeFilter, setActiveFilter] = useState("Show All");

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setActiveFilter("Show All");
  };

  const filteredItems = portfolioItems.filter((item) => {
    if (activeFilter === "Show All") return true;

    let targetValue = "";
    if (activeTab === "Industries") targetValue = item.industry;
    if (activeTab === "Services") targetValue = item.service;
    if (activeTab === "Country") targetValue = item.country;

    return targetValue === activeFilter;
  });

  return (
    <section className="bg-[#020617] text-white py-32 px-4 md:px-8 relative overflow-hidden">
      {/* Background Radial Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <header className="mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[2px] bg-blue-600" />
            <span className="text-blue-500 text-sm font-bold uppercase tracking-[0.3em]">
              Success Stories
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl mb-8 font-bold">
            Our{" "}
            <span className="text-transparent bg-clip-text pe-2 bg-gradient-to-r from-white to-slate-500">
              Portfolio
            </span>
          </h2>

          {/* Filter System Layout */}
          <div className="space-y-6">
            <div className="flex gap-8 border-b border-white/5">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`pb-4 text-xs font-bold uppercase tracking-widest relative transition-all cursor-pointer ${
                    activeTab === tab
                      ? "text-white"
                      : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-blue-600" />
                  )}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {FILTERS[activeTab].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all cursor-pointer ${
                    activeFilter === filter
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "border-white/10 text-slate-400 hover:border-white/30"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Main Grid Render Loop */}
        <div className="flex flex-col gap-20">
          {filteredItems.map((item, index) => (
            <PortfolioCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

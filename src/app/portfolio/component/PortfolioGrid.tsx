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
    "eCommerce & Retail",
    "Healthcare",
    "FinTech",
    "FoodTech",
    "Mobility",
  ],
  Services: [
    "Show All",
    "UI/UX Design",
    "Web Development",
    "AI & ML",
    "Mobile Apps",
  ],
  Country: ["Show All", "UAE", "USA", "UK", "Europe", "India"],
};

const portfolioItems = [
  {
    id: 1,
    brand: "KFC",
    industry: "FoodTech",
    service: "Mobile Apps",
    country: "USA",
    title: "Digital Transformation for Global Markets",
    description:
      "Helping the Americana Group's KFC to digitally transform their business by launching seven innovative mobile apps across global markets.",
    image: "/mondus-webpage.png",
    stats: [
      { label: "Higher Conversion Rate", value: "22%" },
      { label: "Average Rating on Stores", value: "4.5" },
      { label: "Orders per Day via App", value: "30K+" },
    ],
    accentColor: "#e4002b",
    tag: "FoodTech",
    url: "https://www.kfc.com/",
    author: "Sarah Johnson, CMO of KFC",
    testimonial: "Working with this",
    tagline: "Revolutionizing Fast Food with Digital Innovation",
  },
  {
    id: 2,
    brand: "IKEA",
    industry: "eCommerce & Retail",
    service: "IoT Solutions",
    country: "Europe",
    title: "IoT-Powered In-Store Experience",
    description:
      "Deploying IoT-powered kiosks integrated with a custom ERP solution, we enhanced IKEA's customer onboarding, product exploration, and data-driven marketing.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    stats: [
      { label: "IKEA Stores Deployed", value: "7+" },
      { label: "Marketing Asset Rank", value: "#1" },
      { label: "Customer Onboarding Lift", value: "38%" },
    ],
    accentColor: "#0058a3",
    tag: "Retail",
    url: "https://www.ikea.com/",
    author: "John Doe, CMO of IKEA",
    testimonial:
      "The IoT solutions implemented by this team have transformed our in-store experience. The integration with our ERP system has streamlined our operations and significantly improved customer satisfaction.",
    tagline: "Enhancing Retail with IoT Innovation",
  },
  {
    id: 3,
    brand: "HealthPoint",
    industry: "Healthcare",
    service: "AI & ML",
    country: "UK",
    title: "AI-Driven Patient Monitoring Dashboard",
    description:
      "Developing a HIPAA-compliant dashboard that uses predictive analytics to monitor patient vitals and alert medical staff in real time.",
    image: "/himanshu-verma.png",
    stats: [
      { label: "Response Time Reduction", value: "35%" },
      { label: "Patient Satisfaction", value: "98%" },
      { label: "Data Points Processed", value: "10M+" },
    ],
    accentColor: "#4e6cba",
    tag: "Healthcare",
    url: "https://www.healthpoint.com/",
    author: "Dr. Emily Smith, CEO of HealthPoint",
    testimonial:
      "The AI-driven monitoring dashboard has been a game-changer for our patient care. It has significantly improved our ability to detect and respond to critical health issues in real time.",
    tagline: "Transforming Healthcare with AI Innovation",
  },
  {
    id: 4,
    brand: "SwiftPay",
    industry: "FinTech",
    service: "Web Development",
    country: "India",
    title: "The Next-Gen Neobank Ecosystem",
    description:
      "Building a secure, scalable fintech ecosystem supporting multi-currency accounts, instant crypto swaps, and physical card management.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    stats: [
      { label: "Transaction Speed", value: "< 2s" },
      { label: "Security Incidents", value: "0" },
      { label: "New Accounts/Month", value: "50K" },
    ],
    accentColor: "#54acbf",
    tag: "FinTech",
    url: "https://www.swiftpay.com/",
    author: "Michael Brown, CTO of SwiftPay",
    testimonial:
      "The fintech ecosystem built by this team has revolutionized our approach to digital banking. The seamless integration of multi-currency support and crypto functionality has positioned us at the forefront of the industry.",
    tagline: "Pioneering FinTech with Innovative Solutions",
  },
  {
    id: 5,
    brand: "EduPro",
    industry: "EdTech",
    service: "UI/UX Design",
    country: "India",
    title: "Gamified Global Learning Platform",
    description:
      "A gamified education suite connecting students and teachers globally through live VR classrooms and AI-personalised study paths.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    stats: [
      { label: "Engagement Rate", value: "85%" },
      { label: "Course Completion", value: "72%" },
      { label: "Active Countries", value: "120" },
    ],
    accentColor: "#a7ebf2",
    tag: "EdTech",
    url: "https://www.edupro.com/",
    author: "Dr. Lisa Chen, Founder of EduPro",
    testimonial:
      "The gamified learning platform has transformed how we engage students and deliver content. The AI-personalised study paths have significantly improved learning outcomes and student satisfaction.",
    tagline: "Revolutionizing Education with Gamification",
  },
  {
    id: 6,
    brand: "RideGo",
    industry: "Mobility",
    service: "Mobile Apps",
    country: "UAE",
    title: "Smart Urban Mobility Platform",
    description:
      "An all-in-one transportation app integrating public transit, ride-sharing, and micro-mobility with real-time GPS tracking and traffic AI.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    stats: [
      { label: "Avg. Commute Savings", value: "12m" },
      { label: "Carbon Offset", value: "500T" },
      { label: "Daily Active Riders", value: "200K" },
    ],
    accentColor: "#023859",
    tag: "Mobility",
    url: "https://www.ridego.com/",
    author: "David Lee, COO of RideGo",
    testimonial:
      "The smart mobility platform has revolutionized how we approach urban transportation. The real-time integration and AI-driven optimization have significantly improved our operational efficiency and customer satisfaction.",
    tagline: "Transforming Urban Mobility with Smart Technology",
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
          <div className="flex flex-wrap items-center gap-8 md:gap-14 mb-10 py-6 border-y border-white/5">
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
            href={`/portfolio/${item.id}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-sm uppercase tracking-tighter hover:bg-blue-500 hover:text-white transition-all duration-300 group"
          >
            View Case Study
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
          <h2 className="text-3xl md:text-6xl mb-8">
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

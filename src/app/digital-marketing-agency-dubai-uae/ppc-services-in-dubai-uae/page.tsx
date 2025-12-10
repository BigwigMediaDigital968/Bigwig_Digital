"use client";
import Nav from "../../../../components/Nav";
import ContactForm from "../../../../components/ContactForm";
import bannerImage from "../../../../Assets/dubai.jpg";
import Footer from "../../../../components/Footer";
import seoImage from "../../../../Assets/Dubai/transformBuisness.jpg";

import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
// import { useState } from "react";
// import PopupForm from "../../components/PopupForm";
import CTABanner from "../../../../components/CTABanner";
import {
  Search,
  MonitorPlay,
  Smartphone,
  ShoppingBag,
  Users,
  Target,
  Layout,
  Image as ImageIcon,
  CheckCircle,
  BarChart,
  Rocket,
  Globe,
  Wallet,
  RefreshCw,
  TrendingUp,
  Eye,
  BarChart2,
  Award,
  DollarSign,
  PhoneCall,
  Layers,
  Languages,
  Globe2,
  ShieldCheck,
  Clock,
  Star,
  Anchor,
} from "lucide-react";
import Image from "next/image";
import GetInTouch from "../../../../components/GetInTouch";
import ServicesNavigation from "../../../../components/UAEServicesDirectory";

const reasons = [
  {
    icon: Users,
    title: "Google-Certified PPC Experts",
    desc: "Our certified team manages Google Ads, Bing Ads, and paid social campaigns tailored for Dubai & UAE audiences.",
  },
  {
    icon: Rocket,
    title: "Instant Lead Generation",
    desc: "We deliver high-quality leads fast by ensuring ads reach the right people at the right time with optimized costs.",
  },
  {
    icon: BarChart,
    title: "Transparent & Scalable Campaigns",
    desc: "Get weekly reports on CPC, CTR, ROAS, and conversions. Scale profitably with full transparency.",
  },
  {
    icon: Globe,
    title: "Multi-Platform Advertising",
    desc: "From Google Search to YouTube, Facebook, Instagram, and LinkedIn Ads, we capture audiences everywhere.",
  },
  {
    icon: Wallet,
    title: "Affordable Yet High-Impact Campaigns",
    desc: "From AED 5,000 to AED 500,000, we create cost-effective campaigns that still deliver premium results.",
  },
  {
    icon: CheckCircle,
    title: "Dedicated PPC Consultants",
    desc: "Each campaign is managed by a specialist in keywords, ad copy, targeting, and conversion optimization.",
  },
];

const features = [
  {
    icon: <Search className="w-6 h-6 text-white" />,
    title: "Search Advertising",
    text: "Appear instantly on Google when UAE customers search for your products or services.",
  },
  {
    icon: <MonitorPlay className="w-6 h-6 text-white" />,
    title: "Display & Video Ads",
    text: "Use banners and YouTube ads to build strong brand awareness.",
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Social Media Ads",
    text: "Run ROI-driven ads on Facebook, Instagram, LinkedIn, TikTok, and Snapchat.",
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-white" />,
    title: "Remarketing",
    text: "Re-engage visitors who didn’t convert the first time.",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-white" />,
    title: "Mobile Advertising",
    text: "Target users on apps, mobile sites, and location-based ads.",
  },
  {
    icon: <ShoppingBag className="w-6 h-6 text-white" />,
    title: "Shopping Ads",
    text: "Boost product visibility and sales for e-commerce stores in Dubai.",
  },
];

const whyUs = [
  {
    icon: <Target className="w-8 h-8 text-[var(--color5)]" />,
    text: "Understand Dubai’s competitive PPC landscape.",
  },
  {
    icon: <Languages className="w-8 h-8 text-[var(--color5)]" />,
    text: "Deliver campaigns in both English and Arabic.",
  },
  {
    icon: <Globe2 className="w-8 h-8 text-[var(--color5)]" />,
    text: "Run ads that capture both local UAE audiences and international markets.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-[var(--color5)]" />,
    text: "Focus on long-term ROI, not just clicks.",
  },
];

const benefits = [
  {
    icon: <CheckCircle className="w-7 h-7 text-[var(--color5)]" />,
    title: "Faster Results",
    desc: "Campaigns & experiments tuned for rapid learnings and fast wins.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-[var(--color5)]" />,
    title: "Quality-first",
    desc: "White-hat SEO, transparent reporting and privacy-respecting tracking.",
  },
  {
    icon: <Clock className="w-7 h-7 text-[var(--color5)]" />,
    title: "Always-on Optimization",
    desc: "Continuous A/B testing, bid optimization and creative refresh cycles.",
  },
  {
    icon: <Star className="w-7 h-7 text-[var(--color5)]" />,
    title: "Creative Excellence",
    desc: "High-converting creative that performs across markets & languages.",
  },
  {
    icon: <Anchor className="w-7 h-7 text-[var(--color5)]" />,
    title: "Local Market Expertise",
    desc: "Dubai & UAE-specific targeting, language & cultural optimizations.",
  },
  {
    icon: <Users className="w-7 h-7 text-[var(--color5)]" />,
    title: "Dedicated Team",
    desc: "Experienced specialists for strategy, execution and reporting.",
  },
  {
    icon: <Layers className="w-7 h-7 text-[var(--color5)]" />,
    title: "Full-funnel Approach",
    desc: "From awareness to retention — we design end-to-end funnels.",
  },
  {
    icon: <BarChart2 className="w-7 h-7 text-[var(--color5)]" />,
    title: "Data-driven Decisions",
    desc: "Custom dashboards, weekly insights and measurable KPIs.",
  },
  {
    icon: <PhoneCall className="w-7 h-7 text-[var(--color5)]" />,
    title: "Local Support",
    desc: "Local hours, multilingual support and in-market partners.",
  },
];

function PpcServicesInDubai() {
  //   const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="bg-[var(--color1)] text-white">
      <title>PPC Services in Dubai, UAE | BigWig Media Digital</title>
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/ppc-services-in-dubai-uae"
      />
      <meta
        name="description"
        content="Maximize ROI with targeted PPC Services in Dubai, UAE. BigWig Media Digital creates data-driven campaigns for instant leads and conversions."
      />
      <Nav />
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${bannerImage.src})`, // replace with your image path
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative w-11/12 md:w-5/6 mx-auto py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Text */}
          <div className="text-left space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Performance Marketing Services in Dubai, UAE
            </h1>
            <h2 className="text-2xl font-semibold leading-tight">
              Data-Driven Strategies for Maximum ROI
            </h2>
            <p className="text-lg">
              Our performance marketing services in Dubai, UAE help businesses
              achieve measurable growth through targeted campaigns, real-time
              tracking, and ROI-focused strategies that ensure every dirham
              delivers results.
            </p>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <Image
              src={seoImage}
              alt="PPC Company in Dubai, UAE"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-[var(--color5)]">
              Data-Driven PPC Campaigns That Deliver Instant Results
            </h2>

            <p className="text-gray-300 mb-4 leading-relaxed">
              At <strong>BigWig Media Digital</strong>, we take pride in being
              one of the top PPC companies in Dubai, UAE, known for delivering
              measurable results with cost-effective campaigns. Our team of
              Google Ads-certified PPC experts helps businesses in the UAE stay
              ahead of the competition with high-performance and ROI-focused PPC
              services.
            </p>

            {/* Icon List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="flex items-center gap-3">
                <Search className="text-[var(--color5)] w-6 h-6" />
                <span>Google Search Ads</span>
              </div>
              <div className="flex items-center gap-3">
                <ImageIcon className="text-[var(--color5)] w-6 h-6" />
                <span>Display & Banner Ads</span>
              </div>
              <div className="flex items-center gap-3">
                <MonitorPlay className="text-[var(--color5)] w-6 h-6" />
                <span>YouTube Video Ads</span>
              </div>
              <div className="flex items-center gap-3">
                <Smartphone className="text-[var(--color5)] w-6 h-6" />
                <span>App Installation Ads</span>
              </div>
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-[var(--color5)] w-6 h-6" />
                <span>Shopping Ads (E-commerce PPC)</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="text-[var(--color5)] w-6 h-6" />
                <span>Lead Generation Ads</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="text-[var(--color5)] w-6 h-6" />
                <span>Remarketing Campaigns</span>
              </div>
              <div className="flex items-center gap-3">
                <Layout className="text-[var(--color5)] w-6 h-6" />
                <span>
                  Landing Page Optimization & Quality Score Improvement
                </span>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              With years of experience running successful PPC campaigns for real
              estate, hospitality, education, healthcare, e-commerce, and
              corporate brands in Dubai, UAE, we know how to maximize every
              dirham you spend.
            </p>
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12 ">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl  font-semibold text-white leading-snug">
            Why Choose Us as Your{" "}
            <span className="text-[var(--color5)]">
              PPC Company in Dubai, UAE?
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="
          group relative p-8 rounded-2xl overflow-hidden 
          bg-[var(--color1)]/60 backdrop-blur-xl 
          border border-white/10 
          shadow-[0_0_25px_rgba(0,0,0,0.5)]
          hover:shadow-[0_0_40px_rgba(167,235,242,0.3)]
          hover:border-[var(--color5)]
          transition-all duration-500
        "
            >
              {/* Matrix hologram overlay */}
              <div
                className="
            absolute inset-0 opacity-[0.15] 
            bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')]
            bg-cover bg-center mix-blend-screen pointer-events-none
          "
              ></div>

              {/* Glow border on hover */}
              <div
                className="
            absolute inset-0 rounded-2xl border border-transparent
            group-hover:border-[var(--color5)]
            transition-all duration-500
          "
              ></div>

              {/* Icon */}
              <div
                className="
          w-16 h-16 rounded-xl border border-[var(--color5)]/40 
          bg-[var(--color5)]/10 flex items-center justify-center 
          shadow-[0_0_18px_rgba(167,235,242,0.35)]
          mb-6 group-hover:scale-110 transition-transform duration-300
        "
              >
                <item.icon className="w-8 h-8 text-[var(--color5)]" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[var(--color5)] mb-3 tracking-wide">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12 ">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color5)]">
            Our Core Services
          </h2>
          <p className="text-sm text-white/80 mt-2 max-w-2xl mx-auto">
            End-to-end digital marketing capabilities — from SEO to creative
            campaigns and technical web builds. Pick a service to explore more.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((s, i) => (
            <article
              key={i}
              className={`
          group relative p-8 rounded-2xl overflow-hidden
          bg-[var(--color1)]/60 backdrop-blur-xl
          border border-white/10 shadow-[0_12px_30px_rgba(2,6,23,0.45)]
          transition-transform duration-300 hover:-translate-y-2
        `}
            >
              {/* Blob light effect */}
              <div className="absolute -right-10 -top-10 w-56 h-56 blur-3xl opacity-30 bg-gradient-to-br from-[var(--color3)] to-[var(--color4)] rounded-full pointer-events-none"></div>

              {/* Hologram overlay */}
              <div className="absolute inset-0 opacity-10 bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen pointer-events-none"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color5)]/10 border border-[var(--color5)]/30 flex items-center justify-center shadow-[0_6px_20px_rgba(167,235,242,0.08)]">
                    {s.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--color4)]">
                    {s.title}
                  </h3>
                </div>

                <p className="text-sm text-white/70 leading-relaxed flex-grow">
                  {s.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="w-11/12 md:w-5/6 mx-auto py-12 ">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color5)]">
            Benefits of Working with Us
          </h2>
          <p className="text-sm text-white/80 mt-2 max-w-2xl mx-auto">
            What clients gain when they partner with BigWig Media Digital.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="relative rounded-xl p-6 bg-[var(--color2)]/10 border border-white/6 shadow-md hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--color5)]/10 flex items-center justify-center">
                  {b.icon}
                </div>
              </div>

              <h4 className="font-semibold text-white/95 mb-2">{b.title}</h4>
              <p className="text-sm text-white/70">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="w-11/12 md:w-5/6 mx-auto py-12 ">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color5)]">
            Why Dubai Businesses Choose Us
          </h2>
          <p className="text-sm text-white/80 mt-2 max-w-2xl mx-auto">
            Trusted by local brands for measurable growth and reliable delivery.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {whyUs.map((w, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 bg-[var(--color1)]/60 border border-white/8 rounded-2xl hover:shadow-xl transition"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color5)]/10 flex items-center justify-center text-[var(--color5)]">
                {w.icon}
              </div>

              <p className="text-sm text-white/80">{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      <OurProcess />
      <WhyBigwig />
      <ServicesNavigation />
      <GetInTouch />
      <Footer />
      {/* <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} /> */}
    </div>
  );
}

export default PpcServicesInDubai;

"use client";
import Nav from "../../../../components/Nav";
import ContactForm from "../../../../components/ContactForm";
import bannerImage from "../../../../Assets/dubai.jpg";
import Footer from "../../../../components/Footer";
import seoImage from "../../../../Assets/Dubai/transformBuisness.jpg";
import {
  CheckCircle,
  BarChart,
  Users,
  Palette,
  TrendingUp,
  Layers,
} from "lucide-react";

import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
// import { useState } from "react";
// import PopupForm from "../../components/PopupForm";
import CTABanner from "../../../../components/CTABanner";
import {
  Facebook,
  Linkedin,
  Music,
  MessageCircle,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import GetInTouch from "../../../../components/GetInTouch";
import ServicesNavigation from "../../../../components/UAEServicesDirectory";

const services = [
  {
    icon: <Facebook className="text-blue-600 w-8 h-8" />,
    title: "Meta Ads (Facebook & Instagram)",
    desc: "We create scroll-stopping ad campaigns tailored to Dubai, UAE’s multicultural audience. Perfect for eCommerce, D2C, and real estate businesses.",
  },
  {
    icon: <Linkedin className="text-blue-700 w-8 h-8" />,
    title: "LinkedIn Ads",
    desc: "The UAE’s business hub demands smart B2B advertising. From sponsored content to lead-gen forms, we connect you with decision-makers across Dubai industries.",
  },
  {
    icon: <Music className="text-pink-500 w-8 h-8" />,
    title: "TikTok Ads",
    desc: "Dubai’s youth and Gen Z spend hours on TikTok. Our short-form video ads capture attention with trending, creative, and high-impact campaigns.",
  },
  {
    icon: <MessageCircle className="text-yellow-500 w-8 h-8" />,
    title: "Snapchat Ads",
    desc: "Target highly engaged, mobile-first UAE audiences with immersive video and story-based formats. Popular among younger demographics in Dubai.",
  },
  {
    icon: <Twitter className="text-sky-500 w-8 h-8" />,
    title: "Twitter (X) Ads",
    desc: "From trending hashtags to event-based campaigns, we help brands in Dubai spark conversations and generate traffic with precise interest targeting.",
  },
  {
    icon: <Youtube className="text-red-600 w-8 h-8" />,
    title: "YouTube Ads",
    desc: "Tell your brand story with skippable, non-skippable, or in-feed ads. Perfect for Dubai’s video-first consumers and businesses aiming to build awareness.",
  },
];

function SmmServicesInDubai() {
  //   const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="bg-[var(--color1)] text-white">
      <title>
        Social Media Marketing Services in Dubai, UAE | BigWig Media Digital
      </title>
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/social-media-marketing-services-in-dubai-uae"
      />
      <meta
        name="description"
        content="Boost your brand visibility with expert Social Media Marketing Services in Dubai, UAE. BigWig Media Digital helps you drive engagement, leads, and sales."
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
              Social Media Marketing Services in Dubai, UAE
            </h1>
            <h2 className="text-2xl font-semibold leading-tight">
              Engage, Influence & Convert
            </h2>
            <p className="text-lg">
              Our social media marketing services in Dubai, UAE empower brands
              to connect with their audience, create impactful campaigns, and
              drive meaningful engagement across platforms like Instagram,
              Facebook, and LinkedIn.
            </p>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <Image
              src={seoImage}
              alt="Social Media Marketing Agency in Dubai, UAE"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-[var(--color5)] ">
              Performance-Driven Social Media Ads for Dubai, UAE Businesses
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Looking for a social media marketing agency in Dubai, UAE that
              actually drives results, not just impressions? At BigWig Media
              Digital, we specialize in paid social media advertising campaigns
              that help your business grow, scale, and dominate across every
              major platform – from Instagram and TikTok to LinkedIn and
              YouTube.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              In Dubai, UAE’s fast-paced and competitive market, organic reach
              alone isn’t enough. Our data-backed strategies ensure your brand
              doesn’t just show up – it stands out.
            </p>
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto  text-gray-300 py-12 font-raleway">
        {/* Heading */}
        <h2 className="text-3xl font-semibold mb-8 text-[var(--color5)]">
          Why Paid Social Media Ads Matter for Dubai, UAE Businesses
        </h2>

        {/* Description */}
        <p className="text-base mb-5 leading-relaxed">
          With millions of active users in the UAE across Instagram, TikTok,
          LinkedIn, and Snapchat, social media ads are the fastest way to reach
          your ideal audience. In 2025, algorithm changes and content overload
          make paid advertising the most reliable way to:
        </p>

        {/* Bullet Points */}
        <div className=" space-y-3 text-base">
          <div className="flex items-start gap-3">
            <span className="text-[var(--color5)] text-xl">●</span>
            <p>Target audiences by location, interests, and behavior.</p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-[var(--color5)] text-xl">●</span>
            <p>Reach both local UAE customers and international audiences.</p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-[var(--color5)] text-xl">●</span>
            <p>Generate leads, traffic, sales, and brand visibility.</p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-[var(--color5)] text-xl">●</span>
            <p>
              Compete effectively in industries like real estate, e-commerce,
              hospitality, education, and finance.
            </p>
          </div>
        </div>

        {/* Closing Note */}
        <p className="text-base mt-5 leading-relaxed">
          Our approach is built on precision targeting, high-converting
          creatives, and continuous optimization – ensuring every dirham spent
          delivers measurable ROI.
        </p>
      </section>

      <section className="py-12 w-11/12 md:w-5/6 mx-auto text-white">
        {/* HEADING */}
        <h2 className="text-3xl text-[var(--color5)] font-semibold text-center mb-12">
          Our Paid Social Media Advertising Services in Dubai, UAE
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="
          relative p-7 rounded-2xl overflow-hidden group
          bg-[var(--color1)]/70 border border-white/10
          shadow-[0_0_25px_rgba(0,0,0,0.45)]
          hover:shadow-[0_0_40px_rgba(167,235,242,0.3)]
          hover:border-[var(--color5)]
          transition-all duration-500
          clip-path-[polygon(12%_0,100%_0,100%_80%,88%_100%,0_100%,0_20%)]
        "
            >
              {/* MATRIX HOLOGRAM BACKGROUND */}
              <div
                className="
            absolute inset-0 opacity-[0.18]
            bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')]
            bg-cover bg-center mix-blend-screen pointer-events-none
          "
              ></div>

              {/* GLOW BORDER ANIMATION */}
              <div
                className="
            absolute inset-0 rounded-2xl border border-transparent 
            group-hover:border-[var(--color5)] 
            transition-all duration-500
          "
              ></div>

              {/* CONTENT */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  {/* ICON WRAPPER */}
                  <div
                    className="
                w-12 h-12 flex items-center justify-center rounded-xl
                bg-[var(--color5)]/10 border border-[var(--color5)]/40
                shadow-[0_0_15px_rgba(167,235,242,0.25)]
              "
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-[var(--color5)] tracking-wide">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12 font-raleway text-gray-200">
        {/* GRID WRAPPER */}
        <div className="grid lg:grid-cols-2 gap-14">
          {/* LEFT SIDE — WHY CHOOSE US */}
          <div
            className="
        bg-[var(--color1)]/70 border border-white/10 rounded-2xl p-10 shadow-[0_0_25px_rgba(0,0,0,0.45)]
        relative overflow-hidden backdrop-blur-xl
      "
          >
            {/* Matrix neon overlay */}
            <div className="absolute inset-0 opacity-[0.18] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen pointer-events-none"></div>

            {/* Glow border animation */}
            <div className="absolute inset-0 rounded-2xl border border-transparent hover:border-[var(--color5)] transition-all duration-500"></div>

            <h3 className="text-2xl font-semibold mb-6 text-[var(--color5)]">
              Why Brands Trust Us
            </h3>

            <div className="space-y-8 relative z-10">
              {[
                {
                  icon: <Users className="w-8 h-8 text-[var(--color5)]" />,
                  title: "Platform-Specific Expertise",
                  desc: "We tailor strategies for Instagram, TikTok, LinkedIn & YouTube.",
                },
                {
                  icon: <Palette className="w-8 h-8 text-[var(--color5)]" />,
                  title: "Creative + Strategy",
                  desc: "Compelling visuals + English/Arabic copy crafted for conversions.",
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-[var(--color5)]" />,
                  title: "Conversion-Focused Funnels",
                  desc: "Awareness → Retargeting → Purchase funnels optimized for ROAS.",
                },
                {
                  icon: <BarChart className="w-8 h-8 text-[var(--color5)]" />,
                  title: "Transparent Reporting",
                  desc: "Weekly CPC, CTR, ROAS, CPL reports without jargon.",
                },
                {
                  icon: <Layers className="w-8 h-8 text-[var(--color5)]" />,
                  title: "Scalable Budgets",
                  desc: "Whether AED 5,000 or AED 500,000 — we maximize your ROI.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  {item.icon}
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE — WHAT YOU GET */}
          <div
            className="
        bg-[var(--color1)]/70 border border-[var(--color5)]/20 rounded-2xl p-10 
        shadow-[0_0_30px_rgba(167,235,242,0.18)] relative overflow-hidden backdrop-blur-xl
      "
          >
            {/* Hologram scan line */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-0 h-[2px] inset-x-0 bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent animate-scan"></div>
            </div>

            {/* Matrix overlay */}
            <div className="absolute inset-0 opacity-[0.16] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover mix-blend-screen"></div>

            <h3 className="text-2xl font-semibold mb-8 text-[var(--color5)] relative z-10">
              What You Get with Our Social Ads
            </h3>

            <div className="space-y-6 text-gray-300 relative z-10">
              {[
                "End-to-end campaign strategy and funnel design",
                "Audience research tailored to Dubai, UAE markets",
                "Ad creatives (copy + visuals) in English & Arabic",
                "A/B testing for maximum performance",
                "Pixel setup & conversion tracking",
                "Weekly performance reports",
                "Scalable campaigns that grow with your business",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[var(--color5)] mt-1" />
                  <p className="leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
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

export default SmmServicesInDubai;

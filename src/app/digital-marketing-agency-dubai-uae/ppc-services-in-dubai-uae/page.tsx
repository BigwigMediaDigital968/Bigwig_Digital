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
} from "lucide-react";
import Image from "next/image";

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
    icon: <Target className="w-8 h-8 text-[var(--primary-color)]" />,
    text: "Understand Dubai’s competitive PPC landscape.",
  },
  {
    icon: <Languages className="w-8 h-8 text-[var(--primary-color)]" />,
    text: "Deliver campaigns in both English and Arabic.",
  },
  {
    icon: <Globe2 className="w-8 h-8 text-[var(--primary-color)]" />,
    text: "Run ads that capture both local UAE audiences and international markets.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-[var(--primary-color)]" />,
    text: "Focus on long-term ROI, not just clicks.",
  },
];

function PpcServicesInDubai() {
  //   const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="bg-white text-black font-raleway">
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

      <section className="w-11/12 md:w-5/6 mx-auto py-12 bg-white">
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              Data-Driven PPC Campaigns That Deliver Instant Results
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              At <strong>BigWig Media Digital</strong>, we take pride in being
              one of the top PPC companies in Dubai, UAE, known for delivering
              measurable results with cost-effective campaigns. Our team of
              Google Ads-certified PPC experts helps businesses in the UAE stay
              ahead of the competition with high-performance and ROI-focused PPC
              services.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              We specialize in:
            </p>

            {/* Icon List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <Search className="text-[var(--primary-color)] w-6 h-6" />
                <span>Google Search Ads</span>
              </div>
              <div className="flex items-center gap-3">
                <ImageIcon className="text-[var(--primary-color)] w-6 h-6" />
                <span>Display & Banner Ads</span>
              </div>
              <div className="flex items-center gap-3">
                <MonitorPlay className="text-[var(--primary-color)] w-6 h-6" />
                <span>YouTube Video Ads</span>
              </div>
              <div className="flex items-center gap-3">
                <Smartphone className="text-[var(--primary-color)] w-6 h-6" />
                <span>App Installation Ads</span>
              </div>
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-[var(--primary-color)] w-6 h-6" />
                <span>Shopping Ads (E-commerce PPC)</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="text-[var(--primary-color)] w-6 h-6" />
                <span>Lead Generation Ads</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="text-[var(--primary-color)] w-6 h-6" />
                <span>Remarketing Campaigns</span>
              </div>
              <div className="flex items-center gap-3">
                <Layout className="text-[var(--primary-color)] w-6 h-6" />
                <span>
                  Landing Page Optimization & Quality Score Improvement
                </span>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              With years of experience running successful PPC campaigns for real
              estate, hospitality, education, healthcare, e-commerce, and
              corporate brands in Dubai, UAE, we know how to maximize every
              dirham you spend.
            </p>
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12 ">
        <div className=" text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Why Choose Us as Your{" "}
            <span className="text-[var(--primary-color)]">
              PPC Company in Dubai, UAE?
            </span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <item.icon className="w-10 h-10 text-[var(--primary-color)] mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12 space-y-20">
        {/* Services */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Our{" "}
            <span className="text-[var(--primary-color)]">PPC Advertising</span>{" "}
            Services in Dubai, UAE
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                {/* Icon Circle */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--primary-color)] flex items-center justify-center shadow-md">
                  {item.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Benefits of{" "}
            <span className="text-[var(--primary-color)]">PPC Services</span>{" "}
            for Dubai, UAE Businesses
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-8 h-8 " />,
                title: "Achieve Goals Fast",
                desc: "From sales to leads, PPC delivers measurable results instantly.",
              },
              {
                icon: <Eye className="w-8 h-8 " />,
                title: "Immediate Visibility",
                desc: "Unlike SEO, your brand is on Google’s first page immediately.",
              },
              {
                icon: <BarChart2 className="w-8 h-8 " />,
                title: "Measurable ROI",
                desc: "Track every click, conversion, and dirham with 100% transparency.",
              },
              {
                icon: <Target className="w-8 h-8 " />,
                title: "Targeted Audience",
                desc: "Reach by location, age, interest, and buying behavior.",
              },
              {
                icon: <Award className="w-8 h-8 " />,
                title: "Boost Recognition",
                desc: "Stay visible on Google, YouTube & Social Media.",
              },
              {
                icon: <DollarSign className="w-8 h-8 " />,
                title: "Flexible Budgeting",
                desc: "Control daily spend, scale up or down anytime.",
              },
              {
                icon: <Users className="w-8 h-8 " />,
                title: "More Conversions",
                desc: "Drive qualified traffic that turns into real customers.",
              },
              {
                icon: <PhoneCall className="w-8 h-8 " />,
                title: "Local Impact",
                desc: "Increase store visits & calls with location-based ads.",
              },
              {
                icon: <Layers className="w-8 h-8 " />,
                title: "Better Funnel",
                desc: "Retarget past visitors, optimize landing pages, boost sales.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl p-6 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition relative border border-gray-100"
              >
                {/* Icon Circle */}
                <div className=" text-[var(--primary-color)]  mb-2">
                  {item.icon}
                </div>

                {/* Title */}
                <h4 className="font-bold text-lg mb-2 text-gray-900">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Us */}
        <div className="py-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why Dubai Businesses{" "}
            <span className="text-[var(--primary-color)]">
              Trust BigWig Media Digital
            </span>
          </h3>

          <div className="grid md:grid-cols-4 gap-8">
            {whyUs.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition-shadow"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-gray-100">
                  {item.icon}
                </div>
                <p className="text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OurProcess />
      <WhyBigwig />
      <CTABanner
        title="With BigWig Media Digital as your PPC partner, you don’t just get traffic—you get conversions, sales, and business growth."
        buttonText="Get Started Today"
      />
      <Footer />
      {/* <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} /> */}
    </div>
  );
}

export default PpcServicesInDubai;

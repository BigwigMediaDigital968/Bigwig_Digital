"use client";

import Nav from "../../../../components/Nav";
import hero from "../../../../Assets/Services hero/SMO.jpg";
import smo from "../../../../Assets/services/4.jpg";
import { TypeAnimation } from "react-type-animation";
import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
import Footer from "../../../../components/Footer";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa6";
import Slider from "react-slick";
import ContactForm from "../../../../components/ContactForm";
import Image from "next/image";
import ButtonFill from "../../../../components/Button";
import PopupForm from "../../../../components/PopupForm";
import GetInTouch from "../../../../components/GetInTouch";
import React, { SetStateAction, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import WhatsAppCtaButton from "../../../../components/Buttons/WhatsAppCtaButton";
import { WorkShowcase } from "./WorkShowcase";

import { motion } from 'framer-motion';
import ModernSmoProcess from "./ModernSmoProcess";
import SmoBenefitsSection from "./SmoBenefitsSection";

const socialPlatforms = [
  { name: "Facebook", icon: <FaFacebookF color="#1877F2" /> },
  { name: "Instagram", icon: <FaInstagram color="#E4405F" /> },
  { name: "LinkedIn", icon: <FaLinkedinIn color="#0A66C2" /> },
  { name: "Twitter", icon: <FaXTwitter color="#000000" /> },
  { name: "Pinterest", icon: <FaPinterestP color="#E60023" /> },
  { name: "YouTube", icon: <FaYoutube color="#FF0000" /> },
];

const processItems = [
  {
    title: "Profile Creation & Optimization",
    content:
      "We optimize your social media profiles with keyword-rich descriptions, visually appealing graphics, call-to-actions, and branded elements to build a strong digital identity.",
  },
  {
    title: "Engaging Content & Creative Graphics",
    content:
      "Our creative team produces high-quality posts, videos, infographics, carousels, and stories that resonate with your audience and drive continuous engagement.",
  },
  {
    title: "Target Audience Refinement",
    content:
      "We help you attract users who are genuinely interested in your products or services, ensuring maximum relevance and conversion potential.",
  },
  {
    title: "Audience Interaction & Engagement",
    content:
      "We manage comments, messages, and interactions in real time, helping your brand stay active, responsive, and customer-friendly.",
  },
  {
    title: "Analytics & Performance Reporting",
    content:
      "From reach and impressions to follower growth and engagement metrics, our detailed reports help you understand the impact of your SMO campaigns.",
  },
];

const benefits = [
  {
    title: "Enhanced Brand Visibility Across Social Platforms",
    content:
      "High-quality and consistent social media optimization ensures your brand becomes more visible and memorable. With strategic content and profile optimization, your business appears frequently in search results, trending categories, and platform recommendations.",
  },
  {
    title: "Higher Engagement & Stronger Customer Relationships",
    content:
      "Through professional Social Media Optimization Services in Delhi, you can create meaningful interactions with your audience. Engaging posts, quick responses, and community management help build trust and long-term customer loyalty.",
  },
  {
    title: "Increase in Targeted Traffic & Quality Leads",
    content:
      "SMO helps drive highly relevant traffic to your website. Because users actively engage with your content, the chances of generating high-quality, conversion-ready leads increase significantly.",
  },
  {
    title: "Improved Brand Reputation & Online Credibility",
    content:
      "Positive engagement, active posting, and reputation management make your brand appear reliable and authoritative. With well-managed SMO Services in Delhi, your online reputation improves across platforms.",
  },
  {
    title: "Better Search Engine Rankings (Indirect SEO Benefits)",
    content:
      "Optimized social profiles and strong engagement send positive social signals to search engines. This contributes to better rankings and enhances your overall digital presence.",
  },
  {
    title: "Cost-Effective Marketing With High ROI",
    content:
      "Compared to paid advertising, Social Media Services in Delhi offer long-term value at a minimal cost. With the right strategy, you can achieve measurable growth without overspending.",
  },
  {
    title: "Insightful Analytics & Data-Driven Decisions",
    content:
      "Performance reports and analytics help you understand user behavior, content performance, and audience demographics. These insights help refine your strategy for continuous improvement.",
  },
  {
    title: "Competitive Advantage in Your Industry",
    content:
      "With consistent and optimized social media efforts, your brand stays ahead of competitors who are either inactive or not leveraging SMO effectively.",
  },
  {
    title: "Increased Followers & Community Growth",
    content:
      "Professional SMO Services in Delhi ensure steady follower growth through strategic content, trends, and engagement tactics. A larger community naturally amplifies your brand reach.",
  },
  {
    title: "Strengthened Brand Authority & Trust",
    content:
      "Publishing valuable content and maintaining an active presence helps position your brand as a leader in your niche. High authority translates into greater customer confidence.",
  },
];

const faqs = [
  {
    q: "What exactly is included in your SMO services?",
    a: "Our SMO services cover everything your brand needs to build a strong and engaging online presence, including profile setup and optimization, creative content production, post scheduling, hashtag strategy, audience engagement, trend analysis, brand monitoring, reputation management, and detailed performance reporting. We deliver everything as one connected strategy rather than outsourcing individual tasks.",
  },
  {
    q: "Which social media platforms do you actually work on?",
    a: "We manage Facebook, Instagram, LinkedIn, Twitter (X), Pinterest, and YouTube. Our team recommends the platforms that best match your target audience, ensuring your brand focuses on the channels where your customers are most active.",
  },
  {
    q: "How do you decide what content to create?",
    a: "We begin with audience research and competitor analysis, identify trending content formats, and create graphics, captions, reels, and stories that align with your brand voice. Every piece of content is designed to strengthen your brand identity and generate meaningful engagement.",
  },
  {
    q: "How do you actually engage with our audience, not just post at them?",
    a: "Our team actively manages your social media communities by responding to comments and messages, participating in relevant conversations, and using platform-specific features like polls, reels, and trending audio to encourage genuine audience interaction.",
  },
  {
    q: "Will your approach change based on how big or small our company is?",
    a: "Yes. We customize every SMO strategy based on your business size, goals, industry, and budget. Whether you're a startup, SME, or enterprise, we create a tailored social media plan instead of using a one-size-fits-all approach.",
  },
  {
    q: "Do you actually study our competitors, or is that just a line in the pitch?",
    a: "Competitor analysis is an ongoing part of our SMO process. We evaluate competitors' content strategies, engagement levels, hashtags, posting frequency, and audience behavior to identify opportunities that help your brand stand out.",
  },
  {
    q: "How will we know if it's actually working?",
    a: "We provide transparent performance reports that track key metrics such as follower growth, reach, impressions, engagement rate, click-through rate, content performance, and community interactions. Weekly or monthly reports keep you informed about the progress and results of your social media campaigns.",
  },
];

function SocialMediaOptimization() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: SetStateAction<number | null>) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
    pauseOnHover: false,
  };

  const ServiceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Social Media Optimization (SMO) Service",
      name: "SMO Service in Delhi That Actually Grows Your Brand",
      description:
        "Tired of posting into silence? Delhi's results-driven SMO agency turns dead profiles into revenue. See real client numbers — get your free audit!",
      url: "https://www.bigwigmediadigital.com/services/social-media-optimization",
      provider: {
        "@type": "Organization",
        name: "Bigwig Media Digital",
        url: "https://www.bigwigmediadigital.com",
        logo: "https://www.bigwigmediadigital.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBigwig_logo__final.f181d8a8.png&w=828&q=75",
        image: "https://www.bigwigmediadigital.com/assets/office-team.jpg",
        telephone: "+91-9685892813",
        email: "support@bigwigmediadigital.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Plot # 2, Sanjay Nagar, Gulabi Bagh",
          addressLocality: "Delhi",
          addressRegion: "Delhi",
          postalCode: "110007",
          addressCountry: "IN",
        },
        sameAs: [
          "https://www.facebook.com/bigwigmediadigital",
          "https://www.instagram.com/bigwigmediadigital",
          "https://www.linkedin.com/company/bigwigmediadigital",
          "https://twitter.com/bigwigmediadigital",
          "https://www.youtube.com/@bigwigmediadigital",
        ],
      },
      areaServed: [
        {
          "@type": "City",
          name: "Delhi",
        },
        {
          "@type": "AdministrativeArea",
          name: "Delhi NCR",
        },
        {
          "@type": "City",
          name: "Gurugram",
        },
        {
          "@type": "City",
          name: "Noida",
        },
        {
          "@type": "City",
          name: "Faridabad",
        },
        {
          "@type": "City",
          name: "Ghaziabad",
        },
      ],
      audience: {
        "@type": "Audience",
        audienceType:
          "Startups, SMEs, and Enterprises in Delhi and Delhi-NCR seeking social media growth",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        areaServed: "Delhi, Delhi-NCR",
        url: "https://www.bigwigmediadigital.com/services/social-media-optimization",
        description:
          "Custom SMO packages priced according to business size, platforms, and scope. Contact for a tailored quote.",
      },
    }

  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

  return (
    <>
      <title>
        SMO Service in Delhi That Actually Grows Your Brand
      </title>
      <meta
        name="title"
        content="SMO Service in Delhi That Actually Grows Your Brand"
      />
      <meta
        name="description"
        content="Tired of posting into silence? Delhi's results-driven SMO agency turns dead profiles into revenue. See real client numbers - get your free audit!"
      />
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/social-media-optimization"
      />

      {/* <!-- Open Graph Meta Tags --> */}
      <meta
        property="og:title"
        content="SMO Service in Delhi That Actually Grows Your Brand"
      />
      <meta
        property="og:description"
        content="Tired of posting into silence? Delhi's results-driven SMO agency turns dead profiles into revenue. See real client numbers - get your free audit!"
      />
      <meta
        property="og:image"
        content="https://www.bigwigmediadigital.com/_next/image?url=%2F_next%2Fstatic%2Fmedi
a%2FBigwig_logo__final.f181d8a8.png&w=1920&q=75"
      />
      <meta
        property="og:url"
        content="https://www.bigwigmediadigital.com/services/social-media-optimization"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Bigwig Media Digital" />
      <meta property="og:locale" content="en_IN" />
      <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(ServiceSchema) }}
  />
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(faqSchema),
  }}
/>
    <div className="bg-[var(--color1)]">

      <Nav />
      <section
        className="relative bg-cover bg-center bg-no-repeat py-10 px-4"
        style={{ backgroundImage: "url('/smm-hero.png')" }}
      >
        <div className="bg-black/60 absolute inset-0 z-0" />

        <div className="relative z-10 w-5/6 mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left Content - 2/3 */}
          <div className="w-full md:w-2/3 text-white space-y-6 pr-0 ">
            <h1 className="text-3xl md:text-4xl font-semibold text-[var(--color5)] leading-snug">
              SMO Service in Delhi That Turns Silent Followers Into Paying Customers
            </h1>

            <p className="text-base md:text-lg max-w-xl text-white/90 text-justify">
              Most brands post consistently and still see nothing move no leads, no real engagement, just numbers that don't translate into revenue. We fix that specific problem: we don't just manage your profiles; we re-engineer them to convert. In today's fast-paced digital world, the brands that grow are the ones that stay active, relevant, and genuinely engaging and we've spent over a decade figuring out exactly what that takes across every major platform.
            </p>

            <div className="flex gap-4">
              <ButtonFill
                onClick={() => setIsPopupOpen(true)}
                text="Contact Us"
              />
              <WhatsAppCtaButton message="Hi! I'm interested in your social media marketing services." />
            </div>
          </div>

          {/* Right Form - 1/3 */}
          <ContactForm singleService="Social Media Optimization" />
        </div>
      </section>

      <div className="w-11/12 md:w-5/6 mx-auto py-12 text-gray-900 space-y-10">
        {/* Section 3 - Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)]">
              The Social Media Optimization Company in Delhi Built on Results, Not Promises
            </h2>
            <p className="text-white leading-relaxed text-justify">
              Bigwig Media Digital has spent more than a decade as a social media service in Delhi, and in that time we've learned the difference between agencies that post content and agencies that build growth engines. We're the second kind. Our comprehensive SMO services connect your brand with the audience that actually buys from you not just an audience that likes your posts and scrolls on.
            </p>

            <p className="text-white leading-relaxed text-justify">
              As a social media service agency in Delhi, our certified professionals combine proven frameworks, original creative, and continuous data analysis to move three specific numbers: visibility, engagement, and qualified leads. Nothing we do is guesswork every content decision traces back to what's already working for your audience, and every underperforming post gets diagnosed, not ignored.
            </p>
          </div>

          {/* Right */}
          <div>
            <Image
              src={smo}
              alt="Social Media Optimization Services "
              className="w-full h-[50vh] rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <WorkShowcase />

      </div>

      <section className="py-12 relative overflow-hidden">
        {/* Heading */}
        <div className="w-11/12 md:w-5/6 mx-auto mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] tracking-wide">
            5+ Years, Real Clients, Numbers You Can Verify
          </h2>
        </div>

        {/* Intro Text */}
        <p className="w-11/12 md:w-5/6 mx-auto text-gray-200 text-base md:text-lg leading-relaxed mb-10">
          We don't ask you to take our word for it - here's what more than a decade of running SMO campaigns in Delhi has actually produced for clients:
        </p>

        {/* Stats Grid */}
        <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {[
            { result: "Increase in overall engagement", range: "2X to 6X" },
            { result: "Growth in qualified leads", range: "50% to 400%" },
            { result: "Boost in new followers", range: "100% to 1800%" },
            { result: "Improvement in brand visibility", range: "150% to 900%" },
            { result: "Enhancement in social reach & impressions", range: (<>Significant, <br /> campaign-dependent</>) },
          ].map((item, index) => (
            <div
              key={index}
              className="
    relative p-6 rounded-2xl backdrop-blur-xl bg-white/5 
    border border-white/10 
    shadow-[0_0_25px_rgba(0,255,255,0.08)]
    hover:border-[var(--color5)]/60
    hover:shadow-[0_0_40px_rgba(0,255,255,0.2)]
    transition-all duration-500 ease-out
    overflow-hidden group
    flex flex-col justify-between min-h-[160px]
    cursor-default
  "
            >
              {/* Scan Lines Loop Effect */}
              

              {/* Card Content Structure */}
              <div className="relative z-10 flex flex-col h-full justify-between items-start w-full">
                <div className="w-full">
                  {/* Metrics Range Value */}
                  <h4 className="text-2xl sm:text-3xl font-black tracking-tight bg-gradient-to-r from-white via-slate-100 to-[var(--color5)] bg-clip-text text-transparent group-hover:from-[var(--color5)] group-hover:to-cyan-300 transition-all duration-500">
                    {item.range}
                  </h4>

                  {/* Decorative Label Divider */}
                  <div className="w-8 h-[2px] bg-[var(--color5)]/30 group-hover:w-full transition-all duration-500 my-3" />
                </div>

                {/* Metric Context/Result Detail */}
                <p className="text-slate-300 text-xs sm:text-sm font-medium tracking-wide leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {item.result}
                </p>
              </div>

              {/* Advanced Radial Inner Border Glow */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[var(--color5)]/40 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Closing Paragraph */}
        <p className="w-11/12 md:w-5/6 mx-auto text-gray-300 text-base md:text-lg leading-relaxed mt-10">
          These ranges exist because every business starts from a different baseline - a brand with zero social presence sees a very different growth curve than one that's already active but underperforming. As a trusted social media optimization company in Delhi, we'd rather show you a realistic range backed by actual reviews than a single inflated number designed to impress.
        </p>

        {/* Animation */}
        <style>{`
    @keyframes smoScan {
      0% { transform: translateX(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }
    .animate-smoScan {
      animation: smoScan 4s linear infinite;
    }
  `}</style>
      </section>

      {/* <section className="py-12  relative overflow-hidden">
        <div className=" w-11/12 md:w-5/6 mx-auto mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] tracking-wide">
            10+ Years, Real Clients, Numbers You Can Verify
          </h2>
        </div>

        <p className="w-11/12 md:w-5/6 mx-auto text-gray-200 text-base md:text-lg leading-relaxed mb-10">
          With more than a decade of industry experience, our team has
          successfully helped clients achieve:
        </p>

        <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {[
            "2X to 6X increase in overall engagement",
            "50% to 400% growth in qualified leads",
            "100% to 1800% boost in new followers",
            "150% to 900% improvement in brand visibility",
            "Significant enhancements in social reach & impressions",
          ].map((stat, index) => (
            <div
              key={index}
              className="
          relative p-6 rounded-2xl backdrop-blur-xl bg-white/5 
          border border-white/10 
          shadow-[0_0_25px_rgba(0,255,255,0.15)]
          hover:border-[var(--color5)]
          hover:shadow-[0_0_35px_var(--color5)]
          transition-all duration-300 
          overflow-hidden group
        "
            >
              <div className="absolute inset-0 opacity-40 pointer-events-none">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-0 w-full h-[2px]
                bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
              "
                  ></div>
                ))}
              </div>

              <p className="text-gray-200 text-base font-medium relative z-10">
                {stat}
              </p>

              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[var(--color5)] transition-all"></div>
            </div>
          ))}
        </div>

        <p className="w-11/12 md:w-5/6 mx-auto  text-gray-300 text-base md:text-lg leading-relaxed mt-10">
          Our consistent results and client satisfaction are backed by authentic
          reviews across platforms like Google. As a trusted Social Media
          Optimization Company in Delhi, delivering measurable growth and high
          ROI remains at the core of what we do.
        </p>

        <style>{`
    @keyframes smoScan {
      0% { transform: translateX(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }
    .animate-smoScan {
      animation: smoScan 4s linear infinite;
    }
  `}</style>
      </section> */}

      <section className="py-12 w-11/12 md:w-5/6 mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-4">
          One Team, Every Platform Where Your Customers Actually Are
        </h2>

        <p className="text-gray-300 mb-10">
          Your audience isn't spread evenly across every platform — and neither is your effort, once we know where they are. Our SMO services cover Facebook, Instagram, LinkedIn, Twitter (X), Pinterest, and YouTube, each managed with platform-specific content and posting strategy rather than one post copy-pasted six times. A LinkedIn post built for decision-makers looks nothing like an Instagram reel built for discovery — and treating them the same is one of the most common reasons brands plateau.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
          {socialPlatforms.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 p-4 rounded-xl 
                   bg-white/5 backdrop-blur-sm border border-white/10 
                   hover:border-[var(--color5)] transition-all 
                   hover:shadow-[0_0_20px_var(--color5)]"
            >
              <div className="text-3xl">{item.icon}</div>
              <span className="text-gray-200 text-sm font-medium">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </section>


      <ModernSmoProcess processItems={processItems} setIsPopupOpen={setIsPopupOpen} />
 
      <SmoBenefitsSection benefits={benefits} setIsPopupOpen={setIsPopupOpen} settings={settings} />

      <section className="py-12 relative overflow-hidden">
        {/* Outer Container */}
        <div
          className="
      relative rounded-3xl p-8 md:p-12
      backdrop-blur-2xl bg-white/5
      border border-[var(--color5)]/30
      shadow-[0_0_35px_rgba(0,255,255,0.15)]
      hover:shadow-[0_0_25px_var(--color5)]
      transition-all duration-700
      overflow-hidden w-11/12 md:w-5/6 mx-auto
    "
        >
          {/* Shine Line */}
          <div
            className="
        absolute -top-full left-0 w-full h-full 
        bg-gradient-to-r from-transparent via-[var(--color5)]/20 to-transparent 
        rotate-45 opacity-70
        animate-[shineSlide_5s_ease-in-out_infinite]
      "
          ></div>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] tracking-wide mb-6">
            The SMO Agency in Delhi Businesses Actually Stick With
          </h2>

          {/* Intro Paragraph */}
          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-8 relative z-10">
            Plenty of agencies win a first project. Fewer keep clients for years. Our reviews and portfolio reflect the second kind of relationship - built on results clients can verify and a process transparent enough to survive scrutiny. Clients across India work with us because we focus on delivering long-term value, whether the goal is to:
          </p>

          {/* Two-Column List */}
          <div
            className="
        grid grid-cols-1 md:grid-cols-2 
        gap-y-4 gap-x-10 
        relative z-10
      "
          >
            {[
              "Increase your social media followers",
              "Improve brand visibility",
              "Strengthen online reputation",
              "Generate more leads",
              "Boost website traffic",
              "Build an active online community",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                {/* Bullet */}
                <span className="text-[var(--color5)] text-xl leading-6">
                  •
                </span>

                {/* Text */}
                <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Paragraph */}
          <p className="text-gray-200 text-base md:text-lg leading-relaxed mt-8 relative z-10">
           Every strategy is personalized to your industry, goals, and target audience — because a strategy built for a real estate brand in South Delhi has almost nothing in common with one built for a D2C skincare label, and pretending otherwise is how agencies produce forgettable results.
          </p>
        </div>

        {/* Shine Animation */}
        <style>
          {`
      @keyframes shineSlide {
        0% { transform: translateY(-150%); }
        100% { transform: translateY(150%); }
      }
    `}
        </style>
      </section>

      <section className="py-12 relative overflow-hidden">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-xl md:text-3xl font-semibold text-[var(--color5)] tracking-wide">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Boxes */}
        <div className="space-y-6 w-11/12 md:w-5/6 mx-auto relative z-10">
          {faqs.map((item, index) => (
            <div
              key={index}
              onClick={() => toggleItem(index)}
              className="
              p-6 rounded-2xl backdrop-blur-xl bg-white/5 
              border border-white/10 transition-all duration-300
              shadow-[0_0_20px_rgba(0,255,255,0.1)]
              hover:border-[var(--color5)]
              hover:shadow-[0_0_30px_var(--color5)]
              cursor-pointer relative overflow-hidden
            "
            >
              {/* Scan Lines */}
              <div className="absolute inset-0 opacity-30 pointer-events-none">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-0 w-full h-[2px]
                    bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
                  "
                  ></div>
                ))}
              </div>

              {/* Question Row */}
              <div className="flex justify-between items-center relative z-10">
                <h3 className="text-lg md:text-xl font-semibold text-[var(--color5)]">
                  {item.q}
                </h3>

                <span className="text-[var(--color5)] text-2xl font-bold transition-all">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              {/* Answer */}
              <div
                className={`transition-all duration-300 text-gray-200 overflow-hidden relative z-10 ${openIndex === index
                  ? "max-h-96 mt-4 opacity-100"
                  : "max-h-0 opacity-0"
                  }`}
              >
                <p className="leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10 flex justify-center gap-4">
          <ButtonFill
            text="Start Your Project Today"
            onClick={() => setIsPopupOpen(true)}
          />
          <WhatsAppCtaButton text="Let's Discuss Your Project" message="Hi! I'm interested in your social media marketing services." />

        </div>

        {/* Animation */}
        <style>
          {`
          @keyframes cardScan {
            0% { transform: translateX(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateX(100%); opacity: 0; }
          }
          .animate-cardScan {
            animation: cardScan 5s linear infinite;
          }
        `}
        </style>
      </section>

      {/* <OurProcess /> */}
      {/* <WhyBigwig /> */}

      <section className="py-12 relative overflow-hidden">
        {/* Matrix glow background */}
        <div className="absolute inset-0 opacity-[0.20] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen pointer-events-none"></div>

        <div className="w-11/12 md:w-5/6 mx-auto space-y-14 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color5)] text-center tracking-wider drop-shadow-[0_0_10px_var(--color5)]">
            Our Other Services
          </h2>

          {/* TABLE WRAPPER */}
          <div
            className="
        rounded-2xl 
        overflow-hidden 
        backdrop-blur-xl bg-white/5 
        border border-white/10 
        shadow-[0_0_30px_rgba(0,255,255,0.15)] 
        relative
      "
          >
            {/* Scan Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent animate-scan"></div>

            <table className="min-w-full text-sm text-gray-200 relative z-10">
              <tbody>
                {[
                  [
                    "Search Engine Optimization",
                    "Social Media Marketing",
                    "Performance Marketing",
                  ],
                  [
                    "Content Marketing",
                    "Website Designing & Development",
                    "Email Marketing",
                  ],
                  [
                    "Social Media Optimization",
                    "Graphic Designing & Video Editing",
                    "Influencer Marketing",
                  ],
                  ["Online Reputation Management", "", "Affiliate Marketing"],
                ].map((row, rowIndex) => (
                  <tr key={rowIndex} className="divide-x divide-white/10">
                    {row.map((cell, colIndex) => (
                      <td
                        key={colIndex}
                        className="
                    h-20 
                    border-b border-white/10 
                    relative group overflow-hidden
                  "
                      >
                        {cell && (
                          <a
                            href={`/services/${cell
                              .toLowerCase()
                              .replace(/ /g, "-")
                              .replace(/\&/g, "and")}`}
                            target="_blank"
                            className="
                        flex items-center justify-center 
                        w-full h-full px-4 text-center 
                        font-semibold
                        text-gray-200
                        transition-all duration-300
                        hover:text-[var(--color5)]
                      "
                          >
                            {/* Neon card effect */}
                            <span
                              className="
                          absolute inset-0 
                          rounded-xl 
                          border border-transparent
                          group-hover:border-[var(--color5)]
                          group-hover:shadow-[0_0_20px_var(--color5)]
                          transition-all duration-300
                        "
                            ></span>

                            <span className="relative z-10">{cell}</span>
                          </a>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Animations */}
        <style>{`
    @keyframes scan {
      0% { transform: translateX(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }
    .animate-scan {
      animation: scan 4s linear infinite;
    }
  `}</style>
      </section>
      <GetInTouch title={<>Your Competitors Are Already Posting. <br /> The Question Is Whether It's Working.</>}
      description="Let's build a social strategy that brings real, measurable growth to your brand - not just more content in the feed. Connect with us for a customized plan built around your business."/>
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

      <Footer />
    </div>
    </>
  );
}

export default SocialMediaOptimization;



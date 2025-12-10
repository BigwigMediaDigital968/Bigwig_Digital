"use client";
import { TypeAnimation } from "react-type-animation";
import Nav from "../../../../components/Nav";
import hero from "../../../../Assets/Services hero/Influencer_marketing.jpg";
import influencer from "../../../../Assets/services/15.jpg";
import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
import Footer from "../../../../components/Footer";
import Slider from "react-slick";
import { FaCheckCircle } from "react-icons/fa";
import ContactForm from "../../../../components/ContactForm";
import Image from "next/image";
import ButtonFill from "../../../../components/Button";
import PopupForm from "../../../../components/PopupForm";
import GetInTouch from "../../../../components/GetInTouch";
import { useState } from "react";
const impactPoints = [
  {
    title: "Launch Campaigns That Get Noticed",
    desc: "Create excitement around new product or service launches through creators who generate buzz and build anticipation organically.",
  },
  {
    title: "Boost Engagement With Relatable Content",
    desc: "Influencers craft content that blends seamlessly into social feeds, encouraging genuine interaction and deeper audience engagement.",
  },
  {
    title: "Build Long-Term Brand Recall",
    desc: "Consistent collaborations with the right voices help your brand become recognizable, trusted, and remembered.",
  },
  {
    title: "Drive Conversions From Warm Audiences",
    desc: "Tap into already-engaged communities and turn awareness into action with call-to-action driven influencer promotions.",
  },
  {
    title: "Create Reusable Content Assets",
    desc: "Influencer-generated content is perfect for repurposing across ads, websites, emails, and more,extending your campaign’s lifespan and value.",
  },
];

const benefits = [
  "Builds instant brand trust and relatability",
  "Drives high-quality traffic from engaged communities",
  "Increases social proof and online visibility",
  "Cost-effective compared to traditional celebrity endorsements",
  "Works across industries and platforms",
  "Generates authentic content for brand reuse",
  "Helps brands grow organically with long-term impact",
];
function InfluencerMarketing() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
  };

  return (
    <div className="bg-[var(--color1)]">
      <title>Influencer Marketing Solutions</title>
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/influencer-marketing"
      />
      <meta
        name="description"
        content="Connect with influencers who align with your brand to drive real engagement and sales."
      />

      <Nav />
      <section
        className="relative bg-cover bg-center bg-no-repeat py-10 px-4"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="bg-black/60 absolute inset-0 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
              Influencer Marketing Services That Connect Brands with Real
              Audiences
            </h1>

            <p
              className="text-2xl md:text-4xl font-semibold text-[var(--color5)]"
              style={{
                textShadow: "0 2px 6px rgba(0,0,0,0.6)",
                letterSpacing: "0.5px",
              }}
            >
              <span className="inline">We grow your brand with&nbsp;</span>
              <span className="inline-block whitespace-nowrap">
                <TypeAnimation
                  sequence={[
                    "real audience influence",
                    2000,
                    " authentic partnerships ",
                    2000,
                    "  influencers that connect",
                    2000,
                    "content that converts",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </p>

            <p className="text-base md:text-lg max-w-md text-white/90">
              Turn influence into impact with campaigns led by creators who know
              how to tell your story and move their audience to action.
            </p>
            <ButtonFill
              onClick={() => setIsPopupOpen(true)}
              text="Contact Us"
            />
          </div>

          {/* Right Form */}
          <ContactForm />
        </div>
      </section>

      <section className="py-12">
        <div className="w-11/12 md:w-5/6 mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color5)]">
              Influencer Marketing That Builds Real Trust
            </h2>
            <p className="text-white text-base leading-relaxed">
              In today’s attention-driven world, people trust people,not just
              ads. That’s where influencer marketing steps in as one of the most
              powerful and authentic brand-building tools. At{" "}
              <strong>
                <a href="https://www.bigwigdigital.in/"> BigWig Digital</a>
              </strong>
              , we help you harness the power of voices your audience already
              trusts. Our customized{" "}
              <strong>Influencer Marketing Services</strong> connect your brand
              with the right content creators, storytellers, and digital
              personalities to expand your reach, boost credibility, and drive
              real engagement.
            </p>
            <p className="text-white text-base leading-relaxed">
              Whether you&#39;re targeting Gen Z on Instagram, professionals on
              LinkedIn, or lifestyle enthusiasts on YouTube, we tailor campaigns
              that align with your goals and audience. From niche creators to
              high-reach influencers, every collaboration is designed to feel
              natural and perform effectively.
            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2">
            <Image
              src={influencer}
              alt="Influencer Marketing Services"
              className="w-full h-[60vh] rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      <section className=" py-12">
        <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Text Section */}
          <div className="space-y-4">
            <h2 className="text-3xl  font-semibold text-[var(--color5)]">
              Why Influencer Marketing Works
            </h2>
            <p className="text-white text-base leading-relaxed">
              Consumers are becoming smarter, and traditional ads no longer
              carry the same weight. Today, decisions are shaped by peer
              recommendations, creator reviews, and relatable content.
              Influencers bridge the gap between brands and audiences by sharing
              products and services in a way that feels personal and
              trustworthy.
            </p>
            <p className="text-white text-base leading-relaxed">
              Our approach to influencer marketing goes beyond vanity metrics.
              We focus on strategic partnerships that bring you high-intent
              traffic, quality leads, and increased brand awareness. As a
              trusted influencer marketing agency, we ensure that each campaign
              is thoughtfully designed to deliver both visibility and measurable
              ROI.
            </p>
          </div>

          {/* Right Text Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-[var(--color5)]">
              Building Brand Love Through Human Connection
            </h2>
            <p className="text-white text-base leading-relaxed">
              Influencer marketing is more than just posting content. It’s about
              building long-term emotional connections between your brand and
              the people who matter most. Whether you&#39;re launching a
              campaign or creating everyday brand moments, influencer content
              delivers unmatched authenticity and relatability.
            </p>
            <p className="text-white text-base leading-relaxed">
              We believe in pairing the right story with the right voice. As an
              influencer marketing agency{" "}
              <strong>
                <a href="https://www.bigwigdigital.in/">BigWig Digital</a>
              </strong>{" "}
              ensures your brand narrative is told by creators who not only
              align with your values but genuinely influence your target
              audience. This creates content that doesn&#39;t just engage but
              inspires action.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        {/* Cyber Background */}
        <div className="absolute inset-0 opacity-[0.18] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen pointer-events-none"></div>

        {/* Heading */}
        <h2 className="relative z-10 text-3xl md:text-4xl font-bold text-[var(--color5)] mb-10 text-center ">
          Where Influencer Marketing Creates Maximum Impact
        </h2>

        {/* Mobile Slider */}
        <div className="w-11/12 mx-auto md:hidden relative z-10">
          <Slider {...sliderSettings}>
            {impactPoints.map((item, idx) => (
              <div key={idx} className="px-3">
                <div
                  className="
              rounded-2xl p-6 
              bg-white/10 backdrop-blur-xl 
              border border-white/10
              shadow-[0_0_25px_rgba(0,255,255,0.15)]
              hover:shadow-[0_0_35px_var(--color5)]
              transition-all duration-300
              relative overflow-hidden
              min-h-[200px]
            "
                >
                  {/* Scanlines */}
                  <div className="absolute inset-0 opacity-40 pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="
                    absolute left-0 w-full h-[2px]
                    bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
                    animate-impactScan
                  "
                        style={{
                          top: `${60 + i * 45}px`,
                          animationDelay: `${i * 0.25}s`,
                        }}
                      ></div>
                    ))}
                  </div>

                  <h4 className="text-xl font-semibold mb-2 text-[var(--color5)] ">
                    {item.title}
                  </h4>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Glow Border */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent hover:border-[var(--color5)] transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Desktop Grid */}
        <div className="w-5/6 mx-auto hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
          {impactPoints.map((item, idx) => (
            <div
              key={idx}
              className="
          group relative overflow-hidden 
          rounded-2xl p-6 
          bg-white/10 backdrop-blur-xl
          border border-white/10
          shadow-[0_0_25px_rgba(0,255,255,0.15)]
          hover:shadow-[0_0_35px_var(--color5)]
          transition-all duration-300
          min-h-[200px]
        "
            >
              {/* Scanlines */}
              <div className="absolute inset-0 opacity-40 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="
                absolute left-0 w-full h-[2px]
                bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
                animate-impactScan
              "
                    style={{
                      top: `${60 + i * 40}px`,
                      animationDelay: `${i * 0.25}s`,
                    }}
                  ></div>
                ))}
              </div>

              <h4 className="text-xl font-semibold mb-2 text-[var(--color5)] ">
                {item.title}
              </h4>

              <p className="text-gray-200 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Neon border on hover */}
              <div className="absolute inset-0 border border-transparent rounded-2xl group-hover:border-[var(--color5)] transition-all"></div>
            </div>
          ))}
        </div>

        {/* Scanline Animation */}
        <style>{`
    @keyframes impactScan {
      0% { transform: translateX(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }
    .animate-impactScan {
      animation: impactScan 5s linear infinite;
    }
  `}</style>
      </section>

      <section className="py-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 opacity-[0.15] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen pointer-events-none"></div>

        <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          {/* ================= LEFT BLOCK ================= */}
          <div
            className="
        relative p-8 rounded-2xl 
        bg-white/10 backdrop-blur-xl 
        border border-white/10
        shadow-[0_0_25px_rgba(0,255,255,0.18)]
        hover:shadow-[0_0_35px_var(--color5)]
        transition-all duration-300
        overflow-hidden
      "
          >
            {/* Scan lines */}
            <div className="absolute inset-0 opacity-40 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="
              absolute left-0 w-full h-[2px]
              bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
              animate-scanInflu
            "
                  style={{
                    top: `${70 + i * 45}px`,
                    animationDelay: `${i * 0.22}s`,
                  }}
                ></div>
              ))}
            </div>

            <h2 className="text-3xl font-semibold text-[var(--color5)] ">
              Influencer Campaigns That Balance Creativity and Strategy
            </h2>

            <p className="text-gray-200 leading-relaxed mt-4">
              At{" "}
              <strong>
                <a href="https://www.bigwigdigital.in/">BigWig Digital</a>
              </strong>
              , we view every influencer collaboration as a strategic blend of
              content and connection. It’s not just about high follower counts,
              but about working with creators whose voice, tone, and audience
              align with your brand identity.
            </p>

            <p className="text-gray-200 leading-relaxed mt-4">
              We help you build campaigns that feel natural, spark conversation,
              and inspire action. Each piece of content is crafted to engage
              authentically while staying true to your marketing goals. As a
              trusted
              <strong> Influencer Marketing Agency</strong>, we deliver
              influencer content that performs without feeling like an
              advertisement.
            </p>

            {/* Neon border on hover */}
            <div className="absolute inset-0 border border-transparent rounded-2xl group-hover:border-[var(--color5)] transition-all"></div>
          </div>

          {/* ================= RIGHT BLOCK ================= */}
          <div
            className="
        relative p-8 rounded-2xl 
        bg-white/10 backdrop-blur-xl 
        border border-white/10
        shadow-[0_0_25px_rgba(0,255,255,0.18)]
        hover:shadow-[0_0_35px_var(--color5)]
        transition-all duration-300
        overflow-hidden
      "
          >
            {/* Scan lines */}
            <div className="absolute inset-0 opacity-40 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="
              absolute left-0 w-full h-[2px]
              bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
              animate-scanInflu
            "
                  style={{
                    top: `${65 + i * 45}px`,
                    animationDelay: `${i * 0.25}s`,
                  }}
                ></div>
              ))}
            </div>

            <h2 className="text-3xl font-semibold text-[var(--color5)] ">
              Scalable Solutions for Brands of All Sizes
            </h2>

            <p className="text-gray-200 leading-relaxed mt-4">
              Big corporations with enormous expenditures are no longer the only
              ones doing influencer marketing. Whether you’re a startup
              launching your first campaign or an established business expanding
              online reach — our influencer marketing solutions scale with your
              needs.
            </p>

            <p className="text-gray-200 leading-relaxed mt-4">
              We identify the right mix of creators based on engagement,
              relevance, and credibility, helping you reach the right audience
              with precision. Our focus remains on driving quality engagement,
              building trust, and delivering measurable returns with
              influencer-led strategies.
            </p>

            {/* Neon border on hover */}
            <div className="absolute inset-0 border border-transparent rounded-2xl group-hover:border-[var(--color5)] transition-all"></div>
          </div>
        </div>

        {/* Animation */}
        <style>{`
    @keyframes scanInflu {
      0% { transform: translateX(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }
    .animate-scanInflu {
      animation: scanInflu 5s linear infinite;
    }
  `}</style>
      </section>

      <section className="py-20 relative overflow-hidden">
        {/* Futuristic Background */}
        <div className="absolute inset-0 opacity-[0.15] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen pointer-events-none"></div>

        <div className="relative w-11/12 md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 z-10">
          {/* ================= LEFT BLOCK ================= */}
          <div
            className="
        relative rounded-2xl p-8 
        bg-white/10 backdrop-blur-xl 
        border border-white/10 
        shadow-[0_0_25px_rgba(0,255,255,0.2)]
        hover:shadow-[0_0_40px_var(--color5)]
        transition-all duration-300
      "
          >
            {/* Scanlines */}
            <div className="absolute inset-0 opacity-40 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="
              absolute left-0 w-full h-[2px]
              bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
              animate-influScan
            "
                  style={{
                    top: `${60 + i * 45}px`,
                    animationDelay: `${i * 0.22}s`,
                  }}
                ></div>
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color5)]  mb-6">
              Benefits of Influencer Marketing
            </h2>

            <ul className="space-y-4 relative z-10">
              {benefits.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-200 text-sm leading-relaxed"
                >
                  <FaCheckCircle className="text-[var(--color5)] text-lg mt-1 drop-shadow-[0_0_6px_var(--color5)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Glowing border hover */}
            <div className="absolute inset-0 rounded-2xl border border-transparent hover:border-[var(--color5)] transition-all"></div>
          </div>

          {/* ================= RIGHT BLOCK ================= */}
          <div
            className="
        relative rounded-2xl p-8 
        bg-white/10 backdrop-blur-xl 
        border border-white/10 
        shadow-[0_0_25px_rgba(0,255,255,0.2)]
        hover:shadow-[0_0_40px_var(--color5)]
        transition-all duration-300
      "
          >
            {/* Scanlines */}
            <div className="absolute inset-0 opacity-50 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="
              absolute left-0 w-full h-[2px]
              bg-gradient-to-r from-transparent via-white to-transparent
              animate-influScan
            "
                  style={{
                    top: `${55 + i * 45}px`,
                    animationDelay: `${i * 0.18}s`,
                  }}
                ></div>
              ))}
            </div>

            <h2 className="text-3xl font-semibold mb-4 text-[var(--color5)]">
              Why BigWig for Influencer Marketing Services
            </h2>

            <p className="text-base leading-relaxed relative text-gray-200 z-10">
              At <strong>BigWig Digital</strong>, we bring a performance-first
              mindset to every influencer campaign. From platform-specific
              strategy to relationship-building with creators, we deliver
              impactful collaborations backed by insights and creativity.
            </p>

            <p className="mt-4 text-base leading-relaxed text-gray-200 relative z-10">
              This is why brands looking for reliable and ROI-driven influencer
              marketing choose BigWig — we turn creator voices into measurable
              business success.
            </p>

            {/* Glowing border hover */}
            <div className="absolute inset-0 rounded-2xl border border-transparent hover:border-white transition-all"></div>
          </div>
        </div>

        {/* Scanline Animation */}
        <style>{`
    @keyframes influScan {
      0% { transform: translateX(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }
    .animate-influScan {
      animation: influScan 5.5s linear infinite;
    }
  `}</style>
      </section>

      <OurProcess />
      <WhyBigwig />
      <section className="py-20 relative overflow-hidden">
        {/* Matrix glow background */}
        <div className="absolute inset-0 opacity-[0.20] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen pointer-events-none"></div>

        <div className="w-11/12 md:w-5/6 mx-auto space-y-14 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color5)] text-center tracking-wider ">
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
      <GetInTouch />
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

      <Footer />
    </div>
  );
}

export default InfluencerMarketing;

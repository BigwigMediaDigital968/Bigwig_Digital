"use client";
import Nav from "../../../../components/Nav";
import ContactForm from "../../../../components/ContactForm";
import bannerImage from "../../../../Assets/dubai.jpg";
import Footer from "../../../../components/Footer";
import seoImage from "../../../../Assets/Dubai/transformBuisness.jpg";

import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
// import { useState } from "react";
import PopupForm from "../../../../components/PopupForm";
import CTABanner from "../../../../components/CTABanner";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import ButtonFill from "../../../../components/Button";
import GetInTouch from "../../../../components/GetInTouch";
import ServicesNavigation from "../../../../components/UAEServicesDirectory";

function AffiliateMarketingDubai() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="bg-[var(--color1)] ">
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
              Affiliate Marketing Services in Dubai
            </h1>
            <h2 className="text-2xl font-semibold leading-tight">
              Maximize Your Online Revenue with Powerful Affiliate Marketing
              Services in Dubai
            </h2>
            <p className="text-lg">
              In Dubai’s digital market, BigWig Media Digital drives growth
              through smart affiliate marketing. We connect you with
              top-performing partners to boost reach, sales, and ROI.
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
          {/* Left Side - Text */}
          <div>
            <h1 className="text-3xl font-bold mb-6 text-[var(--color5)]">
              Boost Your Sales with High-Performance Affiliate Marketing
              Services in Dubai
            </h1>

            <p className="text-gray-300  mb-4 leading-relaxed">
              In today’s competitive digital world, businesses in Dubai need
              smarter, performance-driven strategies to grow — not just
              traditional marketing. That’s where{" "}
              <strong>BigWig Media Digital</strong> comes in with our expert{" "}
              <strong>Affiliate Marketing Services in Dubai</strong>.
            </p>

            <p className="text-gray-300  mb-4 leading-relaxed">
              We help brands build, manage, and scale affiliate programs that
              deliver real, measurable results. From connecting you with
              top-performing affiliates to optimizing campaigns for maximum ROI,
              we turn every click into a conversion and every partnership into
              profit.
            </p>

            <p className="text-gray-300  leading-relaxed">
              Affiliate marketing is one of the most cost-effective ways to
              boost online visibility and sales — because you only pay for
              results. With our deep understanding of Dubai’s digital ecosystem,
              we connect your brand with trusted affiliates, influencers, and
              publishers who help you reach your ideal customers faster.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <Image
              src={seoImage} // Replace with your Affiliate Marketing image
              alt="Affiliate Marketing Services in Dubai"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="w-11/12 md:w-5/6 mx-auto grid lg:grid-cols-2 gap-10">
          {/* LEFT BOX */}
          <div
            className="
        relative p-8 rounded-3xl overflow-hidden
        bg-[var(--color1)]/70 border border-white/10
        shadow-[0_0_25px_rgba(0,0,0,0.45)]
        hover:shadow-[0_0_40px_rgba(167,235,242,0.25)]
        transition-all duration-500
      "
          >
            {/* Matrix Overlay */}
            <div className="absolute inset-0 opacity-[0.18] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen"></div>

            {/* Glow Border on Hover */}
            <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[var(--color5)] transition-all duration-500"></div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 text-[var(--color5)]">
                What Is Affiliate Marketing?
              </h2>

              <p className="text-gray-300 mb-4 leading-relaxed">
                <strong>Affiliate marketing</strong> is a performance-based
                strategy where brands collaborate with affiliates—publishers,
                influencers, or creators—who promote your products or services
                for commission.
              </p>

              <p className="text-gray-300 mb-4 leading-relaxed">
                You only pay for real conversions, ensuring{" "}
                <strong>zero wasted budget</strong>.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Our <strong>Affiliate Marketing Services in Dubai</strong>{" "}
                include setup, recruitment, tracking, reporting, and full
                campaign optimization.
              </p>
            </div>
          </div>

          {/* RIGHT BOX */}
          <div
            className="
        relative p-8 rounded-3xl overflow-hidden
        bg-[var(--color1)]/70 border border-white/10
        shadow-[0_0_25px_rgba(0,0,0,0.45)]
        hover:shadow-[0_0_40px_rgba(167,235,242,0.25)]
        transition-all duration-500
      "
          >
            {/* Matrix Overlay */}
            <div className="absolute inset-0 opacity-[0.18] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen"></div>

            {/* Glow Border */}
            <div className="absolute inset-0 rounded-3xl border border-transparent hover:border-[var(--color5)] transition-all duration-500"></div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 text-[var(--color5)]">
                Why Affiliate Marketing Works Best in Dubai
              </h2>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Dubai’s digital-first, high-income audience makes it a perfect
                hub for affiliate-driven conversions.
              </p>

              <ul className="space-y-4">
                {[
                  "UAE’s online user base is rapidly expanding.",
                  "High e-commerce adoption = more conversions.",
                  "Influencer culture blends naturally with affiliate promotions.",
                  "Global platforms already operate strongly in the Middle East.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-2 h-2 mt-2 bg-[var(--color5)] rounded-full shadow-[0_0_10px_var(--color5)]"></span>
                    <p className="ml-4 text-gray-300 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12">
        {/* Heading */}
        <div className=" mb-12">
          <h2 className="text-3xl  font-bold text-[var(--color5)] mb-4">
            Our Affiliate Marketing Services Include
          </h2>
          <p className="text-gray-300 max-w-3xl leading-relaxed">
            At <strong>BigWig Media Digital</strong>, we offer end-to-end
            <strong> Affiliate Marketing Services in Dubai</strong>, ensuring
            your program runs efficiently and delivers consistent ROI.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              title: "1. Affiliate Program Strategy & Setup",
              desc: "We define KPIs, build tracking systems, structure payouts, and set up a tailored affiliate program for your business.",
            },
            {
              title: "2. Affiliate Recruitment",
              desc: "We onboard top affiliates, influencers, bloggers, and publishers across Dubai & UAE who align with your target market.",
            },
            {
              title: "3. Campaign Management",
              desc: "Our team handles communication, content flow, and daily monitoring to ensure seamless execution.",
            },
            {
              title: "4. Performance Tracking & Reporting",
              desc: "We measure sales, leads, CTR, and conversions in real time with transparent monthly performance reporting.",
            },
            {
              title: "5. Creative & Content Support",
              desc: "We craft banners, social creatives, landing pages, and guidelines to maintain consistent branding and boost conversions.",
            },
            {
              title: "6. Compliance & Quality Control",
              desc: "We ensure affiliates follow ethical practices, eliminate fraud, and maintain brand-safe promotion.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
          group relative p-8 rounded-2xl overflow-hidden
          bg-[var(--color1)]/70 border border-white/10
          shadow-[0_0_25px_rgba(0,0,0,0.45)]
          hover:shadow-[0_0_40px_rgba(167,235,242,0.3)]
          hover:border-[var(--color5)]
          transition-all duration-500
        "
            >
              {/* Background Matrix Overlay */}
              <div className="absolute inset-0 opacity-[0.15] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen pointer-events-none"></div>

              {/* Glow Border */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[var(--color5)] transition-all duration-500"></div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-[var(--color5)] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-[var(--color1)]/60 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.4)] relative overflow-hidden">
          {/* Glow Effect */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[var(--color5)]/20 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--color4)]/20 blur-3xl rounded-full"></div>

          <h3 className="text-2xl md:text-3xl font-bold text-[var(--color5)] mb-4">
            Want to start earning more while spending less?
          </h3>
          <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed max-w-3xl mx-auto">
            Get started with
            <strong>
              {" "}
              BigWig Media Digital’s Affiliate Marketing Services in Dubai{" "}
            </strong>
            and scale your growth with performance-driven partnerships.
          </p>
          <div className="flex justify-center">
            <ButtonFill
              onClick={() => setIsPopupOpen(true)}
              text="Get Started Today"
            />
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12">
        {/* Title Section */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-[var(--color5)] mb-4">
            Our Process: How We Build Successful Affiliate Campaigns
          </h2>
          <p className="text-gray-300 max-w-3xl leading-relaxed">
            We follow a transparent, data-driven approach to ensure your
            affiliate campaigns are optimized for conversions, scale, and
            consistent long-term performance.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              num: "1",
              title: "Market & Competitor Analysis",
              desc: "We analyze your niche, target demographic, buying behavior, and competitor strategies in Dubai & UAE.",
            },
            {
              num: "2",
              title: "Affiliate Network Selection",
              desc: "Choosing the best platforms — CJ, ShareASale, Impact, Awin, or private networks — for maximum ROI.",
            },
            {
              num: "3",
              title: "Affiliate Vetting",
              desc: "We hand-select affiliates based on niche relevance, audience quality, reputation, and performance history.",
            },
            {
              num: "4",
              title: "Offer Structuring",
              desc: "Crafting strong commission models (CPA, CPS, CPL) and irresistible offers that encourage conversions.",
            },
            {
              num: "5",
              title: "Creative Deployment",
              desc: "We provide high-impact banners, landing pages, copy, and ad creatives ready for instant launch.",
            },
            {
              num: "6",
              title: "Continuous Optimization",
              desc: "Real-time tracking, CTR improvement, funnel optimization, fraud checks & performance scaling.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="
          relative p-5 rounded-2xl overflow-hidden
          bg-[var(--color1)]/70 backdrop-blur-xl
          border border-white/10
          shadow-[0_0_30px_rgba(0,0,0,0.4)]
          hover:shadow-[0_0_40px_rgba(167,235,242,0.35)]
          transition-all duration-300 hover:-translate-y-2 group
        "
            >
              {/* Hologram BG */}
              <div className="absolute inset-0 opacity-[0.12] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover mix-blend-screen pointer-events-none"></div>

              {/* Glow Border */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[var(--color5)] transition duration-500"></div>
              <div className="relative z-10 flex items-start gap-4 mb-4">
                {/* Number Badge */}
                <div
                  className="
      w-14 h-14 rounded-full flex items-center justify-center
      bg-[var(--color3)]/40 border border-[var(--color5)]
      text-[var(--color5)] font-bold text-xl
      shadow-[0_0_15px_rgba(167,235,242,0.4)]
      backdrop-blur-xl transition group-hover:scale-110
    "
                >
                  {step.num}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[var(--color4)] leading-tight mt-2">
                  {step.title}
                </h3>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <p className="text-gray-300 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative w-11/12 md:w-5/6 mx-auto py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SECTION */}
          <div
            className="
        relative p-10 rounded-3xl overflow-hidden
        bg-[var(--color1)]/70 backdrop-blur-xl
        border border-white/10 
        shadow-[0_0_25px_rgba(0,0,0,0.4)]
        hover:shadow-[0_0_35px_rgba(167,235,242,0.3)]
        transition-all duration-300
      "
          >
            {/* Hologram BG */}
            <div className="absolute inset-0 opacity-[0.12] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover mix-blend-screen pointer-events-none"></div>

            <h2 className="text-3xl font-bold text-[var(--color5)] mb-6">
              Why Choose BigWig Media Digital for Affiliate Marketing in Dubai
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              Partnering with BigWig Media Digital means working with Dubai’s
              most trusted digital growth experts. Here’s what makes our
              Affiliate Marketing services different:
            </p>

            <ul className="space-y-5 relative z-10">
              {[
                "Local Expertise — deep understanding of Dubai’s market behavior.",
                "Verified Affiliate Network with only high-performing partners.",
                "Complete End-to-End Management from setup to payouts.",
                "100% Transparent ROI Tracking with real-time dashboards.",
                "Arabic-English multilingual campaign execution.",
                "SEO + Performance Integration for full-funnel growth.",
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="relative w-3.5 h-3.5 mt-2">
                    <span className="absolute inset-0 bg-[var(--color5)] rounded-full animate-pulse opacity-70"></span>
                    <span className="absolute inset-1 bg-[var(--color5)] rounded-full"></span>
                  </div>
                  <p className="text-gray-300 group-hover:text-[var(--color5)] transition-all duration-300">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex flex-col justify-between">
            <div
              className="
          relative p-10 rounded-3xl overflow-hidden
          bg-[var(--color1)]/70 backdrop-blur-xl
          border border-white/10
          shadow-[0_0_25px_rgba(0,0,0,0.4)]
          hover:shadow-[0_0_35px_rgba(167,235,242,0.3)]
          transition-all duration-300
        "
            >
              {/* Hologram BG */}
              <div className="absolute inset-0 opacity-[0.12] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover mix-blend-screen pointer-events-none"></div>

              <h2 className="text-3xl font-bold text-[var(--color5)] mb-4 text-center lg:text-left">
                Benefits of Affiliate Marketing for Your Business
              </h2>

              <p className="text-gray-300 leading-relaxed mb-6 text-center lg:text-left">
                Affiliate marketing drives measurable results while staying
                highly cost-effective. Here’s what you gain:
              </p>

              <div className="grid sm:grid-cols-2 gap-6 relative z-10">
                {[
                  {
                    title: "Increased Sales",
                    desc: "Grow revenue with qualified traffic.",
                  },
                  {
                    title: "Performance-Based ROI",
                    desc: "Pay only for results.",
                  },
                  {
                    title: "Global Reach",
                    desc: "Expand beyond Dubai & GCC markets.",
                  },
                  { title: "Low Risk", desc: "Ideal for SMEs & startups." },
                  {
                    title: "Brand Awareness",
                    desc: "Boost visibility through influencers.",
                  },
                  {
                    title: "Scalable Growth",
                    desc: "Scale your campaigns with ease.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="
                bg-[var(--color2)]/60 backdrop-blur-md
                border border-white/10 
                rounded-2xl p-3
                shadow-sm hover:shadow-lg hover:-translate-y-1 
                transition-all duration-300
              "
                  >
                    <h4 className="text-lg font-semibold text-[var(--color5)] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div
          className="
          mt-6 text-center 
          bg-[var(--color5)]/10 border border-[var(--color5)] 
          p-6 rounded-2xl shadow-[0_0_20px_rgba(167,235,242,0.3)]
        "
        >
          <p className="text-gray-300 text-xl mb-4">
            Want a marketing strategy that pays for itself?
          </p>
          <div className="flex justify-center">
            <ButtonFill
              onClick={() => setIsPopupOpen(true)}
              text="Get Started Today"
            />
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12 space-y-12">
        {/* SECTION 1: DIGITAL PRESENCE BENEFITS */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color5)] mb-6">
              How Affiliate Marketing
              <span className="text-[var(--color4)]">
                {" "}
                Improves Your Digital Presence
              </span>
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              Affiliate marketing isn’t just about sales — it amplifies your
              entire digital footprint.
            </p>

            <ul className="space-y-5">
              {[
                "Enhances SEO through backlink building and brand mentions.",
                "Boosts social visibility via influencer-powered promotions.",
                "Improves brand credibility through trusted third-party recommendations.",
                "Strengthens omnichannel presence for a smoother customer journey.",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <span className="w-3 h-3 rounded-full bg-[var(--color5)] mt-2 group-hover:scale-125 transition-all"></span>
                  <p className="text-gray-300 group-hover:text-[var(--color5)] transition-all">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT CARD */}
          <div
            className="
        relative p-10 rounded-3xl
        bg-[var(--color1)]/70 backdrop-blur-xl
        border border-[var(--color5)]/20
        shadow-[0_0_30px_rgba(0,0,0,0.5)]
        hover:shadow-[0_0_40px_rgba(167,235,242,0.3)]
        transition-all duration-300
      "
          >
            {/* Matrix BG Overlay */}
            <div
              className="
        absolute inset-0 opacity-[0.12]
        bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')]
        bg-cover bg-center mix-blend-screen pointer-events-none
      "
            ></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-semibold text-[var(--color4)] mb-4">
                Local Advantage — Why Dubai Businesses Trust Us
              </h3>

              <p className="text-gray-300 leading-relaxed mb-8">
                Dubai’s fast-paced environment demands fast results, clarity,
                and performance. Our localized approach ensures:
              </p>

              <ul className="space-y-4">
                {[
                  "Affiliate partnerships with UAE-based creators and media publishers.",
                  "Campaigns aligned with Dubai’s culture, language & buying behavior.",
                  "Real-time tracking & reporting synced to UAE business hours.",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-3 h-3 rounded-full bg-[var(--color3)] mt-2"></span>
                    <p className="text-gray-300">{point}</p>
                  </li>
                ))}
              </ul>

              <p className="text-gray-300 mt-8 leading-relaxed">
                With{" "}
                <strong className="text-[var(--color5)]">
                  BigWig Media Digital
                </strong>
                , your brand grows with precision, trust, and powerful
                partnerships.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 2: CTA */}
        <div
          className="
      text-center py-16 px-6 rounded-3xl
      bg-[var(--color1)]/70 backdrop-blur-xl
      border border-[var(--color5)]/20
      shadow-[0_0_30px_rgba(0,0,0,0.5)] 
      hover:shadow-[0_0_45px_rgba(167,235,242,0.3)]
      transition-all
      relative overflow-hidden
    "
        >
          {/* BG Effects */}
          <div className="absolute inset-0 opacity-[0.09] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color5)] mb-6">
              Let’s Build a Profitable Affiliate Network for Your Brand
            </h2>

            <p className="text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
              Your business deserves steady growth — powered by a
              performance-based model that boosts your revenue without
              overspending.
            </p>

            <p className="text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Don’t rely on traditional ads alone — let vetted affiliates scale
              your conversions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
              <ButtonFill
                onClick={() => setIsPopupOpen(true)}
                text=" Get Free Consultation"
              />

              <a
                href="mailto:support@bigwigmediadigital.com"
                className="bg-[var(--color5)] font-medium  text-[var(--color1)] px-6 py-2 rounded-lg hover:bg-[var(--color1)] border hover:border-[var(--color5)] hover:text-[var(--color5)]"
              >
                📩 Email us today
              </a>
            </div>

            <p className="text-gray-300 mt-8 font-semibold text-lg">
              🚀 Partner with
              <span className="text-[var(--color5)]">
                {" "}
                BigWig Media Digital
              </span>{" "}
              — Dubai’s trusted Affiliate Marketing Specialists.
            </p>
          </div>
        </div>
      </section>

      <OurProcess />
      <WhyBigwig />
      <ServicesNavigation />
      <GetInTouch />

      <Footer />
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}

export default AffiliateMarketingDubai;

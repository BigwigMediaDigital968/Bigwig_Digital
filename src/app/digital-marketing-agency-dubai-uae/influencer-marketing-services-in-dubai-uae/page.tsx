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

function InfluenceDubai() {
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
              Influencer Marketing Services in Dubai
            </h1>
            <h2 className="text-2xl font-semibold leading-tight">
              Amplify Your Brand Reach with Powerful Influencer Marketing
              Services in Dubai
            </h2>
            <p className="text-lg">
              In Dubai’s digital market, BigWig Media Digital amplifies your
              brand through strategic influencer marketing. We connect you with
              the right influencers to boost engagement, brand awareness, and
              ROI.
            </p>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="relative py-12">
        <div className="w-11/12 md:w-5/6 mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-3xl  font-bold mb-6 text-[var(--color5)] leading-snug">
              Amplify Your Brand Voice with Strategic Influencer Marketing
              Services in Dubai
            </h1>

            <p className="text-gray-300 leading-relaxed mb-5">
              In the fast-evolving digital world of Dubai, traditional ads often
              fall short. Today, people value authenticity, trust, and real
              social proof. At
              <strong> BigWig Media Digital</strong>, we bring brands and
              audiences closer through powerful, data-driven
              <strong> Influencer Marketing Services in Dubai</strong>.
            </p>

            <p className="text-gray-300 leading-relaxed mb-5">
              Our strategies connect your brand with influencers who truly
              resonate with your audience — driving meaningful conversations,
              engagement, and conversions.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Whether you&#39;re launching a new product or scaling your
              presence, our influencer marketing experts ensure your campaigns
              make an impact where it matters most — on social media and in
              people’s minds.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <Image
              src={seoImage}
              alt="Influencer Marketing Services in Dubai"
              className="rounded-3xl shadow-[0_0_25px_rgba(0,0,0,0.25)] hover:shadow-[0_0_35px_rgba(167,235,242,0.3)] transition-all duration-300 w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12">
        <div>
          {/* HEADING */}
          <h2 className="text-3xl font-bold text-[var(--color5)] mb-6">
            Why Influencer Marketing Works in Dubai
          </h2>

          {/* SUBTEXT */}
          <p className="text-gray-300 mb-10 leading-relaxed text-base max-w-4xl">
            Dubai is one of the most digitally active cities in the world. With
            a social media penetration rate exceeding 98%, it provides brands
            with an ideal landscape for high-impact influencer campaigns. From
            micro-influencers to celebrity creators, Dubai’s content ecosystem
            drives trust, visibility, and conversions.
          </p>

          {/* BENEFIT GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
            {[
              "Instant visibility among highly targeted Dubai audiences.",
              "Authentic engagement powered by trusted influencers.",
              "Higher conversion rates than traditional advertising.",
              "Localized content crafted for Dubai’s multicultural audience.",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-5 rounded-2xl 
                     bg-[var(--color1)]/60 backdrop-blur-md 
                     border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.25)] 
                     hover:shadow-[0_0_25px_rgba(167,235,242,0.25)] 
                     transition-all duration-300"
              >
                <div className="w-4 h-2 mt-2 rounded-full bg-[var(--color5)] shadow-md"></div>
                <p className="text-gray-300 text-[17px] leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* FOOTER MESSAGE */}
          <p className="text-gray-300 mt-10 leading-relaxed text-lg">
            Our{" "}
            <strong className="text-[var(--color5)]">
              Influencer Marketing Services in Dubai
            </strong>{" "}
            help your brand earn trust, build engagement, and convert audiences
            through authentic storytelling.
          </p>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12">
        <div className=" mb-12">
          <h2 className="text-3xl font-bold text-[var(--color5)] mb-4">
            Our Range of Influencer Marketing Services in Dubai
          </h2>
          <p className="text-gray-300 max-w-4xlleading-relaxed">
            We offer complete influencer marketing solutions — strategy,
            creators, content & performance analysis — all aligned with your
            business goals.
          </p>
        </div>

        {/* Grid */}
        <div
          className="
      grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
    "
        >
          {[
            {
              title: "Influencer Strategy & Campaign Planning",
              desc: "A tailored, data-backed roadmap aligned with your brand’s KPIs, audience and industry.",
            },
            {
              title: "Influencer Identification & Shortlisting",
              desc: "We shortlist influencers whose audience demographics match your target customers using deep analytics.",
            },
            {
              title: "Campaign Execution",
              desc: "We handle content briefs, coordination, approvals, and posting — ensuring authentic storytelling.",
            },
            {
              title: "Contract & Negotiation Management",
              desc: "Professional handling of agreements, deliverables, usage rights and compliance.",
            },
            {
              title: "Content Creation Support",
              desc: "Our creative team works with influencers to produce high-converting visuals & scripts.",
            },
            {
              title: "Tracking & Performance Reporting",
              desc: "Real-time analytics with detailed reporting on reach, engagement, clicks and conversions.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
          relative p-6 rounded-2xl overflow-hidden
          bg-white/10 backdrop-blur-lg
          border border-white/10
          shadow-[0_0_20px_rgba(0,0,0,0.4)]
          hover:shadow-[0_0_35px_rgba(167,235,242,0.25)]
          transition-all duration-300 hover:-translate-y-2 group
        "
            >
              {/* BG hologram */}
              <div
                className="
            absolute inset-0 opacity-[0.12]
            bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')]
            bg-cover bg-center pointer-events-none
          "
              />

              {/* Glow border on hover */}
              <div
                className="
            absolute inset-0 rounded-2xl border border-transparent 
            group-hover:border-[var(--color5)] transition duration-500
          "
              ></div>

              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-[var(--color4)] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="
      text-center mt-10 
      bg-gradient-to-r from-[var(--color1)]/40 via-[var(--color2)]/40 to-[var(--color1)]/40
      backdrop-blur-lg border border-white/10
      rounded-2xl p-10 shadow-inner
    "
        >
          <p className="text-gray-300 text-lg mb-6 leading-relaxed max-w-4xl mx-auto">
            Want your next influencer campaign to make a real impact? Let’s
            build a strategy that delivers engagement, conversions and brand
            trust.
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
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[var(--color5)] mb-4">
            Types of Influencer Campaigns We Offer
          </h2>
          <p className="text-gray-300 max-w-4xl  leading-relaxed">
            Every brand has different goals — and we’ve crafted campaign formats
            for each, powered by Dubai’s creator economy.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Brand Awareness Campaigns",
              desc: "Maximize reach with high-impact collaborations on Instagram, TikTok, and YouTube.",
            },
            {
              title: "Product Launches",
              desc: "Generate hype with teaser videos, unboxings, and influencer event coverage.",
            },
            {
              title: "Review & Testimonial Campaigns",
              desc: "Boost trust with authentic, credibility-driven user experience reviews.",
            },
            {
              title: "Event Influencer Collaborations",
              desc: "Amplify your offline events with real-time influencer coverage.",
            },
            {
              title: "Affiliate & Performance Campaigns",
              desc: "Blend influencer reach with performance payouts for guaranteed ROI.",
            },
            {
              title: "Long-Term Brand Ambassadorships",
              desc: "Build ongoing partnerships with influencers who become your brand’s voice.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
          bg-[var(--color1)]/30 backdrop-blur-xl 
          border border-white/10 
          rounded-2xl p-6 shadow-[0_0_20px_rgba(0,0,0,0.25)]
          hover:shadow-[0_0_30px_rgba(167,235,242,0.25)]
          transition-all duration-300 hover:-translate-y-1
          relative overflow-hidden
        "
            >
              {/* Soft holographic BG */}
              <div className="absolute inset-0 opacity-[0.08] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover pointer-events-none"></div>

              <h3 className="text-xl font-semibold text-[var(--color4)] relative z-10 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed relative z-10">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-10 bg-[var(--color1)]/40 backdrop-blur-xl border border-white/10 p-10 rounded-2xl shadow-inner">
          <p className="text-gray-300 text-lg mb-4 leading-relaxed">
            Every campaign we craft is built for impact — measurable, creative,
            and ROI-focused.
          </p>
          <div className="flex justify-center">
            <ButtonFill
              onClick={() => setIsPopupOpen(true)}
              text="Get Started Today"
            />
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12 ">
        {/* ================= LEFT SECTION ================= */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT - WHY CHOOSE US */}
          <div>
            <h2 className="text-3xl  font-bold text-[var(--color5)] mb-6">
              Why Choose{" "}
              <span className="text-[var(--color5)]">BigWig Media Digital</span>{" "}
              for Influencer Marketing in Dubai
            </h2>

            <p className="text-gray-300 mb-5 leading-relaxed">
              Partnering with BigWig Media Digital means you get more than
              influencer connections — you get strategy, storytelling, and
              measurable results. Here’s why we’re one of Dubai’s top agencies
              for Influencer Marketing:
            </p>

            <ul className="space-y-2">
              {[
                "Verified Influencer Network across Dubai, Abu Dhabi & GCC.",
                "Data-driven selection based on engagement, demographics & niche relevance.",
                "End-to-end campaign management — from ideation to reporting.",
                "Culturally relevant content for Dubai’s multilingual audience.",
                "Cross-platform expertise: Instagram, TikTok, YouTube & LinkedIn.",
                "Affordable packages for startups, SMEs & global brands.",
                "Transparent reporting with ROI-focused dashboards.",
              ].map((point, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--color5)] mt-2"></div>
                  <p className="text-gray-300">{point}</p>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-gray-300 leading-relaxed">
              Your audience trusts influencers — let us help them trust your
              brand too. Choose Dubai’s most reliable Influencer Marketing team
              today.
            </p>
          </div>

          {/* ================= RIGHT SECTION ================= */}
          <div>
            <h2 className="text-3xl font-bold text-[var(--color5)] mb-4">
              How Influencer Marketing Benefits Your Business
            </h2>

            <p className="text-gray-300 mb-5 leading-relaxed">
              Influencer marketing is now one of Dubai’s highest-ROI digital
              channels. Here’s what our clients achieve consistently:
            </p>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Stronger Brand Recognition",
                  desc: "Get discovered by highly relevant audiences.",
                },
                {
                  title: "Authentic Engagement",
                  desc: "Influencers generate trust through relatable content.",
                },
                {
                  title: "Boosted Sales",
                  desc: "Creators drive real product interest & conversions.",
                },
                {
                  title: "SEO Growth",
                  desc: "Mentions, backlinks & increased social signals help rankings.",
                },
                {
                  title: "Community Expansion",
                  desc: "Grow followers, engagement & brand advocates organically.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
              bg-[var(--color1)]/80 
              border border-white/10 
              backdrop-blur-xl 
              rounded-2xl 
              p-4 
              shadow-[0_0_20px_rgba(0,0,0,0.4)] 
              hover:shadow-[0_0_25px_rgba(167,235,242,0.35)] 
              transition-all duration-300
              hover:-translate-y-1
            "
                >
                  <h4 className="text-lg font-semibold text-[var(--color4)] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12 space-y-10">
        {/* Section 1: Dubai’s Influencer Landscape */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-3xl font-bold text-[var(--color5)] mb-6">
              Dubai’s Influencer Landscape — A Market of Opportunities
            </h2>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Dubai is a global hub for influencers — from beauty gurus and tech
              reviewers to luxury lifestyle creators. The city’s influencer
              ecosystem is diverse, professional, and rapidly growing.
            </p>

            <p className="text-gray-300 mb-6 leading-relaxed">
              At <strong>BigWig Media Digital</strong>, we connect you with
              influencers who combine reach with authenticity. Every
              collaboration reflects Dubai’s values — innovation, trust, and
              quality.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Leverage Dubai’s influencer ecosystem to elevate your brand. Our
              <strong> Influencer Marketing Services in Dubai </strong>
              deliver measurable exposure, engagement, and credibility.
            </p>
          </div>

          {/* RIGHT BOX */}
          <div
            className="
        bg-[var(--color1)]/60 
        backdrop-blur-xl 
        border border-white/10 
        shadow-[0_0_25px_rgba(0,0,0,0.35)]
        rounded-3xl p-8
      "
          >
            <h3 className="text-2xl font-semibold text-[var(--color4)] mb-4">
              How We Ensure Authenticity & Compliance
            </h3>

            <ul className="space-y-4">
              {[
                "Only influencers with real, organic audiences — no fake followers.",
                "Strict FTC disclosures + UAE media compliance.",
                "Brand-consistent messaging across all influencer posts.",
                "Approval workflow for all creatives before publishing.",
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--color5)] mt-2"></div>
                  <p className="text-gray-300">{item}</p>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-gray-300 leading-relaxed">
              Authenticity builds trust — and our influencer system ensures
              every collaboration is real, transparent, and high-impact.
            </p>
          </div>
        </div>

        {/* Section 2: CTA */}
        <div
          className="
      text-center 
      py-16 px-6 
      rounded-3xl 
      bg-[var(--color1)]/40 
      backdrop-blur-xl 
      border border-white/10
      shadow-[0_0_35px_rgba(0,0,0,0.4)]
    "
        >
          <h2 className="text-3xl  font-bold text-[var(--color5)] mb-6">
            Let’s Build Your Next Influencer Campaign
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
            Whether you&#39;re growing brand visibility or aiming to dominate
            the Dubai market, influencer marketing accelerates trust,
            engagement, and conversions.
          </p>

          <p className="text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            At <strong>BigWig Media Digital</strong>, we blend creativity,
            analytics, and authentic storytelling to create campaigns that
            people remember — and act upon.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
            <ButtonFill
              onClick={() => setIsPopupOpen(true)}
              text="Get Free Consultation"
            />

            <a
              href="mailto:support@bigwigmediadigital.com"
              className="bg-[var(--color5)] font-medium  text-[var(--color1)] px-6 py-2 rounded-lg hover:bg-[var(--color1)] border hover:border-[var(--color5)] hover:text-[var(--color5)]"
            >
              📩 Email Us Today
            </a>
          </div>

          <p className="text-gray-200 mt-8 font-semibold text-base">
            Don’t just advertise —{" "}
            <span className="text-[var(--color5)]">influence</span>. Partner
            with <strong>BigWig Media Digital</strong> — Dubai’s leading
            influencer marketing agency.
          </p>
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

export default InfluenceDubai;

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
  FaPenNib,
  FaShareAlt,
  FaGlobe,
  FaVideo,
  FaEnvelopeOpenText,
  FaFileAlt,
} from "react-icons/fa";

import Image from "next/image";
import GetInTouch from "../../../../components/GetInTouch";
import ServicesNavigation from "../../../../components/UAEServicesDirectory";

function ContentMarketingInDubai() {
  //   const [isPopupOpen, setIsPopupOpen] = useState(false);

  const services = [
    {
      icon: FaPenNib,
      title: "SEO Blog & Article Writing",
      desc: "Keyword-optimized, well-researched blogs that improve search rankings and attract repeat visitors.",
    },
    {
      icon: FaShareAlt,
      title: "Social Media Content Creation",
      desc: "From Instagram captions to LinkedIn thought-leadership posts, we create engaging content tailored for your audience.",
    },
    {
      icon: FaGlobe,
      title: "Website Copywriting",
      desc: "Conversion-focused copy that reflects your brand voice and motivates users to take action.",
    },
    {
      icon: FaVideo,
      title: "Video Scriptwriting",
      desc: "Story-driven scripts for reels, YouTube ads, explainer videos, and brand storytelling.",
    },
    {
      icon: FaEnvelopeOpenText,
      title: "Email Campaign Content",
      desc: "High-converting email copy designed to nurture leads and drive clicks.",
    },
    {
      icon: FaFileAlt,
      title: "Whitepapers, Case Studies & eBooks",
      desc: "In-depth, authority-building content that positions your brand as an industry leader.",
    },
  ];

  return (
    <div className="bg-[var(--color1)]">
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
              Content Marketing Services in Dubai, UAE
            </h1>
            <h2 className="text-2xl font-semibold leading-tight">
              Engage, Educate & Convert With Powerful Content Strategies
            </h2>
            <p className="text-lg">
              At BigWig Media Digital, we believe content is more than just
              words, it’s the foundation of your brand’s digital presence. Our
              Content Marketing Services in Dubai are designed to build
              authority, drive traffic, and increase conversions through blogs,
              articles, social media content, videos, and website copy.
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
              alt="Content Marketing Services in Dubai, UAE"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-[var(--color5)]">
              Creating Content That Cuts Through the Noise
            </h2>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Content is the foundation of every successful digital strategy in
              today’s competitive market. At{" "}
              <strong>BigWig Media Digital</strong>, a leading one{" "}
              <strong>content marketing agency in Dubai, UAE, </strong> we don’t
              just create content; we create digital experiences that attract,
              engage, and convert.
            </p>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Our goal is simple: to help your brand build authority, connect
              with your audience, and drive measurable growth. From SEO-rich
              blogs to high-converting social media content, we design campaigns
              that work for both search engines and people.
            </p>

            <p className="text-gray-300 leading-relaxed">
              If you’re looking for{" "}
              <strong>content marketing services in Dubai, UAE </strong>
              that combine clarity, creativity, and conversions, you’re in the
              right place.
            </p>
          </div>
        </div>
      </section>

      <section className=" py-12">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <h2 className="text-3xl font-semibold text-[var(--color5)] mb-6 text-center md:text-left">
            Why Content Marketing Matters in Dubai, UAE
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg mb-10 ">
            Content marketing is more than writing articles; it’s about building
            trust, visibility, and long-term relationships in a crowded digital
            space. Done right, it transforms your website into a lead-generation
            machine, your social media into an engagement hub, and your brand
            into a thought leader.
          </p>

          <div className="bg-gradient-to-r from-[var(--color1)] to-[var(--color2)] p-8 rounded-2xl shadow-md border border-[var(--color5)]">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-300 mb-4">
              With years of expertise as a trusted content marketing agency in
              Dubai, UAE, we understand that impactful content must do three
              things:
            </h3>

            <ul className="space-y-4 text-gray-300 text-base">
              <li className="flex items-start gap-3">
                <span className="text-[var(--color5)] font-bold">•</span>
                <span>
                  <strong>Get Found:</strong> Optimized for search engines with
                  smart SEO strategies.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color5)] font-bold">•</span>
                <span>
                  <strong>Get Read:</strong> Engaging and valuable content that
                  keeps audiences hooked.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color5)] font-bold">•</span>
                <span>
                  <strong>Get Results:</strong> Clear, persuasive messaging that
                  drives action.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12">
        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-3xl  font-semibold text-left text-white">
            Our Core{" "}
            <span className="text-[var(--color5)]">
              Content Marketing Services in Dubai
            </span>
          </h2>
          <p className="text-white/70 max-w-2xl mt-3">
            High-impact content strategies designed to boost visibility, build
            trust, and drive conversions across all digital platforms in Dubai &
            the UAE.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <div
              key={index}
              className="
          group relative p-8 rounded-2xl overflow-hidden
          bg-[var(--color1)]/60 backdrop-blur-xl
          border border-white/10 shadow-[0_12px_30px_rgba(2,6,23,0.45)]
          transition-transform duration-300 hover:-translate-y-2
        "
            >
              {/* Gradient Blob */}
              <div
                className="absolute -right-10 -top-10 w-56 h-56 blur-3xl opacity-30 
          bg-gradient-to-br from-[var(--color3)] to-[var(--color4)]
          rounded-full pointer-events-none"
              ></div>

              {/* Hologram Texture */}
              <div
                className="
          absolute inset-0 opacity-10
          bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')]
          bg-cover bg-center mix-blend-screen pointer-events-none
        "
              ></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col">
                <div
                  className="
              w-14 h-14 rounded-xl bg-[var(--color5)]/10 border border-[var(--color5)]/30
              flex items-center justify-center shadow-[0_0_15px_rgba(167,235,242,0.2)]
              mb-5
            "
                >
                  <item.icon className="w-8 h-8 text-[var(--color5)]" />
                </div>

                <h3 className="text-lg font-semibold text-[var(--color4)] mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-white/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 relative">
        <div className="w-11/12 md:w-5/6 mx-auto">
          {/* WHY CHOOSE US */}
          <h2 className="text-3xl  font-semibold text-[var(--color5)] lg:max-w-3xl text-center md:text-left mb-6">
            Why Choose BigWig Media Digital as Your Content Marketing Agency in
            Dubai?
          </h2>

          <p className="text-white/80 leading-relaxed text-lg mb-10 ">
            We’re more than a content team — we’re your strategic partners in
            growth. Here’s what sets us apart:
          </p>

          {/* WHY CHOOSE GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                title: "SEO at the Core",
                desc: "From keyword research to on-page optimization, we create content that ranks and drives organic visibility.",
              },
              {
                title: "Unique Brand Voice",
                desc: "Every brand is different — we craft a content identity that reflects your tone, values, and audience expectations.",
              },
              {
                title: "Consistency & Scale",
                desc: "Whether you need a few blogs or full content engines, we deliver quality at any scale.",
              },
              {
                title: "Data-Driven Approach",
                desc: "Every decision is backed by analytics, user behavior data, and competitive insights.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
            relative p-6 rounded-2xl overflow-hidden
            bg-[var(--color1)]/70 border border-white/10 backdrop-blur-xl
            shadow-[0_12px_30px_rgba(2,6,23,0.45)]
            hover:border-[var(--color5)] hover:shadow-[0_0_30px_rgba(167,235,242,0.25)]
            transition-all duration-300
          "
              >
                {/* Hologram Texture */}
                <div className="absolute inset-0 opacity-[0.12] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen pointer-events-none"></div>

                {/* Blob Light */}
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-br from-[var(--color3)] to-[var(--color4)] blur-3xl opacity-30"></div>

                <div className="relative z-10">
                  <h3 className="text-xl text-[var(--color5)] font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* HOW WE BUILD CONTENT ENGINE */}
          <h2 className="text-3xl  font-semibold text-[var(--color5)] text-center md:text-left mb-10">
            How We Build Your Content Marketing Engine
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {[
              {
                step: "1.",
                title: "Discovery & Goal Mapping",
                desc: "We understand your business, audience, competitors, and KPIs to set a winning direction.",
              },
              {
                step: "2.",
                title: "Topic & SEO Planning",
                desc: "In-depth keyword research + audience intent analysis to map a powerful content plan.",
              },
              {
                step: "3.",
                title: "Content Creation & Optimization",
                desc: "SEO-friendly, engaging content crafted to educate, rank, and convert.",
              },
              {
                step: "4.",
                title: "Publishing & Distribution",
                desc: "Content shared on the right channels for maximum reach and engagement.",
              },
              {
                step: "5.",
                title: "Tracking & Performance Scaling",
                desc: "We monitor results and continuously optimize to scale performance.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="
            relative p-6 rounded-2xl bg-[var(--color1)]/70 border border-white/10 shadow-md 
            hover:shadow-xl hover:border-[var(--color5)] transition-all duration-300
          "
              >
                {/* Neon Number */}
                <div className="text-[var(--color5)] font-bold text-3xl mb-3">
                  {step.step}
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="
        text-center p-10 rounded-2xl 
        bg-[var(--color1)]/60 backdrop-blur-xl border border-white/10
        shadow-[inset_0_0_40px_rgba(167,235,242,0.15)]
      "
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--color5)] mb-4">
              Fuel Your Brand Growth with Content That Works
            </h3>

            <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
              Your audience expects value. Your brand deserves visibility. At
              <strong className="text-[var(--color5)]">
                {" "}
                BigWig Media Digital
              </strong>
              , we deliver content that builds trust, drives traffic, and boosts
              conversions.
            </p>
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

export default ContentMarketingInDubai;

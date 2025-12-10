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
    <div className="bg-white text-black font-raleway">
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

      <section className="w-11/12 md:w-5/6 mx-auto py-12 bg-white">
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              Creating Content That Cuts Through the Noise
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Content is the foundation of every successful digital strategy in
              today’s competitive market. At{" "}
              <strong>BigWig Media Digital</strong>, a leading one{" "}
              <strong>content marketing agency in Dubai, UAE, </strong> we don’t
              just create content; we create digital experiences that attract,
              engage, and convert.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Our goal is simple: to help your brand build authority, connect
              with your audience, and drive measurable growth. From SEO-rich
              blogs to high-converting social media content, we design campaigns
              that work for both search engines and people.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              If you’re looking for{" "}
              <strong>content marketing services in Dubai, UAE </strong>
              that combine clarity, creativity, and conversions, you’re in the
              right place.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="w-11/12 md:w-5/6 mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center md:text-left">
            Why Content Marketing Matters in Dubai, UAE
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg mb-10 ">
            Content marketing is more than writing articles; it’s about building
            trust, visibility, and long-term relationships in a crowded digital
            space. Done right, it transforms your website into a lead-generation
            machine, your social media into an engagement hub, and your brand
            into a thought leader.
          </p>

          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-8 rounded-2xl shadow-md border border-yellow-200">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              With years of expertise as a trusted content marketing agency in
              Dubai, UAE, we understand that impactful content must do three
              things:
            </h3>

            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold">•</span>
                <span>
                  <strong>Get Found:</strong> Optimized for search engines with
                  smart SEO strategies.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold">•</span>
                <span>
                  <strong>Get Read:</strong> Engaging and valuable content that
                  keeps audiences hooked.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold">•</span>
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
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl text-left font-bold text-gray-900 dark:text-white">
            Our Core{" "}
            <span className="text-[var(--primary-color)]">
              Content Marketing Services in Dubai
            </span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
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
      <section className="bg-white py-16">
        <div className="w-11/12 md:w-5/6 mx-auto px-6">
          {/* WHY CHOOSE US */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center md:text-left mb-6">
            Why Choose{" "}
            <span className="text-[var(--primary-color)]">
              BigWig Media Digital
            </span>{" "}
            as Your Content Marketing Agency in Dubai?
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg mb-10">
            We’re more than a content team; we’re your strategic partners in
            growth. Here’s what sets us apart:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: "SEO at the Core",
                desc: "From keyword research to on-page optimization, we create content that ranks.",
              },
              {
                title: "Unique Brand Voice",
                desc: "Every brand is different, and we ensure your content reflects your identity.",
              },
              {
                title: "Consistency & Scale",
                desc: "Whether you need a few blogs or full-scale campaigns, we deliver quality at any volume.",
              },
              {
                title: "Data-Driven Approach",
                desc: "Every piece of content is backed by research, analytics, and user intent.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-yellow-50 to-yellow-100 border border-yellow-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* HOW WE BUILD ENGINE */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center md:text-left mb-10">
            How We Build Your{" "}
            <span className="text-[var(--primary-color)]">
              Content Marketing Engine
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "1.",
                title: "Discovery & Goal Mapping",
                desc: "We understand your business, audience, and objectives to set the right direction.",
              },
              {
                step: "2.",
                title: "Topic & SEO Planning",
                desc: "In-depth keyword research and competitor analysis for maximum visibility.",
              },
              {
                step: "3.",
                title: "Content Creation & Optimization",
                desc: "We craft high-quality, search-friendly, and engaging content that connects.",
              },
              {
                step: "4.",
                title: "Publishing & Promotion",
                desc: "Content is distributed across the right platforms to reach your ideal audience.",
              },
              {
                step: "5.",
                title: "Performance Tracking & Reporting",
                desc: "We analyze performance metrics to refine and scale your campaigns effectively.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition"
              >
                <div className="text-[var(--primary-color)] font-bold text-2xl mb-3">
                  {step.step} {step.title}
                </div>
                <p className="text-gray-700 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-yellow-50 to-yellow-100 py-10 px-6 rounded-2xl shadow-inner">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Fuel Your Brand Growth with Content That Works
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Your audience in Dubai expects value. Your brand deserves
              visibility. At <strong>BigWig Media Digital</strong>, we deliver
              content marketing services in Dubai, UAE, designed to make your
              business stand out, scale, and succeed.
            </p>
          </div>
        </div>
      </section>

      <OurProcess />
      <WhyBigwig />
      <CTABanner
        title="Let’s create content that drives growth, builds trust, and makes your brand stand out in Dubai."
        buttonText="Get Started Today"
      />
      <Footer />
      {/* <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} /> */}
    </div>
  );
}

export default ContentMarketingInDubai;

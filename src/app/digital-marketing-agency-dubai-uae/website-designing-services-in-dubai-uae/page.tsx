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

import Image from "next/image";
import GetInTouch from "../../../../components/GetInTouch";
import ServicesNavigation from "../../../../components/UAEServicesDirectory";

function WebDesignInDubai() {
  //   const [isPopupOpen, setIsPopupOpen] = useState(false);

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
              Best Website Designing Services in Dubai, UAE
            </h1>
            <h2 className="text-2xl font-semibold leading-tight">
              Your Trusted Website Designing Agency in Dubai, UAE
            </h2>
            <p className="text-lg">
              A professional website is no longer just an option; it’s a
              necessity. At <strong>BigWig Digital</strong>, we specialize in
              delivering <strong>website design services in Dubai</strong> that
              are creative, scalable, and results-driven. As a leading{" "}
              <strong>website designing agency in Dubai, UAE</strong>, we craft
              designs that don’t just look good but also help businesses achieve
              measurable growth in the competitive digital landscape.
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
              src={seoImage} // replace with your web development image
              alt="Best Web Development Company in Dubai, UAE"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-3xl  font-bold mb-6 text-[var(--color5)]">
              Best Web Development Company in Dubai, UAE
            </h2>

            <p className="text-gray-300 mb-4 leading-relaxed text-base">
              At <strong>BigWig Digital</strong>, we go beyond coding — we craft
              high-performing, visually stunning, and conversion-optimized
              websites that fuel your business growth. We specialize in creating
              <strong> mobile-responsive, SEO-friendly</strong> websites
              tailored to your goals.
            </p>

            <div className="bg-gradient-to-r from-var(--color1) to-[var(--color2)] p-4 rounded-2xl shadow-md border border-[var(--color5)]">
              <h3 className="text-2xl font-semibold text-[var(--color5)] mb-4">
                Why Clients Choose Us
              </h3>
              <ul className="space-y-3 text-gray-300 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color5)] font-bold">•</span>
                  High-quality, mobile-responsive websites
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color5)] font-bold">•</span>
                  Cost-effective and easy-to-manage web solutions
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color5)] font-bold">•</span>
                  Attractive, conversion-focused landing pages
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color5)] font-bold">•</span>
                  SEO-friendly website structures
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color5)] font-bold">•</span>
                  More than 900 successful projects delivered
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12 ">
        {/* Wrapper Box with Inner Shadow */}
        <div
          className="
      relative rounded-3xl p-10 md:p-14 
      bg-[var(--color1)]/60 backdrop-blur-xl
      border border-white/10 
      shadow-[0_0_30px_rgba(0,0,0,0.45)]
      ring-1 ring-white/5
      overflow-hidden
    "
        >
          {/* Inner shadow effect */}
          <div
            className="absolute inset-0 rounded-3xl 
        shadow-[inset_0_0_40px_rgba(0,0,0,0.6)] pointer-events-none"
          ></div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <h2 className="text-3xl  font-bold text-[var(--color5)] mb-6 tracking-wide drop-shadow-[0_0_12px_rgba(167,235,242,0.45)]">
              We Focus on Your Growth, Not Just Websites
            </h2>

            <p className="text-lg text-white/85 leading-relaxed max-w-3xl mx-auto">
              At{" "}
              <strong className="text-[var(--color5)]">BigWig Digital</strong>,
              we’re more than a website designing agency in Dubai — we are your
              growth partners. Whether it’s digital marketing, website design,
              or full-scale development, our services are backed by expertise,
              creativity, and a results-oriented approach.
            </p>
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12">
        {/* HEADER */}
        <div className="text-center mb-14 relative">
          <h2 className="text-3xl font-bold mb-4 text-[var(--color5)]">
            Custom Web Development for Every Business Need
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
            We deliver high-performance, user-friendly, scalable platforms
            tailored to your business goals in the UAE market — built with the
            latest tech and a growth-first mindset.
          </p>

          {/* Soft Glow Behind Heading */}
          <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-[var(--color4)]/20 rounded-full mx-auto w-40 h-40"></div>
        </div>

        {/* KEY SERVICES */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            "User-Friendly, High-Performance Websites",
            "eCommerce Platforms (Shopify / WooCommerce / Custom)",
            "CMS Websites (WordPress, Webflow, Headless CMS)",
            "Web Apps & SaaS Products",
            "Enterprise Portals & Internal Systems",
          ].map((point, i) => (
            <div
              key={i}
              className="
          relative p-6 rounded-2xl overflow-hidden
          bg-[var(--color1)]/60 border border-white/10 
          backdrop-blur-xl shadow-[0_10px_25px_rgba(0,0,0,0.45)]
          hover:shadow-[0_0_25px_var(--color5)] hover:-translate-y-1
          transition-all duration-300
        "
            >
              {/* Matrix Overlay */}
              <div
                className="
          absolute inset-0 opacity-[0.12] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')]
          bg-cover bg-center mix-blend-soft-light pointer-events-none
        "
              ></div>

              {/* Neon Border Glow */}
              <div
                className="
          absolute inset-0 rounded-2xl border border-transparent
          group-hover:border-[var(--color5)] transition-all duration-300
        "
              ></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="
              w-10 h-10 flex items-center justify-center
              rounded-full bg-[var(--color5)]/20 border border-[var(--color5)]/40
              shadow-[0_0_12px_var(--color5)]
              text-[var(--color5)] font-bold
            "
                  >
                    {i + 1}
                  </div>
                  <h3 className="text-base font-semibold text-[var(--color4)]">
                    {point}
                  </h3>
                </div>

                <p className="text-white/70 text-sm leading-relaxed">
                  Tailored to the unique needs of UAE businesses, ensuring
                  performance, security, and long-term scalability.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ADVANCED CAPABILITIES – 4 CARDS */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT COLUMN */}
          <div className="flex flex-col space-y-10">
            {/* Card 1 */}
            <div
              className="
        p-6 rounded-2xl bg-[var(--color1)]/60 border border-white/10
        shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]
        backdrop-blur-xl 
        transition-all duration-300 relative overflow-hidden
      "
            >
              {/* Glow Blob */}
              <div
                className="
          absolute -right-10 -top-10 w-44 h-44 rounded-full 
          bg-[var(--color4)]/20 blur-3xl opacity-30
        "
              ></div>

              <h3 className="text-2xl font-bold text-[var(--color5)] mb-4">
                Future-Ready Technologies for Scalable Solutions
              </h3>
              <p className="text-white/70">
                We use{" "}
                <strong>
                  React.js, Angular, Vue.js, Node.js, PWAs, AI tools,
                  automation, cloud APIs
                </strong>{" "}
                and more to build systems that last — and grow as your business
                grows.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="
        p-6 rounded-2xl bg-[var(--color1)]/60 border border-white/10
        shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]
        backdrop-blur-xl
        transition-all duration-300 relative overflow-hidden
      "
            >
              <div
                className="
          absolute -right-10 -top-10 w-44 h-44 rounded-full 
          bg-[var(--color3)]/20 blur-3xl opacity-30
        "
              ></div>

              <h3 className="text-2xl font-bold text-[var(--color5)] mb-4">
                Designed for Experience & Engagement
              </h3>
              <p className="text-white/70">
                Every design is built with user psychology, engagement flow, and
                conversion science — including chatbots, smart navigation, and
                mobile-first UI.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col space-y-10">
            {/* Card 3 */}
            <div
              className="
        p-6 rounded-2xl bg-[var(--color1)]/60 border border-white/10
        shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]
        backdrop-blur-xl
        transition-all duration-300 relative overflow-hidden
      "
            >
              <div
                className="
          absolute -right-10 -top-10 w-44 h-44 rounded-full 
          bg-[var(--color2)]/20 blur-3xl opacity-30
        "
              ></div>

              <h3 className="text-2xl font-bold text-[var(--color5)] mb-4">
                Creative Design Backed by Strategy
              </h3>
              <p className="text-white/70">
                As a trusted web design agency in Dubai, we merge creativity
                with business strategy — building credibility, trust, and brand
                presence.
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="
        p-6 rounded-2xl bg-[var(--color1)]/60 border border-white/10
        shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]
        backdrop-blur-xl 
        transition-all duration-300 relative overflow-hidden
      "
            >
              <div
                className="
          absolute -right-10 -top-10 w-44 h-44 rounded-full 
          bg-[var(--color4)]/10 blur-3xl opacity-30
        "
              ></div>

              <h3 className="text-2xl font-bold text-[var(--color5)] mb-4">
                Trusted by Brands Worldwide
              </h3>
              <p className="text-white/70">
                With <strong>900+ successful projects</strong> across
                industries, we are one of the fastest-growing technology
                partners expanding from India to the UAE.
              </p>
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

export default WebDesignInDubai;

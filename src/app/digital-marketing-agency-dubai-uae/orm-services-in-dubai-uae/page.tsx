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
import ServicesDirectory from "../../../../components/UAEServicesDirectory";

function InfluenceDubai() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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
              ORM Services in Dubai
            </h1>
            <h2 className="text-2xl font-semibold leading-tight">
              Build Trust and Protect Your Reputation with Expert Online
              Reputation Management Services in Dubai
            </h2>
            <p className="text-lg">
              In Dubai’s digital market, BigWig Media Digital strengthens your
              online presence through strategic Online Reputation Management. We
              help you build trust, protect your brand image, and enhance
              credibility across all digital platforms to improve engagement,
              visibility, and ROI.
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
          {/* Left Side - Text */}
          <div>
            <h1 className="text-3xl font-bold mb-4 text-[var(--color5)]">
              Protect, Repair & Strengthen Your Brand Image with Professional
              ORM Services in Dubai
            </h1>

            <p className="text-gray-300  mb-4 leading-relaxed">
              In Dubai’s competitive business environment, your online
              reputation can make or break your success. With consumers relying
              heavily on Google reviews, social media comments, and online
              discussions before making decisions, maintaining a positive
              digital presence is no longer optional — it’s essential.
            </p>

            <p className="text-gray-300  mb-4 leading-relaxed">
              At <strong>BigWig Media Digital</strong>, we specialize in
              <strong> ORM Services in Dubai</strong> designed to monitor,
              manage, and improve your brand’s online image. From handling
              negative feedback to boosting positive visibility, we ensure your
              reputation truly reflects the quality and trust your business
              delivers.
            </p>

            <p className="text-gray-300  leading-relaxed">
              Whether you’re a startup building credibility, a corporate firm
              managing public perception, or a brand recovering from a
              reputation crisis, our
              <strong>
                {" "}
                Online Reputation Management Services in Dubai
              </strong>{" "}
              help you stay ahead and trusted.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <Image
              src={seoImage} // Replace with your ORM service image
              alt="Online Reputation Management Services in Dubai"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12">
        <div
          className="rounded-3xl p-10 shadow-[0_0_40px_rgba(0,0,0,0.3)] 
      bg-[var(--color1)]/60 backdrop-blur-xl border border-white/10"
        >
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[var(--color5)] mb-6 leading-snug">
            Why Online Reputation Management Matters in Dubai
          </h2>

          {/* Subtext */}
          <p className="text-base md:text-lg text-gray-300 mb-10 max-w-3xl">
            Dubai’s digital-first audience checks online reviews before making
            decisions. One negative comment can affect trust, conversions, and
            your brand image. ORM protects your business from misinformation and
            builds long-term credibility.
          </p>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "First Impressions Online",
                desc: "Your reputation defines your credibility before customers even contact you.",
              },
              {
                title: "Reviews Drive Decisions",
                desc: "Customer opinions influence buying behavior more than traditional ads.",
              },
              {
                title: "Control Negative Buzz",
                desc: "ORM prevents negative content from harming your online reputation.",
              },
              {
                title: "Boost SEO Visibility",
                desc: "A positive reputation increases your Google ranking significantly.",
              },
              {
                title: "Crisis Protection",
                desc: "Immediate ORM response protects your brand during unexpected situations.",
              },
              {
                title: "Ethical Reputation Building",
                desc: "We help you build a trustworthy and transparent brand presence.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl 
              shadow-[0_0_20px_rgba(255,255,255,0.05)] 
              border border-white/10 hover:shadow-[0_0_25px_rgba(167,235,242,0.25)]
              hover:border-[var(--color5)] transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[var(--color4)] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-[var(--color5)]">
            Our Comprehensive ORM Services in Dubai
          </h2>
          <p className="text-gray-300 mt-4 max-w-4xl leading-relaxed">
            We offer a complete suite of Online Reputation Management services
            tailored for individuals, startups, and enterprises in Dubai.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Reputation Monitoring",
              desc: "Real-time tracking of mentions, reviews, and discussions across Google, social platforms, blogs, and forums.",
            },
            {
              title: "Review Management",
              desc: "Replying, resolving complaints, improving ratings and building positive sentiment strategically.",
            },
            {
              title: "Search Result Optimization",
              desc: "Suppress negative results while boosting positive PR, blogs, and branded content.",
            },
            {
              title: "Brand Reputation Repair",
              desc: "Rebuild trust through digital PR, content creation, and strategic engagement.",
            },
            {
              title: "Crisis Management",
              desc: "Immediate ORM action with transparent communication and 24/7 monitoring.",
            },
            {
              title: "Social Media Reputation",
              desc: "End-to-end reputation handling across Instagram, Facebook, LinkedIn, X, and YouTube.",
            },
            {
              title: "Personal Reputation Management",
              desc: "Improve visibility for CEOs, founders, and professionals by cleaning search results.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
            group p-6 rounded-2xl relative overflow-hidden
            bg-[var(--color1)]/60 border border-white/10 backdrop-blur-xl
            shadow-[0_0_25px_rgba(0,0,0,0.4)] 
            hover:border-[var(--color5)] hover:shadow-[0_0_40px_rgba(167,235,242,0.35)]
            transition-all duration-300
          "
            >
              <div className="absolute inset-0 opacity-10 bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center pointer-events-none"></div>

              {/* Glow Blob */}

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-[var(--color5)] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-8">
          <ButtonFill
            onClick={() => setIsPopupOpen(true)}
            text="Get Started with BigWig Media Digital"
          />
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12">
        {/* Heading */}
        <div className=" mb-6">
          <h2 className="text-3xl font-bold text-[var(--color5)] mb-4">
            Our Proven ORM Process
          </h2>
          <p className="text-gray-300 max-w-4xl leading-relaxed">
            A transparent, ethical, and data-driven approach to managing and
            strengthening your online reputation.
          </p>
        </div>

        {/* Tile Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              num: "01",
              title: "Reputation Audit",
              desc: "We review Google results, reviews, and social mentions to understand your current online sentiment.",
            },
            {
              num: "02",
              title: "Strategy Development",
              desc: "We build a tailored ORM plan to fix weaknesses, highlight strengths, and align with your business goals.",
            },
            {
              num: "03",
              title: "Implementation",
              desc: "We execute the strategy using SEO, PR, content creation, review handling, and social engagement.",
            },
            {
              num: "04",
              title: "Continuous Monitoring",
              desc: "We monitor your online presence 24/7 to track new mentions and respond proactively.",
            },
            {
              num: "05",
              title: "Reporting",
              desc: "Monthly reports with sentiment analysis and reputation improvements.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="
          relative p-8 rounded-2xl overflow-hidden
          bg-[var(--color1)]/60 backdrop-blur-xl
          border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.45)]
          hover:shadow-[0_0_40px_rgba(167,235,242,0.35)]
          hover:border-[var(--color5)]
          transition-all duration-300
        "
            >
              {/* Hologram BG */}
              <div
                className="
            absolute inset-0 opacity-10 
            bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')]
            bg-cover bg-center pointer-events-none
          "
              ></div>

              {/* Glow Blob */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[var(--color4)]/40 blur-2xl"></div>

              {/* Number */}
              <div
                className="
            text-5xl font-extrabold mb-4 
            text-[var(--color5)] drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]
          "
              >
                {step.num}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-[var(--color5)] mb-3">
                {step.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <ButtonFill
            onClick={() => setIsPopupOpen(true)}
            text="Request a Free Audit"
          />
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12 space-y-8">
        {/* Section Title */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--color5)] mb-4">
            Why Choose BigWig Media Digital for ORM Services in Dubai
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Reputation management requires experience, discretion, and strategy
            — and that’s exactly what we bring.
          </p>
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Dubai Market Expertise",
              desc: "We understand the cultural, social, and business nuances that shape public perception in the UAE.",
            },
            {
              title: "24/7 Monitoring",
              desc: "Our tools and team continuously track your online footprint to detect issues instantly.",
            },
            {
              title: "Custom ORM Plans",
              desc: "Tailored strategies crafted for businesses, CEOs, founders, and public personalities.",
            },
            {
              title: "White-Hat Practices",
              desc: "100% ethical ORM methods that comply with Google’s and platform-wide policies.",
            },
            {
              title: "Integration with PR & SEO",
              desc: "We strengthen your brand with ORM blended seamlessly with digital PR and SEO.",
            },
            {
              title: "Confidential Handling",
              desc: "Your identity, privacy, and brand reputation are managed with complete confidentiality.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
          group p-6 rounded-2xl relative overflow-hidden
          bg-[var(--color1)]/60 border border-white/10 backdrop-blur-xl
          shadow-[0_0_25px_rgba(0,0,0,0.4)]
          hover:border-[var(--color5)] hover:shadow-[0_0_40px_rgba(167,235,242,0.35)]
          transition-all duration-300
        "
            >
              {/* Hologram Background */}
              <div className="absolute inset-0 opacity-10 bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center pointer-events-none"></div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-[var(--color5)] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12">
        {/* Section Title */}
        <div className="max-w-4xl mb-8">
          <h2 className="text-3xl font-bold text-[var(--color5)] mb-4">
            Benefits of ORM for Your Business
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Strong online reputation = stronger business growth. Here’s what you
            gain with our ORM Services in Dubai:
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {[
            {
              title: "Enhanced Brand Credibility",
              desc: "Build trust with your audience and stakeholders.",
            },
            {
              title: "Higher Conversions",
              desc: "Positive reviews and visibility lead to more inquiries and sales.",
            },
            {
              title: "Improved SEO Rankings",
              desc: "Optimized reputation boosts search performance.",
            },
            {
              title: "Customer Retention",
              desc: "Responding to feedback improves loyalty.",
            },
            {
              title: "Crisis Protection",
              desc: "Stay ahead of negative press and online attacks.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="
          group p-6 rounded-2xl relative overflow-hidden
          bg-[var(--color1)]/60 border border-white/10 backdrop-blur-xl
          shadow-[0_0_25px_rgba(0,0,0,0.4)] 
          hover:border-[var(--color5)] hover:shadow-[0_0_40px_rgba(167,235,242,0.35)]
          transition-all duration-300
        "
            >
              {/* Hologram BG */}
              <div className="absolute inset-0 opacity-10 bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center pointer-events-none"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-[var(--color5)] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dubai Business Context */}
        <div
          className="
      group p-8 rounded-2xl relative overflow-hidden
      bg-[var(--color1)]/60 border border-white/10 backdrop-blur-xl
      shadow-[0_0_25px_rgba(0,0,0,0.4)] 
      hover:border-[var(--color5)] hover:shadow-[0_0_40px_rgba(167,235,242,0.35)]
      transition-all duration-300 mb-10
    "
        >
          {/* BG Texture */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-center bg-cover pointer-events-none"></div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-[var(--color5)] mb-4">
              Dubai’s Business Environment Demands Reputation Excellence
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Dubai is a hub of innovation, entrepreneurship, and global
              business. Whether you run a real estate firm, luxury brand, or
              tech startup, your reputation defines your credibility and
              customer trust.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our ORM Services in Dubai ensure that your brand always looks its
              best — on Google, social media, and beyond. Let your online image
              reflect your real-world excellence.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6">
          <h3 className="text-3xl  font-bold text-[var(--color5)]">
            Let’s Build a Positive Digital Presence for Your Brand
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Your digital image deserves proactive care. With our Online
            Reputation Management Services in Dubai, you get full control over
            how your audience perceives you — and confidence knowing your
            reputation is in safe hands.
          </p>
          <div className="flex justify-center">
            <ButtonFill
              onClick={() => setIsPopupOpen(true)}
              text="Get Started Today"
            />
          </div>
        </div>
      </section>

      <OurProcess />
      <WhyBigwig />
      <ServicesDirectory />
      <GetInTouch />

      <Footer />
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}

export default InfluenceDubai;

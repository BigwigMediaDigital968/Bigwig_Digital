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

function AffiliateMarketingDubai() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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

      <section className="w-11/12 md:w-5/6 mx-auto py-12 bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Boost Your Sales with High-Performance Affiliate Marketing
              Services in Dubai
            </h1>

            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              In today’s competitive digital world, businesses in Dubai need
              smarter, performance-driven strategies to grow — not just
              traditional marketing. That’s where{" "}
              <strong>BigWig Media Digital</strong> comes in with our expert{" "}
              <strong>Affiliate Marketing Services in Dubai</strong>.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              We help brands build, manage, and scale affiliate programs that
              deliver real, measurable results. From connecting you with
              top-performing affiliates to optimizing campaigns for maximum ROI,
              we turn every click into a conversion and every partnership into
              profit.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
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

      <section className="w-11/12 md:w-5/6 mx-auto py-12">
        {/* Wrapper with split styling */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Section - What is Affiliate Marketing */}
          <div className=" rounded-3xl shadow-lg p-8 border-l-4 border-blue-400">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              What Is Affiliate Marketing?
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              <strong>Affiliate marketing</strong> is a performance-based
              marketing strategy where brands collaborate with affiliates
              (publishers, influencers, or content creators) who promote their
              products or services in exchange for a commission on each sale,
              lead, or click.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Unlike traditional advertising, affiliate marketing ensures{" "}
              <strong>zero wastage of budget</strong> — you only pay when you
              get actual results.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our <strong>Affiliate Marketing Services in Dubai</strong> include
              everything from partner recruitment and campaign setup to
              tracking, reporting, and optimization.
            </p>
          </div>

          {/* Right Section - Why it works in Dubai */}
          <div className=" rounded-3xl shadow-lg p-8 border-l-4 border-blue-400">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Why Affiliate Marketing Works Best in Dubai
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Dubai is one of the fastest-growing e-commerce and digital
              business hubs in the world. With a tech-savvy population, high
              social media usage, and strong purchasing power, it’s a fertile
              ground for affiliate-driven growth.
            </p>

            <ul className="space-y-4">
              {[
                "The UAE’s online user base is expanding rapidly.",
                "High smartphone and e-commerce adoption rates mean more conversions.",
                "Influencer marketing blends seamlessly with affiliate partnerships.",
                "Global affiliate platforms already have reach in the Middle East region.",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-3 h-3 mt-2 bg-blue-600 rounded-full shadow-md animate-pulse"></span>
                  <p className="ml-4 text-gray-700 dark:text-gray-300">
                    {item}
                  </p>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              Whether you run an <strong>online store</strong>,{" "}
              <strong>SaaS product</strong>, or a{" "}
              <strong>service-based company</strong>, our Affiliate Marketing
              Services in Dubai help you reach the right audience — locally and
              internationally.
            </p>
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Affiliate Marketing Services Include
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At <strong>BigWig Media Digital</strong>, we offer end-to-end{" "}
            <strong>Affiliate Marketing Services in Dubai</strong>, ensuring
            your program runs efficiently and delivers consistent ROI.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "1. Affiliate Program Strategy & Setup",
              desc: "We begin by defining your goals, audience, and KPIs. Then, we set up a custom affiliate marketing framework that includes tracking mechanisms, payout structures, and campaign strategies tailored to your brand.",
            },
            {
              title: "2. Affiliate Recruitment",
              desc: "Our network includes trusted affiliates, influencers, bloggers, and digital publishers across Dubai and the UAE. We identify and onboard the best partners who align with your industry and target audience.",
            },
            {
              title: "3. Campaign Management",
              desc: "From daily communication to content coordination and performance tracking, our team manages every aspect of your affiliate campaign — ensuring smooth execution.",
            },
            {
              title: "4. Performance Tracking & Reporting",
              desc: "We use advanced analytics tools to track conversions, traffic, and sales in real-time. You’ll receive monthly performance reports detailing ROI, affiliate performance, and opportunities for improvement.",
            },
            {
              title: "5. Creative & Content Support",
              desc: "We design engaging creatives, landing pages, banners, and content for affiliates to use — ensuring your brand messaging remains consistent and conversion-focused.",
            },
            {
              title: "6. Compliance & Quality Control",
              desc: "We ensure every affiliate follows ethical marketing practices, brand guidelines, and platform policies. No spam, fake leads, or misleading promotions — ever.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-blue-200 rounded-2xl p-6 hover:shadow-lg transition transform hover:-translate-y-1 bg-white"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-8 bg-gradient-to-r from-yellow-50 to-yellow-100 p-10 rounded-2xl">
          <p className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed">
            Want to start earning more while spending less? <br />
            Get started with{" "}
            <strong>
              BigWig Media Digital’s Affiliate Marketing Services in Dubai
            </strong>{" "}
            today.
          </p>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="bg-[var(--primary-color)] text-white font-semibold py-4 px-8 rounded-full shadow-lg transition transform hover:-translate-y-1"
          >
            Get Started Today
          </button>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12">
        {/* Title Section */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Process: How We Build Successful Affiliate Campaigns
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We follow a transparent, data-driven approach to ensure your
            affiliate campaigns perform consistently.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              num: "1",
              title: "Market & Competitor Analysis",
              desc: "We research your industry, audience behavior, and competitor strategies in Dubai.",
            },
            {
              num: "2",
              title: "Affiliate Network Selection",
              desc: "Choosing the right platforms (ShareASale, CJ, Impact, or private networks) for your brand.",
            },
            {
              num: "3",
              title: "Affiliate Vetting",
              desc: "Hand-picking affiliates who meet your performance and reputation standards.",
            },
            {
              num: "4",
              title: "Offer Structuring",
              desc: "Setting attractive commission models (CPA, CPS, CPL) that motivate affiliates.",
            },
            {
              num: "5",
              title: "Creative Deployment",
              desc: "Providing ready-to-use creatives for faster campaign launch.",
            },
            {
              num: "6",
              title: "Continuous Optimization",
              desc: "Regular performance audits to improve conversions and lower acquisition costs.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="relative bg-white border border-blue-200/60 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              {/* Gradient Circle Number */}
              <div className="absolute -top-6 left-6 bg-[var(--primary-color)] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition">
                {step.num}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">
                {step.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative w-11/12 md:w-5/6 mx-auto py-12">
        {/* Background Gradient */}

        <div className="relative grid lg:grid-cols-2 gap-12 items-start z-10">
          {/* LEFT SECTION */}
          <div className="bg-white/80 backdrop-blur-md border-l-4 border-blue-400 rounded-3xl shadow-md p-10 hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose{" "}
              <span className="text-[var(--primary-color)]">
                BigWig Media Digital
              </span>{" "}
              for Affiliate Marketing in Dubai
            </h2>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Partnering with BigWig Media Digital means teaming up with one of
              Dubai’s most trusted digital growth agencies. Here’s what makes
              our Affiliate Marketing Services stand out:
            </p>

            <ul className="space-y-5">
              {[
                "Local Expertise: We understand Dubai’s consumer behavior and regional platforms.",
                "Verified Affiliate Network: Access to a vetted network of reliable and high-performing affiliates.",
                "End-to-End Management: From setup to tracking and payouts — we handle it all.",
                "Transparent ROI Tracking: You see where every dollar goes and what it returns.",
                "Multilingual Campaigns: Arabic-English affiliate marketing campaigns for UAE audiences.",
                "SEO + Performance Integration: We combine affiliate marketing with organic and paid strategies for full-funnel growth.",
              ].map((point, index) => (
                <li key={index} className="flex items-start space-x-4 group">
                  <div className="relative w-3.5 h-3.5 mt-2">
                    <span className="absolute inset-0 bg-[var(--primary-color)] rounded-full animate-pulse opacity-70"></span>
                    <span className="absolute inset-1 bg-[var(--primary-color)] rounded-full"></span>
                  </div>
                  <p className="text-gray-800 group-hover:text-[var(--primary-color)] transition-colors duration-200">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT SECTION */}
          <div className=" flex flex-col justify-between ">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
                Benefits of Affiliate Marketing for Your Business
              </h2>

              <p className="text-gray-700 mb-6 text-center leading-relaxed max-w-2xl mx-auto">
                Affiliate marketing offers measurable results and cost-efficient
                scalability. Here’s what you gain:
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Increased Sales and Leads",
                    desc: "Drive qualified traffic and grow your revenue.",
                  },
                  {
                    title: "Performance-Based ROI",
                    desc: "Pay only when a sale or lead happens.",
                  },
                  {
                    title: "Global Reach",
                    desc: "Expand your visibility beyond Dubai into the GCC region.",
                  },
                  {
                    title: "Low Risk, High Reward",
                    desc: "Ideal for startups and SMEs looking for measurable returns.",
                  },
                  {
                    title: "Improved Brand Awareness",
                    desc: "Collaborate with influential voices to strengthen your presence.",
                  },
                  {
                    title: "Scalable Growth",
                    desc: "Optimize your spend for maximum performance and reach.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/90 backdrop-blur-sm border border-blue-200 rounded-2xl p-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 text-center bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-2xl">
              <p className="text-gray-800 text-base mb-4">
                Want a marketing strategy that pays for itself?
              </p>
              <button
                onClick={() => setIsPopupOpen(true)}
                className="bg-[var(--primary-color)] text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12 space-y-12">
        {/* SECTION 1: How Affiliate Marketing Improves Presence */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How Affiliate Marketing{" "}
              <span className="text-[var(--primary-color)]">
                Improves Your Digital Presence
              </span>
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Affiliate marketing isn’t just about sales — it strengthens your
              entire digital ecosystem.
            </p>
            <ul className="space-y-5">
              {[
                "Enhances SEO through backlink building and brand mentions.",
                "Increases social visibility via influencer partnerships.",
                "Improves brand credibility by leveraging trusted third-party voices.",
                "Supports omnichannel marketing for a seamless customer journey.",
              ].map((point, index) => (
                <li key={index} className="flex items-start space-x-3 group">
                  <div className="w-3 h-3 rounded-full bg-[var(--primary-color)] mt-2 group-hover:scale-125 transition-transform"></div>
                  <p className="text-gray-800 group-hover:text-[var(--primary-color)] transition-colors">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 border border-blue-200 rounded-3xl shadow-md p-10">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Local Advantage — Why Dubai Businesses Trust Us
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Dubai’s business environment demands fast results, transparency,
              and scalability. Our localized approach ensures:
            </p>
            <ul className="space-y-4">
              {[
                "Affiliate partnerships with UAE-based creators and media publishers.",
                "Campaigns that align with Dubai’s language, culture, and buying trends.",
                "Real-time campaign tracking and reporting via Dubai time zone operations.",
              ].map((point, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-3 h-3 rounded-full bg-blue-400 mt-2"></div>
                  <p className="text-gray-800">{point}</p>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 mt-8 leading-relaxed">
              With <strong>BigWig Media Digital</strong>, your brand grows with
              precision and purpose.
            </p>
          </div>
        </div>

        {/* SECTION 2: CTA */}
        <div className="text-center bg-gradient-to-r from-[var(--primary-color)]/10 via-white to-[var(--primary-color)]/10 border border-blue-100 rounded-3xl py-16 px-6 shadow-inner">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Let’s Build a Profitable Affiliate Network for Your Brand
          </h2>

          <p className="text-gray-700 max-w-3xl mx-auto mb-6 leading-relaxed">
            Your business deserves consistent sales growth — without
            overspending. Our{" "}
            <strong>Affiliate Marketing Services in Dubai</strong> empower your
            brand with a sustainable, performance-driven growth model that
            delivers measurable success.
          </p>

          <p className="text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Don’t rely on traditional ads alone; let affiliates promote your
            business and drive real results.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setIsPopupOpen(true)}
              className="bg-[var(--primary-color)] text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Get Free Consultation
            </button>
            <a
              href="mailto:vipul@bigwigmedia.in"
              className="text-[var(--primary-color)] font-medium hover:underline"
            >
              📩 Email us today
            </a>
          </div>

          <p className="text-gray-800 mt-8 font-semibold text-lg">
            🚀 Partner with{" "}
            <span className="text-[var(--primary-color)]">
              BigWig Media Digital
            </span>{" "}
            — the leaders in Affiliate Marketing Services in Dubai — and watch
            your profits grow every day.
          </p>
        </div>
      </section>

      <OurProcess />
      <WhyBigwig />
      <CTABanner
        title="Boost Sales and Partnerships with Expert Affiliate Marketing Services in Dubai."
        buttonText="Get Started Today"
      />

      <Footer />
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}

export default AffiliateMarketingDubai;

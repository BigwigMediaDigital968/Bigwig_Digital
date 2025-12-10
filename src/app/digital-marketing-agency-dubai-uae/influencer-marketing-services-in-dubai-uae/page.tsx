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

function InfluenceDubai() {
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

      <section className="w-11/12 md:w-5/6 mx-auto py-12 bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Amplify Your Brand Voice with Strategic Influencer Marketing
              Services in Dubai
            </h1>

            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              In the digital-first world of Dubai, where trends shift faster
              than ever, traditional ads often fall short. People don’t just buy
              products anymore — they buy trust, authenticity, and influence. At{" "}
              <strong>BigWig Media Digital</strong>, we bridge the gap between
              brands and audiences through powerful, data-driven{" "}
              <strong>Influencer Marketing Services in Dubai</strong>.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Our strategies connect you with the right influencers — those who
              genuinely resonate with your audience — to create real
              conversations, drive engagement, and boost conversions.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Whether you’re launching a new product, scaling your brand
              presence, or targeting a niche market, our influencer marketing
              team ensures your campaigns make an impact where it matters most —
              on social media and in people’s minds.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <Image
              src={seoImage} // Replace with your Influencer Marketing image
              alt="Influencer Marketing Services in Dubai"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Influencer Marketing Works in Dubai
          </h2>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Dubai is one of the most digitally active cities in the world. With
            a social media penetration rate exceeding 98%, it’s a paradise for
            brands looking to engage with customers online. From
            micro-influencers with loyal followings to macro-creators and
            celebrities, the influencer ecosystem in Dubai is vibrant and
            powerful.
          </p>

          <div className="grid sm:grid-cols-2 gap-8 text-left">
            {[
              "Instant awareness among a highly targeted audience.",
              "Authentic brand engagement through trusted voices.",
              "Higher conversions compared to traditional ads.",
              "Localized content that appeals to Dubai’s multicultural audience.",
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-4 h-4 mt-2 bg-[var(--primary-color)] rounded-full flex-shrink-0"></div>
                <p className="text-gray-800">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-700 mt-8 leading-relaxed">
            Our <strong>Influencer Marketing Services in Dubai</strong> ensure
            your brand is not just seen — it’s believed in.
          </p>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Range of Influencer Marketing Services in Dubai
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We offer end-to-end influencer marketing solutions - from strategy
            to execution - ensuring your campaign delivers measurable results.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Influencer Strategy & Campaign Planning",
              desc: "We start with a data-backed strategy that aligns with your goals - whether it’s brand awareness, lead generation, or sales. Every campaign is tailored to your industry, audience, and tone.",
            },
            {
              title: "Influencer Identification & Shortlisting",
              desc: "Our influencer network spans micro, macro, and celebrity influencers across Instagram, TikTok, YouTube, LinkedIn, and Snapchat. Using advanced analytics tools, we identify influencers whose audience demographics match your target customers.",
            },
            {
              title: "Campaign Execution",
              desc: "From content briefs and storytelling to coordination and publishing, we handle every detail - ensuring brand consistency and creative authenticity.",
            },
            {
              title: "Contract & Negotiation Management",
              desc: "We manage influencer agreements, deliverables, and timelines professionally - ensuring transparency and compliance.",
            },
            {
              title: "Content Creation Support",
              desc: "Need assistance in crafting visuals, scripts, or post concepts? Our creative team collaborates with influencers to ensure the content is visually stunning and results-driven.",
            },
            {
              title: "Tracking & Performance Reporting",
              desc: "We use real-time analytics to measure reach, impressions, engagement, clicks, and conversions. You get detailed reports to track ROI on every campaign.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-4 bg-gradient-to-r from-yellow-50 to-yellow-100 p-8 rounded-2xl">
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Want your next campaign to go viral? Let’s get started with BigWig
            Media Digital’s Influencer Marketing Services in Dubai.
          </p>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="bg-[var(--primary-color)] cursor-pointer text-white font-semibold py-3 px-8 rounded-full shadow-lg transition transform hover:-translate-y-1"
          >
            Get Started Today
          </button>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Types of Influencer Campaigns We Offer
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Every brand has different goals - and we’ve got tailored influencer
            marketing formats for each.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Brand Awareness Campaigns",
              desc: "Boost recognition and visibility with high-reach collaborations on Instagram, YouTube, and TikTok.",
            },
            {
              title: "Product Launches",
              desc: "Create buzz and anticipation with unboxing videos, teaser campaigns, and influencer event coverage.",
            },
            {
              title: "Review & Testimonial Campaigns",
              desc: "Build trust through authentic product reviews and endorsements that resonate with your audience.",
            },
            {
              title: "Event Influencer Collaborations",
              desc: "We help you invite and manage influencers to promote your events, trade shows, or launches in Dubai.",
            },
            {
              title: "Affiliate & Performance Campaigns",
              desc: "Integrate influencer marketing with affiliate promotions - ensuring you only pay for conversions or results.",
            },
            {
              title: "Long-Term Brand Ambassadorships",
              desc: "We help brands build lasting partnerships with select influencers for ongoing collaboration and loyalty.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-5 bg-gradient-to-r from-yellow-50 to-yellow-100 p-8 rounded-2xl">
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Every campaign we create is designed for impact - measurable,
            creative, and ROI-focused.
          </p>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="bg-[var(--primary-color)] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition transform hover:-translate-y-1"
          >
            Get Started Today
          </button>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12 space-y-20">
        {/* Section Wrapper */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Why Choose Us */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose{" "}
              <span className="text-[var(--primary-color)]">
                BigWig Media Digital
              </span>{" "}
              for Influencer Marketing in Dubai
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Partnering with BigWig Media Digital means you get more than
              influencer connections - you get strategy, storytelling, and
              success. Here’s why we’re one of the leading agencies offering
              Influencer Marketing Services in Dubai:
            </p>

            <ul className="space-y-4">
              {[
                "Verified Influencer Network: Access to 500+ influencers across Dubai, Abu Dhabi, and the GCC.",
                "Data-Driven Selection: We analyze engagement rate, audience demographics, and content quality before collaboration.",
                "End-to-End Campaign Management: From ideation to reporting, we handle everything.",
                "Cultural Relevance: Content that resonates with Dubai’s multilingual and multicultural audience.",
                "Cross-Platform Expertise: Campaigns optimized for Instagram, TikTok, YouTube, and LinkedIn.",
                "Affordable Packages: Flexible pricing for startups, SMEs, and large brands.",
                "Transparency & Reporting: Real-time performance insights and ROI tracking.",
              ].map((point, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-3 h-3 rounded-full bg-[var(--primary-color)] mt-2"></div>
                  <p className="text-gray-800">{point}</p>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Your audience trusts influencers - let us help them trust your
              brand too. Work with Dubai’s trusted agency for Influencer
              Marketing Services today.
            </p>
          </div>

          {/* Right Side - Benefits */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How Influencer Marketing Benefits Your Business
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Influencer marketing is not just a trend — it’s one of the most
              effective digital marketing channels. Here’s what our clients
              experience with our Influencer Marketing Services in Dubai:
            </p>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Stronger Brand Recognition",
                  desc: "Get noticed by your ideal customers.",
                },
                {
                  title: "Authentic Engagement",
                  desc: "Build genuine relationships with audiences through trusted voices.",
                },
                {
                  title: "Boosted Sales",
                  desc: "Influencers directly drive product discovery and purchase intent.",
                },
                {
                  title: "Improved SEO Visibility",
                  desc: "Branded mentions and backlinks enhance your Google ranking.",
                },
                {
                  title: "Community Growth",
                  desc: "Gain followers, engagement, and brand advocates organically.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12 space-y-20">
        {/* Section 1: Dubai’s Influencer Landscape */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Dubai’s Influencer Landscape - A Market of Opportunities
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Dubai is a global hub for influencers - from beauty gurus and tech
              reviewers to luxury lifestyle creators. The city’s influencer
              ecosystem is diverse, professional, and fast-growing.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our agency connects your brand with influencers who not only have
              the numbers but also real influence. We ensure your collaborations
              reflect Dubai’s values - authenticity, innovation, and quality.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Leverage Dubai’s influencer power to elevate your brand. Our
              Influencer Marketing Services in Dubai are designed to give you
              measurable exposure and engagement.
            </p>
          </div>

          {/* Right Side - Boxed Points */}
          <div className="bg-white border border-blue-100 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              How We Ensure Authenticity & Compliance
            </h3>
            <ul className="space-y-3">
              {[
                "Only real influencers with organic audiences (no fake followers).",
                "Clear FTC disclosures and compliance with UAE media laws.",
                "Brand consistency across all influencer-generated content.",
                "Approval of all creatives before posting.",
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-3 h-3 rounded-full bg-[var(--primary-color)] mt-2"></div>
                  <p className="text-gray-700">{item}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Authenticity is the key to audience trust - and our Influencer
              Marketing Services in Dubai guarantee it.
            </p>
          </div>
        </div>

        {/* Section 2: Call to Action */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Let’s Build Your Next Influencer Campaign
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Whether you’re a startup aiming to build visibility or an
            established brand looking to dominate the Dubai market, influencer
            marketing can take you there faster. At BigWig Media Digital, we
            bring together creativity, data, and human connection to create
            campaigns that people remember — and act upon.
          </p>

          <div className="space-y-3">
            <p className="text-gray-700">
              📞 Ready to collaborate with Dubai’s top influencers?
            </p>
            <p className="text-gray-700">
              👉 Contact our influencer marketing team today for a free
              consultation.
            </p>
            <p className="text-gray-700">
              📩 Email us now to launch your next viral campaign with BigWig
              Media Digital’s Influencer Marketing Services in Dubai.
            </p>
          </div>

          <p className="text-gray-900 font-semibold mt-6">
            Don’t just advertise — influence. Partner with BigWig Media Digital,
            the leading agency for Influencer Marketing Services in Dubai, and
            turn your brand into the next social media sensation.
          </p>
        </div>
      </section>

      <OurProcess />
      <WhyBigwig />
      <CTABanner
        title="Amplify Your Brand with Proven Influencer Marketing Services in Dubai."
        buttonText="Get Started Today"
      />

      <Footer />
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}

export default InfluenceDubai;

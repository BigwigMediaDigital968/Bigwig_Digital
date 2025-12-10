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

      <section className="w-11/12 md:w-5/6 mx-auto py-12 bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Protect, Repair & Strengthen Your Brand Image with Professional
              ORM Services in Dubai
            </h1>

            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              In Dubai’s competitive business environment, your online
              reputation can make or break your success. With consumers relying
              heavily on Google reviews, social media comments, and online
              discussions before making decisions, maintaining a positive
              digital presence is no longer optional — it’s essential.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              At <strong>BigWig Media Digital</strong>, we specialize in
              <strong> ORM Services in Dubai</strong> designed to monitor,
              manage, and improve your brand’s online image. From handling
              negative feedback to boosting positive visibility, we ensure your
              reputation truly reflects the quality and trust your business
              delivers.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
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

      <section className="w-11/12 md:w-5/6 mx-auto py-12 bg-white">
        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-3xl p-10 shadow-xl">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            Why Online Reputation Management Matters in Dubai
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-3xl">
            Dubai’s digital-first audience checks online reviews before making
            decisions. One negative comment can impact trust, conversions, and
            your brand’s image. ORM protects your business from misinformation
            and builds strong credibility.
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-md border border-white/20">
              <h3 className="text-xl font-semibold mb-3">
                First Impressions Online
              </h3>
              <p className="opacity-80">
                Your reputation defines your credibility before customers even
                contact you.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-md border border-white/20">
              <h3 className="text-xl font-semibold mb-3">
                Reviews Drive Decisions
              </h3>
              <p className="opacity-80">
                Customer opinions influence purchase behavior more than paid
                ads.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-md border border-white/20">
              <h3 className="text-xl font-semibold mb-3">
                Control Negative Buzz
              </h3>
              <p className="opacity-80">
                ORM prevents negative content from harming your brand
                reputation.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-md border border-white/20">
              <h3 className="text-xl font-semibold mb-3">
                Boost SEO Visibility
              </h3>
              <p className="opacity-80">
                A positive online presence improves your Google ranking
                significantly.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-md border border-white/20">
              <h3 className="text-xl font-semibold mb-3">Crisis Protection</h3>
              <p className="opacity-80">
                Immediate ORM action helps safeguard your brand during critical
                moments.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-md border border-white/20">
              <h3 className="text-xl font-semibold mb-3">
                Ethical Reputation Building
              </h3>
              <p className="opacity-80">
                We help you shape a strong, trusted, and transparent online
                identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Comprehensive ORM Services in Dubai
          </h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            We offer a complete suite of Online Reputation Management services
            tailored for individuals, startups, and enterprises in Dubai.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-6 bg-white rounded-3xl shadow-lg border border-blue-200 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Reputation Monitoring
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Real-time monitoring of reviews, mentions, and discussions across
              Google, social platforms, blogs, and forums using advanced
              tracking tools.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white rounded-3xl shadow-lg border border-blue-200 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Review Management
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Strategic responses to reviews, resolving complaints, improving
              ratings, and boosting SEO through consistent positive feedback.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white rounded-3xl shadow-lg border border-blue-200 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Search Result Optimization
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Suppress negative search results and highlight positive PR, blogs,
              and branded content for a stronger online presence.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 bg-white rounded-3xl shadow-lg border border-blue-200 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Brand Reputation Repair
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Targeted repair strategies using digital PR, content creation, and
              engagement campaigns to rebuild brand trust.
            </p>
          </div>

          {/* Card 5 */}
          <div className="p-6 bg-white rounded-3xl shadow-lg border border-blue-200 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Crisis Management
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Immediate crisis response with transparent communication and 24/7
              monitoring to protect your brand during critical moments.
            </p>
          </div>

          {/* Card 6 */}
          <div className="p-6 bg-white rounded-3xl shadow-lg border border-blue-200 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Social Media Reputation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              End-to-end reputation handling across Instagram, Facebook,
              LinkedIn, X, and YouTube to maintain consistency and positive
              engagement.
            </p>
          </div>

          {/* Card 7 */}
          <div className="p-6 bg-white rounded-3xl shadow-lg border border-blue-200 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Personal Reputation Management
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Reputation optimization for CEOs, founders, and public figures —
              improving visibility and cleaning up search results
              professionally.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => setIsPopupOpen(true)}
            className="px-8 py-4 bg-[var(--primary-color)] text-white rounded-3xl text-lg font-semibold hover:bg-blue-500 transition"
          >
            Get Started with BigWig Media Digital
          </button>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12 bg-gradient-to-r from-yellow-50 to-yellow-100 p-5 rounded-2xl">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Proven{" "}
            <span className="text-[var(--primary-color)]">ORM Process</span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A transparent, ethical, and data-driven approach to managing and
            strengthening your online reputation.
          </p>
        </div>

        {/* Tile Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Tile 1 */}
          <div className="p-8 rounded-2xl shadow-xl bg-white/80 backdrop-blur-sm border border-yellow-200 transition hover:scale-[1.03] hover:shadow-2xl">
            <div className="text-5xl font-extrabold mb-4 text-[var(--primary-color)]">
              01
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Reputation Audit
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We review Google results, reviews, and social mentions to
              understand your current online sentiment.
            </p>
          </div>

          {/* Tile 2 */}
          <div className="p-8 rounded-2xl shadow-xl bg-white/80 backdrop-blur-sm border border-yellow-200 transition hover:scale-[1.03] hover:shadow-2xl">
            <div className="text-5xl font-extrabold mb-4 text-[var(--primary-color)]">
              02
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Strategy Development
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We build a tailored ORM plan to fix weaknesses, highlight
              strengths, and align with your business goals.
            </p>
          </div>

          {/* Tile 3 */}
          <div className="p-8 rounded-2xl shadow-xl bg-white/80 backdrop-blur-sm border border-yellow-200 transition hover:scale-[1.03] hover:shadow-2xl">
            <div className="text-5xl font-extrabold mb-4 text-[var(--primary-color)]">
              03
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Implementation
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We execute the strategy using SEO, PR, content creation, review
              handling, and social engagement.
            </p>
          </div>

          {/* Tile 4 */}
          <div className="p-8 rounded-2xl shadow-xl bg-white/80 backdrop-blur-sm border border-yellow-200 transition hover:scale-[1.03] hover:shadow-2xl">
            <div className="text-5xl font-extrabold mb-4 text-[var(--primary-color)]">
              04
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Continuous Monitoring
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We monitor your online presence 24/7 to track new mentions and
              respond proactively.
            </p>
          </div>

          {/* Tile 5 */}
          <div className="p-8 rounded-2xl shadow-xl bg-white/80 backdrop-blur-sm border border-yellow-200 transition hover:scale-[1.03] hover:shadow-2xl md:col-span-2">
            <div className="text-5xl font-extrabold mb-4 text-[var(--primary-color)]">
              05
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Reporting</h3>
            <p className="text-gray-700 leading-relaxed">
              Monthly reports with sentiment analysis and reputation
              improvements.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-5">
          <button
            onClick={() => setIsPopupOpen(true)}
            className="px-10 py-4 bg-[var(--primary-color)] text-white rounded-xl text-lg font-medium shadow-lg hover:bg-blue-500 transition"
          >
            Request a Free Audit
          </button>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12 space-y-12">
        {/* Section Title */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose BigWig Media Digital for ORM Services in Dubai
          </h2>
          <p className="text-gray-700  text-lg leading-relaxed">
            Reputation management requires experience, discretion, and strategy
            - and that’s exactly what we bring.
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
              desc: "Our tools and team continuously track your online footprint.",
            },
            {
              title: "Custom ORM Plans",
              desc: "Tailored strategies for businesses, CEOs, and influencers.",
            },
            {
              title: "White-Hat Practices",
              desc: "100% ethical ORM methods that ensure compliance with Google’s policies.",
            },
            {
              title: "Integration with PR & SEO",
              desc: "We blend ORM with digital PR and SEO to strengthen positive brand visibility.",
            },
            {
              title: "Confidential Handling",
              desc: "Your brand’s image and privacy are always protected.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12 space-y-16">
        {/* Section Title */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Benefits of ORM for Your Business
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Strong online reputation = stronger business growth. Here’s what you
            gain with our ORM Services in Dubai:
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              className="border border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Dubai Business Context */}
        <div className="bg-gray-50 border-l-4 border-[var(--primary-color)] rounded-xl p-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Dubai’s Business Environment Demands Reputation Excellence
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Dubai is a hub of innovation, entrepreneurship, and global business.
            Whether you run a real estate firm, luxury brand, or tech startup,
            your reputation defines your credibility and customer trust.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our ORM Services in Dubai ensure that your brand always looks its
            best — on Google, social media, and beyond. Let your online image
            reflect your real-world excellence.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Let’s Build a Positive Digital Presence for Your Brand
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Your digital image deserves proactive care. With our Online
            Reputation Management Services in Dubai, you get full control over
            how your audience perceives you — and the confidence that your
            reputation is in safe hands.
          </p>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="px-8 py-4 text-white font-semibold rounded-full bg-[var(--primary-color)] hover:bg-blue-500 transition-all duration-300"
          >
            Get Started Today
          </button>
        </div>
      </section>

      <OurProcess />
      <WhyBigwig />
      <CTABanner
        title="Protect & Strengthen Your Online Reputation with Expert ORM Services in Dubai."
        buttonText="Get Started Today"
      />

      <Footer />
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}

export default InfluenceDubai;

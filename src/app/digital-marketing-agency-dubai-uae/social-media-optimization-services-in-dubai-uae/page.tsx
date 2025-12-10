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
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaGlobeAsia,
  FaPaintBrush,
  FaChartLine,
  FaWallet,
  FaUserTie,
  FaBuilding,
  FaHotel,
  FaShoppingBag,
  FaGraduationCap,
  FaDumbbell,
  FaChartPie,
  FaLaptopCode,
  FaEye,
  FaUsers,
  FaLink,
  FaStar,
  FaShoppingCart,
  FaMapMarkerAlt,
  FaHandshake,
} from "react-icons/fa";

import Image from "next/image";
import { useState } from "react";

function SMODubai() {
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
              Social Media Optimization Services in Dubai
            </h1>
            <h2 className="text-2xl font-semibold leading-tight">
              Boost Your Brand Visibility with Expert Social Media Optimization
              Services in Dubai
            </h2>
            <p className="text-lg">
              In today’s digital world, a strong social media presence is vital.
              BigWig Media Digital helps Dubai brands turn social profiles into
              powerful tools that boost visibility, engagement, and growth
              through tailored Social Media Optimization Services.
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
              alt="Social Media Optimization Services in Dubai, UAE"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              Why Social Media Optimization Matters More Than Ever
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Social Media Optimization (SMO) is more than posting appealing
              visuals or catchy captions, it’s about building a consistent,
              optimized brand presence that drives engagement, increases
              followers, and boosts conversions.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Dubai’s digital audience is smart, global, and highly active
              across platforms like Instagram and LinkedIn. To capture attention
              in this fast-paced environment, your brand needs a strategy rooted
              in creativity, structure, and data.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our <strong>Social Media Optimization Services in Dubai</strong>{" "}
              help you:
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
              <li>Improve brand visibility across all major platforms.</li>
              <li>
                Increase website traffic through optimized profiles and posts.
              </li>
              <li>Drive organic engagement and sustainable brand growth.</li>
              <li>Build trust and authority within your target audience.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="w-11/12 md:w-5/6 mx-auto px-6">
          {/* SECTION HEADING */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center md:text-left mb-8">
            Our Proven Approach to{" "}
            <span className="text-[var(--primary-color)]">
              Social Media Optimization
            </span>
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-12">
            At <strong>BigWig Media Digital</strong>, we combine creativity with
            analytics to deliver measurable results. Every campaign starts with
            a clear understanding of your business goals, followed by a tailored
            social media strategy designed to maximize engagement, visibility,
            and growth.
          </p>

          {/* STEPS GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "1.",
                title: "Comprehensive Social Media Audit",
                desc: "We evaluate your current profiles to identify gaps, content weaknesses, and growth opportunities through engagement analysis, audience insights, and competitor benchmarking.",
              },
              {
                step: "2.",
                title: "Strategic Content Planning",
                desc: "Our team crafts a monthly content calendar aligned with your brand tone, demographics, and industry trends — from Instagram reels to LinkedIn articles.",
              },
              {
                step: "3.",
                title: "Profile Optimization",
                desc: "We refine every detail — bio, visuals, CTAs, and keywords — to improve discoverability and ensure consistency across all social platforms.",
              },
              {
                step: "4.",
                title: "Hashtag & Trend Research",
                desc: "Our experts track Dubai’s latest trends, hashtags, and cultural moments to keep your brand relevant in local conversations.",
              },
              {
                step: "5.",
                title: "Performance Monitoring & Reporting",
                desc: "We monitor engagement, reach, and conversions with detailed reports that highlight what’s working and what can improve.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-yellow-50 to-yellow-100 border border-yellow-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition"
              >
                <div className="text-[var(--primary-color)] font-bold text-2xl mb-2">
                  {step.step} {step.title}
                </div>
                <p className="text-gray-700 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA CARD */}
          <div className="text-center bg-[var(--primary-color)] py-10 px-6 rounded-2xl shadow-inner">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              📊 Want a Free Social Media Audit for Your Brand?
            </h3>
            <p className="text-white text-lg mb-6">
              Discover what’s working and unlock new opportunities with the best{" "}
              <strong>Social Media Optimization Services in Dubai</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="w-11/12 md:w-5/6 mx-auto px-6">
          {/* SECTION HEADING */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center md:text-left mb-10">
            Platforms We Optimize for{" "}
            <span className="text-[var(--primary-color)]">Maximum Impact</span>
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-12">
            Our expertise covers every major social media platform relevant to
            businesses in Dubai and across the UAE — ensuring your brand
            maintains a powerful and consistent presence wherever your audience
            engages.
          </p>

          {/* PLATFORM GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: FaInstagram,
                title: "Instagram",
                desc: "Visual storytelling through reels, influencer collaborations, and trend-based hashtags.",
              },
              {
                icon: FaFacebookF,
                title: "Facebook",
                desc: "Community engagement, ad management, and lead generation via Facebook Business Suite.",
              },
              {
                icon: FaLinkedinIn,
                title: "LinkedIn",
                desc: "Thought leadership content and B2B audience targeting for professional brand positioning.",
              },
              {
                icon: FaTwitter,
                title: "Twitter (X)",
                desc: "Brand voice building, news amplification, and impactful hashtag campaigns.",
              },
              {
                icon: FaYoutube,
                title: "YouTube",
                desc: "Channel branding, SEO optimization, and data-driven video content strategies.",
              },
              {
                icon: FaTiktok,
                title: "TikTok",
                desc: "Creative video marketing campaigns crafted to align with viral trends and audience behavior.",
              },
            ].map((platform, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-yellow-50 to-yellow-100 border border-yellow-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-start"
              >
                <platform.icon className="w-10 h-10 text-[var(--primary-color)] mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {platform.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{platform.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA CARD */}
          <div className="text-center bg-[var(--primary-color)] py-10 px-6 rounded-2xl shadow-inner">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              💡 Your Audience Is Everywhere — Let’s Connect Everywhere.
            </h3>
            <p className="text-white text-lg mb-6">
              Start your journey with{" "}
              <strong>
                BigWig Media Digital’s Social Media Optimization Services in
                Dubai
              </strong>{" "}
              and make your brand impossible to ignore.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="w-11/12 md:w-5/6 mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center md:text-left mb-10">
            What Makes Our{" "}
            <span className="text-[var(--primary-color)]">
              Social Media Optimization Services in Dubai
            </span>{" "}
            Different
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-12">
            When you choose <strong>BigWig Media Digital</strong>, you’re not
            just hiring a digital agency — you’re partnering with storytellers,
            strategists, and social experts who understand Dubai’s fast-moving,
            multicultural market. We help brands stand out with creativity,
            precision, and measurable results.
          </p>

          {/* Feature Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaGlobeAsia,
                title: "Localized Strategy",
                desc: "Campaigns tailored to UAE audiences — reflecting regional culture, language, and behavior.",
              },
              {
                icon: FaPaintBrush,
                title: "Creative Excellence",
                desc: "Each post blends creativity with analytics to inspire engagement and boost brand recall.",
              },
              {
                icon: FaChartLine,
                title: "Transparent Reporting",
                desc: "Stay informed with real-time insights and detailed monthly performance reports.",
              },
              {
                icon: FaWallet,
                title: "Affordable Packages",
                desc: "Flexible pricing to support startups, SMEs, and large enterprises without compromising quality.",
              },
              {
                icon: FaUserTie,
                title: "Dedicated Support",
                desc: "A personal social media manager ensures consistent communication and flawless execution.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-yellow-50 to-yellow-100 border border-yellow-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-start"
              >
                <feature.icon className="w-10 h-10 text-[var(--primary-color)] mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="w-11/12 md:w-5/6 mx-auto px-6 text-center md:text-left">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Industries We Serve
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-12">
            Our <strong>Social Media Optimization Services in Dubai</strong>{" "}
            cater to a diverse range of industries, each with its own voice,
            audience, and goals. We tailor every strategy to suit your
            industry’s unique dynamics and deliver measurable growth.
          </p>

          {/* Industry List */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12">
            <div className="flex items-center space-x-3">
              <FaBuilding className="text-[var(--primary-color)] text-2xl" />
              <span className="text-lg text-gray-800 font-medium">
                Real Estate
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <FaHotel className="text-[var(--primary-color)] text-2xl" />
              <span className="text-lg text-gray-800 font-medium">
                Hospitality & Tourism
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <FaShoppingBag className="text-[var(--primary-color)] text-2xl" />
              <span className="text-lg text-gray-800 font-medium">
                Retail & E-commerce
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <FaGraduationCap className="text-[var(--primary-color)] text-2xl" />
              <span className="text-lg text-gray-800 font-medium">
                Education & Coaching
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <FaDumbbell className="text-[var(--primary-color)] text-2xl" />
              <span className="text-lg text-gray-800 font-medium">
                Fitness & Wellness
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <FaChartPie className="text-[var(--primary-color)] text-2xl" />
              <span className="text-lg text-gray-800 font-medium">
                Finance & Consulting
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <FaLaptopCode className="text-[var(--primary-color)] text-2xl" />
              <span className="text-lg text-gray-800 font-medium">
                Technology & Startups
              </span>
            </div>
          </div>

          {/* Footer Note */}
          <p className="text-gray-700 dark:text-gray-300 text-lg mt-12 leading-relaxed ">
            Each industry demands a distinct storytelling approach, and we craft
            every <strong>SMO strategy</strong> to resonate with your target
            audience and maximize ROI.
          </p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="w-11/12 md:w-5/6 mx-auto px-6">
          {/* ================== Section 1: Benefits ================== */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center md:text-left mb-8">
            Benefits of Social Media Optimization for Your Business
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-10 max-w-3xl">
            A well-optimized social presence delivers measurable impact. Here’s
            what you can achieve with our{" "}
            <strong>Social Media Optimization Services in Dubai</strong>:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: FaEye,
                title: "Boosted Brand Visibility",
                desc: "Appear more often in social and Google searches.",
              },
              {
                icon: FaUsers,
                title: "Higher Engagement Rates",
                desc: "Build meaningful interactions through engaging content.",
              },
              {
                icon: FaLink,
                title: "Increased Website Traffic",
                desc: "Drive clicks from social platforms to your landing pages.",
              },
              {
                icon: FaStar,
                title: "Enhanced Reputation",
                desc: "Build trust through consistent, authentic communication.",
              },
              {
                icon: FaShoppingCart,
                title: "Better Conversion Rates",
                desc: "Convert engaged followers into loyal customers.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <item.icon className="text-[var(--primary-color)] text-3xl flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl p-8 text-center shadow-inner mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              📈 Want your social media to generate real business?
            </h3>
            <p className="text-gray-700 text-lg mb-5">
              Let’s optimize your digital presence with{" "}
              <strong>Social Media Optimization Services in Dubai</strong> that
              deliver results.
            </p>
            <button
              onClick={() => setIsPopupOpen(true)}
              className="bg-[var(--primary-color)] cursor-pointer text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition"
            >
              Get Started Now
            </button>
          </div>

          {/* ================== Section 2: Local SEO Advantage ================== */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center md:text-left mb-8">
            Local SEO Advantage for Dubai Businesses from SMO
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg ">
            What makes our service stand out is our{" "}
            <strong>local SEO integration</strong>. Every post, profile, and
            caption is optimized for Dubai-based searches — ensuring your brand
            is discovered faster by local audiences.
          </p>

          <div className="flex flex-col gap-4 mb-12">
            <p className="text-gray-700 text-lg">
              Whether you’re a <strong>café in Jumeirah</strong>, a{" "}
              <strong>fitness studio in Downtown</strong>, or a{" "}
              <strong>tech firm in Business Bay</strong>, we make sure your
              brand is visible to the right people, at the right time, on the
              right platform.
            </p>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl p-8 text-center shadow-inner mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              🌍 Grow your business visibility locally.
            </h3>
            <p className="text-gray-700 text-lg mb-5">
              Contact us for customized{" "}
              <strong>Social Media Optimization Services in Dubai</strong>{" "}
              tailored to your goals.
            </p>
          </div>

          {/* ================== Section 3: Final CTA ================== */}
          <div className="bg-[var(--primary-color)] text-white py-16 px-8 rounded-2xl text-center shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let’s Build Your Brand’s Social Presence Today
            </h2>
            <p className="text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
              Your brand deserves more than just followers — it deserves a
              loyal, engaged community. At <strong>BigWig Media Digital</strong>
              , we turn that vision into reality through creative storytelling,
              consistent engagement, and data-backed optimization.
            </p>
          </div>
        </div>
      </section>

      <OurProcess />
      <WhyBigwig />
      <CTABanner
        title="Let’s optimize your social media to boost visibility, engagement, and growth for your brand in Dubai."
        buttonText="Get Started Today"
      />

      <Footer />
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}

export default SMODubai;

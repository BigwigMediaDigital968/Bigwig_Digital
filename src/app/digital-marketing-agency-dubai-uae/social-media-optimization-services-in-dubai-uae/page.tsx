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
import ButtonFill from "../../../../components/Button";
import GetInTouch from "../../../../components/GetInTouch";
import ServicesNavigation from "../../../../components/UAEServicesDirectory";

function SMODubai() {
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

      <section className="w-11/12 md:w-5/6 mx-auto py-12">
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
            <h2 className="text-3xl font-bold mb-6 text-[var(--color5)]">
              Why Social Media Optimization Matters More Than Ever
            </h2>

            <p className="text-gray-300  mb-4 leading-relaxed">
              Social Media Optimization (SMO) is more than posting appealing
              visuals or catchy captions, it’s about building a consistent,
              optimized brand presence that drives engagement, increases
              followers, and boosts conversions.
            </p>

            <p className="text-gray-300  mb-4 leading-relaxed">
              Dubai’s digital audience is smart, global, and highly active
              across platforms like Instagram and LinkedIn. To capture attention
              in this fast-paced environment, your brand needs a strategy rooted
              in creativity, structure, and data.
            </p>

            <p className="text-gray-300  leading-relaxed">
              Our <strong>Social Media Optimization Services in Dubai</strong>{" "}
              help you:
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300  leading-relaxed">
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

      <section className="py-12 relative ">
        <div className="w-11/12 md:w-5/6 mx-auto">
          {/* SECTION HEADING */}
          <div className="text-center md:text-left mb-10">
            <h2 className="text-3xl  font-bold text-[var(--color5)] mb-4">
              Our Proven Approach to Social Media Optimization
            </h2>

            <p className="text-white/80 leading-relaxed text-base max-w-3xl">
              At <strong>BigWig Media Digital</strong>, we combine creativity
              with analytics to deliver measurable results. Every campaign
              starts with a clear understanding of your business goals, followed
              by a tailored SMO strategy designed to maximize engagement,
              visibility, and growth.
            </p>
          </div>

          {/* STEPS GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                step: "1.",
                title: "Comprehensive Social Media Audit",
                desc: "We evaluate your current profiles to identify gaps, content weaknesses, and growth opportunities using competitor benchmarks, engagement metrics, and audience insights.",
              },
              {
                step: "2.",
                title: "Strategic Content Planning",
                desc: "We create a monthly content calendar aligned with your brand voice, audience behavior, and Dubai market trends — from viral reels to professional LinkedIn posts.",
              },
              {
                step: "3.",
                title: "Profile Optimization",
                desc: "From bios to CTAs to visual branding, we refine everything to improve searchability, engagement, and follower growth.",
              },
              {
                step: "4.",
                title: "Hashtag & Trend Research",
                desc: "We track Dubai-specific trends and hashtags to ensure your content reaches real, relevant audiences actively engaging in your niche.",
              },
              {
                step: "5.",
                title: "Performance Monitoring & Reporting",
                desc: "You get transparent insights on reach, engagement, conversions, and recommendations for ongoing improvement.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="
            relative p-6 rounded-2xl overflow-hidden
            bg-[var(--color1)]/60 backdrop-blur-xl
            border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.45)]
            hover:shadow-[0_0_40px_rgba(167,235,242,0.3)]
            transition-all duration-500
          "
              >
                {/* Matrix Overlay */}
                <div className="absolute inset-0 opacity-[0.15] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen pointer-events-none"></div>

                {/* Glow Border */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[var(--color5)] transition-all duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-[var(--color5)] font-bold text-2xl mb-2">
                    {step.step} {step.title}
                  </div>
                  <p className="text-white/80 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA CARD */}
          <div
            className="
        relative text-center p-10 rounded-2xl overflow-hidden 
        bg-[var(--color1)]/70 border border-white/10 backdrop-blur-xl
        shadow-[0_0_35px_rgba(167,235,242,0.15)]
      "
          >
            {/* Glow Layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color3)]/20 via-[var(--color4)]/20 to-[var(--color3)]/20 blur-3xl opacity-30"></div>

            {/* Matrix Overlay */}
            <div className="absolute inset-0 opacity-[0.15] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen"></div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--color5)] mb-4">
                📊 Want a Free Social Media Audit for Your Brand?
              </h3>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
                Discover what&#39;s working, and unlock new opportunities with
                the best
                <strong> Social Media Optimization Services in Dubai</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 ">
        <div className="w-11/12 md:w-5/6 mx-auto">
          {/* SECTION HEADING */}
          <h2 className="text-3xl font-bold text-[var(--color5)] mb-6">
            Platforms We Optimize for{" "}
            <span className="text-[var(--color5)]">Maximum Impact</span>
          </h2>

          <p className="text-white/80 leading-relaxed text-base mb-8 max-w-3xl">
            Our expertise spans all major social media platforms across Dubai &
            the UAE, ensuring a consistent, high-impact presence wherever your
            audience engages.
          </p>

          {/* PLATFORM GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: FaInstagram,
                title: "Instagram",
                desc: "Visual storytelling with reels, influencers, aesthetics, and trend-based content.",
              },
              {
                icon: FaFacebookF,
                title: "Facebook",
                desc: "Community engagement, ad campaigns, lead generation & conversion-focused funnels.",
              },
              {
                icon: FaLinkedinIn,
                title: "LinkedIn",
                desc: "B2B positioning, industry authority building, and leadership content publishing.",
              },
              {
                icon: FaTwitter,
                title: "Twitter (X)",
                desc: "Real-time audience engagement with trending topics & rapid brand communication.",
              },
              {
                icon: FaYoutube,
                title: "YouTube",
                desc: "High-ROI video SEO, optimized channel design & retention-based content strategies.",
              },
              {
                icon: FaTiktok,
                title: "TikTok",
                desc: "Short-form creative content aligned with viral trends & youth engagement behavior.",
              },
            ].map((platform, index) => (
              <div
                key={index}
                className="
            relative group p-6 rounded-2xl overflow-hidden
            bg-[var(--color1)]/60 backdrop-blur-xl
            border border-white/10 shadow-[0_0_30px_rgba(1,10,40,0.5)]
            hover:shadow-[0_0_40px_rgba(167,235,242,0.25)]
            transition duration-300
          "
              >
                {/* Blob gradient light */}
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-br from-[var(--color3)] to-[var(--color4)] blur-3xl opacity-30 pointer-events-none" />

                {/* Matrix hologram overlay */}
                <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] opacity-[0.17] mix-blend-screen bg-cover bg-center pointer-events-none" />

                {/* CONTENT */}
                <div className="relative z-10 flex flex-col items-start">
                  <platform.icon className="w-10 h-10 mb-4 text-[var(--color5)] drop-shadow-[0_0_15px_rgba(167,235,242,0.4)]" />

                  <h3 className="text-xl font-semibold text-[var(--color5)] mb-2 tracking-wide">
                    {platform.title}
                  </h3>

                  <p className="text-white/70 text-sm leading-relaxed">
                    {platform.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA CARD */}
          <div className="mt-16 bg-[var(--color1)]/70 border border-white/10 backdrop-blur-xl rounded-2xl p-10 shadow-[inset_0_0_25px_rgba(167,235,242,0.15)] text-center">
            {/* Glow Line */}
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent mb-6 animate-pulse" />

            <h3 className="text-2xl md:text-3xl font-bold text-[var(--color5)] mb-4">
              💡 Your Audience Is Everywhere — Let’s Connect Everywhere.
            </h3>

            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Start with{" "}
              <strong className="text-[var(--color5)]">
                BigWig Media Digital’s Social Media Optimization Services
              </strong>{" "}
              and make your brand impossible to ignore across Dubai & UAE.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 relative ">
        <div className="w-11/12 md:w-5/6 mx-auto">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[var(--color5)] text-center md:text-left mb-6">
            What Makes Our Social Media Optimization Services in Dubai Different
          </h2>

          <p className="text-gray-300 leading-relaxed text-base mb-10">
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
                className="
            group relative p-6 rounded-2xl overflow-hidden
            bg-[var(--color1)]/70 border border-white/10
            shadow-[0_0_25px_rgba(0,0,0,0.45)]
            hover:shadow-[0_0_35px_rgba(167,235,242,0.3)]
            hover:border-[var(--color5)]
            transition-all duration-500
          "
              >
                {/* Matrix hologram */}
                <div
                  className="
              absolute inset-0 opacity-[0.12]
              bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')]
              bg-cover bg-center mix-blend-screen pointer-events-none
            "
                />

                {/* Glow Border */}
                <div
                  className="
              absolute inset-0 rounded-2xl border border-transparent 
              group-hover:border-[var(--color5)] 
              transition-all duration-500
            "
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-start">
                  <feature.icon className="w-10 h-10 text-[var(--color5)] mb-4" />

                  <h3 className="text-xl font-semibold text-[var(--color5)] mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 relative bg-gradient-to-b from-[var(--color1)] via-[var(--color2)] to-[var(--color1)]">
        <div className="w-11/12 md:w-5/6 mx-auto">
          {/* HEADING */}
          <h2 className="text-3xl  font-bold text-[var(--color5)] mb-6 text-center md:text-left">
            Industries We Serve
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-3xl">
            Our <strong>Social Media Optimization Services in Dubai</strong>{" "}
            cater to a wide range of industries. Every strategy is uniquely
            crafted to match your sector’s audience, message, and growth
            objectives.
          </p>

          {/* GRID */}
          <div
            className="
      grid sm:grid-cols-2 lg:grid-cols-3 gap-8
    "
          >
            {[
              { icon: FaBuilding, label: "Real Estate" },
              { icon: FaHotel, label: "Hospitality & Tourism" },
              { icon: FaShoppingBag, label: "Retail & E-commerce" },
              { icon: FaGraduationCap, label: "Education & Coaching" },
              { icon: FaDumbbell, label: "Fitness & Wellness" },
              { icon: FaChartPie, label: "Finance & Consulting" },
              { icon: FaLaptopCode, label: "Technology & Startups" },
            ].map((item, index) => (
              <div
                key={index}
                className="
            group relative p-6 rounded-2xl overflow-hidden
            bg-[var(--color1)]/70 border border-white/10
            shadow-[0_0_25px_rgba(0,0,0,0.45)]
            hover:shadow-[0_0_40px_rgba(167,235,242,0.25)]
            hover:border-[var(--color5)]
            transition-all duration-500 flex items-center gap-4
          "
              >
                {/* MATRIX OVERLAY */}
                <div
                  className="
            absolute inset-0 opacity-[0.15]
            bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')]
            bg-cover bg-center mix-blend-screen pointer-events-none
          "
                ></div>

                {/* GLOW BORDER */}
                <div
                  className="
            absolute inset-0 rounded-2xl border border-transparent
            group-hover:border-[var(--color5)]
            transition-all duration-500
          "
                ></div>

                {/* ICON */}
                <div
                  className="
            relative z-10 flex items-center justify-center
            w-12 h-12 rounded-xl bg-[var(--color5)]/10
            border border-[var(--color5)]/30
            text-[var(--color5)] shadow-[0_0_12px_rgba(167,235,242,0.35)]
          "
                >
                  <item.icon className="w-6 h-6" />
                </div>

                {/* TEXT */}
                <span className="relative z-10 text-lg text-gray-200 font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* FOOTER TEXT */}
          <p className="text-gray-300 text-lg mt-12 leading-relaxed max-w-3xl">
            Each industry demands a unique storytelling approach — we craft
            every
            <strong> SMO strategy </strong> to resonate with your target
            audience and deliver measurable ROI.
          </p>
        </div>
      </section>

      <section className="py-12 space-y-10">
        <div className="w-11/12 md:w-5/6 mx-auto">
          {/* ================== Section 1: Benefits ================== */}
          <h2 className="text-3xl  font-bold text-[var(--color5)] text-center md:text-left mb-8">
            Benefits of Social Media Optimization for Your Business
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg mb-10 max-w-3xl">
            A well-optimized social presence delivers measurable impact. Here’s
            what you can achieve with our{" "}
            <strong>Social Media Optimization Services in Dubai</strong>:
          </p>

          {/* BENEFITS GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
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
              <div
                key={index}
                className="
            group relative p-6 rounded-2xl overflow-hidden
            bg-[var(--color1)]/70 border border-white/10
            shadow-[0_0_25px_rgba(0,0,0,0.45)]
            hover:shadow-[0_0_40px_rgba(167,235,242,0.3)]
            hover:border-[var(--color5)]
            transition-all duration-500 flex items-start gap-4
          "
              >
                {/* Matrix overlay */}
                <div className="absolute inset-0 opacity-[0.08] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen pointer-events-none"></div>

                {/* Icon */}
                <item.icon className="w-10 h-10 text-[var(--color5)] relative z-10" />

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-[var(--color5)]">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* FIRST CTA */}
          <div
            className="
      bg-[var(--color2)]/50 backdrop-blur-xl rounded-2xl p-10 text-center 
      border border-white/10 shadow-[inset_0_0_30px_rgba(167,235,242,0.12)]
    "
          >
            <h3 className="text-2xl font-bold text-[var(--color5)] mb-3">
              📈 Want your social media to generate real business?
            </h3>
            <p className="text-gray-300 text-lg mb-5">
              Let’s optimize your digital presence with{" "}
              <strong>Social Media Optimization Services in Dubai</strong> that
              deliver results.
            </p>
            <div className="flex justify-center">
              <ButtonFill
                onClick={() => setIsPopupOpen(true)}
                text="Get Started Now"
              />
            </div>
          </div>

          {/* ================== Section 2: Local SEO Advantage ================== */}
          <h2 className="text-3xl  font-bold text-[var(--color5)] text-center md:text-left pt-12 mb-6">
            Local SEO Advantage for Dubai Businesses from SMO
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg max-w-3xl">
            What makes our service stand out is our{" "}
            <strong>local SEO integration</strong>. Every post, profile, and
            caption is optimized for Dubai-based searches — ensuring maximum
            visibility in local markets.
          </p>

          <p className="text-gray-300 text-lg mt-4">
            Whether you’re a <strong>café in Jumeirah</strong>, a
            <strong> fitness studio in Downtown</strong>, or a
            <strong> tech firm in Business Bay</strong> — we ensure your brand
            stays in front of the right audience.
          </p>

          {/* SECOND CTA */}
          <div
            className="
      bg-[var(--color2)]/50 backdrop-blur-xl rounded-2xl p-10 text-center mt-10
      border border-white/10 shadow-[inset_0_0_30px_rgba(167,235,242,0.12)]
    "
          >
            <h3 className="text-2xl font-bold text-[var(--color5)] mb-3">
              🌍 Grow your business visibility locally.
            </h3>
            <p className="text-gray-300 text-lg mb-5">
              Contact us for customized{" "}
              <strong>Social Media Optimization Services in Dubai</strong>.
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

export default SMODubai;

"use client";

import Nav from "../../../../components/Nav";
import hero from "../../../../Assets/Services hero/SMO.jpg";
import smo from "../../../../Assets/services/4.jpg";
import { TypeAnimation } from "react-type-animation";
import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
import Footer from "../../../../components/Footer";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
  FaPinterestP,
  FaTiktok,
  FaPalette,
  FaIndustry,
  FaComments,
  FaChartLine,
} from "react-icons/fa6";
import { FaSearch, FaSnapchatGhost } from "react-icons/fa";
import ContactForm from "../../../../components/ContactForm";
import Image from "next/image";

const features = [
  {
    title: "Strategy Meets Creativity",
    content:
      "We combine brand strategy, content planning, and storytelling to build profiles that not only look great but perform even better.",
    icon: <FaPalette className="text-3xl text-[var(--primary-color)]" />,
  },
  {
    title: "Industry-Focused Optimization",
    content:
      "From fashion and beauty to SaaS and healthcare, we create social content that speaks your industry’s language and tone.",
    icon: <FaIndustry className="text-3xl text-[var(--primary-color)]" />,
  },
  {
    title: "SEO-Driven Social Content",
    content:
      "We use keywords, hashtags, and trending topics to enhance discoverability across both social platforms and search engines.",
    icon: <FaSearch className="text-3xl text-[var(--primary-color)]" />,
  },
  {
    title: "Real Engagement",
    content:
      "It’s not just about numbers. We help you create meaningful engagement and build a loyal follower base that interacts and converts.",
    icon: <FaComments className="text-3xl text-[var(--primary-color)]" />,
  },
  {
    title: "Weekly Reporting & Insights",
    content:
      "We track profile visits, reach, engagement, and growth, giving you actionable insights into your brand’s organic progress.",
    icon: <FaChartLine className="text-3xl text-[var(--primary-color)]" />,
  },
];

function SocialMediaOptimization() {
  return (
    <div>
      <title>Social Media Optimization (SMO)</title>
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/social-media-optimization"
      />
      <meta
        name="description"
        content="Improve your social visibility and engagement with strategic SMO services tailored to your brand."
      />

      <Nav />
      <section
        className="relative bg-cover bg-center bg-no-repeat py-10 px-4"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="bg-black/50 absolute inset-0 z-0" />

        <div className="relative z-10 w-5/6 mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left Content - 2/3 */}
          <div className="w-full md:w-2/3 text-white space-y-6 pr-0 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
              Social Media Optimization Services That Build Brand Presence
            </h1>

            <p
              className="text-2xl md:text-4xl font-semibold text-[#4e6cba]"
              style={{
                textShadow: "0 2px 6px rgba(0,0,0,0.6)",
                letterSpacing: "0.5px",
              }}
            >
              <span className="inline"> We Optimize&nbsp;</span>
              <span className="inline-block whitespace-nowrap">
                <TypeAnimation
                  sequence={[
                    "Your Reach Daily",
                    2000,
                    "Your Online Presence",
                    2000,
                    "For Better Engagement",
                    2000,
                    "Every Social Second",
                    2000,
                    " For Viral Visibility",
                    2000,
                    " To Boost Followers",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </p>

            <p className="text-base md:text-lg max-w-md text-white/90">
              We’re here to help you grow, scale, and stand out, across every
              major social media platform.
            </p>

            <a href="/contact">
              <button className="mt-4 px-6 py-3 bg-[var(--primary-color)] text-white rounded-full font-semibold hover:bg-opacity-80 transition">
                Contact Us
              </button>
            </a>
          </div>

          {/* Right Form - 1/3 */}
          <ContactForm />
        </div>
      </section>

      <div className="w-11/12 md:w-5/6 mx-auto py-12 text-gray-900 space-y-10">
        {/* Section 1 - Full Width */}
        <div className="text-center md:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)] text-center">
            Smart social media strategies that connect your brand with the right
            audience.
          </h2>
          <p className="text-lg text-gray-700  mx-auto md:mx-0">
            Your social media profiles are more than just digital pages,
            they&#39;re your brand’s voice, vibe, and visibility. At
            <strong>
              <a href="https://www.bigwigdigital.in/"> BigWig Digital </a>
            </strong>
            , a leading Social Media Optimization agency , we help businesses
            grow organically across platforms like Instagram, Facebook,
            LinkedIn, Twitter, and more with strategic Social Media Optimization
            services.
          </p>
        </div>

        {/* Section 2 - Highlighted Statement */}
        <div className="bg-[var(--primary-color)]/10 border border-[var(--primary-color)] rounded-lg p-6 md:p-8 text-center space-y-4">
          <p className="text-lg text-gray-800 font-medium">
            We don’t just post, we create, optimize, engage, and build
            communities. If you&#39;re looking to establish authority, connect
            with your audience, and grow consistently online, our SMO services
            are built just for you.
          </p>
        </div>

        {/* Section 3 - Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[var(--primary-color)]">
              Build a Powerful Organic Presence That Lasts
            </h3>
            <p className="text-gray-700 text-base">
              In today’s crowded digital space, a strong organic presence isn’t
              optional; it’s essential. Social Media Optimization ensures your
              brand makes a lasting impression by keeping your profiles
              consistent, discoverable, and audience-friendly.
            </p>

            <h3 className="text-xl font-semibold text-[var(--primary-color)]">
              Optimized Profiles = Searchable Brands
            </h3>
            <p className="text-gray-700 text-base">
              As social platforms increasingly function like search engines, a
              well-optimized profile not only enhances visibility but also
              builds long-term credibility. It’s not just about being present,
              it’s about being noticed, followed, and remembered.
            </p>
          </div>

          {/* Right */}
          <div>
            <Image
              src={smo}
              alt="Social Media Optimization Services "
              className="w-full h-[40vh] rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="w-11/12 md:w-5/6 mx-auto py-12 space-y-20 text-gray-900">
        {/* Section: Our Social Media Optimization Services */}
        <div className="space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--primary-color)]">
            Our Social Media Optimization Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Profile Optimization",
                content:
                  "We optimize your bio, username, links, highlights, and keywords on platforms like Instagram, Facebook, LinkedIn, and Twitter for maximum discoverability.",
              },
              {
                title: "Content Planning & Posting",
                content:
                  "From carousel posts to reels, infographics, and quotes, we create and manage content calendars that are platform-specific and audience-focused.",
              },
              {
                title: "Hashtag Strategy",
                content:
                  "Custom hashtag research for each industry and platform to boost organic reach and content visibility.",
              },
              {
                title: "Audience Engagement",
                content:
                  "We engage with your followers through DMs, comments, shares, and reactions to keep your community active and loyal.",
              },
              {
                title: "Competitor & Trend Analysis",
                content:
                  "Stay ahead of the curve with regular competitor audits and trending content ideas that position your brand as a leader.",
              },
              {
                title: "Story & Highlight Management",
                content:
                  "Strategically designed stories and highlight covers that reflect your brand’s personality and key services.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border-l-4 border-[var(--primary-color)] bg-white shadow-md rounded-lg p-4 space-y-2"
              >
                <h3 className="text-xl font-semibold text-[var(--primary-color)]">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.content}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)] text-center">
            Platforms We Optimize
          </h3>

          <div className="grid grid-cols-4 lg:flex lg:justify-between gap-6 text-center text-gray-700">
            {[
              {
                icon: (
                  <FaInstagram size={36} className="text-pink-500 mx-auto" />
                ),
                label: "Instagram",
              },
              {
                icon: (
                  <FaFacebookF size={36} className="text-blue-600 mx-auto" />
                ),
                label: "Facebook",
              },
              {
                icon: (
                  <FaLinkedinIn size={36} className="text-blue-700 mx-auto" />
                ),
                label: "LinkedIn",
              },
              {
                icon: <FaXTwitter size={36} className="text-black mx-auto" />,
                label: "Twitter (X)",
              },
              {
                icon: <FaYoutube size={36} className="text-red-600 mx-auto" />,
                label: "YouTube",
              },
              {
                icon: (
                  <FaPinterestP size={36} className="text-red-500 mx-auto" />
                ),
                label: "Pinterest",
              },
              {
                icon: (
                  <FaSnapchatGhost
                    size={36}
                    className="text-yellow-400 mx-auto"
                  />
                ),
                label: "SnapChat",
              },
              {
                icon: <FaTiktok size={36} className="text-black mx-auto" />,
                label: "TikTok",
              },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                {item.icon}
                <p className="text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          <h3 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)] text-center">
            Why Choose BigWig Digital for SMO Services?
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-5 text-center hover:shadow-xl transition-all space-y-4"
              >
                {/* Center the icon */}
                <div className="flex justify-center">{item.icon}</div>
                <h4 className="text-lg font-semibold text-[var(--primary-color)]">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-700">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <OurProcess />
      <WhyBigwig />

      {/* Final Call-to-Action */}
      <div className=" py-12 ">
        <div className="w-5/6 mx-auto bg-[var(--primary-color)]/10 border border-[var(--primary-color)] rounded-xl p-6 md:p-8 space-y-4 text-center">
          <h4 className="text-xl font-semibold text-[var(--primary-color)]">
            Let’s Optimize Your Social Presence
          </h4>
          <p className="text-gray-800 max-w-3xl mx-auto">
            Looking for consistent growth and real engagement without running
            ads 24/7? Our Social Media Optimization services help you stay
            active, attractive, and algorithm-friendly across all major
            platforms.
          </p>
          <p className="text-gray-800 font-medium">
            BigWig Digital helps you create a strong social identity that
            attracts, retains, and converts organically.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SocialMediaOptimization;

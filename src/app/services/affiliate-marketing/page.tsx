"use client";
import { TypeAnimation } from "react-type-animation";
import Nav from "../../../../components/Nav";
import hero from "../../../../Assets/Services hero/affiliate_marketing.jpg";
import affiliate from "../../../../Assets/services/12.jpg";
import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
import Footer from "../../../../components/Footer";
import {
  FaShoppingBag,
  FaLaptopCode,
  FaGraduationCap,
  FaTshirt,
  FaMoneyCheckAlt,
} from "react-icons/fa";

import {
  FaChartLine,
  FaShieldAlt,
  FaGlobe,
  FaThumbsUp,
  FaSearch,
  FaClipboardCheck,
  FaPuzzlePiece,
} from "react-icons/fa";
import Slider from "react-slick";
import ContactForm from "../../../../components/ContactForm";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

const benefits = [
  {
    title: "Performance-Based ROI",
    desc: "Pay only for results - whether it’s a sale, lead, or sign-up - ensuring maximum efficiency.",
    icon: <FaChartLine className="text-3xl text-blue-600" />,
  },
  {
    title: "Low-Risk, High Reward",
    desc: "With no upfront ad spend, you grow without wasting budget on non-converting traffic.",
    icon: <FaShieldAlt className="text-3xl text-green-600" />,
  },
  {
    title: "Wider Market Reach",
    desc: "Leverage affiliates, influencers, and bloggers who already have a trusted audience.",
    icon: <FaGlobe className="text-3xl text-indigo-600" />,
  },
  {
    title: "Boosts Brand Credibility",
    desc: "Authentic promotions from real people build third-party trust and brand validation.",
    icon: <FaThumbsUp className="text-3xl text-pink-600" />,
  },
  {
    title: "Improves SEO & Visibility",
    desc: "Affiliate links from authority sites indirectly support better organic rankings.",
    icon: <FaSearch className="text-3xl text-purple-600" />,
  },
  {
    title: "Transparent Performance Tracking",
    desc: "Real-time dashboards let you track every click, conversion, and payout.",
    icon: <FaClipboardCheck className="text-3xl text-yellow-600" />,
  },
  {
    title: "Strengthens Other Campaigns",
    desc: "Affiliate efforts complement SEO, paid ads, social media, and email marketing.",
    icon: <FaPuzzlePiece className="text-3xl text-red-600" />,
  },
];

const verticals = [
  {
    title: "E-commerce",
    icon: <FaShoppingBag className="text-3xl text-blue-600" />,
    desc: "Drive product sales through coupon platforms, review sites, and influencers who promote your store.",
  },
  {
    title: "SaaS and Tech",
    icon: <FaLaptopCode className="text-3xl text-green-600" />,
    desc: "Promote software tools and subscriptions through tech bloggers, demo creators, and comparison platforms.",
  },
  {
    title: "Education & Training",
    icon: <FaGraduationCap className="text-3xl text-purple-600" />,
    desc: "Partner with content creators and ed-tech influencers to increase enrollments and sign-ups.",
  },
  {
    title: "Fashion & Lifestyle",
    icon: <FaTshirt className="text-3xl text-pink-600" />,
    desc: "Leverage affiliate bloggers and social creators to expand your reach and grow your brand organically.",
  },
  {
    title: "Finance & Insurance",
    icon: <FaMoneyCheckAlt className="text-3xl text-yellow-600" />,
    desc: "Promote high-value services through review sites and affiliate publishers with high authority.",
  },
];

const faqs = [
  {
    q: "Is affiliate marketing only for eCommerce?",
    a: "Not at all. Affiliate marketing works across industries like SaaS, fintech, education, wellness, and lead generation. At BigWig Media Digital, we design strategies tailored to your niche and goals.",
  },
  {
    q: "Why should I hire an affiliate marketing agency?",
    a: (
      <>
        <p>
          Managing affiliates requires time, tools, and expertise. A trusted
          affiliate marketing agency in India like BigWig Digital helps you:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Save time and reduce costs with expert program management.</li>
          <li>
            Access a strong network of affiliates, influencers, and creators.
          </li>
          <li>
            Get transparent reports, compliance checks, and ROI-driven
            campaigns.
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "How does affiliate marketing actually work?",
    a: "Affiliate marketing is a performance-based model where businesses pay affiliates only when they generate results – like sales, leads, or app installs. This makes it a low-risk, high-reward marketing channel.",
  },
  {
    q: "What’s your pricing model?",
    a: "We offer flexible pricing options, including a one-time setup fee with a monthly retainer or performance-based commissions. This ensures you only pay for measurable growth.",
  },
  {
    q: "Can you manage affiliate programs on platforms like CJ, Impact, or PartnerStack?",
    a: "Yes. Our team has experience managing and scaling programs on all major affiliate platforms.",
  },
  {
    q: "How long before I see results?",
    a: "Most clients see early traction within 30–45 days. By Month 2 onward, results typically become consistent as affiliate partnerships mature.",
  },
  {
    q: "Will I get access to performance reports?",
    a: "Absolutely. We provide real-time dashboards and detailed reports so you can track every click, conversion, and payout.",
  },
  {
    q: "How can I maximize my ROI from affiliate marketing?",
    a: (
      <>
        <p>
          Maximizing ROI comes down to two things: quality traffic + strong
          conversion rates. Our team helps you by:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Matching you with high-performing affiliates.</li>
          <li>Optimizing your funnels and offers.</li>
          <li>Ensuring campaigns run ethically and transparently.</li>
        </ul>
      </>
    ),
  },
];

function AffiliateMarketing() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
  };

  return (
    <div>
      <title>Affiliate Marketing Management</title>
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/affiliate-marketing"
      />
      <meta
        name="description"
        content="Grow your business through powerful affiliate partnerships and expert campaign tracking."
      />

      <Nav />
      <section
        className="relative bg-cover bg-center bg-no-repeat py-10 px-4"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="bg-black/40 absolute inset-0 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
              Performance-Driven Affiliate Marketing Services in India to Grow
              Your Business
            </h1>

            <p
              className="text-2xl md:text-4xl font-semibold text-[#4e6cba]"
              style={{
                textShadow: "0 2px 6px rgba(0,0,0,0.6)",
                letterSpacing: "0.5px",
              }}
            >
              <span className="inline">
                We grow your brand with commission-based mark
              </span>
              <span className="inline-block whitespace-nowrap">
                <TypeAnimation
                  sequence={[
                    "affiliate-driven sales",
                    2000,
                    "commission-based marketing ",
                    2000,
                    "  scalable traffic sources ",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </p>

            <p className="text-base md:text-lg max-w-md text-white/90">
              Turn partnerships into profits with affiliate marketing services
              in India that scales your business, strengthens your reach, and
              drives measurable results.
            </p>
            <a href="/contact">
              <button className="mt-4 px-6 py-3 bg-[var(--primary-color)] text-white rounded-full font-semibold hover:bg-opacity-80 transition">
                Contact Us
              </button>
            </a>
          </div>

          {/* Right Form */}
          <ContactForm />
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-12">
          {/* Title + Intro */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)]">
              Performance-Driven Affiliate Marketing Services in India
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Power your brand’s growth with strategic, risk-free affiliate
              marketing campaigns that convert.
            </p>
          </div>

          {/* Core Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side: Story */}
            <div className="space-y-6">
              <p className="text-gray-800 text-lg leading-relaxed">
                Affiliate marketing is one of the most powerful and
                budget-friendly ways to grow your business online. At{" "}
                <strong>BigWig Media Digital</strong>, a performance-driven
                affiliate marketing agency in India, we create strategic
                affiliate programs that help brands generate consistent sales,
                qualified leads, and greater visibility - without the heavy
                upfront advertising costs.
              </p>
              <p className="text-gray-800 text-lg leading-relaxed">
                Whether you’re a startup launching your first product or an
                established eCommerce brand looking to expand, our customized
                affiliate marketing services in India are designed to deliver
                measurable results that truly matter.
              </p>
              <p className="text-gray-800 text-lg leading-relaxed">
                By partnering with trusted affiliates and influencers, you can
                reach new audiences, drive high-quality traffic, and pay only
                for actual performance. That means zero wasted ad spend and
                maximum ROI. With the right affiliate strategy, your marketing
                efforts turn into a sustainable growth engine for your brand.
              </p>
            </div>

            {/* Right Side: Callout Box */}
            <div className="bg-blue-50 border-l-4 border-[var(--primary-color)] p-8 rounded-2xl shadow-md space-y-4">
              <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-2">
                Why Your Brand Needs Affiliate Marketing
              </h3>
              <p className="text-gray-700">
                Digital marketing is evolving rapidly, and paid ads are becoming
                more expensive and competitive. Affiliate marketing offers a
                smarter and more cost-effective alternative. Instead of paying
                for impressions or clicks that may not convert, you only reward
                affiliates when they bring in real results such as sales, leads,
                or app installs.s.
              </p>
              <p className="text-gray-700">
                This performance-based model reduces risk, ensures better ROI,
                and aligns your marketing budget directly with business growth.
                For businesses looking to scale without overspending, affiliate
                marketing becomes a reliable and sustainable channel.
              </p>
              <p className="text-gray-700">
                At BigWig Media Digital, a trusted affiliate marketing agency in
                India, we specialize in building profitable and scalable
                affiliate models tailored to your goals. Our strategies
                integrate seamlessly with your existing marketing channels,
                helping you expand reach, tap into new audiences, and generate
                consistent conversions.
              </p>
              <p className="text-gray-700">
                Whether your priority is lead generation, product sales, or app
                installs, our carefully chosen affiliate partnerships are built
                to deliver measurable outcomes. With the right approach,
                affiliate marketing doesn’t just support your brand - it becomes
                a long-term growth engine.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" py-12">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-20">
          {/* SECTION 1: Where Affiliate Works Best */}
          <div className="text-center space-y-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)]">
              Industries We Work With
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left">
              {verticals.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-gray-100">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 2: Scalable & Transparent */}
          <div className="space-y-12">
            {/* Two-column layout with image on right */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Text Content */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-[var(--primary-color)]">
                  Scalable, Transparent and Results-First
                </h3>
                <p className="text-gray-700 text-lg">
                  Affiliate marketing is not a one-size-fits-all approach. Every
                  brand has a different audience, product, and price point -
                  which is why our affiliate marketing services in India are
                  built on personalization. At BigWig Media Digital, a trusted
                  affiliate marketing agency in India, we design programs that
                  fit your unique business needs while ensuring measurable
                  growth.
                </p>
                <p className="text-gray-700 text-lg">
                  From identifying the right partners to tracking every
                  conversion, our process is transparent and performance-driven.
                  We don’t just connect you with affiliates - we equip them with
                  the right tools, insights, and strategies to promote your
                  brand effectively.
                </p>
                <p className="text-gray-700 text-lg">
                  Here’s how we ensure long-term success for your affiliate
                  program:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Strategic Partner Selection</strong> – We connect
                    you with affiliates who match your niche and audience.
                  </li>
                  <li>
                    <strong>End-to-End Management</strong> – From campaign setup
                    to tracking and payments, we handle it all.
                  </li>
                  <li>
                    <strong>Data-Driven Insights</strong> – Detailed performance
                    reports keep you in control.
                  </li>
                  <li>
                    <strong>Trusted Relationships</strong> – We focus on quality
                    affiliates who build brand reputation, not just traffic.
                  </li>
                  <li>
                    <strong>Scalable Growth</strong> – As your program expands,
                    we help you tap into new audiences globally.
                  </li>
                </ul>

                <p className="text-gray-700 text-lg">
                  With BigWig Media Digital, you’ll never have to worry about
                  low-quality traffic or shady promotions. Instead, you gain a
                  scalable affiliate model that strengthens your reputation,
                  reach, and revenue through trusted digital voices.
                </p>
              </div>

              {/* Right Image */}
              <div>
                <Image
                  src={affiliate}
                  alt="Affiliate Marketing Services"
                  className="w-full h-[60vh] rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* SECTION 3: Why BigWig */}
          <div className="bg-[var(--primary-color)] text-white p-4  rounded-3xl shadow-md text-center space-y-6">
            <h3 className="text-3xl font-bold">
              Why BigWig for Affiliate Marketing Services
            </h3>
            <p className="text-lg  mx-auto">
              When you work with BigWig Digital, you&#39;re choosing an agency
              that understands how to blend strategy with performance. As
              <span className="italic">
                <a href="https://www.bigwigdigital.in/">
                  {" "}
                  A Top Affiliate Marketing Company over the world,
                </a>
              </span>{" "}
              we use real-time tracking tools, smart campaign planning, and deep
              industry experience to build affiliate programs that actually
              work.
            </p>
            <p className="text-lg max-w-4xl mx-auto">
              Our focus is always on driving qualified traffic, high intent
              users, and measurable conversions, not vanity metrics.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-10">
          {/* Title and Intro */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)]">
              Benefits of Affiliate Marketing Services
            </h2>
            <p className="text-gray-700 text-lg">
              Affiliate marketing isn’t just cost-effective - it’s one of the
              smartest ways to scale your digital reach while paying only for
              actual results. As a leading affiliate marketing agency in India,
              BigWig Media Digital helps brands unlock these benefits:
            </p>
          </div>

          {/* Mobile Slider View */}
          <div className="block sm:hidden">
            <Slider {...sliderSettings}>
              {benefits.map((item, idx) => (
                <div key={idx} className="p-4">
                  <div className="bg-gray-50 hover:bg-gray-100 transition-all duration-300 p-6 rounded-xl shadow-sm border-l-4 border-[var(--primary-color)]">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-white p-3 rounded-full shadow">
                        {item.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-gray-700 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Desktop Grid View */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 hover:bg-gray-100 transition-all duration-300 p-6 rounded-xl shadow-sm border-l-4 border-[var(--primary-color)]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div>{item.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h4>
                </div>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OurProcess />
      <WhyBigwig />

      {/* Final Call-to-Action */}
      <div className=" py-12 bg-[var(--primary-color)]">
        <div className="w-5/6 mx-auto rounded-xl p-6 md:p-8 space-y-4 text-center">
          <h2 className="text-3xl font-semibold text-white">
            Ready to Build a Performance-Driven Partner Network?
          </h2>
          <p className="text-gray-200 max-w-3xl mx-auto">
            Whether you want to launch a new affiliate program from the ground
            up or scale an existing one, our tailored affiliate marketing
            services in India are designed to deliver consistent and measurable
            growth. At BigWig Media Digital, we work across multiple industries,
            platforms, and campaign types to ensure you get the maximum value
            from every partnership.
          </p>
          <p className="text-gray-200 max-w-3xl mx-auto">
            By choosing us as your affiliate marketing agency in India, you gain
            access to a trusted partner network, transparent reporting, and
            strategies that align with your long-term business goals.
          </p>
          <p className="text-gray-200 max-w-3xl mx-auto">
            Let’s start building your affiliate program today - and turn
            partnerships into a powerful growth engine for your brand.
          </p>
        </div>
      </div>
      {/* Final Call-to-Action */}
      <div className="py-12 bg-[var(--primary-color)]">
        <div className="w-5/6 mx-auto rounded-xl p-6 md:p-8 space-y-4 text-center">
          <h2 className="text-3xl font-semibold text-white">
            Ready to Build a Performance-Driven Partner Network?
          </h2>
          <p className="text-gray-200 max-w-3xl mx-auto">
            Whether you want to start an affiliate program from scratch or scale
            an existing one, our <strong>affiliate marketing services </strong>{" "}
            are tailored to deliver consistent, trackable growth. We work across
            industries, platforms, and campaign types to help you get the most
            from every partnership.
          </p>

          {/* Let's Connect Button */}
          <a href="/contact">
            <button className="mt-6 px-8 py-3 bg-white text-[var(--primary-color)] font-semibold rounded-full shadow hover:bg-gray-100 transition">
              Let’s Connect
            </button>
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-12">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)] text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg shadow-sm bg-white"
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left text-gray-900 font-medium focus:outline-none"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <h3>{item.q}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="p-4 pt-0 text-gray-700">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services Table Section */}
      <section className="bg-white py-12">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)] text-center">
            Our Other Services
          </h2>

          <div className="overflow-x-auto rounded-xl shadow-lg">
            <table className="w-full table-auto border border-gray-300 border-collapse text-center">
              <tbody>
                <tr className="">
                  <td className="px-6 py-4 border border-gray-300 text-blue-600  hover:underline cursor-pointer hover:bg-indigo-50 transition">
                    <a href="/services/search-engine-optimization">
                      Search Engine Optimization
                    </a>
                  </td>
                  <td className="px-6 py-4 border border-gray-300 text-blue-600  hover:underline cursor-pointer hover:bg-indigo-50 transition">
                    <a href="/services/social-media-marketing">
                      Social Media Marketing
                    </a>
                  </td>
                  <td className="px-6 py-4 border border-gray-300 text-blue-600  hover:underline cursor-pointer hover:bg-indigo-50 transition">
                    <a href="/services/performance-marketing">
                      Performance Marketing
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 border border-gray-300 text-blue-600 hover:underline cursor-pointer hover:bg-indigo-50 transition">
                    <a href="/services/content-marketing">Content Marketing</a>
                  </td>
                  <td className="px-6 py-4 border border-gray-300 text-blue-600 hover:underline cursor-pointer hover:bg-indigo-50 transition">
                    <a href="/services/website-design-development">
                      Website Designing & Development
                    </a>
                  </td>
                  <td className="px-6 py-4 border border-gray-300 text-blue-600 hover:underline cursor-pointer hover:bg-indigo-50 transition">
                    <a href="/services/email-marketing">Email Marketing</a>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 border border-gray-300 text-blue-600 hover:underline cursor-pointer hover:bg-indigo-50 transition">
                    <a href="/services/social-media-optimization">
                      Social Media Optimization
                    </a>
                  </td>
                  <td className="px-6 py-4 border border-gray-300 text-blue-600 hover:underline cursor-pointer hover:bg-indigo-50 transition">
                    <a href="/services/graphic-designing">Graphic Designing</a>
                  </td>
                  <td className="px-6 py-4 border border-gray-300 text-blue-600 hover:underline cursor-pointer hover:bg-indigo-50 transition">
                    <a href="/services/ai-cgi-marketing">
                      AI and CGI Marketing
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 border border-gray-300 text-blue-600 hover:underline cursor-pointer hover:bg-indigo-50 transition">
                    <a href="/services/landing-page-optimization">
                      Landing Page Optimization
                    </a>
                  </td>
                  <td className="px-6 py-4 border border-gray-300 text-blue-600 hover:underline cursor-pointer hover:bg-indigo-50 transition">
                    <a href="/services/video-shoot">Video Shoot</a>
                  </td>
                  <td className="px-6 py-4 border border-gray-300 text-blue-600 hover:underline cursor-pointer hover:bg-indigo-50 transition">
                    <a href="/services/public-relations">Public Relations</a>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 border border-gray-300 text-blue-600 hover:underline cursor-pointer hover:bg-indigo-50 transition">
                    <a href="/services/influencer-marketing">
                      Influencer Marketing
                    </a>
                  </td>
                  <td className="px-6 py-4 border border-gray-300"></td>
                  <td className="px-6 py-4 border border-gray-300 text-blue-600 hover:underline cursor-pointer hover:bg-indigo-50 transition">
                    <a href="/services/online-reputation-management">
                      Online Reputation Management
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AffiliateMarketing;

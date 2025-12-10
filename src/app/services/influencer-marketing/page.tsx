"use client";
import { TypeAnimation } from "react-type-animation";
import Nav from "../../../../components/Nav";
import hero from "../../../../Assets/Services hero/Influencer_marketing.jpg";
import influencer from "../../../../Assets/services/15.jpg";
import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
import Footer from "../../../../components/Footer";
import Slider from "react-slick";
import { FaCheckCircle } from "react-icons/fa";
import ContactForm from "../../../../components/ContactForm";
import Image from "next/image";

const impactPoints = [
  {
    title: "Launch Campaigns That Get Noticed",
    desc: "Create excitement around new product or service launches through creators who generate buzz and build anticipation organically.",
  },
  {
    title: "Boost Engagement With Relatable Content",
    desc: "Influencers craft content that blends seamlessly into social feeds, encouraging genuine interaction and deeper audience engagement.",
  },
  {
    title: "Build Long-Term Brand Recall",
    desc: "Consistent collaborations with the right voices help your brand become recognizable, trusted, and remembered.",
  },
  {
    title: "Drive Conversions From Warm Audiences",
    desc: "Tap into already-engaged communities and turn awareness into action with call-to-action driven influencer promotions.",
  },
  {
    title: "Create Reusable Content Assets",
    desc: "Influencer-generated content is perfect for repurposing across ads, websites, emails, and more,extending your campaign’s lifespan and value.",
  },
];

const benefits = [
  "Builds instant brand trust and relatability",
  "Drives high-quality traffic from engaged communities",
  "Increases social proof and online visibility",
  "Cost-effective compared to traditional celebrity endorsements",
  "Works across industries and platforms",
  "Generates authentic content for brand reuse",
  "Helps brands grow organically with long-term impact",
];
function InfluencerMarketing() {
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
      <title>Influencer Marketing Solutions</title>
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/influencer-marketing"
      />
      <meta
        name="description"
        content="Connect with influencers who align with your brand to drive real engagement and sales."
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
              Influencer Marketing Services That Connect Brands with Real
              Audiences
            </h1>

            <p
              className="text-2xl md:text-4xl font-semibold text-[#4e6cba]"
              style={{
                textShadow: "0 2px 6px rgba(0,0,0,0.6)",
                letterSpacing: "0.5px",
              }}
            >
              <span className="inline">We grow your brand with&nbsp;</span>
              <span className="inline-block whitespace-nowrap">
                <TypeAnimation
                  sequence={[
                    "real audience influence",
                    2000,
                    " authentic partnerships ",
                    2000,
                    "  influencers that connect",
                    2000,
                    "content that converts",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </p>

            <p className="text-base md:text-lg max-w-md text-white/90">
              Turn influence into impact with campaigns led by creators who know
              how to tell your story and move their audience to action.
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
        <div className="w-11/12 md:w-5/6 mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)]">
              Influencer Marketing That Builds Real Trust
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              In today’s attention-driven world, people trust people,not just
              ads. That’s where influencer marketing steps in as one of the most
              powerful and authentic brand-building tools. At{" "}
              <strong>
                <a href="https://www.bigwigdigital.in/"> BigWig Digital</a>
              </strong>
              , we help you harness the power of voices your audience already
              trusts. Our customized{" "}
              <strong>Influencer Marketing Services</strong> connect your brand
              with the right content creators, storytellers, and digital
              personalities to expand your reach, boost credibility, and drive
              real engagement.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Whether you&#39;re targeting Gen Z on Instagram, professionals on
              LinkedIn, or lifestyle enthusiasts on YouTube, we tailor campaigns
              that align with your goals and audience. From niche creators to
              high-reach influencers, every collaboration is designed to feel
              natural and perform effectively.
            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2">
            <Image
              src={influencer}
              alt="Influencer Marketing Services"
              className="w-full h-[60vh] rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Text Section */}
          <div className="space-y-4">
            <h2 className="text-3xl  font-semibold text-[var(--primary-color)]">
              Why Influencer Marketing Works
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Consumers are becoming smarter, and traditional ads no longer
              carry the same weight. Today, decisions are shaped by peer
              recommendations, creator reviews, and relatable content.
              Influencers bridge the gap between brands and audiences by sharing
              products and services in a way that feels personal and
              trustworthy.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Our approach to influencer marketing goes beyond vanity metrics.
              We focus on strategic partnerships that bring you high-intent
              traffic, quality leads, and increased brand awareness. As a
              trusted influencer marketing agency, we ensure that each campaign
              is thoughtfully designed to deliver both visibility and measurable
              ROI.
            </p>
          </div>

          {/* Right Text Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-[var(--primary-color)]">
              Building Brand Love Through Human Connection
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Influencer marketing is more than just posting content. It’s about
              building long-term emotional connections between your brand and
              the people who matter most. Whether you&#39;re launching a
              campaign or creating everyday brand moments, influencer content
              delivers unmatched authenticity and relatability.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              We believe in pairing the right story with the right voice. As an
              influencer marketing agency{" "}
              <strong>
                <a href="https://www.bigwigdigital.in/">BigWig Digital</a>
              </strong>{" "}
              ensures your brand narrative is told by creators who not only
              align with your values but genuinely influence your target
              audience. This creates content that doesn&#39;t just engage but
              inspires action.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 ">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)] mb-10 text-center max-w-3xl mx-auto">
          Where Influencer Marketing Creates Maximum Impact
        </h2>

        {/* Mobile View: Slider */}
        <div className="w-11/12 mx-auto md:hidden">
          <Slider {...sliderSettings}>
            {impactPoints.map((item, idx) => (
              <div key={idx} className="px-2">
                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[var(--primary-color)] shadow-sm text-left">
                  <h4 className="text-xl font-semibold mb-2 text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Desktop View: Grid */}
        <div className="w-5/6 mx-auto hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impactPoints.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-xl border-l-4 border-[var(--primary-color)] shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-xl font-semibold mb-2 text-gray-900">
                {item.title}
              </h4>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-12 ">
        <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Content Block */}
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-[var(--primary-color)]">
              Influencer Campaigns That Balance Creativity and Strategy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At{" "}
              <strong>
                <a href="https://www.bigwigdigital.in/">BigWig Digital </a>
              </strong>
              , we view every influencer collaboration as a strategic blend of
              content and connection. It’s not just about high follower counts,
              but about working with creators whose voice, tone, and audience
              align with your brand identity.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We help you build campaigns that feel natural, spark conversation,
              and inspire action. Each piece of content is crafted to engage
              authentically while staying true to your marketing goals. As a
              trusted <strong>Influencer Marketing Agency</strong> we understand
              how to deliver influencer content that performs without feeling
              like an advertisement.
            </p>
          </div>

          {/* Right Content Block */}
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-[var(--primary-color)]">
              Scalable Solutions for Brands of All Sizes
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Big corporations with enormous expenditures are no longer the only
              ones doing influencer marketing. Whether you&#39;re a startup
              launching your first campaign or an established business looking
              to grow your online reach, our influencer marketing services can
              be tailored to meet your unique needs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We identify the right mix of creators based on engagement,
              relevance, and credibility, helping you reach the right audience
              with precision. Our focus remains on driving quality engagement,
              building trust, and delivering measurable returns through
              influencer-led strategies.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Feature Grid */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)] mb-6">
              Benefits of Influencer Marketing
            </h2>
            <ul className="space-y-4">
              {benefits.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-800 text-sm leading-relaxed"
                >
                  <FaCheckCircle className="text-[var(--primary-color)] text-lg mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: BigWig Statement with Primary Color Background */}
          <div className="bg-[var(--primary-color)] text-white px-6  rounded-xl shadow-md flex flex-col justify-center">
            <h2 className="text-3xl  font-semibold mb-4">
              Why BigWig for Influencer Marketing Services
            </h2>
            <p className="text-base leading-relaxed">
              At <strong>BigWig Digital</strong>, we bring a performance-first
              mindset to every influencer campaign. From platform-specific
              strategy to relationship-building with creators, we deliver
              impactful collaborations backed by insights and creativity.
            </p>
            <p className="mt-4 text-base leading-relaxed">
              That’s why brands looking for dependable influencer marketing
              services choose BigWig to drive awareness and conversions through
              the power of influence.
            </p>
          </div>
        </div>
      </section>
      <OurProcess />
      <WhyBigwig />
      <Footer />
    </div>
  );
}

export default InfluencerMarketing;

"use client";
import Nav from "../../../../components/Nav";
import ContactForm from "../../../../components/ContactForm";
import bannerImage from "../../../../Assets/dubai.jpg";
import Footer from "../../../../components/Footer";
import seoImage from "../../../../Assets/Dubai/transformBuisness.jpg";
import {
  CheckCircle,
  BarChart,
  Users,
  Palette,
  TrendingUp,
  Layers,
} from "lucide-react";

import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
// import { useState } from "react";
// import PopupForm from "../../components/PopupForm";
import CTABanner from "../../../../components/CTABanner";
import {
  Facebook,
  Linkedin,
  Music,
  MessageCircle,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: <Facebook className="text-blue-600 w-8 h-8" />,
    title: "Meta Ads (Facebook & Instagram)",
    desc: "We create scroll-stopping ad campaigns tailored to Dubai, UAE’s multicultural audience. Perfect for eCommerce, D2C, and real estate businesses.",
  },
  {
    icon: <Linkedin className="text-blue-700 w-8 h-8" />,
    title: "LinkedIn Ads",
    desc: "The UAE’s business hub demands smart B2B advertising. From sponsored content to lead-gen forms, we connect you with decision-makers across Dubai industries.",
  },
  {
    icon: <Music className="text-pink-500 w-8 h-8" />,
    title: "TikTok Ads",
    desc: "Dubai’s youth and Gen Z spend hours on TikTok. Our short-form video ads capture attention with trending, creative, and high-impact campaigns.",
  },
  {
    icon: <MessageCircle className="text-yellow-500 w-8 h-8" />,
    title: "Snapchat Ads",
    desc: "Target highly engaged, mobile-first UAE audiences with immersive video and story-based formats. Popular among younger demographics in Dubai.",
  },
  {
    icon: <Twitter className="text-sky-500 w-8 h-8" />,
    title: "Twitter (X) Ads",
    desc: "From trending hashtags to event-based campaigns, we help brands in Dubai spark conversations and generate traffic with precise interest targeting.",
  },
  {
    icon: <Youtube className="text-red-600 w-8 h-8" />,
    title: "YouTube Ads",
    desc: "Tell your brand story with skippable, non-skippable, or in-feed ads. Perfect for Dubai’s video-first consumers and businesses aiming to build awareness.",
  },
];

function SmmServicesInDubai() {
  //   const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="bg-white text-black font-raleway">
      <title>
        Social Media Marketing Services in Dubai, UAE | BigWig Media Digital
      </title>
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/social-media-marketing-services-in-dubai-uae"
      />
      <meta
        name="description"
        content="Boost your brand visibility with expert Social Media Marketing Services in Dubai, UAE. BigWig Media Digital helps you drive engagement, leads, and sales."
      />
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
              Social Media Marketing Services in Dubai, UAE
            </h1>
            <h2 className="text-2xl font-semibold leading-tight">
              Engage, Influence & Convert
            </h2>
            <p className="text-lg">
              Our social media marketing services in Dubai, UAE empower brands
              to connect with their audience, create impactful campaigns, and
              drive meaningful engagement across platforms like Instagram,
              Facebook, and LinkedIn.
            </p>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12  bg-white ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <Image
              src={seoImage}
              alt="Social Media Marketing Agency in Dubai, UAE"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 ">
              Performance-Driven Social Media Ads for Dubai, UAE Businesses
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Looking for a social media marketing agency in Dubai, UAE that
              actually drives results, not just impressions? At BigWig Media
              Digital, we specialize in paid social media advertising campaigns
              that help your business grow, scale, and dominate across every
              major platform – from Instagram and TikTok to LinkedIn and
              YouTube.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              In Dubai, UAE’s fast-paced and competitive market, organic reach
              alone isn’t enough. Our data-backed strategies ensure your brand
              doesn’t just show up – it stands out.
            </p>
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto  text-gray-900 py-12 font-raleway">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Why{" "}
          <span className="text-[var(--primary-color)]">
            Paid Social Media Ads
          </span>{" "}
          Matter for Dubai, UAE Businesses
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl mb-12 leading-relaxed">
          With millions of active users in the UAE across Instagram, TikTok,
          LinkedIn, and Snapchat, social media ads are the fastest way to reach
          your ideal audience. In 2025, algorithm changes and content overload
          make paid advertising the most reliable way to:
        </p>

        {/* Bullet Points */}
        <div className=" space-y-5 text-lg">
          <div className="flex items-start gap-3">
            <span className="text-[var(--primary-color)] text-xl">●</span>
            <p>Target audiences by location, interests, and behavior.</p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-[var(--primary-color)] text-xl">●</span>
            <p>Reach both local UAE customers and international audiences.</p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-[var(--primary-color)] text-xl">●</span>
            <p>Generate leads, traffic, sales, and brand visibility.</p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-[var(--primary-color)] text-xl">●</span>
            <p>
              Compete effectively in industries like real estate, e-commerce,
              hospitality, education, and finance.
            </p>
          </div>
        </div>

        {/* Closing Note */}
        <p className="text-lg md:text-xl mt-12 leading-relaxed">
          Our approach is built on precision targeting, high-converting
          creatives, and continuous optimization – ensuring every dirham spent
          delivers measurable ROI.
        </p>
      </section>

      <section className="py-12 w-11/12 md:w-5/6 mx-auto text-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Paid Social Media Advertising Services in{" "}
          <span className="text-[var(--primary-color)]">Dubai, UAE</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12 text-gray-900 font-raleway">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-12">
          Why Choose{" "}
          <span className="text-[var(--primary-color)]">
            BigWig Media Digital{" "}
          </span>
          for Social Media Advertising in Dubai, UAE?
        </h2>

        {/* Why Choose Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="flex items-start space-x-4">
            <Users className="w-8 h-8 text-blue-600" />
            <div>
              <h3 className="font-semibold text-lg">
                Platform-Specific Expertise
              </h3>
              <p>
                We tailor strategies for Instagram, TikTok, LinkedIn, and
                YouTube to maximize results.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Palette className="w-8 h-8 text-blue-600" />
            <div>
              <h3 className="font-semibold text-lg">Creative + Strategy</h3>
              <p>
                Eye-catching visuals, persuasive Arabic + English ad copy, and
                CTAs designed for conversions.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <TrendingUp className="w-8 h-8 text-blue-600" />
            <div>
              <h3 className="font-semibold text-lg">
                Conversion-Focused Funnels
              </h3>
              <p>
                From awareness to retargeting, we create full-funnel campaigns
                that nurture leads and drive purchases.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <BarChart className="w-8 h-8 text-blue-600" />
            <div>
              <h3 className="font-semibold text-lg">Transparent Reporting</h3>
              <p>
                We monitor CPC, CTR, ROAS, CPL and provide clear weekly reports.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Layers className="w-8 h-8 text-blue-600" />
            <div>
              <h3 className="font-semibold text-lg">Scalable Budgets</h3>
              <p>
                From AED 5,000 to AED 500,000, we maximize ROI at every level.
              </p>
            </div>
          </div>
        </div>

        {/* What You Get */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          What You Get with Our Social Media Ad Management in Dubai, UAE
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "End-to-end campaign strategy and funnel design",
            "Audience research tailored to Dubai, UAE markets",
            "Ad creative design (copy + visuals in English & Arabic)",
            "A/B testing for maximum ad performance",
            "Pixel & conversion tracking for accurate insights",
            "Weekly performance reports & ongoing optimization",
            "Scalable campaigns that grow with your business",
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <OurProcess />
      <WhyBigwig />
      <CTABanner
        title="With BigWig Media Digital as your social media marketing agency in Dubai, UAE, your brand won’t just reach people – it will convert audiences into loyal customers."
        buttonText="Get Started Today"
      />
      <Footer />
      {/* <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} /> */}
    </div>
  );
}

export default SmmServicesInDubai;

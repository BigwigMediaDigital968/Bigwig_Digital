"use client";
import Nav from "../../../../components/Nav";
import ContactForm from "../../../../components/ContactForm";
import bannerImage from "../../../../Assets/dubai.jpg";
import Footer from "../../../../components/Footer";
import seoImage from "../../../../Assets/Dubai/transformBuisness.jpg";
import { BarChart3, CheckCircle2, Globe } from "lucide-react";
import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
// import { useState } from "react";
// import PopupForm from "../../components/PopupForm";
import CTABanner from "../../../../components/CTABanner";
import Image from "next/image";

const services = [
  {
    title: "Local SEO (Dubai & UAE)",
    points: [
      "Appear in “near me” searches to capture local customers.",
      "Optimize your Google Business Profile (GBP) for maps and local pack visibility.",
      "Build local citations for stronger online presence.",
      "Manage ratings & reviews to build trust and click-throughs.",
      "Create location-based content to attract Dubai-based audiences.",
    ],
  },
  {
    title: "App Store Optimization (ASO)",
    points: [
      "Increase app visibility & rankings on Apple App Store and Google Play.",
      "Use keyword-driven strategies for more downloads & engagement.",
      "Gain positive reviews for long-term credibility.",
      "Stand out with Dubai-focused app marketing strategies.",
    ],
  },
  {
    title: "Answer Engine Optimization (AEO)",
    points: [
      "Optimize content for Google featured snippets & People Also Ask.",
      "Rank higher for voice searches (in both English & Arabic queries).",
      "Use schema markup for better visibility.",
      "Create conversational content that matches Dubai users’ search patterns.",
    ],
  },
  {
    title: "Geo-Targeted SEO (GEO)",
    points: [
      "Rank across multiple UAE cities like Dubai, Abu Dhabi, Sharjah, Ajman.",
      "Create localized landing pages for hyper-targeted traffic.",
      "Strengthen rankings with geo-specific keywords.",
      "Perfect for businesses with multiple branches in Dubai and across the UAE.",
    ],
  },
  {
    title: "E-commerce SEO in Dubai, UAE",
    points: [
      "Boost online store visibility and sales.",
      "Improve product rankings on Google & search engines.",
      "Optimize product descriptions, URLs, and UX for higher conversions.",
      "Ensure technical SEO fixes for seamless shopping experiences.",
      "Reduce dependency on ads with sustainable organic sales growth.",
    ],
  },
  {
    title: "International SEO",
    points: [
      "Expand your Dubai-based business to global markets.",
      "Optimize for multi-language (Arabic, English, Hindi, etc.) and regions.",
      "Implement hreflang tags & geo-targeting.",
      "Build a global SEO strategy while strengthening your Dubai presence.",
    ],
  },
];

const points = [
  {
    title: "Local Expertise",
    desc: "Deep understanding of the Dubai business landscape & consumer behavior.",
    icon: <Globe className="w-8 h-8 text-[var(--primary-color)]" />,
  },
  {
    title: "Transparent Growth",
    desc: "Transparent reporting & measurable growth.",
    icon: <BarChart3 className="w-8 h-8 text-[var(--primary-color)]" />,
  },
  {
    title: "Proven Success",
    desc: "Proven track record in real estate, hospitality, e-commerce, startups & corporates.",
    icon: <CheckCircle2 className="w-8 h-8 text-[var(--primary-color)]" />,
  },
];

function SeoServicesInDubai() {
  //   const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="bg-white text-black font-raleway">
      <title>SEO Services in Dubai, UAE | BigWig Media Digital</title>
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/seo-services-in-dubai-uae"
      />
      <meta
        name="description"
        content="Rank higher and grow your business online with professional SEO Services in Dubai, UAE. BigWig Media Digital delivers results-driven SEO strategies."
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
              Search Engine Optimization Services in Dubai, UAE
            </h1>
            <h2 className="text-2xl font-semibold leading-tight">
              Boost Visibility & Organic Growth
            </h2>
            <p className="text-lg">
              With our expert SEO services in Dubai, UAE, we help your business
              rank higher on search engines, attract qualified leads, and build
              long-term online visibility through proven, ethical optimization
              techniques.
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
              alt="SEO in Dubai"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 ">
              What is SEO & Why is it Important for Your Business in Dubai, UAE?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Many businesses in Dubai, UAE believe SEO is simply a digital
              formality. In reality, Search Engine Optimization (SEO) is the
              process of improving your website’s visibility in search engine
              results pages (SERPs), primarily on Google, Bing, and Yahoo. The
              higher you rank, the greater your chances of being discovered by
              potential customers.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              In Dubai’s highly competitive business hub, SEO is no longer
              optional – it’s essential. With thousands of companies fighting
              for attention, only those with a strong SEO strategy stand out.
            </p>

            <h3 className="text-2xl font-semibold text-[var(--primary-color)] mb-4">
              Our SEO Approach in Dubai Focuses On:
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300 list-disc pl-5">
              <li>
                <span className="font-semibold">Keyword Analysis</span> –
                Targeting what your Dubai audience is searching for.
              </li>
              <li>
                <span className="font-semibold">Backlink Building</span> –
                Establishing authority and trust online.
              </li>
              <li>
                <span className="font-semibold">Content Creation</span> –
                Crafting engaging, localized, and SEO-friendly content.
              </li>
              <li>
                <span className="font-semibold">Technical SEO</span> – Ensuring
                smooth website performance across devices.
              </li>
            </ul>

            <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              These elements form the backbone of successful SEO campaigns and
              are at the core of{" "}
              <span className="font-semibold text-[var(--primary-color)]">
                BigWig Media Digital’s
              </span>{" "}
              approach.
            </p>
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content - Company Intro */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Best SEO Company in Dubai, UAE
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Drive Organic Traffic with the Best SEO Company in Dubai & UAE
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              At{" "}
              <span className="font-semibold text-[var(--primary-color)]">
                BigWig Media Digital
              </span>
              , we are a leading SEO agency in Dubai, UAE with more than a
              decade of proven experience. We’ve helped businesses across
              retail, real estate, e-commerce, hospitality, and corporate
              sectors achieve top rankings on Google and grow their digital
              presence.
            </p>

            <ul className="space-y-3 text-gray-700 dark:text-gray-300 list-disc pl-5">
              <li>
                <span className="font-semibold">10+ years</span> of expertise in
                global and Dubai-focused SEO.
              </li>
              <li>
                <span className="font-semibold">10,000+ campaigns</span> managed
                successfully across industries.
              </li>
              <li>
                <span className="font-semibold">95% client retention rate</span>{" "}
                showcasing our trust and results.
              </li>
            </ul>
          </div>

          {/* Right Content - Why SEO is Needed */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-[var(--primary-color)]">
              Why Dubai Businesses Need SEO Now More Than Ever
            </h3>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300 list-disc pl-5">
              <li>
                Over{" "}
                <span className="font-semibold">53% of website traffic</span>{" "}
                globally comes from organic search.
              </li>
              <li>
                By 2028, the global SEO industry will exceed{" "}
                <span className="font-semibold">$122.11 billion</span>.
              </li>
              <li>
                In Dubai, UAE,{" "}
                <span className="font-semibold">mobile-first searches</span>{" "}
                dominate with more than 60% done on smartphones.
              </li>
              <li>
                Google holds over{" "}
                <span className="font-semibold">92% market share</span> – making
                Google SEO a must for Dubai businesses.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12 bg-white ">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            All-in-One SEO Services in Dubai, UAE – Under One Roof
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3">
            Comprehensive SEO strategies designed for local, e-commerce, mobile
            apps, international, and more – all tailored for Dubai & UAE
            businesses.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-lg transition p-6"
            >
              <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-4">
                {service.title}
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc pl-5 text-sm leading-relaxed">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Why Choose BigWig Media Digital for SEO in Dubai, UAE?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-lg transition p-6 text-center"
            >
              <div className="flex justify-center mb-4">{point.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {point.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      <OurProcess />
      <WhyBigwig />
      <CTABanner
        title="With BigWig Media Digital, your brand won’t just rank higher – it will dominate the Dubai digital market."
        buttonText="Get Started Today"
      />
      <Footer />
      {/* <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} /> */}
    </div>
  );
}

export default SeoServicesInDubai;

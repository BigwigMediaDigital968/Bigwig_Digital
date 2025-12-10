"use client";
import { TypeAnimation } from "react-type-animation";
import Footer from "../../../../components/Footer";
import Nav from "../../../../components/Nav";
import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
import hero from "../../../../Assets/Services hero/PPC-1.jpg";
import ppc from "../../../../Assets/services/7.jpg";
// import ppc from "../../assets/Services hero/PPC.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaSearchDollar,
  FaPhotoVideo,
  FaFacebookF,
  FaRetweet,
  FaMobileAlt,
  FaShoppingCart,
} from "react-icons/fa";
import ContactForm from "../../../../components/ContactForm";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

const ppcBenefits = [
  {
    title: "Achieve Business Goals Faster",
    content:
      "Unlike traditional marketing, PPC advertising delivers instant results. With one click, you can reach thousands of potential customers through Google Ads and social media campaigns. Whether your goal is more leads, sales, video views, or app downloads, PPC helps you achieve it quickly.",
  },
  {
    title: "Fast & Measurable Results",
    content:
      "PPC campaigns bring immediate traffic to your website by targeting users on Google, YouTube, Gmail, apps, and social media platforms. With BigWig Media Digital, every ad is trackable — from clicks and visits to leads and sales. This transparency allows you to measure ROI and improve campaigns for maximum results.",
  },
  {
    title: "Reach a Targeted Audience",
    content:
      "Our PPC services in India ensure your ads are shown to the right people at the right time. You can target users based on their location, age, interests, and online behavior. Whether it’s travel, fashion, food, or technology, PPC ensures your business reaches the audience most likely to convert.",
  },
  {
    title: "Build Strong Brand Recognition",
    content:
      "By using high-intent keywords and smart ad placements, PPC ads keep your brand visible at the top of search results. This not only boosts sales but also increases brand awareness among your target customers. Social media ads further strengthen your online presence.",
  },
  {
    title: "Budget-Friendly PPC Campaigns",
    content:
      "With BigWig Media Digital, a top PPC company in India, you have complete control over your ad spend. You decide how much to invest, and campaigns can be scaled up or down depending on performance. This flexibility makes PPC a cost-effective way to grow your business.",
  },
  {
    title: " Increased Website Traffic",
    content:
      "Well-optimized PPC ads attract quality visitors who are actively searching for your products or services. By targeting relevant keywords, our PPC experts in India help your business gain more clicks, boost visibility, and increase website traffic significantly.",
  },
  {
    title: "  Generate More Leads ",
    content:
      "Through strategic keyword research, engaging ad copy, and retargeting campaigns, PPC helps you generate high-quality leads. Our PPC agency in India ensures your campaigns are designed to reach users who are most likely to take action.",
  },
  {
    title: "Drive More Sales and Conversions",
    content:
      "PPC advertising doesn’t just bring traffic; it brings buyers. By optimizing landing pages and using persuasive call-to-actions, PPC campaigns guide users through the sales funnel, helping you increase conversions and sales effectively.",
  },
  {
    title: "Boost In-Store Visits",
    content:
      "If you run a physical store, PPC ads with location-based targeting can drive nearby customers directly to your business. Adding a “Visit Us Today” call-to-action motivates users to walk into your store.",
  },
  {
    title: "Get More Phone Calls",
    content:
      "With call-only ads and click-to-call extensions, PPC makes it easier for customers to connect with your business instantly. Our PPC services in India also include call tracking, so you know exactly which ads bring the most valuable leads.",
  },
  {
    title: "Better Brand Awareness ",
    content:
      "PPC not only drives sales but also builds long-term recognition for your brand. By running display ads, video ads, and remarketing campaigns, our PPC agency in India helps your business stay in front of your audience - making your brand stronger and more trusted.",
  },
];

const features = [
  {
    title: "Top PPC Services Provider",
    text: "With Google Ads-certified experts, BigWig Digital is a top PPC provider that serves customers worldwide.",
  },
  {
    title: "Instant Lead Generation with Cost-Efficiency",
    text: "With the help of our PPC services, you can swiftly and affordably draw in targeted customers with clever sponsored advertising campaigns.",
  },
  {
    title: "Expert Management of Google & Social Media Ads",
    text: "We oversee effective PPC campaigns on social media and Google Ads to immediately increase your visibility and traffic.",
  },
  {
    title: "Affordable PPC Campaigns That Deliver Results",
    text: "Our digital marketing services are at competitive prices while maintaining high quality, unlike many other agencies",
  },
  {
    title: "Guaranteed Top Search Placement",
    text: "With high-intent keywords, our SEO team gets your website on the front page of search results when it matters most.",
  },
  {
    title: "Transparent & Scalable PPC Strategy",
    text: "With BigWig Digital, you maintain budgetary control while we assist in growing your company with ROI-focused, data-driven campaigns.",
  },
];
const faqs = [
  {
    q: "Why choose BigWig Digital for PPC services?",
    a: " BigWig Digital is a trusted name for PPC services in India, known for delivering ROI-driven campaigns. Our experts focus on targeting the right audience, optimizing ad spend, and ensuring maximum returns for your business.",
  },
  {
    q: "How do PPC services help my business?",
    a: "With professional PPC advertising services, your business gets instant visibility, high-quality leads, and measurable growth. Unlike traditional marketing, PPC ensures you reach the right customers at the right time.",
  },
  {
    q: "  Do you offer affordable PPC packages?",
    a: "Yes, we provide affordable PPC services customized for every budget. Whether you’re a startup or an established brand, our packages are designed to maximize ROI without overspending.",
  },
  {
    q: "Which platforms do you cover in PPC?",
    a: "Our PPC management services cover Google Ads, Bing, Facebook, Instagram, and LinkedIn campaigns. This multi-platform approach ensures your business captures leads across different online channels.",
  },
  {
    q: " How fast can I see results with PPC?",
    a: " The best part of PPC marketing services is that you start seeing traffic and leads within a few days of campaign launch. With proper optimization, conversions and ROI improve consistently over time.",
  },
  {
    q: "  Is PPC better than SEO?",
    a: "  PPC services provide quick results with instant traffic and leads, while SEO builds long-term organic growth. For the best results, both PPC and SEO should work together as part of your digital strategy.",
  },
  {
    q: " Do you provide PPC reports?",
    a: " Yes, we share detailed PPC reports highlighting clicks, conversions, cost per lead, and ROI. This transparency ensures you know exactly how your ad budget is being utilized.",
  },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  arrows: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  pauseOnHover: false,
};

const featureSettings = {
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

function PerformanceMarketing() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <title>ROI-Driven Performance Marketing</title>
      <meta
        name="description"
        content="Maximize your ROI with data-driven performance marketing services tailored for your business goals."
      />
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/performance-marketing"
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
              Top PPC Company in India
            </h1>

            <p
              className="text-3xl md:text-4xl font-semibold flex items-center gap-2 text-[#4e6cba]"
              style={{
                textShadow: "0 2px 6px rgba(0,0,0,0.6)",
                letterSpacing: "0.5px",
              }}
            >
              Be&nbsp;
              <TypeAnimation
                sequence={["Seen", 2000, "Clicked", 2000, "Remembered", 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </p>

            <p className="text-base md:text-lg max-w-md text-white/90">
              Turn Clicks into Customers with Our ROI-Focused PPC Campaigns
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

      <section className="bg-white text-black  py-12">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-20">
          {/* Intro */}

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)]">
                Best PPC Company in India
              </h2>
              <p className="text-lg leading-relaxed text-justify md:text-left">
                At{" "}
                <strong>
                  <a href="https://www.bigwigdigital.in/">BigWig Digital</a>
                </strong>
                , we are recognized as one of the best PPC companies in India,
                trusted by startups, SMEs, and enterprises for delivering
                measurable growth. As a leading PPC agency in India, our
                certified experts design and manage high-performance campaigns
                that ensure maximum ROI with complete transparency.
              </p>
              <p className="text-lg leading-relaxed text-justify md:text-left">
                We combine data-driven insights with innovative strategies to
                create impactful PPC services in India that help brands achieve
                higher visibility, quality leads, and stronger conversions. Our
                approach focuses on understanding your business goals,
                optimizing ad spends, and maximizing every click’s value.
              </p>
              <p className="text-lg leading-relaxed text-justify md:text-left">
                With years of proven experience, our passionate team of PPC
                professionals helps businesses stay ahead of the competition. At
                BigWig Digital, we believe true success comes from smart
                strategies that drive real impact—not just hard work. That’s why
                we encourage our clients to focus on their core business while
                we accelerate their online growth with tailored PPC campaigns in
                India.
              </p>
            </div>

            {/* Right Image */}
            <div>
              <Image
                src={ppc}
                alt="Top PPC Company"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)] text-center">
              Why Choose BigWig Media Digital – The Best PPC Company in India
              for Your Business?
            </h3>

            {/* Mobile Slider */}
            <div className="block lg:hidden">
              <Slider {...featureSettings}>
                {features.map((item, i) => (
                  <div key={i}>
                    <div className="bg-white  border-l-4 border-[var(--primary-color)] p-6 rounded-xl shadow">
                      <h4 className="text-lg font-semibold mb-2 text-[var(--primary-color)]">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-700 ">{item.text}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Desktop Grid */}
            <div className="hidden lg:grid grid-cols-3 gap-6">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="bg-white  border-l-4 border-[var(--primary-color)] p-6 rounded-xl shadow"
                >
                  <h4 className="text-lg font-semibold mb-2 text-[var(--primary-color)]">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-700 ">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Team */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[var(--primary-color)]">
                Dedicated PPC Experts for Your Business Growth
              </h3>
              <p className="text-lg leading-relaxed">
                At BigWig Media Digital, we have a team of highly skilled PPC
                consultants who specialize in running performance-driven
                campaigns. From keyword research, ad copywriting, audience
                targeting, and landing page optimization to conversion tracking,
                every aspect of your campaign is handled with precision and
                expertise.
              </p>
              <p className="text-lg leading-relaxed">
                Many businesses approach us after facing challenges with other
                agencies - seeking better leads, improved ROI, and lower ad
                spend. With our data-driven PPC strategies, we’ve helped them
                achieve measurable growth, and most of them continue to stay
                with us for the long term
              </p>
              <p className="text-lg leading-relaxed">
                Our PPC experts manage campaigns across Google Ads, Facebook
                Ads, Bing Ads, and other platforms, ensuring maximum visibility
                for your brand. Every campaign is carefully planned and
                customized to align with your unique business objectives. Get in
                touch today to explore a PPC package designed exclusively for
                your business success.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center text-black ">
              {[
                { icon: <FaSearchDollar />, label: "Search Advertising" },
                {
                  icon: <FaPhotoVideo />,
                  label: "Display & Video Advertising",
                },
                { icon: <FaFacebookF />, label: "Social Media Advertising" },
                { icon: <FaRetweet />, label: "Remarketing" },
                { icon: <FaMobileAlt />, label: "Mobile Advertising" },
                { icon: <FaShoppingCart />, label: "Shopping Advertising" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 p-6 border border-gray-200  shadow-md rounded-xl bg-white "
                >
                  <div className="text-[var(--primary-color)] text-3xl">
                    {item.icon}
                  </div>
                  <span className="text-lg font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray py-12">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[var(--primary-color)]">
            Benefits of PPC Services in India for Your Business
          </h2>
          {/* Mobile View: Slider */}
          <div className="block lg:hidden">
            <Slider {...sliderSettings}>
              {ppcBenefits.map((benefit, index) => (
                <div key={index}>
                  <div className="bg-white h-[300px] rounded-2xl gap-5 shadow-lg border-l-4 border-[var(--primary-color)] p-6 flex flex-col">
                    <h3 className="text-lg font-semibold mb-2 text-[var(--primary-color)]">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700  text-sm leading-relaxed">
                      {benefit.content}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          {/* Desktop View: Grid */}
          <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ppcBenefits.map((benefit, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl shadow-lg border-l-4 border-[var(--primary-color)] p-6 pl-6"
              >
                <h3 className="text-lg font-semibold mb-2 text-[var(--primary-color)]">
                  {benefit.title}
                </h3>
                <p className="text-gray-700  text-sm leading-relaxed">
                  {benefit.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-white text-black">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-10">
          <h2 className="text-3xl font-bold text-center text-[var(--primary-color)]">
            How is PPC Service Helpful for New Business?
          </h2>

          <div className="space-y-6 leading-relaxed text-lg ">
            <p>
              Following PPC promotion, a business can receive immediate results
              in a matter of seconds. Compared to SEO or SMO services, PPC
              services drive traffic to a website considerably more quickly.
              Either way, it&#39;s an inorganic or paid service. Each time the
              advertisement is clicked, we must pay. Clicks, appearances, lead
              generation, app installs, and many more actions can be considered
              activities.
            </p>

            <p>
              The PPC sector is quite competitive. Managing many specialized
              components is part of PPC. These focus elements can be obtained by
              downgrading a dedicated PPC company for PPC management and
              organization work promotion.
            </p>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="bg-gray-50 py-12">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-10">
          <h2 className="text-3xl md:text-3xl font-bold text-[var(--primary-color)] text-center">
            Frequently Asked Questions (FAQs) – Social Media Marketing Agency in
            India
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
                  <span>{item.q}</span>
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
      <OurProcess />

      <WhyBigwig />

      <Footer />
    </div>
  );
}

export default PerformanceMarketing;

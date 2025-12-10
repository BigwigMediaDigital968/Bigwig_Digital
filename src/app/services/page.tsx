"use client";
import { useRef, useState } from "react";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import seo from "../../../Assets/services/SEO.png";
import affiliate from "../../../Assets/services/Affiliate Marketing.png";
import ai from "../../../Assets/services/AI and CGI.png";
import content from "../../../Assets/services/Content Marketing.png";
import email from "../../../Assets/services/Email Marketing.png";
import graphic from "../../../Assets/services/Graphic Desining.png";
import influencer from "../../../Assets/services/Influencer Marketing.png";
import landing from "../../../Assets/services/Landing Page Optimization.png";
import orm from "../../../Assets/services/ORM.png";
import performance from "../../../Assets/services/Performance Marketing.png";
import publicRelation from "../../../Assets/services/Public Relations.png";
import smm from "../../../Assets/services/SMM.png";
import smo from "../../../Assets/services/SMO.png";
import video from "../../../Assets/services/Video Shoots.png";
import website from "../../../Assets/services/Website Development.png";
import Image from "next/image";

const services = [
  {
    title: "Search Engine Optimization",
    heading: "Be visible when it matters most!",
    content:
      "We rank your website on Google so your customers find you before your competitors.",
    path: "/services/search-engine-optimization",
    image: seo,
  },
  {
    title: "Social Media Marketing",
    heading: "Turn your followers into loyal customers",
    content:
      "We run targeted campaigns, boost engagement, and build a strong brand presence across all social platforms.",
    path: "/services/social-media-marketing",
    image: smm,
  },
  {
    title: "Performance Marketing",
    heading: "Pay for results, not just clicks!",
    content:
      "Target the right audience with laser-focused Google & Meta ads that convert.",
    path: "/services/performance-marketing",
    image: performance,
  },
  {
    title: "Content Marketing",
    heading: "Words that work for your brand!",
    content:
      "From blogs to visuals, we create content that educates, engages, and builds trust.",
    path: "/services/content-marketing",
    image: content,
  },
  {
    title: "Website Designing & Development",
    heading: "Your digital store front, built to impress!",
    content:
      "We craft stunning, responsive websites that turn visitors into customers.",
    path: "/services/website-design-development",
    image: website,
  },
  {
    title: "Email Marketing",
    heading: "Stay in their inbox and on their mind!",
    content:
      "We create powerful campaigns that nurture leads and boost conversions.",
    path: "/services/email-marketing",
    image: email,
  },
  {
    title: "Social Media Optimization",
    heading: "Be everywhere your audience is!",
    content:
      "We optimize your profiles for visibility, engagement, and brand authority across platforms.",
    path: "/services/social-media-optimization",
    image: smo,
  },
  {
    title: "Graphic Designing & Video Editing",
    heading: "Designs that speak louder than words!",
    content:
      "We create eye-catching visuals that reflect your brand and grab attention instantly.",
    path: "/services/graphic-designing",
    image: graphic,
  },
  // {
  //   title: "AI and CGI Marketing",
  //   heading: "Modern visuals for modern audiences!",
  //   content:
  //     "We blend creativity with AI & CGI to craft futuristic ads that stand out and drive action.",
  //   path: "/services/ai-cgi-marketing",
  //   image: ai,
  // },
  // {
  //   title: "Landing Page Optimization",
  //   heading: "Don’t just land, convert!",
  //   content:
  //     "We turn ordinary landing pages into high-performing sales machines.",
  //   path: "/services/landing-page-optimization",
  //   image: landing,
  // },
  {
    title: "Affiliate Marketing",
    heading: "Let others sell for you, smartly!",
    content:
      "Grow your brand with trusted affiliates promoting your product for results-based returns.",
    path: "/services/affiliate-marketing",
    image: affiliate,
  },
  // {
  //   title: "Video Shoot",
  //   heading: "Lights. Camera. Convert.",
  //   content:
  //     "We produce high-quality videos that capture your story and connect with your audience.",
  //   path: "/services/video-shoot",
  //   image: video,
  // },
  // {
  //   title: "Public Relations",
  //   heading: "We put your brand in the right spotlight.",
  //   content:
  //     "Build trust and credibility with strategic media coverage and powerful brand stories.",
  //   path: "/services/public-relations",
  //   image: publicRelation,
  // },
  {
    title: "Influencer Marketing",
    heading: "Real people. Real influence. Real results.",
    content:
      "We connect your brand with the right influencers to boost reach and trust authentically.",
    path: "/services/influencer-marketing",
    image: influencer,
  },
  {
    title: "Online Reputation Management",
    heading: "Your online image matters,protect it!",
    content:
      "We monitor, manage, and improve your digital reputation across platforms.",
    path: "/services/online-reputation-management",
    image: orm,
  },
];

function Services() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToService = (index: number) => {
    const target = serviceRefs.current[index];
    if (target) {
      const offset = 180; // Adjust as needed
      const topPos =
        target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: topPos, behavior: "smooth" });
    }
    setSelectedIndex(index);
  };

  return (
    <div className="min-h-screen bg-white text-black font-raleway">
      <Nav />
      <title>Full Digital Marketing Services</title>
      <meta
        name="description"
        content="Explore our full suite of digital marketing services customized for businesses of all sizes."
      />
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services"
      />

      {/* Mobile View */}
      <div className="md:hidden px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          <span className="text-black">Our </span>
          <span className="text-[var(--primary-color)]">Services</span>
        </h2>

        <select
          className="w-full p-3 mb-4 bg-gray-200 border border-gray-600 rounded text-black"
          value={selectedIndex}
          onChange={(e) => setSelectedIndex(Number(e.target.value))}
        >
          {services.map((service, index) => (
            <option key={index} value={index}>
              {service.title}
            </option>
          ))}
        </select>

        <div className="bg-gray-100 p-5 rounded-lg">
          <h3 className="text-xl font-bold text-[var(--primary-color)] mb-2">
            {services[selectedIndex].heading}
          </h3>
          <p className="text-gray-800 mb-4">
            {services[selectedIndex].content}
          </p>
          <a href={services[selectedIndex].path}>
            <button className="bg-[var(--primary-color)] text-white font-semibold px-4 py-2 rounded cursor-pointer">
              Explore
            </button>
          </a>
        </div>
      </div>

      <div className="relative hidden md:flex px-10 py-10 gap-10">
        {/* Fixed-width vertical title */}
        <div className="w-[60px] flex justify-center">
          <div className="sticky top-1/2 -translate-y-1/2 h-fit z-20">
            <h2 className="writing-vertical2 rotate-180 text-[40px] font-bold leading-tight whitespace-nowrap text-center">
              <span className="text-black">Our</span>{" "}
              <span className="text-[var(--primary-color)]">Services</span>
            </h2>
          </div>
        </div>

        {/* Scrollable list of service titles */}
        <div className="w-1/4">
          <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-hidden hover:overflow-y-auto border-r border-gray-700 pr-6">
            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  onClick={() => scrollToService(index)}
                  className={`cursor-pointer hover:text-[var(--primary-color)] transition ${
                    selectedIndex === index
                      ? "text-[var(--primary-color)] font-semibold"
                      : ""
                  }`}
                >
                  {service.title}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right section with content */}
        <div className="w-3/4 space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                serviceRefs.current[index] = el;
              }}
              className="bg-gray-100 p-8 rounded-xl shadow-md transition-all duration-300 scroll-mt-28"
            >
              <div className="flex justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[var(--primary-color)] mb-2">
                    {service.title}
                  </h3>
                  <h4 className="text-xl font-semibold mb-2">
                    {service.heading}
                  </h4>
                  <p className="text-gray-800 mb-4">{service.content}</p>
                  <a href={service.path}>
                    <button className="bg-[var(--primary-color)] text-white font-semibold px-4 py-2 rounded cursor-pointer">
                      Explore
                    </button>
                  </a>
                </div>
                <div>
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="w-36"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Services;

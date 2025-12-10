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
import ButtonFill from "../../../components/Button";
import GetInTouch from "../../../components/GetInTouch";

const services = [
  {
    title: "Website Designing & Development",
    heading: "Your digital store front, built to impress!",
    content:
      "We craft stunning, responsive websites that turn visitors into customers.",
    path: "/services/website-design-development",
    image: website,
  },
  {
    title: "Search Engine Optimization",
    heading: "Be visible when it matters most!",
    content:
      "We rank your website on Google so your customers find you before your competitors.",
    path: "/services/search-engine-optimization",
    image: seo,
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
    title: "Online Reputation Management",
    heading: "Your online image matters,protect it!",
    content:
      "We monitor, manage, and improve your digital reputation across platforms.",
    path: "/services/online-reputation-management",
    image: orm,
  },
  {
    title: "Graphic Designing & Video Editing",
    heading: "Designs that speak louder than words!",
    content:
      "We create eye-catching visuals that reflect your brand and grab attention instantly.",
    path: "/services/graphic-designing",
    image: graphic,
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
    title: "Affiliate Marketing",
    heading: "Let others sell for you, smartly!",
    content:
      "Grow your brand with trusted affiliates promoting your product for results-based returns.",
    path: "/services/affiliate-marketing",
    image: affiliate,
  },
  {
    title: "Influencer Marketing",
    heading: "Real people. Real influence. Real results.",
    content:
      "We connect your brand with the right influencers to boost reach and trust authentically.",
    path: "/services/influencer-marketing",
    image: influencer,
  },
  {
    title: "Content Marketing",
    heading: "Words that work for your brand!",
    content:
      "From blogs to visuals, we create content that educates, engages, and builds trust.",
    path: "/services/content-marketing",
    image: content,
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
    <div className="min-h-screen bg-[var(--color1)] text-white">
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

      {/* NEW GRID DESIGN */}
      <div className=" py-12 w-11/12 md:w-5/6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          <span className="text-[var(--color5)]">Our Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl bg-transparent transition-all duration-300"
            >
              {/* LAPTOP CARD */}
              <div className="rounded-xl p-3 shadow-2xl">
                {/* SCREEN */}
                <div className="relative group h-60 rounded-lg border-8 border-gray-400 overflow-hidden bg-gradient-to-bl from-[var(--color2)] via-[var(--color1)] to-[var(--color2)]">
                  {/* BG IMAGE */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain brightness-70 group-hover:brightness-85 transition duration-500"
                  />

                  {/* OVERLAY CONTENT */}
                  <a
                    href={service.path}
                    className="absolute inset-0 flex flex-col  justify-between p-5 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
                  >
                    <h3 className="text-lg font-semibold text-white ">
                      {service.title}
                    </h3>

                    <p className="text-gray-300 text-sm mt-1  ">
                      {service.content}
                    </p>

                    {/* BUTTON ON HOVER */}
                    <ButtonFill
                      className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
transition-all duration-500 "
                      text="Explore"
                    />
                  </a>
                </div>

                {/* BASE */}
                <div className="h-3 bg-gradient-to-b from-gray-300 to-gray-500 rounded-b-xl mt-1"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default Services;

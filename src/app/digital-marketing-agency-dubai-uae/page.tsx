"use client";
import ContactForm from "../../../components/ContactForm";
import Footer from "../../../components/Footer";
import Nav from "../../../components/Nav";
import bannerImage from "../../../Assets/dubai.jpg";
import transfrom from "../../../Assets/Dubai/transformBuisness.jpg";
// import {
//   Search,
//   Share2,
//   BarChart3,
//   FileText,
//   Layout,
//   Mail,
//   Instagram,
//   Image,
//   Brain,
//   MousePointerClick,
//   Users,
//   Video,
//   Megaphone,
//   UserCheck,
//   ShieldCheck,
// } from "lucide-react";
import OurProcess from "../../../components/OurProcess";
import WhyBigwig from "../../../components/WhyBigwig";
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
import CTABanner from "../../../components/CTABanner";
import Image from "next/image";

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    subtitle: "Boost Your Rankings with Expert SEO Services in Dubai, UAE",
    desc: "Secure top positions on search engines with proven strategies tailored for the UAE market.",
    icon: seo,
    link: "/digital-marketing-agency-dubai-uae/seo-services-in-dubai-uae",
  },
  {
    title: "Social Media Marketing (SMM)",
    subtitle:
      "Social Media Marketing Agency in Dubai, UAE That Drives Engagement",
    desc: "Build brand awareness and drive conversions across Instagram, Facebook, LinkedIn, and TikTok.",
    icon: smm,
    link: "/digital-marketing-agency-dubai-uae/social-media-marketing-services-in-dubai-uae",
  },
  {
    title: "Performance Marketing",
    subtitle: "Data-Driven Performance Marketing in Agency in Dubai, UAE",
    desc: "ROI-focused ads, retargeting, and conversion campaigns that maximize every dirham spent.",
    icon: performance,
    link: "/digital-marketing-agency-dubai-uae/ppc-services-in-dubai-uae",
  },
  {
    title: "Content Marketing",
    subtitle:
      "Content Marketing Agency in Dubai, UAE That Builds Trust and Authority",
    desc: "Connect deeper with your audience through blogs, storytelling, and SEO-friendly content.",
    icon: content,
    link: "/digital-marketing-agency-dubai-uae/content-marketing-services-in-dubai-uae",
  },
  {
    title: "Website Designing & Development",
    subtitle: "Website Design & Development Company in Dubai, UAE",
    desc: "Stunning, mobile-friendly, SEO-ready websites built for conversions and growth.",
    icon: website,
    link: "/digital-marketing-agency-dubai-uae/website-designing-services-in-dubai-uae",
  },
  {
    title: "Email Marketing",
    subtitle: "Targeted Email Marketing Campaigns in Dubai, UAE",
    desc: "Personalized campaigns with newsletters and automation for retention & conversions.",
    icon: email,
    link: "/digital-marketing-agency-dubai-uae/email-marketing-services-in-dubai-uae",
  },
  {
    title: "Social Media Optimization (SMO)",
    subtitle: "Social Media Optimization Services in Dubai, UAE",
    desc: "Enhance profiles, posts, and engagement for a stronger brand presence.",
    icon: smo,
    link: "/digital-marketing-agency-dubai-uae/social-media-optimization-services-in-dubai-uae",
  },
  {
    title: "Graphic Designing & Video Editing",
    subtitle: "Creative Graphic Design & Video Editing Agency in Dubai, UAE",
    desc: "Logos, ad creatives, and visuals that ensure your brand identity stands out.",
    icon: graphic,
    link: "/digital-marketing-agency-dubai-uae/graphic-designing-services-in-dubai-uae",
  },
  // {
  //   title: "AI and CGI Marketing",
  //   subtitle: "AI & CGI Marketing Agency in Dubai, UAE",
  //   desc: "Next-gen marketing with AI personalization and hyper-realistic CGI ads.",
  //   icon: ai,
  //   link: "/digital-marketing-agency-dubai-uae/ai-and-cgi-ads-services-in-dubai-uae",
  // },
  // {
  //   title: "Landing Page Optimization",
  //   subtitle:
  //     "Landing Page Optimization Agency in Dubai, UAE for Higher Conversions",
  //   desc: "Data-backed layouts, messaging, and CTAs that maximize leads & conversions.",
  //   icon: landing,
  //   link: "/digital-marketing-agency-dubai-uae/landing-page-optimization-services-in-dubai",
  // },
  {
    title: "Affiliate Marketing",
    subtitle: "Affiliate Marketing Solutions in Dubai, UAE",
    desc: "Expand reach with affiliates driving sales and traffic through cost-effective strategies.",
    icon: affiliate,
    link: "/digital-marketing-agency-dubai-uae/affiliate-marketing-services-in-dubai-uae",
  },
  // {
  //   title: "Video Shoot & Production",
  //   subtitle: "Professional Video Shoot Services in Dubai, UAE",
  //   desc: "Corporate films, ads, and reels crafted with high-quality storytelling visuals.",
  //   icon: video,
  //   link: "/digital-marketing-agency-dubai-uae/video-shoot-services-in-dubai-uae",
  // },
  // {
  //   title: "Public Relations (PR)",
  //   subtitle: "Public Relations Agency in Dubai for Brand Credibility",
  //   desc: "Press releases, media coverage, and strategies to boost brand reputation.",
  //   icon: publicRelation,
  //   link: "#",
  // },
  {
    title: "Influencer Marketing",
    subtitle: "Influencer Marketing Agency in Dubai, UAE",
    desc: "Authentic collaborations with influencers to drive engagement & trust.",
    icon: influencer,
    link: "/digital-marketing-agency-dubai-uae/influencer-marketing-services-in-dubai-uae",
  },
  {
    title: "Online Reputation Management (ORM)",
    subtitle: "Online Reputation Management Agency in Dubai, UAE",
    desc: "Protect and enhance your brand with reviews, SEO presence & ORM strategies.",
    icon: orm,
    link: "/digital-marketing-agency-dubai-uae/orm-services-in-dubai-uae",
  },
];

function SeoServicesDubai() {
  return (
    <div className="bg-white text-black font-raleway">
      <title>
        Digital Marketing Agency in Dubai, UAE | BigWig Media Digital
      </title>
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/digital-marketing-agency-dubai-uae"
      />
      <meta
        name="description"
        content="BigWig Digital is a leading digital marketing agency in Dubai, UAE. We specialize in SEO,
social media, performance marketing, content, and web design to help brands grow online.
"
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
              Transform Your Business with the Best Digital Marketing Agency in
              Dubai, UAE
            </h1>
            <p className="text-lg text-gray-300">
              We help brands grow with proven digital marketing strategies in
              SEO, social media, and performance marketing.
            </p>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Extra Normal Content Section */}
      <section className="relative  py-12">
        <div className="w-11/12 md:w-5/6 mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <Image
              src={transfrom} // replace with your image
              alt="Digital Marketing Agency in Dubai, UAE"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
            {/* Overlay Accent */}
            <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
          </div>

          {/* Text */}
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Transform Your{" "}
              <span className="text-[var(--primary-color)]">Business</span>
            </h2>
            <p>
              At BigWig Media Digital, we believe every brand has the potential
              to shine in the digital world, and our mission is to make that
              happen. Recognized as one of the{" "}
              <strong>best digital marketing agencies in Dubai, UAE</strong>, we
              deliver campaigns that truly make a difference.
            </p>
            <p>
              From startups to established companies, we design strategies that
              align with your unique goals. Our blend of data-driven insights
              and creative innovation ensures that your brand doesn’t just
              compete , it grows stronger and achieves long-term impact.
            </p>
            <p>
              With offices in UAE and India, BigWig Media Digital combines
              global expertise with local market understanding. Partner with us,
              and experience why businesses trust us as their go-to{" "}
              <strong>digital marketing company in UAE.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="relative bg-white py-12">
        <div className="w-11/12 md:w-5/6 mx-auto items-center">
          {/* Text */}
          <div className="space-y-6 text-lg leading-relaxed order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block">
              Who We Are
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-[var(--primary-color)]"></span>
            </h2>
            <p>
              BigWig Media Digital is a full-service, performance-led digital
              marketing company in Dubai, UAE with roots in India. We’re
              dedicated to helping businesses of all sizes achieve measurable
              growth in the digital world. Our team blends creativity,
              technology, and data-driven approaches to provide end-to-end
              solutions across SEO, social media, content, and performance
              marketing.
            </p>
            <p>
              Whether it’s a startup looking to build its identity or an
              established enterprise aiming to scale further, we empower
              businesses to stay ahead in the competitive digital landscape and
              position themselves as leaders in their industry.
            </p>
          </div>

          {/* Image */}
        </div>
      </section>

      <section className="w-full py-12 font-raleway ">
        {/* Heading */}
        <div className=" w-11/12 md:w-5/6 mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Your Trusted Digital Marketing Partner in Dubai, UAE
          </h2>
          <p className="text-gray-600 text-lg">
            We combine deep market understanding, innovation, and
            performance-driven strategies to ensure your brand achieves
            measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="w-11/12 md:w-5/6 mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-white shadow-md rounded-2xl p-6 border border-gray-100
                 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Icon + Subtitle (Flex) */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--primary-color)]/10 text-[var(--primary-color)]">
                  <Image src={service.icon} alt={service.title} />
                </div>
                <h4 className="text-sm text-[var(--primary-color)] font-medium">
                  {service.subtitle}
                </h4>
              </div>

              {/* Content */}
              <p className="text-gray-600 text-sm flex-grow">{service.desc}</p>

              {/* Hover Read More (Slide Up Animation) */}
              <div className="mt-4 overflow-hidden">
                <a
                  href={service.link}
                  className="block w-full text-center px-5 py-2 rounded-lg text-[var(--primary-color)] font-medium 
                   transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                   transition-all duration-300 ease-out"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full py-16  font-raleway">
        {/* Container */}
        <div className="w-11/12 md:w-5/6 mx-auto mb-14 space-y-6 text-center md:text-left">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Why{" "}
            <span className="text-[var(--primary-color)]">
              BigWig Media Digital
            </span>{" "}
            is a Trusted Digital Marketing Agency in Dubai, UAE
          </h2>

          {/* Paragraphs */}
          <p className="text-gray-700 text-lg leading-relaxed">
            At BigWig Media Digital, we go beyond conventional marketing by
            blending
            <span className="font-medium">
              {" "}
              creativity, data, and technology
            </span>{" "}
            to craft strategies that deliver real results. With a presence in
            both UAE and India, we bring local expertise and a global
            perspective to every campaign.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Our team has successfully partnered with businesses across
            industries, from lifestyle and hospitality to tech and
            e-commerce,helping them boost visibility, engagement, and revenue
            through innovative digital solutions.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            What sets us apart is our{" "}
            <span className="font-medium">performance-led approach</span>: we
            don’t just chase trends, we create meaningful digital experiences
            that shape brands, spark conversations, and drive measurable
            business growth.
          </p>
        </div>
      </section>
      <OurProcess />
      <WhyBigwig />
      <CTABanner
        title="With BigWig Media Digital, your brand won’t just rank higher – it will dominate the Dubai digital market."
        buttonText="Get Started Today"
      />
      <Footer />
    </div>
  );
}

export default SeoServicesDubai;

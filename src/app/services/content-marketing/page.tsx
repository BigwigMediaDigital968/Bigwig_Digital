"use client";
import { TypeAnimation } from "react-type-animation";
import Footer from "../../../../components/Footer";
import Nav from "../../../../components/Nav";
import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
import Hero from "../../../../Assets/Services hero/Content_Marketing.jpg";
import content from "../../../../Assets/services/8.jpg";
import Slider from "react-slick";
import ContactForm from "../../../../components/ContactForm";
import Image from "next/image";
import ButtonFill from "../../../../components/Button";
import { SetStateAction, useState } from "react";
import PopupForm from "../../../../components/PopupForm";
import GetInTouch from "../../../../components/GetInTouch";

const whyChooseUs = [
  {
    title: "SEO-Driven Content That Ranks",
    description:
      "Every content piece is optimized for search intent, keywords, readability, and semantic relevance. We ensure your brand captures the right audience at the right time through strategic SEO-led content creation.",
  },
  {
    title: "End-to-End Content Marketing Execution",
    description:
      "From research to writing, design to distribution — we manage everything. Our content marketing in Delhi services cover blogs, videos, case studies, newsletters, website copy, social content, and more.",
  },
  {
    title: "Experienced Content Strategists & Industry Experts",
    description:
      "Your content ecosystem is managed by writers, editors, SEO specialists, designers, and strategists who understand your market and create content that resonates.",
  },
  {
    title: "Consistent Delivery & Quality Assurance",
    description:
      "We follow strict editorial guidelines, plagiarism checks, and quality reviews to ensure every piece of content is accurate, engaging, and conversion-focused.",
  },
  {
    title: "Customized Strategies for Every Business",
    description:
      "We tailor your content roadmap based on your industry, audience intent, and business goals — whether you’re looking to increase traffic, build thought leadership, or drive leads.",
  },
];

const contentMarketingServices = [
  {
    title: "SEO-Friendly Blogs & Articles",
    description:
      "Informative, keyword-rich blogs that improve rankings, attract organic traffic, and establish domain authority.",
  },
  {
    title: "Website Copywriting & Landing Page Content",
    description:
      "High-converting copy optimized for user experience, messaging clarity, and search intent — crafted by professional writers.",
  },
  {
    title: "Social Media Content Creation",
    description:
      "Platform-specific content, including creatives, scripts, captions, memes, carousels, reels, and storytelling posts.",
  },
  {
    title: "Video Scripts & Storyboards",
    description:
      "Engaging scripts for brand films, explainer videos, testimonials, YouTube videos, short reels, and educational content.",
  },
  {
    title: "Email Newsletter Content",
    description:
      "Conversion-focused newsletters and drip sequences to nurture leads and strengthen brand relationships.",
  },
  {
    title: "Case Studies & Success Stories",
    description:
      "Data-driven narratives that highlight your achievements and build trust with high-intent prospects.",
  },
  {
    title: "E-books & Whitepapers",
    description:
      "In-depth, research-backed resources that build authority and attract qualified leads.",
  },
  {
    title: "Infographics & Visual Content",
    description:
      "High-quality graphics, visual storytelling assets, and educational illustrations that simplify complex information.",
  },
  {
    title: "Content Strategy & Editorial Planning",
    description:
      "Full content roadmap including topics, formats, SEO opportunities, funnel mapping, and publishing schedules.",
  },
  {
    title: "Content Distribution & Amplification",
    description:
      "We promote your content across social media, email, communities, PR, and paid channels to maximize reach and engagement.",
  },
];

const contentMarketingProcess = [
  {
    step: "Research & Competitor Analysis",
    description:
      "We start by studying your audience, competitors, keyword ecosystem, market trends, and search behavior. This becomes the backbone of your strategy.",
  },
  {
    step: "Content Strategy Development",
    description:
      "We define your content goals, messaging pillars, formats, tonality, SEO themes, and publishing calendar.",
  },
  {
    step: "Content Creation",
    description:
      "Our writers and designers create high-quality content tailored to each stage of your funnel — Awareness, Consideration, and Conversion.",
  },
  {
    step: "Optimization & Editing",
    description:
      "Each piece undergoes SEO optimization, readability enhancements, grammar checks, and quality review.",
  },
  {
    step: "Publishing & Distribution",
    description:
      "We publish your content across your website, social media, email, PR, and other channels for maximum exposure.",
  },
  {
    step: "Performance Tracking & Reporting",
    description:
      "We track rankings, traffic, engagement, lead flow, and conversions — then refine the strategy to improve ROI.",
  },
];

const faqs = [
  {
    q: "What is content marketing, and how does it help businesses?",
    a: "Content marketing is the strategic creation and distribution of valuable content to attract, educate, and convert customers. Working with a content marketing agency in Delhi helps you build authority, grow organic traffic, and generate qualified leads.",
  },
  {
    q: "How long does content marketing take to show results?",
    a: "You’ll see engagement improvements in 30–45 days. SEO, traffic growth, and consistent lead generation typically take 3–6 months.",
  },
  {
    q: "Do you provide SEO along with content marketing services?",
    a: "Yes. As a full-service content marketing company in Delhi, we include keyword research, on-page SEO, and content optimization in all strategies.",
  },
  {
    q: "Can you create content for any industry?",
    a: "Absolutely. We work across healthcare, real estate, finance, SaaS, e-commerce, education, and more.",
  },
  {
    q: "Do you offer content for social media and video platforms?",
    a: "Yes — reels, scripts, shorts, animations, carousels, captions, and more.",
  },
];

function ContentMarketing() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: SetStateAction<number | null>) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const settings = {
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
    <div className="bg-[var(--color1)]">
      <title>Creative Content Marketing Agency</title>
      <meta
        name="description"
        content="Grow organically with impactful content marketing strategies that attract, engage, and convert."
      />
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/content-marketing"
      />

      <Nav />
      <section
        className="relative bg-cover bg-center bg-no-repeat py-10 px-4"
        style={{ backgroundImage: `url(${Hero.src})` }}
      >
        <div className="bg-black/40 absolute inset-0 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-[var(--color5)] leading-snug">
              Content Marketing Services in Delhi
            </h1>

            <p className=" max-w-xl text-white/90 text-justify">
              Content is no longer optional - it’s the backbone of brand
              authority, customer engagement, and sustainable digital growth. As
              a leading content marketing agency in Delhi, we help brands create
              powerful stories, high-performing content assets, and data-driven
              strategies that educate, engage, and convert.
            </p>
            <p className=" max-w-xl text-white/90 text-justify">
              Whether you’re looking to build awareness, outrank competitors,
              improve SEO visibility, or nurture leads, our content marketing
              services in Delhi are designed to elevate your brand and deliver
              measurable results.
            </p>
            <ButtonFill
              onClick={() => setIsPopupOpen(true)}
              text="Get Started Today"
            />
          </div>

          {/* Right Form */}
          <ContactForm singleService="Content Marketing"/>
        </div>
      </section>
      <section className=" py-10">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)]">
                Leading Content Marketing Company in Delhi for High-Impact
                Growth
              </h2>
              <p className=" text-white text-justify ">
                Delhi’s digital landscape is competitive - thousands of brands
                are fighting for attention every day. To stand out, you need
                more than just blogs and social media posts; you need strategy,
                storytelling, and consistent content execution.
              </p>
              <p className=" text-white text-justify ">
                As a full-stack content marketing company in Delhi, we combine
                research, creativity, SEO, and distribution to create content
                that drives organic traffic, enhances credibility, and supports
                every stage of your customer journey.
              </p>
              <p className=" text-white text-justify">
                Our approach ensures your brand becomes discoverable, memorable,
                and trusted.
              </p>
            </div>

            {/* Right Image */}
            <div>
              <Image
                src={content}
                alt="Content Marketing Services in all over the world"
                className="w-full h-[70vh] rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 w-11/12 md:w-5/6 mx-auto relative overflow-hidden">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-4">
            How Our Influencer Marketing in Delhi Works
          </h2>
        </div>

        {/* ================== CONTENT WRAPPER ================== */}
        <div className="relative mb-12 z-10">
          {/* MOBILE SLIDER */}
          <div className="block lg:hidden">
            <Slider {...settings}>
              {whyChooseUs.map((item, index) => (
                <div key={index} className="px-2">
                  <div
                    className="
              relative flex flex-col p-6 rounded-2xl
              backdrop-blur-xl bg-white/5 border border-white/10
              shadow-[0_0_25px_rgba(0,255,255,0.1)]
              hover:shadow-[0_0_40px_var(--color5)]
              space-y-5 overflow-hidden group
              transition-all duration-500 hover:-translate-y-2
            "
                  >
                    {/* Shine Overlay */}
                    <div
                      className="
                absolute inset-0 bg-gradient-to-br 
                from-transparent via-white/5 to-transparent
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
              "
                    />

                    {/* Shine Line */}
                    <div
                      className="
                absolute -top-full left-0 w-full h-full
                bg-gradient-to-r from-transparent via-[var(--color5)]/20 to-transparent
                rotate-45 group-hover:animate-shineLine
              "
                    />

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-[var(--color5)] tracking-wide relative z-10">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-200 text-sm md:text-base leading-relaxed relative z-10 text-justify">
                      {item.description}
                    </p>

                    {/* Border Glow */}
                    <div
                      className="
                absolute inset-0 rounded-2xl border border-transparent
                group-hover:border-[var(--color5)] transition-all duration-500
              "
                    ></div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* DESKTOP GRID */}
          <div
            className="
      hidden lg:grid 
      grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
      gap-10 auto-rows-fr
    "
          >
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="
          group relative overflow-hidden rounded-2xl 
          transition-transform duration-500 hover:-translate-y-3 h-full
        "
              >
                <div
                  className="
            relative z-10 p-6 rounded-2xl backdrop-blur-xl bg-white/5
            border border-white/10 shadow-[0_0_25px_rgba(0,255,255,0.15)]
            hover:shadow-[0_0_45px_var(--color5)]
            flex flex-col h-full space-y-5 transition-all duration-500
          "
                >
                  {/* Shine Line */}
                  <div
                    className="
              absolute -top-full left-0 w-full h-full
              bg-gradient-to-r from-transparent via-[var(--color5)]/25 to-transparent
              rotate-45 group-hover:animate-shineLine
            "
                  />

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[var(--color5)] tracking-wide relative z-10">
                    {item.title}
                  </h3>

                  {/* Content */}
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed text-justify relative z-10">
                    {item.description}
                  </p>

                  {/* Glow Border */}
                  <div
                    className="
              absolute inset-0 rounded-2xl border border-transparent 
              group-hover:border-[var(--color5)] transition-all duration-500
            "
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* ANIMATIONS */}
          <style>{`
      @keyframes shineLine {
        0% { transform: translateY(-150%); }
        100% { transform: translateY(150%); }
      }
      .animate-shineLine {
        animation: shineLine 1.5s ease-in-out forwards;
      }
    `}</style>
        </div>

        {/* CTA BUTTON */}
        <div className="flex justify-center">
          <ButtonFill
            text="Get Started Today"
            onClick={() => setIsPopupOpen(true)}
          />
        </div>
      </section>
      <section className="py-12 w-11/12 md:w-5/6 mx-auto relative overflow-hidden">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-4">
            Our Complete Content Marketing Services in Delhi
          </h2>
          <p className=" text-gray-200">
            We offer end-to-end services to help brands build a strong content
            foundation and scale organically
          </p>
        </div>

        {/* ================== CONTENT WRAPPER ================== */}
        <div className="relative mb-12 z-10">
          {/* MOBILE SLIDER */}
          <div className="block lg:hidden">
            <Slider {...settings}>
              {contentMarketingServices.map((item, index) => (
                <div key={index} className="px-2">
                  <div
                    className="
              relative flex flex-col p-6 rounded-2xl
              backdrop-blur-xl bg-white/5 border border-white/10
              shadow-[0_0_25px_rgba(0,255,255,0.1)]
              hover:shadow-[0_0_40px_var(--color5)]
              space-y-5 overflow-hidden group
              transition-all duration-500 hover:-translate-y-2
            "
                  >
                    {/* Shine Overlay */}
                    <div
                      className="
                absolute inset-0 bg-gradient-to-br 
                from-transparent via-white/5 to-transparent
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
              "
                    />

                    {/* Shine Line */}
                    <div
                      className="
                absolute -top-full left-0 w-full h-full
                bg-gradient-to-r from-transparent via-[var(--color5)]/20 to-transparent
                rotate-45 group-hover:animate-shineLine
              "
                    />

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-[var(--color5)] tracking-wide relative z-10">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-200 text-sm md:text-base leading-relaxed relative z-10 text-justify">
                      {item.description}
                    </p>

                    {/* Border Glow */}
                    <div
                      className="
                absolute inset-0 rounded-2xl border border-transparent
                group-hover:border-[var(--color5)] transition-all duration-500
              "
                    ></div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* DESKTOP GRID */}
          <div
            className="
      hidden lg:grid 
      grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
      gap-10 auto-rows-fr
    "
          >
            {contentMarketingServices.map((item, index) => (
              <div
                key={index}
                className="
          group relative overflow-hidden rounded-2xl 
          transition-transform duration-500 hover:-translate-y-3 h-full
        "
              >
                <div
                  className="
            relative z-10 p-6 rounded-2xl backdrop-blur-xl bg-white/5
            border border-white/10 shadow-[0_0_25px_rgba(0,255,255,0.15)]
            hover:shadow-[0_0_45px_var(--color5)]
            flex flex-col h-full space-y-5 transition-all duration-500
          "
                >
                  {/* Shine Line */}
                  <div
                    className="
              absolute -top-full left-0 w-full h-full
              bg-gradient-to-r from-transparent via-[var(--color5)]/25 to-transparent
              rotate-45 group-hover:animate-shineLine
            "
                  />

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[var(--color5)] tracking-wide relative z-10">
                    {item.title}
                  </h3>

                  {/* Content */}
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed text-justify relative z-10">
                    {item.description}
                  </p>

                  {/* Glow Border */}
                  <div
                    className="
              absolute inset-0 rounded-2xl border border-transparent 
              group-hover:border-[var(--color5)] transition-all duration-500
            "
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* ANIMATIONS */}
          <style>{`
      @keyframes shineLine {
        0% { transform: translateY(-150%); }
        100% { transform: translateY(150%); }
      }
      .animate-shineLine {
        animation: shineLine 1.5s ease-in-out forwards;
      }
    `}</style>
        </div>
      </section>

      <section className="py-12 w-11/12 md:w-5/6 mx-auto relative overflow-hidden">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-4">
            Our Process for Strategic Content Marketing in Delhi
          </h2>
        </div>

        {/* ================== CONTENT WRAPPER ================== */}
        <div className="relative mb-12 z-10">
          {/* MOBILE SLIDER */}
          <div className="block lg:hidden">
            <Slider {...settings}>
              {contentMarketingProcess.map((item, index) => (
                <div key={index} className="px-2">
                  <div
                    className="
              relative flex flex-col p-6 rounded-2xl
              backdrop-blur-xl bg-white/5 border border-white/10
              shadow-[0_0_25px_rgba(0,255,255,0.1)]
              hover:shadow-[0_0_40px_var(--color5)]
              space-y-5 overflow-hidden group
              transition-all duration-500 hover:-translate-y-2
            "
                  >
                    {/* Shine Overlay */}
                    <div
                      className="
                absolute inset-0 bg-gradient-to-br 
                from-transparent via-white/5 to-transparent
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
              "
                    />

                    {/* Shine Line */}
                    <div
                      className="
                absolute -top-full left-0 w-full h-full
                bg-gradient-to-r from-transparent via-[var(--color5)]/20 to-transparent
                rotate-45 group-hover:animate-shineLine
              "
                    />

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-[var(--color5)] tracking-wide relative z-10">
                      {item.step}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-200 text-sm md:text-base leading-relaxed relative z-10 text-justify">
                      {item.description}
                    </p>

                    {/* Border Glow */}
                    <div
                      className="
                absolute inset-0 rounded-2xl border border-transparent
                group-hover:border-[var(--color5)] transition-all duration-500
              "
                    ></div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* DESKTOP GRID */}
          <div
            className="
      hidden lg:grid 
      grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
      gap-10 auto-rows-fr
    "
          >
            {contentMarketingProcess.map((item, index) => (
              <div
                key={index}
                className="
          group relative overflow-hidden rounded-2xl 
          transition-transform duration-500 hover:-translate-y-3 h-full
        "
              >
                <div
                  className="
            relative z-10 p-6 rounded-2xl backdrop-blur-xl bg-white/5
            border border-white/10 shadow-[0_0_25px_rgba(0,255,255,0.15)]
            hover:shadow-[0_0_45px_var(--color5)]
            flex flex-col h-full space-y-5 transition-all duration-500
          "
                >
                  {/* Shine Line */}
                  <div
                    className="
              absolute -top-full left-0 w-full h-full
              bg-gradient-to-r from-transparent via-[var(--color5)]/25 to-transparent
              rotate-45 group-hover:animate-shineLine
            "
                  />

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[var(--color5)] tracking-wide relative z-10">
                    {item.step}
                  </h3>

                  {/* Content */}
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed text-justify relative z-10">
                    {item.description}
                  </p>

                  {/* Glow Border */}
                  <div
                    className="
              absolute inset-0 rounded-2xl border border-transparent 
              group-hover:border-[var(--color5)] transition-all duration-500
            "
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* ANIMATIONS */}
          <style>{`
      @keyframes shineLine {
        0% { transform: translateY(-150%); }
        100% { transform: translateY(150%); }
      }
      .animate-shineLine {
        animation: shineLine 1.5s ease-in-out forwards;
      }
    `}</style>
        </div>
      </section>

      <section className="py-12 relative overflow-hidden">
        {/* Outer Container */}
        <div
          className="
      relative rounded-3xl p-8 md:p-12
      backdrop-blur-2xl bg-white/5
      border border-[var(--color5)]/30
      shadow-[0_0_35px_rgba(0,255,255,0.15)]
      hover:shadow-[0_0_25px_var(--color5)]
      transition-all duration-700
      overflow-hidden w-11/12 md:w-5/6 mx-auto
    "
        >
          {/* Shine Line */}
          <div
            className="
        absolute -top-full left-0 w-full h-full 
        bg-gradient-to-r from-transparent via-[var(--color5)]/20 to-transparent 
        rotate-45 opacity-70
        animate-[shineSlide_5s_ease-in-out_infinite]
      "
          ></div>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] tracking-wide mb-6">
            The Power of Content Marketing for Your Business
          </h2>

          {/* Two-Column List */}
          <div
            className="
        grid grid-cols-1 md:grid-cols-2 
        gap-y-6 gap-x-10 
        relative z-10
      "
          >
            {[
              {
                heading: "Build Long-Term Authority",
                text: "Consistent content builds trust, credibility, and industry leadership.",
              },
              {
                heading: "Generate High-Quality Leads",
                text: "Content marketing attracts customers who are actively searching for solutions in your niche.",
              },
              {
                heading: "Improve Search Engine Rankings",
                text: "Google rewards brands that publish valuable, fresh, and optimized content regularly.",
              },
              {
                heading: "Increase Website Traffic & Engagement",
                text: "Strategic content helps you reach a broader audience and keep them engaged longer.",
              },
              {
                heading: "Boost Conversions With Educative Content",
                text: "Case studies, guides, landing pages, and webinars help customers make confident buying decisions.",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold text-[var(--color5)]">
                  {item.heading}
                </h3>
                <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 relative z-10">
            <ButtonFill
              onClick={() => setIsPopupOpen(true)}
              text="Get Started Today"
            />
          </div>
        </div>

        {/* Shine Animation */}
        <style>
          {`
      @keyframes shineSlide {
        0% { transform: translateY(-150%); }
        100% { transform: translateY(150%); }
      }
    `}
        </style>
      </section>

      <section className="py-12 relative overflow-hidden">
        <div
          className="
      relative rounded-3xl p-8 md:p-12
      backdrop-blur-2xl bg-white/5
      border border-[var(--color5)]/30
      shadow-[0_0_35px_rgba(0,255,255,0.15)]
      hover:shadow-[0_0_25px_var(--color5)]
      transition-all duration-700
      overflow-hidden w-11/12 md:w-5/6 mx-auto
    "
        >
          {/* Shine Line */}
          <div
            className="
        absolute -top-full left-0 w-full h-full 
        bg-gradient-to-r from-transparent via-[var(--color5)]/20 to-transparent 
        rotate-45 opacity-70
        animate-[shineSlide_5s_ease-in-out_infinite]
      "
          ></div>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] tracking-wide mb-6">
            Industries We Serve
          </h2>

          {/* Two-Column List */}
          <div
            className="
        grid grid-cols-1 md:grid-cols-2 
        gap-y-6 gap-x-10 
        relative z-10
      "
          >
            {[
              {
                heading: "Healthcare Content Marketing",
                text: "Accurate, trustworthy healthcare content that makes you a credible authority.",
              },
              {
                heading: "E-Commerce Content Marketing",
                text: "Product descriptions, SEO pages, buying guides, and sales-driven content.",
              },
              {
                heading: "EdTech Content Marketing",
                text: "Educational blogs, course content, curriculum storytelling, and SEO-led funnels.",
              },
              {
                heading: "Real Estate Content Marketing",
                text: "Hyperlocal SEO content, brochures, property descriptions, and project storytelling.",
              },
              {
                heading: "Finance & Banking Content Marketing",
                text: "Compliance-friendly and research-backed content for financial institutions.",
              },
              {
                heading: "Technology & SaaS Content Marketing",
                text: "Technical blogs, product pages, feature explanations, and automation guides.",
              },
              {
                heading: "Automotive Content Marketing",
                text: "Content that educates buyers about vehicles, technology, and brand differentiation.",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col gap-1">
                {/* Heading With Bullet */}
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full border-2 border-[var(--color5)] mt-2"></span>
                  <h3 className="text-xl font-semibold text-[var(--color5)]">
                    {item.heading}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-200 text-base md:text-lg leading-relaxed ml-6">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 relative z-10">
            <ButtonFill
              onClick={() => setIsPopupOpen(true)}
              text="Get Started Today"
            />
          </div>
        </div>

        {/* Shine Animation */}
        <style>
          {`
      @keyframes shineSlide {
        0% { transform: translateY(-150%); }
        100% { transform: translateY(150%); }
      }
    `}
        </style>
      </section>

      <section className="py-12 relative overflow-hidden">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-xl md:text-3xl font-semibold text-[var(--color5)] tracking-wide">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Boxes */}
        <div className="space-y-6 w-11/12 md:w-5/6 mx-auto relative z-10">
          {faqs.map((item, index) => (
            <div
              key={index}
              onClick={() => toggleItem(index)}
              className="
              p-6 rounded-2xl backdrop-blur-xl bg-white/5 
              border border-white/10 transition-all duration-300
              shadow-[0_0_20px_rgba(0,255,255,0.1)]
              hover:border-[var(--color5)]
              hover:shadow-[0_0_30px_var(--color5)]
              cursor-pointer relative overflow-hidden
            "
            >
              {/* Scan Lines */}
              <div className="absolute inset-0 opacity-30 pointer-events-none">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-0 w-full h-[2px]
                    bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
                  "
                  ></div>
                ))}
              </div>

              {/* Question Row */}
              <div className="flex justify-between items-center relative z-10">
                <h3 className="text-lg md:text-xl font-semibold text-[var(--color5)]">
                  {item.q}
                </h3>

                <span className="text-[var(--color5)] text-2xl font-bold transition-all">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              {/* Answer */}
              <div
                className={`transition-all duration-300 text-gray-200 overflow-hidden relative z-10 ${
                  openIndex === index
                    ? "max-h-96 mt-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Animation */}
        <style>
          {`
          @keyframes cardScan {
            0% { transform: translateX(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateX(100%); opacity: 0; }
          }
          .animate-cardScan {
            animation: cardScan 5s linear infinite;
          }
        `}
        </style>
      </section>
      {/* <OurProcess />
      <WhyBigwig /> */}

      <section className="py-12 relative overflow-hidden">
        {/* Matrix glow background */}
        <div className="absolute inset-0 opacity-[0.20] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen pointer-events-none"></div>

        <div className="w-11/12 md:w-5/6 mx-auto space-y-14 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color5)] text-center tracking-wider">
            Our Other Services
          </h2>

          {/* TABLE WRAPPER */}
          <div
            className="
        rounded-2xl 
        overflow-hidden 
        backdrop-blur-xl bg-white/5 
        border border-white/10 
        shadow-[0_0_30px_rgba(0,255,255,0.15)] 
        relative
      "
          >
            {/* Scan Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent animate-scan"></div>

            <table className="min-w-full text-sm text-gray-200 relative z-10">
              <tbody>
                {[
                  [
                    "Search Engine Optimization",
                    "Social Media Marketing",
                    "Performance Marketing",
                  ],
                  [
                    "Content Marketing",
                    "Website Designing & Development",
                    "Email Marketing",
                  ],
                  [
                    "Social Media Optimization",
                    "Graphic Designing & Video Editing",
                    "Influencer Marketing",
                  ],
                  ["Online Reputation Management", "", "Affiliate Marketing"],
                ].map((row, rowIndex) => (
                  <tr key={rowIndex} className="divide-x divide-white/10">
                    {row.map((cell, colIndex) => (
                      <td
                        key={colIndex}
                        className="
                    h-20 
                    border-b border-white/10 
                    relative group overflow-hidden
                  "
                      >
                        {cell && (
                          <a
                            href={`/services/${cell
                              .toLowerCase()
                              .replace(/ /g, "-")
                              .replace(/\&/g, "and")}`}
                            target="_blank"
                            className="
                        flex items-center justify-center 
                        w-full h-full px-4 text-center 
                        font-semibold
                        text-gray-200
                        transition-all duration-300
                        hover:text-[var(--color5)]
                      "
                          >
                            {/* Neon card effect */}
                            <span
                              className="
                          absolute inset-0 
                          rounded-xl 
                          border border-transparent
                          group-hover:border-[var(--color5)]
                          group-hover:shadow-[0_0_20px_var(--color5)]
                          transition-all duration-300
                        "
                            ></span>

                            <span className="relative z-10">{cell}</span>
                          </a>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Animations */}
        <style>{`
    @keyframes scan {
      0% { transform: translateX(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }
    .animate-scan {
      animation: scan 4s linear infinite;
    }
  `}</style>
      </section>
      <GetInTouch />

      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      <Footer />
    </div>
  );
}

export default ContentMarketing;

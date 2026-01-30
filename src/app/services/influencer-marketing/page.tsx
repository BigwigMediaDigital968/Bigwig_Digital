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
import ButtonFill from "../../../../components/Button";
import PopupForm from "../../../../components/PopupForm";
import GetInTouch from "../../../../components/GetInTouch";
import { SetStateAction, useState } from "react";
import { CheckCircle, Sparkles } from "lucide-react";

const chooseInfluencerItems = [
  {
    title: "Deep Understanding of Delhi’s Digital Culture",
    content:
      "Every city has its unique audience psychology. Delhi is driven by lifestyle, aspiration, energy, and relatability. Our influencer marketing agency in Delhi uses localized insights to craft campaigns that feel natural - not forced.",
  },
  {
    title: "Access to Verified, High-Impact Influencers",
    content:
      "From nano and micro creators to celebrities, our influencer network spans fashion, beauty, food, travel, fitness, finance, tech, parenting, and more. We ensure every collaboration matches your brand’s personality and goals.",
  },
  {
    title: "Data-Led Influencer Shortlisting",
    content: `We evaluate influencers through:
● Audience relevance
● Engagement quality
● Authenticity score
● Content style & tone
● Historical performance
This ensures you work only with influencers who deliver real outcomes.`,
  },
  {
    title: "Transparent, Authentic Partnerships",
    content:
      "No inflated numbers. No fake followers. No unclear deliverables. As a trusted influencer marketing company in Delhi, we guarantee authentic content, full transparency, and proper disclosure guidelines.",
  },
  {
    title: "Full Campaign Management",
    content:
      "We handle everything: strategy → influencer selection → negotiation → briefing → content approvals → posting schedules → reporting.\n You focus on business. We handle the influence.",
  },
  {
    title: "Creative Strategies That Drive Engagement",
    content:
      "Our team creates scroll-stopping content ideas tailored for Reels, YouTube Shorts, long-form videos, lifestyle posts, and trending formats.",
  },
];

const influencerServicesItems = [
  {
    title: "Influencer Discovery & Shortlisting",
    content:
      "We match your brand with influencers who resonate with your audience and category.",
  },
  {
    title: "Campaign Strategy & Creative Direction",
    content: `Every campaign includes a clear:
● Objective
● Narrative
● Content plan
● Winning hooks
● Posting schedule`,
  },
  {
    title: "Content Production & Collaboration",
    content:
      "We coordinate scripts, concepts, visual themes, and creative alignment to ensure your brand looks premium and authentic.",
  },
  {
    title: "Brand & Influencer Alignment",
    content:
      "We also help brands find creators who genuinely value and reflect the brand’s message - not just those with followers.",
  },
  {
    title: "Campaign Execution & Optimization",
    content:
      "As a performance-driven influencer marketing company in Delhi, we track real-time engagement and optimize activities for the best ROI.",
  },
  {
    title: "Analytics, Reporting & ROI Tracking",
    content: `Our reports include:
● Impressions
● Engagement
● Video completion
● Conversions
● Traffic
● Click-throughs
● Sentiment analysis
● ROI insights`,
  },
];

export const influencerWorkflow = [
  {
    title: "Understanding Your Brand & Audience",
    content:
      "We start with a deep dive into your goals, product positioning, competitive landscape, and target persona.",
  },
  {
    title: "Identifying Ideal Influencers",
    content:
      "Our analytics tools ensure we find creators who genuinely influence your audience.",
  },
  {
    title: "Planning the Content Story",
    content:
      "We map out the storytelling arc — authentic, engaging, and perfectly suited for each platform.",
  },
  {
    title: "Collaboration & Content Creation",
    content:
      "Influencers create content that your audience trusts and engages with.",
  },
  {
    title: "Campaign Management & Optimization",
    content:
      "We monitor performance and tweak campaign elements to ensure maximum impact.",
  },
  {
    title: "Reporting & Insights",
    content:
      "You receive detailed reports that clearly show ROI and audience reaction.",
  },
];

const whyTrustedInfluencerCompany = [
  {
    title: "Proven Success Across Multiple Campaigns",
    content:
      "Our influencer partnerships have delivered millions of impressions, high engagement, and real sales.",
  },
  {
    title: "Expert Team of Strategists & Content Specialists",
    content:
      "We combine cultural insights, creativity, and analytics to craft campaigns that stand out.",
  },
  {
    title: "Strong Relationships with Influencers",
    content:
      "We work with influencers long-term, ensuring reliability, consistency, and better performance.",
  },
  {
    title: "Flexible, Scalable Campaign Options",
    content:
      "From small-budget startups to large enterprises, our packages scale with your goals.",
  },
];

const faqs = [
  {
    q: "What is the best influencer marketing agency in Delhi?",
    a: "The best influencer marketing agency in Delhi is one that combines deep creator networks, data-driven campaign planning, and strong storytelling. As a leading influencer marketing company in Delhi, we connect brands with verified creators who understand the pulse of Delhi audiences and deliver measurable engagement, reach, and ROI.",
  },
  {
    q: "How does Buzz Fame support influencers?",
    a: "A professional influencer marketing agency in Delhi supports influencers by offering creative guidance, timely communication, transparent collaboration, and fair compensation. We ensure influencers receive clear briefs, brand insights, and access to resources that help them create authentic, high-performing content.",
  },
  {
    q: "How do you measure the success of influencer campaigns?",
    a: "We track success using metrics like reach, impressions, engagement rate, content saves/shares, cost per engagement, and conversions. As a data-first influencer marketing company in Delhi, we provide full performance dashboards so brands can see exactly how influencer marketing in Delhi drives visibility and revenue.",
  },
  {
    q: "Can influencers outside Delhi collaborate with your agency?",
    a: "Yes. While we specialize in influencer marketing services in Delhi, we work with creators across India and international markets. Depending on your campaign goals, we onboard influencers from relevant regions, languages, and niches to ensure accurate audience targeting.",
  },
  {
    q: "Which industries do you work with for influencer marketing?",
    a: "As a full-scale influencer marketing company in Delhi, we work with brands across fashion, beauty, food, tech, fitness, real estate, education, travel, finance, lifestyle, and more. Our diverse influencer network helps us match creators to industries where they perform best.",
  },
  {
    q: "How do you ensure brand alignment when selecting influencers?",
    a: "We evaluate influencers based on niche relevance, audience demographics, engagement authenticity, past collaborations, content tone, and brand fit. This ensures influencer marketing in Delhi maintains authenticity and resonates with your target audience.",
  },
  {
    q: "What steps do you take to maintain engagement and authenticity in influencer partnerships?",
    a: "We encourage creators to maintain their natural storytelling style, use honest messaging, and integrate your brand organically. Our influencer marketing services in Delhi also include real-time content monitoring to ensure quality, compliance, and genuine audience interaction.",
  },
  {
    q: "Can you provide examples of creative campaign strategies implemented for clients?",
    a: "Yes. As a top influencer marketing agency in Delhi, we create strategies like reel challenges, product seeding, storytelling videos, creator collaborations, live sessions, unboxing themes, testimonial storytelling, and trend-based campaign formats. Each strategy is built around your brand goals.",
  },
  {
    q: "How do you negotiate on behalf of clients and manage influencer compensation?",
    a: "Our team handles influencer shortlisting, negotiations, contract drafting, payment processing, and deliverable tracking. This ensures brands get the best value while influencers receive fair compensation - making the entire influencer marketing process smooth and transparent.",
  },
  {
    q: "What systems are used to monitor and control influencer performance during campaigns?",
    a: "We use tools for real-time performance tracking, audience analytics, engagement verification, fraud detection, and reporting. This ensures your influencer marketing in Delhi remains optimized, authentic, and fully measurable throughout the campaign.",
  },
];

function InfluencerMarketing() {
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
      <title>Influencer Marketing Agency in Delhi | Brand Growth</title>
      <meta
        name="title"
        content="Influencer Marketing Agency in Delhi | Brand Growth"
      />

      <meta
        name="description"
        content="Connect with trusted creators using influencer marketing services in Delhi to increase brand reach and credibility."
      />
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/influencer-marketing"
      />

      <Nav />
      <section
        className="relative bg-cover bg-center bg-no-repeat py-10 px-4"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="bg-black/60 absolute inset-0 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <h1 className="text-3xl md:text-4xl font-semibold text-[var(--color5)] leading-snug">
              Influencer Marketing Services in Delhi
            </h1>

            <p className=" max-w-xl text-white/90">
              Influencer marketing has become one of the fastest, most authentic
              ways to reach audiences who trust real voices more than ads. With
              our performance-focused influencer marketing services in Delhi,
              your brand connects with creators who inspire conversations, drive
              engagement, and deliver measurable business results.
            </p>
            <p className=" max-w-xl text-white/90">
              As a leading influencer marketing agency in Delhi, we bring
              together brands and influencers through data, storytelling, and
              strategy - ensuring your message reaches the right people, in the
              right way, at the right time. Whether you&apos;re building
              awareness, driving sales, or launching a new product, our
              influencer marketing company in Delhi ensures every collaboration
              feels real, relevant, and results-driven.
            </p>
            <ButtonFill
              onClick={() => setIsPopupOpen(true)}
              text="Get Started Now"
            />
          </div>

          {/* Right Form */}
          <ContactForm singleService="Influencer Marketing" />
        </div>
      </section>

      <section className="py-12">
        <div className="w-11/12 md:w-5/6 mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)]">
              Leading Influencer Marketing Company in Delhi for Real Influence &
              Real Results
            </h2>

            <p className="text-white text-base leading-relaxed">
              Delhi isn’t just a city - it’s a culture, a vibe, a marketplace of
              opinions. From trends born in Khan Market to viral moments created
              in Connaught Place, the capital has its own language of influence.
              Our influencer marketing in Delhi captures this essence by
              partnering with creators who truly understand the Delhi audience.
              We combine creativity, analytics, and influencer relationships to
              turn your brand into a part of Delhi’s daily conversation.
            </p>

            <ul className="text-white text-base leading-relaxed space-y-1">
              <li>✔ Authentic content</li>
              <li>✔ Seamless partnership management</li>
              <li>✔ Transparent performance tracking</li>
              <li>✔ Campaigns built to trend and convert</li>
            </ul>

            <p className="text-white text-base leading-relaxed">
              That’s why brands trust us as their preferred influencer marketing
              company in Delhi.
            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2">
            <Image
              src={influencer} // keep your existing import
              alt="Influencer Marketing Services"
              className="w-full h-[60vh] rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      <div className="py-12 w-11/12 md:w-5/6 mx-auto grid md:grid-cols-2 gap-12">
        {/* LEFT SIDE */}
        <section className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_30px_rgba(0,255,255,0.08)]">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)]">
              Why Choose Our Influencer Marketing Agency in Delhi?
            </h2>
          </div>

          <div className="space-y-10">
            {chooseInfluencerItems.map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                {/* Title with Icon */}
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[var(--color5)]" />
                  <h3 className="text-xl font-semibold text-[var(--color5)]">
                    {item.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="text-gray-200 text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                  {item.content.includes("●") ? (
                    <ul className="list-disc pl-5 space-y-1">
                      {item.content.split("\n").map((line, i) =>
                        line.trim().startsWith("●") ? (
                          <li key={i}>{line.replace("●", "").trim()}</li>
                        ) : (
                          <p key={i} className="mt-2">
                            {line}
                          </p>
                        ),
                      )}
                    </ul>
                  ) : (
                    <p>{item.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RIGHT SIDE */}
        <section className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_30px_rgba(0,255,255,0.08)]">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)]">
              Why Choose Our Influencer Marketing Agency in Delhi?
            </h2>
          </div>

          <div className="space-y-10">
            {influencerServicesItems.map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                {/* Title with Icon */}
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[var(--color5)]" />
                  <h3 className="text-xl font-semibold text-[var(--color5)]">
                    {item.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="text-gray-200 text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                  {item.content.includes("●") ? (
                    <ul className="list-disc pl-5 space-y-1">
                      {item.content.split("\n").map((line, i) =>
                        line.trim().startsWith("●") ? (
                          <li key={i}>{line.replace("●", "").trim()}</li>
                        ) : (
                          <p key={i} className="mt-2">
                            {line}
                          </p>
                        ),
                      )}
                    </ul>
                  ) : (
                    <p>{item.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

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
              {influencerWorkflow.map((item, index) => (
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
                      {item.content}
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
            {influencerWorkflow.map((item, index) => (
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
                    {item.content}
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
            Benefits of Hiring an Influencer Marketing Agency in Delhi
          </h2>

          {/* Intro Paragraph */}
          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-8 relative z-10">
            Hiring a professional influencer marketing agency in Delhi ensures
            your brand gets authentic visibility, powerful storytelling, and
            measurable growth. Here’s what you gain when experts handle your
            campaigns:
          </p>

          {/* Two-Column List */}
          <div
            className="
        grid grid-cols-1 md:grid-cols-2 
        gap-y-4 gap-x-10 
        relative z-10
      "
          >
            {[
              "Build trust faster than traditional ads",
              "Reach hyper-targeted audiences",
              "Create viral moments that spark conversation",
              "Boost website traffic & conversions",
              "Strengthen brand credibility",
              "Increase long-term brand recall",
              "Achieve measurable ROI from every campaign",
              "Enhance online presence across Instagram, YouTube & more",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                {/* Bullet */}
                <span className="text-[var(--color5)] text-xl leading-6">
                  •
                </span>

                {/* Text */}
                <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                  {item}
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
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] tracking-wide mb-6 relative z-10">
            Industries We Serve
          </h2>

          {/* Intro Paragraph */}
          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-8 relative z-10">
            Our influencer marketing services support a wide range of
            industries:
          </p>

          {/* Flex Wrap Rounded Items */}
          <div className="flex flex-wrap gap-4 relative z-10">
            {[
              "Fashion & Lifestyle",
              "Beauty & Skincare",
              "Food & Beverage",
              "Technology & Gadgets",
              "Healthcare & Wellness",
              "Real Estate",
              "Education & EdTech",
              "Finance & Investment",
              "Travel & Hospitality",
              "Automotive",
              "D2C Brands",
              "SaaS & Apps",
            ].map((item, index) => (
              <div
                key={index}
                className="
            flex items-center gap-2 
            bg-white/10 hover:bg-white/20 
            border border-white/10
            rounded-full 
            px-5 py-2 
            backdrop-blur-md 
            transition-all duration-300
          "
              >
                {/* Icon */}
                <span className="text-[var(--color5)] text-xl">✔</span>

                {/* Text */}
                <p className="text-gray-200 text-base">{item}</p>
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
              {whyTrustedInfluencerCompany.map((item, index) => (
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
                      {item.content}
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
            {whyTrustedInfluencerCompany.map((item, index) => (
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
                    {item.content}
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
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] tracking-wide mb-6 relative z-10">
            Ready to Boost Your Brand with Influencer Marketing in Delhi?
          </h2>

          {/* Content */}
          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-4 relative z-10">
            Let’s build stories that move people.
          </p>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-4 relative z-10">
            Let’s create influence that delivers impact.
          </p>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-4 relative z-10">
            Let’s make your brand the talk of the city.
          </p>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-8 relative z-10">
            Get in touch with the leading influencer marketing agency in Delhi
            and launch your next viral campaign today.
          </p>

          {/* CTA */}
          <div className="mt-6 relative z-10">
            <ButtonFill
              onClick={() => setIsPopupOpen(true)}
              text="Start Your Campaign"
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
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color5)] text-center tracking-wider ">
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

export default InfluencerMarketing;

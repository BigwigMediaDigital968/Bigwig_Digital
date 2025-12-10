"use client";
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

import ContactForm from "../../../../components/ContactForm";
import { SetStateAction, useState } from "react";
import Image from "next/image";
import ButtonFill from "../../../../components/Button";
import PopupForm from "../../../../components/PopupForm";
import GetInTouch from "../../../../components/GetInTouch";

const whyPartnerData = [
  {
    title: "Strategic Insights",
    content:
      "As a leading performance marketing company in Delhi, we take the time to understand your business model, market landscape, and customer behavior. This allows us to craft strategies that truly connect with your audience and consistently drive conversions.",
  },
  {
    title: "Data-Driven Campaigns",
    content:
      "Every campaign we run is powered by data. Following the principles of a performance-focused digital marketing agency, we make decisions based on analytics not assumptions. This ensures your budget is optimized for maximum ROI, making us one of the most effective performance-based marketing teams in the region.",
  },
  {
    title: "Comprehensive Service Spectrum",
    content:
      "Our performance marketing services in Delhi cover the full range of digital growth channels. From SEO and PPC to social media, content marketing, and conversion optimization, you get a complete, integrated marketing solution under one roof.",
  },
  {
    title: "Transparent Reporting",
    content:
      "Clarity is at the core of our approach. As a trusted performance marketing agency in Delhi, we provide clear, easy-to-understand reports that highlight your campaign’s progress, insights, and opportunities for future improvement.",
  },
  {
    title: "Adaptive and Agile",
    content:
      "The digital world moves fast, and staying static means falling behind. Our team stays ahead of trends, algorithm updates, and consumer shifts to ensure your marketing strategies remain relevant, competitive, and future-ready.",
  },
  {
    title: "Continuous Optimization",
    content:
      "Top performance marketing agencies in Delhi succeed by constantly refining strategies. We actively monitor industry trends, audience behavior, and platform changes to ensure your campaigns not only perform but continue outperforming in a crowded marketplace.",
  },
];

const industriesData = [
  {
    title: "Fashion Industry",
    content:
      "Our expertise in the fashion sector enables us to create visually compelling, trend-focused campaigns that showcase collections, attract enthusiasts, and drive sales through targeted performance marketing.",
  },
  {
    title: "Electronics & Technology",
    content:
      "Whether it’s smartphones, accessories, or advanced gadgets, we use precision targeting to reach tech-savvy audiences, increasing brand awareness and boosting product sales.",
  },
  {
    title: "Healthcare Sector",
    content:
      "As a knowledgeable performance marketing company in Delhi, we build compliant, informative, and high-performing campaigns that educate, engage, and convert, helping healthcare providers reach the right patients ethically and effectively.",
  },
  {
    title: "Hospitality & Travel",
    content:
      "Hotels, restaurants, and travel agencies trust us to craft captivating visuals and persuasive messaging that attract travelers, boost bookings, and enhance brand visibility.",
  },
  {
    title: "Education & E-Learning",
    content:
      "We help institutions and e-learning platforms connect with potential students by promoting courses and programs through targeted, high-intent advertising campaigns.",
  },
  {
    title: "Retail & E-Commerce",
    content:
      "From apparel to home goods, we create performance-driven strategies that increase traffic, boost online sales, and enhance customer retention across diverse e-commerce niches.",
  },
  {
    title: "Finance & Banking",
    content:
      "With an emphasis on security and compliance, we develop campaigns for banks, fintech brands, and financial institutions, promoting loans, investments, and financial products to highly targeted audiences.",
  },
  {
    title: "Automotive Industry",
    content:
      "From dealerships to manufacturers, we create campaigns that highlight vehicle features, build interest, and generate qualified leads from potential buyers.",
  },
];

const faqs = [
  {
    q: "What is Performance Marketing, and How Can a Performance Marketing Agency in Delhi Benefit My Business?",
    a: `Performance marketing is a results-driven approach where you pay only for measurable actions such as clicks, leads, sales, or conversions.
Partnering with a performance marketing agency in Delhi helps you scale faster using data, targeting, and optimization techniques to reach the right audience and maximize ROI. Whether you're a startup or an established business, performance marketing ensures every rupee spent moves you closer to growth.`,
  },
  {
    q: "How Do Performance Marketing Agencies in Delhi Measure Success?",
    a: `A performance marketing company in Delhi measures success using metrics such as:

• Click-through rates (CTR)
• Cost per lead (CPL)
• Return on ad spend (ROAS)
• Conversion rate
• Customer acquisition cost (CAC)

These KPIs ensure transparency and help refine campaigns for better performance.`,
  },
  {
    q: "What Makes a Performance Marketing Company in Delhi Different From Traditional Marketing Agencies?",
    a: `Traditional agencies focus on reach and visibility, while a performance-based digital marketing agency prioritizes measurable outcomes.
Unlike traditional marketing, performance marketing offers:

• Real-time tracking
• Targeted campaigns
• ROI-focused strategies
• Pay-for-performance models

This means you only invest in strategies that bring tangible results.`,
  },
  {
    q: "Can Performance-Based Digital Marketing Agencies Help with Brand Awareness?",
    a: `Absolutely. While performance marketing is known for conversions, it also boosts brand visibility.
A performance-based marketing agency uses precise audience targeting, engaging creatives, and strategic placements to increase brand recall and build trust.`,
  },
  {
    q: "What Services Do Performance-Based Marketing Agencies Offer?",
    a: `A full-service performance marketing agency in Delhi typically provides:

• Google Ads & PPC
• Social Media Ads (Meta, Instagram, YouTube, LinkedIn)
• SEO (Search Engine Optimization)
• Content marketing
• Landing page optimization
• Email & automation funnels
• Conversion rate optimization (CRO)

These services work together to attract, nurture, and convert customers.`,
  },
  {
    q: "How Do I Choose the Right Performance Marketing Services in Delhi for My Business?",
    a: `Look for a performance marketing agency near you that offers:

• Proven industry experience
• Transparent reporting
• Data-driven decision-making
• Customized strategies
• A strong portfolio of results

Choose an agency that understands your goals and aligns strategies accordingly.`,
  },
  {
    q: "What Can We Do for You to Be the Best?",
    a: `As a dedicated performance marketing company in Delhi, we focus on:

• Understanding your business deeply – goals, audience, challenges
• Building high-impact marketing systems for consistent growth
• Continuous optimization to stay ahead of competitors

Our mission: help you outperform your market with smart, scalable performance marketing.`,
  },
  {
    q: "Is Performance Marketing Expensive?",
    a: `Costs depend on goals, competition, and industry. The good news?

Performance marketing is one of the most cost-effective digital strategies because you only pay for measurable outcomes.

With the right agency, even small budgets can generate strong returns through precise targeting and optimization.`,
  },
  {
    q: "Is Performance Marketing Necessary?",
    a: `Yes, especially in today’s competitive digital ecosystem. Performance marketing:

• Reduces wasted ad spend
• Improves targeting accuracy
• Delivers faster results
• Provides clear, trackable ROI
• Helps businesses scale predictably

For any brand aiming for growth, performance marketing is a strategic necessity.`,
  },
];

const settings = {
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

function PerformanceMarketing() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: SetStateAction<number | null>) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[var(--color1)]">
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

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left Content */}
          <div className="text-white space-y-4 md:pr-8">
            <h1 className="text-2xl md:text-3xl font-semibold text-white leading-snug">
              Performance Marketing Company in Delhi
            </h1>
            <h2 className="text-xl font-semibold text-white leading-snug text-justify">
              We’re more than just another performance marketing agency in Delhi
            </h2>

            <p className="text-base max-w-xl text-white/90 text-justify">
              At Bigwig Media Digital, we’re more than just another performance
              marketing agency in Delhi - we’re a team driven by results,
              creativity, and a genuine commitment to your brand’s growth.
            </p>
            <p className="text-base  max-w-xl text-white/90 text-justify">
              Based in the heart of Delhi, our performance marketing company in
              Delhi proudly serves businesses across the entire Delhi NCR
              region, including Noida and Gurgaon.
            </p>
            <p className="text-base max-w-xl text-white/90 text-justify">
              Whether you&#39;re searching for a reliable Google Ads agency in
              Delhi, a trusted Google Ads company in Delhi, or simply a growth
              partner “near me,” our team is here to help you boost visibility,
              increase engagement, and maximize ROI with data-backed strategies
              that actually work.
            </p>
            <ButtonFill
              onClick={() => setIsPopupOpen(true)}
              text="Get Free Consultation"
            />
          </div>

          {/* Right Form */}
          <ContactForm />
        </div>
      </section>

      <section className=" text-white  py-12">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-20">
          {/* Intro */}

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)]">
                Performance Marketing Company in Delhi
              </h2>
              <p className=" leading-relaxed text-justify ">
                In the fast-moving digital pulse of India’s capital, businesses
                need more than just presence - they need performance. At Bigwig
                Media Digital, we stand as a trusted performance marketing
                company in Delhi, helping brands cut through the noise and reach
                their true growth potential.
              </p>
              <p className=" leading-relaxed text-justify">
                Amidst the energy, competition, and constant innovation of
                Delhi, our performance marketing agency in Delhi has built a
                reputation for delivering strategies that aren’t just creative,
                but measurable and ROI-driven. With a full suite of performance
                marketing services tailored to your goals, we help position your
                brand exactly where it needs to be - right at the forefront of
                your industry.
              </p>
            </div>

            {/* Right Image */}
            <div>
              <Image
                src={ppc}
                alt="Top PPC Company"
                className="w-full h-[50vh] rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto  py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-8 leading-snug">
          Build Your Brand with a Leading Performance Marketing Agency in Delhi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-justify">
          {/* Left Column */}
          <div className="space-y-4">
            <p className="text-white/90 text-base">
              As one of the top performance marketing agencies in Delhi, we
              focus on creating tailored strategies that fit your business goals
              – not generic templates. Every brand is unique, and your marketing
              approach should be too.
            </p>
          </div>

          {/* Right Column */}
          <div>
            <p className="text-white/90 text-base">
              Recognized as one of the most reliable performance marketing
              companies in Delhi, our team understands the complexities of
              today’s digital landscape. We go beyond generating traffic to
              deliver meaningful interactions that actually convert. From
              awareness to acquisition, every step is optimized to drive
              measurable, revenue-focused outcomes.
            </p>
          </div>
        </div>

        {/* Bottom Full-Width Paragraph */}
        <div className="mt-8 text-center space-y-4 p-6 md:p-8 border border-[var(--color5)] rounded-xl shadow-[inset_0_0_25px_var(--color3)] bg-[var(--color1)]/40">
          <p className="text-white/90 text-base md:text-lg">
            When you’re searching for a performance-driven partner who
            understands what real growth looks like, we’re here to make it
            happen.
          </p>

          <div className="flex justify-center">
            <ButtonFill
              text="Get Started Today"
              onClick={() => setIsPopupOpen(true)}
            />
          </div>
        </div>
      </section>

      <section className="py-12 w-11/12 md:w-5/6 mx-auto relative overflow-hidden">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-4">
            Why Partner with a Premier Performance Marketing Company in Delhi?
          </h2>
        </div>

        {/* CONTAINER */}
        <div className="relative z-10">
          {/* ========= MOBILE SLIDER ========= */}
          <div className="block lg:hidden">
            <Slider {...settings}>
              {whyPartnerData.map((item, index) => (
                <div key={index} className="px-2">
                  <div
                    className="
                relative flex flex-col p-6 rounded-2xl
                backdrop-blur-xl bg-white/5 
                border border-white/10
                shadow-[0_0_25px_rgba(0,255,255,0.1)]
                hover:shadow-[0_0_40px_var(--color5)]
                space-y-5 overflow-hidden group
                transition-all duration-500
                hover:-translate-y-2
              "
                  >
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
                    <p className="text-gray-200 text-sm md:text-base leading-relaxed text-justify relative z-10">
                      {item.content}
                    </p>

                    {/* Glow Border */}
                    <div
                      className="
                  absolute inset-0 rounded-2xl border border-transparent
                  group-hover:border-[var(--color5)] transition-all duration-500
                "
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* ========= DESKTOP GRID ========= */}
          <div
            className="
        hidden lg:grid 
        grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
        gap-10 auto-rows-fr
      "
          >
            {whyPartnerData.map((item, index) => (
              <div
                key={index}
                className="
            group relative overflow-hidden rounded-2xl 
            transition-transform duration-500 
            hover:-translate-y-3 h-full
          "
              >
                <div
                  className="
              relative z-10 p-6 rounded-2xl 
              backdrop-blur-xl bg-white/5
              border border-white/10
              shadow-[0_0_25px_rgba(0,255,255,0.15)]
              hover:shadow-[0_0_45px_var(--color5)]
              flex flex-col h-full space-y-5
              transition-all duration-500
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

                  {/* Description */}
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed text-justify relative z-10">
                    {item.content}
                  </p>

                  {/* Glow Border */}
                  <div
                    className="
                absolute inset-0 rounded-2xl border border-transparent 
                group-hover:border-[var(--color5)] transition-all duration-500
              "
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Animations */}
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

      <section className="py-12 w-11/12 md:w-5/6 mx-auto">
        {/* Outer Container */}
        <div
          className="
      relative rounded-3xl p-8 md:p-12
      backdrop-blur-2xl bg-white/5
      border border-[var(--color5)]/30
      shadow-[0_0_35px_rgba(0,255,255,0.15)]
      hover:shadow-[0_0_25px_var(--color5)]
      transition-all duration-700
      overflow-hidden
    "
        >
          {/* Shine Line */}
          <div
            className="
        absolute -top-full left-0 w-full h-full 
        bg-gradient-to-r from-transparent via-[var(--color5)]/20 to-transparent 
        rotate-45 opacity-70
        animate-[shineMove_4s_ease-in-out_infinite]
      "
          ></div>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-6">
            Why Bigwig Media Digital – and No One Else?
          </h2>

          {/* Content */}
          <div className="space-y-5 text-gray-200  leading-relaxed text-justify">
            <p>
              When you’re investing serious money into growth, you deserve to
              work with the best. And that’s exactly what you get with us. At
              Bigwig Media Digital, our team lives and breathes performance
              marketing - we’re obsessed with the numbers, the strategy behind
              them, and the results they create.
            </p>

            <p>
              We offer complete, end-to-end performance marketing solutions
              across every channel that matters to your business. From crafting
              compelling ad creatives to decoding analytics, our team of
              creative thinkers, problem-solvers, and data-driven doers ensures
              every campaign is built for impact.
            </p>

            <p>
              Day or night, we’re constantly refining ideas, exploring trends,
              and pushing boundaries. That’s how we deliver fresh,
              high-performing concepts and campaigns that don’t just compete —
              but stand out.
            </p>

            <p>
              If you want a team that’s committed, creative, and relentlessly
              performance-focused, you won’t find a better partner.
            </p>
          </div>
        </div>

        {/* Shine Animation */}
        <style>
          {`
      @keyframes shineMove {
        0% { transform: translateY(-150%); }
        100% { transform: translateY(150%); }
      }
    `}
        </style>
      </section>

      <section className="py-12 w-11/12 md:w-5/6 mx-auto">
        {/* Block 1 */}
        <div
          className="
      relative rounded-3xl p-8 md:p-12 
      backdrop-blur-2xl bg-white/5
      border border-[var(--color5)]/30
      shadow-[0_0_35px_rgba(0,255,255,0.15)]
      hover:shadow-[0_0_25px_var(--color5)]
      transition-all duration-700
      overflow-hidden mb-12
    "
        >
          {/* Shine Line */}
          <div
            className="
        absolute -top-full left-0 w-full h-full
        bg-gradient-to-r from-transparent via-[var(--color5)]/20 to-transparent
        rotate-45 opacity-70
        animate-[shineMove_4s_ease-in-out_infinite]
      "
          ></div>

          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-6">
            Most Trusted Performance Marketing Agency in Delhi
          </h2>

          <p className="text-gray-200  leading-relaxed text-justify">
            In today’s highly competitive digital world, choosing the right
            performance marketing agency in Delhi can make all the difference.
            With countless options in the market, only a few stand out for their
            expertise, innovation, and proven results. Businesses looking to
            scale through social media and digital performance channels need a
            partner that understands how to turn visibility into conversions,
            and conversions into sustainable growth.
          </p>
        </div>

        {/* Block 2 */}
        <div
          className="
      relative rounded-3xl p-8
      backdrop-blur-2xl bg-white/5
      border border-[var(--color5)]/30
      shadow-[0_0_35px_rgba(0,255,255,0.15)]
      hover:shadow-[0_0_25px_var(--color5)]
      transition-all duration-700
      overflow-hidden
    "
        >
          {/* Shine Line */}
          <div
            className="
        absolute -top-full left-0 w-full h-full
        bg-gradient-to-r from-transparent via-[var(--color5)]/20 to-transparent
        rotate-45 opacity-70
        animate-[shineMove_4s_ease-in-out_infinite]
      "
          ></div>

          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-6">
            Partner with the Best Performance Marketing Company in Delhi
          </h2>

          <div className="space-y-5 text-gray-200  leading-relaxed text-justify">
            <p>
              Boosting your brand’s presence and engagement requires a strategy
              that goes beyond generic marketing. Working with a top-tier
              performance marketing company in Delhi ensures that every campaign
              is tailored to your audience, built to spark meaningful
              interactions, and designed to deliver measurable results.
            </p>

            <p>
              With our commitment to excellence and a strong track record of
              successful campaigns, we offer performance-driven solutions
              crafted around your specific goals. Every strategy, every
              creative, and every optimization is built with your growth in
              mind.
            </p>

            {/* CTA */}
            <div className="text-center">
              <ButtonFill
                text="Boost Your Performance Today"
                onClick={() => setIsPopupOpen(true)}
              />
            </div>
          </div>
        </div>

        {/* Shine Animation */}
        <style>
          {`
      @keyframes shineMove {
        0% { transform: translateY(-150%); }
        100% { transform: translateY(150%); }
      }
    `}
        </style>
      </section>

      <section className="py-12 w-11/12 md:w-5/6 mx-auto relative overflow-hidden">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-4">
            Industries That Benefit from a Performance Marketing Agency in Delhi
          </h2>
        </div>

        {/* CONTAINER */}
        <div className="relative z-10">
          {/* ========= MOBILE SLIDER ========= */}
          <div className="block lg:hidden">
            <Slider {...settings}>
              {industriesData.map((item, index) => (
                <div key={index} className="px-2">
                  <div
                    className="
                relative flex flex-col p-6 rounded-2xl
                backdrop-blur-xl bg-white/5 
                border border-white/10
                shadow-[0_0_25px_rgba(0,255,255,0.1)]
                hover:shadow-[0_0_40px_var(--color5)]
                space-y-5 overflow-hidden group
                transition-all duration-500
                hover:-translate-y-2
              "
                  >
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
                    <p className="text-gray-200 text-sm md:text-base leading-relaxed text-justify relative z-10">
                      {item.content}
                    </p>

                    {/* Glow Border */}
                    <div
                      className="
                  absolute inset-0 rounded-2xl border border-transparent
                  group-hover:border-[var(--color5)] transition-all duration-500
                "
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* ========= DESKTOP GRID ========= */}
          <div
            className="
        hidden lg:grid 
        grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
        gap-10 auto-rows-fr
      "
          >
            {industriesData.map((item, index) => (
              <div
                key={index}
                className="
            group relative overflow-hidden rounded-2xl 
            transition-transform duration-500 
            hover:-translate-y-3 h-full
          "
              >
                <div
                  className="
              relative z-10 p-6 rounded-2xl 
              backdrop-blur-xl bg-white/5
              border border-white/10
              shadow-[0_0_25px_rgba(0,255,255,0.15)]
              hover:shadow-[0_0_45px_var(--color5)]
              flex flex-col h-full space-y-5
              transition-all duration-500
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

                  {/* Description */}
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed text-justify relative z-10">
                    {item.content}
                  </p>

                  {/* Glow Border */}
                  <div
                    className="
                absolute inset-0 rounded-2xl border border-transparent 
                group-hover:border-[var(--color5)] transition-all duration-500
              "
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Animations */}
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
                    animate-cardScan"
                    style={{
                      top: `${40 + i * 45}px`,
                      animationDelay: `${i * 0.25}s`,
                    }}
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

        {/* CTA Button */}
        <div className="mt-10 flex justify-center">
          <ButtonFill
            text="Start Your Project Today"
            onClick={() => setIsPopupOpen(true)}
          />
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

      <OurProcess />

      <WhyBigwig />
      {/* Services Table Section */}
      <section className="py-20 relative overflow-hidden">
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
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default PerformanceMarketing;

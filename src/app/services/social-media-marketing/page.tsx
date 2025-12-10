"use client";
import Nav from "../../../../components/Nav";
import hero from "../../../../Assets/Services hero/smm.jpg";
import smm from "../../../../Assets/services/5.jpg";
import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
import Footer from "../../../../components/Footer";
import Slider from "react-slick";
import ContactForm from "../../../../components/ContactForm";
import { SetStateAction, useState } from "react";
import Image from "next/image";
import ButtonFill from "../../../../components/Button";
import PopupForm from "../../../../components/PopupForm";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import GetInTouch from "../../../../components/GetInTouch";

const smoAds = [
  {
    title: "Meta Ads (Facebook & Instagram Advertising)",
    content:
      "Our advanced Social Media Marketing Services in Delhi include high-performing Meta Ads that capture attention and drive action. Whether your goal is brand awareness, engagement, or conversions, we design visually compelling and strategically optimized ad campaigns across Facebook and Instagram.",
  },
  {
    title: "LinkedIn Ads for High-Intent B2B Marketing",
    content:
      "Reach CEOs, decision-makers, and industry leaders with precision. As part of our comprehensive Social Media Services in Delhi, we manage LinkedIn Ads that generate qualified B2B leads through sponsored content, lead-gen forms, and retargeting campaigns.",
  },
  {
    title: "Snapchat Ads for Mobile-First Audiences",
    content:
      "Our Social Media Advertising expertise also includes Snapchat Ads designed for brands targeting younger, mobile-first users. Through immersive story ads, dynamic ads, and interactive formats, we help businesses boost engagement and build awareness.",
  },
  {
    title: "Twitter (X) Ads for Real-Time Visibility",
    content:
      "Stay relevant with trending campaigns powered by Twitter (X) Ads. Using hashtag targeting, interest targeting, and keyword-based advertising, our Social Media Ads help brands spark conversations, increase visibility, and reach active audiences in real time.",
  },
  {
    title: "YouTube Ads for Strong Video Branding",
    content:
      "As a key component of our Social Media Marketing Services in Delhi, we create YouTube ad campaigns that enhance brand recall and visibility. From skippable and non-skippable ads to bumper and in-feed formats, we ensure your message reaches the right viewers through high-impact video content.",
  },
];

const chooseBigwig = [
  {
    title: "Platform-Specific Expertise",
    content:
      "Every platform works differently, and so do our strategies. Whether it’s Meta, LinkedIn, Snapchat, YouTube, or Twitter (X), we craft platform-specific Social Media Advertising campaigns based on real-time algorithms, ad formats, audience behavior, and industry trends. This ensures your Social Media Ads reach the right audience with the right message.",
  },
  {
    title: "Creative + Strategy Approach",
    content:
      "Great results demand more than just good visuals. Our experts combine eye-catching creatives, persuasive copywriting, and data-driven targeting to craft campaigns that resonate with your audience. As a leading provider of SMM Services in Delhi, we ensure your brand’s message stays impactful and memorable.",
  },
  {
    title: "Conversion-Focused Funnels",
    content:
      "From awareness to engagement to final purchase, we build full-funnel strategies that guide your audience through a seamless buyer journey. Our Social Media Services in Delhi focus on generating not just traffic, but actual leads and conversions.",
  },
  {
    title: "Transparent Reporting & Weekly Optimization",
    content:
      "We believe in complete transparency. You get detailed insights on CPC, CTR, ROAS, CPL, and more. Our team conducts weekly optimization to improve performance continuously, ensuring your Social Media Marketing Services in Delhi investment delivers maximum value.",
  },
  {
    title: "Budget-Friendly Scaling",
    content:
      "Whether you're starting with ₹5,000 or scaling up to ₹5,00,000, our smart budget allocation ensures your campaigns achieve maximum output with minimum wastage. Our goal is sustainable and profitable scaling across all Social Media Advertising platforms.",
  },
];

const faqs = [
  {
    q: "What is included in social media marketing services?",
    a: "At BigWig Media Digital, our Social Media Marketing Services in Delhi include everything your brand needs to build a strong online presence—content creation, page management, audience engagement, hashtag research, competitor analysis, and strategic posting. We also provide creative design, reels, story creatives, monthly content calendars, and performance tracking. For brands looking to grow faster, we integrate Social Media Advertising and paid campaign management for maximum reach and conversions.",
  },
  {
    q: "What are the benefits of social media marketing services?",
    a: "Our SMM Services in Delhi help businesses increase brand awareness, engage with their audience, generate high-quality leads, and improve customer loyalty. With consistent posting, high-performing creatives, data-driven strategies, and ROI-focused Social Media Ads, you can grow your presence across platforms like Facebook, Instagram, LinkedIn, YouTube, Twitter (X), and Snapchat. Social media marketing also boosts website traffic, reputation, and conversions.",
  },
  {
    q: "Why should you hire a social media marketing agency in India?",
    a: "Hiring a professional agency like BigWig Media Digital ensures your brand gets expert-led strategy, creative direction, and performance-driven execution. Our team specializes in Social Media Services in Delhi, allowing you to focus on your business while we handle content creation, campaign management, audience targeting, and ongoing optimization. With deep industry insights, creative capabilities, and proven advertising frameworks, we help your brand achieve consistent, measurable results.",
  },
  {
    q: "How often will you post content on my social media profiles?",
    a: "Posting frequency depends on your package and marketing goals. Typically, we create a structured monthly content calendar that includes 12–20 posts per month, along with stories, reels, and engagement activities. Our Social Media Marketing Services in Delhi ensure your brand stays active, relevant, and consistently visible to your audience.",
  },
  {
    q: "How does BigWig Media Digital measure the success of social media campaigns?",
    a: "We use advanced tracking tools and detailed analytics to measure KPIs like engagement rate, reach, impressions, CPC, CTR, conversions, ROAS, and follower growth. Our performance reports offer complete transparency, and our team optimizes campaigns weekly to ensure continuous improvement. Whether it's organic growth or Social Media Advertising, we focus on delivering measurable and meaningful results.",
  },
  {
    q: "Can you help with social media advertising?",
    a: "Absolutely! BigWig Media Digital specializes in high-impact Social Media Advertising across Meta (Facebook & Instagram), LinkedIn, YouTube, Snapchat, and Twitter (X). We create conversion-focused Social Media Ads, handle audience targeting, A/B testing, funnel building, and ongoing optimization to help you generate leads, sales, and brand awareness at scale.",
  },
  {
    q: "What platforms do you manage?",
    a: `We manage all major social media platforms, including:
        
• Facebook
• Instagram
• LinkedIn
• YouTube
• Twitter (X)
• Snapchat
• Pinterest

Our Social Media Services in Delhi ensure your brand performs consistently across every platform where your audience is active.`,
  },
];

function SocialMediaMarketing() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const tiltRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: SetStateAction<number | null>) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    tiltRefs.current.forEach((card) => {
      if (card) {
        VanillaTilt.init(card, {
          max: 18,
          speed: 300,
          glare: true,
          "max-glare": 0.25,
          scale: 1.04,
        });
      }
    });
  }, []);

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
      <title>Social Media Marketing Experts</title>
      <meta
        name="description"
        content="Drive engagement & growth with targeted social media marketing strategies tailored for your brand."
      />
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/social-media-marketing"
      />

      <Nav />
      <section
        className="relative bg-cover bg-center bg-no-repeat py-10 px-4"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="bg-black/40 absolute inset-0 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
              Best SMM Services in Delhi to Grow Your Brand Online
            </h1>

            <p className=" max-w-xl text-white/90 text-justify">
              Looking for powerful and result-oriented SMM Services in Delhi
              that can take your brand to the next level? Our agency offers
              advanced Social Media Marketing Services in Delhi designed to
              increase engagement, build brand authority, and generate quality
              leads through strategic content creation and targeted campaigns.
              With our expert Social Media Services in Delhi, your business gets
              maximum visibility across all major social platforms.
            </p>

            <ButtonFill
              onClick={() => setIsPopupOpen(true)}
              text="Get Free SMM Consultation"
            />
          </div>

          {/* Right Form */}
          <ContactForm />
        </div>
      </section>

      <section className="py-12 space-y-10 text-white ">
        {/* Section Heading */}

        {/* Two-column Layout */}
        <div className="w-11/12 md:w-5/6 mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Left Content */}
          <div className="space-y-6 text-md leading-relaxed text-justify">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)]">
              Why Your Business Needs SMM Services in Delhi
            </h2>
            <p>
              In a competitive market like Delhi, businesses must stay active
              and visible on social media platforms. Professional Social Media
              Marketing Services in Delhi help you connect with your audience,
              drive engagement, and build a strong brand presence. Whether you
              want brand awareness, website traffic, or lead generation, our
              specialized SMM Services in Delhi provide the perfect solution.
            </p>

            <p>
              Social media is no longer optional - your customers expect active
              communication and consistent content. With our Social Media
              Services in Delhi, we ensure your brand remains ahead of
              competitors.
            </p>
          </div>

          {/* Right Image */}
          <div>
            <Image
              src={smm}
              alt="Social Media Marketing Agency "
              className="w-full h-[50vh] rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-12 w-11/12 md:w-5/6 mx-auto relative overflow-hidden">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color5)] mb-4">
            Our Social Media Advertising Services in India
          </h2>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed">
            As part of our premium SMM Services in Delhi, we offer targeted and
            result-driven Social Media Advertising solutions designed to
            increase brand visibility, generate leads, and maximize ROI. Our
            performance-focused Social Media Ads help businesses connect with
            their ideal audience across the most influential platforms in India.
          </p>
        </div>

        {/* CONTAINER */}
        <div className="relative z-10">
          {/* ========= MOBILE SLIDER ========= */}
          <div className="block lg:hidden">
            <Slider {...settings}>
              {smoAds.map((item, index) => (
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
                    ></div>
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
            {smoAds.map((item, index) => (
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
                  ></div>
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

      <section className="py-12  relative overflow-hidden">
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
            Reach Targeted Results With Social Media Marketing Services
          </h2>

          {/* Paragraph 1 */}
          <p className="text-gray-200  leading-relaxed mb-6 text-justify">
            Your search for powerful and result-driven Social Media Marketing
            Services in Delhi ends here. At Bigwig Media Digital, our expert
            team crafts data-driven strategies, creative content, and
            high-impact campaigns that help you connect with your ideal
            audience. With our premium SMM Services in Delhi, we focus on
            building brand visibility, boosting engagement, and driving
            measurable business growth.
          </p>

          {/* Paragraph 2 */}
          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-10">
            From strategic planning to content creation, campaign execution,
            Social Media Advertising, and detailed performance analysis, we
            offer fully customized Social Media Services in Delhi tailored to
            your business goals. Whether you need organic growth or
            performance-based Social Media Ads, we ensure every step leads to
            real, trackable results.
          </p>

          {/* CTA */}
          <div className="flex justify-center">
            <ButtonFill
              text="Start Growing With SMM"
              onClick={() => setIsPopupOpen(true)}
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

      <section className="py-12 w-11/12 md:w-5/6 mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] tracking-wide mb-6">
          A Trusted SMM Company in Delhi Delivering Proven Results
        </h2>

        {/* TWO COLUMN LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          {/* LEFT COLUMN — PARAGRAPH 1 */}
          <p className="text-gray-200 text-justify text-base leading-relaxed">
            As a leading and trusted SMM company in Delhi, we specialize in
            delivering result-driven social media solutions that help businesses
            grow faster in today’s digital-first world. With years of experience
            in providing premium SMM Services in Delhi, our team understands
            what it takes to build a powerful brand presence across multiple
            platforms. We use a strategic blend of creativity, data-driven
            insights, and advanced tools to ensure your brand reaches the right
            audience with maximum impact. Our comprehensive Social Media
            Marketing Services in Delhi cover everything from content creation,
            page management, and community engagement to full-funnel Social
            Media Ads and high-performance Social Media Advertising campaigns
            designed to boost visibility, engagement, and conversions.
          </p>

          {/* RIGHT COLUMN — PARAGRAPH 2 */}
          <p className="text-gray-200 text-justify text-base leading-relaxed">
            As experts in delivering tailored Social Media Services in Delhi, we
            take the time to understand your business goals, target audience,
            and competition. This allows us to craft customized strategies that
            not only elevate your brand but also deliver measurable results
            month after month. Whether you want to build brand awareness,
            increase engagement, generate leads, or scale your sales, our proven
            social media marketing frameworks provide a clear growth roadmap. We
            continuously optimize campaigns, analyze performance metrics, and
            refine strategies to ensure your brand stays ahead of competitors in
            the ever-evolving digital landscape.
          </p>
        </div>

        {/* FULL WIDTH PARAGRAPH */}
        <p className="text-gray-200 text-justify text-base leading-relaxed">
          Our success is driven by our commitment to excellence and long-term
          client satisfaction. Businesses across industries trust us because we
          deliver transparent reporting, consistent performance, and innovative
          ideas that make their brand stand out. With our focused approach to
          Social Media Marketing Services in Delhi, we help brands transform
          their online identity, expand their reach, and achieve sustainable
          digital growth. If you&#39;re looking for a reliable partner to handle
          everything from organic marketing to high-impact Social Media
          Advertising, we are the SMM company in Delhi you can count on for
          proven and measurable results.
        </p>
      </section>

      <section className="py-12 w-11/12 md:w-5/6 mx-auto relative overflow-hidden">
        {/* HEADING */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color5)] mb-4">
            Why Choose BigWig Media Digital for Social Media Marketing in India
          </h2>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed text-justify">
            Selecting the right partner for your social media growth is crucial,
            and BigWig Media Digital stands out as one of the most trusted
            agencies offering high-impact Social Media Marketing Services in
            Delhi and across India. We don’t just run basic campaigns—we build
            strategic, conversion-focused digital ecosystems designed to amplify
            your brand presence and deliver measurable results. Our team
            combines creativity, analytics, and performance marketing expertise
            to ensure every campaign drives maximum ROI.
          </p>
        </div>

        {/* ================= MOBILE SLIDER ================= */}
        <div className="block lg:hidden relative mb-10 z-10">
          <Slider {...settings}>
            {chooseBigwig.map((item, index) => (
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
                  {/* Shine Overlay */}
                  <div
                    className="
              absolute inset-0 bg-gradient-to-br 
              from-transparent via-white/5 to-transparent
              opacity-0 group-hover:opacity-100
              transition-opacity duration-500
            "
                  />

                  {/* Diagonal Shine */}
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

        {/* ================= DESKTOP GRID ================= */}
        <div
          className="
    hidden lg:grid 
    grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
    gap-10 auto-rows-fr relative z-10
  "
        >
          {chooseBigwig.map((item, index) => (
            <div
              key={index}
              className="
        group relative overflow-hidden rounded-2xl 
        transition-transform duration-500 hover:-translate-y-3 h-full
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
                {/* Diagonal Shine */}
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
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Shine Animation */}
        <style>{`
    @keyframes shineLine {
      0% { transform: translateY(-150%); }
      100% { transform: translateY(150%); }
    }
    .animate-shineLine {
      animation: shineLine 1.5s ease-in-out forwards;
    }
  `}</style>

        {/* CTA BUTTON */}
        <div className="flex justify-center mt-10">
          <ButtonFill
            text="Start Your Growth Journey"
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
          <div className="mb-6 relative z-10">
            <h2 className="text-xl md:text-2xl font-semibold text-[var(--color5)] mb-4">
              What You Get with Our Social Media Ad Management
            </h2>

            <p className="text-gray-200 text-base md:text-lg leading-relaxed">
              Partnering with BigWig Media Digital means getting a complete
              end-to-end solution for your Social Media Ads:
            </p>
          </div>

          {/* BULLET POINTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 relative z-10">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-3 h-3 rounded-full bg-[var(--color5)] shadow-[0_0_10px_var(--color5)] mt-1"></span>
                <p className="text-gray-200 leading-relaxed">
                  Campaign strategy & full-funnel design tailored to your
                  business goals
                </p>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-3 h-3 rounded-full bg-[var(--color5)] shadow-[0_0_10px_var(--color5)] mt-1"></span>
                <p className="text-gray-200 leading-relaxed">
                  Audience research & precise targeting setup for maximum reach
                </p>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-3 h-3 rounded-full bg-[var(--color5)] shadow-[0_0_10px_var(--color5)] mt-1"></span>
                <p className="text-gray-200 leading-relaxed">
                  High-converting ad creatives, including copywriting and
                  visuals
                </p>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-3 h-3 rounded-full bg-[var(--color5)] shadow-[0_0_10px_var(--color5)] mt-1"></span>
                <p className="text-gray-200 leading-relaxed">
                  A/B testing of creatives, placements, and messaging
                </p>
              </li>
            </ul>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-3 h-3 rounded-full bg-[var(--color5)] shadow-[0_0_10px_var(--color5)] mt-1"></span>
                <p className="text-gray-200 leading-relaxed">
                  Pixel & conversion tracking for accurate performance
                  measurement
                </p>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-3 h-3 rounded-full bg-[var(--color5)] shadow-[0_0_10px_var(--color5)] mt-1"></span>
                <p className="text-gray-200 leading-relaxed">
                  Weekly reporting & actionable insights
                </p>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-3 h-3 rounded-full bg-[var(--color5)] shadow-[0_0_10px_var(--color5)] mt-1"></span>
                <p className="text-gray-200 leading-relaxed">
                  Continuous optimization & scaling for consistent growth
                </p>
              </li>
            </ul>
          </div>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed relative z-10">
            With BigWig Media Digital, you gain a strategic partner dedicated to
            delivering high-impact, ROI-driven results through premium Social
            Media Marketing Services in Delhi and across India.
          </p>
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

export default SocialMediaMarketing;

{
  /* Animations */
}
<style>
  {`
@keyframes scan {
  0% { transform: translateX(-100%); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateX(100%); opacity: 0; }
}
.animate-scan {
  animation: scan 5s linear infinite;
}
`}
</style>;

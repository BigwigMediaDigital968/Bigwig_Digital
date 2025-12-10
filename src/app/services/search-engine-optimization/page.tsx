"use client";
import Nav from "../../../../components/Nav";
import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
import { TypeAnimation } from "react-type-animation";
import hero from "../../../../Assets/Services hero/seo.jpg";
import seo from "../../../../Assets/services/3.jpg";
import Footer from "../../../../components/Footer";
import Slider from "react-slick";

import ContactForm from "../../../../components/ContactForm";
import { SetStateAction, useState } from "react";
import Image from "next/image";
import ButtonFill from "../../../../components/Button";
import PopupForm from "../../../../components/PopupForm";
import GetInTouch from "../../../../components/GetInTouch";

const seoServices = [
  {
    title: "Enterprise SEO",
    content:
      "At Bigwig Media Digital, we offer innovative Enterprise SEO solutions that help large businesses dominate search results and stay ahead of the competition in their industry. ",
  },
  {
    title: "International SEO",
    content:
      "Expanding globally? We help optimize your website for multiple countries and languages so your brand can connect with audiences across borders. From hreflang implementation to region-specific keyword strategies, we ensure your global presence is strong, consistent, and search-friendly. ",
  },
  {
    title: "LLM SEO",
    content:
      "Our LLM SEO specialists optimise your content so it’s easy for large language models to understand, reference, and deliver in search answers. This boosts your authority and significantly improves your online visibility. ",
  },
  {
    title: "AI SEO",
    content:
      "We use AI-driven insights to refine keyword targeting, enhance content strategies, and elevate user experience, keeping your website competitive as search trends evolve. ",
  },
  {
    title: "Local SEO",
    content:
      "We optimise your Google Business Profile and create location-focused content that helps your business attract nearby customers, build trust, and stay visible in key areas. ",
  },
  {
    title: "E-commerce SEO",
    content:
      "Our team identifies the right keywords and optimises your product pages so customers can easily discover your products when they search online. ",
  },
  {
    title: "Technical SEO",
    content:
      "We improve the technical foundation of your website for better crawlability, indexing, and performance. From mobile optimisation to faster loading times and improved search engine readability, we ensure your site runs seamlessly. ",
  },
  {
    title: "JavaScript SEO",
    content:
      "For JavaScript-heavy websites, we ensure proper rendering and indexing so search engines can understand your content. This helps your site gain better visibility and rank higher on SERPs. ",
  },
  {
    title: "ORM (Online Reputation Management)",
    content:
      "We help brands and professionals build, manage, and safeguard their online reputation, ensuring that their digital presence reflects trust and authority. ",
  },
  {
    title: "Off-Page SEO",
    content:
      "Since backlinks play a major role in rankings, we audit and strengthen your backlink profile to support your overall SEO strategy and improve your website’s authority. ",
  },
];

const seoBenefits = [
  {
    title: "Improve Organic Rankings",
    content:
      "Show up at the top of Google search results and make it easier for customers in Delhi and beyond to discover your business. ",
  },
  {
    title: "Stay Visible in AI Search",
    content:
      "As AI-driven search becomes the new normal, SEO ensures your business appears in answer engines and AI search results, keeping you ahead of your competitors. ",
  },
  {
    title: "Attract Targeted Local Traffic",
    content:
      "Local SEO helps your business reach people actively searching for services in Delhi NCR - bringing in highly qualified and relevant leads. ",
  },
  {
    title: "Cost-Effective Marketing",
    content:
      "Reach your ideal audience without overspending on ads. SEO provides long-lasting results and delivers better value over time. ",
  },
  {
    title: "Higher Conversions & ROI",
    content:
      "By targeting the right keywords and understanding user intent, SEO turns your website visitors into actual leads - boosting conversions and overall ROI. ",
  },
  {
    title: "Long-Term Business Growth",
    content:
      "With consistent traffic, improved visibility, and better-quality leads, SEO helps your business grow steadily month after month. ",
  },
];

const seoDifference = [
  {
    title: "Tailored for You, Not Templates",
    content:
      "Every business is unique - and your SEO strategy should be too. We create custom plans that match your goals, industry, and audience.",
  },
  {
    title: "SEO That Builds Brands",
    content:
      "We don’t chase rankings for the sake of it. We help you build long-term authority that strengthens your brand.",
  },
  {
    title: "Local + Global SEO Expertise",
    content:
      "Whether you want to dominate your city or expand internationally, our team knows how to scale your visibility effectively.",
  },
  {
    title: "Transparent Growth Tracking",
    content:
      "Expect clear, easy-to-understand reports with zero jargon. You’ll always know exactly where your growth is coming from.",
  },
  {
    title: "Ahead of Every Algorithm Update",
    content:
      "We stay on top of industry trends and updates so your SEO strategy remains future-proof.",
  },
  {
    title: "More Than Just Visibility - Real Impact",
    content:
      "We focus on authority, trust, and conversions, turning your online presence into real business growth.",
  },
];

const faqs = [
  {
    q: "What can Bigwig Media Digital do for my business with SEO in Delhi?",
    a: "The SEO services from Bigwig Media Digital help you improve visibility for the right search terms. This allows you to attract more qualified traffic and generate leads that truly matter. We have earned a strong reputation for delivering transformational growth for our clients, and we can do the same for you.",
  },
  {
    q: "How long before we start seeing results?",
    a: "SEO is a long-term strategy. Still, it usually takes 3 to 6 months to begin seeing measurable progress. Bigwig Media Digital focuses on building a strong foundational strategy to ensure your organic growth aligns with your business and revenue goals.",
  },
  {
    q: "Do you offer local SEO for businesses targeting Delhi specifically?",
    a: "Yes! Bigwig Media Digital provides local SEO services for businesses that want to reach customers in Delhi. Our services include optimising your Google Business Profile, improving local citations, and creating location-specific content to boost your visibility in “near me” searches and strengthen your presence in local markets.",
  },
  {
    q: "What kind of reporting can we expect?",
    a: "We believe transparency is essential. You’ll receive detailed monthly reports with keyword rankings, traffic insights, and complete campaign performance breakdowns. Our team is always available to walk you through the results and discuss strategies for the next phase.",
  },
  {
    q: "Why should we choose Bigwig Media Digital over another SEO agency in Delhi?",
    a: "Bigwig Media Digital is not just another vendor. We aim to be your trusted partner in driving real business growth - something many of our clients can confirm. With years of experience and proven expertise, we focus on delivering meaningful outcomes, not just rankings.",
  },
  {
    q: "How to improve my website rankings in Delhi?",
    a: "Improving rankings in Delhi requires targeted keywords, strong local SEO strategies, quality backlinks, fast-loading pages, and engaging content that resonates with Delhi audiences while meeting Google’s quality standards.",
  },
  {
    q: "Can SEO help local Delhi businesses compete with national brands?",
    a: "Yes. Local SEO helps build strong visibility for local intent searches, enabling Delhi-based businesses to appear for region-specific keywords, attract nearby customers, and effectively compete with much larger national brands.",
  },
  {
    q: "What are the top SEO trends businesses in Delhi should focus on?",
    a: "Delhi businesses should prioritise AI-ready SEO, voice search optimisation, local listings, high-quality content, mobile-first experiences, and strong E-E-A-T signals to build credibility and achieve long-term growth.",
  },
  {
    q: "Does Bigwig Media Digital offer AI-driven or LLM-optimised SEO solutions?",
    a: "Yes, Bigwig Media Digital delivers AI-driven and LLM-optimised SEO strategies that improve brand visibility across platforms such as ChatGPT, Gemini, and Perplexity by aligning your website content with evolving search and language model algorithms.",
  },
  {
    q: "How does Bigwig Media Digital’s SEO strategy differ from other agencies in Delhi?",
    a: "Bigwig Media Digital combines data-driven insights, AI tools, and proven SEO frameworks. Our strategies are built around measurable ROI, ethical SEO practices, and a deep understanding of Delhi’s competitive digital ecosystem.",
  },
];

function Seo() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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
      <title>SEO Services for Higher Ranking</title>
      <meta
        name="description"
        content="Boost your online visibility and rank higher on search engines with our expert SEO services."
      />
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/search-engine-optimization"
      />

      <Nav />
      <section
        className="relative bg-cover bg-center bg-no-repeat py-10 "
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="bg-black/40 absolute inset-0 z-0" />

        <div className="relative z-10 w-11/12 md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
              SEO Services in Delhi NCR
            </h1>

            <p className="text-base md:text-lg  max-w-xl text-white/90 text-justify">
              Your business deserves real, meaningful growth, the kind that
              changes everything. At Bigwig Media Digital, we’re here to make
              that happen. We help businesses across Delhi show up at the top of
              Google search, again and again. And when your visibility
              increases, so do your clicks, your leads, and ultimately, your
              sales.
            </p>

            <ButtonFill
              onClick={() => setIsPopupOpen(true)}
              text="Contact Us"
            />
          </div>

          {/* Right Form */}
          <ContactForm />
        </div>
      </section>

      <section className="  py-12">
        <div className="w-11/12 md:w-5/6 mx-auto">
          {/* Main content layout */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left content */}
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-semibold text-[var(--color5)] mb-4">
                SEO Company in Delhi Focused on Visibility, Traffic &
                Conversions
              </h2>
              <p className="text-white leading-relaxed text-justify">
                SEO plays a crucial role in strengthening your online presence
                and boosting your visibility on the internet. And choosing the
                right SEO services company in Delhi can be the difference
                between a business that struggles and a business that grows year
                after year. That’s exactly where Bigwig Media Digital comes in.
                We dig deep into the world of search engine optimisation and use
                it to fuel your business growth.
              </p>

              <p className="text-white leading-relaxed text-justify">
                As a dedicated SEO services company in Delhi, our goal is
                simple: to create strategies that are tailored to the unique
                needs of every client. Our team brings together technical
                expertise and creative thinking to help your website rise to the
                top of search engine results pages. With years of experience
                behind us, we focus on driving organic traffic, increasing
                visibility, and turning clicks into loyal customers.{" "}
              </p>

              <p className="text-white leading-relaxed text-justify">
                What truly sets us apart is our approach. We believe in
                transparency and results you can measure. At Bigwig Media
                Digital, we use advanced analytics and share clear, actionable
                reports and roadmaps, so you always know what’s working. Our
                services are designed for all kinds of businesses - whether
                you&#39;re just starting out or already established. From
                keyword research and content optimisation to high-quality
                backlink building, we use a holistic SEO strategy that supports
                long-term success for your brand. Choose Bigwig Media Digital, a
                trusted SEO services company in Delhi, and watch your business
                reach new heights.
              </p>
            </div>

            {/* Right image */}
            <div className="w-full">
              <Image
                src={seo}
                alt="Best SEO Company in India"
                className="w-full h-[60vh] rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 w-11/12 md:w-5/6 mx-auto relative overflow-hidden">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color5)] mb-4">
            Expert SEO Services in Delhi to Maximise Your Online Success
          </h2>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed">
            Bigwig Media Digital has built a strong reputation for delivering
            transformational growth across industries. Our SEO services evolve
            with changing trends and best practices, ensuring long-term growth
            and competitive advantage for our clients.
          </p>
        </div>

        {/* ================= CONTAINER ================= */}
        <div className="relative mb-10 z-10">
          {/* ================= MOBILE SLIDER ================= */}
          <div className="block lg:hidden">
            <Slider {...settings}>
              {seoServices.map((item, index) => (
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
                    {/* Shine Gradient Overlay */}
                    <div
                      className="
                absolute inset-0 bg-gradient-to-br 
                from-transparent via-white/5 to-transparent
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
              "
                    />

                    {/* Diagonal Shine Line */}
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

                    {/* Content */}
                    <p className="text-gray-200 text-sm md:text-base leading-relaxed relative z-10 text-justify">
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

          {/* ================= DESKTOP GRID ================= */}
          <div
            className="
      hidden lg:grid 
      grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
      gap-10 auto-rows-fr
    "
          >
            {seoServices.map((item, index) => (
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

          {/* ========== ANIMATIONS ========== */}
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

        {/* CTA */}
        <div className="flex justify-center">
          <ButtonFill
            text="Boost Your Rankings Today"
            onClick={() => setIsPopupOpen(true)}
          />
        </div>
      </section>

      <section className="py-12 w-11/12 md:w-5/6 mx-auto relative overflow-hidden">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color5)] mb-4">
            Why Your Business Should Invest in SEO Services in Delhi
          </h2>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed">
            SEO isn’t just about ranking higher on Google - it’s about boosting
            visibility, connecting with the right audience, and building
            long-term growth. Here’s why investing in SEO services in Delhi is
            essential for every modern business:
          </p>
        </div>

        {/* MOBILE SLIDER */}
        <div className="block lg:hidden relative mb-10 z-10">
          <Slider {...settings}>
            {seoBenefits.map((item, index) => (
              <div key={index} className="px-2">
                <div
                  className="
              flex flex-col 
              p-6 rounded-2xl 
              backdrop-blur-xl bg-white/5
              border border-transparent
              hover:border-[var(--color5)]
              shadow-[0_0_25px_rgba(0,255,255,0.15)]
              hover:shadow-[0_0_35px_var(--color5)]
              space-y-5 relative overflow-hidden group
              transition-all duration-300
            "
                >
                  {/* Scan Lines */}
                  <div className="absolute inset-0 opacity-40 pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="
                    absolute left-0 w-full h-[2px]
                    bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
                    animate-cardScan
                  "
                        style={{
                          top: `${60 + i * 55}px`,
                          animationDelay: `${i * 0.2}s`,
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[var(--color5)] tracking-wide">
                    {item.title}
                  </h3>

                  {/* Content */}
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed text-justify">
                    {item.content}
                  </p>

                  {/* Glow Border */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[var(--color5)] transition-all"></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 auto-rows-fr relative z-10 mb-10">
          {seoBenefits.map((item, index) => (
            <div
              key={index}
              className="
          group relative overflow-hidden rounded-2xl 
          transition-transform duration-300 
          hover:-translate-y-2 h-full
        "
            >
              <div
                className="
            relative z-10 p-6 rounded-2xl 
            backdrop-blur-xl bg-white/5
            border border-transparent
            hover:border-[var(--color5)]
            shadow-[0_0_25px_rgba(0,255,255,0.15)]
            hover:shadow-[0_0_35px_var(--color5)]
            flex flex-col  
            h-full space-y-5
            transition-all duration-300
          "
              >
                {/* Scan Lines */}
                <div className="absolute inset-0 pointer-events-none opacity-40">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="
                  absolute left-0 w-full h-[2px]
                  bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
                  animate-cardScan
                "
                      style={{
                        top: `${60 + i * 50}px`,
                        animationDelay: `${i * 0.25}s`,
                      }}
                    ></div>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[var(--color5)] tracking-wide">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-200 text-sm md:text-base leading-relaxed text-justify">
                  {item.content}
                </p>

                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[var(--color5)] transition-all"></div>
              </div>
            </div>
          ))}
        </div>

        {/* ANIMATION */}
        <style>{`
    @keyframes cardScan {
      0% { transform: translateX(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }
    .animate-cardScan {
      animation: cardScan 4s linear infinite;
    }
  `}</style>

        {/* CTA Button */}
        <div className="flex justify-center">
          <ButtonFill
            text="Start Growing with SEO"
            onClick={() => setIsPopupOpen(true)}
          />
        </div>
      </section>

      <section className="py-12 w-11/12 md:w-5/6 mx-auto relative overflow-hidden">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color5)] mb-4">
            The Best SEO Services in Delhi - and Beyond!
          </h2>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed">
            Choosing the right digital growth partner isn’t just about getting
            higher rankings. It’s about finding a team that values trust,
            transparency, and real business impact. At Bigwig Media Digital, we
            elevate SEO services in India with strategies designed for
            meaningful, long-term growth.
          </p>
        </div>

        <h3 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
          What Makes Us Truly Different as an SEO Services Provider in Delhi?
        </h3>

        {/* MOBILE SLIDER */}
        <div className="block lg:hidden relative mb-10 z-10">
          <Slider {...settings}>
            {seoDifference.map((item, index) => (
              <div key={index} className="px-2">
                <div
                  className="
              flex flex-col  
              p-6 rounded-2xl 
              backdrop-blur-xl bg-white/5
              border border-transparent
              hover:border-[var(--color5)]
              shadow-[0_0_25px_rgba(0,255,255,0.15)]
              hover:shadow-[0_0_35px_var(--color5)]
              space-y-5 relative overflow-hidden group
              transition-all duration-300
            "
                >
                  {/* Scan Lines */}
                  <div className="absolute inset-0 opacity-40 pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="
                    absolute left-0 w-full h-[2px]
                    bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
                    animate-cardScan
                  "
                        style={{
                          top: `${60 + i * 55}px`,
                          animationDelay: `${i * 0.2}s`,
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[var(--color5)] tracking-wide">
                    {item.title}
                  </h3>

                  {/* Content */}
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed text-justify">
                    {item.content}
                  </p>

                  {/* Glow Border */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[var(--color5)] transition-all"></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 auto-rows-fr relative z-10 mb-10">
          {seoDifference.map((item, index) => (
            <div
              key={index}
              className="
          group relative overflow-hidden rounded-2xl 
          transition-transform duration-300 
          hover:-translate-y-2 h-full
        "
            >
              <div
                className="
            relative z-10 p-6 rounded-2xl 
            backdrop-blur-xl bg-white/5
            border border-transparent
            hover:border-[var(--color5)]
            shadow-[0_0_25px_rgba(0,255,255,0.15)]
            hover:shadow-[0_0_35px_var(--color5)]
            flex flex-col 
            h-full space-y-5
            transition-all duration-300
          "
              >
                {/* Scan Lines */}
                <div className="absolute inset-0 pointer-events-none opacity-40">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="
                  absolute left-0 w-full h-[2px]
                  bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
                  animate-cardScan
                "
                      style={{
                        top: `${60 + i * 50}px`,
                        animationDelay: `${i * 0.25}s`,
                      }}
                    ></div>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[var(--color5)] tracking-wide">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-200 text-sm md:text-base leading-relaxed text-justify">
                  {item.content}
                </p>

                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[var(--color5)] transition-all"></div>
              </div>
            </div>
          ))}
        </div>

        {/* ANIMATION */}
        <style>{`
    @keyframes cardScan {
      0% { transform: translateX(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }
    .animate-cardScan {
      animation: cardScan 4s linear infinite;
    }
  `}</style>

        {/* CTA BUTTON */}
        <div className="flex justify-center">
          <ButtonFill
            text="Explore SEO Solutions"
            onClick={() => setIsPopupOpen(true)}
          />
        </div>
      </section>

      <section className="py-12 w-11/12 md:w-5/6 mx-auto relative overflow-hidden">
        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-semibold text-[var(--color5)] mb-6">
          Choosing the Right SEO Consultant for Your Business in Delhi
        </h2>

        {/* Content Box */}
        <div
          className="
      relative p-8 md:p-10 rounded-2xl 
      backdrop-blur-xl bg-white/5 
      border border-white/10 
      shadow-[0_0_25px_rgba(0,255,255,0.15)]
      overflow-hidden
      mb-10
    "
        >
          {/* Scan Lines */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="
            absolute left-0 w-full h-[2px]            
          "
                style={{
                  top: `${50 + i * 55}px`,
                  animationDelay: `${i * 0.3}s`,
                }}
              ></div>
            ))}
          </div>

          {/* Paragraphs */}
          <div className="relative z-10 space-y-6 text-gray-200 leading-relaxed text-justify">
            <p>
              In today’s digital-first world, where online presence defines
              business success, partnering with the best SEO consultant in Delhi
              has become essential. A skilled SEO consultant in Delhi can
              significantly enhance your website’s visibility, outrank
              competitors, attract quality traffic, and ultimately boost
              conversions and sales. Whether you&#39;re a small business in
              Delhi, NCR, hiring a professional who offers expert SEO services
              can bring remarkable benefits to your organisation.
            </p>

            <p>
              A reliable SEO consultant brings deep market understanding and
              strategic insight. They analyse your audience, your competitors,
              and your industry landscape to ensure your business ranks high for
              the most relevant search terms. Their work goes far beyond basic
              optimisations - from keyword research and on-page optimisation to
              link building and local SEO strategies. A dedicated SEO consultant
              equips your business with the right tools, techniques, and
              resources to reach your target audience effectively.
            </p>

            <p>
              With the guidance of the right SEO consultant, your business in
              Delhi can gain sustainable visibility, stronger brand authority,
              and steady growth in both traffic and conversions.
            </p>
          </div>

          {/* CTA BUTTON */}
          <div className="flex justify-center">
            <ButtonFill
              text="Connect With an SEO Consultant"
              onClick={() => setIsPopupOpen(true)}
            />
          </div>

          {/* Glow Border */}
          <div className="absolute inset-0 rounded-2xl border border-transparent hover:border-[var(--color5)] transition-all duration-300"></div>
        </div>

        {/* Scan Animation */}
        <style>{`
    @keyframes cardScan {
      0% { transform: translateX(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }
    .animate-cardScan {
      animation: cardScan 5s linear infinite;
    }
  `}</style>
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
export default Seo;
<style>
  {`
  @keyframes scan {
    0% { transform: translateY(-100%); opacity: 0; }
    50% { opacity: 0.7; }
    100% { transform: translateY(100%); opacity: 0; }
  }
  .animate-scan {
    animation: scan 5s linear infinite;
  }

  @keyframes pulseGlow {
    0%, 100% { box-shadow: 0 0 25px rgba(167,235,242,0.25); }
    50% { box-shadow: 0 0 40px rgba(167,235,242,0.55); }
  }
  .animate-pulseGlow {
    animation: pulseGlow 3s ease-in-out infinite;
  }

  @keyframes lineGlow {
    0% { opacity: 0.4; width: 70%; }
    50% { opacity: 1; width: 100%; }
    100% { opacity: 0.4; width: 70%; }
  }
  .animate-lineGlow {
    animation: lineGlow 4s ease-in-out infinite;
  }
`}
</style>;

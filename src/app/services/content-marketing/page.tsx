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
import { useState } from "react";
import PopupForm from "../../../../components/PopupForm";
import GetInTouch from "../../../../components/GetInTouch";

function ContentMarketing() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const boxes = [
    {
      title: "Get found",
      description: "Optimized for search engines with SEO-rich strategies.",
      icon: "🔍",
    },
    {
      title: "Get read",
      description: "Engaging content that keeps your audience hooked.",
      icon: "📖",
    },
    {
      title: "Get results",
      description: "Drives conversions through value-driven messaging.",
      icon: "🎯",
    },
  ];

  const services = [
    {
      title: "SEO Blog & Article Writing",
      description:
        "Our blogs rank well and attract repeat visitors. Every article is keyword-optimized, well-researched, and aligned with your industry voice.",
    },
    {
      title: "Social Media Content Creation",
      description:
        "From Instagram captions to carousel copy and LinkedIn thought pieces, we build content that earns reach and engagement, organically.",
    },
    {
      title: "Website Copywriting",
      description:
        "We deliver clean, conversion-focused website copy that guides your visitors, reflects your brand voice, and encourages action.",
    },
    {
      title: "Video Scriptwriting",
      description:
        "Whether it’s a reel, explainer video, YouTube ad, or brand story, we write compelling scripts that connect and convert.",
    },
    {
      title: "Email Campaign Content",
      description:
        "From irresistible subject lines to high-converting email bodies, we help you nurture leads and drive clicks.",
    },
    {
      title: "Whitepapers, Case Studies & eBooks",
      description:
        "Create content that is thorough, insightful, and generates trust in order to establish thought leadership and generate excellent leads.",
    },
  ];

  const agencyPoints = [
    {
      title: "SEO at the Heart",
      description:
        "We focus on rankings from the start. Keyword research, on-page SEO, topic clusters, internal linking. We create content that search engines and users both love.",
      icon: "🔍",
    },
    {
      title: "Unique Brand Voice",
      description:
        "Every brand is different, and we ensure your content reflects that. Whether it’s formal B2B tone or quirky D2C personality. We get it right every time.",
      icon: "🗣️",
    },
    {
      title: "Consistency and Scale",
      description:
        "Need a few blogs a month or hundreds of pages for a product launch? We’ve got you. Our team is built for both quality and volume.",
      icon: "📈",
    },
    {
      title: "Research & Result-Driven",
      description:
        "We dig deep into industry trends, user intent, and analytics to write content that’s not just creative, but commercially effective.",
      icon: "📊",
    },
  ];
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

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
              Best Content Marketing Services That Speak for Your Brand
            </h1>

            <p
              className="text-2xl md:text-4xl font-semibold text-[var(--color5)]"
              style={{
                letterSpacing: "0.7px",
              }}
            >
              <span className="inline">Content That&nbsp;</span>
              <span className="inline-block whitespace-nowrap">
                <TypeAnimation
                  sequence={["Connects", 2000, "Engages ", 2000, "Sells", 2000]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </p>

            <p className="text-base md:text-lg max-w-md text-white/90">
              From blog strategy to brand storytelling,we build content that
              connects.
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
      <section className=" py-10">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-2xl md:text-4xl md:font-bold font-semibold text-[var(--color5)]">
                World&#39;s Top Content Marketing Company Creating Content That
                Cuts Through the Noise.
              </h2>
              <p className="text-lg text-white text-justify ">
                Content is now the foundation of your entire marketing plan and
                is no longer optional in today&#39;s digital-first society. We
                as{" "}
                <strong>
                  <a href="https://www.bigwigdigital.in/">
                    Leading Content Marketing Firm
                  </a>
                </strong>
                , BigWig Digital, do more than just create content. We create
                digital experiences that engage your audience directly, improve
                your search engine rankings, and convert infrequent readers into
                devoted clients.
              </p>
              <p className="text-lg text-white text-justify ">
                We provide informational, motivating, and influencing content,
                ranging from in-depth blogs to witty social media updates. We
                help brands stand out from the competition thanks to our
                in-depth knowledge of both algorithms and human behavior.
              </p>
              <p className="text-lg text-white text-justify">
                You&#39;ve come to the perfect spot if you&#39;re searching for
                strategic content marketing services that combine conversion,
                clarity, and creativity.
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

      <section className="py-16 relative overflow-hidden w-11/12 md:w-5/6 mx-auto">
        {/* Background */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none"></div>

        {/* MAIN WRAPPER */}
        <div className="relative z-10 space-y-10">
          {/* TITLE CAPSULE */}
          <div
            className="
        rounded-full w-fit mx-auto px-8 py-3 
        backdrop-blur-xl bg-white/10 
        border border-white/20 shadow-[0_0_25px_rgba(0,255,255,0.25)]
      "
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color5)] tracking-wide text-center">
              Why Content Marketing Is the Future of Digital Success.
            </h2>
          </div>

          {/* PARAGRAPHS */}
          <div className="space-y-6 text-gray-200 text-lg leading-relaxed">
            <p>
              Content marketing is more than writing—it&#39;s about building
              <span className="text-[var(--color5)] font-semibold ">
                {" "}
                authority, trust, and long-term visibility
              </span>{" "}
              in an increasingly competitive digital world. When executed
              effectively, it turns your website into a lead generator, your
              social media into a community hub, and your brand into a trusted
              expert.
            </p>

            <p>
              With our expertise as a global{" "}
              <strong>
                <a
                  href="https://www.bigwigdigital.in/"
                  className="text-[var(--color5)] underline"
                >
                  content marketing company
                </a>
              </strong>
              , we know that impactful content must achieve three things:
            </p>
          </div>

          {/* ========================= MOBILE SLIDER ========================= */}
          <div className="md:hidden">
            <Slider {...sliderSettings}>
              {boxes.map((item, index) => (
                <div key={index} className="pr-3">
                  <div
                    className="
                relative p-6 rounded-xl 
                backdrop-blur-xl bg-white/10 
                border border-white/10 
                shadow-[0_0_20px_rgba(0,255,255,0.15)]
                hover:border-[var(--color5)] 
                hover:shadow-[0_0_25px_var(--color5)]
                transition-all 
              "
                  >
                    <div className="text-3xl text-[var(--color5)] drop-shadow-[0_0_10px_var(--color5)]">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-[var(--color5)] mt-3">
                      {item.title}
                    </h4>
                    <p className="text-gray-200 text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* ========================= DESKTOP GRID ========================= */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {boxes.map((item, index) => (
              <div
                key={index}
                className="
            relative p-6 rounded-xl 
            backdrop-blur-xl bg-white/5 
            border border-white/10
            shadow-[0_0_20px_rgba(0,255,255,0.15)]
            hover:border-[var(--color5)] 
            hover:shadow-[0_0_25px_var(--color5)]
            transition-all duration-300
            overflow-hidden group
          "
              >
                {/* Hologram scan lines */}
                <div className="absolute inset-0 pointer-events-none opacity-40">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="
                  absolute left-0 w-full h-[2px]
                  bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
                  animate-contentScan
                "
                      style={{
                        top: `${30 + i * 40}px`,
                        animationDelay: `${i * 0.25}s`,
                      }}
                    ></div>
                  ))}
                </div>

                <div className="text-3xl drop-shadow-[0_0_10px_var(--color5)]">
                  {item.icon}
                </div>

                <h4 className="text-xl font-semibold text-[var(--color5)] mt-3 relative z-10">
                  {item.title}
                </h4>

                <p className="text-gray-200 text-sm mt-1 relative z-10">
                  {item.description}
                </p>

                {/* Glow Border */}
                <div
                  className="
              absolute inset-0 rounded-xl 
              border border-transparent 
              group-hover:border-[var(--color5)] 
              transition-all
            "
                ></div>
              </div>
            ))}
          </div>

          <p className="text-lg text-gray-200 leading-relaxed text-justify">
            And we build strategies that accomplish exactly that—across every
            content format, channel, and growth objective.
          </p>
        </div>

        {/* ANIMATIONS */}
        <style>{`
    @keyframes contentScan {
      0% { transform: translateX(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }
    .animate-contentScan {
      animation: contentScan 4s linear infinite;
    }
  `}</style>
      </section>

      <section className="py-16 relative overflow-hidden w-11/12 md:w-5/6 mx-auto">
        {/* Matrix Glow Background */}
        <div className="absolute inset-0 opacity-[0.15]  pointer-events-none"></div>

        <div className="relative z-10 space-y-10">
          {/* TITLE */}
          <h3
            className="
      text-2xl md:text-3xl font-bold 
      text-[var(--color5)] 
      text-center md:text-left
    "
          >
            Our Core Content Marketing Services
          </h3>

          {/* ================= MOBILE SLIDER ================= */}
          <div className="md:hidden">
            <Slider {...sliderSettings}>
              {services.map((item, idx) => (
                <div key={idx} className="px-2">
                  <div
                    className="
                relative p-6 rounded-xl 
                backdrop-blur-xl bg-white/10 
                border border-white/10 
                shadow-[0_0_20px_rgba(0,255,255,0.15)]
                hover:border-[var(--color5)]
                hover:shadow-[0_0_25px_var(--color5)]
                transition-all
                overflow-hidden group
              "
                  >
                    {/* Hologram Scan Lines */}
                    <div className="absolute inset-0 pointer-events-none opacity-40">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="
                      absolute left-0 w-full h-[2px]
                      bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
                      animate-scanCore
                    "
                          style={{
                            top: `${25 + i * 35}px`,
                            animationDelay: `${i * 0.25}s`,
                          }}
                        ></div>
                      ))}
                    </div>

                    <h4 className="text-lg font-semibold text-[var(--color5)] mb-2 relative z-10">
                      {item.title}
                    </h4>
                    <p className="text-gray-200 text-sm relative z-10">
                      {item.description}
                    </p>

                    {/* Glow Border */}
                    <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[var(--color5)] transition-all"></div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* ================= DESKTOP GRID ================= */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="
            relative p-6 rounded-xl 
            backdrop-blur-xl bg-white/5 
            border border-white/10
            shadow-[0_0_20px_rgba(0,255,255,0.15)]
            hover:border-[var(--color5)]
            hover:shadow-[0_0_25px_var(--color5)]
            transition-all duration-300
            overflow-hidden group
          "
              >
                {/* Hologram Scan Lines */}
                <div className="absolute inset-0 pointer-events-none opacity-40">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="
                  absolute left-0 w-full h-[2px]
                  bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
                  animate-scanCore
                "
                      style={{
                        top: `${30 + i * 35}px`,
                        animationDelay: `${i * 0.25}s`,
                      }}
                    ></div>
                  ))}
                </div>

                <h4 className="text-lg font-semibold text-[var(--color5)] mb-2 relative z-10">
                  {item.title}
                </h4>

                <p className="text-gray-200 text-sm relative z-10">
                  {item.description}
                </p>

                {/* Glow Border */}
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[var(--color5)] transition-all"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Animations */}
        <style>{`
    @keyframes scanCore {
      0% { transform: translateX(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }
    .animate-scanCore {
      animation: scanCore 4s linear infinite;
    }
  `}</style>
      </section>

      <section className="py-16 relative overflow-hidden w-11/12 md:w-5/6 mx-auto">
        {/* Background */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none"></div>

        <div className="relative z-10 space-y-8">
          {/* TITLE */}
          <h3
            className="
      text-2xl md:text-3xl font-bold 
      text-[var(--color5)]
      text-center md:text-left
    "
          >
            What Makes BigWig Digital a Top Content Marketing Agency?
          </h3>

          <p className="text-base text-gray-200 md:pr-4 leading-relaxed text-justify">
            We’re not just a content writing team — we’re strategic content
            partners. At BigWig Digital, we combine creativity with the science
            of digital marketing. Here’s why brands across the world trust us:
          </p>

          {/* ================= MOBILE SLIDER ================= */}
          <div className="md:hidden">
            <Slider {...sliderSettings}>
              {agencyPoints.map((item, index) => (
                <div key={index} className="px-2">
                  <div
                    className="
                relative flex flex-col gap-3 p-5 
                rounded-xl 
                backdrop-blur-xl bg-white/10 
                border border-white/10
                shadow-[0_0_20px_rgba(0,255,255,0.15)]
                hover:border-[var(--color5)]
                hover:shadow-[0_0_25px_var(--color5)]
                transition-all overflow-hidden group
              "
                  >
                    {/* Scan Lines */}
                    <div className="absolute inset-0 pointer-events-none opacity-40">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="
                      absolute left-0 w-full h-[2px]
                      bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
                      animate-scanAgency
                    "
                          style={{
                            top: `${25 + i * 40}px`,
                            animationDelay: `${i * 0.25}s`,
                          }}
                        ></div>
                      ))}
                    </div>

                    <div className="text-3xl text-[var(--color5)] drop-shadow-[0_0_10px_var(--color5)]">
                      {item.icon}
                    </div>

                    <h4 className="text-lg font-semibold text-[var(--color5)] relative z-10">
                      {item.title}
                    </h4>

                    <p className="text-sm text-gray-200 relative z-10 text-justify">
                      {item.description}
                    </p>

                    <div
                      className="
                absolute inset-0 rounded-xl 
                border border-transparent 
                group-hover:border-[var(--color5)]
                transition-all
              "
                    ></div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* ================= DESKTOP GRID ================= */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {agencyPoints.map((item, index) => (
              <div
                key={index}
                className="
            relative flex flex-col gap-3 p-6 
            rounded-xl 
            backdrop-blur-xl bg-white/5
            border border-white/10 
            shadow-[0_0_20px_rgba(0,255,255,0.15)]
            hover:border-[var(--color5)]
            hover:shadow-[0_0_25px_var(--color5)]
            transition-all overflow-hidden group
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
                  animate-scanAgency
                "
                      style={{
                        top: `${30 + i * 40}px`,
                        animationDelay: `${i * 0.25}s`,
                      }}
                    ></div>
                  ))}
                </div>

                <div className="text-3xl text-[var(--color5)] drop-shadow-[0_0_10px_var(--color5)]">
                  {item.icon}
                </div>

                <h4 className="text-lg font-semibold text-[var(--color5)] relative z-10">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-200 relative z-10 text-justify">
                  {item.description}
                </p>

                <div
                  className="
            absolute inset-0 rounded-xl border border-transparent 
            group-hover:border-[var(--color5)]
            transition-all
          "
                ></div>
              </div>
            ))}
          </div>

          {/* ANIMATIONS */}
          <style>{`
      @keyframes scanAgency {
        0% { transform: translateX(-100%); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateX(100%); opacity: 0; }
      }
      .animate-scanAgency {
        animation: scanAgency 4s linear infinite;
      }
    `}</style>
        </div>
      </section>

      <section className="py-16 relative overflow-hidden w-11/12 md:w-5/6 mx-auto">
        {/* MATRIX CYBER BACKGROUND */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none"></div>

        <div className="relative z-10 space-y-10">
          {/* TITLE CAPSULE */}
          <div
            className="w-fit mx-auto md:mx-0 px-8 py-3 rounded-full 
        backdrop-blur-xl bg-white/10 border border-white/20 
        shadow-[0_0_20px_rgba(0,255,255,0.25)]"
          >
            <h3 className="text-3xl font-bold text-[var(--color5)] ">
              How We Build Your Content Engine
            </h3>
          </div>

          {/* FUTURISTIC BULLET LIST */}
          <ul className="space-y-6 text-gray-200 text-base md:text-lg max-w-4xl">
            {[
              [
                "Discovery & Goal Mapping:",
                "We understand your goals, brand personality, audience, and business model.",
              ],
              [
                "Topic & SEO Planning:",
                "We use keyword research and competitor analysis to create a strategic content roadmap.",
              ],
              [
                "Creation & Optimization:",
                "Our writers, editors, and SEO experts deliver high-quality, search-ready content.",
              ],
              [
                "Publishing & Promotion:",
                "We help distribute content across platforms to ensure maximum visibility and reach.",
              ],
              [
                "Tracking & Reporting:",
                "Performance is monitored, and strategies are refined to hit goals efficiently.",
              ],
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                {/* Neon bullet */}
                <div className="w-3 h-3 mt-2 rounded-full bg-[var(--color5)] shadow-[0_0_10px_var(--color5)]"></div>

                <span>
                  <strong className="text-[var(--color5)]">{item[0]}</strong>{" "}
                  {item[1]}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA FUTURISTIC CARD */}
          <div
            className="
      relative p-8 rounded-2xl 
      backdrop-blur-xl bg-white/5 
      border border-white/10 
      shadow-[0_0_30px_rgba(0,255,255,0.2)]
      overflow-hidden group
    "
          >
            {/* Hologram Scan Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="
              absolute left-0 w-full h-[2px]
              bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
              animate-engineScan
            "
                  style={{
                    top: `${30 + i * 40}px`,
                    animationDelay: `${i * 0.25}s`,
                  }}
                ></div>
              ))}
            </div>

            <h4
              className="
        text-2xl md:text-3xl font-bold text-[var(--color5)]
        mb-4 relative z-10 text-center md:text-left
      "
            >
              Why Settle for Ordinary Content?
            </h4>

            <p className="text-gray-200 text-base md:text-lg leading-relaxed relative z-10 text-justify">
              Your audience expects value. Your brand deserves visibility.{" "}
              <br />
              Let BigWig Digital help you stand out with content that’s
              strategic, scalable, and search-ready. <br />
              <br />
              Whether you&#39;re a growing startup or an established brand, our{" "}
              <strong>
                <a
                  href="https://www.bigwigdigital.in/"
                  className="text-[var(--color5)] underline"
                >
                  content marketing services
                </a>
              </strong>{" "}
              are designed to fuel your growth one word at a time.
            </p>

            {/* Glow Border */}
            <div
              className="
          absolute inset-0 rounded-2xl
          border border-transparent 
          group-hover:border-[var(--color5)]
          transition-all duration-300
        "
            ></div>
          </div>
        </div>

        {/* ANIMATIONS */}
        <style>{`
    @keyframes engineScan {
      0% { transform: translateX(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }
    .animate-engineScan {
      animation: engineScan 4.5s linear infinite;
    }
  `}</style>
      </section>

      <OurProcess />
      <WhyBigwig />

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

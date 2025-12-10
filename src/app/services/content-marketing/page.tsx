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

function ContentMarketing() {
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
    <div>
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
              className="text-2xl md:text-4xl font-semibold text-[#4e6cba]"
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
      <section className="bg-white py-10">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-2xl md:text-4xl md:font-bold font-semibold text-[var(--primary-color)]">
                World&#39;s Top Content Marketing Company Creating Content That
                Cuts Through the Noise.
              </h2>
              <p className="text-lg text-gray-600 text-justify md:text-left">
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
              <p className="text-lg text-gray-600 text-justify md:text-left">
                We provide informational, motivating, and influencing content,
                ranging from in-depth blogs to witty social media updates. We
                help brands stand out from the competition thanks to our
                in-depth knowledge of both algorithms and human behavior.
              </p>
              <p className="text-lg text-gray-600 text-justify md:text-left">
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

      <section className="bg-[var(--primary-color)]/5  rounded-xl w-11/12 md:w-5/6 mx-auto py-12">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl md:font-bold font-semibold text-[var(--primary-color)] text-center">
            Why Content Marketing Is the Future of Digital Success.
          </h2>

          <p className="text-lg text-gray-600 text-justify">
            Content marketing is more than writing; it’s about building
            authority, trust, and visibility in a crowded digital space. Done
            right, it turns your website into a lead-generating machine, your
            social media into a community hub, and your brand into a thought
            leader.
          </p>

          <p className="text-lg text-gray-600 text-justify">
            With our experience as a reliable{" "}
            <strong>
              <a href="https://www.bigwigdigital.in/">
                content marketing company all over the world
              </a>
            </strong>
            , we understand that effective content needs to do three things:
          </p>

          {/* Mobile: Slider */}
          <div className="md:hidden">
            <Slider {...sliderSettings}>
              {boxes.map((item, index) => (
                <div key={index} className="pr-4">
                  <div className="flex flex-col gap-2 bg-white border-l-4 border-[var(--primary-color)] p-5 rounded-lg shadow-sm hover:shadow-md transition h-full">
                    <div className="text-3xl">{item.icon}</div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid grid-cols-3 gap-4">
            {boxes.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 bg-white border-l-4 border-[var(--primary-color)] p-5 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl">{item.icon}</div>
                <h4 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <p className="text-lg text-gray-600 text-justify">
            And we build strategies that do exactly that, across formats,
            channels, and goals.
          </p>
        </div>
      </section>
      <section className="bg-[var(--primary-color)]/5 rounded-xl w-11/12 md:w-5/6 mx-auto py-12">
        <div className="bg-[var(--primary-color)]/5 rounded-xl">
          <h3 className="text-2xl md:text-3xl md:font-bold font-semibold text-[var(--primary-color)] mb-8 text-center md:text-left">
            Our Core Content Marketing Services
          </h3>

          {/* Mobile View - Slider */}
          <div className="md:hidden">
            <Slider {...sliderSettings}>
              {services.map((item, idx) => (
                <div key={idx} className="px-2">
                  <div className="bg-white w-full p-8 rounded-lg border-l-4 border-[var(--primary-color)] shadow-sm hover:shadow-md transition duration-300">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Desktop View - Grid */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg border-l-4 border-[var(--primary-color)] shadow-sm hover:shadow-md transition duration-300"
              >
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--primary-color)]/5  rounded-xl w-11/12 md:w-5/6 mx-auto py-12">
        <h3 className="text-2xl md:text-3xl md:font-bold font-semibold text-[var(--primary-color)] mb-4 text-center md:text-left">
          What Makes BigWig Digital a Top Content Marketing Agency ?
        </h3>

        <p className="text-base text-gray-700 mb-8 text-justify">
          We’re not just a content writing team, we’re strategic content
          partners. At BigWig Digital, we combine the power of words with the
          science of digital marketing. Here’s why brands across world trust us
        </p>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <Slider {...sliderSettings}>
            {agencyPoints.map((item, index) => (
              <div key={index} className="px-2">
                <div className="flex flex-col gap-3 p-5 rounded-lg bg-white border-l-4 border-[var(--primary-color)] shadow-sm hover:shadow-lg transition duration-300 w-full">
                  <div className="text-3xl">{item.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-700 text-justify">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {agencyPoints.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 p-5 rounded-lg bg-white border-l-4 border-[var(--primary-color)] shadow-sm hover:shadow-lg transition duration-300"
            >
              <div className="text-3xl">{item.icon}</div>
              <h4 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h4>
              <p className="text-sm text-gray-700 text-justify">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-white py-12">
        <div className="w-11/12 md:w-5/6 mx-auto">
          {/* Heading */}
          <h3 className="text-3xl font-bold text-[var(--primary-color)] mb-6 text-center md:text-left">
            How We Build Your Content Engine
          </h3>

          {/* Bullet Points */}
          <ul className="space-y-6 list-disc list-inside text-gray-700 text-base md:text-lg mb-10">
            <li>
              <strong>Discovery & Goal Mapping:</strong> We understand your
              goals, brand personality, audience, and business model.
            </li>
            <li>
              <strong>Topic & SEO Planning:</strong> We use keyword research and
              competitor analysis to create a strategic content roadmap.
            </li>
            <li>
              <strong>Creation & Optimization:</strong> Our writers, editors,
              and SEO experts deliver high-quality, search-ready content.
            </li>
            <li>
              <strong>Publishing & Promotion:</strong> We help distribute
              content across platforms to ensure maximum visibility and reach.
            </li>
            <li>
              <strong>Tracking & Reporting:</strong> Performance is monitored,
              and strategies are refined to meet goals more efficiently.
            </li>
          </ul>

          {/* Final Call-to-Action Text */}
          <div className="bg-[var(--primary-color)]/5 p-6 rounded-xl shadow-sm text-center md:text-left">
            <h4 className="text-2xl md:text-3xl md:font-bold font-semibold text-[var(--primary-color)] mb-4 text-center md:text-left">
              Why Settle for Ordinary Content?
            </h4>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Your audience expects value. Your brand deserves visibility.{" "}
              <br />
              Let BigWig Digital help you stand out with content that’s
              strategic, scalable, and search-ready. <br />
              <br />
              Whether you&#39;re a growing startup or an established brand, our{" "}
              <strong>
                <a href="https://www.bigwigdigital.in/">
                  content marketing services
                </a>
              </strong>{" "}
              are designed to fuel your growth one word at a time.
            </p>
          </div>
        </div>
      </section>

      <OurProcess />
      <WhyBigwig />
      <Footer />
    </div>
  );
}

export default ContentMarketing;

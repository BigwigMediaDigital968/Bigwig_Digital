"use client";
import { TypeAnimation } from "react-type-animation";
import Footer from "../../../../components/Footer";
import Nav from "../../../../components/Nav";
import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
import hero from "../../../../Assets/Services hero/website.jpg";
import web from "../../../../Assets/services/1.jpg";
import Slider from "react-slick";

import ContactForm from "../../../../components/ContactForm";
import Image from "next/image";
import GetInTouch from "../../../../components/GetInTouch";
import ButtonFill from "../../../../components/Button";
import PopupForm from "../../../../components/PopupForm";
import { SetStateAction, useState } from "react";
const sections = [
  {
    title: "Responsive Web Design",
    content:
      "As a leading web design company in Delhi, we specialize in creating fully responsive websites that look great and work smoothly on every device. Your audience enjoys a seamless browsing experience across mobile, tablet, and desktop.",
  },
  {
    title: "Static Website Design",
    content:
      "We design clean, modern, and user-friendly static websites that highlight your brand’s strengths. Our designs ensure clarity, fast loading, and smooth navigation—ideal for businesses wanting a professional online presence.",
  },
  {
    title: "Dynamic Website Design",
    content:
      "Our expert designers create interactive, dynamic websites with custom features, smart integrations, and brand-focused elements. We make your site more engaging, functional, and responsive to user behavior.",
  },
  {
    title: "Startup Website Design",
    content:
      "We build creative, modern, and scalable websites tailored to the unique needs of startups. Our designs help communicate your brand story clearly while showcasing your services and products effectively.",
  },
  {
    title: "Website Re-Design",
    content:
      "We transform outdated websites into visually appealing, high-performing platforms. Our redesign services help refresh your brand identity while improving user experience, speed, and overall performance.",
  },
  {
    title: "Corporate Website Design",
    content:
      "We design powerful, enterprise-level corporate websites with intuitive layouts and strong branding. Our designs support complex operations, large data structures, and high traffic—ideal for growing companies.",
  },
  {
    title: "Landing Page Design",
    content:
      "Our high-converting landing pages are crafted with compelling messaging, strong branding elements, and clear calls to action. Designed specifically to boost conversions and capture qualified leads.",
  },
  {
    title: "SEO-Friendly Website Design",
    content:
      "We build SEO-friendly websites optimized for search visibility. From clean coding to fast loading and structured content, our websites help you rank higher and gain more organic traffic.",
  },
  {
    title: "PSD to HTML Design",
    content:
      "We convert your Photoshop designs into fast, responsive, and pixel-perfect HTML pages. Our coding ensures structure, speed, and accuracy while retaining the original design aesthetics.",
  },
];

const customSections = [
  {
    title: "100% Mobile Responsive Website",
    content:
      "With mobile devices accounting for nearly 65.49% of global website traffic (HubSpot), having a fully mobile-responsive website is essential. We ensure your website delivers a seamless experience across all screen sizes, helping you reach a wider audience and keep users engaged on the go.",
  },
  {
    title: "A Customized Website",
    content:
      "According to a survey by Magnetize Studio, 94% of first impressions are influenced by website design. A customized website helps your brand stand out, communicate clearly, and create an immediate positive impact on your audience.",
  },
  {
    title: "A User-Friendly Website",
    content:
      "A study by Harris Interactive reveals that 89% of users switch to a competitor after encountering poor usability. A user-friendly design builds trust, keeps visitors engaged, and prevents them from leaving your site.",
  },
  {
    title: "A Well-Designed Website",
    content:
      "A WebFX study shows that 75% of users judge a company's credibility based on its website design. A well-designed website helps establish authority, build trust, and make a powerful first impression.",
  },
  {
    title: "Your Website Reflects Your Brand",
    content:
      "A website is more than a digital presence—it represents your brand identity, values, and offerings. If you're searching for the best “website designer near me,” we create custom-designed websites that bring your vision to life.",
  },
  {
    title: "We Shape Digital Experiences",
    content:
      "We go beyond traditional web design—we shape connected, meaningful experiences that empower brands with extraordinary websites that truly stand out.",
  },
];

const benefitSections = [
  {
    title: "Customized Web Design",
    content:
      "Every business has unique goals, so we create custom website designs tailored to your needs. Our intuitive interfaces and feature-rich layouts help you connect seamlessly with customers while representing your brand identity.",
  },
  {
    title: "Technical Expertise",
    content:
      "Our experienced professionals provide complete technical support, ensuring smooth performance, quick issue resolution, and up-to-date industry best practices.",
  },
  {
    title: "Scalability",
    content:
      "We build websites with a future-ready approach, allowing your online presence to grow and evolve as your business expands.",
  },
  {
    title: "Consistency & Branding",
    content:
      "We maintain consistent brand identity across your website by using your color scheme, typography, logos, taglines, and other brand elements.",
  },
  {
    title: "Cross-Browser Compatibility",
    content:
      "We ensure your website works smoothly across all major browsers, offering users a consistent and reliable browsing experience.",
  },
  {
    title: "UI & UX",
    content:
      "We design visually appealing interfaces paired with user-friendly navigation to ensure an engaging and intuitive browsing experience.",
  },
  {
    title: "Faster Load Times",
    content:
      "Our websites are optimized for high performance, delivering fast load times, reduced bounce rates, and improved visitor satisfaction.",
  },
  {
    title: "Ongoing Support & Maintenance",
    content:
      "We offer round-the-clock support and maintenance to ensure your website remains secure, fully updated, and free of technical issues.",
  },
];

const faqs = [
  {
    q: "Why should you hire a Web Design Company in Delhi?",
    a: "Partnering with a professional web design company helps increase website traffic, enhance user engagement, and support business growth. A high-quality website is more visually appealing, easier to navigate, and significantly improves user experience. If you're searching for the best website designers near me, our team delivers custom-designed solutions tailored to your brand.",
  },
  {
    q: "How do I hire a web design company?",
    a: `To hire a reliable web design company, follow these steps:
        • Set a clear project budget.
        • Create a detailed job description.
        • Review portfolios and case studies.
        • Prepare interview questions to assess skills.
        • Finalize the contract and define the scope properly.`,
  },
  {
    q: "How much time does website design take?",
    a: "A typical website takes about 4 to 8 weeks depending on design complexity, content readiness, and revision cycles. More advanced custom websites may require additional time.",
  },
  {
    q: "How much does a custom website design cost?",
    a: "The total cost depends on page count, design complexity, functionalities, and integrations. After the first consultation, we share a clear, transparent pricing estimate.",
  },
  {
    q: "How can I get started with your website design services?",
    a: "Simply reach out via our website, phone, or email. We’ll schedule a discussion to understand your goals and begin crafting the perfect strategy for your website.",
  },
  {
    q: "What important features do you consider when designing a web page?",
    a: "We strategically incorporate branding elements, colors, typography, infographics, navigation structure, white spacing, and layout design to enhance credibility and improve conversions.",
  },
  {
    q: "What is the best website design company?",
    a: "The best website design company provides custom solutions at fair prices and blends creativity with technical expertise. Their work should reflect the brand identity clearly and professionally.",
  },
  {
    q: "Do you provide ongoing assistance and protection after the website is launched?",
    a: "Yes, we offer complete post-launch care including updates, backups, security checks, troubleshooting, and continuous performance optimization.",
  },
  {
    q: "Will I be able to update the website myself once it’s live?",
    a: "Absolutely. Our websites use user-friendly CMS platforms like WordPress, allowing you to update content easily. We also provide training to help you manage everything confidently.",
  },
  {
    q: "Why is your agency the top choice for website design in Delhi?",
    a: "We focus on innovation, strategy, and customer satisfaction. Our designers follow the latest trends and build websites optimized for usability, speed, and conversions—aligned with your business goals.",
  },
];

function Website() {
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
      <Nav />

      <title>Website Design & Development</title>
      <meta
        name="description"
        content="Build user-friendly and high-converting websites with our expert design and development team."
      />
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/website-design-development"
      />

      <section
        className="relative bg-cover bg-center bg-no-repeat py-10 px-4"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="bg-black/60 absolute inset-0 z-0" />

        <div className="relative z-10 w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 md:pr-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-white leading-snug">
              Take your digital experience to the next level with our fresh,
              innovative Web Design solutions.
            </h2>

            <p className="text-base md:text-lg max-w-2xl text-white/90 text-justify">
              We’re a leading website design company in Delhi NCR, creating
              custom web experiences that truly fit your business needs. Our
              team of skilled professionals works closely with you to enhance
              your digital presence and bring your vision to life. We craft
              high-quality, impactful websites that leave a lasting impression,
              attract more visitors, and help you achieve better ROI
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

      <section className="py-12">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-12">
          {/* Two-column layout */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Text Block */}
            <div className="space-y-6 text-white leading-relaxed">
              <h2 className="text-xl font-semibold text-[var(--color5)] mb-4">
                Give your brand a powerful online presence with personalized web
                design solutions
              </h2>
              {/* Heading */}
              <h1 className=" text-2xl md:text-3xl font-semibold  mb-2 ">
                Best Website Designing Company in Delhi NCR
              </h1>
              <p className="text-justify">
                As a top web design company in Delhi, we know exactly what it
                takes to create websites that attract attention and bring in
                more visitors. Our experienced designers craft custom websites
                tailored to your industry and aligned with your business goals.
              </p>

              <p className="text-justify">
                So if you&#39;re searching for the best{" "}
                <strong>“website designer near me”</strong>, we’re here to
                deliver optimized digital experiences that help your brand grow,
                connect, and convert.
              </p>
            </div>

            {/* Right Image Block */}
            <div>
              <Image
                src={web}
                alt="Best Web Development Company"
                className="w-full h-[50vh] rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 w-11/12 md:w-5/6 mx-auto relative overflow-hidden">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color5)] mb-4">
            Web Design Company in Delhi
          </h2>

          <h3 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4">
            Top Services By The Best Web Designing Company In Delhi
          </h3>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed">
            We’re a trusted website design company in Delhi, helping businesses
            create powerful, enterprise-level websites that attract high traffic
            and meaningful engagement. Whether you need a brand-new website or
            want to revamp your existing one, our team is here to bring your
            digital vision to life.
          </p>
        </div>

        {/* CONTAINER */}
        <div className="relative z-10">
          {/* ========= MOBILE SLIDER ========= */}
          <div className="block lg:hidden">
            <Slider {...settings}>
              {sections.map((item, index) => (
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
            {sections.map((item, index) => (
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

      <section className="py-12 w-11/12 md:w-5/6 mx-auto relative overflow-hidden">
        {/* ================= HEADINGS ================= */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-[var(--color5)] mb-4">
            Website Designing Company in Delhi
          </h2>

          <h3 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4">
            Why Do You Need Custom Web Designs for Your Business?
          </h3>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed">
            Custom-designed websites help you connect with your audience and
            create a strong first impression. A well-crafted, feature-rich
            website boosts engagement and improves ROI. As one of the best
            website designing companies in Delhi NCR, we know what it takes to
            build a truly professional and impactful online presence.
          </p>
        </div>

        {/* ================= CARD SECTION ================= */}
        <div className="relative mb-10 z-10">
          {/* ================= MOBILE SLIDER ================= */}
          <div className="block lg:hidden">
            <Slider {...settings}>
              {customSections.map((item, index) => (
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
            {customSections.map((item, index) => (
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

          {/* Animation Keyframes */}
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
        {/* ================= HEADINGS ================= */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-[var(--color5)] mb-4">
            Website Design Company Near Me
          </h2>

          <h3 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4">
            Benefits of Hiring A Web Design Company
          </h3>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed">
            As one of the leading website designing companies in Delhi NCR, we
            create visually appealing, feature-rich websites with smooth and
            user-friendly navigation. Our expertise spans static, dynamic,
            e-commerce, enterprise, WordPress, and startup websites. Known for
            being affordable and reliable, we deliver solutions that fit
            businesses of all sizes. Here are the key benefits of choosing our
            web design services:
          </p>
        </div>

        {/* ================= CARD SECTION ================= */}
        <div className="relative mb-10 z-10">
          {/* ================= MOBILE SLIDER ================= */}
          <div className="block lg:hidden">
            <Slider {...settings}>
              {benefitSections.map((item, index) => (
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
            {benefitSections.map((item, index) => (
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

          {/* Animation Keyframes */}
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
        {/* =================== HEADINGS =================== */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-[var(--color5)] mb-4">
            Website Designer Near Me
          </h2>

          <h3 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4">
            What Does the Best Website Designing Agency in Delhi Do?
          </h3>
        </div>

        {/* =================== MAIN GLASS BOX =================== */}
        <div
          className="
      relative rounded-2xl p-8 md:p-12 
      backdrop-blur-xl bg-white/5 
      border border-white/10 
      shadow-[0_0_25px_rgba(0,255,255,0.15)] 
      overflow-hidden
    "
        >
          {/* Background Scan Bars */}
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="
            absolute left-0 w-full h-[2px]
            bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
            animate-sectionScan
          "
                style={{
                  top: `${50 + i * 60}px`,
                  animationDelay: `${i * 0.25}s`,
                }}
              ></div>
            ))}
          </div>

          {/* LEFT GLOW STRIP */}
          <div className="absolute left-0 top-0 h-full w-[6px] bg-[var(--color5)] shadow-[0_0_20px_var(--color5)]"></div>

          {/* =================== CONTENT =================== */}
          <div className="relative z-10 grid md:grid-cols-2 gap-10">
            {/* LEFT TEXT BLOCK */}
            <div className="space-y-6 text-gray-200 leading-relaxed">
              <p>
                A website should be designed with careful thought and purpose so
                it can function at its highest potential. Only a skilled and
                reliable web designing company in Delhi can help you build a
                flawless, engaging website with fast loading speeds and smooth,
                error-free performance.
              </p>

              <p>
                As a leading website design agency in South Delhi, we ensure
                your website is responsive, visually appealing, easy to
                navigate, mobile-friendly, and perfectly aligned with your
                brand.
              </p>

              <p>
                No matter what industry you belong to—real estate,
                manufacturing, education, pharmaceuticals, travel, fitness
                coaching, legal services, and more—we help you build an
                impressive online presence tailored to your specific needs.
              </p>

              <p>
                Through our strategic design process, we create layouts that
                reflect your brand image and communicate your message clearly.
                Our solutions are cost-effective, innovative, and accessible for
                businesses of all sizes across Delhi NCR.
              </p>
            </div>

            {/* RIGHT FEATURE LIST */}
            <div
              className="
          p-6 rounded-2xl 
          bg-black/40 backdrop-blur-lg
          border border-white/10 
          shadow-[0_0_20px_rgba(0,255,255,0.1)]
          space-y-4
        "
            >
              <h4 className="text-xl font-semibold text-[var(--color5)] mb-4">
                Key Features Included:
              </h4>

              <ul className="space-y-3">
                {[
                  "Customized Web Experiences",
                  "Enterprise-Level Professional Websites",
                  "User-Friendly & Innovative Designs",
                  "Scalable & Feature-Packed",
                  "Fully Responsive & Secure",
                  "24×7 Support & Maintenance",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span
                      className="
                  w-3 h-3 mt-1 rounded-full 
                  bg-[var(--color5)] 
                  shadow-[0_0_10px_var(--color5)]
                "
                    ></span>
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* GLOW BORDER HOVER EFFECT */}
          <div className="absolute inset-0 rounded-2xl border border-transparent hover:border-[var(--color5)] transition-all duration-300"></div>

          {/* SCAN ANIMATION */}
          <style>{`
      @keyframes sectionScan {
        0% { transform: translateX(-100%); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateX(100%); opacity: 0; }
      }
      .animate-sectionScan {
        animation: sectionScan 6s linear infinite;
      }
    `}</style>
        </div>

        {/* CTA BUTTON */}
        <div className="flex justify-center mt-12">
          <ButtonFill
            text="Get Started Today"
            onClick={() => setIsPopupOpen(true)}
          />
        </div>
      </section>

      <section className="py-12 w-11/12 md:w-5/6 mx-auto relative overflow-hidden">
        {/* =================== HEADINGS =================== */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] tracking-wide">
            Why Choose Bigwig Media Digital Web Designing Experts For Your
            Business?
          </h2>
        </div>

        {/* =================== MAIN CONTENT WRAPPER =================== */}
        <div
          className="
      relative rounded-2xl p-8 md:p-12 
      backdrop-blur-xl bg-white/5 
      border border-white/10 
      shadow-[0_0_25px_rgba(0,255,255,0.15)] 
      overflow-hidden
    "
        >
          {/* Scan Lines */}
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="
            absolute left-0 w-full h-[2px]
            bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
            animate-scanBars
          "
                style={{
                  top: `${60 + i * 60}px`,
                  animationDelay: `${i * 0.3}s`,
                }}
              ></div>
            ))}
          </div>

          {/* LEFT GLOW STRIP */}
          <div className="absolute left-0 top-0 h-full w-[6px] bg-[var(--color5)] shadow-[0_0_25px_var(--color5)]"></div>

          {/* =================== GRID LAYOUT =================== */}
          <div className="relative z-10 grid md:grid-cols-2 gap-12">
            {/* LEFT SIDE — FULL CONTENT BLOCK */}
            <div className="space-y-6 text-gray-200 leading-relaxed">
              <p>
                A website is often the first touchpoint between your brand and
                your online audience. It’s where first impressions are formed
                and where digital credibility begins. A well-crafted website
                strengthens your marketing presence and builds trust, influence,
                and recognition in today’s competitive online space.
              </p>

              <p>
                As a trusted web design company in Delhi, we take your vision
                seriously. Our team blends creativity with advanced technology
                to deliver modern, high-performing websites that enhance your
                digital identity. With years of industry expertise, we create
                professional designs that exceed expectations.
              </p>

              <p>
                Our passion for design and attention to detail have made us a
                preferred web design agency in Delhi. We build visually rich,
                smooth-functioning websites that remove concerns about slow
                loading, cluttered layouts, or poor navigation. Every element is
                crafted to engage users and reflect your brand’s personality.
              </p>

              <p>
                As a leading website designing agency in South Delhi, we support
                businesses across industries—eCommerce, manufacturing, services,
                education, and more. If you want to refresh your existing
                website, our redesign experts can transform it into a modern,
                high-impact digital platform.
              </p>
            </div>

            {/* RIGHT SIDE — FEATURE LIST PANEL */}
            <div
              className="
          p-6 rounded-2xl 
          bg-black/40 backdrop-blur-lg
          border border-white/10 
          shadow-[0_0_20px_rgba(0,255,255,0.1)]
          space-y-5 h-fit relative overflow-hidden
        "
            >
              {/* Inside Scan Bars */}
              <div className="absolute inset-0 opacity-30 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="
                absolute left-0 w-full h-[2px]
                bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
                animate-scanBars
              "
                    style={{
                      top: `${40 + i * 50}px`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  ></div>
                ))}
              </div>

              <h4 className="text-xl font-semibold text-[var(--color5)]">
                What We Deliver:
              </h4>

              <ul className="space-y-4 relative z-10">
                {[
                  "A creative and personalized design strategy",
                  "Modern, adaptive, and innovative layouts",
                  "Meaningful and value-driven content",
                  "An easy-to-use CMS for smooth management",
                  "Scalable features that grow with your business",
                  "Complete testing for flawless performance",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span
                      className="
                  w-3 h-3 mt-1 rounded-full 
                  bg-[var(--color5)] 
                  shadow-[0_0_12px_var(--color5)]
                "
                    ></span>
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Right Glow Bar */}
              <div className="absolute right-0 top-0 h-full w-[5px] bg-[var(--color5)] opacity-70 shadow-[0_0_25px_var(--color5)]"></div>
            </div>
          </div>

          {/* Hover Glow Border */}
          <div className="absolute inset-0 rounded-2xl border border-transparent hover:border-[var(--color5)] transition-all duration-300"></div>

          {/* ANIMATIONS */}
          <style>{`
      @keyframes scanBars {
        0% { transform: translateX(-100%); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateX(100%); opacity: 0; }
      }
      .animate-scanBars {
        animation: scanBars 6s linear infinite;
      }
    `}</style>
        </div>

        {/* CTA BUTTON */}
        <div className="flex justify-center mt-12">
          <ButtonFill
            text="Get Started Today"
            onClick={() => setIsPopupOpen(true)}
          />
        </div>
      </section>

      <section className="py-12 w-11/12 md:w-5/6 mx-auto relative overflow-hidden">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] tracking-wide">
            Technologies We Work On
          </h2>
        </div>

        {/* Technologies Grid */}
        <div
          className="
      grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
      gap-8 relative z-10
    "
        >
          {[
            {
              name: "HTML",
              img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            },
            {
              name: "CSS",
              img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            },
            {
              name: "JavaScript",
              img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            },
            {
              name: "React",
              img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            },
            {
              name: "Next.js",
              img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
            },
            {
              name: "Tailwind CSS",
              img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
            },
            {
              name: "TypeScript",
              img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            },
            {
              name: "Node.js",
              img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            },
            {
              name: "GSAP",
              img: "https://res.cloudinary.com/dcq2oziz4/image/upload/v1765007605/gsap_1_lkfznz.png",
            },
            {
              name: "AOS",
              img: "https://res.cloudinary.com/dcq2oziz4/image/upload/v1765007605/github_octocat_z05vbl.png",
            },
            {
              name: "Framer Motion",
              img: "https://res.cloudinary.com/dcq2oziz4/image/upload/v1765007711/framer-motion_ohdae2.svg",
            },
            {
              name: "Vite",
              img: "https://res.cloudinary.com/dcq2oziz4/image/upload/v1765007852/logo_eyrkoc.svg",
            },
            {
              name: "MongoDB",
              img: "https://www.svgrepo.com/show/331488/mongodb.svg",
            },
            {
              name: "WordPress",
              img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
            },
            {
              name: "Shopify",
              img: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
            },
          ].map((tech, index) => (
            <div
              key={index}
              className="
          group relative p-6 rounded-2xl 
          backdrop-blur-xl bg-white/5 
          border border-white/10 
          shadow-[0_0_25px_rgba(0,255,255,0.1)]
          hover:border-[var(--color5)] 
          hover:shadow-[0_0_30px_var(--color5)]
          transition-all duration-300 
          flex flex-col items-center
        "
            >
              {/* Glow Line Scan */}
              <div className="absolute inset-0 pointer-events-none opacity-40">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="
                absolute left-0 w-full h-[2px]
                bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
               
              "
                  ></div>
                ))}
              </div>

              {/* Logo */}
              <img
                src={tech.img}
                alt={tech.name}
                className="w-12 h-12 mb-3 relative z-10 object-contain"
              />

              {/* Name */}
              <p className="text-gray-200 text-sm font-medium relative z-10 tracking-wide">
                {tech.name}
              </p>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[var(--color5)] transition-all"></div>
            </div>
          ))}
        </div>

        {/* Scan Animation */}
        <style>{`
    @keyframes techScan {
      0% { transform: translateX(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }
    .animate-techScan {
      animation: techScan 5s linear infinite;
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

export default Website;

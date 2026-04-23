"use client";
import Footer from "../../../../components/Footer";
import Nav from "../../../../components/Nav";
import hero from "../../../../Assets/Services hero/website.jpg";
import web from "../../../../Assets/services/1.jpg";
import Slider from "react-slick";

import ContactForm from "../../../../components/ContactForm";
import Image from "next/image";
import GetInTouch from "../../../../components/GetInTouch";
import ButtonFill from "../../../../components/Button";
import PopupForm from "../../../../components/PopupForm";
import { SetStateAction, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Client from "../../../app/clients/Client";
import Partners from "../../../../components/Partners";

const sections = [
  {
    title: "Responsive Web Design",
    content: (
      <>
        As a leading web design company in South Delhi, we specialize in
        creating fully responsive websites that look great and work smoothly on
        every device. Your audience enjoys a seamless browsing experience across
        mobile, tablet, and desktop.
      </>
    ),
  },
  {
    title: "Static Website Design",
    content:
      "We design clean, modern, and user-friendly static websites that highlight your brand’s strengths. Our designs ensure clarity, fast loading, and smooth navigation - ideal for businesses wanting a professional online presence.",
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
      "We design powerful, enterprise-level corporate websites with intuitive layouts and strong branding. Our designs support complex operations, large data structures, and high traffic - ideal for growing companies.",
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
      "With mobile devices accounting for nearly 65.49% of global website traffic, having a fully mobile-responsive website is essential. We ensure your website delivers a seamless experience across all screen sizes, helping you reach a wider audience and keep users engaged on the go.",
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
      "A website is more than a digital presence - it represents your brand identity, values, and offerings. If you're searching for the best “website designer near me,” we create custom-designed websites that bring your vision to life.",
  },
  {
    title: "We Shape Digital Experiences",
    content:
      "We go beyond traditional web design - we shape connected, meaningful experiences that empower brands with extraordinary websites that truly stand out.",
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
      "We maintain a consistent brand identity across your website by using your color scheme, typography, logos, taglines, and other brand elements.",
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

type Review = {
  id: number;
  name: string;
  time: string;
  avatarLetter: string;
  rating: number; // 1-5
  text: string;
};

const reviews: Review[] = [
  {
    id: 1,
    name: "Ravinder Bisala",
    time: "3 days ago",
    avatarLetter: "R",
    rating: 5,
    text: "I recently partnered with bigwig media digital for my business online campaign and I must say they truly live up to their reputation. They created the best website which helped us a lot in boosting our business.",
  },
  {
    id: 2,
    name: "Amit Gambhir",
    time: "5 days ago",
    avatarLetter: "A",
    rating: 5,
    text: "We wanted a complete digital marketing strategy for our startup, and BigWig delivered beyond expectations. From website design and SEO to content marketing and paid ads, they covered everything. The best part is their personalized approach—no generic strategies, just tailor-made solutions. Thank you guys.",
  },
  {
    id: 3,
    name: "Chetan Pandey",
    time: "1 week ago",
    avatarLetter: "C",
    rating: 5,
    text: "We have been working with Big Wig Media digital for nearly a year and their Website and SEO combination strategy is giving us steady results. Unlike agencies that over promise they deliver consistent improvements and focus on long term growth.",
  },
  {
    id: 4,
    name: "Aparajita Pandey",
    time: "1 week ago",
    avatarLetter: "A",
    rating: 5,
    text: "I liked how Big Wig media digital took time to analyse our competitors before suggesting a plan. Their Website Creation services helped our restaurant.",
  },
  {
    id: 5,
    name: "Vaibhav Soni",
    time: "1 week ago",
    avatarLetter: "V",
    rating: 5,
    text: "They are professional, experienced and enthusiastic in their profession. Best digital marketing services in all verticals specially website creation.",
  },
  {
    id: 6,
    name: "Eshaan Aggarwal",
    time: "2 weeks ago",
    avatarLetter: "E",
    rating: 5,
    text: "What I loved most is that they didn’t offer me a one-size-fits-all plan. The website they created was tailor-made for my startup’s goals, and it worked beautifully.",
  },
  {
    id: 7,
    name: "Suresh kumar",
    time: "3 weeks ago",
    avatarLetter: "S",
    rating: 5,
    text: "Their transparency and data-driven strategies won me over. They have the best website creation strategies. I can easily check and manage my data at the backend.",
  },
  {
    id: 8,
    name: "Chesta Gupta",
    time: "1 month ago",
    avatarLetter: "C",
    rating: 5,
    text: "I have an ecommerce business for which I took help from Bigwig Media Digital for an online e-commerce store setup. They have given me the best solution for it and now my website is booming.",
  },
];

function Website({ value }: { value: number }) {
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

  const trackRef = useRef<HTMLDivElement | null>(null);
  const [page, setPage] = useState(0);

  // responsive cards per view
  const [perView, setPerView] = useState(4);

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 640) return setPerView(1); // mobile
      if (w < 1024) return setPerView(2); // tablet
      return setPerView(4); // desktop
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const pagesCount = useMemo(
    () => Math.max(1, Math.ceil(reviews.length / perView)),
    [perView],
  );

  // keep page valid when perView changes
  useEffect(() => {
    setPage((p) => Math.min(p, pagesCount - 1));
  }, [pagesCount]);

  const goTo = (p: number) => setPage(Math.max(0, Math.min(p, pagesCount - 1)));
  const next = () => goTo(page + 1);
  const prev = () => goTo(page - 1);

  // smooth translate by page (each page = 100% width)
  const translateX = `-${page * 100}%`;

  return (
    <div className="bg-[var(--color1)]">
      <Nav />

      {/* SEO Meta Deta */}
      <title>Website Development Company in Delhi | Bigwig Media Digital</title>

      <meta
        name="title"
        content="Website Development Company in Delhi | Bigwig Media Digital"
      />

      <meta
        name="description"
        content="Need a Website Development Company in Delhi? We build fast, responsive & SEO-friendly websites. Custom | E-Commerce | CMS. Get a Free Quote!"
      />

      <meta
        name="keywords"
        content="Website Development Company in Delhi, Web Design Company in Delhi, Website Designing Company in Delhi, Website Development Company in Delhi NCR, Web Development Services Delhi, Website Designer Near Me, Website Development Company in South Delhi, North Delhi, East Delhi, West Delhi"
      />

      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/website-development-company-in-delhi"
      />

      {/* <!-- Open Graph Meta Tags --> */}
      <meta
        property="og:title"
        content="Website Development Company in Delhi | Bigwig Media Digital"
      />
      <meta
        property="og:description"
        content="Trusted website development company in Delhi offering responsive, SEO-friendly and high-performance business websites."
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/dyum0r6gf/image/upload/v1770032924/WhatsApp_Image_2026-02-02_at_4.12.04_PM_1_ditcz0.jpg"
      />
      <meta
        property="og:url"
        content="https://www.bigwigmediadigital.com/services/website-development-company-in-delhi"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Bigwig Media Digital" />
      <meta property="og:locale" content="en_IN" />

      {/* Page Section 1 */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-10 px-4"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="bg-black/60 absolute inset-0 z-0" />

        <div className="relative z-10 w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 md:pr-8">
            <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight tracking-tight">
              Best Website Development Company in Delhi
              <span className="block mt-4 text-base md:text-xl lg:text-2xl font-normal text-gray-300 leading-relaxed max-w-2xl">
                Take your digital experience to the next level with our fresh,
                innovative solutions
              </span>
            </h1>

            <p className="text-base md:text-lg max-w-2xl text-white/90 text-justify">
              We are a trusted Website Development Company in Delhi, helping
              businesses build a strong online presence with modern and
              effective website solutions. As a leading website design company
              in Delhi NCR, we create websites that are tailored to your
              business goals and audience needs.
            </p>
            <p className="text-base md:text-lg max-w-2xl text-white/90 text-justify -mt-4">
              Our team at{" "}
              <Link href="/" className="text-[var(--color5)]  hover:opacity-90">
                {" "}
                Bigwig Media Digital{" "}
              </Link>
              focuses on creating user-friendly, fast, and SEO-ready websites
              that not only look good but also perform well. Whether you are
              searching for a reliable partner nearby or planning to grow your
              business online, we help you attract the right audience and
              generate better results.
            </p>

            <ButtonFill
              onClick={() => setIsPopupOpen(true)}
              text="Request a Free Website Consultation"
            />
          </div>

          {/* Right Form */}
          <ContactForm singleService="Website Development" />
        </div>
      </section>

      <section className="py-12">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-12">
          {/* Two-column layout */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Text Block */}
            <div className="space-y-6 text-white leading-relaxed">
              {/* <h2 className="text-xl font-semibold text-[var(--color5)] mb-4">
                Give your brand a powerful online presence with personalized web
                design solutions
              </h2> */}
              {/* Heading */}
              <h2 className=" text-2xl md:text-3xl font-semibold  mb-2 ">
                Best Website Development Company in Delhi NCR
              </h2>
              <p className="text-justify">
                As an experienced{" "}
                <strong>Website Development Company in Delhi NCR</strong>, we
                understand how to build websites that are both visually
                appealing and performance-driven. Our approach is simple -
                understand your business, plan strategically, and deliver a
                website that converts visitors into customers.
              </p>

              <p className="text-justify">
                Many businesses today search for a dependable{" "}
                <strong>website development company near me</strong>, and we
                ensure that our solutions meet both local and global business
                needs with the right balance of design and functionality.
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
      <Partners />

      {/* Service showcase section */}
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
            We provide complete website design and development services for
            businesses of all sizes. From creating new websites to improving
            existing ones, our team ensures your online presence is strong,
            professional, and result-oriented.
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
                    <h4 className="text-xl font-semibold text-[var(--color5)] tracking-wide relative z-10">
                      {item.title}
                    </h4>

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

      {/* Custom Web Designs section */}
      <section className="py-12 w-11/12 md:w-5/6 mx-auto relative overflow-hidden">
        {/* ================= HEADINGS ================= */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-[var(--color5)] mb-4">
            Website Designing Company in Delhi
          </h2>

          <h3 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4">
            Why Do You Need Custom Web Designs for Your Business?
          </h3>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-4">
            Custom-designed websites help you connect with your audience and
            create a strong first impression. A well-crafted, feature-rich
            website boosts engagement and improves ROI. As one of the best
            website development companies in Delhi NCR, we know what it takes to
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
                    <h4 className="text-xl font-semibold text-[var(--color5)] tracking-wide relative z-10">
                      {item.title}
                    </h4>

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
            text="Book a Website Strategy Call"
            onClick={() => setIsPopupOpen(true)}
          />
        </div>
      </section>

      {/* Hiring A Web Design Company Section */}
      <section className="py-12 w-11/12 md:w-5/6 mx-auto relative overflow-hidden">
        {/* ================= HEADINGS ================= */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-[var(--color5)] mb-4">
            Website Design Company Near Me
          </h2>

          <h3 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4">
            Benefits of Hiring A Website Development Company in Delhi
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
                    <h4 className="text-xl font-semibold text-[var(--color5)] tracking-wide relative z-10">
                      {item.title}
                    </h4>

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
                  <h4 className="text-xl font-semibold text-[var(--color5)] tracking-wide relative z-10">
                    {item.title}
                  </h4>

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
            text="Get Instant Website Consultation"
            onClick={() => setIsPopupOpen(true)}
          />
        </div>
      </section>

      {/* Best Website Designing Agency */}
      {/**
       * 
       * <section className=" py-12 w-11/12 md:w-5/6 mx-auto relative overflow-hidden">
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-[var(--color5)] mb-4">
            Website Designer Near Me
          </h2>

          <h3 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4">
            What Does the Best Website Designing Agency in Delhi Do?
          </h3>
        </div>

        <div
          className="
      relative rounded-2xl p-8 md:p-12 
      backdrop-blur-xl bg-white/5 
      border border-white/10 
      shadow-[0_0_25px_rgba(0,255,255,0.15)] 
      overflow-hidden
    "
        >
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


          <div className="relative z-10 grid md:grid-cols-2 gap-10">
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
                No matter what industry you belong to real estate,
                manufacturing, education, pharmaceuticals, travel, fitness
                coaching, legal services, and more we help you build an
                impressive online presence tailored to your specific needs.
              </p>

              <p>
                Through our strategic design process, we create layouts that
                reflect your brand image and communicate your message clearly.
                Our solutions are cost-effective, innovative, and accessible for
                businesses of all sizes across Delhi NCR.
              </p>
            </div>

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

          <div className="absolute inset-0 rounded-2xl border border-transparent hover:border-[var(--color5)] transition-all duration-300"></div>

          <style>{`
      @keyframes sectionScan {
        0% { transform: translateX(-100%); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateX(100%); opacity: 0; }
      }
      .animate-sectionScan {
        animation: sectionScan 6s linear infinite;
      } */}
      {/* `}</style>
        </div>

        <div className="flex justify-center mt-12">
          <ButtonFill
            text="Get Instant Website Consultation"
            onClick={() => setIsPopupOpen(true)}
          />
        </div>
      </section>
       */}

      <Client />

      {/* Why choose section */}
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
            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p>
                A website is often the first touchpoint between your brand and
                your online audience. It’s where first impressions are formed
                and where digital credibility begins. A well-crafted website
                strengthens your marketing presence and builds trust, influence,
                and recognition in today’s competitive online space.
              </p>

              <p>
                As a trusted website development company in Delhi,{" "}
                <Link
                  href="/"
                  className="text-[var(--color5)]  hover:opacity-90"
                >
                  Bigwig Media Digital
                </Link>{" "}
                takes your vision seriously. Our team blends creativity with
                advanced technology to deliver modern, high-performing websites
                that enhance your digital identity. With years of industry
                expertise, we create professional designs that exceed
                expectations.
              </p>

              <p>
                Our passion for design and attention to detail have made us a
                preferred web design agency in Delhi. We build visually rich,
                smooth-functioning websites that remove concerns about slow
                loading, cluttered layouts, or poor navigation. Every element is
                crafted to engage users and reflect your brand’s personality.
              </p>

              <p>
                As a leading website Development company in Delhi, we support
                businesses across industries-eCommerce, manufacturing, services,
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
            text="Start Your Website in 7 Days"
            onClick={() => setIsPopupOpen(true)}
          />
        </div>
      </section>

      {/* Google Review Section */}
      <section className="w-full">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] tracking-wide text-center">
            What our customers say
          </h2>

          <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-5">
            {/* Header row */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                {/* Google "G" placeholder */}
                <div className="grid h-10 w-10 place-items-center rounded-md bg-white shadow-sm overflow-hidden">
                  <Image
                    src="/google-logo.png"
                    alt="Google"
                    width={40}
                    height={40}
                    className="h-8 w-8 object-contain"
                    priority
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-900">
                      Google Reviews
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-900">
                      5.0
                    </span>
                    <Stars value={5} />
                    <span className="text-xs text-gray-500">(71)</span>
                  </div>
                </div>
              </div>

              <a
                href="https://g.page/r/CQli6MeZs3tiEBM/review"
                className="inline-flex w-fit items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                target="_blank"
              >
                Review us on Google
              </a>
            </div>

            {/* Slider */}
            <div className="relative mt-5">
              {/* Track viewport */}
              <div className="overflow-hidden">
                <div
                  ref={trackRef}
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(${translateX})` }}
                >
                  {/* Each "page" is 100% width; inside we render cards chunked by perView */}
                  {Array.from({ length: pagesCount }).map((_, pageIndex) => {
                    const start = pageIndex * perView;
                    const slice = reviews.slice(start, start + perView);

                    return (
                      <div
                        key={pageIndex}
                        className="w-full flex-none"
                        aria-hidden={pageIndex !== page}
                      >
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                          {slice.map((r) => (
                            <ReviewCard key={r.id} review={r} />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Arrows */}
              <button
                type="button"
                onClick={prev}
                disabled={page === 0}
                className="absolute right-11 top-1/2 hidden -translate-y-1/2 rounded-full border border-gray-200 bg-white p-2 text-gray-700 shadow-sm hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 sm:inline-flex"
                aria-label="Previous reviews"
              >
                <ChevronLeft />
              </button>
              <button
                type="button"
                onClick={next}
                disabled={page === pagesCount - 1}
                className="absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-full border border-gray-200 bg-white p-2 text-gray-700 shadow-sm hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 sm:inline-flex"
                aria-label="Next reviews"
              >
                <ChevronRight />
              </button>

              {/* Dots */}
              <div className="mt-4 flex items-center justify-center gap-2">
                {Array.from({ length: pagesCount }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goTo(i)}
                    className={`h-2 w-2 rounded-full ${i === page ? "bg-gray-900" : "bg-gray-300"
                      }`}
                    aria-label={`Go to reviews page ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
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

      {/* FAQ Section */}
      <section className="py-3 relative overflow-hidden">
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
                className={`transition-all duration-300 text-gray-200 overflow-hidden relative z-10 ${openIndex === index
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

      {/* CTA Button */}
      <div className="my-10 flex justify-center">
        <ButtonFill
          text="Start Your Project Today"
          onClick={() => setIsPopupOpen(true)}
        />
      </div>

      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

      <Footer />
    </div>
  );
}

export default Website;

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
      <div className="flex items-start gap-3">
        <div className="grid h-10 w-10 flex-none place-items-center rounded-full bg-orange-500 text-sm font-bold text-white">
          {review.avatarLetter}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <p className="truncate text-sm font-semibold text-gray-900">
              {review.name}
            </p>

            {/* tiny Google badge placeholder */}
            <div className="grid h-9 w-9 place-items-center rounded-md bg-white shadow-sm overflow-hidden">
              <Image
                src="/google-logo.png"
                alt="Google"
                width={36}
                height={36}
                className="h-6 w-6 object-contain"
                priority
              />
            </div>
          </div>

          <p className="mt-0.5 text-xs text-gray-500">{review.time}</p>

          <div className="mt-1.5">
            <Stars value={review.rating} />
          </div>

          <p className="mt-2 text-sm text-gray-700 line-clamp-3">
            {review.text}
          </p>

          <a
            href="https://share.google/8vsMUxNf6JUCWCLH4"
            target="_blank"
            className="mt-2 text-xs font-semibold text-gray-500 hover:text-gray-700"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}

function Stars({ value }: { value: number }) {
  const stars = Array.from({ length: 5 }).map((_, i) => i < value);
  return (
    <div className="flex items-center gap-0.5" aria-label={`${value} stars`}>
      {stars.map((on, idx) => (
        <span
          key={idx}
          className={`text-sm ${on ? "text-yellow-400" : "text-gray-300"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function ChevronLeft() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

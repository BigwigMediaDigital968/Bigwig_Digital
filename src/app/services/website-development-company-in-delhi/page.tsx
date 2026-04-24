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
        As a leading web design company serving South Delhi, West Delhi, and
        Delhi NCR, we build fully responsive websites that look sharp and load
        fast on every device, mobile, tablet, or desktop. With 65%+ of Delhi's
        internet users browsing on mobile, a responsive website is
        non-negotiable.
      </>
    ),
  },
  {
    title: "Static Website Design",
    content:
      "We design clean, fast-loading static websites ideal for businesses that need a professional online presence without complex back-end systems. Perfect for local service providers, consultants, and professionals across Delhi.",
  },
  {
    title: "Dynamic Website Design",
    content:
      "Our dynamic websites are built for businesses that need real-time content, user interaction, and custom functionality, ideal for Delhi-based portals, directories, booking platforms, and membership sites.",
  },
  {
    title: "Startup Website Design",
    content:
      "We've partnered with numerous Delhi NCR startups from the ground up, helping them launch fast, look professional, and compete with established players from day one. Your startup story deserves a website that tells it powerfully.",
  },
  {
    title: "Website Redesign",
    content:
      " Is your current website losing you customers? We transform outdated Delhi business websites into modern, high-performing platforms. Our redesign projects typically result in improved load times, lower bounce rates, and higher lead conversions.",
  },
  {
    title: "Corporate Website Design",
    content:
      "We design enterprise-level corporate websites for large Delhi-based organisations, built to handle high traffic, complex operations, multi-department content, and global audiences while maintaining a strong brand identity.",
  },
  {
    title: "Landing Page Design",
    content:
      "High-converting landing pages crafted with compelling copy, strong visual hierarchy, and clear CTAs, designed specifically to support your Google Ads, Meta Ads, and performance marketing campaigns targeting Delhi NCR audiences.",
  },
  {
    title: "SEO-Friendly Website Design",
    content:
      "Every website we build is optimised for search engines from the ground up, clean code structure, fast Core Web Vitals, proper heading hierarchy, schema markup, and mobile-first indexing. We build websites that rank in Delhi's competitive search landscape.",
  },
  {
    title: "PSD to HTML Design",
    content:
      "We accurately convert Photoshop and Figma designs into pixel-perfect, responsive HTML, preserving every design detail while ensuring fast load times and cross-browser compatibility.",
  },
];

const customSections = [
  {
    title: "100% Mobile Responsive",
    content:
      "With mobile traffic accounting for nearly 65.49% of all web visits in India, your Delhi audience is browsing on their phones. We ensure every website delivers a flawless experience across all screen sizes.",
  },
  {
    title: "A Customised Website",
    content:
      "94% of first impressions are design-driven. A custom website ensures your Delhi business stands out immediately, communicating your brand values clearly and creating a powerful first impression that template sites simply can't achieve.",
  },
  {
    title: "A User-Friendly Website",
    content:
      "89% of users abandon a website after a poor experience and switch to a competitor. We design with your Delhi audience in mind, intuitive navigation, fast load times, and clear journeys that keep users engaged.",
  },
  {
    title: "A Well-Designed Website",
    content:
      "75% of users judge a company's credibility by its website design. If your website looks outdated, Delhi customers will trust your competitors instead. We build websites that instantly communicate professionalism and authority.",
  },
  {
    title: "Your Website Reflects Your Brand",
    content:
      "Your website is your most powerful marketing asset, active 24/7, serving customers across Delhi, India, and the world. We build websites that are true extensions of your brand identity, not just digital brochures.",
  },
  {
    title: "We Shape Digital Experiences",
    content:
      "We go beyond design, we craft connected digital experiences that engage users, communicate value, and drive measurable business results for Delhi brands.",
  },
];

const benefitSections = [
  {
    title: "Customised Web Design",
    content:
      "Every website we build is designed exclusively for your business, no templates, no shortcuts. We invest time understanding your Delhi audience, competitors, and goals before writing a single line of code.",
  },
  {
    title: "Technical Expertise",
    content:
      "Our team of developers is proficient in React, Next.js, WordPress, Shopify, Node.js, and more, giving you access to enterprise-grade technical capability at agency pricing suited for Delhi businesses.",
  },
  {
    title: "Scalability",
    content:
      "We build websites ready to grow with your business, whether you're a startup in Noida today or a multi-city enterprise tomorrow. Our architecture supports seamless expansion without expensive rebuilds.",
  },
  {
    title: "Consistency & Branding",
    content:
      "From colour palette to typography to tone of voice, we maintain strict brand consistency across every page, ensuring your Delhi audience always experiences a cohesive, trustworthy brand.",
  },
  {
    title: "Cross-Browser Compatibility",
    content:
      "Your website works flawlessly on Chrome, Safari, Firefox, and Edge, across all devices your Delhi customers use, without visual inconsistencies or broken functionality.",
  },
  {
    title: "UI & UX Design",
    content:
      "We design with the user's journey at the centre, clear CTAs, logical page flow, and intuitive interfaces that guide Delhi visitors from landing to conversion seamlessly.",
  },
  {
    title: "Faster Load Times",
    content:
      "We optimise every website for Core Web Vitals, faster load times mean lower bounce rates and better Google rankings for competitive Delhi keywords.",
  },
  {
    title: "Ongoing Support & Maintenance",
    content:
      "We don't disappear after launch. Our dedicated support team provides round-the-clock maintenance, security updates, performance monitoring, and troubleshooting, so your Delhi business website never goes down.",
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Best Website Development Company in Delhi | Bigwig Media Digital",
    url: "https://www.bigwigmediadigital.com/services/website-development-company-in-delhi",
    description:
      "Looking for the best website development company in Delhi? Bigwig Media Digital builds responsive, SEO-friendly websites for businesses across Delhi NCR.",
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "WebSite",
      name: "Bigwig Media Digital",
      url: "https://www.bigwigmediadigital.com",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.bigwigmediadigital.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://www.bigwigmediadigital.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Website Development Company in Delhi",
          item: "https://www.bigwigmediadigital.com/services/website-development-company-in-delhi",
        },
      ],
    },
  };

  const sd2 = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why should you hire a Web Design Company in Delhi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Partnering with a professional web design company helps increase website traffic, enhance user engagement, and support business growth. A high-quality website is more visually appealing, easier to navigate, and significantly improves user experience.",
        },
      },
      {
        "@type": "Question",
        name: "How do I hire a web design company?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To hire a reliable web design company: set a clear project budget, create a detailed job description, review portfolios and case studies, prepare interview questions to assess skills, and finalize the contract with a defined scope.",
        },
      },
      {
        "@type": "Question",
        name: "How much time does website design take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A typical website takes about 4 to 8 weeks depending on design complexity, content readiness, and revision cycles. More advanced custom websites may require additional time.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a custom website design cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The total cost depends on page count, design complexity, functionalities, and integrations. After the first consultation, we share a clear, transparent pricing estimate.",
        },
      },
      {
        "@type": "Question",
        name: "Will I be able to update the website myself once it's live?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our websites use user-friendly CMS platforms like WordPress, allowing you to update content easily. We also provide training to help you manage everything confidently.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide ongoing assistance after the website is launched?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer complete post-launch care including updates, backups, security checks, troubleshooting, and continuous performance optimization.",
        },
      },
    ],
  };
  const sd3 = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bigwig Media Digital",
    url: "https://www.bigwigmediadigital.com/services/website-development-company-in-delhi",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "71",
      bestRating: "5",
      worstRating: "1",
    },
  };

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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sd2) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sd3) }}
      />

      {/* Page Section 1 */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-10 px-4"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="bg-black/60 absolute inset-0 z-0" />

        <div className="relative z-10 w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 md:pr-8">
            <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight">
              Best Website Development Company in Delhi - Take your digital
              experience to the next level with our fresh, innovative solutions
            </h1>

            <p className="text-base md:text-lg max-w-2xl text-white/90 text-justify">
              We are Bigwig Media Digital, a results-driven Website Development
              Company in Delhi with 5+ years of hands-on experience building
              websites for businesses across Delhi NCR, from Connaught Place
              startups to Gurugram enterprises and Noida e-commerce brands. We
              don't just design websites. We engineer digital growth engines
              that attract the right audience, convert visitors into customers,
              and reflect the true identity of your brand. Whether you're a
              first-time business owner in Dwarka looking to go online, or an
              established company in South Delhi ready for a full redesign, our
              team delivers websites tailored precisely to your goals.
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
                As a trusted{" "}
                <strong>Website Development Company in Delhi NCR</strong>, we've
                helped 100+ local businesses, from real estate firms in Greater
                Noida to healthcare clinics in Rohini, establish a powerful,
                credible online presence. Our process is straightforward: we
                understand your business goals, research your Delhi-area
                competition, plan a focused digital strategy, and deliver a
                website that converts.
              </p>

              <p className="text-justify">
                Delhi's market is competitive. Whether you're targeting clients
                in Saket, Vasant Kunj, Lajpat Nagar, or beyond, your website
                needs to stand out in both design and search performance. That's
                where our expertise makes the difference. Businesses searching
                for a reliable{" "}
                <strong>website development company near me</strong> in Delhi
                trust us because we combine global design standards with a deep
                understanding of the local business landscape.
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
            Top Services by the Best Website Development Company in Delhi
          </h3>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed">
            We offer end-to-end website design and development services for
            businesses of all sizes, from solo entrepreneurs in Karol Bagh to
            corporate groups headquartered in Aerocity. Every website we build
            is custom-coded, performance-optimised, and SEO-ready from day one.
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
            Why Do Delhi Businesses Need a Custom Website?
          </h3>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-4">
            A generic, template-based website won't cut it in Delhi's
            fast-moving market. Custom-designed websites give your business a
            distinct identity, build trust with local customers, and are built
            to perform, not just look good. As one of the most experienced
            website development companies in Delhi NCR, we know that every
            business has a unique story, audience, and goal. Here's why custom
            design matters:
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

      {/* Hiring A Web Design Company Section */}
      <section className="py-12 w-11/12 md:w-5/6 mx-auto relative overflow-hidden">
        {/* ================= HEADINGS ================= */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-[var(--color5)] mb-4">
            Website Development Company Near Me
          </h2>

          <h3 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4">
            Benefits of Hiring Bigwig Media Digital for Your Business Website
          </h3>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed">
            Delhi businesses choose us because we understand the local market,
            deliver on time, and build websites that generate real results.
            Here's what sets us apart:
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
                    className={`h-2 w-2 rounded-full ${
                      i === page ? "bg-gray-900" : "bg-gray-300"
                    }`}
                    aria-label={`Go to reviews page ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
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

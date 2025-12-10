"use client";
import { TypeAnimation } from "react-type-animation";
import Nav from "../../../../components/Nav";
import hero from "../../../../Assets/Services hero/affiliate_marketing.jpg";
import affiliate from "../../../../Assets/services/12.jpg";
import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
import Footer from "../../../../components/Footer";
import ButtonFill from "../../../../components/Button";
import PopupForm from "../../../../components/PopupForm";
import GetInTouch from "../../../../components/GetInTouch";
import {
  FaShoppingBag,
  FaLaptopCode,
  FaGraduationCap,
  FaTshirt,
  FaMoneyCheckAlt,
} from "react-icons/fa";

import {
  FaChartLine,
  FaShieldAlt,
  FaGlobe,
  FaThumbsUp,
  FaSearch,
  FaClipboardCheck,
  FaPuzzlePiece,
} from "react-icons/fa";
import Slider from "react-slick";
import ContactForm from "../../../../components/ContactForm";
import { SetStateAction, useState } from "react";
import Image from "next/image";

const faqs = [
  {
    q: "What are the advantages of affiliate marketing?",
    a: "Affiliate marketing brings higher traffic, increased brand visibility, better conversions, cost-effective growth, and performance-based sales. Our affiliate marketing services in Delhi ensure you pay only for real results.",
  },
  {
    q: "Is affiliate marketing expensive?",
    a: "No. Affiliate marketing is one of the most budget-friendly digital marketing methods because you pay only when affiliates deliver real sales or leads. This makes affiliate marketing in Delhi highly profitable for businesses of all sizes.",
  },
  {
    q: "How do you ensure high-quality affiliates?",
    a: "We vet affiliates based on niche relevance, traffic quality, content authenticity, and performance history. As a trusted affiliate marketing agency in Delhi, we match you only with affiliates who can drive genuine, high-converting traffic.",
  },
  {
    q: "How do you track affiliate performance?",
    a: "We use industry-grade tracking tools to monitor clicks, conversions, attribution, payouts, and fraud detection. Our affiliate marketing company in Delhi provides real-time dashboards and transparent insights.",
  },
  {
    q: "How do I find affiliates for my business?",
    a: "We recruit affiliates from our verified network, niche publishers, influencers, bloggers, and ad partners. Our affiliate marketing services in Delhi include complete affiliate onboarding and management.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We offer affiliate marketing in Delhi for e-commerce, finance, health, education, real estate, SaaS, lifestyle, B2B, travel, and more. Each industry receives a tailored affiliate strategy.",
  },
  {
    q: "What is an affiliate network?",
    a: "An affiliate network is a platform that connects businesses with affiliates, manages tracking, payouts, and campaign performance. Many brands prefer working through an affiliate marketing agency in Delhi to manage these networks efficiently.",
  },
  {
    q: "How do I become an affiliate marketer?",
    a: "You join affiliate programs, promote products using your links, and earn commissions for each successful sale or lead. We also help individuals and creators join programs through our affiliate marketing company in Delhi.",
  },
  {
    q: "How much can I earn through affiliate marketing?",
    a: "Earnings depend on your niche, traffic, content quality, audience trust, and commission structure. High-performing affiliates partnering through our affiliate marketing services in Delhi can earn consistently.",
  },
  {
    q: "Is affiliate marketing safe?",
    a: "Yes. With proper tracking, fraud detection, and compliance measures, affiliate marketing is secure. Our affiliate marketing agency in Delhi ensures your campaigns follow ethical practices and brand safety rules.",
  },
  {
    q: "Can affiliate marketing work for any business?",
    a: "Yes. Whether you’re small, mid-sized, or enterprise-level, affiliate marketing can scale your traffic and revenue. Our affiliate marketing company in Delhi customizes strategies for every business model.",
  },
  {
    q: "What are the best practices for successful affiliate marketing?",
    a: "Use quality affiliates, strong creatives, optimized landing pages, transparent communication, and continuous performance tracking. Our affiliate marketing services in Delhi implement all best practices to ensure maximum ROI.",
  },
];

function AffiliateMarketing() {
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
      <title>Affiliate Marketing Management</title>
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/affiliate-marketing"
      />
      <meta
        name="description"
        content="Grow your business through powerful affiliate partnerships and expert campaign tracking."
      />

      <Nav />
      <section
        className="relative bg-cover bg-center bg-no-repeat py-10 px-4"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="bg-black/60 absolute inset-0 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 md:pr-8  text-justify">
            <h1 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
              Affiliate Marketing Services in Delhi
            </h1>

            <p className=" max-w-xl text-white/90">
              Looking for a performance-driven way to scale your business? Our
              professional affiliate marketing services in Delhi help you grow
              faster, reduce marketing risks, and drive high-intent sales
              through trusted partners. As a leading affiliate marketing agency
              in Delhi, we specialize in creating strategic, measurable, and
              revenue-focused affiliate programs that connect your brand with
              the right promoters.
            </p>
            <p className=" max-w-xl text-white/90">
              Whether you're a startup, e-commerce store, SaaS platform,
              educational brand, or enterprise business, our affiliate marketing
              company in Delhi helps you build partnerships that convert - while
              you only pay for real results. If you want dependable, scalable,
              and ROI-driven affiliate marketing in Delhi, you’re in the right
              place.
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
        <div className="w-11/12 md:w-5/6 mx-auto">
          {/* Main content layout */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left content */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-4">
                Leading Affiliate Marketing Company in Delhi to Scale Your Brand
                Sustainably
              </h2>

              <p className="text-white leading-relaxed text-justify">
                Affiliate marketing is one of the most cost-effective growth
                channels - but only when done with proper strategy, vetted
                affiliates, and performance monitoring. As a top-rated affiliate
                marketing company in Delhi, we help brands build profitable
                affiliate ecosystems, minimize fraud, and maximize genuine
                conversions.
              </p>

              <p className="text-white leading-relaxed text-justify">
                Our approach is simple:
                <br />✔ Build strong affiliate relationships
                <br />✔ Bring qualified traffic
                <br />✔ Convert leads into measurable revenue
                <br />✔ Optimize campaigns continuously
              </p>

              <p className="text-white leading-relaxed text-justify">
                Your growth becomes predictable with our structured affiliate
                marketing services in Delhi.
              </p>

              <ButtonFill
                text="Get Started Today"
                onClick={() => setIsPopupOpen(true)}
              />
            </div>

            {/* Right image */}
            <div className="w-full">
              <Image
                src={affiliate}
                alt="Best Affiliate Marketing Company in Delhi"
                className="w-full h-[60vh] rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
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

      <section className="py-20 relative overflow-hidden">
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
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default AffiliateMarketing;

"use client";
import { TypeAnimation } from "react-type-animation";
import Nav from "../../../../components/Nav";
import hero from "../../../../Assets/Services hero/Email_Marketing.jpg";
import image from "../../../../Assets/Services hero/Email Marketing.jpg";

import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
import Footer from "../../../../components/Footer";
import { BarChart4, Inbox, Mail, Rocket } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactForm from "../../../../components/ContactForm";
import Image from "next/image";
import ButtonFill from "../../../../components/Button";
import PopupForm from "../../../../components/PopupForm";
import GetInTouch from "../../../../components/GetInTouch";
import { SetStateAction, useState } from "react";

const emailPoints = [
  {
    title: "Deep Local Market Knowledge",
    content:
      "We understand Delhi’s market dynamics-from festivals and sales cycles to audience preferences across neighborhoods. That local insight helps your email marketing in Delhi feel timely and relevant.",
  },
  {
    title: "End-to-End Email Marketing Services",
    content:
      "We offer full service: list building, segmentation, creative design, copywriting, automation, transactional emails, and analytics-making us a one-stop email marketing company in Delhi.",
  },
  {
    title: "Technology & Deliverability Expertise",
    content:
      "We work with HubSpot, Klaviyo, Mailchimp, and major SMTP providers. We manage SPF/DKIM/DMARC and IP reputation to ensure your emails land in inboxes, not spam.",
  },
  {
    title: "ROI-Focused & Scalable Solutions",
    content:
      "Whether you need high-volume promotional sends or automated drip journeys, our email marketing services scale to your goals and budget.",
  },
];

const steps = [
  {
    title: "Research & Strategy",
    content:
      "We start by understanding your business goals, customers, and existing data - then define a measurable email strategy for email marketing in Delhi that aligns with KPIs (revenue, leads, retention).",
  },
  {
    title: "List Building & Segmentation",
    content:
      "Clean lists and smart segmentation (behavioral, demographic, lifecycle stage) are the backbone of effective email marketing services in Delhi. We create segments that allow highly personalised messages.",
  },
  {
    title: "Creative & Copy",
    content:
      "Compelling subject lines, concise benefit-led copy, and mobile-first design raise open and click rates. Our copywriters craft messages tailored to Delhi audiences while promoting your brand voice.",
  },
  {
    title: "Automation & Workflow Setup",
    content:
      "From welcome series and onboarding flows to cart recovery and win-back campaigns, automation turns one email into dozens of revenue opportunities for any email marketing company in Delhi to deliver.",
  },
  {
    title: "Testing & Optimization",
    content:
      "A/B subject tests, send-time experiments, and content variants help us iteratively improve performance across your email marketing in Delhi program.",
  },
  {
    title: "Monitoring & Reporting",
    content:
      "We track deliverability, opens, clicks, conversions, and revenue - then translate results into clear recommendations to grow ROI month over month.",
  },
];

const emailTypes = [
  {
    title: "Email Campaign Management",
    content:
      "Promotional campaigns, newsletters, and product launches crafted for maximum engagement.",
  },
  {
    title: "Email Automation & Drip Campaigns",
    content:
      "Welcome sequences, onboarding flows, cart recovery, and lifecycle automations that nurture leads automatically.",
  },
  {
    title: "Transactional Emails",
    content:
      "Order confirmations, password resets, and system notifications optimised for clarity and conversion.",
  },
  {
    title: "B2B Email Marketing",
    content:
      "Account-based campaigns and nurture sequences designed for longer and complex B2B sales cycles.",
  },
  {
    title: "E-commerce Email Marketing",
    content:
      "Abandoned cart recovery, personalised product recommendations, and post-purchase flows to increase repeat purchases.",
  },
  {
    title: "Local Business Email Campaigns",
    content:
      "Location-based promotions and event invites crafted specifically for Delhi neighbourhood audiences.",
  },
];

const emailListQuality = [
  {
    title: "Opt-In Strategies & Lead Magnets",
    content:
      "We design sign-up flows and high-value incentives that attract engaged subscribers — not just raw volume.",
    icon: "MailPlus",
  },
  {
    title: "Subscription Management",
    content:
      "Preference centers let subscribers choose topics and frequency, reducing unsubscribes and boosting retention.",
    icon: "Sliders",
  },
  {
    title: "List Hygiene & Bounce Management",
    content:
      "We remove bounces and inactive users regularly to protect sender reputation and ensure maximum deliverability.",
    icon: "ShieldCheck",
  },
];

const emailWorkflow = [
  "Collect consented leads",
  "Segment audiences intelligently",
  "Send personalized targeted messages",
  "Measure performance across KPIs",
  "Optimize continuously based on data",
];

const investEmailMarketing = [
  "End-to-end strategy and execution",
  "Technical setup (SPF, DKIM, DMARC)",
  "Automation & personalization",
  "Creative design + conversion copywriting",
  "Transparent reporting & ROI tracking",
  "Reduced waste and higher conversions",
];

const industriesServed = [
  "E-commerce",
  "SaaS & Technology",
  "Healthcare",
  "Real Estate",
  "Logistics & Supply Chain",
  "Legal & Consulting",
  "Luxury Brands",
  "Local Delhi Businesses",
];

const faqs = [
  {
    q: "Why is email marketing important for businesses?",
    a: "Email marketing offers high ROI, personalized communication, and direct customer reach. When handled by an experienced email marketing company in Delhi, it boosts sales, nurtures leads, and strengthens long-term customer relationships.",
  },
  {
    q: "How can an email marketing agency in Delhi/NCR benefit my business?",
    a: "A trusted email marketing agency in Delhi helps you develop a tailored strategy, create engaging content, improve deliverability, and automate workflows – resulting in higher engagement, conversions, and revenue.",
  },
  {
    q: "What services do you offer as an email marketing company in Delhi?",
    a: "Our email marketing services in Delhi include newsletters, drip automation, transactional emails, template design, segmentation, copywriting, A/B testing, analytics, and deliverability monitoring.",
  },
  {
    q: "Can you provide email marketing services in Delhi NCR and nearby cities?",
    a: "Yes, we serve clients across Delhi, Noida, Gurugram, Faridabad, Ghaziabad, and other NCR regions. As a leading email marketing company in Delhi, we also support clients across India and overseas.",
  },
  {
    q: "How do I get started with email marketing?",
    a: "We begin by helping you build or refine your list, choose a platform, create a strategy, and set up your campaigns. Working with an email marketing agency in Delhi ensures smooth implementation and faster results.",
  },
  {
    q: "How often should I send emails to my subscribers?",
    a: "Most brands send 1–4 emails per week, depending on goals and audience behavior. Our experts in email marketing in Delhi help you determine the ideal frequency for engagement without overwhelming your subscribers.",
  },
  {
    q: "How do you prevent emails from going to spam?",
    a: "We avoid spam triggers, verify domains, maintain list quality, and use proper authentication – ensuring high deliverability from your email marketing company in Delhi.",
  },
  {
    q: "What email marketing tools or platforms do you recommend?",
    a: "We use Mailchimp, Klaviyo, HubSpot, ActiveCampaign, and enterprise SMTP systems. As a modern email marketing agency in Delhi, we select the best platform for your needs.",
  },
  {
    q: "How do you measure email campaign success?",
    a: "We evaluate engagement, conversions, sales, and ROI. Our email marketing services in Delhi include detailed analytics dashboards and monthly performance reports.",
  },
  {
    q: "How do you create engaging email content?",
    a: "We use persuasive copy, personalized messaging, strong visuals, and compelling CTAs. As a leading email marketing company in Delhi, we create content that drives clicks and conversions.",
  },
  {
    q: "How do you build an effective email list?",
    a: "We use opt-in forms, lead magnets, landing pages, and sign-up incentives. This ensures your email marketing in Delhi targets qualified, engaged subscribers.",
  },
  {
    q: "What’s included in your email marketing services packages?",
    a: "Packages include campaign creation, automation setup, template design, segmentation, testing, analytics, optimization, and full support from our email marketing agency in Delhi.",
  },
  {
    q: "Can email marketing work for B2B companies?",
    a: "Yes. Email is one of the most powerful channels for B2B lead nurturing. Our email marketing company in Delhi builds tailored sequences that improve conversions and shorten sales cycles.",
  },
  {
    q: "Can you integrate email marketing with CRM or shopping cart systems?",
    a: "Yes. We integrate email tools with CRMs like HubSpot, Zoho, Salesforce, and ecommerce platforms like Shopify, WooCommerce, and Magento – strengthening your email marketing in Delhi, automation, and tracking.",
  },
];

function EmailMarketing() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: SetStateAction<number | null>) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
  return (
    <div className="bg-[var(--color1)]">
      <title>Result-Driven Email Marketing</title>
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/email-marketing"
      />
      <meta
        name="description"
        content="Reach your audience with customized email campaigns that drive conversions and brand loyalty."
      />

      <Nav />
      <section
        className="relative bg-cover bg-center bg-no-repeat py-10 px-4"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="bg-black/60 absolute inset-0 z-0" />

        <div className="relative z-10 w-5/6 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Content - 2/3 */}
          <div className="w-full md:w-2/3 text-white space-y-6">
            <h1 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
              Email Marketing Services in Delhi
            </h1>

            <p className=" max-w-xl text-white/90">
              Looking for a results-driven email marketing company in Delhi that
              understands local audiences and delivers measurable ROI? As a
              specialist email marketing agency in Delhi, we design, build, and
              run high-performing email programs that increase opens, clicks,
              and conversions - whether you’re a startup, ecommerce brand, B2B
              firm, or local business. Read on to discover our end-to-end email
              marketing services in Delhi and how we’ll make email work for your
              business.
            </p>

            <ButtonFill
              onClick={() => setIsPopupOpen(true)}
              text="Contact Us"
            />
          </div>

          {/* Right Form - 1/3 */}
          <ContactForm />
        </div>
      </section>

      <section className="  py-12">
        <div className="w-11/12 md:w-5/6 mx-auto">
          {/* Main content layout */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left content */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-4">
                Leading Email Marketing Company in Delhi for Measurable Growth
              </h2>

              <p className="text-white leading-relaxed text-justify">
                Delhi’s inboxes are crowded - standing out requires strategy,
                relevance, and flawless execution. As a leading email marketing
                agency in Delhi, we combine data, creative copywriting, and
                automation to deliver personalised experiences that convert.
                From audience segmentation to deliverability optimization, our
                email marketing in Delhi approach focuses on driving business
                outcomes: higher revenue, repeat purchases, and improved
                customer lifetime value.
              </p>
              <ButtonFill
                text="Get Started Today"
                onClick={() => setIsPopupOpen(true)}
              />
            </div>

            {/* Right image */}
            <div className="w-full">
              <Image
                src={image}
                alt="Best SEO Company in India"
                className="w-full h-[60vh] rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 w-11/12 md:w-5/6 mx-auto relative overflow-hidden">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-4">
            Why Choose Bigwig Media Digital as an Email Marketing Agency in
            Delhi?
          </h2>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed">
            Our email marketing services are designed to deliver measurable
            impact. With deep market insights, robust technical expertise, and
            creative, high-performing campaign strategies, we help businesses
            grow consistently and meaningfully.
          </p>
        </div>

        {/* Main Container */}
        <div className="relative mb-10 z-10">
          {/* Mobile Slider */}
          <div className="block lg:hidden">
            <Slider {...settings}>
              {emailPoints.map((item, index) => (
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
                    <div
                      className="
                      absolute inset-0 bg-gradient-to-br 
                      from-transparent via-white/5 to-transparent
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-500
                    "
                    />

                    <div
                      className="
                      absolute -top-full left-0 w-full h-full
                      bg-gradient-to-r from-transparent via-[var(--color5)]/20 to-transparent
                      rotate-45 group-hover:animate-shineLine
                    "
                    />

                    <h3 className="text-xl font-semibold text-[var(--color5)] tracking-wide relative z-10">
                      {item.title}
                    </h3>

                    <p className="text-gray-200 text-sm md:text-base leading-relaxed relative z-10 text-justify">
                      {item.content}
                    </p>

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

          {/* Desktop Grid */}
          <div
            className="
            hidden lg:grid 
            grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
            gap-10 auto-rows-fr
          "
          >
            {emailPoints.map((item, index) => (
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
                  <div
                    className="
                    absolute -top-full left-0 w-full h-full
                    bg-gradient-to-r from-transparent via-[var(--color5)]/25 to-transparent
                    rotate-45 group-hover:animate-shineLine
                  "
                  />

                  <h3 className="text-xl font-semibold text-[var(--color5)] tracking-wide relative z-10">
                    {item.title}
                  </h3>

                  <p className="text-gray-200 text-sm md:text-base leading-relaxed text-justify relative z-10">
                    {item.content}
                  </p>

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

          {/* Animation */}
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
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-4">
            Our Complete Process for Email Marketing in Delhi
          </h2>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed">
            From strategy to reporting - here’s how our email marketing process
            delivers measurable, scalable results for brands in Delhi.
          </p>
        </div>

        {/* Main Container */}
        <div className="relative mb-10 z-10">
          {/* Mobile Slider */}
          <div className="block lg:hidden">
            <Slider {...settings}>
              {steps.map((step, idx) => (
                <div key={idx} className="px-2">
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
                    {/* Soft gradient overlay */}
                    <div
                      className="
                      absolute inset-0 bg-gradient-to-br 
                      from-transparent via-white/5 to-transparent
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-500
                    "
                    />

                    {/* Diagonal shine */}
                    <div
                      className="
                      absolute -top-full left-0 w-full h-full
                      bg-gradient-to-r from-transparent via-[var(--color5)]/20 to-transparent
                      rotate-45 group-hover:animate-shineLine
                    "
                    />

                    <h3 className="text-xl font-semibold text-[var(--color5)] tracking-wide relative z-10">
                      {step.title}
                    </h3>

                    <p className="text-gray-200 text-sm md:text-base leading-relaxed relative z-10 text-justify">
                      {step.content}
                    </p>

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

          {/* Desktop Grid */}
          <div
            className="
            hidden lg:grid 
            grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
            gap-10 auto-rows-fr
          "
          >
            {steps.map((step, idx) => (
              <div
                key={idx}
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
                  {/* Diagonal shine */}
                  <div
                    className="
                    absolute -top-full left-0 w-full h-full
                    bg-gradient-to-r from-transparent via-[var(--color5)]/25 to-transparent
                    rotate-45 group-hover:animate-shineLine
                  "
                  />

                  <h3 className="text-xl font-semibold text-[var(--color5)] tracking-wide relative z-10">
                    {step.title}
                  </h3>

                  <p className="text-gray-200 text-sm md:text-base leading-relaxed text-justify relative z-10">
                    {step.content}
                  </p>

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
        <div
          className="
      relative rounded-3xl p-6 md:p-10
      backdrop-blur-2xl bg-white/5
      border border-[var(--color5)]/40
      shadow-[0_0_45px_rgba(0,255,255,0.15)]
      hover:shadow-[0_0_30px_var(--color5)]
      transition-all duration-700
      overflow-hidden
    "
        >
          {/* Shine Sweep */}
          <div
            className="
        absolute -top-full left-0 w-full h-full 
        bg-gradient-to-r from-transparent via-[var(--color5)]/20 to-transparent 
        rotate-45 opacity-70
        animate-[shineMove_5s_ease-in-out_infinite]
      "
          />

          {/* Header Glow Orbs */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-[var(--color5)]/10 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--color5)]/10 blur-3xl rounded-full"></div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            {/* LEFT BLOCK */}
            <div>
              <h2 className="text-3xl font-semibold text-[var(--color5)] mb-8 tracking-wide">
                Key Features of Our Email Marketing Services in Delhi
              </h2>

              <div className="space-y-7 text-gray-200 leading-relaxed">
                {[
                  {
                    title: "Professional Email Templates & Responsive Design",
                    desc: "Custom-built responsive email templates that enhance your brand identity and improve overall engagement.",
                  },
                  {
                    title: "Advanced Tracking & Analytics",
                    desc: "Beyond opens and clicks, we track user behavior, conversions, purchases, LTV and more to show real ROI.",
                  },
                  {
                    title: "Dedicated Deliverability Management",
                    desc: "Authenticated sending, IP warming, and list hygiene ensure your campaigns consistently reach the inbox.",
                  },
                  {
                    title: "Easy CRM & E-commerce Integration",
                    desc: "Seamless integration with leading CRMs and platforms to personalize communication at scale.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="
                p-4 rounded-xl bg-white/5 border border-[var(--color5)]/20
                shadow-[0_0_20px_rgba(0,255,255,0.08)]
                hover:shadow-[0_0_25px_var(--color5)]
                transition-all duration-500
                group
              "
                  >
                    <h3 className="text-lg font-semibold text-[var(--color5)] flex items-center gap-2">
                      <span className="w-2 h-2 bg-[var(--color5)] rounded-full"></span>
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-300 group-hover:text-white/90 transition">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT BLOCK */}
            <div>
              <h2 className="text-3xl font-semibold text-[var(--color5)] mb-8 tracking-wide">
                Crafting Engaging Email Content That Converts
              </h2>

              <div className="space-y-7 text-gray-200 leading-relaxed">
                {[
                  {
                    title: "Understand Your Audience",
                    desc: "We study user intent, behavior signals, and purchase trends so each email speaks directly to their needs.",
                  },
                  {
                    title: "Write Compelling Subject Lines",
                    desc: "Curiosity, urgency, and value-driven messaging help maximize open rates across Delhi audiences.",
                  },
                  {
                    title: "Personalization & Dynamic Content",
                    desc: "Localized recommendations, personalized offers, and smart segmentation increase conversions.",
                  },
                  {
                    title: "Clear Calls to Action",
                    desc: "We focus every email around one powerful CTA to boost user action and revenue.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="
                p-4 rounded-xl bg-white/5 border border-[var(--color5)]/20
                shadow-[0_0_20px_rgba(0,255,255,0.08)]
                hover:shadow-[0_0_25px_var(--color5)]
                transition-all duration-500
                group
              "
                  >
                    <h3 className="text-lg font-semibold text-[var(--color5)] flex items-center gap-2">
                      <span className="w-2 h-2 bg-[var(--color5)] rounded-full"></span>
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-300 group-hover:text-white/90 transition">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Shine Animation Keyframes */}
        <style>
          {`
      @keyframes shineMove {
        0% { transform: translateY(-160%); }
        100% { transform: translateY(160%); }
      }
    `}
        </style>
      </section>

      <section className="py-12 w-11/12 md:w-5/6 mx-auto">
        {/* ====================== GRID ====================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {/* ========== LEFT SIDE (FULL HEIGHT) ========== */}
          <div className="h-full flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color5)] mb-6">
                Ensuring Maximum Deliverability for Email Marketing in Delhi
              </h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                Deliverability is technical but non-negotiable. We manage
                everything to ensure your emails reach the inbox.
              </p>

              <div className="space-y-5">
                {[
                  "SPF, DKIM and DMARC setup",
                  "IP reputation and warming",
                  "List hygiene to remove bounces and inactive subscribers",
                  "Compliance with anti-spam laws and opt-in best practices",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[var(--color5)]/20 flex items-center justify-center text-[var(--color5)] text-xl font-bold">
                      ✔
                    </div>
                    <h3 className="text-gray-200 text-lg">{item}</h3>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-300 mt-6">
              These steps ensure your email marketing services in Delhi
              consistently reach the inbox.
            </p>
          </div>

          {/* ========== RIGHT SIDE (FULL HEIGHT) ========== */}
          <div className="h-full flex flex-col justify-start">
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color5)] mb-6">
              Benefits of Email Marketing in Delhi
            </h2>

            <div className="space-y-5">
              {[
                "High ROI – one of the most cost-effective channels",
                "Direct customer access – no reliance on algorithms",
                "Personalization & relevance at scale",
                "Measurable performance with clear attribution",
                "Automation that saves time & increases revenue",
                "Fast testing & optimization for continuous improvement",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--color5)]/20 flex items-center justify-center text-[var(--color5)] text-xl font-bold">
                    ✦
                  </div>
                  <p className="text-gray-200 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ====================== CTA BELOW SECTION ====================== */}
        <div className="flex justify-center mt-10">
          <ButtonFill
            onClick={() => setIsPopupOpen(true)}
            text=" Book Free Email Marketing Consultation"
          />
        </div>
      </section>

      <section className="py-12 w-11/12 md:w-5/6 mx-auto relative overflow-hidden">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-4">
            Types of Email Marketing Services We Offer in Delhi
          </h2>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed">
            Our email marketing solutions cover every major category — from
            campaigns to automation, transactional workflows, and personalised
            engagement.
          </p>
        </div>

        {/* MOBILE SLIDER */}
        <div className="block lg:hidden">
          <Slider {...settings}>
            {emailTypes.map((item, index) => (
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
                  <div
                    className="
                absolute inset-0 bg-gradient-to-br 
                from-transparent via-white/5 to-transparent
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
              "
                  />

                  <div
                    className="
                absolute -top-full left-0 w-full h-full
                bg-gradient-to-r from-transparent via-[var(--color5)]/20 to-transparent
                rotate-45 group-hover:animate-shineLine
              "
                  />

                  <h3 className="text-xl font-semibold text-[var(--color5)] tracking-wide relative z-10">
                    {item.title}
                  </h3>

                  <p className="text-gray-200 text-sm md:text-base leading-relaxed relative z-10 text-justify">
                    {item.content}
                  </p>

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
          {emailTypes.map((item, index) => (
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
                <div
                  className="
              absolute -top-full left-0 w-full h-full
              bg-gradient-to-r from-transparent via-[var(--color5)]/25 to-transparent
              rotate-45 group-hover:animate-shineLine
            "
                />

                <h3 className="text-xl font-semibold text-[var(--color5)] tracking-wide relative z-10">
                  {item.title}
                </h3>

                <p className="text-gray-200 text-sm md:text-base leading-relaxed text-justify relative z-10">
                  {item.content}
                </p>

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

        {/* Animation */}
        <style>{`
    @keyframes shineLine {
      0% { transform: translateY(-150%); }
      100% { transform: translateY(150%); }
    }
    .animate-shineLine {
      animation: shineLine 1.5s ease-in-out forwards;
    }
  `}</style>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12 space-y-12">
        {/* ===================== SECTION 1 ===================== */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color5)] mb-6">
            Building & Managing High-Quality Email Lists
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {emailListQuality.map((item, i) => (
              <div
                key={i}
                className="
            p-6 rounded-2xl bg-white/5 backdrop-blur-xl
            border border-[var(--color5)]/20
            shadow-[0_0_30px_rgba(0,255,255,0.15)]
            hover:shadow-[0_0_40px_var(--color5)]
            transition-all hover:-translate-y-2
            group relative overflow-hidden
          "
              >
                <div className="absolute -top-full left-0 w-full h-full bg-gradient-to-r from-transparent via-[var(--color5)]/15 to-transparent rotate-45 group-hover:animate-shine"></div>

                <h3 className="text-xl font-semibold text-[var(--color5)] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>

          <style>{`
      @keyframes shine {
        0% { transform: translateY(-150%); }
        100% { transform: translateY(150%); }
      }
      .group-hover\\:animate-shine:hover {
        animation: shine 1.5s ease-in-out forwards;
      }
    `}</style>
        </div>

        {/* ===================== SECTION 2 ===================== */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color5)] mb-6">
            How Do Email Marketing Services Work?
          </h2>

          <div className="relative border-l-2 border-[var(--color5)]/40 pl-6 space-y-8">
            {emailWorkflow.map((step, i) => (
              <div key={i} className="relative">
                <div className="w-4 h-4 bg-[var(--color5)] rounded-full absolute -left-8 top-1"></div>
                <p className="text-gray-200 text-lg">{step}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-300 mt-6">
            This loop ensures each campaign becomes smarter and more profitable
            over time.
          </p>
        </div>

        {/* ===================== SECTION 3 ===================== */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color5)] mb-6">
            Why Invest in an Email Marketing Company in Delhi?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {investEmailMarketing.map((point, i) => (
              <div
                key={i}
                className="
            flex items-center gap-4 p-4 rounded-xl 
            bg-white/5 border border-white/10 
            hover:bg-white/10 transition
          "
              >
                <div className="w-10 h-10 bg-[var(--color5)]/20 rounded-xl flex items-center justify-center text-[var(--color5)] text-xl">
                  ✓
                </div>
                <p className="text-gray-200 text-lg">{point}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8">
            <ButtonFill
              onClick={() => setIsPopupOpen(true)}
              text="Boost Your Email Marketing Today"
            />
          </div>
        </div>

        {/* ===================== SECTION 4 ===================== */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color5)] mb-6">
            Industries We Serve
          </h2>

          <div className="flex flex-wrap gap-4">
            {industriesServed.map((ind, i) => (
              <div
                key={i}
                className="
            px-5 py-3 rounded-full 
            bg-white/5 border border-[var(--color5)]/30 
            text-gray-200 text-lg
            hover:bg-[var(--color5)] hover:text-black
            transition-all shadow-[0_0_20px_rgba(0,255,255,0.1)]
          "
              >
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 w-11/12 md:w-5/6 mx-auto">
        <div
          className="
      relative rounded-3xl p-6 md:p-10
      backdrop-blur-2xl bg-white/5
      border border-[var(--color5)]/40
      shadow-[0_0_45px_rgba(0,255,255,0.15)]
      hover:shadow-[0_0_30px_var(--color5)]
      transition-all duration-700
      overflow-hidden
    "
        >
          {/* Shine Sweep */}
          <div
            className="
        absolute -top-full left-0 w-full h-full 
        bg-gradient-to-r from-transparent via-[var(--color5)]/20 to-transparent 
        rotate-45 opacity-70
        animate-[shineMove_5s_ease-in-out_infinite]
      "
          />

          {/* Glow Orbs */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-[var(--color5)]/10 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--color5)]/10 blur-3xl rounded-full"></div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            {/* LEFT SIDE */}
            <div>
              <h2 className="text-3xl font-semibold text-[var(--color5)] mb-8 tracking-wide">
                Why We’re the Email Marketing Agency in Delhi You Should Choose
              </h2>

              <div className="space-y-4 text-gray-200 leading-relaxed">
                {[
                  "Data-driven strategies with measurable outcomes.",
                  "Dedicated strategists and copywriters focused on conversions.",
                  "Deep expertise in deliverability and platform integrations.",
                  "Transparent reporting and actionable insights.",
                  "Local market knowledge combined with global best practices.",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-[var(--color5)]"></span>
                    <p className="text-gray-300 group-hover:text-white/90 transition">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div>
              <h2 className="text-3xl font-semibold text-[var(--color5)] mb-8 tracking-wide">
                Ready to Grow with Email Marketing Services in Delhi?
              </h2>

              <div
                className="
            p-6 rounded-2xl bg-white/5 border border-[var(--color5)]/20
            shadow-[0_0_20px_rgba(0,255,255,0.08)]
            hover:shadow-[0_0_30px_var(--color5)]
            transition-all duration-500
          "
              >
                <p className="text-gray-300 leading-relaxed mb-6">
                  If you’re ready to turn your email list into predictable
                  revenue, let’s talk. Book a free strategy call, share your
                  goals, and we’ll provide a tailored roadmap and sample
                  campaign plan.
                </p>

                <ButtonFill text="Book Free Strategy Call" />
              </div>
            </div>
          </div>
        </div>

        {/* Shine Animation */}
        <style>
          {`
      @keyframes shineMove {
        0% { transform: translateY(-160%); }
        100% { transform: translateY(160%); }
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

export default EmailMarketing;

"use client";

import Footer from "../../../../components/Footer";
import Nav from "../../../../components/Nav";
import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
import Hero from "../../../../Assets/Services hero/Graphic_Design.jpg";

import ContactForm from "../../../../components/ContactForm";
import Image from "next/image";
import ButtonFill from "../../../../components/Button";
import PopupForm from "../../../../components/PopupForm";
import GetInTouch from "../../../../components/GetInTouch";
import { SetStateAction, useState } from "react";
import Slider from "react-slick";

const data = [
  {
    title: "Complete Branding Solutions",
    points: ["Logo Design", "Brand Guidelines", "Brand Identity Systems"],
  },
  {
    title: "Marketing & Promotional Design",
    points: [
      "Brochures & Flyers",
      "Posters & Banners",
      "Catalogues & Print Ads",
    ],
  },
  {
    title: "Digital & Social Media Graphics",
    points: [
      "Instagram Creatives",
      "Facebook Ads",
      "YouTube Thumbnails",
      "Carousel Designs",
    ],
  },
  {
    title: "Packaging & Product Design",
    points: ["Labels", "Boxes", "Custom Packaging Visuals"],
  },
  {
    title: "UI/UX Graphics",
    points: ["Website Layout Graphics", "App Screens", "Interface Visuals"],
  },
];

const videoData = [
  {
    title: "Corporate & Business Videos",
    points: [
      "Corporate Profiles",
      "Training Videos",
      "Employee Orientation Videos",
    ],
  },
  {
    title: "Promotional & Marketing Videos",
    points: ["Brand Promo Videos", "Product Ads", "YouTube Ads"],
  },
  {
    title: "Social Media Video Editing",
    points: ["Reels", "Shorts", "TikTok Edits", "Influencer Videos"],
  },
  {
    title: "Event Video Editing",
    points: [
      "Weddings",
      "Corporate Events",
      "Award Ceremonies",
      "Launch Events",
    ],
  },
  {
    title: "Motion Graphics & Animation Editing",
    points: [
      "Explainer Videos",
      "Infographic Animations",
      "Title Animations",
      "Logo Reveal Animations",
    ],
  },
];

const faqs = [
  {
    q: "What services do you offer in graphic designing and video editing?",
    a: `We provide complete creative solutions including logo design, branding, social media creatives, brochures, packaging, promotional videos, reels, corporate films, product videos, and motion graphics.`,
  },
  {
    q: "How do you start a graphic designing or video editing project?",
    a: `Our process begins with understanding your goals, audience, and style preferences. Then we move into concept creation, design/editing development, revisions, and final delivery.`,
  },
  {
    q: "What makes your creative agency in Delhi different from others?",
    a: `We offer a rare combination of high-quality graphic designing and professional video editing, ensuring your brand visuals stay consistent across all platforms. Our strategies are data-driven, creative, and tailored to each brand.`,
  },
  {
    q: "Can I provide input during the design or editing process?",
    a: `Yes! We encourage collaboration. You can share references, feedback, and changes throughout the project to ensure the final result matches your vision.`,
  },
  {
    q: "How long does it take to complete a graphic design or video edit?",
    a: `Basic graphic designs are usually delivered within 2–4 days, while video edits take 2–7 days depending on complexity. Urgent projects are also handled on priority.`,
  },
  {
    q: "What is your pricing structure?",
    a: `Pricing depends on project type, complexity, duration, and deliverables. We offer one-time projects as well as monthly creative packages for brands needing regular content.`,
  },
  {
    q: "Do you offer revisions if I’m not satisfied with the initial work?",
    a: `Yes, we include revision rounds for both graphic designs and video edits to ensure you receive the perfect final output.`,
  },
  {
    q: "What file formats will I receive for designs and videos?",
    a: `Graphic designs are delivered in JPG, PNG, PDF, AI, EPS, or SVG formats, while videos are delivered in high-quality MP4, MOV, or the format of your choice.`,
  },
  {
    q: "Do you offer custom packages for graphic designing and video editing together?",
    a: `Yes, we create combined packages specially designed for brands that require both visuals and video content on a monthly or project basis.`,
  },
  {
    q: "Will the final designs and videos reflect my brand identity?",
    a: `Absolutely. Every design and video is created from scratch with your brand’s voice, colors, message, and target audience in mind.`,
  },
  {
    q: "How do I get started with your services?",
    a: `Simply contact us with your requirements, share your content, and our team will guide you through the process from planning to delivery.`,
  },
  {
    q: "I’m not located in Delhi, can I still work with your agency?",
    a: `Yes! We work with clients across India and internationally. Everything can be coordinated online, including briefings, feedback, and final delivery.`,
  },
];

function GraphicDesigning() {
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
      <title>Professional Graphic Designing</title>
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/graphic-designing"
      />
      <meta
        name="description"
        content="Stand out with unique, creative, and impactful graphic design solutions for digital and print."
      />

      <Nav />
      <section
        className="relative bg-cover bg-center bg-no-repeat py-10"
        style={{ backgroundImage: `url(${Hero.src})` }}
      >
        <div className="bg-black/60 absolute inset-0 z-0" />

        <div className="relative z-10 w-11/12 md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <h1 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
              Top Graphic Designing & Video Editing Company in Delhi
            </h1>

            <p className=" max-w-xl text-white/90 text-justify">
              As a leading graphic designing company in Delhi and a trusted
              video editing company in Delhi, we help brands communicate their
              story through visually compelling designs and professionally
              edited videos. Whether you are looking for a graphic designing
              agency in Delhi to build your brand identity or a video editing
              agency in Delhi to craft high-impact promotional videos, our
              creative team delivers unmatched quality, speed, and innovation.
              From social media creatives to corporate films, our expertise in
              graphic designing in Delhi and video editing in Delhi ensures your
              brand stands out in a competitive market. Partner with us today to
              elevate your visuals.
            </p>
            <ButtonFill
              onClick={() => setIsPopupOpen(true)}
              text="Get a Free Creative Consultation"
            />
          </div>

          {/* Right Form */}
          <ContactForm />
        </div>
      </section>
      <section className="py-12">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-6">
            Leading Graphic Designing Company in Delhi
          </h2>

          <p className=" text-gray-200 text-justify">
            As a leading graphic designing company in Delhi, we specialize in
            creating visually powerful designs that help brands communicate with
            clarity, creativity, and impact. Our team of expert designers blends
            strategy with aesthetics to craft logos, branding elements,
            marketing materials, and digital creatives that truly represent your
            brand’s personality. From startups to established businesses, we
            deliver end-to-end graphic design solutions that enhance visibility,
            build trust, and drive engagement across all platforms. With a
            strong reputation as a reliable graphic designing agency in Delhi,
            we focus on originality, attention to detail, and timely delivery,
            ensuring every design not only looks stunning but also supports your
            business goals effectively.
          </p>
        </div>
      </section>

      <section className="py-12 w-11/12 md:w-5/6 mx-auto relative overflow-hidden">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-4">
            Our Expertise in Graphic Designing in Delhi
          </h2>

          <p className="text-gray-200 leading-relaxed text-justify">
            With deep industry experience and a strong creative foundation, our
            agency brings unmatched expertise to graphic designing in Delhi. We
            understand that every brand has a unique voice, and our designers
            work closely with you to translate that voice into compelling visual
            communication. From brand identity development to digital creatives,
            packaging, marketing collateral, and UI graphics, we deliver designs
            that are both aesthetically striking and strategically effective.
            Our modern design tools and innovative approach help brands stand
            out in today’s competitive digital landscape.
          </p>
        </div>

        {/* MOBILE SLIDER */}
        <div className="block lg:hidden">
          <Slider {...settings}>
            {data.map((item, index) => (
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
                  {/* Shine */}
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

                  {/* Points */}
                  <ul className="space-y-2 text-gray-200 relative z-10">
                    {item.points.map((p, i) => (
                      <li key={i} className="list-disc ml-5">
                        {p}
                      </li>
                    ))}
                  </ul>

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

        {/* DESKTOP GRID */}
        <div
          className="
      hidden lg:grid 
      grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
      gap-10 auto-rows-fr
    "
        >
          {data.map((item, index) => (
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
                {/* Shine */}
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

                {/* Points */}
                <ul className="space-y-2 text-gray-200 relative z-10">
                  {item.points.map((p, i) => (
                    <li key={i} className="list-disc ml-5">
                      {p}
                    </li>
                  ))}
                </ul>

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
            Why We Are the Most Trusted Graphic Designing Agency in Delhi
          </h2>

          {/* Content */}
          <div className="space-y-5 text-gray-200 leading-relaxed text-justify">
            <p>
              As a highly reputed and trusted graphic designing agency in Delhi,
              we are known for delivering creative solutions that combine
              innovation, strategy, and brand understanding. Our clients choose
              us because we go beyond basic visuals - every design is crafted
              with purpose, backed by research, and aligned with your brand’s
              identity and goals. We maintain a strong commitment to
              originality, ensuring that each concept is tailored uniquely for
              your business. Our seamless communication, timely delivery, and
              professional workflow make the entire process smooth and reliable.
              Whether it’s building a new brand from scratch or refreshing an
              existing identity, we provide end-to-end design excellence that
              consistently exceeds expectations. This dedication to quality,
              creativity, and client satisfaction is what makes us one of the
              most trusted graphic designing partners in Delhi.
            </p>

            {/* CTA Button */}
            <div className="mt-6">
              <ButtonFill
                text="Book a Free Creative Consultation"
                onClick={() => setIsPopupOpen(true)}
              />
            </div>
          </div>

          {/* Glow Border */}
          <div
            className="
        absolute inset-0 rounded-3xl border border-transparent 
        group-hover:border-[var(--color5)]/80 transition-all duration-500
      "
          />
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
        {/* HEADING */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-10">
          Our Graphic Designing Process
        </h2>

        {/* DESKTOP VIEW */}
        <div className="hidden lg:flex items-center justify-between relative mt-10 w-full">
          {/* Center Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[var(--color5)]/30 -translate-y-1/2"></div>

          {[
            "Research & Creative Strategy",
            "Concept Development",
            "Design Execution",
            "Revisions & Refinements",
            "Final Delivery With Brand Consistency",
          ].map((step, index) => (
            <div
              key={index}
              className="relative z-10 flex flex-col items-center flex-1"
            >
              <div
                className="
          w-28 xl:w-32 h-28 xl:h-32
          flex items-center justify-center text-center
          px-4 text-xs xl:text-sm
          text-gray-200 font-medium
          rounded-full border-2 border-[var(--color5)]
          bg-white/5 backdrop-blur-sm
          shadow-[0_0_25px_var(--color5)]
          mx-auto
        "
              >
                {step}
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE VIEW */}
        <div className="lg:hidden flex flex-col gap-8 relative mt-10">
          {[
            "Research & Creative Strategy",
            "Concept Development",
            "Design Execution",
            "Revisions & Refinements",
            "Final Delivery With Brand Consistency",
          ].map((step, index, arr) => (
            <div key={index} className="flex items-start gap-4 relative">
              {/* Circle */}
              <div
                className="
            w-6 h-6 rounded-full border-2
            border-[var(--color5)] bg-white/10
            shadow-[0_0_10px_var(--color5)]
            flex-shrink-0
          "
              ></div>

              {/* Vertical Line */}
              {index !== arr.length - 1 && (
                <div
                  className="
              absolute left-3 top-6
              w-px h-12 bg-[var(--color5)]/40
            "
                ></div>
              )}

              {/* Label */}
              <p className="text-gray-200 leading-relaxed">{step}</p>
            </div>
          ))}
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
            Professional Video Editing Company in Delhi
          </h2>

          {/* Content */}
          <p className="text-gray-200 leading-relaxed text-justify">
            As a leading video editing company in Delhi, we specialize in
            transforming raw footage into high-quality, engaging, and visually
            compelling videos that elevate your brand’s story. Our experienced
            editors combine creativity with technical precision, using
            industry-standard tools like Adobe Premiere Pro, Final Cut Pro, and
            After Effects to deliver seamless transitions, crisp audio, dynamic
            effects, and impactful storytelling.
            <br />
            <br />
            Whether you need corporate videos, promotional content, YouTube
            edits, social media reels, or event highlights, we ensure every
            video is crafted with clarity, purpose, and a professional finish.
            Known for reliability and innovation, we are one of the most
            preferred choices for businesses and creators seeking expert video
            editing in Delhi that inspires, informs, and captures attention.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <ButtonFill
              text="Get a Free Video Editing Consultation"
              onClick={() => setIsPopupOpen(true)}
            />
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
            Comprehensive Video Editing in Delhi for Every Industry
          </h2>

          <p className="text-gray-200 leading-relaxed text-justify">
            Our agency provides comprehensive video editing in Delhi designed to
            meet the diverse needs of every industry - whether you’re a
            corporate brand, e-commerce business, real estate company,
            educational institution, or an influencer building a digital
            presence. We understand that each sector requires a unique
            storytelling style, and our editors tailor every project with
            industry-specific creativity, pacing, and messaging. From
            high-energy promotional videos to emotionally driven event edits and
            clean, professional corporate films, our work reflects precision,
            clarity, and visual excellence. By combining advanced editing
            techniques, cinematic transitions, engaging graphics, and sound
            design, we ensure your videos speak directly to your audience and
            deliver maximum impact. No matter your niche, our team brings
            versatile expertise to help your brand stand out with compelling
            video content crafted to perfection.
          </p>
        </div>

        {/* MOBILE SLIDER */}
        <div className="block lg:hidden">
          <Slider {...settings}>
            {videoData.map((item, index) => (
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
                  {/* Shine */}
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

                  {/* Points */}
                  <ul className="space-y-2 text-gray-200 relative z-10">
                    {item.points.map((p, i) => (
                      <li key={i} className="list-disc ml-5">
                        {p}
                      </li>
                    ))}
                  </ul>

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

        {/* DESKTOP GRID */}
        <div
          className="
      hidden lg:grid 
      grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
      gap-10 auto-rows-fr
    "
        >
          {videoData.map((item, index) => (
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
                {/* Shine */}
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

                {/* Points */}
                <ul className="space-y-2 text-gray-200 relative z-10">
                  {item.points.map((p, i) => (
                    <li key={i} className="list-disc ml-5">
                      {p}
                    </li>
                  ))}
                </ul>

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
            Why Choose Us as Your Video Editing Agency in Delhi
          </h2>

          {/* Content */}
          <p className="text-gray-200 leading-relaxed text-justify">
            Choosing the right video editing agency in Delhi can make all the
            difference in how your brand is seen, heard, and remembered. Our
            agency combines creativity, technical expertise, and strategic
            storytelling to deliver videos that not only look stunning but also
            perform exceptionally well across digital platforms. We work closely
            with brands, businesses, and content creators to bring their raw
            footage to life with precision editing, polished transitions,
            cinematic visuals, and impactful audio design. With a strong
            commitment to quality and timely delivery, we ensure every project
            aligns perfectly with your brand vision and marketing goals, making
            us a preferred partner for professional video editing in Delhi.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold text-[var(--color4)] my-6">
            Key Reasons to Choose Us
          </h3>

          {/* Bullet Points - Two Column Layout */}
          <div
            className="
        grid grid-cols-1 md:grid-cols-2 gap-6 
        text-gray-200 text-[15px] mb-10
      "
          >
            <ul className="space-y-3">
              <li className="list-disc ml-5">
                Fast turnaround times without compromising on quality.
              </li>
              <li className="list-disc ml-5">
                Cinematic storytelling that keeps viewers engaged from start to
                finish.
              </li>
              <li className="list-disc ml-5">
                Professional sound mixing for clean, impactful audio output.
              </li>
              <li className="list-disc ml-5">
                High-quality transitions and visual enhancements using
                industry-leading tools.
              </li>
              <li className="list-disc ml-5">
                Expertise across multiple industries, from corporate to
                lifestyle to e-commerce.
              </li>
            </ul>

            <ul className="space-y-3">
              <li className="list-disc ml-5">
                Customized video editing styles tailored to your brand identity
                and audience.
              </li>
              <li className="list-disc ml-5">
                Motion graphics and animation capabilities for added visual
                appeal.
              </li>
              <li className="list-disc ml-5">
                Consistent communication and reliable project management
                throughout the process.
              </li>
              <li className="list-disc ml-5">
                Multiple revision rounds to ensure complete client satisfaction.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <ButtonFill
              text="Book a Free Creative Consultation "
              onClick={() => setIsPopupOpen(true)}
            />
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

export default GraphicDesigning;

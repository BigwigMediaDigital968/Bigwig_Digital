"use client";
import Nav from "../../../../components/Nav";
import ContactForm from "../../../../components/ContactForm";
import bannerImage from "../../../../Assets/dubai.jpg";
import Footer from "../../../../components/Footer";
import seoImage from "../../../../Assets/Dubai/transformBuisness.jpg";

import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
// import { useState } from "react";
import PopupForm from "../../../../components/PopupForm";
import CTABanner from "../../../../components/CTABanner";
import {
  FaPalette,
  FaBullhorn,
  FaLaptop,
  FaMobileAlt,
  FaBoxOpen,
  FaFileAlt,
  FaLightbulb,
  FaMapMarkerAlt,
  FaClock,
  FaDollarSign,
  FaHandsHelping,
} from "react-icons/fa";

import Image from "next/image";
import { useState } from "react";
import GetInTouch from "../../../../components/GetInTouch";
import ButtonFill from "../../../../components/Button";
import ServicesNavigation from "../../../../components/UAEServicesDirectory";

function SMODubai() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="bg-[var(--color1)]">
      <Nav />
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${bannerImage.src})`, // replace with your image path
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative w-11/12 md:w-5/6 mx-auto py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Text */}
          <div className="text-left space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Graphic Designing Services in Dubai
            </h1>
            <h2 className="text-2xl font-semibold leading-tight">
              Transform Your Brand Identity with Creative Graphic Designing
              Services in Dubai
            </h2>
            <p className="text-lg">
              In Dubai’s fast-moving digital world, BigWig Media Digital creates
              designs that speak louder than words. Our Graphic Designing
              Services craft powerful logos, ads, and visuals that inspire and
              convert. Stand out with creative, impactful designs made for
              Dubai’s competitive market.
            </p>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <Image
              src={seoImage}
              alt="Graphic Designing Services in Dubai, UAE"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[var(--color5)]">
              Why Graphic Designing Matters for Businesses in Dubai
            </h2>

            <p className="text-gray-300  mb-4 leading-relaxed">
              Dubai’s market thrives on <strong>visual excellence</strong>. With
              a blend of luxury, innovation, and diversity, brands must appeal
              to a global audience that values creativity and professionalism.
              Your brand design defines your identity — it shapes how people
              perceive your business, interact with your content, and remember
              your name.
            </p>

            <p className="text-gray-300  mb-4 leading-relaxed">
              Our <strong>Graphic Designing Services in Dubai</strong> go beyond
              aesthetics. We design with purpose — every color, font, and image
              is strategically chosen to communicate your brand’s values and
              drive business goals.
            </p>

            <p className="text-gray-300  leading-relaxed font-semibold mb-4">
              The Impact of Professional Graphic Design:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-300  leading-relaxed">
              <li>Builds instant trust and brand recognition.</li>
              <li>Increases engagement across social and digital platforms.</li>
              <li>Enhances the performance of advertising campaigns.</li>
              <li>Creates consistency across all branding materials.</li>
              <li>
                Improves conversions by guiding user attention strategically.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 relative">
        <div className="w-11/12 md:w-5/6 mx-auto">
          {/* HEADING */}
          <h2 className="text-3xl font-bold text-[var(--color5)] text-center md:text-left mb-6">
            Our Graphic Design Process
          </h2>

          <p className="text-gray-300 text-base leading-relaxed mb-10 max-w-4xl">
            We don’t just design — we strategize, conceptualize, and create
            experiences that last. Our process ensures every project aligns with
            your brand vision and speaks directly to your audience.
          </p>

          {/* PROCESS GRID */}
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                step: "1.",
                title: "Brand Understanding",
                desc: "We study your vision, target audience, and competitors to craft a visual identity that truly represents your brand.",
              },
              {
                step: "2.",
                title: "Concept & Ideation",
                desc: "We provide multiple creative directions — from minimal to bold — so you can choose what aligns best.",
              },
              {
                step: "3.",
                title: "Design Creation",
                desc: "High-quality, refined designs crafted with perfect layout, typography, color balance, and aesthetics.",
              },
              {
                step: "4.",
                title: "Feedback & Revisions",
                desc: "We collaborate closely, making structured revisions until the final design feels perfect to you.",
              },
              {
                step: "5.",
                title: "Final Delivery",
                desc: "You receive all required formats (JPG, PNG, AI, PSD, PDF) optimized for print & digital.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
            group relative p-6 rounded-2xl overflow-hidden
            bg-[var(--color1)]/60 backdrop-blur-xl
            border border-white/10 
            shadow-[0_0_25px_rgba(0,0,0,0.45)]
            hover:shadow-[0_0_35px_rgba(167,235,242,0.35)]
            transition-all duration-500
          "
              >
                {/* MATRIX OVERLAY */}
                <div
                  className="
              absolute inset-0 opacity-[0.15] 
              bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] 
              bg-cover bg-center mix-blend-screen pointer-events-none
            "
                ></div>

                {/* GLOW BORDER */}
                <div
                  className="
              absolute inset-0 rounded-2xl border border-transparent
              group-hover:border-[var(--color5)]
              transition-all duration-500
            "
                ></div>

                {/* CONTENT */}
                <div className="relative z-10">
                  <div className="text-[var(--color5)] font-bold text-2xl mb-2 flex items-center gap-2">
                    {item.step}
                    <span className="text-[var(--color4)]">{item.title}</span>
                  </div>

                  <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 relative">
        <div className="w-11/12 md:w-5/6 mx-auto">
          {/* HEADING */}
          <h2 className="text-3xl  font-bold text-[var(--color5)] mb-6 text-center md:text-left">
            Our Range of Graphic Designing Services in Dubai
          </h2>

          <p className="text-gray-300 text-base leading-relaxed mb-10 max-w-4xl">
            We offer a wide range of visually stunning and brand-driven design
            solutions that help businesses create a powerful, memorable, and
            consistent visual identity across all platforms.
          </p>

          {/* GRID LIST */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: FaPalette,
                title: "Brand Identity Design",
                desc: "Logos, color palettes, typography and brand guidelines that define your identity and make you instantly recognizable.",
              },
              {
                icon: FaBullhorn,
                title: "Marketing & Promotional Designs",
                desc: "Flyers, brochures, posters, presentations and advertising creatives that convert attention into action.",
              },
              {
                icon: FaLaptop,
                title: "Digital & Social Media Creatives",
                desc: "High-impact banner ads, social media posts, infographics and carousel creatives optimized for engagement.",
              },
              {
                icon: FaMobileAlt,
                title: "Website & App Graphics",
                desc: "UI-focused graphics, icons, UI elements and illustrations that enhance user experience and conversions.",
              },
              {
                icon: FaBoxOpen,
                title: "Packaging Design",
                desc: "Creative, functional and standout packaging designs that elevate your products and attract buyers.",
              },
              {
                icon: FaFileAlt,
                title: "Corporate Collateral Design",
                desc: "Pitch decks, corporate profiles, proposals and documents that maintain brand consistency and trust.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
            group flex items-start gap-4 p-6 rounded-2xl
            bg-[var(--color1)]/60 backdrop-blur-xl
            border border-white/10
            shadow-[0_0_25px_rgba(0,0,0,0.4)]
            hover:shadow-[0_0_35px_rgba(167,235,242,0.25)]
            transition-all duration-300 hover:-translate-y-1
            relative overflow-hidden
          "
              >
                {/* BG HOLOGRAM */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen pointer-events-none"></div>

                {/* FLOATING GRADIENT BLOB */}
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br from-[var(--color3)] to-[var(--color4)] blur-2xl opacity-30 pointer-events-none"></div>

                <item.icon className="text-[var(--color5)] text-3xl flex-shrink-0 z-10" />

                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-[var(--color4)] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 bg-[var(--color1)]/70 border border-white/10 backdrop-blur-xl rounded-2xl p-10 shadow-[0_0_40px_rgba(167,235,242,0.15)] relative overflow-hidden">
            {/* glow line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent animate-pulse"></div>

            {/* floating blob */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-br from-[var(--color3)] to-[var(--color4)] blur-3xl opacity-20"></div>

            <h3 className="text-2xl md:text-3xl font-bold text-[var(--color5)] mb-4 z-10 relative">
              🎨 Want Stunning Designs That Make Your Brand Unforgettable?
            </h3>
            <p className="text-gray-300 text-lg mb-6 z-10 relative">
              Start your journey with{" "}
              <strong className="text-[var(--color5)]">
                BigWig Media Digital’s Graphic Designing Services in Dubai
              </strong>{" "}
              and elevate your brand presence.
            </p>
            <div className="flex justify-center">
              <ButtonFill
                onClick={() => setIsPopupOpen(true)}
                text="Get Started Now"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 relative ">
        <div className="w-11/12 md:w-5/6 mx-auto">
          {/* ================== Section 1: Why Choose Us ================== */}
          <h2 className="text-3xl  font-bold text-[var(--color5)] mb-8 text-center md:text-left">
            Why Choose BigWig Media Digital for Graphic Designing in Dubai
          </h2>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: FaLightbulb,
                title: "Creative Excellence",
                desc: "Our designers bring innovation, originality, and cultural relevance to every project.",
              },
              {
                icon: FaMapMarkerAlt,
                title: "Dubai-Focused Strategy",
                desc: "We understand the preferences of both local and international audiences in the UAE.",
              },
              {
                icon: FaClock,
                title: "On-Time Delivery",
                desc: "Fast turnaround time while maintaining top-tier creative quality.",
              },
              {
                icon: FaDollarSign,
                title: "Affordable Packages",
                desc: "Flexible pricing plans designed for startups, SMEs, and enterprise brands.",
              },
              {
                icon: FaHandsHelping,
                title: "End-to-End Support",
                desc: "From conceptualization to final delivery — we manage the entire design pipeline.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
            group p-6 rounded-2xl relative overflow-hidden
            bg-[var(--color1)]/60 border border-white/10 backdrop-blur-xl
            shadow-[0_0_25px_rgba(0,0,0,0.4)] 
            hover:border-[var(--color5)] hover:shadow-[0_0_40px_rgba(167,235,242,0.35)]
            transition-all duration-300
          "
              >
                {/* Hologram Texture */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center pointer-events-none"></div>

                {/* Glow blob */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-2xl bg-[var(--color4)]/40"></div>

                <item.icon className="w-10 h-10 text-[var(--color5)] mb-4" />
                <h3 className="text-xl font-semibold text-[var(--color5)] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* ================== Section 2: Industries We Design For ================== */}
          <h2 className="text-3xl  font-bold text-[var(--color5)] mb-6 text-center md:text-left">
            Industries We Design For
          </h2>

          <p className="text-gray-300 text-base leading-relaxed mb-10 max-w-3xl">
            Our Graphic Designing Services in Dubai cater to diverse industries.
            Each niche has its unique visual language — and we ensure your
            creative assets reflect your industry while standing out from the
            rest.
          </p>

          {/* Industry Pills */}
          <div className="flex flex-wrap gap-4">
            {[
              "Real Estate & Construction",
              "Hospitality & Restaurants",
              "Fashion & Lifestyle",
              "Tech & Startups",
              "Health & Fitness",
              "Education & Training",
              "Events & Entertainment",
            ].map((industry, index) => (
              <div
                key={index}
                className="
            flex items-center gap-2 px-4 py-2 rounded-full 
            bg-[var(--color1)]/50 border border-[var(--color5)]/30 
            shadow-[0_0_10px_rgba(167,235,242,0.15)]
            backdrop-blur-md
          "
              >
                <span className="text-[var(--color5)] font-bold">•</span>
                <span className="text-gray-200">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 relative bg-gradient-to-b from-[var(--color1)] via-[var(--color2)] to-[var(--color1)]">
        <div className="w-11/12 md:w-5/6 mx-auto grid md:grid-cols-3 gap-12 items-start">
          {/* LEFT SIDE */}
          <div className="col-span-2 space-y-6">
            <h2 className="text-3xl font-bold text-[var(--color5)] mb-4">
              How Great Design Impacts Marketing Performance
            </h2>

            <p className="text-gray-300 text-base leading-relaxed">
              Effective graphic design directly impacts your marketing ROI. When
              your audience connects emotionally with your visuals, they’re more
              likely to trust your brand and take action.
            </p>

            <p className="text-gray-300 text-base leading-relaxed">
              A strong visual identity can:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-300 text-base">
              <li>Boost your brand’s social media engagement by 80%</li>
              <li>Increase ad click-through rates and conversions</li>
              <li>Improve customer recall and loyalty</li>
              <li>Strengthen your overall digital marketing presence</li>
            </ul>

            <p className="text-gray-300 text-base leading-relaxed">
              💡 Want your designs to deliver measurable impact? Partner with{" "}
              <strong>BigWig Media Digital</strong> — Dubai’s creative
              powerhouse for high-quality Graphic Designing Services in Dubai.
            </p>
          </div>

          {/* RIGHT SIDE BOX */}
          <div
            className="
        relative p-5 rounded-2xl overflow-hidden
        bg-[var(--color1)]/70 backdrop-blur-xl
        border border-[var(--color5)]/30 
        shadow-[0_0_25px_rgba(167,235,242,0.15)]
        hover:shadow-[0_0_35px_rgba(167,235,242,0.35)]
        transition-all duration-500
      "
          >
            {/* Light Blob */}
            <div className="absolute -top-10 -right-10 w-52 h-52 bg-gradient-to-br from-[var(--color3)] to-[var(--color4)] rounded-full blur-3xl opacity-30 pointer-events-none"></div>

            {/* Hologram Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[var(--color5)] mb-4">
                Local Expertise, Global Standards
              </h3>

              <p className="text-gray-300 text-base leading-relaxed mb-4">
                Dubai is a global hub — your brand visuals must appeal to an
                international audience while staying locally relevant. Our
                designers understand cultural aesthetics, luxury preferences,
                and modern design trends.
              </p>

              <p className="text-gray-300 text-base leading-relaxed">
                Whether you need Arabic-English bilingual designs, event
                collaterals, or product branding for UAE-based consumers, we’ve
                got you covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 relative">
        <div className="w-11/12 md:w-5/6 mx-auto ">
          {/* HEADING */}
          <h2 className="text-3xl font-bold text-[var(--color5)] mb-6 text-center md:text-left">
            Our Commitment to Quality and Originality
          </h2>

          {/* Paragraphs */}
          <p className="text-gray-300 text-base leading-relaxed mb-4">
            We take pride in crafting 100% original designs — no templates, no
            shortcuts. Every creative we deliver is built from scratch to ensure
            your brand stands out.
          </p>

          <p className="text-gray-300 text-base leading-relaxed mb-5">
            Our Graphic Designing Services in Dubai follow strict quality
            standards:
          </p>

          {/* QUALITY GRID */}
          <div className="flex flex-wrap gap-6 mb-16">
            {[
              "High-resolution output",
              "Copyright-safe assets",
              "Brand-consistent visuals",
              "SEO and SMO-friendly creatives",
            ].map((item, i) => (
              <div
                key={i}
                className="
            bg-[var(--color1)]/60 border border-white/10 
            rounded-xl p-5 shadow-[0_0_25px_rgba(0,0,0,0.35)]
            hover:shadow-[0_0_35px_rgba(167,235,242,0.25)]
            transition-all duration-300 backdrop-blur-xl
            flex items-start gap-3 relative overflow-hidden
          "
              >
                {/* Hologram Spark */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-[var(--color3)] to-[var(--color4)] rounded-full blur-2xl opacity-20"></div>

                <span className="text-[var(--color5)] font-bold text-xl">
                  ✔
                </span>
                <span className="text-gray-300 text-base">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA BOX */}
          <div
            className="
        bg-[var(--color1)]/70 border border-white/10 rounded-2xl 
        p-10 shadow-[0_0_35px_rgba(0,0,0,0.45)] backdrop-blur-xl 
        relative overflow-hidden text-center
      "
          >
            {/* Glow Blob */}
            <div className="absolute -left-10 -top-10 w-44 h-44 bg-gradient-to-br from-[var(--color3)] to-[var(--color4)] rounded-full blur-3xl opacity-30"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--color5)] mb-4 relative z-10">
              Let’s Create Something Extraordinary
            </h3>
            <p className="text-gray-300 text-base leading-relaxed mb-5 relative z-10">
              Your brand deserves visuals that create impact. Whether you&#39;re
              launching a product, rebranding, or promoting —
              <strong> BigWig Media Digital </strong>
              delivers standout Graphic Designing Services in Dubai.
            </p>
            <p className="text-gray-300 text-base leading-relaxed mb-3 relative z-10">
              📞 Ready to bring your brand to life? Get a free creative
              consultation today.
            </p>
            <p className="text-gray-300 text-base leading-relaxed relative z-10">
              📩 Email us or schedule a call — let’s build a visual identity
              your audience remembers.
            </p>
            <div className="flex justify-center mt-5">
              <ButtonFill
                onClick={() => setIsPopupOpen(true)}
                text="Get Started Today"
              />
            </div>
          </div>
        </div>
      </section>

      <OurProcess />
      <WhyBigwig />
      <ServicesNavigation />
      <GetInTouch />

      <Footer />
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}

export default SMODubai;

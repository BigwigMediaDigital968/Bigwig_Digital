"use client";
import Nav from "../../../../components/Nav";
import ContactForm from "../../../../components/ContactForm";
import bannerImage from "../../../../Assets/dubai.jpg";
import Footer from "../../../../components/Footer";
import seoImage from "../../../../Assets/Dubai/transformBuisness.jpg";

import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
// import { useState } from "react";
// import PopupForm from "../../components/PopupForm";
import CTABanner from "../../../../components/CTABanner";

import Image from "next/image";
import GetInTouch from "../../../../components/GetInTouch";
import ServicesNavigation from "../../../../components/UAEServicesDirectory";

function EmailMarketingInDubai() {
  //   const [isPopupOpen, setIsPopupOpen] = useState(false);

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
              Power Your Brand with Email Marketing Services in Dubai, UAE
            </h1>
            <h2 className="text-2xl font-semibold leading-tight">
              Trusted Email Marketing Agency in Dubai, UAE
            </h2>
            <p className="text-lg">
              Want your business to stand out and land directly in your
              customer’s inbox, not their spam folder? At{" "}
              <strong>BigWig Digital</strong>, we deliver result-driven{" "}
              <strong>email marketing services in Dubai</strong> that help
              brands engage, convert, and retain customers effectively. As a
              leading <strong>email marketing agency in Dubai, UAE</strong>, we
              specialize in creating personalized campaigns that drive
              measurable growth.
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
              src={seoImage} // replace with your email marketing image if available
              alt="Email Marketing Services in Dubai, UAE"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-3xl  font-bold mb-4 text-[var(--color5)]">
              Why Email Marketing Still Wins
            </h2>

            <p className="text-gray-300 mb-4 leading-relaxed text-base">
              Email marketing remains one of the most effective ways to reach
              your audience directly. It allows you to build personal
              relationships, maximize ROI, and track performance — all while
              automating and scaling your campaigns effortlessly.
            </p>

            <div>
              <h3 className="text-2xl font-semibold text-[var(--color4)] mb-4">
                Key Benefits of Email Marketing
              </h3>
              <ul className="space-y-2 text-gray-300 text-base">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color5)] font-bold">•</span>
                  Direct & Personal – Build one-to-one relationships with your
                  audience.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color5)] font-bold">•</span>
                  Cost-Effective – Enjoy high ROI at lower costs than
                  traditional ads.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color5)] font-bold">•</span>
                  Automated & Scalable – Automate campaigns and scale
                  effortlessly.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color5)] font-bold">•</span>
                  Measurable – Track results in real time and optimize for
                  better performance.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12 font-raleway">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[var(--color5)]">
          Our Email Marketing Services in Dubai
        </h2>

        {/* GRID */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Email Campaign Strategy",
              desc: "Custom flows aligned with your business goals—awareness, conversion, or retention.",
            },
            {
              title: "Email Design & Development",
              desc: "Responsive, visually engaging templates optimized for all devices.",
            },
            {
              title: "Copywriting That Converts",
              desc: "High-impact messaging and subject lines designed to increase clicks.",
            },
            {
              title: "Marketing Automation",
              desc: "Welcome series, abandoned cart, re-engagement flows & more.",
            },
            {
              title: "A/B Testing & Optimization",
              desc: "Data-backed testing to improve CTR, open rate and conversions.",
            },
            {
              title: "Email List Management",
              desc: "Grow, segment, clean lists for better targeting & deliverability.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
          relative p-6 rounded-2xl
          bg-[var(--color1)]/70 backdrop-blur-xl 
          border border-white/10 
          shadow-[0_12px_30px_rgba(2,6,23,0.45)]
          hover:shadow-[0_0_25px_rgba(167,235,242,0.35)]
          hover:border-[var(--color5)]
          transition-all duration-500
          overflow-hidden
        "
            >
              {/* Hologram texture */}
              <div
                className="
          absolute inset-0 opacity-[0.12]
          bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')]
          bg-cover bg-center mix-blend-screen pointer-events-none
        "
              />

              {/* Accent blob */}
              <div
                className="
          absolute -top-10 -right-10 w-44 h-44 rounded-full 
          bg-gradient-to-br from-[var(--color3)] to-[var(--color4)]
          opacity-25 blur-2xl pointer-events-none
        "
              />

              {/* CONTENT */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="
              w-12 h-12 rounded-xl flex items-center justify-center
              bg-[var(--color5)]/10 border border-[var(--color5)]/30
              shadow-[0_6px_16px_rgba(167,235,242,0.25)]
            "
                  >
                    <span className="text-[var(--color5)] font-bold text-lg">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--color4)]">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-white/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12 space-y-12">
        {/* Section 1: Intro */}
        <div className="max-w-4xl ">
          <h2 className="text-3xl  font-bold text-[var(--color5)] mb-4 ">
            Why Brands Trust Our Email Marketing Services in Dubai
          </h2>

          <p className="text-white/80 text-base leading-relaxed">
            Across industries, brands rely on our email marketing agency in
            Dubai because email delivers the highest ROI. With our strategic and
            personalized approach, we create campaigns that help businesses sell
            more, advertise better, and build lasting customer relationships.
          </p>
        </div>

        {/* Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <div
            className="
      relative p-8 rounded-2xl overflow-hidden
      bg-[var(--color1)]/70 backdrop-blur-xl
      border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.45)]
      transition-all duration-500 hover:shadow-[0_0_40px_rgba(167,235,242,0.35)]
      hover:border-[var(--color5)]
    "
          >
            {/* Matrix Overlay */}
            <div className="absolute inset-0 opacity-[0.15] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover mix-blend-screen pointer-events-none"></div>

            {/* Glow Border */}
            <div className="absolute inset-0 rounded-2xl border border-transparent hover:border-[var(--color5)] transition-all duration-500"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-[var(--color5)] mb-4 tracking-wide ">
                Work With a Professional Email Marketing Agency in Dubai
              </h3>

              <ul className="space-y-3 text-white/80  leading-relaxed list-disc pl-5">
                <li>Hands-free campaign management systems.</li>
                <li>Content and design that reflect your brand’s voice.</li>
                <li>Compliance with global email standards.</li>
                <li>Seamless CRM, eCommerce, and CMS integrations.</li>
              </ul>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            className="
      relative p-8 rounded-2xl overflow-hidden
      bg-[var(--color1)]/70 backdrop-blur-xl
      border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.45)]
      transition-all duration-500 hover:shadow-[0_0_40px_rgba(167,235,242,0.35)]
      hover:border-[var(--color5)]
    "
          >
            {/* Matrix Overlay */}
            <div className="absolute inset-0 opacity-[0.15] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover mix-blend-screen pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-[var(--color5)] mb-4">
                How Email Marketing Helps New Businesses in Dubai
              </h3>

              <ul className="space-y-3 text-white/80  leading-relaxed list-disc pl-5">
                <li>Reaches thousands at minimal cost.</li>
                <li>Creates instant brand awareness with personalization.</li>
                <li>Drives early engagement via updates & promotions.</li>
                <li>Builds a loyal customer base from day one.</li>
              </ul>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            className="
      relative p-8 rounded-2xl overflow-hidden
      bg-[var(--color1)]/70 backdrop-blur-xl
      border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.45)]
      transition-all duration-500 hover:shadow-[0_0_40px_rgba(167,235,242,0.35)]
      hover:border-[var(--color5)]
    "
          >
            {/* Hologram Overlay */}
            <div className="absolute inset-0 opacity-[0.15] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover mix-blend-screen pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-[var(--color5)] mb-4 ">
                Wherever You Are in the UAE, We’ve Got You Covered
              </h3>

              <ul className="space-y-3 text-white/80 leading-relaxed list-disc pl-5">
                <li>Hyper-local targeting for Dubai & UAE businesses.</li>
                <li>Tailored B2B & B2C email strategies.</li>
                <li>Bulk campaign to advanced automation flow.</li>
                <li>Scalable campaigns deployable instantly.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <OurProcess />
      <WhyBigwig />
      <ServicesNavigation />
      <GetInTouch />

      <Footer />
      {/* <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} /> */}
    </div>
  );
}

export default EmailMarketingInDubai;

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

function WebDesignInDubai() {
  //   const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="bg-white text-black font-raleway">
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
              Best Website Designing Services in Dubai, UAE
            </h1>
            <h2 className="text-2xl font-semibold leading-tight">
              Your Trusted Website Designing Agency in Dubai, UAE
            </h2>
            <p className="text-lg">
              A professional website is no longer just an option; it’s a
              necessity. At <strong>BigWig Digital</strong>, we specialize in
              delivering <strong>website design services in Dubai</strong> that
              are creative, scalable, and results-driven. As a leading{" "}
              <strong>website designing agency in Dubai, UAE</strong>, we craft
              designs that don’t just look good but also help businesses achieve
              measurable growth in the competitive digital landscape.
            </p>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto pt-12 bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <Image
              src={seoImage} // replace with your web development image
              alt="Best Web Development Company in Dubai, UAE"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Best Web Development Company in Dubai, UAE
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              At <strong>BigWig Digital</strong>, we go beyond coding — we craft
              high-performing, visually stunning, and conversion-optimized
              websites that fuel your business growth. We specialize in creating
              <strong> mobile-responsive, SEO-friendly</strong> websites
              tailored to your goals.
            </p>

            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-2xl shadow-md border border-yellow-200 mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Why Clients Choose Us
              </h3>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">•</span>
                  High-quality, mobile-responsive websites
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">•</span>
                  Cost-effective and easy-to-manage web solutions
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">•</span>
                  Attractive, conversion-focused landing pages
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">•</span>
                  SEO-friendly website structures
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">•</span>
                  More than 900 successful projects delivered
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            We Focus on Your Growth, Not Just Websites
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At <strong>BigWig Digital</strong>, we’re more than a website
            designing agency in Dubai — we are your growth partners. Whether
            it’s digital marketing, website design, or full-scale development,
            our services are backed by expertise, creativity, and a
            results-oriented approach.
          </p>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Custom Web Development for Every Business Need
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            We deliver custom solutions, including high-performance,
            user-friendly, and scalable digital platforms tailored to your
            business goals in the UAE market.
          </p>
        </div>

        {/* Key Services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            "User-friendly, high-performance websites",
            "eCommerce platforms",
            "CMS-based sites",
            "Web apps & SaaS solutions",
            "Enterprise portals",
          ].map((point, i) => (
            <div
              key={i}
              className="p-6 border border-gray-200 rounded-2xl hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--primary-color)] text-white font-bold">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{point}</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Tailored to meet the unique needs of your business in the UAE
                market.
              </p>
            </div>
          ))}
        </div>

        {/* Advanced Capabilities */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="flex flex-col space-y-8">
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-md mx-auto flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Future-Ready Technologies for Scalable Solutions
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We use modern technologies like{" "}
                <strong>React.js, Angular, Vue.js, Node.js,</strong> and{" "}
                <strong>PWAs</strong> to build secure, scalable, and
                high-performing websites. With AI-powered tools, automation, and
                API integrations, your site stays ahead of the curve.
              </p>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-md mx-auto flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Designed for Experience and Engagement
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our designs combine aesthetics and usability — ensuring visitors
                stay longer and convert better. From chatbots and voice search
                to intuitive navigation, every touchpoint delivers engagement.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-8">
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-md mx-auto flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Creative Design Backed by Strategy
              </h3>
              <p className="text-gray-700 leading-relaxed">
                As a trusted website designing agency in Dubai, we go beyond
                visuals — crafting experiences aligned with your brand strategy
                to build trust and visibility.
              </p>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-md mx-auto flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Trusted by Brands Worldwide
              </h3>
              <p className="text-gray-700 leading-relaxed">
                With over <strong>900+ successful projects</strong> across
                industries — from healthcare to education to retail — we’ve
                earned client trust in India and are expanding across the UAE
                market.
              </p>
            </div>
          </div>
        </div>
      </section>

      <OurProcess />
      <WhyBigwig />
      <CTABanner
        title="Let’s build websites that attract visitors, convert leads, and elevate your brand in Dubai."
        buttonText="Get Started Today"
      />

      <Footer />
      {/* <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} /> */}
    </div>
  );
}

export default WebDesignInDubai;

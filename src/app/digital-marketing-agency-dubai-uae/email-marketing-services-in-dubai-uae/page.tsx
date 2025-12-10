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

function EmailMarketingInDubai() {
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

      <section className="w-11/12 md:w-5/6 mx-auto pt-12 bg-white">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Why Email Marketing Still Wins
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              Email marketing remains one of the most effective ways to reach
              your audience directly. It allows you to build personal
              relationships, maximize ROI, and track performance — all while
              automating and scaling your campaigns effortlessly.
            </p>

            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-2xl shadow-md border border-yellow-200 mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Key Benefits of Email Marketing
              </h3>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">•</span>
                  Direct & Personal – Build one-to-one relationships with your
                  audience.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">•</span>
                  Cost-Effective – Enjoy high ROI at lower costs than
                  traditional ads.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">•</span>
                  Automated & Scalable – Automate campaigns and scale
                  effortlessly.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">•</span>
                  Measurable – Track results in real time and optimize for
                  better performance.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto pt-12 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 text-center">
          Our Email Marketing Services in Dubai
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 1 */}
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-2xl shadow-md border border-yellow-200 flex flex-col h-full">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              1. Email Campaign Strategy
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Custom flows aligned with your business goals, whether for
              awareness, conversion, or retention.
            </p>
          </div>

          {/* 2 */}
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-2xl shadow-md border border-yellow-200 flex flex-col h-full">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              2. Email Design & Development
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Responsive, visually appealing templates that perform seamlessly
              across all devices.
            </p>
          </div>

          {/* 3 */}
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-2xl shadow-md border border-yellow-200 flex flex-col h-full">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              3. Copywriting That Converts
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Engaging subject lines and compelling content designed to maximize
              clicks and conversions.
            </p>
          </div>

          {/* 4 */}
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-2xl shadow-md border border-yellow-200 flex flex-col h-full">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              4. Marketing Automation
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Smart automation, including welcome series, cart abandonment,
              re-engagement flows, and more.
            </p>
          </div>

          {/* 5 */}
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-2xl shadow-md border border-yellow-200 flex flex-col h-full">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              5. A/B Testing & Optimization
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Data-driven testing to boost open rates, CTRs, and overall
              conversions.
            </p>
          </div>

          {/* 6 */}
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-2xl shadow-md border border-yellow-200 flex flex-col h-full">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              6. Email List Management
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Grow, segment, and clean your lists for better targeting and
              deliverability.
            </p>
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-16 bg-white space-y-12">
        {/* Section 1: Simple Paragraph */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Brands Trust Our Email Marketing Services in Dubai
          </h2>
          <p className="text-gray-700 text-lg md:text-xl">
            Across industries, brands rely on our email marketing agency in
            Dubai because email still delivers the highest ROI. With our
            strategic and personalized approach, we create campaigns that help
            businesses sell more, advertise better, and build lasting customer
            relationships.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Section 2: Work With Us */}
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-8 rounded-2xl shadow-md border border-yellow-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Work With a Professional Email Marketing Agency in Dubai
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
              <li>Hands-free campaign management systems.</li>
              <li>Content and design that reflect your brand’s voice.</li>
              <li>Compliance with global email marketing standards.</li>
              <li>Seamless CRM, eCommerce, and CMS integrations.</li>
            </ul>
          </div>

          {/* Section 3: How Email Marketing Helps New Businesses */}
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-8 rounded-2xl shadow-md border border-yellow-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              How Email Marketing Services Help New Businesses in Dubai
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
              <li>Reaches thousands at minimal cost.</li>
              <li>
                Creates instant brand awareness with personalized campaigns.
              </li>
              <li>Drives early engagement through updates and promotions.</li>
              <li>Builds a loyal customer base from day one.</li>
            </ul>
          </div>

          {/* Section 4: Coverage Across UAE */}
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-8 rounded-2xl shadow-md border border-yellow-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Wherever You Are in the UAE, We’ve Got You Covered
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
              <li>Hyper-local targeting for Dubai and UAE businesses.</li>
              <li>Tailored B2B & B2C email strategies.</li>
              <li>Bulk campaign management to advanced automation.</li>
              <li>Scalable campaigns ready to deploy instantly.</li>
            </ul>
          </div>
        </div>
      </section>

      <OurProcess />
      <WhyBigwig />
      <CTABanner
        title="Let’s create email campaigns that drive sales, boost engagement, and grow your brand in Dubai."
        buttonText="Start Your Campaign Today"
      />

      <Footer />
      {/* <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} /> */}
    </div>
  );
}

export default EmailMarketingInDubai;

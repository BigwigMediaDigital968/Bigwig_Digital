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

function SMODubai() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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

      <section className="w-11/12 md:w-5/6 mx-auto py-12 bg-white">
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              Why Graphic Designing Matters for Businesses in Dubai
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Dubai’s market thrives on <strong>visual excellence</strong>. With
              a blend of luxury, innovation, and diversity, brands must appeal
              to a global audience that values creativity and professionalism.
              Your brand design defines your identity — it shapes how people
              perceive your business, interact with your content, and remember
              your name.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Our <strong>Graphic Designing Services in Dubai</strong> go beyond
              aesthetics. We design with purpose — every color, font, and image
              is strategically chosen to communicate your brand’s values and
              drive business goals.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-semibold mb-4">
              The Impact of Professional Graphic Design:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
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

      <section className="bg-white py-12">
        <div className="w-11/12 md:w-5/6 mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center md:text-left mb-12">
            Our Graphic Design Process
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-12">
            We don’t just design — we strategize, conceptualize, and create
            experiences that last. Our process ensures every project aligns with
            your brand’s objectives and speaks directly to your audience.
          </p>

          {/* Steps */}
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                step: "1.",
                title: "Brand Understanding",
                desc: "We study your vision, target audience, and competitors to craft a visual identity that truly reflects your brand.",
              },
              {
                step: "2.",
                title: "Concept & Ideation",
                desc: "Multiple creative directions and concept drafts are presented — from minimalistic to bold — so you can pick the one that resonates.",
              },
              {
                step: "3.",
                title: "Design Creation",
                desc: "High-resolution, pixel-perfect designs are crafted for both print and digital, with attention to typography, color, and balance.",
              },
              {
                step: "4.",
                title: "Feedback & Revisions",
                desc: "We collaborate closely and provide multiple revisions to ensure you’re fully satisfied before final delivery.",
              },
              {
                step: "5.",
                title: "Final Delivery",
                desc: "All formats (JPG, PNG, AI, PSD, PDF, etc.) are delivered, optimized for web and print, ready to impress anywhere.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition"
              >
                <div className="text-[var(--primary-color)] font-bold text-2xl mb-3">
                  {item.step} {item.title}
                </div>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="w-11/12 md:w-5/6 mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center md:text-left mb-12">
            Our Range of Graphic Designing Services in Dubai
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-12">
            We offer an extensive range of design solutions to help businesses
            build a consistent and creative visual identity across all
            touchpoints.
          </p>

          {/* Services List */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: FaPalette,
                title: "Brand Identity Design",
                desc: "From logos to brand guidelines, we create a visual language that defines your business and leaves a lasting impression.",
              },
              {
                icon: FaBullhorn,
                title: "Marketing & Promotional Designs",
                desc: "Flyers, posters, brochures, and business cards designed to grab attention and convert prospects into customers.",
              },
              {
                icon: FaLaptop,
                title: "Digital Creatives",
                desc: "Social media posts, banner ads, infographics, and carousel creatives optimized for digital engagement.",
              },
              {
                icon: FaMobileAlt,
                title: "Website & App Graphics",
                desc: "User-friendly, visually appealing designs aligned with your brand to improve UX and conversions.",
              },
              {
                icon: FaBoxOpen,
                title: "Packaging Design",
                desc: "Creative and practical packaging designs that make your products stand out both on shelves and online.",
              },
              {
                icon: FaFileAlt,
                title: "Corporate Design Materials",
                desc: "Pitch decks, company profiles, presentation templates, and reports that communicate professionalism and trust.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <item.icon className="text-[var(--primary-color)] text-3xl flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl p-8 shadow-inner">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              🖌️ Looking for design consistency across all channels?
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Get started with{" "}
              <strong>
                BigWig Media Digital’s Graphic Designing Services in Dubai
              </strong>{" "}
              today.
            </p>
            <button
              onClick={() => setIsPopupOpen(true)}
              className="bg-[var(--primary-color)] cursor-pointer text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="w-11/12 md:w-5/6 mx-auto px-6">
          {/* ================== Section 1: Why Choose Us ================== */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center md:text-left mb-12">
            Why Choose BigWig Media Digital for Graphic Designing in Dubai
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: FaLightbulb,
                title: "Creative Excellence",
                desc: "Our designers bring innovation, originality, and cultural relevance to every project.",
              },
              {
                icon: FaMapMarkerAlt,
                title: "Dubai-Focused Strategy",
                desc: "We understand the preferences of local and international audiences in Dubai’s market.",
              },
              {
                icon: FaClock,
                title: "On-Time Delivery",
                desc: "Fast turnaround without compromising on quality.",
              },
              {
                icon: FaDollarSign,
                title: "Affordable Packages",
                desc: "Flexible pricing for startups, SMEs, and large enterprises.",
              },
              {
                icon: FaHandsHelping,
                title: "End-to-End Support",
                desc: "From concept to campaign execution — we handle it all.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <item.icon className="text-[var(--primary-color)] text-3xl flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ================== Section 2: Industries We Design For ================== */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center md:text-left mb-6">
            Industries We Design For
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
            Our Graphic Designing Services in Dubai cater to diverse industries.
            Each industry has its own design language, and we ensure your
            visuals fit your niche while standing out from competitors.
          </p>

          <div className="flex flex-wrap gap-4 text-gray-700 dark:text-gray-300 text-lg">
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
                className="flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-full px-4 py-2"
              >
                <span className="text-[var(--primary-color)] font-bold">•</span>
                <span>{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="w-11/12 md:w-5/6 mx-auto px-6 grid md:grid-cols-3 gap-12 items-start">
          {/* Left Side - Text */}
          <div className="col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How Great Design Impacts Marketing Performance
            </h2>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Effective graphic design directly impacts your marketing ROI. When
              your audience connects emotionally with your visuals, they’re more
              likely to trust your brand and take action.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              A strong visual identity can:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg mb-6">
              <li>Boost your brand’s social media engagement by 80%</li>
              <li>Increase ad click-through rates and conversions</li>
              <li>Improve customer recall and loyalty</li>
              <li>Strengthen your overall digital marketing presence</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              💡 Want your designs to deliver measurable impact? Partner with{" "}
              <strong>BigWig Media Digital</strong> — Dubai’s creative
              powerhouse for high-quality Graphic Designing Services in Dubai.
            </p>
          </div>

          {/* Right Side - Box */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 shadow-lg col-span-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Local Expertise, Global Standards
            </h3>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
              Dubai is a global hub — your brand visuals must appeal to an
              international audience while staying locally relevant. Our
              designers understand cultural aesthetics, luxury preferences, and
              modern design trends that resonate with Dubai’s business
              environment.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Whether you need Arabic-English bilingual designs, event
              collaterals, or product branding for UAE-based consumers, we’ve
              got you covered.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="w-11/12 md:w-5/6 mx-auto px-6">
          {/* Commitment to Quality */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center md:text-left">
            Our Commitment to Quality and Originality
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
            We take pride in crafting 100% original designs — no templates, no
            shortcuts. Every creative you receive is built from scratch,
            ensuring your brand’s uniqueness.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Our Graphic Designing Services in Dubai follow strict quality
            guidelines:
          </p>

          <div className="flex flex-wrap gap-6 mb-12">
            <div className="flex items-start gap-2 bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-sm">
              <span className="text-[var(--primary-color)] font-bold">✔</span>
              <span className="text-gray-700 dark:text-gray-300 text-lg">
                High-resolution output
              </span>
            </div>

            <div className="flex items-start gap-2 bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-sm">
              <span className="text-[var(--primary-color)] font-bold">✔</span>
              <span className="text-gray-700 dark:text-gray-300 text-lg">
                Copyright-safe assets
              </span>
            </div>

            <div className="flex items-start gap-2 bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-sm">
              <span className="text-[var(--primary-color)] font-bold">✔</span>
              <span className="text-gray-700 dark:text-gray-300 text-lg">
                Brand-consistent visuals
              </span>
            </div>

            <div className="flex items-start gap-2 bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-sm">
              <span className="text-[var(--primary-color)] font-bold">✔</span>
              <span className="text-gray-700 dark:text-gray-300 text-lg">
                SEO and SMO compatibility for online use
              </span>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Let’s Create Something Extraordinary
            </h3>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
              Your brand deserves visuals that make an impact. Whether you’re
              launching a new product, rebranding your business, or promoting
              your services, <strong>BigWig Media Digital</strong> delivers
              Graphic Designing Services in Dubai that truly stand out.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-2">
              📞 Ready to bring your brand to life? 👉 Get in touch today for a
              free creative consultation.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              📩 Email us or schedule a call — let’s discuss how we can elevate
              your brand’s visual identity in Dubai.
            </p>
          </div>
        </div>
      </section>

      <OurProcess />
      <WhyBigwig />
      <CTABanner
        title="Transform Your Brand with Stunning Graphic Designs That Captivate and Convert in Dubai."
        buttonText="Get Started Today"
      />

      <Footer />
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}

export default SMODubai;

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

const services = [
  {
    title: "Email Campaign Strategy",
    description:
      "We build custom campaign flows aligned with your business goals, whether it's for awareness, conversion, or retention.",
  },
  {
    title: "Email Design & Development",
    description:
      "Responsive, visually appealing, and on-brand email templates designed to perform on all devices and platforms.",
  },
  {
    title: "Copywriting That Converts",
    description:
      "We write subject lines that get opened and body content that gets clicked. Our emails are concise, compelling, and action-oriented.",
  },
  {
    title: "Marketing Automation",
    description:
      "Automate customer journeys with smart sequences: welcome emails, cart abandonment flows, re-engagement campaigns, and more.",
  },
  {
    title: "A/B Testing & Optimization",
    description:
      "We test everything, from subject lines to CTAs, to continually improve open rates, click-through rates, and conversions.",
  },
  {
    title: "Email List Management",
    description:
      "We help you grow, segment, and clean your email lists for better targeting and deliverability.",
  },
];

function EmailMarketing() {
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
    <div>
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
        <div className="bg-black/40 absolute inset-0 z-0" />

        <div className="relative z-10 w-5/6 mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left Content - 2/3 */}
          <div className="w-full md:w-2/3 text-white space-y-6 pr-0 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
              Proven Email Marketing services
            </h1>

            <p
              className="text-2xl md:text-4xl font-semibold text-[#4e6cba]"
              style={{
                textShadow: "0 2px 6px rgba(0,0,0,0.6)",
                letterSpacing: "0.5px",
              }}
            >
              <span className="inline">We send emails that&nbsp;</span>
              <span className="inline-block whitespace-nowrap">
                <TypeAnimation
                  sequence={[
                    "get opened",
                    2000,
                    "drive action",
                    2000,
                    "build loyalty",
                    2000,
                    "convert leads",
                    2000,
                    "spark engagement",
                    2000,
                    "deliver results",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </p>

            <p className="text-base md:text-lg max-w-md text-white/90">
              We craft emails that not only get opened but also deliver
              meaningful messages that drive real results for your business.
            </p>

            <a href="/contact">
              <button className="mt-4 px-6 py-3 bg-[var(--primary-color)] text-white rounded-full font-semibold hover:bg-opacity-80 transition">
                Contact Us
              </button>
            </a>
          </div>

          {/* Right Form - 1/3 */}
          <ContactForm />
        </div>
      </section>

      <section className="bg-white  py-12 ">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)]">
            Power Your Brand with Email Marketing That Works
          </h2>

          <p className="text-lg text-gray-700  max-w-3xl mx-auto">
            Want to stand out and make it to your customer’s inbox, not their
            spam folder?
            <br />
            Email isn’t outdated; ineffective emails are. Let’s fix that.
          </p>

          <div className="border text-gray-800 p-6 rounded-2xl text-lg font-medium">
            Whether you&#39;re a startup, a growing D2C brand, or an enterprise
            business, or from any country our{" "}
            <span className="italic">Email Marketing Services </span>
            are crafted to help you deliver strategically, sell more, advertise
            more and build relationships that actually stays.
          </div>

          <div className="pt-10">
            <h3 className="text-3xl md:text-4xl text-[var(--primary-color)] font-bold mb-8">
              Why Email Marketing Still Wins
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 text-left">
              <div className="p-6 rounded-2xl bg-gray-100  hover:shadow-xl transition">
                <Mail className="text-[var(--primary-color)] mb-4" size={32} />
                <h4 className="font-bold text-lg text-[var(--primary-color)]">
                  Direct & Personal
                </h4>
                <p className="text-sm text-gray-600 ">
                  Engage your audience in conversation, don’t just broadcast.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-100  hover:shadow-xl transition">
                <Inbox className="text-[var(--primary-color)] mb-4" size={32} />
                <h4 className="font-bold text-lg text-[var(--primary-color)]">
                  Cost-Effective
                </h4>
                <p className="text-sm text-gray-600 ">
                  High ROI, low spend, especially when compared to paid ads.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-100  hover:shadow-xl transition">
                <Rocket
                  className="text-[var(--primary-color)] mb-4"
                  size={32}
                />
                <h4 className="font-bold text-lg text-[var(--primary-color)]">
                  Automated & Scalable
                </h4>
                <p className="text-sm text-gray-600 ">
                  Set it, personalize it, and scale it effortlessly.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-100  hover:shadow-xl transition">
                <BarChart4
                  className="text-[var(--primary-color)] mb-4"
                  size={32}
                />
                <h4 className="font-bold text-lg text-[var(--primary-color)]">
                  Measurable
                </h4>
                <p className="text-sm text-gray-600 ">
                  Track performance in real time. Optimize what works.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 w-11/12 md:w-5/6 mx-auto  bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--primary-color)] mb-12">
          Our Email Marketing Services
        </h2>
        <div>
          {/* Desktop View */}
          <div className=" mx-auto hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, index) => (
              <div
                key={index}
                className="border-l-4 border-[var(--primary-color)] bg-gray-100  p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-2 text-[var(--primary-color)]">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 ">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Mobile View - Slider */}
          <div className="md:hidden">
            <Slider {...settings}>
              {services.map((item, index) => (
                <div key={index} className="px-2 w-5/6">
                  <div className="border-l-4 border-[var(--primary-color)] bg-gray-100  p-6 rounded-lg shadow-sm mb-4">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-700 ">{item.description}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section className="bg-white text-gray-800 ">
        {/* 1. Hero / Intro Section */}
        <div className="py-12  text-center w-11/12 md:w-5/6 mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)]">
            Why Brands Trust Email Marketing Services
          </h2>
          <p className="text-lg text-gray-700 ">
            Brands across industries are increasingly relying on Email Marketing
            Services for one simple reason, it works. With high ROI, direct
            reach, and measurable results, email remains one of the most
            effective digital marketing tools.
          </p>
          <p className="text-lg text-gray-700 ">
            At{" "}
            <strong>
              {" "}
              <a href="https://www.bigwigdigital.in/">BigWig Digital</a>
            </strong>
            , a trusted Email Marketing Agency , we build meaningful
            relationships through strategic, personalized, and
            conversion-focused email campaigns.
          </p>
        </div>

        {/* 2. Trust Section */}
        <div className=" w-5/6 mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h3 className="text-3xl text-[var(--primary-color)] font-semibold">
              Work With a Smart Email Marketing Agency
            </h3>
            <p>
              We’re not just about emails, we’re driving results. A
              professional, dedicated, and experienced email marketing agency
              like ours gives you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-md">
              <li>Hands-free campaign management systems.</li>
              <li>Content and design that becomes your brand’s voice.</li>
              <li>Aligned with international email marketing regulations.</li>
              <li>CRM, e-commerce, and CMS integrations.</li>
            </ul>
          </div>
          <div>
            <Image
              src={image}
              alt="Email Marketing Service in "
              className="w-full md:w-[50%] mb-10 mx-auto"
            />
          </div>
        </div>

        {/* 3. How Email Helps New Businesses */}
        <div className="bg-[var(--primary-color)] text-white py-12">
          <div className="w-5/6 mx-auto grid md:grid-cols-2 gap-10 items-center">
            {/* LEFT - MAIN CONTENT */}
            <div className="space-y-6 text-left">
              <h3 className="text-3xl font-bold">
                How is Email Marketing Service Helpful for New Business?
              </h3>
              <p className="text-lg leading-relaxed">
                For startups and small businesses, building brand recognition
                and customer trust is crucial. That’s where a professional email
                marketing service becomes a game-changer. With personalized
                email campaigns, your business can connect directly with your
                target audience, share updates, promote offers, and guide leads
                through the buying journey, all while keeping marketing costs
                low.
              </p>
              <p className="text-lg leading-relaxed">
                At BigWig Digital, a trusted email marketing agency, we help new
                businesses launch impactful campaigns that drive engagement,
                build credibility, and boost early conversions. Whether
                you&#39;re growing your list or nurturing your first set of
                leads, our email marketing services are designed to support
                consistent, scalable growth from day one.
              </p>
            </div>

            {/* RIGHT - POINTS IN BOXES */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Cost-Effective Growth",
                  description:
                    "Reach thousands without burning your budget, perfect for startups and small businesses.",
                },
                {
                  title: "Builds Brand Awareness",
                  description:
                    "Introduce your brand directly to potential customers’ inboxes with personalized messages.",
                },
                {
                  title: "Drives Early Engagement",
                  description:
                    "Keep your audience interested with updates, promotions, and product launches from day one.",
                },
                {
                  title: "Creates a Loyal Community",
                  description:
                    "Stay connected with your customers and turn them into repeat buyers with value-packed emails.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white text-black rounded-xl p-4 shadow-md"
                >
                  <h4 className="text-lg font-semibold text-[var(--primary-color)] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white w-5/6 mx-auto text-[var(--primary-color)] py-12  text-center space-y-4">
          {/* Heading */}
          <h3 className="text-3xl font-bold">
            Wherever You Are, We’ve Got You Covered{" "}
          </h3>

          {/* Paragraph */}
          <p className=" text-gray-700 mx-auto text-lg">
            As a ranking and leading email marketing agency, we know what the
            local market requires and how to strategically deliver. Our team
            specializes in:
          </p>

          {/* Bullet Points in Boxes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {[
              "Hyper-local targeting audience.",
              "Industry-specific campaigns.",
              "B2B & B2C strategies for  unique business market.",
              "Bulk campaigns to automation suites, ready to deploy.",
            ].map((point, i) => (
              <div
                key={i}
                className="bg-white text-black rounded-xl p-4 font-medium shadow-md"
              >
                {point}
              </div>
            ))}
          </div>

          {/* Optional Highlighted Footer Message */}
          <p className="max-w-3xl mx-auto text-lg font-semibold mt-4">
            If you&#39;re looking for tailored and genuine email marketing
            services Wherever You Are, We’ve Got You Covered{" "}
          </p>
        </div>
      </section>
      <OurProcess />
      <WhyBigwig />

      <div className="bg-[var(--primary-color)] text-white py-12 text-center ">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-6">
          {/* Headline */}
          <h3 className="text-3xl md:text-4xl font-bold">
            Ready to Make Every Email Count?
          </h3>

          {/* Main Paragraph */}
          <p className="max-w-3xl mx-auto text-lg leading-relaxed">
            If you&#39;re looking for a reliable email marketing agency, BigWig
            Digital brings the creativity, strategy, and technology together to
            deliver results. We help you send smarter emails that your audience
            actually wants to read, and act on.
          </p>

          {/* Closing Line */}
          <p className="max-w-2xl mx-auto text-lg font-semibold">
            Let’s turn your subscribers into customers and customers into loyal
            fans.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default EmailMarketing;

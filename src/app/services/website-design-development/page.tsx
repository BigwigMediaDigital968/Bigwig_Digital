"use client";
import { TypeAnimation } from "react-type-animation";
import Footer from "../../../../components/Footer";
import Nav from "../../../../components/Nav";
import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
import hero from "../../../../Assets/Services hero/website.jpg";
import web from "../../../../Assets/services/1.jpg";
import {
  BarChart3,
  Code2,
  Cpu,
  MonitorSmartphone,
  PenTool,
  ShieldCheck,
} from "lucide-react";
import Slider from "react-slick";

import ContactForm from "../../../../components/ContactForm";
import Image from "next/image";

const sections = [
  {
    icon: <BarChart3 className="text-[var(--primary-color)]" size={36} />,
    title: "We Focus on Your Growth, Not Just Websites",
    content:
      "At BigWig Digital, we’re not just about making websites, we’re about building digital success stories. Whether it’s digital marketing, website design, or full-scale development, every service we deliver is rooted in excellence, backed by expertise, and focused on measurable outcomes. Our commitment to quality has made us a trusted web development partner for businesses across industries and regions.",
  },
  {
    icon: <Code2 className="text-[var(--primary-color)]" size={36} />,
    title: "Custom Web Development for Every Business Need",
    content:
      "We pay attention to every detail to ensure a smooth and flawless web development process. Our custom web development services include creating user-friendly, high-performance websites, eCommerce platforms, CMS-based sites, web apps, SaaS solutions, and enterprise portals. Everything is tailored to ensure your brand shines online.",
  },
  {
    icon: <Cpu className="text-[var(--primary-color)]" size={36} />,
    title: "Future-Ready Technologies for Scalable Solutions",
    content:
      "We build fast, scalable, and secure websites using modern technologies like React.js, Angular, Vue.js, Node.js, Progressive Web Apps (PWAs), and headless CMS systems. With AI-powered tools, intelligent automation, and seamless third-party integrations, we make sure your website is optimized for performance, security, and conversions.",
  },
  {
    icon: (
      <MonitorSmartphone className="text-[var(--primary-color)]" size={36} />
    ),
    title: "Designed for Experience and Engagement",
    content:
      "Our goal is to help you stand out and leave a lasting impression. That’s why we create visually appealing websites with smooth navigation and smart features like voice search, chatbots, and API integrations. Whether it's a business website, blog, or eCommerce platform, we ensure it delivers a seamless user experience across all devices.",
  },
  {
    icon: <PenTool className="text-[var(--primary-color)]" size={36} />,
    title: "Creative Design Backed by Strategy",
    content:
      "We believe in designing for purpose. Our responsive websites not only look good but are also strategically built for your target audience and market segment. Every element of our website design focuses on driving engagement, building credibility, and growing your brand’s online reputation.",
  },
  {
    icon: <ShieldCheck className="text-[var(--primary-color)]" size={36} />,
    title: "Trusted by Brands Worldwide",
    content:
      "From startups to established businesses, we’ve delivered over 900 successful web projects to clients across diverse industries and geographies. Whether it's a portal for a pharmaceutical brand, a hospital website, or an educational platform, we have the experience to deliver exactly what your business needs.",
  },
];

function Website() {
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
    <div>
      <Nav />

      <title>Website Design & Development</title>
      <meta
        name="description"
        content="Build user-friendly and high-converting websites with our expert design and development team."
      />
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/website-design-development"
      />

      <section
        className="relative bg-cover bg-center bg-no-repeat py-10 px-4"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="bg-black/40 absolute inset-0 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
              Best Website Designing & Development Company NCR
            </h1>

            <p
              className="text-3xl md:text-4xl font-semibold flex items-center gap-2 text-[#4e6cba]"
              style={{
                textShadow: "0 2px 6px rgba(0,0,0,0.6)",
                letterSpacing: "0.5px",
              }}
            >
              More&nbsp;
              <TypeAnimation
                sequence={["Designs", 2000, "Speed", 2000, "Conversions", 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </p>

            <p className="text-base md:text-lg max-w-md text-white/90">
              We are the Best website development company offering different
              Online Website Designing & Development services.
            </p>
            <a href="/contact">
              <button className="mt-4 px-6 py-3 bg-[var(--primary-color)] text-white rounded-full font-semibold hover:bg-opacity-80 transition">
                Contact Us
              </button>
            </a>
          </div>

          {/* Right Form */}
          <ContactForm />
        </div>
      </section>

      <section className="bg-white  py-12 px-4">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-12">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[var(--primary-color)] mb-6">
            Best Web Development Company to Build Your Online Presence
          </h2>

          {/* Two-column layout */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Text Block */}
            <div className="space-y-6 text-gray-700  text-lg leading-relaxed">
              <p>
                Words like <strong>“web design”</strong> and{" "}
                <strong>“web development”</strong> might sound overwhelming, and
                that&#39;s completely okay! Not everyone is an expert in
                creating professional websites , that&#39;s where BigWig Digital
                steps in.
              </p>
              <p>
                <strong>
                  <a href="https://www.bigwigdigital.in/">BigWig Digital</a>
                </strong>{" "}
                is your trusted partner for web design and development. With a
                strong track record and a results-oriented approach, we help
                businesses establish a powerful online presence. Backed by years
                of hands-on experience, we&#39;ve earned recognition as one of
                the leading web design and development companies.
              </p>
            </div>

            {/* Right Image Block */}
            <div>
              <Image
                src={web}
                alt="Best Web Development Company "
                className="w-full h-[50vh] rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Highlight Box Below */}
          <div className="bg-[var(--primary-color)] text-white p-8 md:p-10 rounded-2xl shadow-2xl space-y-6">
            <h3 className="text-2xl font-bold mb-4">Why Clients Choose Us</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 list-disc list-inside text-base">
              <li>High-quality, mobile-responsive websites.</li>
              <li>Cost-effective and easy-to-manage web solutions.</li>
              <li>Attractive, conversion-focused landing pages.</li>
              <li>SEO-friendly website structures.</li>
              <li>More than 900 successful projects delivered.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 mx-auto w-11/12 md:w-5/6 ">
        {/* Mobile View: Slider */}
        <div className="block lg:hidden">
          <Slider {...settings}>
            {sections.map((section, index) => (
              <div key={index} className="px-2">
                {" "}
                {/* Add horizontal gap between slides */}
                <div className="h-[450px] flex flex-col justify-between border border-gray-200 rounded-2xl p-6 shadow-lg bg-white  space-y-4">
                  {/* Icon */}
                  <div className="flex justify-center">
                    <div className="bg-gray-100 p-4 rounded-full shadow">
                      {section.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-center text-[var(--primary-color)]">
                    {section.title}
                  </h3>

                  {/* Content */}
                  <p className="text-gray-700  text-sm md:text-base leading-relaxed text-justify">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Desktop View: Grid */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl p-[2px] transition-all duration-300 h-full"
            >
              {/* Content */}
              <div className="relative z-10 border border-gray-200  rounded-2xl p-6 shadow-lg bg-white  space-y-4 h-full flex flex-col justify-between min-h-[360px]">
                <div className="flex justify-center">
                  <div className="bg-gray-100  p-4 rounded-full shadow">
                    {section.icon}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-center text-[var(--primary-color)]">
                  {section.title}
                </h3>

                <p className="text-gray-700  text-sm md:text-base leading-relaxed text-justify">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <OurProcess />
      <WhyBigwig />

      <section className="bg-white text-black  py-12 px-4">
        <div className="w-11/12 md:w-5/6 mx-auto md:text-center text-justify">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight text-[var(--primary-color)] text-center">
            Let&#39;s Build Your Digital Future Together
          </h2>
          <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
            Looking for a website development company that understands your
            goals?
            <br className="hidden md:block" />
            <span className="font-semibold text-[var(--primary-color)]">
              BigWig Digital
            </span>{" "}
            brings you innovative, affordable, and customized web design
            services to elevate your brand online.
          </p>
          <p className="text-md md:text-lg max-w-3xl mx-auto">
            With our team of skilled designers and developers, we ensure your
            digital presence stands out and supports your business growth.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Website;

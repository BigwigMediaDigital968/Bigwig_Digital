"use client";

import Nav from "../../../../components/Nav";
import hero from "../../../../Assets/Services hero/SMO.jpg";
import smo from "../../../../Assets/services/4.jpg";
import { TypeAnimation } from "react-type-animation";
import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
import Footer from "../../../../components/Footer";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa6";
import Slider from "react-slick";
import ContactForm from "../../../../components/ContactForm";
import Image from "next/image";
import ButtonFill from "../../../../components/Button";
import PopupForm from "../../../../components/PopupForm";
import GetInTouch from "../../../../components/GetInTouch";
import { SetStateAction, useState } from "react";
const socialPlatforms = [
  { name: "Facebook", icon: <FaFacebookF color="#1877F2" /> },
  { name: "Instagram", icon: <FaInstagram color="#E4405F" /> },
  { name: "LinkedIn", icon: <FaLinkedinIn color="#0A66C2" /> },
  { name: "Twitter", icon: <FaXTwitter color="#000000" /> },
  { name: "Pinterest", icon: <FaPinterestP color="#E60023" /> },
  { name: "YouTube", icon: <FaYoutube color="#FF0000" /> },
];

const processItems = [
  {
    title: "Profile Creation & Optimization",
    content:
      "We optimize your social media profiles with keyword-rich descriptions, visually appealing graphics, call-to-actions, and branded elements to build a strong digital identity.",
  },
  {
    title: "Engaging Content & Creative Graphics",
    content:
      "Our creative team produces high-quality posts, videos, infographics, carousels, and stories that resonate with your audience and drive continuous engagement.",
  },
  {
    title: "Target Audience Refinement",
    content:
      "We help you attract users who are genuinely interested in your products or services, ensuring maximum relevance and conversion potential.",
  },
  {
    title: "Audience Interaction & Engagement",
    content:
      "We manage comments, messages, and interactions in real time, helping your brand stay active, responsive, and customer-friendly.",
  },
  {
    title: "Analytics & Performance Reporting",
    content:
      "From reach and impressions to follower growth and engagement metrics, our detailed reports help you understand the impact of your SMO campaigns.",
  },
];

const benefits = [
  {
    title: "Enhanced Brand Visibility Across Social Platforms",
    content:
      "High-quality and consistent social media optimization ensures your brand becomes more visible and memorable. With strategic content and profile optimization, your business appears frequently in search results, trending categories, and platform recommendations.",
  },
  {
    title: "Higher Engagement & Stronger Customer Relationships",
    content:
      "Through professional Social Media Optimization Services in Delhi, you can create meaningful interactions with your audience. Engaging posts, quick responses, and community management help build trust and long-term customer loyalty.",
  },
  {
    title: "Increase in Targeted Traffic & Quality Leads",
    content:
      "SMO helps drive highly relevant traffic to your website. Because users actively engage with your content, the chances of generating high-quality, conversion-ready leads increase significantly.",
  },
  {
    title: "Improved Brand Reputation & Online Credibility",
    content:
      "Positive engagement, active posting, and reputation management make your brand appear reliable and authoritative. With well-managed SMO Services in Delhi, your online reputation improves across platforms.",
  },
  {
    title: "Better Search Engine Rankings (Indirect SEO Benefits)",
    content:
      "Optimized social profiles and strong engagement send positive social signals to search engines. This contributes to better rankings and enhances your overall digital presence.",
  },
  {
    title: "Cost-Effective Marketing With High ROI",
    content:
      "Compared to paid advertising, Social Media Services in Delhi offer long-term value at a minimal cost. With the right strategy, you can achieve measurable growth without overspending.",
  },
  {
    title: "Insightful Analytics & Data-Driven Decisions",
    content:
      "Performance reports and analytics help you understand user behavior, content performance, and audience demographics. These insights help refine your strategy for continuous improvement.",
  },
  {
    title: "Competitive Advantage in Your Industry",
    content:
      "With consistent and optimized social media efforts, your brand stays ahead of competitors who are either inactive or not leveraging SMO effectively.",
  },
  {
    title: "Increased Followers & Community Growth",
    content:
      "Professional SMO Services in Delhi ensure steady follower growth through strategic content, trends, and engagement tactics. A larger community naturally amplifies your brand reach.",
  },
  {
    title: "Strengthened Brand Authority & Trust",
    content:
      "Publishing valuable content and maintaining an active presence helps position your brand as a leader in your niche. High authority translates into greater customer confidence.",
  },
];

const faqs = [
  {
    q: "What are the services that will come under the social media optimization? ",
    a: "At Bigwig Media Digital, our SMO Services in Delhi include everything your brand needs to build a strong and engaging online presence. Our Social Media Optimization Services in Delhi cover profile setup, profile optimization, creative content creation, post scheduling, hashtag strategy, audience engagement, trend analysis, brand monitoring, reputation management, and performance reporting. We ensure your social media channels grow consistently with strategic and data-driven execution. ",
  },
  {
    q: "What are the social media portals that Bigwig Media Digital works for? ",
    a: "We provide complete Social Media Services in Delhi across all major platforms, including Facebook, Instagram, LinkedIn, Twitter, Pinterest, and YouTube. Our team ensures your brand maintains a strong presence on the platforms where your audience is most active, helping you achieve maximum visibility and engagement through our expert SMO Services in Delhi. ",
  },
  {
    q: "What is your approach to creating and curating content for social media? ",
    a: "Our content creation approach is backed by research, creativity, and industry-specific insights. As a trusted provider of Social Media Optimization Services in Delhi, we follow a strategic process that includes understanding your target audience, analyzing competitors, researching trending formats, and producing high-quality graphics, captions, videos, reels, and stories. Every piece of content is designed to reflect your brand identity and boost engagement. ",
  },
  {
    q: "How do you engage with our target audience on social media platforms",
    a: "With our professional SMO Services in Delhi, we ensure continuous audience interaction through comments, messages, polls, stories, and community-building activities. Our team actively responds to queries, encourages conversations, monitors mentions, and builds meaningful connections that strengthen your brand loyalty. Engagement is a core part of our Social Media Services in Delhi, helping your business stay top-of-mind. ",
  },
  {
    q: "Does the strategies of the company change according to the size of the company?",
    a: "Yes, absolutely. At Bigwig Media Digital, we customize our Social Media Optimization Services in Delhi based on your company size, goals, audience, and industry. Whether you’re a startup, SME, or enterprise, our strategies are tailored to meet your unique requirements. This ensures you get a personalized and scalable SMO approach that delivers the right results for your business. ",
  },
  {
    q: "How do we trust the optimization we would get? ",
    a: "As one of the most reliable providers of SMO Services in Delhi, we believe in complete transparency. You receive regular performance reports, growth metrics, insights, and detailed updates on everything we optimize. Our results, client testimonials, and proven track record reflect the quality and reliability of our Social Media Services in Delhi. Your trust is earned through consistent performance and measurable improvements. ",
  },
  {
    q: "Do you conduct competitor analysis as part of your SMO strategy",
    a: "Yes, competitor analysis is a crucial part of our Social Media Optimization Services in Delhi. We analyze your competitors’ content strategies, engagement patterns, hashtags, posting frequency, and audience behavior. This helps us identify opportunities, differentiate your brand, and create content that gives you a strong competitive advantage across platforms. ",
  },
  {
    q: "How do you measure the SMO campaign’s success and provide performance reports? ",
    a: "We measure the success of your SMO campaigns using detailed metrics such as follower growth, reach, impressions, engagement rate, click-through rate, content performance, and community interactions. As part of our SMO Services in Delhi, you receive monthly or weekly reports that clearly outline progress, insights, and future recommendations. Our transparent reporting helps you understand the real impact of our Social Media Services in Delhi on your brand’s growth.",
  },
];

function SocialMediaOptimization() {
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
      <title>Social Media Optimization (SMO)</title>
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/social-media-optimization"
      />
      <meta
        name="description"
        content="Improve your social visibility and engagement with strategic SMO services tailored to your brand."
      />

      <Nav />
      <section
        className="relative bg-cover bg-center bg-no-repeat py-10 px-4"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="bg-black/60 absolute inset-0 z-0" />

        <div className="relative z-10 w-5/6 mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left Content - 2/3 */}
          <div className="w-full md:w-2/3 text-white space-y-6 pr-0 ">
            <h1 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
              SMO Services in Delhi to Boost Your Social Media Presence
            </h1>

            <p className="text-base md:text-lg max-w-xl text-white/90 text-justify">
              In the fast-paced digital world, brands that stay active on social
              media grow faster, gain more trust, and convert more customers.
              Our SMO Services in Delhi are strategically designed to enhance
              your online presence, increase engagement, and improve your brand
              authority across all major social media platforms. Whether you are
              a startup, SME, or large enterprise, our Social Media Optimization
              Services in Delhi ensure that your brand voice reaches the right
              audience at the right time.
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

      <div className="w-11/12 md:w-5/6 mx-auto py-12 text-gray-900 space-y-10">
        {/* Section 3 - Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)]">
              Social Media Optimization Company in Delhi – Connect, Engage &
              Grow Your Audience
            </h2>
            <p className="text-white leading-relaxed text-justify">
              Bigwig Media Digital is a leading provider of SMO Services in
              Delhi. We help businesses build a powerful social presence that
              drives engagement, brand awareness, and long-term customer
              relationships. Our comprehensive Social Media Optimization
              Services in Delhi are crafted to connect you with the right
              audience and maximize your brand’s reach across all major
              platforms.
            </p>

            <p className="text-white leading-relaxed text-justify">
              With years of experience delivering high-impact Social Media
              Services in Delhi, our certified professionals use proven
              strategies, creative content, and data-driven optimization to help
              businesses achieve outstanding results. From boosting brand
              visibility to generating qualified leads, we ensure your social
              media channels become a strong revenue-generating asset.
            </p>
          </div>

          {/* Right */}
          <div>
            <Image
              src={smo}
              alt="Social Media Optimization Services "
              className="w-full h-[50vh] rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      <section className="py-16 w-11/12 md:w-5/6 mx-auto relative overflow-hidden">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] tracking-wide">
            Experience. Expertise. Excellence in SMO Services
          </h2>
        </div>

        {/* Intro Text */}
        <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-10">
          With more than a decade of industry experience, our team has
          successfully helped clients achieve:
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {[
            "2X to 6X increase in overall engagement",
            "50% to 400% growth in qualified leads",
            "100% to 1800% boost in new followers",
            "150% to 900% improvement in brand visibility",
            "Significant enhancements in social reach & impressions",
          ].map((stat, index) => (
            <div
              key={index}
              className="
          relative p-6 rounded-2xl backdrop-blur-xl bg-white/5 
          border border-white/10 
          shadow-[0_0_25px_rgba(0,255,255,0.15)]
          hover:border-[var(--color5)]
          hover:shadow-[0_0_35px_var(--color5)]
          transition-all duration-300 
          overflow-hidden group
        "
            >
              {/* Scan Lines */}
              <div className="absolute inset-0 opacity-40 pointer-events-none">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-0 w-full h-[2px]
                bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
                animate-smoScan"
                    style={{
                      top: `${35 + i * 55}px`,
                      animationDelay: `${i * 0.25}s`,
                    }}
                  ></div>
                ))}
              </div>

              {/* Stat Text */}
              <p className="text-gray-200 text-base font-medium relative z-10">
                {stat}
              </p>

              {/* Glow Border */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[var(--color5)] transition-all"></div>
            </div>
          ))}
        </div>

        {/* Closing Paragraph */}
        <p className="text-gray-300 text-base md:text-lg leading-relaxed mt-10">
          Our consistent results and client satisfaction are backed by authentic
          reviews across platforms like Google. As a trusted Social Media
          Optimization Company in Delhi, delivering measurable growth and high
          ROI remains at the core of what we do.
        </p>

        {/* Animation */}
        <style>{`
    @keyframes smoScan {
      0% { transform: translateX(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }
    .animate-smoScan {
      animation: smoScan 4s linear infinite;
    }
  `}</style>
      </section>

      <section className="py-12 w-11/12 md:w-5/6 mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-6">
          Comprehensive Social Media Optimization Services in Delhi
        </h2>

        <p className="text-gray-300 mb-10">
          Our SMO services are tailored to strengthen your brand presence on all
          major platforms, including:
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
          {socialPlatforms.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 p-4 rounded-xl 
                   bg-white/5 backdrop-blur-sm border border-white/10 
                   hover:border-[var(--color5)] transition-all 
                   hover:shadow-[0_0_20px_var(--color5)]"
            >
              <div className="text-3xl">{item.icon}</div>
              <span className="text-gray-200 text-sm font-medium">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 w-11/12 md:w-5/6 mx-auto relative overflow-hidden">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-4">
            Our Process for Effective SMO Services in Delhi
          </h2>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed">
            Each aspect of our Social Media Optimization Services in Delhi is
            designed to enhance your visibility, engagement, and brand trust:
          </p>
        </div>

        {/* ================== CONTENT WRAPPER ================== */}
        <div className="relative mb-12 z-10">
          {/* MOBILE SLIDER */}
          <div className="block lg:hidden">
            <Slider {...settings}>
              {processItems.map((item, index) => (
                <div key={index} className="px-2">
                  <div
                    className="
              relative flex flex-col p-6 rounded-2xl
              backdrop-blur-xl bg-white/5 border border-white/10
              shadow-[0_0_25px_rgba(0,255,255,0.1)]
              hover:shadow-[0_0_40px_var(--color5)]
              space-y-5 overflow-hidden group
              transition-all duration-500 hover:-translate-y-2
            "
                  >
                    {/* Shine Overlay */}
                    <div
                      className="
                absolute inset-0 bg-gradient-to-br 
                from-transparent via-white/5 to-transparent
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
              "
                    />

                    {/* Shine Line */}
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

                    {/* Description */}
                    <p className="text-gray-200 text-sm md:text-base leading-relaxed relative z-10 text-justify">
                      {item.content}
                    </p>

                    {/* Border Glow */}
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
            {processItems.map((item, index) => (
              <div
                key={index}
                className="
          group relative overflow-hidden rounded-2xl 
          transition-transform duration-500 hover:-translate-y-3 h-full
        "
              >
                <div
                  className="
            relative z-10 p-6 rounded-2xl backdrop-blur-xl bg-white/5
            border border-white/10 shadow-[0_0_25px_rgba(0,255,255,0.15)]
            hover:shadow-[0_0_45px_var(--color5)]
            flex flex-col h-full space-y-5 transition-all duration-500
          "
                >
                  {/* Shine Line */}
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

                  {/* Content */}
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed text-justify relative z-10">
                    {item.content}
                  </p>

                  {/* Glow Border */}
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

          {/* ANIMATIONS */}
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

        {/* CTA BUTTON */}
        <div className="flex justify-center">
          <ButtonFill
            text="Start Your SMO Growth Journey"
            onClick={() => setIsPopupOpen(true)}
          />
        </div>
      </section>

      <section className="py-12 w-11/12 md:w-5/6 mx-auto relative overflow-hidden">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-4">
            Key Benefits of SMO Services in Delhi for Your Business Growth
          </h2>
          <p className="text-gray-200 text-base md:text-lg leading-relaxed">
            Investing in SMO Services in Delhi can significantly transform the
            way your brand connects with its audience. With the right Social
            Media Optimization Services in Delhi, your business can tap into
            this massive audience and drive measurable results.
          </p>
        </div>

        <div className="relative mb-12 z-10">
          {/* MOBILE SLIDER */}
          <div className="block lg:hidden">
            <Slider {...settings}>
              {benefits.map((item, index) => (
                <div key={index} className="px-2">
                  <div
                    className="
              relative flex flex-col p-6 rounded-2xl
              backdrop-blur-xl bg-white/5 border border-white/10
              shadow-[0_0_25px_rgba(0,255,255,0.1)]
              hover:shadow-[0_0_40px_var(--color5)]
              space-y-5 overflow-hidden group
              transition-all duration-500 hover:-translate-y-2
            "
                  >
                    {/* Shine Overlay */}
                    <div
                      className="
                absolute inset-0 bg-gradient-to-br 
                from-transparent via-white/5 to-transparent
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
              "
                    />

                    {/* Shine Line */}
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

                    {/* Description */}
                    <p className="text-gray-200 text-sm md:text-base leading-relaxed relative z-10 text-justify">
                      {item.content}
                    </p>

                    {/* Border Glow */}
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
            {benefits.map((item, index) => (
              <div
                key={index}
                className="
          group relative overflow-hidden rounded-2xl 
          transition-transform duration-500 hover:-translate-y-3 h-full
        "
              >
                <div
                  className="
            relative z-10 p-6 rounded-2xl backdrop-blur-xl bg-white/5
            border border-white/10 shadow-[0_0_25px_rgba(0,255,255,0.15)]
            hover:shadow-[0_0_45px_var(--color5)]
            flex flex-col h-full space-y-5 transition-all duration-500
          "
                >
                  {/* Shine Line */}
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

                  {/* Content */}
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed text-justify relative z-10">
                    {item.content}
                  </p>

                  {/* Glow Border */}
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

          {/* ANIMATIONS */}
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

        {/* CTA */}
        <div className="flex justify-center mt-6">
          <ButtonFill
            text="Boost Your Brand With SMO"
            onClick={() => setIsPopupOpen(true)}
          />
        </div>
      </section>

      <section className="py-12 w-11/12 md:w-5/6 mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-6 tracking-wide">
          A Trusted SMO Company in Delhi Delivering Proven Results
        </h2>

        {/* Intro Paragraph */}
        <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-8">
          Our positive reviews and strong portfolio make us one of the most
          reliable names for SMO Services in Delhi. Clients across India
          appreciate our commitment to growth, transparency, and innovation. We
          focus on delivering long-term value, whether you want to:
        </p>

        {/* TWO COLUMN LIST */}
        <div
          className="
      grid grid-cols-1 md:grid-cols-2 
      gap-y-4 gap-x-10 
     
  "
        >
          {[
            "Increase your social media followers",
            "Improve brand visibility",
            "Strengthen online reputation",
            "Generate more leads",
            "Boost website traffic",
            "Build an active online community",
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              {/* Bullet */}
              <span className="text-[var(--color5)] text-xl leading-6">•</span>

              {/* Text */}
              <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Paragraph */}
        <p className="text-gray-200 text-base md:text-lg leading-relaxed mt-8">
          Every strategy we create is personalized to your industry, goals, and
          target audience.
        </p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color5)] text-center tracking-wider drop-shadow-[0_0_10px_var(--color5)]">
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

export default SocialMediaOptimization;

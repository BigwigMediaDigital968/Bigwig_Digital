"use client";
import Nav from "../../../../components/Nav";
import { TypeAnimation } from "react-type-animation";
import hero from "../../../../Assets/Services hero/smm.jpg";
import smm from "../../../../Assets/services/5.jpg";
import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
import Footer from "../../../../components/Footer";
import {
  FaLinkedinIn,
  FaMeta,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";
import ContactForm from "../../../../components/ContactForm";
import { JSX, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

const icons: Record<string, JSX.Element> = {
  "Meta Ads": (
    <div className="flex items-center gap-2">
      <FaMeta className="text-[#1877F2]" />
    </div>
  ),
  "LinkedIn Ads": <FaLinkedinIn className="text-[#0077B5]" />,
  "TikTok Ads": <FaTiktok className="text-black" />,
  "Snapchat Ads": <FaSnapchatGhost className="text-[#FFFC00]" />,
  "Twitter (X) Ads": <FaXTwitter className="text-black" />,
  "YouTube Ads": <FaYoutube className="text-[#FF0000]" />,
};
const faqs = [
  {
    q: "Why is BigWig Media Digital considered one of the best social media marketing agencies in India?",
    a: "At BigWig Media Digital, we combine creativity with data-driven strategies. Our team specializes in designing high-performing campaigns that not only boost brand visibility but also deliver measurable ROI. We focus on results, not vanity metrics.",
  },
  {
    q: "Can small or local businesses also benefit from social media marketing?",
    a: "Absolutely! Whether you run a retail shop, startup, clinic, or educational institute, our social media marketing services in India help you reach the right audience, build awareness, and generate more leads at affordable costs.",
  },
  {
    q: " How long does it take to see results from social media marketing?",
    a: "You can start seeing engagement like likes, shares, and comments within the first few weeks. For stronger results—such as lead generation, brand authority, and consistent conversions—it usually takes 2–3 months of strategic campaigns.",
  },
  {
    q: "Do you manage paid ads on social media platforms?",
    a: "Yes, we specialize in paid ad campaigns across Facebook, Instagram, YouTube, and LinkedIn. Our experts use advanced targeting techniques to maximize your ad budget and drive high-quality leads.",
  },
  {
    q: "What services are included in your social media marketing packages?",
    a: "Our social media marketing services in India include content creation, ad campaign management, audience targeting, influencer collaborations, community management, and detailed monthly performance reports.",
  },
];

function SocialMediaMarketing() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <title>Social Media Marketing Experts</title>
      <meta
        name="description"
        content="Drive engagement & growth with targeted social media marketing strategies tailored for your brand."
      />
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/social-media-marketing"
      />

      <Nav />
      <section
        className="relative bg-cover bg-center bg-no-repeat py-10 px-4"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="bg-black/20 absolute inset-0 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
              Social Media Marketing Services in India that drive real ROI
            </h1>

            <p
              className="text-2xl md:text-4xl font-semibold text-[#4e6cba]"
              style={{
                letterSpacing: "0.5px",
              }}
            >
              <span className="inline"> Social ads that Delhi </span>
              <span className="inline-block whitespace-nowrap">
                <TypeAnimation
                  sequence={[
                    " Stop the Scroll",
                    2000,
                    " Generate Leads",
                    2000,
                    " Target the Right",
                    2000,
                    " Build Recall",
                    2000,
                    " Capture Attention",
                    2000,
                    " Deliver ROI",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </p>

            <p className="text-base md:text-lg max-w-md text-white/90">
              We’re here to help you grow, scale, and stand out, across every
              major social media platform.
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

      <section className="py-12 space-y-10 text-black ">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--primary-color)]">
          Social Media Marketing Agency in India
        </h2>

        {/* Two-column Layout */}
        <div className="w-11/12 md:w-5/6 mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Left Content */}
          <div className="space-y-6 text-md leading-relaxed">
            <p>
              Social media marketing is the process of leveraging platforms like
              Facebook, Instagram, LinkedIn, and YouTube to build brand
              awareness, engage audiences, and generate measurable business
              results. Looking for a social media marketing agency in India that
              understands performance marketing? At BigWig Digital, we deliver
              paid ad campaigns that actually convert, not just drive traffic.
              We’re here to help you grow, scale, and stand out across every
              major social media platform.
            </p>

            <p>
              At
              <strong>
                {" "}
                <a href="https://www.bigwigdigital.in/"> BigWig Digital</a>
              </strong>
              , we create performance-driven ad campaigns designed to get your
              brand seen, clicked, and remembered. As a trusted social media
              marketing agency in India, we specialize in high-converting paid
              campaigns across today’s most powerful platforms. Whether your
              goal is brand awareness, lead generation, website traffic, app
              installs, or video views, our expert team crafts data-backed
              strategies that deliver measurable growth. If you’re searching for
              result-oriented <strong>social media marketing</strong> services
              in India,{" "}
              <strong>
                <a href="https://www.bigwigdigital.in/">BigWig Media Digital</a>
              </strong>{" "}
              is your go-to partner for scalable ad solutions.
            </p>
          </div>

          {/* Right Image */}
          <div>
            <Image
              src={smm}
              alt="Social Media Marketing Agency "
              className="w-full h-[60vh] rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Box goes below */}
        <div className="w-11/12 md:w-5/6 mx-auto">
          <div className="bg-[var(--primary-color)] text-white p-6 md:p-8 rounded-xl shadow space-y-4">
            <h3 className="text-2xl font-semibold">
              Why Hiring a Social Media Marketing Agency in India is Essential
              for Business Growth
            </h3>

            <ul className="list-disc space-y-3 text-base">
              <li>
                Organic reach is insufficient in 2025. Paid advertisements give
                you the advantage you need to reach the right audience at the
                right time in the face of changing algorithms and an abundance
                of content.
              </li>
              <li>
                Our strategy for social media advertising is based on accuracy,
                originality, and output. We create effective, focused campaigns
                that are suited to your objectives rather than promoting
                arbitrary posts.
              </li>
              <li>
                To get the most out of every rupee you spend, our results-driven
                segmentation, ad creatives, copywriting, analytics, and A/B
                testing.
              </li>
            </ul>
          </div>

          {/* Intro above the table */}
          <div className="mt-10 bg-[var(--primary-color)] border border-gray-700 rounded-xl p-6 space-y-2">
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              Benefits of Hiring a Social Media Marketing Agency in India
            </h3>
            <p className="text-gray-300">
              While many businesses consider building an in-house marketing
              team, partnering with a social media marketing agency in India
              often proves more effective and cost-efficient. The table below
              highlights the key differences to help you make the right choice.
            </p>
          </div>

          {/* ✅ Beautiful Comparison Table */}
          <div className="mt-6  rounded-xl shadow-lg overflow-hidden">
            <table className="min-w-full text-sm text-black">
              <thead className="bg-gradient-to-r from-[#0a0f1d] to-[#0f172a] text-white">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold">Factor</th>
                  <th className="px-6 py-3 text-left font-semibold">
                    In-House Marketing Team
                  </th>
                  <th className="px-6 py-3 text-left font-semibold">
                    Social Media Marketing Agency in India
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">Expertise</td>
                  <td className="px-6 py-4">
                    Limited to team’s knowledge and experience
                  </td>
                  <td className="px-6 py-4">
                    Access to specialists with deep expertise across multiple
                    platforms
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Tools & Technology</td>
                  <td className="px-6 py-4">
                    Often rely on basic or free tools
                  </td>
                  <td className="px-6 py-4">
                    Advanced paid tools for analytics, automation, and targeting
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Scalability</td>
                  <td className="px-6 py-4">
                    Difficult to scale quickly without adding staff
                  </td>
                  <td className="px-6 py-4">
                    Flexible and scalable campaigns as per business goals
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Cost Efficiency</td>
                  <td className="px-6 py-4">
                    Higher long-term costs (salaries, training, tools)
                  </td>
                  <td className="px-6 py-4">
                    More cost-effective with bundled services and expertise
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">
                    Creativity & Innovation
                  </td>
                  <td className="px-6 py-4">May face creative limitations</td>
                  <td className="px-6 py-4">
                    Fresh, innovative strategies tailored to your brand
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Time Management</td>
                  <td className="px-6 py-4">Team may juggle multiple roles</td>
                  <td className="px-6 py-4">
                    Agency focuses solely on campaign success and ROI
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">
                    Performance Tracking
                  </td>
                  <td className="px-6 py-4">Basic reporting and KPIs</td>
                  <td className="px-6 py-4">
                    Data-driven insights, A/B testing, and measurable results
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white  text-black ">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--primary-color)] mb-12">
          our main social media advertising services in India
        </h2>

        <div className="w-11/12 md:w-5/6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {[
            {
              title: "Meta Ads",
              text: "We create compelling ad campaigns that grab attention and drive action across Facebook and Instagram. Perfect for eCommerce, D2C, and lead-gen brands.",
            },
            {
              title: "LinkedIn Ads",
              text: "B2B targeting done right. From sponsored content to lead-gen forms, we help you connect with decision-makers on the world’s largest professional network.",
            },
            {
              title: "TikTok Ads",
              text: "Engage Gen Z and young adults with short-form video ads that are creative, impactful, and trend-driven.",
            },
            {
              title: "Snapchat Ads",
              text: "Reach highly engaged, mobile-first users through immersive video and story-based ad formats.",
            },
            {
              title: "Twitter (X) Ads",
              text: "Launch trending campaigns, promote tweets, or generate traffic with precise keyword, hashtag, and interest-based targeting.",
            },
            {
              title: "YouTube Ads",
              text: "Build awareness and engagement with skippable, non-skippable, and in-feed video ads. Perfect for brand storytelling and video-first funnels.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border-l-4 border-[var(--primary-color)] rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xl font-semibold text-[var(--primary-color)]">
                  {item.title}
                </h4>
                <div className="text-2xl">{icons[item.title]}</div>
              </div>
              <p className="text-sm text-gray-700 ">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="w-11/12 md:w-5/6 mx-auto py-12 space-y-10">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)]">
            Why choose BigWig Media Digital for social media marketing in India
          </h2>
          <p className="text-lg text-gray-800  leading-relaxed">
            Choosing the right social media marketing agency in India can make
            all the difference in your brand’s growth. At BigWig Media Digital,
            we don’t just run campaigns—we craft data-driven strategies designed
            for conversions and measurable ROI.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-800  text-base md:text-lg">
            <li>
              <span className="text-[var(--primary-color)]">
                Platform-Specific Expertise:
              </span>{" "}
              Each platform has its own algorithm, ad types, and targeting
              rules. We build custom campaigns designed to get the most out of
              each channel.
            </li>
            <li>
              <span className="text-[var(--primary-color)]">
                Creative + Strategy:
              </span>{" "}
              We blend eye-catching visuals, persuasive copy, and clear CTAs
              with data-backed targeting strategies that deliver clicks and
              conversions.
            </li>
            <li>
              <span className="text-[var(--primary-color)]">
                Conversion-Focused Funnels:
              </span>{" "}
              From awareness to retargeting, we build full-funnel ad strategies
              that nurture leads and drive purchases.
            </li>
            <li>
              <span className="text-[var(--primary-color)]">
                Transparent Reporting & Optimization:
              </span>{" "}
              We track what matters CPC, CTR, ROAS, CPL and optimize every week
              to improve performance.
            </li>
            <li>
              <span className="text-[var(--primary-color)]">
                Budget-Friendly Scaling:
              </span>{" "}
              Whether you’re starting with ₹5,000 or scaling up to ₹5 lakhs, we
              help you make the most of your budget without compromising
              performance.
            </li>
          </ul>
        </div>

        {/* What You Get Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-[var(--primary-color)]">
            What You Get with Our Social Media Ad Management
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-800 text-base">
            {[
              "Campaign strategy and funnel design",
              "Audience research and targeting setup",
              "Ad creative (copy + visuals)",
              "A/B testing of creatives and copy",
              "Pixel and conversion tracking",
              "Weekly reporting and performance analysis",
              "Ongoing optimization and scaling",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 mt-1 text-[var(--primary-color)] shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="bg-gray-50 py-12">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-10">
          <h2 className="text-3xl md:text-3xl font-bold text-[var(--primary-color)] text-center">
            Frequently Asked Questions (FAQs) – Social Media Marketing Agency in
            India
          </h2>

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg shadow-sm bg-white"
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left text-gray-900 font-medium focus:outline-none"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span>{item.q}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="p-4 pt-0 text-gray-700">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services Table Section */}
      <section className="bg-white py-12">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)] text-center">
            Our Other Services
          </h2>

          <div className="overflow-x-auto rounded-xl shadow-lg">
            <table className="w-full table-auto border border-gray-300 border-collapse text-center">
              <tbody>
                <tr className="">
                  <td className="px-6 py-4 border border-gray-300 text-blue-600  hover:underline cursor-pointer hover:bg-indigo-50 transition">
                    <a href="/services/search-engine-optimization">
                      Search Engine Optimization
                    </a>
                  </td>
                  <td className="px-6 py-4 border border-gray-300 text-blue-600  hover:underline cursor-pointer hover:bg-indigo-50 transition">
                    <a href="/services/social-media-marketing">
                      Social Media Marketing
                    </a>
                  </td>
                  <td className="px-6 py-4 border border-gray-300 text-blue-600  hover:underline cursor-pointer hover:bg-indigo-50 transition">
                    <a href="/services/performance-marketing">
                      Performance Marketing
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 border border-gray-300 text-blue-600 hover:underline cursor-pointer hover:bg-indigo-50 transition">
                    <a href="/services/content-marketing">Content Marketing</a>
                  </td>
                  <td className="px-6 py-4 border border-gray-300 text-blue-600 hover:underline cursor-pointer hover:bg-indigo-50 transition">
                    <a href="/services/website-design-development">
                      Website Designing & Development
                    </a>
                  </td>
                  <td className="px-6 py-4 border border-gray-300 text-blue-600 hover:underline cursor-pointer hover:bg-indigo-50 transition">
                    <a href="/services/email-marketing">Email Marketing</a>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 border border-gray-300 text-blue-600 hover:underline cursor-pointer hover:bg-indigo-50 transition">
                    <a href="/services/social-media-optimization">
                      Social Media Optimization
                    </a>
                  </td>
                  <td className="px-6 py-4 border border-gray-300 text-blue-600 hover:underline cursor-pointer hover:bg-indigo-50 transition">
                    <a href="/services/graphic-designing">Graphic Designing</a>
                  </td>
                  <td className="px-6 py-4 border border-gray-300 text-blue-600 hover:underline cursor-pointer hover:bg-indigo-50 transition">
                    <a href="/services/ai-cgi-marketing">
                      AI and CGI Marketing
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 border border-gray-300 text-blue-600 hover:underline cursor-pointer hover:bg-indigo-50 transition">
                    <a href="/services/landing-page-optimization">
                      Landing Page Optimization
                    </a>
                  </td>
                  <td className="px-6 py-4 border border-gray-300 text-blue-600 hover:underline cursor-pointer hover:bg-indigo-50 transition">
                    <a href="/services/video-shoot">Video Shoot</a>
                  </td>
                  <td className="px-6 py-4 border border-gray-300 text-blue-600 hover:underline cursor-pointer hover:bg-indigo-50 transition">
                    <a href="/services/public-relations">Public Relations</a>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 border border-gray-300 text-blue-600 hover:underline cursor-pointer hover:bg-indigo-50 transition">
                    <a href="/services/influencer-marketing">
                      Influencer Marketing
                    </a>
                  </td>
                  <td className="px-6 py-4 border border-gray-300"></td>
                  <td className="px-6 py-4 border border-gray-300 text-blue-600 hover:underline cursor-pointer hover:bg-indigo-50 transition">
                    <a href="/services/online-reputation-management">
                      Online Reputation Management
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <OurProcess />
      <WhyBigwig />
      <Footer />
    </div>
  );
}

export default SocialMediaMarketing;

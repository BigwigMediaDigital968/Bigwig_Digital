"use client";
import Nav from "../../../../components/Nav";
import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
import { TypeAnimation } from "react-type-animation";
import hero from "../../../../Assets/Services hero/seo.jpg";
import seo from "../../../../Assets/services/3.jpg";
import Footer from "../../../../components/Footer";
import {
  BarChart2,
  PieChart,
  Search,
  Globe,
  LineChart,
  Smartphone,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import ContactForm from "../../../../components/ContactForm";
import { useState } from "react";
import Image from "next/image";

const stats = [
  {
    icon: <Search size={32} className="text-[var(--primary-color)]" />,
    text: "Of all site visits, 53% are the result of organic search engine discovery.",
  },
  {
    icon: <BarChart2 size={32} className="text-[var(--primary-color)]" />,
    text: "By 2028, the SEO market is expected to expand by $122.11 billion.",
  },
  {
    icon: <PieChart size={32} className="text-[var(--primary-color)]" />,
    text: "68% of user interactions on the internet are started by search engines.",
  },
  {
    icon: <Globe size={32} className="text-[var(--primary-color)]" />,
    text: "Google accounts for 92.96% of all traffic worldwide (Search, Images, Google Maps).",
  },
  {
    icon: <LineChart size={32} className="text-[var(--primary-color)]" />,
    text: "Within a year of publication, just five to six pages out of 100 will appear in the top ten search results.",
  },
  {
    icon: <Smartphone size={32} className="text-[var(--primary-color)]" />,
    text: "Mobile devices account for over 60% of organic search engine visits.",
  },
];
const faqs = [
  {
    q: "Is affiliate marketing only for eCommerce?",
    a: "Not at all. Affiliate marketing works across industries like SaaS, fintech, education, wellness, and lead generation. At BigWig Media Digital, we design strategies tailored to your niche and goals.",
  },
  {
    q: "Why should I hire an affiliate marketing agency?",
    a: (
      <>
        <p>
          Managing affiliates requires time, tools, and expertise. A trusted
          affiliate marketing agency in India like BigWig Digital helps you:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Save time and reduce costs with expert program management.</li>
          <li>
            Access a strong network of affiliates, influencers, and creators.
          </li>
          <li>
            Get transparent reports, compliance checks, and ROI-driven
            campaigns.
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "How does affiliate marketing actually work?",
    a: "Affiliate marketing is a performance-based model where businesses pay affiliates only when they generate results - like sales, leads, or app installs. This makes it a low-risk, high-reward marketing channel.",
  },
  {
    q: "What’s your pricing model?",
    a: "We offer flexible pricing options, including a one-time setup fee with a monthly retainer or performance-based commissions. This ensures you only pay for measurable growth.",
  },
  {
    q: "Can you manage affiliate programs on platforms like CJ, Impact, or PartnerStack?",
    a: "Yes. Our team has experience managing and scaling programs on all major affiliate platforms.",
  },
  {
    q: "How long before I see results?",
    a: "Most clients see early traction within 30–45 days. By Month 2 onward, results typically become consistent as affiliate partnerships mature.",
  },
  {
    q: "Will I get access to performance reports?",
    a: "Absolutely. We provide real-time dashboards and detailed reports so you can track every click, conversion, and payout.",
  },
  {
    q: "How can I maximize my ROI from affiliate marketing?",
    a: (
      <>
        <p>
          Maximizing ROI comes down to two things: quality traffic + strong
          conversion rates. Our team helps you by:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Matching you with high-performing affiliates.</li>
          <li>Optimizing your funnels and offers.</li>
          <li>Ensuring campaigns run ethically and transparently.</li>
        </ul>
      </>
    ),
  },
];

function Seo() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <title>SEO Services for Higher Ranking</title>
      <meta
        name="description"
        content="Boost your online visibility and rank higher on search engines with our expert SEO services."
      />
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/search-engine-optimization"
      />

      <Nav />
      <section
        className="relative bg-cover bg-center bg-no-repeat py-10 px-4"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="bg-black/40 absolute inset-0 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
              Best SEO Company in India
            </h1>

            <p
              className="text-3xl md:text-4xl font-semibold flex items-center gap-2 text-[#4e6cba]"
              style={{
                textShadow: "0 2px 6px rgba(0,0,0,0.6)", // softer but effective
                letterSpacing: "0.5px",
              }}
            >
              More
              <TypeAnimation
                sequence={["Traffic", 2000, "Leads", 2000, "Sales", 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </p>

            <p className="text-base md:text-lg max-w-md text-white/90">
              We help businesses grow their online presence with tailored SEO
              strategies in India. Connect with us and see the difference.
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

      <section className="bg-white  py-12 px-6 md:px-12">
        <div className="w-11/12 md:w-5/6 mx-auto">
          {/* Heading */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)]">
              What is SEO & Why is it Important for Your business?
            </h2>
          </div>

          {/* Main content layout */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left content */}
            <div className="space-y-6">
              <p className="text-gray-700  text-lg leading-relaxed">
                Many people mistakenly believe that SEO is merely a business
                etiquette. The process of increasing a website&#39;s or online
                content&#39;s visibility in search engine results pages (SERPs),
                mostly on sites like Google, Yahoo, and Bing, is known as search
                engine optimization. Thus, the likelihood of showing up in
                search queries increases with visibility. Usually, an SEO
                strategy focuses on four important areas
              </p>

              <ul className="list-[upper-roman] pl-6 space-y-2 text-gray-800 ">
                <li>Analysis of Keywords</li>
                <li>Establishing Backlinks</li>
                <li>Production of Content</li>
                <li>Upkeep of technical systems</li>
              </ul>

              <p className="text-gray-700  text-lg leading-relaxed">
                These elements form the foundation of the approaches used by
                different <strong>SEO agencies</strong>, regardless of the kind
                of SEO.
              </p>
            </div>

            {/* Right image */}
            <div className="w-full">
              <Image
                src={seo}
                alt="Best SEO Company in India"
                className="w-full h-[60vh] rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="w-11/12 md:w-5/6 mx-auto flex flex-col md:flex-row items-center gap-8 py-12">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)]">
            Drive Organic Traffic with the Best SEO Agency in India
          </h2>
          <p className="text-lg text-gray-600  text-justify">
            <a href="https://www.bigwigmediadigital.com/">
              <strong>BigWig Digital</strong>
            </a>{" "}
            is recognized as a leading SEO Agency in India, delivering powerful
            and result-driven SEO solutions for businesses worldwide. With more
            than 10 years of proven expertise, we have successfully managed over
            10,000 SEO campaigns and helped global brands achieve higher search
            engine rankings, organic visibility, and measurable growth. Our 95%
            client retention rate reflects the trust and results we deliver.
          </p>
        </div>

        {/* Right stats with icons */}
        <div className="md:w-1/2">
          <div className="grid sm:grid-cols-3 gap-6">
            {stats.map((item, i) => (
              <div
                key={i}
                className="bg-gray-100  rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <p className="text-gray-800  font-medium text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-white  py-12 px-4">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--primary-color)]">
            All in One SEO Services Under One Roof
          </h2>
          <p className="text-lg text-gray-600  text-justify">
            As a trusted SEO Agency in India, we combine advanced SEO
            strategies, in-depth keyword research, and white-hat techniques to
            drive sustainable organic traffic, improve rankings, and boost ROI.
            Whether you are a startup or an enterprise, our tailored SEO
            services ensure your brand stays ahead of the competition.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card Item */}
            {[
              {
                title: "Local search engine optimization",
                points: [
                  `We assist your company in showing up in "near me" searches, which generates local leads and foot traffic.`,
                  `Your Google Business Profile is optimized by our expertise to improve visibility on maps and local packs.`,
                  `To increase your local online authority, we create local citations.`,
                  `We control your ratings and reviews to boost click-through rates and trust.`,
                  `We use location-based sites as part of our content strategy to draw in local searchers.`,
                ],
              },
              {
                title: "App Store Optimization (ASO)",
                points: [
                  `We raise your app's visibility and ranking on the Apple App Store and Google Play.`,
                  `The purpose of our content and creatives is to increase engagement and app downloads.`,
                  `Utilizing competitive insights and keyword research, we improve discoverability.`,
                  `We help you get good app reviews so you may succeed in the long run.`,
                  `Our ASO tactics provide your app a competitive edge in a saturated market.`,
                ],
              },
              {
                title: "Answer Engine Optimization (AEO)",
                points: [
                  `We arrange your material such that it shows up in Google's "People Also Ask" and featured snippets.`,
                  `Your chances of ranking as the top response to voice search inquiries are increased by our optimization strategies.`,
                  `We produce organized, conversational material that corresponds with the way people pose inquiries.`,
                  `Our use of schema markup improves the search engine visibility of your material.`,
                  `With our AEO strategy, you'll gain more credibility and click-throughs.`,
                ],
              },
              {
                title: "Geotargeted SEO (GEO)",
                points: [
                  `To reach audiences in various cities or regions, we develop region-specific methods.`,
                  `Hyper-targeted traffic is generated by the local landing pages our team creates.`,
                  `We help you dominate local search engine results pages by optimizing for geo-specific keywords.`,
                  `Through localized content and backlinks, we bolster your visibility.`,
                  `We help you rank in every area you serve, making us perfect for businesses with many locations.`,
                ],
              },
              {
                title: "E-commerce SEO",
                points: [
                  `We enhance your store to increase organic sales and product visibility.`,
                  `Your product's rankings on Google and other search engines are raised by our tactics.`,
                  `For higher conversion rates, we improve user experience and address technical problems.`,
                  `We write product descriptions and URLs that are optimized for search engines to draw in customers.`,
                  `You can achieve long-term success with our e-commerce SEO without depending too much on advertisements.`,
                ],
              },
              {
                title: "International SEO",
                points: [
                  `We increase your website's visibility across the globe by helping it rank in several languages and countries.`,
                  `To prevent content misunderstanding, our team uses geo-targeting and hreflang tags.`,
                  `For every target market and culture, we localize your approach and content.`,
                  `Baidu, Yandex, and Bing are some of the regional search engines that we optimize for.`,
                  `When you work with us, your brand is prepared to compete and prosper globally.`,
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative pl-6 border-l-4 border-[var(--primary-color)] bg-gray-100  p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-3">
                  {item.title}
                </h3>
                <ul className="list-disc  space-y-2 text-gray-700  text-base">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-center text-[var(--primary-color)]">
            The Best SEO Agency for SEO Services in India and beyond!
          </h3>
          <p className="text-lg text-gray-600  text-justify">
            Choosing the right partner for your digital growth is not just about
            rankings - it&#39;s about trust, transparency, and results. At
            BigWig Media Digital, we redefine what it means to offer SEO
            services in India by focusing on strategies that actually move the
            needle for your business.
          </p>
          <h3 className="text-lg text-gray-600  text-justify">
            Here&#39;s what makes us different:
          </h3>
          <ul className="list-disc list-inside space-y-4 text-gray-700">
            <li>
              <strong>Tailored for You, Not Templates</strong> – We don’t
              believe in one-size-fits-all SEO. Every business is unique, so our
              strategies are customized to your goals, audience, and industry.
            </li>

            <li>
              <strong>SEO That Builds Brands</strong> – Beyond keyword rankings,
              our focus is on creating lasting visibility that strengthens your
              brand identity online.
            </li>

            <li>
              <strong>Balance of Local & Global SEO</strong> – Whether you want
              to dominate your local market or expand internationally, our
              expertise covers both.
            </li>

            <li>
              <strong>Transparent Growth Tracking</strong> – No jargon, no
              hidden metrics. You see real progress through clear reports and
              measurable ROI.
            </li>

            <li>
              <strong>Always Ahead of the Curve</strong> – With algorithm
              updates and evolving trends, we ensure your SEO strategy is
              future-proof and compliant with Google’s guidelines.
            </li>

            <li>
              <strong>
                BigWig Media Digital isn’t just another SEO company in India
              </strong>{" "}
              – We’re a growth partner. With us, you gain more than visibility;
              you gain authority, engagement, and business impact that lasts.
            </li>
          </ul>
          <p className="text-lg text-gray-600  text-justify">
            BigWig Media Digital isn’t just another SEO company in India - we’re
            a growth partner. With us, you gain more than visibility; you gain
            authority, engagement, and business impact that lasts
          </p>
          <div className="flex justify-center">
            <a href="/contact">
              <button className="mt-8 px-6 py-3 bg-[var(--primary-color)]  text-white rounded-full font-semibold hover:bg-opacity-80 transition">
                Let’s Connect
              </button>
            </a>
          </div>
        </div>
      </section>

      <OurProcess />
      <WhyBigwig />

      {/* FAQ Section */}
      <section className="bg-gray-50 py-12">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)] text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg shadow-sm bg-white"
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    {index + 1}. {item.q}
                  </h3>
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

      <Footer />
    </div>
  );
}

export default Seo;

"use client";
import { TypeAnimation } from "react-type-animation";
import Nav from "../../../../components/Nav";
import hero from "../../../../Assets/Services hero/orm.jpg";
import orm from "../../../../Assets/services/16.jpg";
import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
import Footer from "../../../../components/Footer";
import Slider from "react-slick";
import ContactForm from "../../../../components/ContactForm";
import Image from "next/image";

const ormServices = [
  {
    title: "Negative Review Handling",
    desc: "Address and minimize the impact of poor customer reviews across platforms like Google, Justdial, and industry-specific portals.",
  },
  {
    title: "Search Engine Cleanup",
    desc: "Push down outdated or irrelevant content and replace it with updated, positive content that supports your brand identity.",
  },
  {
    title: "Social Media Monitoring",
    desc: "Track conversations around your brand in real time and take control before small issues become public crises.",
  },
  {
    title: "Personal Branding Protection",
    desc: "Strengthen the online image of professionals, founders, and public figures with high-authority content and platform visibility.",
  },
  {
    title: "Crisis Reputation Management",
    desc: "Manage brand sentiment during critical times with fast, accurate, and strategic response frameworks.",
  },
  {
    title: "Business Listings Optimization",
    desc: "Ensure your brand details are accurate and consistent across local directories, maps, and review aggregators.",
  },
];

function OnlineReputationManagement() {
  const sliderSettings = {
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
      <title>Online Reputation Management</title>
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/online-reputation-management"
      />
      <meta
        name="description"
        content="Monitor, manage, and enhance your brand's online image with strategic ORM services."
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
              Online Reputation Management Services to Safeguard Your Brand
              Image
            </h1>

            <p
              className="text-2xl md:text-4xl font-semibold text-[#4e6cba]"
              style={{
                letterSpacing: "0.5px",
              }}
            >
              <span className="inline">We protect your brand with&nbsp;</span>
              <span className="inline-block whitespace-nowrap">
                <TypeAnimation
                  sequence={[
                    "real-time reputation care",
                    2000,
                    "powerful online monitoring ",
                    2000,
                    " digital crisis control",
                    2000,
                    "trust-building content ",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </p>

            <p className="text-base md:text-lg max-w-md text-white/90">
              Your reputation is your brand’s most valuable asset. We manage,
              monitor, and improve it across every platform that matters.
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

      <section className="py-12">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-12">
          {/* Grid Content - Text left, image right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Text Content */}
            <div className="space-y-6 text-gray-800">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)]">
                Online Reputation Management That Protects What Matters
              </h2>
              <p className="text-lg leading-relaxed">
                Your brand&#39;s most significant asset in this digital age is
                its online reputation. One negative review or outdated article
                can cost you trust, traffic, and conversions. At{" "}
                <strong>
                  <a href="https://www.bigwigmediadigital.com/">
                    BigWig Digital
                  </a>
                </strong>
                , we offer reliable and strategic ORM services to help
                individuals, professionals, and brands monitor, manage, and
                improve their online presence across platforms.
              </p>
              <p className="text-lg leading-relaxed">
                People search before they engage. What shows up on Google,
                review sites, or social media can shape the public perception of
                your brand. Our goal is to ensure that your brand is represented
                accurately, positively, and consistently across every digital
                touchpoint. From search engines to forums, we make sure your
                reputation stays strong where it matters most.
              </p>
            </div>

            {/* Right Image */}
            <div>
              <Image
                src={orm}
                alt="Online Reputation Management Services"
                className="w-full h-[60vh] rounded-xl shadow-md object-cover"
              />
            </div>
          </div>

          {/* Highlighted Box Moved Below */}
          <div className="bg-blue-100 text-blue-900 p-8 rounded-3xl shadow-lg border-l-4 border-[var(--primary-color)]">
            <h4 className="text-xl font-semibold mb-4">
              Why Online Reputation Management Is Non-Negotiable
            </h4>
            <p className="mb-4 leading-relaxed">
              Every click, comment, or complaint can impact your credibility.
              Whether it&#39;s a negative customer review, outdated press
              coverage, or a competitor&#39;s smear campaign, online reputation
              issues can arise quickly and spread even faster.
            </p>
            <p className="leading-relaxed">
              Effective ORM is not just about fixing what&#39;s broken. It&#39;s
              about building a trustworthy digital profile that reflects your
              true value. BigWig Digital helps you take charge of your
              reputation with proactive strategies that protect your name and
              restore confidence among your customers, partners, and investors.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)]">
              What Our ORM Services Can Help You With
            </h2>
          </div>

          {/* Mobile View: Slider */}
          <div className="md:hidden">
            <Slider {...sliderSettings}>
              {ormServices.map((item, idx) => (
                <div key={idx} className="px-2">
                  <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[var(--primary-color)] shadow-sm">
                    <h4 className="text-xl font-semibold mb-2 text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Desktop View: Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ormServices.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-6 rounded-xl border-l-4 border-[var(--primary-color)] shadow-sm hover:shadow-md transition"
              >
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  {item.title}
                </h4>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="w-11/12 md:w-5/6 mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)]">
              Why Your Online Reputation Deserves Serious Attention
            </h2>
          </div>

          {/* 4-Block Grid */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {/* Block 1 */}
            <div className="bg-gray-50  p-6 rounded-2xl shadow-md hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Reputation is Built Over Time
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Trust is hard-earned but easily lost in the age of instant
                opinions and viral posts. That is why reputation management
                requires constant attention and long-term strategy. At BigWig
                Digital, our ORM team helps you build resilience into your brand
                identity. We work with you to create a digital reputation that
                earns trust, supports sales, and reinforces your brand value.
              </p>
              <br />
              <p className="text-gray-700 text-sm leading-relaxed">
                From small businesses to enterprise brands, our ORM services are
                tailored to handle both proactive brand building and reactive
                damage control. As a dependable ORM Agency we combine deep
                digital expertise with powerful tools to monitor, repair, and
                enhance your digital reputation.
              </p>
            </div>

            {/* Block 2 */}
            <div className="bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                ORM That Supports Growth
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Online reputation management is not just about damage control.
                It plays a key role in long-term business development. A strong
                digital presence builds the kind of trust that attracts
                investors, partners, and top talent. Whether you&#39;re applying
                for a government tender, pitching to clients, or entering new
                markets, your online image can influence major decisions. At{" "}
                <strong>
                  <a href="https://www.bigwigdigital.in/">BigWig Digital</a>
                </strong>{" "}
                , we help you shape a digital narrative that supports growth and
                opens doors to new opportunities. As a professional ORM Agency
                we ensure your reputation works as an asset, not a liability.
              </p>
            </div>

            {/* Block 3 */}
            <div className="md:bg-blue-50 bg-gray-50  p-6 rounded-2xl shadow-md hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Control the Conversation
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                You cannot control what people say, but you can control how your
                brand responds and what surfaces first. From search engine
                results to social mentions, every touchpoint influences your
                customer’s perception. By partnering with a leading ORM agency ,
                you gain the tools and strategy to lead the conversation. BigWig
                Digital helps you respond with purpose, build authority, and
                maintain consistent brand messaging across all platforms. A
                strong reputation today ensures customer loyalty and business
                resilience tomorrow.
              </p>
            </div>

            {/* Block 4 */}
            <div className="md:bg-gray-50 bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Why BigWig for ORM Services
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>
                  <a href="https://www.bigwigdigital.in/">BigWig Digital</a>
                </strong>{" "}
                understands the fast-paced nature of digital perception. We use
                proven strategies to build and protect your online reputation
                across platforms. As a growing ORM agency , we believe in
                transparency, consistent monitoring, and results that show in
                search rankings and sentiment shifts. With us, your brand earns
                more than just visibility. It earns credibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-10">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)] text-center">
            Benefits of Strong Online Reputation Management
          </h2>

          {/* Responsive Grid List */}
          <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10 text-gray-800 text-lg">
            {[
              "Builds lasting customer trust",
              "Increases brand credibility across platforms",
              "Improves search engine visibility",
              "Protects against fake reviews or misinformation",
              "Attracts better business opportunities and partnerships",
              "Enhances personal branding for executives and founders",
              "Supports crisis recovery and public trust rebuilding",
            ].map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-[var(--primary-color)] mt-1 text-xl">
                  ✔️
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <OurProcess />
      <WhyBigwig />
      <Footer />
    </div>
  );
}

export default OnlineReputationManagement;

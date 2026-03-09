"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

import {
  Search,
  Globe,
  MonitorSmartphone,
  Mail,
  Cpu,
  PenTool,
  Users,
  Megaphone,
  ThumbsUp,
} from "lucide-react";

import ButtonFill from "./Button";

const services = [
  {
    title: "Performance Marketing",
    slug: "/services/performance-marketing",
    desc: (
      <>
        As a results-driven{" "}
        <span className="text-[var(--color5)] underline underline-offset-4">
          performance marketing agency in Delhi
        </span>{" "}
        we run optimized Google Ads and Meta Ads campaigns to generate
        high-quality leads, improve conversions, and scale revenue.
      </>
    ),
    icon: MonitorSmartphone,
  },
  {
    title: "Search Engine Optimization (SEO)",
    slug: "services/search-engine-optimization",
    desc: (
      <>
        Our expert{" "}
        <span className="text-[var(--color5)] underline underline-offset-4">
          SEO company in Delhi
        </span>{" "}
        improves your search rankings, organic traffic, and local visibility
        through technical SEO, keyword strategy, on-page optimization, and
        authority building.
      </>
    ),
    icon: Search,
  },
  {
    title: "Social Media Marketing (SMM)",
    slug: "/services/social-media-marketing",
    desc: (
      <>
        We are a creative{" "}
        <span className="text-[var(--color5)] underline underline-offset-4">
          social media marketing agency in Delhi
        </span>{" "}
        helping brands grow across Instagram, Facebook, LinkedIn, and YouTube
        using strategic content and targeted advertising.
      </>
    ),
    icon: Globe,
  },
  {
    title: "Website Designing & Development",
    slug: "/services/website-design-development",
    desc: (
      <>
        As a trusted{" "}
        <span className="text-[var(--color5)] underline underline-offset-4">
          website development company in Delhi,
        </span>{" "}
        we build fast, responsive, and conversion-focused websites that support
        your digital marketing goals.
      </>
    ),
    icon: Cpu,
  },
  {
    title: "Content\nMarketing",
    slug: "/services/content-marketing",
    desc: "We create SEO-optimized blogs, landing pages, and brand storytelling content that strengthens authority and supports long-term digital growth.",
    icon: PenTool,
  },
  {
    title: "Email\nMarketing",
    slug: "/services/email-marketing",
    desc: "Personalized and automated email marketing campaigns designed to nurture leads, improve retention, and increase customer lifetime value.",
    icon: Mail,
  },
  {
    title: "Influencer\nMarketing",
    slug: "/services/influencer-marketing",
    desc: "Strategic influencer collaborations that expand brand reach and build credibility within your target audience.",
    icon: Megaphone,
  },
  {
    title: "Online Reputation Management (ORM)",
    slug: "/services/online-reputation-management",
    desc: (
      <>
        Protect and enhance your brand image with professional{" "}
        <span className="text-[var(--color5)] underline underline-offset-4">
          online reputation management services
        </span>{" "}
        including review monitoring and reputation strategy.
      </>
    ),
    icon: ThumbsUp,
  },
  {
    title: "Social Media Optimization (SMO)",
    slug: "/services/social-media-optimization",
    desc: "Optimize your social profiles to improve discoverability, engagement, and brand consistency across platforms.",
    icon: ThumbsUp,
  },
  {
    title: "Graphic Designing & Video Editing",
    slug: "/services/graphic-designing",
    desc: "Creative visuals and high-converting videos developed to strengthen your brand identity and campaign performance.",
    icon: PenTool,
  },
  {
    title: "Affiliate\nMarketing",
    slug: "/services/affiliate-marketing",
    desc: "Scale revenue through a structured, performance-based affiliate marketing network that drives consistent sales growth.",
    icon: Users,
  },
];

// Split rows
const row1 = services.slice(0, 6);
const row2 = services.slice(6, 11);

export default function ServicesPage() {
  return (
    <section className="relative py-12 bg-[var(--color1)] overflow-hidden">
      {/* Background Blobs */}
      {/* <div className="absolute -top-10 -left-24 w-50 h-50 bg-[var(--color5)]/50 blur-[70px] rounded-full z-20"></div>
      <div className="absolute -bottom-10 -right-24 w-50 h-50 bg-[var(--color5)]/50 blur-[70px] rounded-full z-20"></div> */}

      <div className="w-11/12 md:w-5/6 mx-auto relative z-10">
        {/* Heading */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <p className="text-[var(--color5)] text-lg font-semibold border-b w-fit mb-3 tracking-widest">
              Transforming Brands with Modern Digital Solutions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white drop-shadow-lg">
              Our Digital Marketing Services in Delhi
            </h2>
          </div>

          <Link href="/services">
            <ButtonFill text="View All Services" />
          </Link>
        </div>

        {/* --------------------- ROW 1 --------------------- */}
        <Swiper
          modules={[Autoplay, FreeMode]}
          freeMode={true}
          loop={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          className="mb-10"
        >
          {row1.map((service, i) => {
            const Icon = service.icon;
            return (
              <SwiperSlide key={i} style={{ width: "400px" }}>
                <Link
                  href={service.slug}
                  className="group flex items-start gap-6 p-6 rounded-3xl  
                    border border-white/20 hover:border-[var(--color3)]/50
                    hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-[280px]"
                >
                  <div
                    className="w-20 h-20 rounded-2xl bg-gradient-to-b 
                    from-[var(--color3)] to-[var(--color1)]
                    flex items-center justify-center text-white shadow-md 
                    group-hover:scale-105 transition-all duration-500"
                  >
                    <Icon size={32} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl whitespace-pre-wrap font-semibold text-[var(--color5)] group-hover:text-[var(--color4)] transition-all">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-gray-200 leading-relaxed">
                      {service.desc}
                    </p>
                    <div
                      className="mt-4 w-24 h-[3px] rounded-full bg-gradient-to-r 
                      from-[var(--color4)] to-[var(--color5)] opacity-50 group-hover:opacity-90 transition-all"
                    ></div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* --------------------- ROW 2 --------------------- */}
        <Swiper
          modules={[Autoplay, FreeMode]}
          freeMode={true}
          loop={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={5000}
        >
          {row2.map((service, i) => {
            const Icon = service.icon;
            return (
              <SwiperSlide key={i} style={{ width: "400px" }}>
                <Link
                  href={service.slug}
                  className="group flex items-start gap-6 p-6 rounded-3xl  
                    border border-white/20 hover:border-[var(--color3)]/50
                    hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-[280px]"
                >
                  <div
                    className="w-20 h-20 rounded-2xl bg-gradient-to-b 
                    from-[var(--color3)] to-[var(--color1)]
                    flex items-center justify-center text-white shadow-md 
                    group-hover:scale-105 transition-all duration-500"
                  >
                    <Icon size={32} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl whitespace-pre-wrap font-semibold text-[var(--color5)] group-hover:text-[var(--color4)] transition-all">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-gray-200 leading-relaxed">
                      {service.desc}
                    </p>
                    <div
                      className="mt-4 w-24 h-[3px] rounded-full bg-gradient-to-r 
                      from-[var(--color4)] to-[var(--color5)] opacity-50 group-hover:opacity-90 transition-all"
                    ></div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

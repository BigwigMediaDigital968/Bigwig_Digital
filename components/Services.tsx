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
    title: "Search Engine Optimization (SEO)",
    slug: "services/search-engine-optimization",
    desc: "Improve your search rankings and grow organic traffic with proven SEO methods.",
    icon: Search,
  },
  {
    title: "Social Media Marketing (SMM)",
    slug: "/services/social-media-marketing",
    desc: "Expand your brand presence using targeted ads across top social platforms.",
    icon: Globe,
  },
  {
    title: "Performance Marketing",
    slug: "/services/performance-marketing",
    desc: "Drive high-quality leads and conversions through optimized paid campaigns.",
    icon: MonitorSmartphone,
  },
  {
    title: "Content\nMarketing",
    slug: "/services/content-marketing",
    desc: "Build authority with engaging blogs, articles, and creative brand content.",
    icon: PenTool,
  },
  {
    title: "Website Designing & Development",
    slug: "/services/website-design-development",
    desc: "Get fast, modern, and conversion-focused websites tailored to your brand.",
    icon: Cpu,
  },
  {
    title: "Email\nMarketing",
    slug: "/services/email-marketing",
    desc: "Boost customer engagement using automated, personalized email campaigns.",
    icon: Mail,
  },
  {
    title: "Social Media Optimization (SMO)",
    slug: "/services/social-media-optimization",
    desc: "Enhance visibility with professionally optimized and active social profiles.",
    icon: ThumbsUp,
  },
  {
    title: "Graphic Designing & Video Editing",
    slug: "/services/graphic-designing",
    desc: "Create stunning visuals and videos that strengthen your brand identity.",
    icon: PenTool,
  },
  {
    title: "Affiliate\nMarketing",
    slug: "/services/affiliate-marketing",
    desc: "Increase sales through a scalable network of trusted affiliate partners.",
    icon: Users,
  },
  {
    title: "Influencer\nMarketing",
    slug: "/services/influencer-marketing",
    desc: "Reach new audiences by collaborating with trusted influencers in your niche.",
    icon: Megaphone,
  },
  {
    title: "Online Reputation Management (ORM)",
    slug: "/services/online-reputation-management",
    desc: "Protect your brand image with monitoring, reviews, and reputation strategy.",
    icon: ThumbsUp,
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
              OUR SERVICES
            </p>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-[var(--color4)] drop-shadow-lg">
              Transforming Brands with Modern Digital Solutions
            </h1>
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
              <SwiperSlide key={i} style={{ width: "350px" }}>
                <Link
                  href={service.slug}
                  className="group flex items-start gap-6 p-6 rounded-3xl  
                    border border-white/20 hover:border-[var(--color3)]/50
                    hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
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
              <SwiperSlide key={i} style={{ width: "350px" }}>
                <Link
                  href={service.slug}
                  className="group flex items-start gap-6 p-6 rounded-3xl  
                    border border-white/20 hover:border-[var(--color3)]/50
                    hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
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

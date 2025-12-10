import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Your image imports
import strategic from "../Assets/Why BigWig  (1)/Strategic Mindset.png";
import growth from "../Assets/Why BigWig  (1)/Focused on Growth.png";
import detail from "../Assets/Why BigWig  (1)/Attention to Detail.png";
import results from "../Assets/Why BigWig  (1)/Results That Matter.png";
import expertise from "../Assets/Why BigWig  (1)/360° Digital Expertise (1).png";
import partnership from "../Assets/Why BigWig  (1)/Partnership Over Projects.png";
import ideas from "../Assets/Why BigWig  (1)/Driven by Ideas.png";
import reporting from "../Assets/Why BigWig  (1)/Clear & Honest Reporting.png";
import Image from "next/image";

const reasons = [
  {
    img: strategic,
    title: "Strategic Mindset",
    text: "Every move we make is backed by clear goals and smart planning.",
  },
  {
    img: growth,
    title: "Focused on Growth",
    text: "We’re driven to take your brand to the next level, step by step.",
  },
  {
    img: detail,
    title: "Attention to Detail",
    text: "From concept to execution, we focus on what truly matters.",
  },
  {
    img: results,
    title: "Results That Matter",
    text: "We care about impact, not just impressions or likes.",
  },
  {
    img: expertise,
    title: "360° Digital Expertise",
    text: "One team, all your digital needs, seamlessly connected.",
  },
  {
    img: partnership,
    title: "Partnership Over Projects",
    text: "We believe in building long-term relationships, not quick fixes.",
  },
  {
    img: ideas,
    title: "Driven by Ideas",
    text: "Creative thinking is at the heart of every campaign we craft.",
  },
  {
    img: reporting,
    title: "Clear & Honest Reporting",
    text: "You always know what’s working, and what’s next.",
  },
];

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
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 1 },
    },
  ],
};

const WhyBigwig: React.FC = () => (
  <section className="w-full  py-12 px-4">
    <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-[var(--primary-color)]">
      Why&nbsp;BigWig Media Digital
    </h2>

    {/* Desktop Grid */}
    <div className="hidden lg:grid mx-auto w-5/6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {reasons.map(({ img, title, text }) => (
        <div
          key={title}
          className="group bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-8 text-center shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <Image
            src={img}
            alt={title}
            className="mx-auto mb-6 w-28 h-28 object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <h3 className="text-lg font-bold text-[var(--primary-color)] mb-3">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            {text}
          </p>
        </div>
      ))}
    </div>

    {/* Mobile Slider */}
    <div className="block lg:hidden w-full max-w-sm mx-auto">
      <Slider {...sliderSettings}>
        {reasons.map(({ img, title, text }) => (
          <div key={title} className="px-2">
            <div className="group bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-8 text-center shadow transition-all duration-300">
              <Image
                src={img}
                alt={title}
                className="mx-auto mb-6 w-24 h-24 object-contain"
              />
              <h3 className="text-lg font-bold text-[var(--primary-color)] mb-3">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                {text}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </section>
);

export default WhyBigwig;

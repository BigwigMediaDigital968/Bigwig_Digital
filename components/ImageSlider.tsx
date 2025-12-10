"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Button from "./Button";
import { FaQuoteRight } from "react-icons/fa";

interface Testimonial {
  name: string;
  review: string;
  rating: number;
  image: string;
  text: string;
}

// Custom Navigation Buttons
const CustomPrev = () => (
  <div className="swiper-button-prev-custom absolute left-1 top-1/2 -translate-y-1/2 z-10 md:hidden cursor-pointer">
    <ChevronLeft size={28} className="text-white" />
  </div>
);

const CustomNext = () => (
  <div className="swiper-button-next-custom absolute right-1 top-1/2 -translate-y-1/2 z-10 md:hidden cursor-pointer">
    <ChevronRight size={28} className="text-white" />
  </div>
);

export default function ImageSlider() {
  const testimonials = [
    {
      name: "Chetan Pandey",
      review:
        "We have been working with Big Wig Media digital for nearly a year and their SEO + PPC combination strategy is giving us steady results. Unlike agency that over promise they deliver consistent improvements and focus on long term growth.",
      rating: 5,
      image: "",

      text: "#E57648",
    },
    {
      name: "Aparajita Pandey",
      review:
        "I liked how Big Wig media digital took time to analyse our competitors before suggesting a plan. Their local SEO services helped our restaurant rank higher on Google maps, which brought in a lot of walk in customers. Truly a result oriented team.",
      rating: 5,
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjV9LGaNpHLRB9zgIuu3-FQAitUeRxKhF-XS986Ll8-SphirLA7CrA=w90-h90-p-rp-mo-br100",

      text: "#4AA8F0",
    },
    {
      name: "ESHAAN AGGARWAL",
      review:
        "What I loved most is that they didn’t offer me a one-size-fits-all plan. The strategy they created was tailor-made for my startup’s goals, and it worked beautifully.",
      rating: 5,
      image: "",

      text: "#7A5AF8",
    },
    {
      name: "Amit Paal Siingh",
      review:
        "As a business based in Australia I was sceptical engaging with an overseas business but the team at Bigwig was amazing. I got great results at a very affordable pricing structure compared to what I was getting here in Australia. Highly recommended.",
      rating: 5,
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjVxYdkNjf2_Uda0TFgK4Mt9fA3uftsVT9eAb6YTljLckk_immAXJw=w90-h90-p-rp-mo-ba2-br100",

      text: "#00B8A9",
    },
    {
      name: "Piyush Paswan",
      review:
        "I was struggling with content marketing for my online business. BigWig not only created a content strategy for me but also executed it so well that our engagement grew by 60%. Love their approach!",
      rating: 5,
      image: "",

      text: "#E57648",
    },
    {
      name: "Chanchal Sikha",
      review:
        "I own a fashion label and wanted help with Instagram growth. BigWig’s team helped us create a reel strategy that went viral twice in one month. Super impressed!",
      rating: 5,
      image: "",

      text: "#4AA8F0",
    },
    {
      name: "Manjot Singh",
      review:
        "They are creative, professional, and most importantly, results-driven. We hired BigWig for PPC and got more leads in the first month than we did in three months with our previous agency.",
      rating: 5,
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjWocBrIQukTEUH6FyQY-OHikb2HnSX5lb2cg68rB_OW1zUapt_IXw=w90-h90-p-rp-mo-br100",

      text: "#7A5AF8",
    },
    {
      name: "Kashvi Chhabra",
      review:
        "Shoutout to the BigWig team for redesigning our outdated website and improving our page speed. It not only looks better now but also performs better in search engines.",
      rating: 5,
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjVZZS5xpnWcD6qeivGWgPcOxB9vmVoBiGuvRREcL8JdNDsNZNG1AQ=w90-h90-p-rp-mo-br100",

      text: "#00B8A9",
    },
  ];

  return (
    <section className="relative py-12 bg-[var(--color1)] text-white">
      <div className="w-11/12 md:w-5/6 mx-auto ">
        <p className="text-[var(--color5)] text-lg font-semibold border-b w-fit mb-3 uppercase tracking-widest">
          Testimonials
        </p>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight text-[var(--color4)] drop-shadow-lg">
          What Our Clients Say About Us
        </h1>

        <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8 mt-5">
          {/* Slider */}
          <div className=" w-full relative overflow-hidden">
            <CustomPrev />
            <CustomNext />

            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              autoplay={{ delay: 2500 }}
              navigation={{
                prevEl: ".swiper-button-prev-custom",
                nextEl: ".swiper-button-next-custom",
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <TestimonialCard item={item} index={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

const TestimonialCard = ({
  item,
  index,
}: {
  item: Testimonial;
  index: number;
}) => {
  const [showFull, setShowFull] = useState(false);
  const truncateLength = 150;

  const isTruncated = item.review.length > truncateLength;
  const displayedText = showFull
    ? item.review
    : item.review.slice(0, truncateLength);

  return (
    <div className="p-2">
      <div className="relative bg-[var(--color1)] shadow-xl rounded-2xl  border border-gray-200 overflow-visible mt-6">
        {/* ---- Top Right Avatar ---- */}

        <div
          className={`absolute -top-6 right-4 w-14 h-14 rounded-full border-4  bg-white shadow-lg flex items-center justify-center overflow-hidden`}
          style={{ borderColor: item.text }}
        >
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <span className={` font-bold text-lg`} style={{ color: item.text }}>
              {item.name.charAt(0).toUpperCase()}
            </span>
          )}
        </div>

        {/* ---- Name ---- */}
        <p
          className="text-white w-[60%] py-2 px-5 font-bold text-base mt-5 relative"
          style={{
            backgroundColor: item.text,
            clipPath: "polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)",
          }}
        >
          {item.name}
        </p>
        <div className="p-5">
          {/* ---- Review ---- */}
          <p className="text-gray-200 text-base leading-relaxed mt-2">
            {displayedText}
            {!showFull && isTruncated && "..."}
          </p>

          {/* ---- Read More ---- */}
          {isTruncated && (
            <button
              className="text-blue-500 text-xs mt-1 font-semibold hover:underline"
              onClick={() => setShowFull(!showFull)}
            >
              {showFull ? "Show Less" : "Read More"}
            </button>
          )}
        </div>

        {/* ---- Bottom Ribbon (color bar) ---- */}
        <div className="">
          <div
            style={{ backgroundColor: item.text }}
            className={` text-white px-4 py-2 mt-6 flex items-center gap-1 rounded-bl-xl rounded-tr-4xl w-[60%]`}
          >
            {/* Stars */}
            <div className="flex gap-1">
              {Array.from({ length: item.rating }).map((_, i) => (
                <Star key={i} size={18} fill="white" stroke="none" />
              ))}
            </div>
          </div>

          {/* ---- QUOTE ICON OUTSIDE on Right ---- */}
          <FaQuoteRight
            color={`${item.text}`}
            className={`absolute bottom-3 right-8 text-2xl opacity-80`}
          />
        </div>
      </div>
    </div>
  );
};

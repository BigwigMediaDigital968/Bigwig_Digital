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
        "We have been working with Bigwig Media Digital for nearly a year, and their SEO + PPC strategy is delivering consistent growth. Their performance marketing approach truly sets them apart as a reliable digital marketing agency in Delhi.",
      rating: 5,
      image: "",

      text: "#E57648",
    },
    {
      name: "Aparajita Pandey",
      review:
        "What impressed me most was their in-depth competitor research before creating a strategy. Their local SEO services helped our restaurant rank higher on Google. If you’re looking for an experienced SEO company in Delhi, they’re highly recommended.",
      rating: 5,
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjV9LGaNpHLRB9zgIuu3-FQAitUeRxKhF-XS986Ll8-SphirLA7CrA=w90-h90-p-rp-mo-br100",

      text: "#4AA8F0",
    },
    {
      name: "Eshaan Aggarwal",
      review:
        "They didn’t offer a generic plan. The strategy was completely customized for my startup’s growth goals. It’s rare to find the best digital marketing agency in Delhi that focuses this deeply on performance and scalability.",
      rating: 5,
      image: "",

      text: "#7A5AF8",
    },
    {
      name: "Amit Paal Siingh",
      review:
        "As a business owner based in Australia, I was initially hesitant to work with an overseas agency. But Bigwig Media Digital exceeded expectations with professional communication, affordable pricing, and outstanding digital marketing results.",
      rating: 5,
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjVxYdkNjf2_Uda0TFgK4Mt9fA3uftsVT9eAb6YTljLckk_immAXJw=w90-h90-p-rp-mo-ba2-br100",

      text: "#00B8A9",
    },
    {
      name: "Piyush Paswan",
      review:
        "I was struggling with content marketing for my online business. Their team built and executed a strong content strategy that increased engagement by 60%. A dependable digital marketing agency in Delhi for real growth.",
      rating: 5,
      image: "",

      text: "#E57648",
    },
    {
      name: "Chanchal Sikha",
      review:
        "I own a fashion label and needed help with Instagram growth. Their social media marketing team created a reel strategy that went viral twice in one month. Truly a results-driven social media marketing agency in Delhi.",
      rating: 5,
      image: "",

      text: "#4AA8F0",
    },
    {
      name: "Manjot Singh",
      review:
        "Creative, professional, and performance-focused. We hired them as our performance marketing agency and generated more leads in one month than we had in three months with our previous agency.",
      rating: 5,
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjWocBrIQukTEUH6FyQY-OHikb2HnSX5lb2cg68rB_OW1zUapt_IXw=w90-h90-p-rp-mo-br100",

      text: "#7A5AF8",
    },
    {
      name: "Kashvi Chhabra",
      review:
        "They redesigned our outdated website and significantly improved page speed and SEO structure. If you're searching for a website development company in Delhi that understands both design and search engine optimization, Bigwig is a great choice.",
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
        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white drop-shadow-lg">
          What Our Clients Say About the Best Digital Marketing Agency in Delhi
        </h2>

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

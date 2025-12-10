"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Testimonial {
  name: string;
  review: string;
  rating: number;
  image: string;
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
    },
    {
      name: "Aparajita Pandey",
      review:
        "I liked how Big Wig media digital took time to analyse our competitors before suggesting a plan. Their local SEO services helped our restaurant rank higher on Google maps, which brought in a lot of walk in customers. Truly a result oriented team.",
      rating: 5,
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjV9LGaNpHLRB9zgIuu3-FQAitUeRxKhF-XS986Ll8-SphirLA7CrA=w90-h90-p-rp-mo-br100",
    },
    {
      name: "ESHAAN AGGARWAL",
      review:
        "What I loved most is that they didn’t offer me a one-size-fits-all plan. The strategy they created was tailor-made for my startup’s goals, and it worked beautifully.",
      rating: 5,
      image: "",
    },
    {
      name: "Amit Paal Siingh",
      review:
        "As a business based in Australia I was sceptical engaging with an overseas business but the team at Bigwig was amazing. I got great results at a very affordable pricing structure compared to what I was getting here in Australia. Highly recommended.",
      rating: 5,
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjVxYdkNjf2_Uda0TFgK4Mt9fA3uftsVT9eAb6YTljLckk_immAXJw=w90-h90-p-rp-mo-ba2-br100",
    },
    {
      name: "Piyush Paswan",
      review:
        "I was struggling with content marketing for my online business. BigWig not only created a content strategy for me but also executed it so well that our engagement grew by 60%. Love their approach!",
      rating: 5,
      image: "",
    },
    {
      name: "Chanchal Sikha",
      review:
        "I own a fashion label and wanted help with Instagram growth. BigWig’s team helped us create a reel strategy that went viral twice in one month. Super impressed!",
      rating: 5,
      image: "",
    },
    {
      name: "Manjot Singh",
      review:
        "They are creative, professional, and most importantly, results-driven. We hired BigWig for PPC and got more leads in the first month than we did in three months with our previous agency.",
      rating: 5,
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjWocBrIQukTEUH6FyQY-OHikb2HnSX5lb2cg68rB_OW1zUapt_IXw=w90-h90-p-rp-mo-br100",
    },
    {
      name: "Kashvi Chhabra",
      review:
        "Shoutout to the BigWig team for redesigning our outdated website and improving our page speed. It not only looks better now but also performs better in search engines.",
      rating: 5,
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjVZZS5xpnWcD6qeivGWgPcOxB9vmVoBiGuvRREcL8JdNDsNZNG1AQ=w90-h90-p-rp-mo-br100",
    },
  ];

  return (
    <div className="w-11/12 md:w-5/6 mx-auto mb-10 py-8 relative">
      <h1 className="md:block hidden text-4xl md:text-5xl mb-10 text-center font-bold">
        What Our Clients Say About Us
      </h1>

      <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8 mt-5">
        {/* Left Info Section */}
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-3">CLIENT TESTIMONIALS</h2>

          <div className="flex items-center gap-3 mt-2 justify-center md:justify-start">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt=""
              className="w-10 h-10"
            />
            <p className="font-bold text-lg">Rated 4.8/5</p>
          </div>

          <p className="text-gray-800 mt-4">
            Don’t just take our word for it. Here’s what our clients say.
          </p>
        </div>

        {/* Slider */}
        <div className="md:w-2/3 w-full relative overflow-hidden">
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
                <TestimonialCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <a href="/contact">
          <button className="bg-[var(--primary-color)] text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300 font-semibold text-sm md:text-base">
            Want to grow your business?
          </button>
        </a>
      </div>
    </div>
  );
}

const TestimonialCard = ({ item }: { item: Testimonial }) => {
  const [showFull, setShowFull] = useState(false);
  const truncateLength = 150;

  const isTruncated = item.review.length > truncateLength;
  const displayedText = showFull
    ? item.review
    : item.review.slice(0, truncateLength);

  return (
    <div className="p-2">
      <div
        className={`shadow-xl rounded-2xl p-6 border border-gray-700 transition-all duration-300 overflow-hidden ${
          showFull ? "h-auto" : "min-h-[260px]"
        }`}
      >
        {/* Review */}
        <p className="text-gray-800 mb-3 text-xs md:text-sm leading-relaxed">
          {displayedText}
          {!showFull && isTruncated && "..."}
        </p>

        {/* Read More */}
        {isTruncated && (
          <button
            className="text-blue-400 text-xs mt-1 font-semibold hover:underline"
            onClick={() => setShowFull(!showFull)}
          >
            {showFull ? "Show Less" : "Read More"}
          </button>
        )}

        {/* Profile */}
        <div className="flex items-center mt-4">
          <div className="w-10 h-10 rounded-full bg-[var(--primary-color)] flex items-center justify-center text-white overflow-hidden text-sm">
            {item.image ? (
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span>{item.name.charAt(0).toUpperCase()}</span>
            )}
          </div>

          <div className="ml-3">
            <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
            <div className="flex mt-1">
              {Array.from({ length: item.rating }).map((_, i) => (
                <Star key={i} size={14} fill="#d49325" stroke="none" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

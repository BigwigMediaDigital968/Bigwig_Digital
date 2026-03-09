"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import slide1 from "../Assets/hero/hero5.png";
import slide2 from "../Assets/hero/hero3.png";
import slide3 from "../Assets/hero/hero2.png";
import slide4 from "../Assets/hero/hero4.png";
import ButtonFill from "./Button";
import PopupForm from "./PopupForm";
import PopupFormC from "./PopupC";

const slides = [
  {
    image: slide1,
    title:
      "Best Digital Marketing Agency in Delhi That Builds Brands & Breaks Limits",
    subtitle:
      "We don’t just run campaigns - we engineer digital experiences that make your brand impossible to ignore. As a results-driven digital marketing agency in Delhi, Bigwig Media Digital blends creativity with performance science to turn attention into loyal customers.",
    ctaText: "Get Your Growth Plan Now",
    action: "popup1",
  },
  {
    image: slide2,
    title: "We Make Your Brand Impossible to Ignore",
    subtitle:
      "In a world of endless scrolling, we create moments that make people stop, and take action. As a top digital marketing company in Delhi, we combine bold storytelling with data-backed strategy to deliver real business outcomes.",
    ctaText: "Get a Winning Strategy",
    action: "popup2",
  },

  {
    image: slide4,
    title: "We Don’t Market Brands. We Build Digital Authority",
    subtitle:
      "Bigwig Media Digital is recognized as one of the best digital marketing agencies in Delhi because we focus on long-term brand positioning, not short-term campaigns.",
    ctaText: "Build Your Digital Authority",
    action: "popup1",
  },
  // {
  //   image: slide3,
  //   title: "This Christmas, Give Your Brand the Gift of Massive Growth",
  //   subtitle:
  //     "Unwrap exclusive Christmas benefits across SEO, Social Media, and Performance Marketing - crafted to boost visibility, drive conversions, and launch your brand into 2026 with unstoppable momentum.",
  //   ctaText: "Claim Your Christmas Growth Plan",
  //   action: "popup2",
  // },
];

export default function SliceRevealSlider() {
  const slices = 6;

  const [active, setActive] = useState(0);
  const [animateSlices, setAnimateSlices] = useState(false);
  const [showTextBlock, setShowTextBlock] = useState(false);

  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopup2Open, setIsPopup2Open] = useState(false);

  const HeadingTag = active === 0 ? "h1" : "h2";

  useEffect(() => {
    runAnimationSequence();

    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // ⭐ Dynamic animation timing (based on word count)
  const runAnimationSequence = () => {
    // Reset
    setAnimateSlices(false);
    setShowTextBlock(false);

    setTitleVisible(false);
    setSubtitleVisible(false);
    setCtaVisible(false);

    // Start image animation
    setTimeout(() => setAnimateSlices(true), 80);

    const totalSliceTime = 1500 + 300;

    // After image animation, show text
    setTimeout(() => {
      setShowTextBlock(true);

      // Title fade up
      setTimeout(() => setTitleVisible(true), 200);

      // Subtitle fade up
      setTimeout(() => setSubtitleVisible(true), 600);

      // CTA fade up
      setTimeout(() => setCtaVisible(true), 1000);
    }, totalSliceTime);
  };

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slides.length);
    runAnimationSequence();
  };

  return (
    // <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[85vh] overflow-hidden bg-black">
    //   {/** IMAGE SLICES */}
    //   {Array.from({ length: slices }).map((_, i) => (
    //     <div
    //       key={`${active}-slice-${i}`}
    //       className="absolute inset-0 w-full h-full transition-all duration-[1500ms]"
    //       style={{
    //         clipPath: `polygon(
    //           ${(100 / slices) * i}% 0%,
    //           ${(100 / slices) * (i + 1)}% 0%,
    //           ${(100 / slices) * (i + 1)}% 100%,
    //           ${(100 / slices) * i}% 100%
    //         )`,
    //         transform: animateSlices ? "translateY(0)" : "translateY(150%)",
    //         transitionDelay: `${i * 180}ms`,
    //       }}
    //     >
    //       <Image
    //         src={slides[active].image}
    //         fill
    //         className="object-cover select-none pointer-events-none"
    //         alt=""
    //       />
    //     </div>
    //   ))}

    //   {/** TEXT BLOCK */}
    //   {showTextBlock && (
    //     <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 lg:px-36 z-20">
    //       {/* Title */}
    //       {/* <h1
    //         className={`
    //     text-3xl md:text-4xl font-bold text-white max-w-3xl
    //     transition-all duration-[700ms]
    //     ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
    //   `}
    //       >
    //         {slides[active].title}
    //       </h1> */}

    //       <HeadingTag
    //         className={`text-3xl md:text-4xl font-bold text-white max-w-3xl transition-all duration-[700ms] ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
    //       >
    //         {slides[active].title}
    //       </HeadingTag>

    //       {/* Subtitle */}
    //       <p
    //         className={`
    //     text-lg md:text-xl text-white/80 mt-6 max-w-2xl
    //     transition-all duration-[700ms] delay-100
    //     ${subtitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
    //   `}
    //       >
    //         {slides[active].subtitle}
    //       </p>

    //       {/* Button */}
    //       <div
    //         className={`
    //     mt-10 w-max transition-all duration-[900ms]
    //     ${ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
    //   `}
    //       >
    //         <ButtonFill
    //           text={slides[active].ctaText}
    //           className="px-8 py-3"
    //           onClick={() => {
    //             const slide = slides[active];
    //             slide.action === "popup1"
    //               ? setIsPopupOpen(true)
    //               : setIsPopup2Open(true);
    //           }}
    //         />
    //       </div>
    //     </div>
    //   )}

    //   <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70 z-10" />

    //   <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    //   <PopupFormC
    //     isOpen={isPopup2Open}
    //     onClose={() => setIsPopup2Open(false)}
    //   />
    // </div>

    <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[85vh] overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            active === index ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          {/* IMAGE SLICES */}
          {Array.from({ length: slices }).map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 w-full h-full transition-all duration-[1500ms]"
              style={{
                clipPath: `polygon(
              ${(100 / slices) * i}% 0%,
              ${(100 / slices) * (i + 1)}% 0%,
              ${(100 / slices) * (i + 1)}% 100%,
              ${(100 / slices) * i}% 100%
            )`,
                transform:
                  active === index && animateSlices
                    ? "translateY(0)"
                    : "translateY(150%)",
                transitionDelay: `${i * 180}ms`,
              }}
            >
              <Image
                src={slide.image}
                fill
                className="object-cover"
                alt={slide.title}
              />
            </div>
          ))}

          {/* TEXT */}
          <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 lg:px-36 z-20">
            {index === 0 ? (
              <h1
                className={`text-3xl md:text-4xl font-bold text-white max-w-3xl transition-all duration-[700ms] ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              >
                {slide.title}
              </h1>
            ) : (
              <h2
                className={`text-3xl md:text-4xl font-bold text-white max-w-3xl transition-all duration-[700ms] ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              >
                {slide.title}
              </h2>
            )}

            <p
              className={`text-lg md:text-xl text-white/80 mt-6 max-w-2xl transition-all duration-[700ms] delay-100 ${subtitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} `}
            >
              {slide.subtitle}
            </p>

            <div
              className={`mt-10 w-max transition-all duration-[900ms] ${ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
              <ButtonFill
                text={slide.ctaText}
                className="px-8 py-3"
                onClick={() =>
                  slide.action === "popup1"
                    ? setIsPopupOpen(true)
                    : setIsPopup2Open(true)
                }
              />
            </div>
          </div>
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70 z-10" />
    </div>
  );
}

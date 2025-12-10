"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import slide1 from "../Assets/12983062_5109267.jpg";
import slide2 from "../Assets/52267.jpg";
import slide3 from "../Assets/53607.jpg";
import ButtonFill from "./Button";
import PopupForm from "./PopupForm";

const slides = [
  {
    image: slide1,
    title: "Creative Digital Solutions",
    subtitle: "We craft stunning experiences through design and technology",
    cta: "Get Started",
  },
  {
    image: slide2,
    title: "Where Ideas Come Alive",
    subtitle: "Transforming brands with innovation and strategy",
    cta: "Get Started",
  },
  {
    image: slide3,
    title: "Build Something Exceptional",
    subtitle: "Your story deserves powerful visuals and great execution",
    cta: "Get Started",
  },
];

export default function SliceRevealSlider() {
  const slices = 6;

  const [active, setActive] = useState(0);
  const [animateSlices, setAnimateSlices] = useState(false);

  const [showTextBlock, setShowTextBlock] = useState(false);

  const [titleWordsVisible, setTitleWordsVisible] = useState(0);
  const [subtitleWordsVisible, setSubtitleWordsVisible] = useState(0);
  const [showCTA, setShowCTA] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const titleWords = slides[active].title.split(" ");
  const subtitleWords = slides[active].subtitle.split(" ");

  useEffect(() => {
    runAnimationSequence();

    const interval = setInterval(() => {
      nextSlide();
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  const runAnimationSequence = () => {
    // Reset
    setAnimateSlices(false);
    setShowTextBlock(false);
    setTitleWordsVisible(0);
    setSubtitleWordsVisible(0);
    setShowCTA(false);

    // Start slices
    setTimeout(() => setAnimateSlices(true), 80);

    const sliceDuration = 1500;
    const extraDelay = 500;

    // Only show text block AFTER full image animation
    setTimeout(() => {
      setShowTextBlock(true);
      animateTitle();
    }, sliceDuration + extraDelay);
  };

  const animateTitle = () => {
    titleWords.forEach((_, i) => {
      setTimeout(() => {
        setTitleWordsVisible((prev) => prev + 1);
      }, i * 260);
    });

    setTimeout(() => animateSubtitle(), titleWords.length * 260 + 300);
  };

  const animateSubtitle = () => {
    subtitleWords.forEach((_, i) => {
      setTimeout(() => {
        setSubtitleWordsVisible((prev) => prev + 1);
      }, i * 220);
    });

    setTimeout(() => setShowCTA(true), subtitleWords.length * 220 + 400);
  };

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slides.length);
    runAnimationSequence();
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] lg:[100vh] overflow-hidden overflow-x-hidden bg-black">
      {/* IMAGE SLICES */}
      {Array.from({ length: slices }).map((_, i) => (
        <div
          key={`${active}-slice-${i}`}
          className="absolute inset-0 w-full h-full transition-all duration-[1500ms] will-change-transform"
          style={{
            clipPath: `polygon(
              ${(100 / slices) * i}% 0%,
              ${(100 / slices) * (i + 1)}% 0%,
              ${(100 / slices) * (i + 1)}% 100%,
              ${(100 / slices) * i}% 100%
            )`,
            transform: animateSlices ? "translateY(0)" : "translateY(150%)",
            transitionDelay: `${i * 180}ms`,
          }}
        >
          <Image
            src={slides[active].image}
            fill
            priority
            sizes="100vw"
            className="object-cover pointer-events-none select-none"
            alt=""
          />
        </div>
      ))}

      {/* TEXT BLOCK */}
      {showTextBlock && (
        <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 lg:px-36 z-20">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-3xl flex flex-wrap gap-3">
            {titleWords.map((word, i) => (
              <span
                key={i}
                className={`
                  inline-block transition-all duration-[800ms] ease-out
                  ${
                    i < titleWordsVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }
                `}
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-2xl text-white/90 mt-6 max-w-2xl flex flex-wrap gap-2">
            {subtitleWords.map((word, i) => (
              <span
                key={i}
                className={`
                  inline-block transition-all duration-[800ms] ease-out
                  ${
                    i < subtitleWordsVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3"
                  }
                `}
              >
                {word}
              </span>
            ))}
          </p>

          {/* CTA → UPDATED TO USE ButtonFill */}
          <div
            className={`
              mt-10 transition-all duration-[900ms] ease-out w-max
              ${
                showCTA
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-6 scale-75"
              }
            `}
          >
            <ButtonFill
              onClick={() => setIsPopupOpen(true)}
              text={slides[active].cta}
              className="px-8 py-3"
            />
          </div>
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70 z-10" />
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}

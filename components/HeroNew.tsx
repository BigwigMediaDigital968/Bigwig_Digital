"use client";

import React, { useState } from "react";
import Image from "next/image";
// Assuming you have your existing Button component
import ButtonFill from "./Button";
// Assuming you have your existing PopupForm component
import PopupForm from "./PopupForm";

// content for NewHero.tsx section
const heroContent = {
  // BG video path - add your video to the public folder
  videoSrc: "/videos/hero-background.mp4",
  // Fallback image path in public folder - important for mobile/slow networks
  fallbackImage: "/images/hero-fallback.jpg",
  title:
    "Best Digital Marketing Agency in Delhi That Builds Brands & Breaks Limits",
  subtitle:
    "We don’t just run campaigns - we engineer digital experiences that make your brand impossible to ignore. As a results-driven digital marketing agency in Delhi, Bigwig Media Digital blends creativity with performance science to turn attention into loyal customers.",
  ctaText: "Get Your Growth Plan Now",
};

const NewHero: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* 1. BACKGROUND VIDEO (Responsive & Failsafe) */}
      <video
        autoPlay
        loop
        muted
        playsInline // Crucial for iOS autoplay
        className="absolute inset-0 w-full h-full object-cover z-0"
        poster={heroContent.fallbackImage} // Shows while video loads or if it fails
      >
        <source src={heroContent.videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 2. DYNAMIC GRADIENT OVERLAY (Reference Color Grading) */}
      {/* Takes reference from the slice reveals gradient: from-black/60 via-black/20 to-black/70 z-10 */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/30 to-black/80"
        aria-hidden="true" // Decorative overlay
      />

      {/* 3. CENTERED CONTENT BLOCK */}
      <div className="relative z-20 container mx-auto px-6 py-24 md:py-32 lg:py-40 flex flex-col items-center justify-center text-center">
        {/* Responsive Heading (Using h1 for primary SEO) */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight max-w-4xl text-white">
          {heroContent.title}
        </h1>

        {/* Responsive Subtitle */}
        <p className="mt-8 text-md sm:text-lg md:text-xl text-white/90 max-w-4xl leading-relaxed">
          {heroContent.subtitle}
        </p>

        {/* Action Button (Centered) */}
        <div className="mt-12">
          <ButtonFill
            text={heroContent.ctaText}
            // Responsive padding, bigger on desktop
            className="px-8 py-3 md:px-10 md:py-4 text-base md:text-lg font-semibold"
            onClick={() => setIsPopupOpen(true)}
          />
        </div>
      </div>

      {/* 4. POPUP FORM COMPONENT (Matches expected interface PopupFormProps) */}
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
};

export default NewHero;

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import { Star, Heart, Target, Magnet, TrendingUp } from "lucide-react";
import rainbowImg from "../Assets/bg01.png";

type StepItem = {
  num: string;
  title: string;
  desc: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  numberPos: { left: string; top: string };
  popupPos: { left: string; top: string };
};

export default function RainbowSteps() {
  const [active, setActive] = useState(0);

  const data: StepItem[] = [
    {
      num: "01",
      title: "Brand Awareness",
      desc: "Let’s spread the word!",
      Icon: Star,
      numberPos: { left: "22%", top: "63%" },
      popupPos: { left: "-500%", top: "-100%" },
    },
    {
      num: "02",
      title: "Traffic & Engagement",
      desc: "Make your audience fall in love with your product",
      Icon: Heart,
      numberPos: { left: "33%", top: "25%" },
      popupPos: { left: "-480%", top: "-280%" },
    },
    {
      num: "03",
      title: "Advertise & Retarget",
      desc: "Chase your customers across the internet",
      Icon: Target,
      numberPos: { left: "48%", top: "18%" },
      popupPos: { left: "-180%", top: "-400%" },
    },
    {
      num: "04",
      title: "Retention",
      desc: "Keep making your customers come back to you",
      Icon: Magnet,
      numberPos: { left: "62%", top: "18%" },
      popupPos: { left: "60%", top: "-380%" },
    },
    {
      num: "05",
      title: "Consistent Business Growth",
      desc: "Get busy collecting revenue 365 days",
      Icon: TrendingUp,
      numberPos: { left: "68%", top: "63%" },
      popupPos: { left: "200%", top: "-200%" },
    },
  ];

  // 🔥 Auto Highlight Logic (Large Screens Only)
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % data.length);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 relative bg-[var(--color1)] flex flex-col">
      {/* ---------- TITLE & SUBTITLE ---------- */}
      <div className="w-11/12 md:w-5/6 mx-auto mb-12">
        <p className="text-[var(--color5)] text-lg font-semibold border-b w-fit mb-3 uppercase tracking-widest">
          How We Work
        </p>

        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[var(--color4)] drop-shadow-lg max-w-2xl">
          A Journey That Builds Brands,
          <br /> Step by Step
        </h2>
      </div>

      {/* ---------- LARGE SCREEN INTERACTIVE RAINBOW ---------- */}
      <div className="relative w-[780px] max-w-full mx-auto hidden lg:block">
        <Image src={rainbowImg} alt="Rainbow Arc" className="w-full" />

        <div className="absolute inset-0">
          {data.map((item, i) => {
            const Icon = item.Icon;
            const isActive = active === i;

            return (
              <div
                key={i}
                className="absolute select-none"
                style={item.numberPos}
              >
                {/* NUMBER */}
                <span className="font-extrabold text-4xl text-white drop-shadow-xl">
                  {item.num}
                </span>

                {/* POPUP — Always Visible but with Opacity Variation */}
                <div
                  className={`absolute flex flex-col items-center text-center min-w-[200px] transition-all duration-500
                    ${isActive ? "opacity-100 scale-100 z-10" : "opacity-30 scale-90 z-10"}
                  `}
                  style={item.popupPos}
                >
                  <Icon
                    size={38}
                    className="text-[var(--color5)] drop-shadow-lg"
                  />
                  <h4 className="font-bold text-lg mt-2 text-white">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-white">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ---------- MOBILE + TABLET GRID VERSION (Unchanged) ---------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto w-11/12 mt-10 lg:hidden">
        {data.map((item, i) => {
          const Icon = item.Icon;
          return (
            <div
              key={i}
              className="bg-[var(--color2)] border border-white/10 rounded-2xl p-6 shadow-lg hover:scale-[1.03] duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="text-3xl font-extrabold text-[var(--color5)]">
                  {item.num}
                </span>
                <Icon size={36} className="text-[var(--color5)]" />
              </div>

              <h4 className="text-xl font-bold text-white mb-1">
                {item.title}
              </h4>
              <p className="text-white/80 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

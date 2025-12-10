"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "../src/app/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const stats = [
  { value: 70, label: "Crazy\nDigital Marketers" },
  { value: 223, label: "Happy\nGlobal Clients" },
  { value: 8, label: "Beautiful\nYears of Experience" },
  { value: 6, label: "Astonishing\nIn-House AI Products" },
  { value: 5, label: "Stunning\nWorldwide Offices" },
];

const Stats: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          setAnimatedValues(stats.map(() => 0));
        } else {
          setInView(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || window.innerWidth < 768) return;

    stats.forEach((stat, index) => {
      let start = 0;
      const steps = 60;
      const increment = Math.ceil(stat.value / steps);
      const duration = 1500 / steps;

      const interval = setInterval(() => {
        start += increment;
        if (start >= stat.value) {
          start = stat.value;
          clearInterval(interval);
        }
        setAnimatedValues((prev) => {
          const updated = [...prev];
          updated[index] = start;
          return updated;
        });
      }, duration);
    });
  }, [inView]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      ref={sectionRef}
      className="relative bg-white py-16 border-t border-gray-200"
    >
      <div className="relative z-10 w-11/12 md:w-5/6 mx-auto">
        {/* Desktop View */}
        <div className="hidden md:flex justify-between text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="w-1/6 p-4 flex flex-col items-center bg-white shadow-md rounded-xl"
            >
              <h2 className="text-4xl font-extrabold text-[var(--primary-color)]">
                {animatedValues[index]}+
              </h2>
              <p className="whitespace-pre-line text-sm font-semibold uppercase text-gray-700 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden mt-4">
          <Slider {...sliderSettings}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center px-6 text-center"
              >
                <div className="bg-white shadow-lg rounded-xl p-6 w-72 mx-auto border border-gray-200">
                  <h2 className="text-3xl font-bold text-[var(--primary-color)]">
                    {stat.value}+
                  </h2>
                  <p className="mt-2 text-sm font-semibold text-gray-700 uppercase whitespace-pre-line">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Stats;

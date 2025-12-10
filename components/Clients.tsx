"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import ButtonFill from "./Button"; // your button component

const images = [
  "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1762152048/logo_npwakv.webp",
  "https://res.cloudinary.com/dcq2oziz4/image/upload/v1759493003/Granth_logo_6_kyrd5s.png",

  "https://res.cloudinary.com/dcq2oziz4/image/upload/v1759495461/Pearls_light_logo_m623gc.png",
  "https://res.cloudinary.com/dcq2oziz4/image/upload/v1759493217/logo-01-C0F3dP5k_y93g4q.svg",

  "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1763112478/DBN_logo_x7wjzx.webp",
  "https://www.homesandlandgoa.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.b166d281.png&w=640&q=75&dpl=dpl_CAHgoDqvf7txY4ReKMyGa6ZD9Ti4",
];

export default function Client() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="pt-8 pb-12 bg-[var(--color1)] text-white overflow-x-hidden">
      {/* 👇 INLINE CSS FOR ANIMATION */}
      <style jsx>{`
        @keyframes colorCycle {
          0% {
            filter: grayscale(100%);
          }
          10% {
            filter: grayscale(0%);
          }
          20% {
            filter: grayscale(100%);
          }
          100% {
            filter: grayscale(100%);
          }
        }
      `}</style>

      <div className="w-11/12 md:w-5/6 mx-auto grid md:grid-cols-2 gap-6 items-center">
        {/* Left Content */}
        <div data-aos="fade-right">
          <p className="text-[var(--color5)] text-lg font-semibold border-b w-fit mb-3 uppercase tracking-widest">
            Our Clientele
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[var(--color4)] drop-shadow-lg mb-5">
            Brands That Believe in What We Build
          </h2>
          <p className="text-gray-200 mb-6 whitespace-pre-wrap">
            Over the years, we’ve collaborated with a wide range of brands each
            with its own vision, challenges, and ambitions. Every partnership
            has strengthened our belief in creating digital experiences that
            deliver real impact. <br />
            <br />
            The logos represent the brands that have trusted us with their
            digital journey. Each one reflects the quality of our work, the
            relationships we build, and the results we consistently deliver.
          </p>

          <Link href="/clients">
            <ButtonFill text=" View All Clients" />
          </Link>
        </div>

        {/* Right Side Logo Grid */}
        <div
          className="grid grid-cols-3 place-items-center"
          data-aos="fade-left"
        >
          {images.slice(0, 6).map((img, index) => {
            const isRight = (index + 1) % 3 !== 0;
            const isBottom = index < 3;

            return (
              <div
                key={index}
                className={`
                  w-full aspect-square flex items-center justify-center 
                  ${isRight ? "border-r border-gray-300" : ""} 
                  ${isBottom ? "border-b border-gray-300" : ""}
                `}
              >
                <img
                  src={img}
                  alt=""
                  className="w-4/5 object-contain transition duration-300"
                  draggable={false}
                  style={{
                    filter: "grayscale(100%)",
                    animation: `colorCycle 6s infinite`,
                    animationDelay: `${index * 1}s`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

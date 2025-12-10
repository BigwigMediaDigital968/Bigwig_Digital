"use client";

import { useEffect, useRef } from "react";
import "../src/app/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation";

const images = [
  "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1762152048/logo_npwakv.webp",
  "https://res.cloudinary.com/dcq2oziz4/image/upload/v1759493003/Granth_logo_6_kyrd5s.png",
  "https://res.cloudinary.com/dcq2oziz4/image/upload/v1759494155/WhatsApp_Image_2025-10-03_at_17.51.27_4308166d_d3ll1m.jpg",
  "https://res.cloudinary.com/dcq2oziz4/image/upload/v1759494916/Gear_Tek_Logo-removebg-preview_j5p3wc.png",
  "https://res.cloudinary.com/dcq2oziz4/image/upload/v1759495461/Pearls_light_logo_m623gc.png",
  "https://res.cloudinary.com/dcq2oziz4/image/upload/v1759493217/logo-01-C0F3dP5k_y93g4q.svg",
  "https://res.cloudinary.com/dcq2oziz4/image/upload/v1759493348/Screenshot_2025-10-03_173836_egmouo.png",
  "https://res.cloudinary.com/dcq2oziz4/image/upload/v1759493451/Screenshot_2025-10-03_174033_n9gbp7.png",
  "https://res.cloudinary.com/dcq2oziz4/image/upload/v1759494780/Screenshot_2025-10-03_180244_utdinx.png",
  "https://www.stellarbinge.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.3fb31e53.png&w=384&q=75",
  "https://riverfront.vercel.app/assets/Logo%20for%20riverfront%20-CAIVvev0.png",
  "https://www.homesandlandgoa.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.b166d281.png&w=640&q=75",
  "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1763112478/DBN_logo_x7wjzx.webp",
  "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1763113248/logo_mhktdo.jpg",
];

const Client = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
    AOS.refresh();
  }, []);

  const chunks = Array.from({ length: Math.ceil(images.length / 12) }, (_, i) =>
    images.slice(i * 12, i * 12 + 12)
  );

  return (
    <div className="py-12 w-11/12 md:w-5/6 mx-auto">
      <h2 className="text-5xl font-bold  text-center">Our Clients</h2>

      {/* Mobile Carousel */}
      <div
        ref={scrollRef}
        className="block lg:hidden overflow-x-auto whitespace-nowrap scrollbar-hide"
      >
        <div className="flex snap-x snap-mandatory">
          {chunks.map((chunk, idx) => (
            <div
              key={idx}
              className="w-full flex-shrink-0 snap-start grid grid-cols-4 grid-rows-3 gap-3 px-1"
            >
              {chunk.map((img, i) => (
                <div
                  key={i}
                  className="aspect-square flex items-center justify-center"
                  data-aos="zoom-in"
                >
                  <img
                    src={img}
                    alt=""
                    className="w-4/5 object-contain grayscale hover:grayscale-0 transition"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-6 gap-4 place-items-center">
        {images.slice(0, 12).map((img, index) => (
          <div
            key={index}
            className="aspect-square flex items-center justify-center p-2"
            data-aos="zoom-in"
          >
            <img
              src={img}
              alt=""
              className="w-3/4 object-contain grayscale hover:grayscale-0 transition"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className=" flex justify-center">
        <a
          href="/clients"
          className="bg-[var(--primary-color)] text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300 font-semibold text-sm md:text-base"
        >
          Show More
        </a>
      </div>
    </div>
  );
};

export default Client;

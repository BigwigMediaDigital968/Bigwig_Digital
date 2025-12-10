"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import aboutImg from "../Assets/ORM.png";

export default function AboutSection() {
  const stats = [
    { value: 70, label: "Digital Experts" },
    { value: 223, label: "Global Clients" },
    { value: 8, label: "Years Experience" },
    { value: 6, label: "AI Products" },
  ];

  const [count, setCount] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  // Stats Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.value;
            const duration = 2000;
            const step = Math.ceil(end / (duration / 30));

            const counter = setInterval(() => {
              start += step;
              if (start >= end) {
                start = end;
                clearInterval(counter);
              }
              setCount((prev) => {
                const updated = [...prev];
                updated[index] = start;
                return updated;
              });
            }, 30);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 bg-[var(--color1)] text-white overflow-x-hidden"
    >
      <div className="w-11/12 md:w-5/6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <p className="text-[var(--color5)] text-lg font-semibold border-b w-fit tracking-widest">
              ABOUT US
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[var(--color4)] drop-shadow-lg">
              We Build Digital Experiences That Create Impact
            </h2>

            <p className="text-white text-lg leading-relaxed">
              Bigwig Media Digital is a 360° agency delivering SEO, SMM,
              performance marketing, websites, content, and creative solutions
              that help brands grow faster in the digital world.
            </p>

            <p className="text-white text-lg leading-relaxed">
              With 8+ years of expertise, our team blends creativity, data, and
              smart strategies to help businesses scale with measurable results.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative w-full overflow-hidden">
            <div className="relative z-20 rounded-3xl overflow-hidden w-full shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
              <Image
                src={aboutImg}
                alt="About Bigwig"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-16 w-full">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 backdrop-blur-xl bg-[var(--color2)]/40 
                     border border-[var(--color5)]/40 relative overflow-hidden shadow-lg w-full"
            >
              <h3 className="text-4xl font-extrabold text-[var(--color5)] drop-shadow-sm">
                {count[i]}+
              </h3>
              <p className="mt-2 text-sm font-semibold text-[var(--color4)] tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import VanillaTilt from "vanilla-tilt";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import strategic from "../Assets/Why BigWig  (1)/Strategic Mindset.png";
import growth from "../Assets/Why BigWig  (1)/Focused on Growth.png";
import detail from "../Assets/Why BigWig  (1)/Attention to Detail.png";
import results from "../Assets/Why BigWig  (1)/Results That Matter.png";
import expertise from "../Assets/Why BigWig  (1)/360° Digital Expertise (1).png";
import partnership from "../Assets/Why BigWig  (1)/Partnership Over Projects.png";
import ideas from "../Assets/Why BigWig  (1)/Driven by Ideas.png";
import reporting from "../Assets/Why BigWig  (1)/Clear & Honest Reporting.png";

const reasons = [
  {
    img: strategic,
    title: "Strategic Mindset",
    text: "Every move we make is backed by clear goals and smart planning.",
  },
  {
    img: growth,
    title: "Focused on Growth",
    text: "We’re driven to take your brand to the next level, step by step.",
  },
  {
    img: detail,
    title: "Attention to Detail",
    text: "From concept to execution, we focus on what truly matters.",
  },
  {
    img: results,
    title: "Results That Matter",
    text: "We care about impact, not just impressions or likes.",
  },
  {
    img: expertise,
    title: "360° Digital Expertise",
    text: "One team. All your digital needs, seamlessly connected.",
  },
  {
    img: partnership,
    title: "Partnership Over Projects",
    text: "We build long-term relationships, not quick fixes.",
  },
  {
    img: ideas,
    title: "Driven by Ideas",
    text: "Creative thinking powers every campaign we craft.",
  },
  {
    img: reporting,
    title: "Clear & Honest Reporting",
    text: "You always know what’s working — with full transparency.",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  arrows: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
};
const ParticlesScript = () => {
  useEffect(() => {
    const canvas = document.getElementById(
      "particles-canvas"
    ) as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];

    const numParticles = 70;

    class Particle {
      x: number = Math.random() * canvas.width;
      y: number = Math.random() * canvas.height;
      size: number = Math.random() * 2 + 1;
      speedX: number = (Math.random() - 0.5) * 0.7;
      speedY: number = (Math.random() - 0.5) * 0.7;

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 255, 255, 0.8)";
        ctx.shadowColor = "rgba(0, 255, 255, 1)";
        ctx.shadowBlur = 12;
        ctx.fill();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        this.draw();
      }
    }

    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => p.update());
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return null;
};

const WhyBigwig: React.FC = () => {
  const tiltRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    tiltRefs.current.forEach((card) => {
      if (card) {
        VanillaTilt.init(card, {
          max: 15,
          speed: 300,
          glare: true,
          "max-glare": 0.25,
        });
      }
    });
  }, []);

  return (
    <section className="relative py-12 overflow-hidden">
      {/* PARTICLES CANVAS */}
      <canvas id="particles-canvas" className="absolute inset-0"></canvas>

      {/* Title */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-14 text-[var(--color5)] tracking-wide drop-shadow-[0_0_12px_var(--primary-color)]">
        Why BigWig Media Digital
      </h2>

      {/* Desktop Grid */}
      <div className="hidden lg:grid w-11/12 md:w-5/6 mx-auto grid-cols-4 gap-10 relative z-10">
        {reasons.map(({ img, title, text }, i) => (
          <div
            key={title}
            ref={(el: HTMLDivElement | null) => {
              tiltRefs.current[i] = el;
            }}
            className="
              relative group p-8 rounded-2xl 
              backdrop-blur-xl bg-white/5 
              border border-white/10 shadow-xl 
              transition-all duration-500
            "
          >
            {/* Glow Border */}
            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[var(--primary-color)] transition-all duration-500"></div>

            {/* Matrix overlay */}
            <div className="absolute inset-0 opacity-[0.20] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764572461/v882-aew-59-b_v38ets.jpg')] bg-cover bg-center mix-blend-screen pointer-events-none"></div>

            <div className="relative z-10">
              <Image
                src={img}
                alt={title}
                className="mx-auto mb-6 w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-lg font-bold text-[var(--color5)] mb-3 tracking-wide">
                {title}
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed">{text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="lg:hidden w-full max-w-sm mx-auto relative z-10">
        <Slider {...sliderSettings}>
          {reasons.map(({ img, title, text }, i) => (
            <div key={title} className="px-2">
              <div
                ref={(el: HTMLDivElement | null) => {
                  tiltRefs.current[i] = el;
                }}
                className="
                  relative group p-8 rounded-2xl
                  backdrop-blur-xl bg-white/5 
                  border border-white/10 shadow-xl 
                "
              >
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[var(--primary-color)] transition-all duration-500"></div>
                <div className="absolute inset-0 opacity-[0.1] bg-[url('https://i.imgur.com/2JYwQ7U.gif')] bg-cover bg-center mix-blend-screen"></div>

                <div className="relative z-10">
                  <Image
                    src={img}
                    alt={title}
                    className="mx-auto mb-6 w-20 h-20 object-contain"
                  />
                  <h3 className="text-lg font-bold text-[var(--primary-color)] mb-3">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-300">{text}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <ParticlesScript />
    </section>
  );
};

export default WhyBigwig;

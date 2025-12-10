"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import step1 from "../Assets/our process/Let's Talk.png";
import step2 from "../Assets/our process/Game Plan.png";
import step3 from "../Assets/our process/Go Live.png";
import step4 from "../Assets/our process/Refine and Scale.png";
import Image from "next/image";

const steps = [
  {
    img: step1,
    title: "Let's Talk",
    content: "We understand your goals, challenges, and vision.",
  },
  {
    img: step2,
    title: "Game Plan",
    content: "We craft a custom strategy to match your objectives.",
  },
  {
    img: step3,
    title: "Go Live",
    content: "We execute the plan and launch your project smoothly.",
  },
  {
    img: step4,
    title: "Refine & Scale",
    content: "We optimize, scale, and ensure sustainable growth.",
  },
];

const OurProcess: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const timelineProgress = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <section
      className="w-full px-4 py-16 bg-white dark:bg-black"
      ref={containerRef}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--primary-color)] mb-16">
        Our Process
      </h2>

      <div className="relative w-full md:w-4/5 mx-auto">
        {/* Outer vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 dark:bg-gray-700 transform -translate-x-1/2 z-0" />

        {/* Scroll progress bar */}
        <motion.div
          style={{ height: timelineProgress }}
          className="absolute left-1/2 top-0 w-1 bg-[var(--primary-color)] transform -translate-x-1/2 z-10"
        />

        <div className="flex flex-col gap-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 top-1 w-5 h-5 bg-[var(--primary-color)] rounded-full shadow-md transform -translate-x-1/2 z-20 border-4 border-white dark:border-zinc-900" />

              {/* Content */}
              <div
                className={`
                  w-[90%] sm:w-[70%] md:w-[48%]
                  ${
                    index % 2 === 0
                      ? "text-right mr-auto md:pr-0 pr-4 max-w-[calc(50%-1rem)]"
                      : "text-left ml-auto md:pl-0 pl-4 max-w-[calc(50%-1rem)]"
                  }
                `}
              >
                <Image
                  src={step.img}
                  alt={step.title}
                  className={`w-24 h-24 object-contain mb-3 ${
                    index % 2 === 0 ? "ml-auto" : "mr-auto"
                  }`}
                />
                <h3 className="text-xl font-bold text-[var(--primary-color)] mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {step.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;

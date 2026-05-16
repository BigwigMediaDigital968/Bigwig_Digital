"use client";

import React, { useState, useEffect } from "react";
import { ChevronRight, Star, Users, ArrowUpRight, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const PortifolioHero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#011c40] text-white font-sans selection:bg-[#4e6cba] selection:text-white overflow-x-hidden">
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-[#011c40]">
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          >
            <source src="portfolio-hero.mp4" type="video/mp4" />
          </video>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#011c40]/80 via-transparent to-[#011c40] z-10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white">
              5,000+ Digital Products Built for the <br />
              <span className="italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#ccdaff] to-[#a7ebf2]">
                World's Leading Enterprises.
              </span>
            </h1>

            <p className="text-sm md:text-lg font-medium text-gray-300 max-w-3xl mx-auto mb-10">
              Explore how BigWig Media Digital Engineers Digital Solutions that
              move Markets across 35+ Industries.
            </p>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 w-fit mx-auto
             bg-white text-[#011c40]
             px-8 py-3.5 rounded-full
             font-bold text-sm
             transition-all duration-300 ease-out
             shadow-lg hover:shadow-2xl
             hover:bg-[#a7ebf2]
             hover:scale-105 active:scale-95
             relative overflow-hidden"
            >
              {/* Animated Shine Layer */}
              <span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent 
                   translate-x-[-120%] group-hover:translate-x-[120%] 
                   transition-transform duration-700 ease-in-out"
              />

              <span className="relative z-10 flex items-center gap-2">
                Book a Portfolio Walkthrough
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>

          {/* Stats Grid - Matching the image precisely */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-20 max-w-6xl mx-auto items-end">
            {/* 2. White Stat Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 bg-white rounded-[32px] p-8 flex flex-col justify-center text-left"
            >
              <h3 className="text-4xl font-bold text-[#4e6cba] mb-1">2000+</h3>
              <p className="text-[#011c40] text-xs font-bold leading-tight">
                Digital Solutions <br />
                Launched
              </p>
            </motion.div>

            {/* 3. Rating Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="md:col-span-2 bg-[#023859]/80 backdrop-blur-md border border-white/10 rounded-[32px] p-6 flex flex-col justify-between"
            >
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-white text-white" />
                <span className="text-xl font-semibold italic text-white">
                  4.9 / 5.0
                </span>
              </div>
              <div className="mt-auto">
                <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-3">
                  Client-Verified <br />
                  Platforms
                </p>
                {/* <div className="w-10 h-10 rounded-full border-2 border-red-500 flex items-center justify-center bg-transparent">
                  <span className="text-white font-bold text-lg leading-none">
                    C
                  </span>
                </div> */}
              </div>
            </motion.div>

            {/* 1. Left Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="md:col-span-4 relative h-[280px] rounded-[40px] overflow-hidden shadow-2xl group"
            >
              <img
                src="/portfolio-hero-image-1.png"
                className="w-full h-full object-cover"
                alt="Team"
              />
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2">
                <div className="w-4 h-4 bg-[#4e6cba] rounded-full flex items-center justify-center">
                  <Users className="w-2 h-2 text-white" />
                </div>
                <span className="text-black text-[10px] font-bold uppercase tracking-wider">
                  Digital Pioneers
                </span>
              </div>
            </motion.div>

            {/* 4. Industries Bar Chart Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="md:col-span-2 bg-[#023859]/80 backdrop-blur-md border border-white/10 rounded-[32px] p-6 flex flex-col justify-between"
            >
              <div className="text-left">
                <h3 className="text-3xl font-bold text-white">35 +</h3>
                <p className="text-gray-400 text-[10px] mt-1">
                  Industries Served
                </p>
              </div>
              <div className="flex items-end justify-end gap-1.5 h-16 pt-4">
                <div className="w-2.5 bg-gray-600/50 h-[30%] rounded-full" />
                <div className="w-2.5 bg-gray-600/50 h-[50%] rounded-full" />
                <div className="w-2.5 bg-[#4e6cba] h-[80%] rounded-full" />
                <div className="w-2.5 bg-[#4e6cba] h-[100%] rounded-full" />
              </div>
            </motion.div>

            {/* 5. Faster Box */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="md:col-span-2 bg-white rounded-[32px] p-6 flex flex-col justify-between relative overflow-hidden group shadow-xl"
            >
              <div className="text-left z-10">
                <h4 className="text-[#011c40] font-bold text-xl mb-1">
                  60% Faster
                </h4>
                <p className="text-gray-500 text-[9px] font-medium uppercase leading-tight">
                  Time-to-Market Powered by AI
                </p>
              </div>
              {/* Visual Decoration Slinky */}
              <div className="absolute right-[-15px] bottom-[-15px] flex flex-col items-center">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-14 h-14 rounded-full border-[5px] border-[#023859]"
                    style={{
                      marginTop: "-40px",
                      opacity: 0.8 - i * 0.15,
                      transform: `translateX(${i * 4}px)`,
                    }}
                  />
                ))}
                <div className="absolute -left-2 top-0 w-3 h-3 bg-[#4e6cba] rounded-full animate-pulse" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortifolioHero;

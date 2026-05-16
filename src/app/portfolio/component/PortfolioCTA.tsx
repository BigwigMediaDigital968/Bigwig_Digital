"use client";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function PortfolioCTA() {
  return (
    <>
      <section className="relative py-24 px-6 overflow-hidden bg-[#011c40]">
        {/* Background Decorative Lines (similar to image 09df02) */}
        <div className="absolute inset-0 opacity-40">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-100 600C200 400 500 800 800 600C1100 400 1400 600 1600 500"
              stroke="url(#paint0_linear)"
              strokeWidth="2"
              strokeDasharray="10 10"
            />
            <path
              d="M-100 500C250 350 600 700 900 500C1200 300 1450 500 1650 450"
              stroke="url(#paint1_linear)"
              strokeWidth="1"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="0"
                y1="0"
                x2="1440"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4e6cba" />
                <stop offset="1" stopColor="#d10b0b" />
              </linearGradient>
              <linearGradient
                id="paint1_linear"
                x1="0"
                y1="0"
                x2="1440"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#54acbf" />
                <stop offset="1" stopColor="#4e6cba" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Main Glass Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-6xl mx-auto"
        >
          <div className="relative rounded-[40px] overflow-hidden p-1 bg-gradient-to-br from-white/20 to-transparent">
            <div className="bg-gradient-to-br from-[#1e4ccf]/90 via-[#4e6cba]/80 to-[#a834d9]/70 backdrop-blur-2xl rounded-[39px] py-16 px-8 md:px-16 text-center shadow-2xl border border-white/10">
              {/* Animated Swirl Overlay (simulating the purple/blue waves) */}
              <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-50 mix-blend-overlay">
                <div className="absolute -top-1/2 -right-1/4 w-[100%] h-[200%] bg-gradient-to-br from-transparent via-[#d10b0b]/30 to-transparent rotate-45 blur-3xl animate-pulse" />
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
                Every Solution We Ship Is Tied to a Business Outcome, Not a
                Deliverable!
              </h2>

              <p className="text-gray-200 text-sm md:text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                We prioritize measurable results and tangible growth over simple
                technical completions to ensure your enterprise succeeds.
              </p>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-[#011c40] px-8 py-4 rounded-full font-bold text-sm shadow-xl hover:bg-[#a7ebf2] transition-all group"
              >
                Calculate Your ROI!
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

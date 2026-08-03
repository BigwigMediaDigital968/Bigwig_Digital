import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import ButtonFill from '../../../../components/Button';
import WhatsAppCtaButton from '../../../../components/Buttons/WhatsAppCtaButton';

export default function SmoBenefitsSection({
  benefits,
  setIsPopupOpen,
  settings
}: any) {
 const scrollContainerRef = useRef<HTMLDivElement>(null);
const [activeScrollIndex, setActiveScrollIndex] = useState(0);
// Flag to prevent the scroll event from hijacking clicked button animations
const isProgrammaticScroll = useRef(false);
const timeoutRef = useRef<NodeJS.Timeout | null>(null);

const handleScroll = () => {
  // If we are currently executing a button click scroll, skip updating the active index mid-flight
  if (isProgrammaticScroll.current || !scrollContainerRef.current) return;
  
  const container = scrollContainerRef.current;
  const cardWidthWithGap = 350 + 40; // Card width + gap
  const scrolled = container.scrollLeft;
  
  const index = Math.round(scrolled / cardWidthWithGap);
  if (index !== activeScrollIndex && index >= 0 && index < benefits.length) {
    setActiveScrollIndex(index);
  }
};

const scrollToCard = (index: number) => {
  if (!scrollContainerRef.current) return;
  
  // Set the target dot instantly so the UI feels immediate and snappy
  setActiveScrollIndex(index);
  
  // Block onScroll from firing calculations mid-slide
  isProgrammaticScroll.current = true;
  
  if (timeoutRef.current) clearTimeout(timeoutRef.current);

  const container = scrollContainerRef.current;
  const cardWidthWithGap = 350 + 40;
  
  container.scrollTo({
    left: index * cardWidthWithGap,
    behavior: 'smooth'
  });

  // Release the scroll listener flag only after the smooth animation finishes (~500ms)
  timeoutRef.current = setTimeout(() => {
    isProgrammaticScroll.current = false;
  }, 600);
};

// Clean up timeouts on unmount
useEffect(() => {
  return () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };
}, []);

  return (
    <section className="py-12 w-11/12 md:w-5/6 mx-auto relative overflow-hidden">
      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-4">
          What Changes for Your Business Once SMO Actually Works
        </h2>
        <p className="text-gray-200 text-base md:text-lg leading-relaxed">
          Investing in SMO Services in Delhi can significantly transform the
          way your brand connects with its audience. With the right Social
          Media Optimization Services in Delhi, your business can tap into
          this massive audience and drive measurable results.
        </p>
      </div>

      <div className="relative mb-6 z-10">
        {/* MOBILE SLIDER */}
        <div className="block lg:hidden">
          <Slider {...settings}>
            {benefits.map((item: any, index: number) => (
              <div key={index} className="px-2">
                <div
                  className="
                    relative flex flex-col p-6 rounded-2xl
                    backdrop-blur-xl bg-white/5 border border-white/10
                    shadow-[0_0_25px_rgba(0,255,255,0.1)]
                    hover:shadow-[0_0_40px_var(--color5)]
                    space-y-5 overflow-hidden group
                    transition-all duration-500 hover:-translate-y-2
                  "
                >
                  {/* Shine Overlay */}
                  <div
                    className="
                      absolute inset-0 bg-gradient-to-br 
                      from-transparent via-white/5 to-transparent
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-500
                    "
                  />

                  {/* Shine Line */}
                  <div
                    className="
                      absolute -top-full left-0 w-full h-full
                      bg-gradient-to-r from-transparent via-[var(--color5)]/20 to-transparent
                      rotate-45 group-hover:animate-shineLine
                    "
                  />

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[var(--color5)] tracking-wide relative z-10">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed relative z-10 text-justify">
                    {item.content}
                  </p>

                  {/* Border Glow */}
                  <div
                    className="
                      absolute inset-0 rounded-2xl border border-transparent
                      group-hover:border-[var(--color5)] transition-all duration-500
                    "
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* DESKTOP VIEW: Modern Horizontal Slider */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="
            hidden lg:flex 
            w-full overflow-x-auto gap-10 pb-6 px-1 pt-6
            scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none]
            scroll-smooth snap-x snap-mandatory
          "
        >
          {benefits.map((item: any, index: number) => (
            <div
              key={index}
              className="
                snap-start shrink-0 select-none group relative overflow-hidden rounded-2xl 
                transition-transform duration-500 hover:-translate-y-3 w-[350px] min-h-[260px]
              "
            >
              <div
                className="
                  relative z-10 p-6 rounded-2xl backdrop-blur-xl bg-white/5
                  border border-white/10 shadow-[0_0_25px_rgba(0,255,255,0.15)]
                  hover:shadow-[0_0_45px_var(--color5)]
                  flex flex-col h-full space-y-5 transition-all duration-500
                "
              >
                {/* Shine Line */}
                <div
                  className="
                    absolute -top-full left-0 w-full h-full
                    bg-gradient-to-r from-transparent via-[var(--color5)]/25 to-transparent
                    rotate-45 group-hover:animate-shineLine
                  "
                />

                {/* Title */}
                <h3 className="text-xl font-semibold text-[var(--color5)] tracking-wide relative z-10">
                  {item.title}
                </h3>

                {/* Content */}
                <p className="text-gray-200 text-sm md:text-base leading-relaxed text-justify relative z-10">
                  {item.content}
                </p>

                {/* Glow Border */}
                <div
                  className="
                    absolute inset-0 rounded-2xl border border-transparent 
                    group-hover:border-[var(--color5)] transition-all duration-500
                  "
                />
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP PAGINATION DOTS */}
        <div className="hidden lg:flex justify-center items-center gap-2.5 mt-4">
          {benefits.map((_:any, index: number) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`
                h-2 rounded-full transition-all duration-300 ease-out cursor-pointer
                ${index === activeScrollIndex 
                  ? 'w-6 bg-[var(--color5)] shadow-[0_0_10px_var(--color5)]' 
                  : 'w-2 bg-white/20 hover:bg-white/40'
                }
              `}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        {/* DESKTOP PAGINATION DOTS */}


        {/* ANIMATIONS */}
        <style>{`
          @keyframes shineLine {
            0% { transform: translateY(-150%); }
            100% { transform: translateY(150%); }
          }
          .animate-shineLine {
            animation: shineLine 1.5s ease-in-out forwards;
          }
          .scrollbar-none::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-10 gap-4">
        <ButtonFill
          text="Boost Your Brand With SMO"
          onClick={() => setIsPopupOpen(true)}
        />
        <WhatsAppCtaButton text="Let's Chat On WhatsApp" message="Hi! I'm interested in your social media marketing services." />
      </div>
    </section>
  );
}
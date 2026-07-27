'use client';
import React, { SetStateAction, useRef, useState } from "react";
import { FaBehance, FaDribbble } from "react-icons/fa";


interface ShortVideo {
  id: string;
  youtubeUrl: string;
  category: "real-estate" | "e-com" | "hospitality" | "surfactant";
  tag: string;
  engagementRate: string;
}

// 1. ISOLATED COMPONENT: Preventing parent component re-renders from clearing the Iframe cache
const VideoCard = ({ video, uniqueKey }: { video: ShortVideo; uniqueKey: string }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const getEmbedId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : "";
  };

  const embedId = getEmbedId(video.youtubeUrl);

  // Safely pass commands to the YouTube Player instance without modifying src attribute strings
  const postPlayerCommand = (command: string, args: any[] = []) => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: command, args }),
        "*"
      );
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid triggering play/pause logic from global parent node clicks
    if (isMuted) {
      postPlayerCommand("unMute");
      setIsMuted(false);
    } else {
      postPlayerCommand("mute");
      setIsMuted(true);
    }
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      postPlayerCommand("pauseVideo");
      setIsPlaying(false);
    } else {
      postPlayerCommand("playVideo");
      setIsPlaying(true);
    }
  };

  return (
    <div
      onClick={togglePlayPause}
      className="flex-shrink-0 w-[250px] h-[450px] sm:w-[280px] sm:h-[480px] relative rounded-3xl overflow-hidden border border-white/[0.06] bg-[#121318] shadow-2xl group transition-all duration-300 hover:border-white/20 snap-start cursor-pointer select-none"
    >
      {/* Top Actions */}
      <div className="absolute top-4 inset-x-4 flex justify-between items-center z-20 pointer-events-none">
        <span className="px-3 py-1 rounded-full text-[9px] font-bold tracking-wider text-[#A7EBF2] bg-[#A7EBF2]/10 backdrop-blur-md uppercase border border-[#FF6624]/20">
          {video.tag}
        </span>
      </div>

      {/* Video Player Frame */}
      <div className="absolute inset-0 w-full h-full bg-black pointer-events-none">
        {embedId && (
          <iframe
            ref={iframeRef}
            className="w-full h-full object-cover scale-[1.35]"
            /* enablejsapi=1 unlocks clean background control updates via messaging protocols */
            src={`https://www.youtube.com/embed/${embedId}?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=${embedId}&controls=0&modestbranding=1&rel=0&fs=0&disablekb=1&iv_load_policy=3`}
            title={`Showcase Video Short ${uniqueKey}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        )}
      </div>

      {/* Dynamic Overlay Play/Pause Visual Feedback State indicator */}
      {!isPlaying && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/30 backdrop-blur-[2px] transition-all">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-black/60 border border-white/20 text-white shadow-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 ml-0.5">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}

      {/* Gradient Mask Overlay Layer */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/40 to-transparent z-10 pointer-events-none" />

      {/* Bottom Metadata Controls */}
      <div className="absolute bottom-4 inset-x-4 flex justify-end items-center z-20">


        <button
          onClick={toggleMute}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:scale-105 transition-all"
        >
          {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

// 2. MAIN CORE LAYOUT SYSTEM CONTAINER
export function WorkShowcase() {
  const videoData: ShortVideo[] = [
    { id: "v1", youtubeUrl: "https://youtube.com/shorts/yaztIoqQBIQ?si=AojQylktGx3imV76", category: "real-estate", tag: "SHORT FORM", engagementRate: "8.1% ER" },
    { id: "v2", youtubeUrl: "https://youtube.com/shorts/QFgVucsmwZc?si=3tN0m5ePdpZVm6oF", category: "real-estate", tag: "SHORT FORM", engagementRate: "9.4% ER" },
    { id: "v3", youtubeUrl: "https://youtube.com/shorts/5DH_DZPu_hQ?si=cF90wEWKcpVEGFkq", category: "real-estate", tag: "SHORT FORM", engagementRate: "7.8% ER" },
    { id: "v4", youtubeUrl: "https://youtube.com/shorts/uFfroKOBgqQ?si=M5F0mN88ajwrJ_4E", category: "e-com", tag: "SHORT FORM", engagementRate: "8.9% ER" },
    { id: "v5", youtubeUrl: "https://youtube.com/shorts/8HCAZo8UPR0?si=JuobyNjV9fbqChX1", category: "e-com", tag: "SHORT FORM", engagementRate: "11.2% ER" },
    { id: "v6", youtubeUrl: "https://youtube.com/shorts/EvZxnt5KueE?si=GYNk4F7jFC0px41q", category: "surfactant", tag: "SHORT FORM", engagementRate: "8.5% ER" },
    { id: "v7", youtubeUrl: "https://youtube.com/shorts/h8CuH_cPxe4?si=anEQOX_cN_OUBLL0", category: "hospitality", tag: "SHORT FORM", engagementRate: "8.1% ER" },
    { id: "v8", youtubeUrl: "https://youtube.com/shorts/pDzhy3bbI3c?si=ix4pDJ4VVh21DTrY", category: "e-com", tag: "SHORT FORM", engagementRate: "9.4% ER" },
    { id: "v9", youtubeUrl: "https://youtube.com/shorts/WXExQmMbelU?si=5uGGDbMItm9mSv2n", category: "hospitality", tag: "SHORT FORM", engagementRate: "7.8% ER" },
    { id: "v10", youtubeUrl: "https://youtube.com/shorts/mCGBMp09qcY?si=x1hY7wUHNsZyhYhs", category: "surfactant", tag: "SHORT FORM", engagementRate: "8.9% ER" },
    { id: "v11", youtubeUrl: "https://youtube.com/shorts/erS626ZxhiM?si=mOtxmGIC_Sgfiubd", category: "hospitality", tag: "SHORT FORM", engagementRate: "11.2% ER" },
    { id: "v12", youtubeUrl: "https://youtube.com/shorts/mCGBMp09qcY?si=x1hY7wUHNsZyhYhs", category: "surfactant", tag: "SHORT FORM", engagementRate: "8.5% ER" },
  ];

  const [activeFilter, setActiveFilter] = useState<string>("all");

  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const filteredVideos = videoData.filter(
    (video) => activeFilter === "all" || video.category === activeFilter
  );

  const useSecondRow = filteredVideos.length > 5;

  const carouselRow1 = useSecondRow
    ? filteredVideos.slice(0, Math.ceil(filteredVideos.length / 2))
    : filteredVideos;

  const carouselRow2 = useSecondRow
    ? filteredVideos.slice(Math.ceil(filteredVideos.length / 2))
    : [];
  const scroll = (ref: React.RefObject<HTMLDivElement | null>, direction: "left" | "right") => {
    if (ref.current) {
      const scrollAmount = 310; // Match up perfectly: item layout width boundary configurations
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-10 w-full text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="w-full mx-auto flex flex-col items-center">
        {/* Navigation Filter Component */}
        <div className="w-full flex justify-between mb-10">
          <div>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#A7EBF2]/20 bg-[#A7EBF2]/5 text-[#A7EBF2] text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Proven Results
            </span>

            <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-5">
              Real Campaigns. <br />

              <span className="text-[#A7EBF2]"> Real Growth.</span>
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl">
              Explore how we've helped brands across industries increase reach,
              engagement, leads, and revenue through data-driven social media
            </p>
          </div>
          <div className="flex items-end">
            <div className="inline-flex p-1.5 rounded-full bg-[#131419] border border-white/[0.05] shadow-2xl overflow-x-auto scrollbar-none">
              {[
                { id: "all", label: "ALL CAMPAIGNS" },
                { id: "real-estate", label: "REAL ESTATE" },
                { id: "e-com", label: "E-COM" },
                { id: "hospitality", label: "HOSPITALITY" },
                { id: "surfactant", label: "SURFACTANT" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-[11px] cursor-pointer font-bold tracking-wider whitespace-nowrap transition-all duration-300 ${activeFilter === tab.id
                    ? "bg-[#A7EBF2] text-black shadow-[#A7EBF2]/20"
                    : "text-gray-400 hover:text-white"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Global Dual Row Container Layout Slider System */}
        <div className="flex flex-col gap-10 w-full max-w-[1400px]">

          {/* Row 1 Slider */}
          {carouselRow1.length > 0 && (
            <div className="w-full relative group px-6">
              <button onClick={() => scroll(row1Ref, "left")} className="absolute left-10 top-1/2 -translate-y-1/2 z-30 w-11 h-11 hidden md:flex items-center justify-center rounded-full bg-black/60 border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all shadow-xl backdrop-blur-sm hover:scale-105">
                ←
              </button>
              <button onClick={() => scroll(row1Ref, "right")} className="absolute right-10 top-1/2 -translate-y-1/2 z-30 w-11 h-11 hidden md:flex items-center justify-center rounded-full bg-black/60 border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all shadow-xl backdrop-blur-sm hover:scale-105">
                →
              </button>

              <div
                ref={row1Ref}
                className="flex gap-6 w-full overflow-x-auto snap-x snap-mandatory scrollbar-none py-2 scroll-smooth"
              >
                {carouselRow1.map((video, idx) => (
                  <VideoCard key={`row1-${video.id}-${idx}`} uniqueKey={`row1-${idx}`} video={video} />
                ))}
              </div>
            </div>
          )}

          {/* Row 2 Slider */}
          {carouselRow2.length > 0 && (
            <div className="w-full relative group px-6">
              <button onClick={() => scroll(row2Ref, "left")} className="absolute left-10 top-1/2 -translate-y-1/2 z-30 w-11 h-11 hidden md:flex items-center justify-center rounded-full bg-black/60 border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all shadow-xl backdrop-blur-sm hover:scale-105">
                ←
              </button>
              <button onClick={() => scroll(row2Ref, "right")} className="absolute right-10 top-1/2 -translate-y-1/2 z-30 w-11 h-11 hidden md:flex items-center justify-center rounded-full bg-black/60 border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all shadow-xl backdrop-blur-sm hover:scale-105">
                →
              </button>

              <div
                ref={row2Ref}
                className="flex gap-6 w-full overflow-x-auto snap-x snap-mandatory scrollbar-none py-2 scroll-smooth"
              >
                {carouselRow2.map((video, idx) => (
                  <VideoCard key={`row2-${video.id}-${idx}`} uniqueKey={`row2-${idx}`} video={video} />
                ))}
              </div>
            </div>
          )}

        </div>
        <div className="mt-16 w-full max-w-[1100px] px-6 text-center">
          <p className="text-white text-base font-bold tracking-widest uppercase mb-6">
            See More of Our Work
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            
            {/* Behance Link Button */}
            <a 
              href="https://www.behance.net/your-profile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-between sm:justify-start gap-4 w-full sm:w-auto min-w-[240px] bg-[#111217] hover:bg-[#16171e] border border-white/[0.05] hover:border-white/20 px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center gap-4">
                {/* Behance Brand SVG Icon */}
                <FaBehance className="w-8 h-8 text-white fill-current"/>
                
                <div className="text-left">
                  <div className="text-sm font-bold text-white tracking-wide">More on Behance</div>
                </div>
              </div>
              <span className="text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all ml-auto sm:ml-4">→</span>
            </a>

            {/* Dribbble Link Button */}
            <a 
              href="https://dribbble.com/your-profile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-between sm:justify-start gap-4 w-full sm:w-auto min-w-[240px] bg-[#111217] hover:bg-[#16171e] border border-white/[0.05] hover:border-white/20 px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center gap-4">
                {/* Dribbble Brand SVG Icon */}
                <FaDribbble className="w-8 h-8 text-[#EA4C89] fill-current" />
               
                <div className="text-left">
                  <div className="text-sm font-bold text-white tracking-wide">More on Dribbble</div>
                </div>
              </div>
              <span className="text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all ml-auto sm:ml-4">→</span>
            </a>

          </div>
        </div>
        {/* --- END CALL TO ACTION SECTION --- */}
      </div>

      <style jsx global>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
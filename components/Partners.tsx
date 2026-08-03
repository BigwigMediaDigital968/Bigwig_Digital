// import React from "react";
// import award1 from "../Assets/partner/Google-Partner-Logo-Vector.svg-.png";
// import award2 from "../Assets/partner/Met-Business-Partners.png";
// import award3 from "../Assets/partner/bing-ads.png";
// import award4 from "../Assets/partner/hubspot.png";
// import award5 from "../Assets/partner/wordpress.jpg";
// import award6 from "../Assets/partner/tiktok-partners (1).png";
// import award7 from "../Assets/partner/Shopify_Partner.png";
// import award8 from "../Assets/partner/microsoft.png";
// import Image from "next/image";
// // Add more awards as needed

// const awards = [
//   {
//     title: "Top Digital Marketing Agency 2024",
//     image: award1,
//   },
//   {
//     title: "Google Premier Partner",
//     image: award2,
//   },
//   {
//     title: "Best SEO Company",
//     image: award3,
//   },
//   {
//     title: "Top Digital Marketing Agency 2024",
//     image: award4,
//   },

//   // {
//   //   title: "Best SEO Company",
//   //   image: award5,
//   // },
//   {
//     title: "Top Digital Marketing Agency 2024",
//     image: award6,
//   },
//   // {
//   //   title: "Google Premier Partner",
//   //   image: award7,
//   // },
//   {
//     title: "Microsoft Partner",
//     image: award8,
//   },

//   // Add more awards here if needed
// ];

// const Partners: React.FC = () => {
//   return (
//     <section className="bg-[#011c40] text-[#a7ebf2] py-4">
//       <div className="w-11/12 md:w-5/6 mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-16">
//         {/* Left: Title */}
//         <div className="text-center md:text-left">
//           <h2 className="text-xl ">PARTNERSHIPS</h2>
//         </div>

//         {/* Right: Awards as images */}
//         <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-20">
//           {awards.map((award, index) => (
//             <Image
//               key={index}
//               src={award.image}
//               alt={award.title}
//               title={award.title}
//               className="w-12 h-10 md:w-20 md:h-16 object-contain hover:scale-105 transition invert"
//               draggable="false"
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Partners;

"use client";

import Image from "next/image";
import { JSX, useEffect, useRef } from "react";
import award1 from "../Assets/partner/Google-Partner-Logo-Vector.svg-.png";

const logos = [
  { name: "Google Partner", component: GoogleLogo },
  { name: "HubSpot", component: HubSpotLogo },
  { name: "Meta Business Partner", component: MetaLogo },
  { name: "Microsoft Partner", component: MicrosoftLogo },
  { name: "Shopify", component: ShopifyLogo },
  { name: "Bing Ads", component: BingLogo },
  { name: "WordPress", component: WordPressLogo },
  { name: "TikTok", component: TikTokLogo },
    { name: "Next.js", component: NextJsLogo },
  { name: "React", component: ReactLogo },
  { name: "Node.js", component: NodeJsLogo },
  { name: "Firebase", component: FirebaseLogo },
  // { name: "Twilio", component: TwilioLogo }
];

// — Logo components —

function GoogleLogo() {
  return (
    <>
    {/* <svg
      viewBox="0 0 130 40"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 md:h-10 w-auto"
    >
      <rect x="0" y="4" width="2" height="32" fill="rgba(255,255,255,0.25)" />
      <text
        x="10"
        y="14"
        fontFamily="Arial,sans-serif"
        fontSize="8"
        fill="rgba(255,255,255,0.5)"
      >
        Google
      </text>
      <text
        x="10"
        y="26"
        fontFamily="Arial,sans-serif"
        fontSize="11"
        fill="white"
        fontWeight="700"
      >
        Partner
      </text>
      <g transform="translate(78,4)">
        <circle cx="10" cy="10" r="10" fill="#4285F4" />
        <circle cx="10" cy="10" r="6" fill="#fff" />
        <circle cx="10" cy="10" r="3.5" fill="#4285F4" />
        <rect x="13" y="9" width="8" height="2" fill="#4285F4" />
        <circle
          cx="10"
          cy="10"
          r="10"
          fill="none"
          stroke="#EA4335"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          transform="rotate(-30 10 10)"
        />
      </g>
    </svg> */}
    <Image
              src={award1}
              alt={"Google Partner"}
              title={"Google Partner"}
              className="w-12 h-10 md:w-20 md:h-16 object-contain hover:scale-105 transition"
              draggable="false"
            />
    </>
  );
}

// function GoogleLogo() {
//   return (
//     <svg viewBox="0 0 140 40" xmlns="http://www.w3.org/2000/svg" className="h-8 md:h-10 w-auto">
//       {/* Structural Divider */}
//       <rect x="0" y="6" width="2" height="28" rx="1" fill="rgba(255,255,255,0.15)" />
      
//       {/* Typography Block */}
//       <g transform="translate(12, 0)">
//         <text x="0" y="16" fontFamily="Arial, sans-serif" fontSize="9" fill="rgba(255,255,255,0.45)" fontWeight="500" letterSpacing="0.03em">
//           Google
//         </text>
//         <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="13" fill="white" fontWeight="700" letterSpacing="0.01em">
//           Partner
//         </text>
//       </g>
      
//       {/* Official Google 'G' Icon */}
//       <g transform="translate(90, 6) scale(1.1)">
//         {/* Red Arc */}
//         <path
//           d="M23.5 14.3c0-1-.1-1.7-.3-2.4H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7v3.1h3.9c2.3-2.1 3.5-5.2 3.5-8.9z"
//           fill="#4285F4"
//         />
//         {/* Blue Segment */}
//         <path
//           d="M12 26c3.8 0 7-1.3 9.3-3.4l-3.9-3.1c-1.1.7-2.5 1.2-5.4 1.2-4.1 0-7.6-2.8-8.9-6.6H.9v3.2C3.3 22 7.4 26 12 26z"
//           fill="#34A853"
//         />
//         {/* Green Arc */}
//         <path
//           d="M3.1 14.1c-.3-.9-.5-2-.5-3.1s.2-2.1.5-3.1V4.7H.9C0 6.5 0 8.5 0 11s0 4.5.9 6.3l2.2-3.2z"
//           fill="#FBBC05"
//         />
//         {/* Yellow Segment */}
//         <path
//           d="M12 4.8c2.1 0 3.9.7 5.4 2.1l4-4C18.9 1.1 15.7 0 12 0 7.4 0 3.3 4 1 8.8l3.1 3.1c1.3-3.8 4.8-7.1 7.9-7.1z"
//           fill="#EA4335"
//         />
//       </g>
//     </svg>
//   );
// }

function HubSpotLogo() {
  return (
    <svg
      viewBox="0 0 140 40"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 md:h-10 w-auto"
    >
      <g transform="translate(0,4)">
        <circle cx="16" cy="14" r="6" fill="#FF7A59" />
        <line
          x1="16"
          y1="8"
          x2="16"
          y2="2"
          stroke="#FF7A59"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="16"
          y1="20"
          x2="16"
          y2="26"
          stroke="#FF7A59"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="10"
          y1="14"
          x2="4"
          y2="14"
          stroke="#FF7A59"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="22"
          y1="14"
          x2="28"
          y2="14"
          stroke="#FF7A59"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="16" cy="2" r="3.5" fill="#FF7A59" />
      </g>
      <text
        x="36"
        y="18"
        fontFamily="Arial,sans-serif"
        fontSize="15"
        fill="white"
        fontWeight="800"
      >
        Hub
      </text>
      <text
        x="68"
        y="18"
        fontFamily="Arial,sans-serif"
        fontSize="15"
        fill="#FF7A59"
        fontWeight="800"
      >
        Sp
      </text>
      <text
        x="88"
        y="18"
        fontFamily="Arial,sans-serif"
        fontSize="15"
        fill="white"
        fontWeight="800"
      >
        ot
      </text>
    </svg>
  );
}

function MetaLogo() {
  return (
    <svg
      viewBox="0 0 155 40"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 md:h-10 w-auto"
    >
      <defs>
        <linearGradient id="meta-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0082FB" />
          <stop offset="100%" stopColor="#0082FB" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <path
        d="M6 22 C6 16,10 10,15 10 C18 10,21 13,24 17 C27 13,30 10,33 10 C38 10,42 16,42 22
               C42 27,39 30,36 30 C33 30,30 27,27 22 C25 19,23 17,21 17 C19 17,17 19,15 22
               C13 25,11 28,8 28 C6.5 28,6 26,6 22 Z"
        fill="url(#meta-grad)"
      />
      <text
        x="52"
        y="18"
        fontFamily="Arial,sans-serif"
        fontSize="15"
        fill="white"
        fontWeight="700"
      >
        Meta
      </text>
      <text
        x="52"
        y="31"
        fontFamily="Arial,sans-serif"
        fontSize="9"
        fill="rgba(255,255,255,0.5)"
      >
        Business Partner
      </text>
    </svg>
  );
}

function MicrosoftLogo() {
  return (
    <svg
      viewBox="0 0 140 40"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 md:h-10 w-auto"
    >
      <rect x="0" y="4" width="14" height="14" fill="#F25022" />
      <rect x="16" y="4" width="14" height="14" fill="#7FBA00" />
      <rect x="0" y="20" width="14" height="14" fill="#00A4EF" />
      <rect x="16" y="20" width="14" height="14" fill="#FFB900" />
      <text
        x="40"
        y="18"
        fontFamily="Arial,sans-serif"
        fontSize="13"
        fill="white"
        fontWeight="700"
      >
        Microsoft
      </text>
      <text
        x="40"
        y="31"
        fontFamily="Arial,sans-serif"
        fontSize="10"
        fill="rgba(255,255,255,0.55)"
      >
        Partner
      </text>
    </svg>
  );
}

function ShopifyLogo() {
  return (
    <svg
      viewBox="0 0 105 40"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 md:h-10 w-auto"
    >
      <g transform="translate(0,2)">
        <path
          d="M22 8 C21 5,18 3,15 3 C14 3,13 3.5,12 4 C11 2,9 1,7 2 C5 2.5,3 5,3 9
                 C3 12,5 15,7 17 L9 36 L23 34 Z"
          fill="#96BF48"
        />
        <path
          d="M22 8 L20 8 C20 6,19 4.5,18 4 C17 5,16 7,16 8 L14 8 C14 7,15 5,16 4
                 C15 3.5,14 3,13 3 C12 3.5,11 5,11 8 L9 8 L9 36 L23 34 Z"
          fill="#5E8E3E"
        />
        <path
          d="M14 12 C14 12,12 12.5,12 14 C12 15.5,14 16,16 17 C18 18,20 19,20 21.5
                 C20 24,18 25.5,15 25.5 C13 25.5,11 24.5,10 23.5 L11 21 C12 22,13.5 23,15 23
                 C16.5 23,17 22.5,17 21.5 C17 20,15 19.5,13 18.5 C11 17.5,9 16.5,9 14
                 C9 11.5,11 10,14 10 Z"
          fill="white"
        />
      </g>
      <text
        x="36"
        y="22"
        fontFamily="Arial,sans-serif"
        fontSize="16"
        fill="white"
        fontWeight="700"
      >
        Shopify
      </text>
    </svg>
  );
}

function BingLogo() {
  return (
    <svg
      viewBox="0 0 95 40"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 md:h-10 w-auto"
    >
      <g transform="translate(0,4)">
        <rect x="2" y="4" width="7" height="24" rx="1" fill="#008373" />
        <rect x="12" y="10" width="7" height="18" rx="1" fill="#00B294" />
        <rect x="22" y="0" width="7" height="28" rx="1" fill="#0078D4" />
        <polygon points="22,28 35,14 35,28" fill="#50E6FF" />
      </g>
      <text
        x="44"
        y="20"
        fontFamily="Arial,sans-serif"
        fontSize="14"
        fill="white"
        fontWeight="700"
      >
        Bing
      </text>
      <text
        x="44"
        y="33"
        fontFamily="Arial,sans-serif"
        fontSize="11"
        fill="rgba(255,255,255,0.6)"
      >
        ads
      </text>
    </svg>
  );
}

function WordPressLogo() {
  return (
    <svg
      viewBox="0 0 120 40"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 md:h-10 w-auto"
    >
      <circle
        cx="20"
        cy="20"
        r="17"
        fill="none"
        stroke="#21759B"
        strokeWidth="2"
      />
      <circle cx="20" cy="20" r="17" fill="#21759B" fillOpacity="0.15" />
      <text
        x="20"
        y="25"
        fontFamily="Arial,sans-serif"
        fontSize="20"
        fill="#21759B"
        fontWeight="900"
        textAnchor="middle"
      >
        W
      </text>
      <text
        x="46"
        y="18"
        fontFamily="Arial,sans-serif"
        fontSize="12"
        fill="white"
        fontWeight="700"
      >
        WordPress
      </text>
      <text
        x="46"
        y="30"
        fontFamily="Arial,sans-serif"
        fontSize="9"
        fill="rgba(255,255,255,0.4)"
        letterSpacing="0.08em"
      >
        TECHNOLOGY PARTNER
      </text>
    </svg>
  );
}

function TikTokLogo() {
  return (
    <svg
      viewBox="0 0 110 40"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 md:h-10 w-auto"
    >
      <g transform="translate(2,4)">
        <path
          d="M20 0 L20 22 C20 25,18 27,15 27 C12 27,10 25,10 22 C10 19,12 17,15 17 L15 11
                 C8 11,3 16,3 22 C3 28,8 33,15 33 C22 33,27 28,27 22 L27 9 C29 11,32 12,35 12
                 L35 6 C30 6,27 3,27 0 Z"
          fill="#69C9D0"
          fillOpacity="0.7"
          transform="translate(-2,2)"
        />
        <path
          d="M20 0 L20 22 C20 25,18 27,15 27 C12 27,10 25,10 22 C10 19,12 17,15 17 L15 11
                 C8 11,3 16,3 22 C3 28,8 33,15 33 C22 33,27 28,27 22 L27 9 C29 11,32 12,35 12
                 L35 6 C30 6,27 3,27 0 Z"
          fill="#EE1D52"
          fillOpacity="0.7"
          transform="translate(2,-2)"
        />
        <path
          d="M20 0 L20 22 C20 25,18 27,15 27 C12 27,10 25,10 22 C10 19,12 17,15 17 L15 11
                 C8 11,3 16,3 22 C3 28,8 33,15 33 C22 33,27 28,27 22 L27 9 C29 11,32 12,35 12
                 L35 6 C30 6,27 3,27 0 Z"
          fill="white"
        />
      </g>
      <text
        x="50"
        y="24"
        fontFamily="Arial,sans-serif"
        fontSize="15"
        fill="white"
        fontWeight="800"
      >
        TikTok
      </text>
    </svg>
  );
}


function NextJsLogo() {
  return (
    <svg viewBox="0 0 140 40" xmlns="http://www.w3.org/2000/svg" className="h-8 md:h-10 w-auto">
      <circle cx="20" cy="20" r="16" fill="white" />
      <circle cx="20" cy="20" r="15" fill="black" />
      <path d="M28 28 L17 14 H14 V26 H16 V17 L25 28 Z" fill="white" />
      <rect x="27" y="14" width="2" height="12" fill="white" />
      <text x="52" y="24" fontFamily="Arial,sans-serif" fontSize="15" fill="white" fontWeight="800">Next.js</text>
    </svg>
  );
}

function ReactLogo() {
  return (
    <svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg" className="h-8 md:h-10 w-auto">
      <g transform="translate(18, 20)" stroke="#00d8ff" strokeWidth="1.5" fill="none">
        <ellipse rx="16" ry="6" transform="rotate(0)" />
        <ellipse rx="16" ry="6" transform="rotate(60)" />
        <ellipse rx="16" ry="6" transform="rotate(120)" />
        <circle cx="0" cy="0" r="2.5" fill="#00d8ff" />
      </g>
      <text x="44" y="24" fontFamily="Arial,sans-serif" fontSize="16" fill="white" fontWeight="800">React</text>
    </svg>
  );
}

function NodeJsLogo() {
  return (
    <svg
      viewBox="0 0 120 40"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 md:h-10 w-auto"
    >
      <path
        d="M18 6 L6 13 L6 27 L18 34 L30 27 L30 13 Z"
        fill="none"
        stroke="#6cc24a"
        strokeWidth="2"
      />
      <path
        d="M18 6 L6 13 L18 20 L30 13 Z"
        fill="#6cc24a"
        opacity="0.3"
      />
      <path d="M18 20 L18 34" stroke="#6cc24a" strokeWidth="2" />

      <text
        x="38"
        y="30"
        fontFamily="Arial, sans-serif"
        fontSize="15"
        fontWeight="700"
        fill="white"
      >
        Node.js
      </text>
    </svg>
  );
}
function FirebaseLogo() {
  return (
    <svg viewBox="0 0 115 40" xmlns="http://www.w3.org/2000/svg" className="h-8 md:h-10 w-auto">
      <g transform="translate(2, 4)">
        <path d="M4 26 L14 4 L19 14 Z" fill="#FFC107" />
        <path d="M26 26 L16 2 L4 26 Z" fill="#FF8F00" />
        <path d="M4 26 L23 26 L16 12 Z" fill="#FFCA28" />
        <path d="M16 12 L4 26 L16 26 Z" fill="#F4B400" />
      </g>
      <text x="36" y="24" fontFamily="Arial,sans-serif" fontSize="15" fill="white" fontWeight="800">Firebase</text>
    </svg>
  );
}

function TwilioLogo() {
  return (
    <svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg" className="h-8 md:h-10 w-auto">
      <circle cx="16" cy="20" r="12" fill="#F22F46" />
      <circle cx="12" cy="16" r="2" fill="white" />
      <circle cx="20" cy="16" r="2" fill="white" />
      <circle cx="12" cy="24" r="2" fill="white" />
      <circle cx="20" cy="24" r="2" fill="white" />
      <text x="36" y="24" fontFamily="Arial,sans-serif" fontSize="15" fill="white" fontWeight="800">Twilio</text>
    </svg>
  );
}

// — Main component —

function LogoItem({ Logo, name }: { Logo: () => JSX.Element; name: string }) {
  return (
    <div className="flex items-center justify-center h-14 px-10 border-l border-white/[0.08] shrink-0">
      <Logo />
    </div>
  );
}

export default function Partnership() {
  return (
    <section className="overflow-hidden bg-[#011c40] border-t border-white/[0.04]">
      {/* Header */}
      <div className="flex flex-wrap items-center gap-4 md:gap-6 px-6 md:px-28 py-8">
        
        <h2 className="text-[clamp(20px,3vw,38px)] font-bold text-slate-100 tracking-tight whitespace-nowrap capitalize">
          Technology &{" "}Platform Partnerships
          {/* <span className="text-[var(--color5)] drop-shadow-[0_0_15px_rgba(0,255,255,0.1)]">
            Platform Partnerships
          </span> */}
        </h2>
      </div>

      {/* Scrolling track */}
      <div
        className="relative py-8 border-y border-white/[0.06] backdrop-blur-xl"
        style={{ background: "rgba(15, 23, 42, 0.3)" }} // Transparent Slate-900 to keep glass vibes
      >
        {/* Ambient background glow accents */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-20 bg-[var(--color5)]/5 blur-[80px] pointer-events-none rounded-full" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-20 bg-cyan-500/5 blur-[80px] pointer-events-none rounded-full" />

        {/* Premium Edge Fades */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

        {/* Outer wrapper — animates via CSS, pauses smoothly on hover */}
        <div
          className="flex w-max cursor-default transition-all duration-300"
          style={{
            animation: "scroll-left 38s linear infinite",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.animationPlayState =
              "paused")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.animationPlayState =
              "running")
          }
        >
          {/* Set 1 */}
          <div className="flex items-center gap-4 px-2">
            {logos.map((l: any, i: number) => (
              <LogoItem key={`a-${i}`} Logo={l.component} name={l.name} />
            ))}
          </div>
          {/* Set 2 — exact duplicate for a seamless loop */}
          <div className="flex items-center gap-4 px-2">
            {logos.map((l: any, i: number) => (
              <LogoItem key={`b-${i}`} Logo={l.component} name={l.name} />
            ))}
          </div>
        </div>
      </div>

      {/* Embedded Styles */}
      <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}


// "use client";
// import { useState } from "react";
// import { PhoneCall, X, MessageCircle } from "lucide-react";

// export default function WhatsAppButton() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showTooltip, setShowTooltip] = useState(false);

//   return (
//     <div className="fixed bottom-0 right-10 flex flex-col items-end z-50">
//       {isOpen && (
//         <div className="flex items-center space-x-2 mb-2">
//           {/* Call Button */}
//           <div
//             className="relative flex items-center justify-center w-12 h-12 bg-green-500 rounded-full shadow-lg cursor-pointer "
//             onClick={() => setShowTooltip(!showTooltip)}
//           >
//             <PhoneCall className="text-white" size={24} />
//             {showTooltip && (
//               <div className="w-60 absolute bottom-full mb-2 bg-white text-black text-sm px-2 py-1 rounded shadow-md ">
//                 Contact Number: +91 83685 73451
//               </div>
//             )}
//           </div>

//           {/* WhatsApp Button */}
//           <a
//             href="https://wa.me/+918368573451"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg "
//           >
//             <MessageCircle className="text-white" size={24} />
//           </a>
//         </div>
//       )}

//       {/* Floating WhatsApp Button */}
//       <div
//         className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer mb-11 "
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? (
//           <X className="text-white" size={24} />
//         ) : (
//           <MessageCircle className="text-white" size={24} />
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { PhoneCall, X, MessageCircle } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaShareAlt,
} from "react-icons/fa";
import Image from "next/image";

export default function FloatingCTA() {
  const [shareOpen, setShareOpen] = useState(false);

  const phone = "+919685892813";

  const facebookUrl = "https://www.facebook.com/profile.php?id=61575340735142";
  const instagramUrl =
    "https://www.instagram.com/bigwig.media.digital?igsh=ODhpeTJzcDRpa25q";
  const linkedinUrl = "https://www.linkedin.com/company/bigwig-media-digital/";

  return (
    <>
      {/* ================= DESKTOP FLOATING ================= */}
      <div className="hidden md:block">
        {/* ---------- LEFT SOCIAL SHARE ---------- */}
        <div className="fixed bottom-6 left-10 z-50">
          <div className="relative flex items-center justify-center">
            {/* MAIN BUTTON */}
            <button
              onClick={() => setShareOpen(!shareOpen)}
              className="w-14 h-14 flex items-center justify-center rounded-full shadow-xl transition-all duration-300 cursor-pointer"
              style={{
                background: "linear-gradient(135deg,#173e62,#ccc)",
                color: "white",
              }}
            >
              <FaShareAlt
                size={18}
                className={`transition-transform duration-300 cursor-pointer ${
                  shareOpen ? "rotate-45" : ""
                }`}
              />
            </button>

            {/* FACEBOOK */}
            <a
              href={facebookUrl}
              target="_blank"
              className={`absolute cursor-pointer flex items-center justify-center w-11 h-11 rounded-full text-white shadow-lg transition-all duration-300
              ${
                shareOpen
                  ? "translate-x-[75px] opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
              style={{ background: "#173e62" }}
            >
              <FaFacebookF size={14} />
            </a>

            {/* INSTAGRAM */}
            <a
              href={instagramUrl}
              target="_blank"
              className={`absolute cursor-pointer flex items-center justify-center w-11 h-11 rounded-full text-[#173e62] shadow-lg transition-all duration-300
              ${
                shareOpen
                  ? "translate-x-[55px] -translate-y-[55px] opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
              style={{ background: "#fff" }}
            >
              <FaInstagram size={14} />
            </a>

            {/* LINKEDIN */}
            <a
              href={linkedinUrl}
              target="_blank"
              className={`absolute cursor-pointer flex items-center justify-center w-11 h-11 rounded-full text-white shadow-lg transition-all duration-300
              ${
                shareOpen
                  ? "-translate-y-[75px] opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
              style={{ background: "#173e62" }}
            >
              <FaLinkedinIn size={14} />
            </a>
          </div>
        </div>

        {/* ---------- FLOATING WHATSAPP BUTTON ---------- */}
        <div className="fixed bottom-20 right-6 z-50 cursor-pointer">
          <a
            href={`https://wa.me/${phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
          >
            <Image
              src="/whatsapp-icon.png"
              alt="WhatsApp"
              width={25}
              height={25}
              priority
            />
          </a>
        </div>
      </div>

      {/* ================= MOBILE STICKY CTA ================= */}

      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t shadow-lg z-50">
        <div className="flex">
          {/* CALL */}
          <a
            href={`tel:${phone}`}
            className="flex-1 flex items-center justify-center py-4 text-[#173e62] border-r-2 bg-white font-medium"
          >
            <PhoneCall size={18} className="mr-2" />
            Call Now
          </a>

          {/* WHATSAPP */}
          <a
            href={`https://wa.me/${phone}`}
            target="_blank"
            className="flex-1 flex items-center gap-2 justify-center py-4 bg-white text-[#173e62] font-medium"
          >
            {/* <MessageCircle size={18} className="mr-2" /> */}
            <Image
              src="/whatsapp-icon.png" // place logo inside public folder
              alt="WhatsApp"
              width={22}
              height={22}
              priority
            />
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}

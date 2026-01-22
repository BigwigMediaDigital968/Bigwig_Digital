"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

const clients = [
  {
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1762152048/logo_npwakv.webp",
    link: "https://khalsapropertydealers.com/",
  },
  {
    img: "https://res.cloudinary.com/dcq2oziz4/image/upload/v1759493003/Granth_logo_6_kyrd5s.png",
    link: "https://granthdreamhomes.co.in/",
  },
  {
    img: "https://res.cloudinary.com/dcq2oziz4/image/upload/v1759493217/logo-01-C0F3dP5k_y93g4q.svg",
    link: "https://www.closefriendstraders.info/",
  },

  {
    img: "https://res.cloudinary.com/dcq2oziz4/image/upload/v1759495461/Pearls_light_logo_m623gc.png",
    link: "https://pearlsindia.co.in",
  },
  {
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1764826680/bdfx_zvjbi6.gif",
    link: "https://www.billiondollarfx.com",
  },
  {
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1764826620/logo_mondus_new_4_-TMoOETTP_drjizb.gif",
    link: "https://mondus.vercel.app",
  },
  {
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1765346115/logo_2_qiiitb.webp",
    link: "https://www.stellarbinge.com",
  },
  {
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1764826183/iln_logo_1_-By-pImIc_lgxxky.png",
    link: "https://www.integratedlognet.com/",
  },
  {
    img: "https://riverfront.vercel.app/assets/Logo%20for%20riverfront%20-CAIVvev0.png",
    link: "https://riverfront.vercel.app/",
  },
  {
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1763112478/DBN_logo_x7wjzx.webp",
    link: "https://www.destinybynumberrs.com/",
  },
  {
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1763112443/logo_1_tnncgd.webp",
    link: "https://www.ethicalinfrastructures.com/",
  },
  {
    img: "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769074373/CPE_LOGO_FINAL__wb2eiw.png",
    link: "https://www.crownpointestates.com/",
  },
  {
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1764826338/logo_fz6mbq.png",
  },
  {
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1764826497/Gear_Tek_Logo-removebg-preview_j5p3wc-removebg-preview_x7urfm.png",
  },
  {
    img: "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769074730/logo-removebg-preview_ti521v.webp",
    link: "https://www.drhimanshuverma.com/",
  },
];

export default function Clients() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-[var(--color1)] text-white">
      {/* FLUID RIPPLE LIQUID UI STYLES */}
      <style jsx>{`
        .ripple-container {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 9999px;
          background: radial-gradient(
            circle at 50% 40%,
            rgba(255, 255, 255, 0.14),
            rgba(255, 255, 255, 0.03)
          );
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow:
            0 15px 35px rgba(0, 0, 0, 0.35),
            inset 0 12px 18px rgba(255, 255, 255, 0.12),
            inset 0 -12px 25px rgba(0, 0, 0, 0.28);
          overflow: hidden;
          transition:
            transform 0.4s ease,
            box-shadow 0.4s ease;
        }

        .ripple-container:hover {
          transform: scale(1.1);
          box-shadow:
            0 25px 55px rgba(0, 0, 0, 0.55),
            inset 0 18px 28px rgba(255, 255, 255, 0.18),
            inset 0 -15px 25px rgba(0, 0, 0, 0.32);
        }

        /* RIPPLE WAVES */
        .ripple-container::before,
        .ripple-container::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          z-index: 0;
          pointer-events: none;
        }

        /* First ripple */
        .ripple-container::before {
          border: 2px solid rgba(255, 255, 255, 0.1);
          animation: ripple 4s infinite ease-out;
        }

        /* Second ripple */
        .ripple-container::after {
          border: 2px solid rgba(255, 255, 255, 0.05);
          animation: ripple 6s infinite ease-out;
        }

        @keyframes ripple {
          0% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          70% {
            transform: scale(1.5);
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }

        /* LOGO INSIDE RIPPLE */
        .logo {
          position: relative;
          z-index: 2;
          width: 60%;
          height: 60%;
          transition:
            transform 0.35s ease,
            filter 0.35s ease;
          filter: grayscale(100%) brightness(0.95);
        }

        .ripple-container:hover .logo {
          transform: scale(1.15);
          filter: grayscale(0%) brightness(1.1);
        }

        /* floating effect */
        .float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .cell {
          aspect-ratio: 1 / 1;
        }
      `}</style>

      <section className="py-12 w-11/12 md:w-5/6 mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[var(--color5)] mb-10">
          OUR CLIENTS
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {clients.map((src, index) => (
            <div className="cell float" key={index} data-aos="zoom-in">
              <Link href="#">
                <div className="ripple-container flex items-center justify-center grayscale hover:grayscale-0">
                  <Image
                    src={src.img}
                    alt="Bigwig Media Digital"
                    className="logo object-contain"
                    width={160}
                    height={160}
                    draggable={false}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

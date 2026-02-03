"use client";

import { useEffect, useState, useRef } from "react";

// ✅ Import env outside the component
const API_URL = process.env.NEXT_PUBLIC_API_BASE;

interface Offer {
  _id: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaLink: string;
  image: string; // single image now
  startDate: string;
  endDate: string;
  isActive: boolean;
}

export default function OfferPopup() {
  const [offer, setOffer] = useState<Offer | null>(null);
  const [visible, setVisible] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch active offer
    const fetchOffer = async () => {
      try {
        const res = await fetch(`${API_URL}/api/offer/active`);
        const data = await res.json();
        if (
          data.success &&
          data.offer &&
          data.offer.isActive &&
          new Date(data.offer.startDate) <= new Date() &&
          new Date(data.offer.endDate) >= new Date()
        ) {
          setOffer(data.offer);

          // Show popup after 3 seconds
          setTimeout(() => {
            setVisible(true);
          }, 3000);
        }
      } catch (err) {
        console.error("Failed to fetch offer:", err);
      }
    };

    fetchOffer();
  }, []);

  // Close popup if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setVisible(false);
      }
    };

    if (visible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visible]);

  if (!offer) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        ref={popupRef}
        style={{
          backgroundColor: "var(--color1)",
          borderColor: "var(--primary-color)",
        }}
        className={`relative rounded-xl shadow-lg w-[60vw] max-w-md  overflow-hidden flex flex-col transform transition-all duration-500 ${
          visible ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setVisible(false)}
          style={{ color: "#fff" }}
          className="absolute top-3 right-2 font-bold text-3xl z-10 cursor-pointer transition-colors"
        >
          &times;
        </button>

        {/* Offer Image */}
        {offer.image && (
          <img
            src={`${API_URL}/${offer.image.replace(/\\/g, "/")}`}
            alt={offer.title}
            className="w-full h-3/4 object-contain"
            style={{ borderBottom: "4px solid var(--primary-color)" }}
          />
        )}

        <div className="p-6 text-center flex-1 flex flex-col justify-center text-white">
          <h2
            className="text-2xl font-bold mb-2"
            style={{ color: "white" }}
          >
            {offer.title}
          </h2>
          <p className="mb-4" style={{ color: "white" }}>
            {offer.subtitle}
          </p>

          <a
            href={offer.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "var(--primary-color)" }}
            className="mt-auto inline-block text-white font-semibold py-3 px-6 rounded-lg transition-colors hover:bg-var(--secondary-color)"
          >
            {offer.ctaLabel}
          </a>
        </div>
      </div>
    </div>
  );
}

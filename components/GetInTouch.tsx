"use client";
import { useState } from "react";
import ButtonFill from "./Button";
import PopupForm from "./PopupForm";

function GetInTouch() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <section className="py-12  text-center">
      <div className="w-11/12 md:w-5/6 mx-auto border-2 border-[var(--color5)] rounded-2xl py-10 px-5 bg-gradient-to-b from-[var(--color1)]) via-[var(--color2)] to-[var(--color1)]">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color4)] mb-4">
          Ready to Grow Your Business?
        </h2>

        <p className="text-gray-200 max-w-2xl mx-auto mb-8">
          Let’s build powerful digital strategies that bring real growth to your
          brand. Connect with us to get a customized plan tailored for your
          business.
        </p>
        <div className="flex justify-center">
          <ButtonFill
            text="Get Free Consultation"
            onClick={() => setIsPopupOpen(true)}
            className="px-8 py-3 text-lg font-semibold"
          />
        </div>
      </div>
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
}

export default GetInTouch;

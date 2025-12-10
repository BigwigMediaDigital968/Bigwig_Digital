"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<"form" | "otp">("form");
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [otp, setOtp] = useState("");

  // Prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  // Close popup & reset state
  const handleClose = () => {
    onClose();
    setFormData({ name: "", email: "", phone: "", message: "" });
    setOtp("");
    setStatusMessage("");
    setStep("form");
  };
  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, phone: value });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    try {
      await axios.post(
        "https://bigwigdigitalbackend.onrender.com/api/lead/send-otp",
        formData
      );
      setStatusMessage("✅ OTP sent! Please check your email.");
      setStep("otp");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        // err is AxiosError
        if (err.response?.status === 400) {
          setStatusMessage(err.response.data?.message || "Email already used.");
        } else {
          setStatusMessage("❌ Something went wrong. Try again later.");
        }
      } else {
        setStatusMessage("❌ Something went wrong. Try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    try {
      await axios.post(
        "https://bigwigdigitalbackend.onrender.com/api/lead/verify-otp",
        {
          email: formData.email,
          otp,
        }
      );
      setStatusMessage("🎉 Lead saved successfully!");
      setTimeout(handleClose, 2000);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setStatusMessage(err.response?.data?.message || "❌ Invalid OTP.");
      } else {
        setStatusMessage("❌ Invalid OTP.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4"
      onClick={handleClose}
    >
      <div
        className="bg-[var(--primary-color)] max-w-sm w-full p-6 rounded-xl shadow-2xl relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-white  text-2xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center mb-1 text-white">
          Let’s Grow Together!
        </h2>
        <p className="text-center mb-5 text-white">Request a FREE Call 🚀</p>

        {step === "form" ? (
          <form className="space-y-4" onSubmit={handleSendOtp}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] outline-none"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email ID"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] outline-none"
              required
            />
            <PhoneInput
              country={"in"} // default India
              value={formData.phone}
              onChange={handlePhoneChange}
              containerClass="w-full"
              inputClass="!w-full py-6 px-2 text-base rounded-lg border focus:ring-2 focus:ring-[var(--primary-color)]"
              buttonClass="p-2"
              dropdownClass="custom-dropdown"
              enableSearch={true}
              inputProps={{
                required: true,
                name: "phone",
              }}
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Explain your requirements (minimum 50 characters)"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] outline-none"
              rows={3}
              required
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="bg-[var(--secondary-color)] text-white w-full py-2 rounded-full font-semibold hover:opacity-80 transition"
            >
              {loading ? "Sending OTP..." : "Submit Now"}
            </button>
          </form>
        ) : (
          <form className="space-y-4" onSubmit={handleVerifyOtp}>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] outline-none"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-green-600 text-white w-full py-3 rounded-full font-semibold hover:bg-green-700 transition"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
        )}

        {statusMessage && (
          <p className="text-sm text-center mt-4 text-gray-700">
            {statusMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default PopupForm;

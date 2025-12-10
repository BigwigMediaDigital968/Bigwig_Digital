"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import ButtonFill from "./Button"; // using your existing design

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const SERVICES_LIST = [
  "SEO",
  "SMM",
  "Performance Marketing",
  "Content Marketing",
  "Website Development",
  "Email Marketing",
  "SMO",
  "Graphic & Video",
  "Affiliate Marketing",
  "Influencer Marketing",
  "ORM",
];

const PopupForm: React.FC<PopupFormProps> = ({ isOpen, onClose }) => {
  const [closing, setClosing] = useState(false);

  const [step, setStep] = useState<"form" | "otp">("form");
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [otp, setOtp] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    services: [] as string[],
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    services: "",
    message: "",
  });

  // 🔥 KEEP FORM DATA SERVICES UPDATED
  useEffect(() => {
    setFormData((prev) => ({ ...prev, services: selectedServices }));
  }, [selectedServices]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
      setClosing(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        services: [],
      });
      setSelectedServices([]);
      setOtp("");
      setStatusMessage("");
      setStep("form");
    }, 600);
  };

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // VALIDATION
  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      services: "",
      message: "",
    };

    let valid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
      valid = false;
    }

    const phoneNum = formData.phone.split(" ")[1] || "";
    if (phoneNum.length < 6 || phoneNum.length > 15) {
      newErrors.phone = "Enter a valid phone number.";
      valid = false;
    }

    if (selectedServices.length === 0) {
      newErrors.services = "Select at least one service.";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your requirements.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // SEND OTP
  const handleSendOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;
    setLoading(true);
    setStatusMessage("");

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/lead/send-otp`,
        formData
      );
      setStatusMessage("OTP sent successfully!");
      setStep("otp");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setStatusMessage(err.response?.data?.message || "Error sending OTP.");
      } else {
        setStatusMessage("Error sending OTP.");
      }
    } finally {
      setLoading(false);
    }
  };

  // VERIFY OTP
  const handleVerifyOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/lead/verify-otp`,
        { email: formData.email, otp }
      );

      setStatusMessage("Lead Saved Successfully!");
      setTimeout(handleClose, 2000);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setStatusMessage(err.response?.data?.message || "Invalid OTP.");
      } else {
        setStatusMessage("Invalid OTP.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-start p-0"
      onClick={handleClose}
    >
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[var(--color1)] overflow-y-scroll p-3 md:p-4 rounded-b-2xl shadow-xl ${
          closing ? "popup-close" : "popup-open"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <div className="w-full flex justify-center mb-4">
          <button
            onClick={handleClose}
            className="text-black bg-[var(--color4)] px-4 py-1 rounded-full text-lg font-bold shadow-sm hover:opacity-80 transition"
          >
            ✕
          </button>
        </div>

        {/* HEADER */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-[var(--color4)]">
          Let&#39;s Grow Together 🚀
        </h2>
        <p className="text-center text-gray-200 mb-6">
          Tell us what you need — we’ll connect you instantly.
        </p>

        {/* ---------------- FORM STEP ---------------- */}
        {step === "form" ? (
          <form
            onSubmit={handleSendOtp}
            className="space-y-5 w-full md:w-2/3 mx-auto text-white"
          >
            {/* NAME + EMAIL */}
            <div className="flex gap-5">
              <div className="w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                  required
                />
                {errors.name && (
                  <p className="text-red-400 text-sm">{errors.name}</p>
                )}
              </div>

              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                  required
                />
                {errors.email && (
                  <p className="text-red-400 text-sm">{errors.email}</p>
                )}
              </div>
            </div>

            {/* PHONE */}
            <div className="flex gap-3">
              <select
                className="p-3 border rounded-lg bg-[var(--color1)] text-white w-32"
                value={formData.phone.split(" ")[0] || "+91"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: `${e.target.value} ${
                      formData.phone.split(" ")[1] || ""
                    }`,
                  })
                }
              >
                <option value="+91">🇮🇳 +91</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+61">🇦🇺 +61</option>
                <option value="+64">🇳🇿 +64</option>
                <option value="+971">🇦🇪 +971</option>
                <option value="+81">🇯🇵 +81</option>
                <option value="+49">🇩🇪 +49</option>
              </select>

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border rounded-lg bg-[var(--color1)] text-white"
                value={formData.phone.split(" ")[1] || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: `${formData.phone.split(" ")[0] || "+91"} ${
                      e.target.value
                    }`,
                  })
                }
                required
              />
            </div>
            {errors.phone && (
              <p className="text-red-400 text-sm">{errors.phone}</p>
            )}

            {/* SERVICES */}
            <div>
              <p className="font-semibold mb-2">Select Services You Need:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {SERVICES_LIST.map((service) => (
                  <label
                    key={service}
                    className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(service)}
                      onChange={() => toggleService(service)}
                    />
                    <span>{service}</span>
                  </label>
                ))}
              </div>
              {errors.services && (
                <p className="text-red-400 text-sm">{errors.services}</p>
              )}
            </div>

            {/* MESSAGE */}
            <textarea
              name="message"
              placeholder="Explain your requirements"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              rows={3}
              required
            ></textarea>
            {errors.message && (
              <p className="text-red-400 text-sm">{errors.message}</p>
            )}

            {/* 🔥 BUTTONFILL — NOW WORKING PROPERLY */}
            <ButtonFill
              type="submit"
              text={loading ? "Sending OTP..." : "Submit & Send OTP"}
              className="w-full"
            />
          </form>
        ) : (
          /* ---------------- OTP STEP ---------------- */
          <form
            onSubmit={handleVerifyOtp}
            className="space-y-4 w-full md:w-1/2 mx-auto text-white"
          >
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-3 border rounded-lg"
              required
            />

            <ButtonFill
              type="submit"
              text={loading ? "Verifying..." : "Verify OTP"}
              className="w-full"
            />
          </form>
        )}

        {statusMessage && (
          <p className="text-center text-[var(--color5)] text-sm mt-4">
            {statusMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default PopupForm;

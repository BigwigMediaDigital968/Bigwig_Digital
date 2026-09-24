"use client";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import ButtonFill from "./Button"; // using your existing design
import useSubmitLead from "../hooks/useSubmitLead";
import logo from "../Assets/Bigwig_logo__final.png";

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const SERVICES_LIST = [
  "Website Development",
  "Search Engine Optimization",
  "Social Media Marketing",
  "Influencer Marketing",
  "Performance Marketing",
  "Graphic & Video",
  "Content Marketing",
  "Email Marketing",
  "SMO",
  "Affiliate Marketing",
  "ORM",
];

const PopupForm: React.FC<PopupFormProps> = ({ isOpen, onClose }) => {
  const [closing, setClosing] = useState(false);

  const [step, setStep] = useState<"form" | "otp">("form");
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { submitLead, loading: submitting } = useSubmitLead();

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
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  // Close custom dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
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
      setIsSubmitted(false);
      setStep("form");
    }, 600);
  };

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service],
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
        formData,
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
        { email: formData.email, otp },
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
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage("");

    if (!validateForm()) return;

    const result = await submitLead({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      services: formData.services,
      message: formData.message,
    });

    if (!result.ok) {
      setStatusMessage(result.message);
      return;
    }

    setIsSubmitted(true);
    setTimeout(handleClose, 5000);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex justify-center items-center p-3 md:p-6"
      onClick={handleClose}
    >
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] bg-[var(--color1)] text-white rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row ${
          closing ? "popup-close" : "popup-open"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-black bg-[var(--color4)] w-8 h-8 rounded-full text-sm font-bold flex items-center justify-center hover:opacity-80 transition cursor-pointer z-30"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* LEFT COLUMN: BRANDING & VISUAL PANEL WITH BACKGROUND IMAGE */}
        <div className="md:w-5/12 p-6 md:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 relative overflow-hidden min-h-[300px] md:min-h-full">
          {/* BACKGROUND IMAGE WITH OVERLAY */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80')`,
            }}
          />
          {/* Dark Overlay gradient for contrast & theme consistency */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color1)]/70 via-black/50 to-[var(--color1)]/70 z-0" />

          {/* LOGO AT THE TOP */}
          <div className="relative z-10">
            <img
              src={"/Bigwig_logo.png"}
              alt="Logo"
              className="h-[90px] w-auto object-contain"
            />
          </div>

          {/* LEFT PANEL CONTENT (MOVED TO THE BOTTOM) */}
          <div className="relative z-10 space-y-4 mt-auto pt-8">
            <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[var(--color4)]/20 text-[var(--color4)] border border-[var(--color4)]/30 backdrop-blur-sm inline-block">
              🚀 Ready To Scale
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color4)] leading-tight drop-shadow-md">
              Let&#39;s Grow <br /> Together.
            </h2>

            <p className="text-xs md:text-sm text-gray-200 leading-relaxed drop-shadow">
              Tell us what you need — we’ll analyze your requirements and connect with you instantly.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: FORM OR SUCCESS STATE */}
        <div className="md:w-7/12 p-6 md:p-8 overflow-y-auto max-h-[85vh] md:max-h-none flex flex-col justify-center">
          {isSubmitted ? (
            /* SUCCESS STATE SCREEN */
            <div className="flex flex-col items-center justify-center text-center space-y-4 py-8 animate-fade-in">
              {/* SUCCESS ICON */}
              <div className="w-16 h-16 rounded-full bg-[var(--color4)]/20 border border-[var(--color4)] flex items-center justify-center text-[var(--color4)] text-3xl font-bold">
                ✓
              </div>

              <h3 className="text-2xl font-bold text-white">
                Request Submitted!
              </h3>

              <p className="text-sm text-gray-300 max-w-sm leading-relaxed">
                Thank you for reaching out. Our team is reviewing your details and will get back to you shortly.
              </p>
            </div>
          ) : (
            /* FORM STATE PANEL */
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* FULL NAME */}
              <div>
                <label className="block text-xs font-semibold text-gray-200 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2.5 text-sm bg-[var(--color1)] border border-gray-600 rounded-xl focus:outline-none focus:border-[var(--color4)] text-white placeholder-gray-500 transition"
                  required
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-xs font-semibold text-gray-200 uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2.5 text-sm bg-[var(--color1)] border border-gray-600 rounded-xl focus:outline-none focus:border-[var(--color4)] text-white placeholder-gray-500 transition"
                  required
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* PHONE NUMBER WITH COUNTRY CODE */}
              <div>
                <label className="block text-xs font-semibold text-gray-200 uppercase tracking-wider mb-1">
                  Phone Number *
                </label>
                <div className="flex gap-2">
                  <select
                    className="p-2.5 text-sm border border-gray-600 rounded-xl bg-[var(--color1)] text-white w-28 cursor-pointer focus:outline-none focus:border-[var(--color4)] shrink-0"
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
                    <option value="+971">🇦🇪 +971</option>
                    <option value="+966">🇸🇦 +966</option>
                    <option value="+974">🇶🇦 +974</option>
                    <option value="+968">🇴🇲 +968</option>
                    <option value="+973">🇧🇭 +973</option>
                    <option value="+965">🇰🇼 +965</option>
                    <option value="+81">🇯🇵 +81</option>
                    <option value="+86">🇨🇳 +86</option>
                    <option value="+92">🇵🇰 +92</option>
                    <option value="+977">🇳🇵 +977</option>
                    <option value="+880">🇧🇩 +880</option>
                    <option value="+94">🇱🇰 +94</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+49">🇩🇪 +49</option>
                    <option value="+33">🇫🇷 +33</option>
                    <option value="+39">🇮🇹 +39</option>
                    <option value="+34">🇪🇸 +34</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+64">🇳🇿 +64</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+1">🇨🇦 +1</option>
                    <option value="+967">🇾🇪 +967</option>
                  </select>

                  <input
                    type="tel"
                    placeholder="98765 43210"
                    className="w-full p-2.5 text-sm border border-gray-600 rounded-xl bg-[var(--color1)] text-white focus:outline-none focus:border-[var(--color4)] placeholder-gray-500 transition"
                    value={formData.phone.split(" ")[1] || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: `${
                          formData.phone.split(" ")[0] || "+91"
                        } ${e.target.value}`,
                      })
                    }
                    required
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              {/* CUSTOM MULTI-SELECT DROPDOWN */}
              <div className="relative" ref={dropdownRef}>
                <label className="block text-xs font-semibold text-gray-200 uppercase tracking-wider mb-1">
                  Services Interested In *
                </label>

                <div
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="min-h-[42px] p-2 bg-[var(--color1)] border border-gray-600 rounded-xl flex items-center justify-between cursor-pointer focus-within:border-[var(--color4)] transition"
                >
                  <div className="flex flex-wrap gap-1.5 items-center">
                    {selectedServices.length === 0 ? (
                      <span className="text-xs text-gray-500 pl-1">
                        Choose services...
                      </span>
                    ) : (
                      selectedServices.map((service) => (
                        <span
                          key={service}
                          className="bg-[var(--color4)] text-black font-semibold text-xs px-2.5 py-0.5 rounded-md flex items-center gap-1.5"
                        >
                          {service}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleService(service);
                            }}
                            className="hover:text-white cursor-pointer"
                          >
                            ✕
                          </button>
                        </span>
                      ))
                    )}
                  </div>
                  <span className="text-gray-400 text-xs px-1">
                    {isServicesOpen ? "▲" : "▼"}
                  </span>
                </div>

                {/* DROPDOWN MENU */}
                {isServicesOpen && (
                  <div className="absolute z-50 left-0 right-0 mt-1 max-h-48 overflow-y-auto scrollbar-thin bg-[var(--color1)] border border-gray-600 rounded-xl shadow-2xl p-2 space-y-1">
                    {SERVICES_LIST.map((service) => {
                      const isSelected = selectedServices.includes(service);
                      return (
                        <div
                          key={service}
                          onClick={() => toggleService(service)}
                          className={`p-2 rounded-lg text-xs md:text-sm flex items-center justify-between cursor-pointer transition ${
                            isSelected
                              ? "bg-[var(--color4)]/20 text-[var(--color4)] font-semibold"
                              : "text-gray-200 hover:bg-white/10"
                          }`}
                        >
                          <span>{service}</span>
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => {}}
                            className="accent-[var(--color4)] cursor-pointer"
                          />
                        </div>
                      );
                    })}
                  </div>
                )}
                {errors.services && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.services}
                  </p>
                )}
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-xs font-semibold text-gray-200 uppercase tracking-wider mb-1">
                  How Can We Help? *
                </label>
                <textarea
                  name="message"
                  placeholder="Describe your requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2.5 text-sm bg-[var(--color1)] border border-gray-600 rounded-xl focus:outline-none focus:border-[var(--color4)] placeholder-gray-500 transition text-white"
                  rows={3}
                  required
                ></textarea>
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* SUBMIT BUTTON */}
              {ButtonFill ? (
                <ButtonFill
                  type="submit"
                  text={
                    loading || submitting ? "Sending..." : "Submit Proposal"
                  }
                  className="w-full"
                />
              ) : (
                <button
                  type="submit"
                  disabled={loading || submitting}
                  className="w-full py-3 bg-[var(--color4)] text-black font-bold text-sm rounded-xl hover:opacity-90 transition cursor-pointer"
                >
                  {loading || submitting ? "Sending..." : "Submit Proposal"}
                </button>
              )}
            </form>
          )}

          {/* STATUS MESSAGE */}
          {statusMessage && !isSubmitted && (
            <div className="mt-4 flex justify-center items-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                  <p className="text-white text-xs font-medium">
                    {statusMessage}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopupForm;

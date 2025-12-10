"use client";
import { useState } from "react";
import axios from "axios";
import ButtonFill from "./Button";

const SERVICES_LIST = [
  "Search Engine Optimization",
  "Social Media Marketing",
  "Performance Marketing",
  "Content Marketing",
  "Website Development",
  "Social Media Optimization",
  "Email Marketing",
  "Graphic Designing",
  "Influencer Marketing",
  "Affiliate Marketing",
  "Online Reputation Management",
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    services: [] as string[],
  });

  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"form" | "otp" | "done">("form");
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    services: "",
    message: "",
  });

  const [error, setError] = useState("");

  // HANDLE CHANGE
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // TOGGLE SERVICES
  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const alreadySelected = prev.services.includes(service);

      return {
        ...prev,
        services: alreadySelected
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  // VALIDATION FUNCTION
  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      services: "",
      message: "",
    };

    let valid = true;

    // NAME
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
      valid = false;
    }

    // EMAIL
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
      valid = false;
    }

    // PHONE
    const phoneNum = formData.phone.split(" ")[1] || "";
    if (phoneNum.length < 6 || phoneNum.length > 15) {
      newErrors.phone = "Enter a valid phone number.";
      valid = false;
    }

    // SERVICES
    if (formData.services.length === 0) {
      newErrors.services = "Select at least one service.";
      valid = false;
    }

    // MESSAGE
    if (!formData.message.trim()) {
      newErrors.message = "Please enter your requirements.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // SEND OTP
  const handleFormSubmit = async (e: React.FormEvent) => {
    console.log(formData);
    e.preventDefault();

    setError("");

    if (!validateForm()) return;

    setLoading(true);

    try {
      await axios.post(
        "https://bigwigdigitalbackend.onrender.com/api/lead/send-otp",
        formData
      );

      setStep("otp");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 400) {
          setError(
            "This email is already registered. Please use a different one."
          );
        } else {
          setError("Failed to send OTP. Please try again.");
        }
      } else {
        setError("Failed to send OTP. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // VERIFY OTP
  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await axios.post(
        "https://bigwigdigitalbackend.onrender.com/api/lead/verify-otp",
        { email: formData.email, otp }
      );

      setStep("done");
    } catch {
      setError("Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6 space-y-4">
      <h3 className="text-xl font-bold text-white">
        {step === "done" ? "Thank You!" : "Get in Touch"}
      </h3>

      {/* ---------------- FORM STEP ---------------- */}
      {step === "form" && (
        <form onSubmit={handleFormSubmit} className="space-y-4">
          {/* NAME */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded border border-white/30 bg-transparent text-white"
            />
            {errors.name && (
              <p className="text-red-400 text-sm">{errors.name}</p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              required
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-white/30 bg-transparent text-white"
            />
            {errors.email && (
              <p className="text-red-400 text-sm">{errors.email}</p>
            )}
          </div>

          {/* PHONE */}
          <div>
            <div className="flex gap-3">
              <select
                required
                className="p-3 border border-white/30 rounded-lg w-32"
                value={formData.phone.split(" ")[0] || "+91"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: `${e.target.value} ${formData.phone.split(" ")[1] || ""}`,
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
                className="w-full p-3 border border-white/30 rounded-lg text-white"
                value={formData.phone.split(" ")[1] || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: `${formData.phone.split(" ")[0] || "+91"} ${e.target.value}`,
                  })
                }
              />
            </div>
            {errors.phone && (
              <p className="text-red-400 text-sm">{errors.phone}</p>
            )}
          </div>

          {/* SERVICE SELECT */}
          <div>
            <details className="bg-white/5 border border-white/20 rounded-lg p-3">
              <summary className="cursor-pointer text-white select-none">
                {formData.services.length > 0
                  ? `${formData.services.length} Selected`
                  : "Select Services"}
              </summary>

              <div className="mt-3 grid grid-cols-2 gap-2 max-h-32 overflow-y-auto pr-1">
                {SERVICES_LIST.map((service) => {
                  const selected = formData.services.includes(service);
                  return (
                    <button
                      type="button"
                      key={service}
                      onClick={() => handleServiceToggle(service)}
                      className={`w-full text-left px-3 py-2 rounded border text-sm ${
                        selected
                          ? "bg-white text-black border-white"
                          : "bg-transparent text-white border-white/40 hover:border-white"
                      }`}
                    >
                      {service}
                    </button>
                  );
                })}
              </div>
            </details>
            {errors.services && (
              <p className="text-red-400 text-sm">{errors.services}</p>
            )}
          </div>

          {/* MESSAGE */}
          <div>
            <textarea
              name="message"
              placeholder="Explain your requirements"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-white/30 bg-transparent text-white"
            ></textarea>
          </div>

          <ButtonFill
            type="submit"
            text={loading ? "Sending OTP..." : "Submit & Send OTP"}
            className="w-full !py-3 !text-white"
          />
        </form>
      )}

      {/* ---------------- OTP STEP ---------------- */}
      {step === "otp" && (
        <form onSubmit={handleOtpSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full px-4 py-2 rounded border border-white/30 bg-transparent text-white"
          />

          <ButtonFill
            text={loading ? "Verifying..." : "Verify OTP"}
            className="w-full !py-3"
          />
        </form>
      )}

      {/* ---------------- SUCCESS ---------------- */}
      {step === "done" && (
        <p className="text-white text-center">
          Your message has been submitted successfully.
        </p>
      )}

      {error && <p className="text-red-400 text-sm">{error}</p>}
    </div>
  );
};

export default ContactForm;

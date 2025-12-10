"use client";
import { useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Mail, MessageSquareText, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import { AxiosError } from "axios";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"form" | "otp">("form");
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const validateInputs = () => {
    const newErrors: typeof errors = {};
    if (!formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone || formData.phone.length < 10) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage("");

    if (!validateInputs()) return;

    setLoading(true);
    try {
      await axios.post(
        "https://bigwigdigitalbackend.onrender.com/api/lead/send-otp",
        {
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }
      );
      setStep("otp");
      setStatusMessage("OTP sent! Please check your email.");
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      if (error.response?.status === 400) {
        setStatusMessage(error.response.data?.message || "Email already used.");
      } else {
        setStatusMessage("Something went wrong. Try again later.");
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
      setShowSuccessPopup(true);
      setFormData({ fullName: "", email: "", phone: "", message: "" });
      setOtp("");
      setTimeout(() => {
        setStep("form");
        setStatusMessage("");
      }, 3000);
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      setStatusMessage(error.response?.data?.message || "Invalid OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handlePhoneChange = (value: string | undefined) => {
    setFormData((prev) => ({ ...prev, phone: value || "" }));
    setErrors((prev) => ({ ...prev, phone: "" }));
  };

  return (
    <div className="bg-white min-h-screen text-black">
      <Nav />

      <title>Contact BigWig Digital</title>
      <meta
        name="description"
        content="Get in touch with BigWig Digital for your next big digital marketing transformation."
      />
      <link rel="canonical" href="https://www.bigwigmediadigital.com/contact" />

      {/* Locations */}
      <section className="w-full md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-8">
        {/* Office Info */}
        <div className="pt-4">
          <h2 className="text-2xl mb-2 font-semibold">India</h2>
          <hr className="border-gray-300" />
          <p className="mb-1 text-lg font-semibold">Delhi</p>
          <p className="mb-4 text-gray-700">
            Plot #2, Sanjay Nagar, Gulabi Bagh, Delhi 110007, India
          </p>

          <h2 className="text-2xl mb-2 font-semibold">Australia</h2>
          <hr className="border-gray-300" />
          <p className="mb-1 text-lg font-semibold">Melbourne</p>
          <p className="mb-4 text-gray-700">
            80 Lsabella way, Tarneit 3029 Melbourne
          </p>

          <h2 className="text-2xl mb-2 font-semibold">New Zealand</h2>
          <hr className="border-gray-300" />
          <p className="mb-1 text-lg font-semibold">Auckland</p>
          <p className="mb-4 text-gray-700">
            9/136 Marua Road, Mount Wellington, Auckland 1051
          </p>

          <p className="text-gray-600 mt-8">
            Our business operating hours are as follows:
          </p>
          <p className="mt-2 text-gray-700">
            Monday to Saturday: 10:30am - 7:00pm
          </p>
        </div>

        {/* Contact Options */}
        <div>
          <h2 className="text-xl font-semibold mb-2 font-sans">Get in Touch</h2>
          <p className="mb-4 text-gray-600">
            Please contact us via phone or email below or visit us during hours.
          </p>

          <div className="flex flex-col gap-4">
            <div className="bg-gray-100 p-4 rounded-md flex gap-4 shadow-sm">
              <Phone className="text-gray-700" />
              <span className="text-sm text-gray-700">+91 9685892813</span>
            </div>

            <a
              href="https://wa.me/+919685892813"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 p-4 rounded-md flex gap-4 shadow-sm"
            >
              <FaWhatsapp className="text-green-600" />
              <span className="text-sm text-gray-700">+91 96858 92813</span>
            </a>

            <a
              href="mailto:support@bigwigmedia.in"
              className="bg-gray-100 p-4 rounded-md flex gap-4 shadow-sm"
            >
              <Mail className="text-gray-700" />
              <span className="text-sm text-gray-700">
                support@bigwigmedia.in
              </span>
            </a>

            <a
              href="sms:+918368573451"
              className="bg-gray-100 p-4 rounded-md flex gap-4 shadow-sm"
            >
              <MessageSquareText className="text-gray-700" />
              <span className="text-sm text-gray-700">+91 83685 73451</span>
            </a>
          </div>
        </div>
      </section>

      {/* Intro to Form */}
      <div className="w-full md:w-[90%] mx-auto px-5">
        <h2 className="text-lg text-blue-600">
          Have questions or need marketing advice?
        </h2>
        <p className="text-md text-gray-600 mb-6">
          Fill out the form and we’ll respond within 24 hours.
        </p>
      </div>

      {/* Form & Map */}
      <div className="flex flex-col md:flex-row justify-center items-start w-full md:w-[90%] mx-auto px-6 py-8 gap-10 mb-7 bg-white">
        {/* Form */}
        <div className="w-full md:w-1/2 max-w-lg bg-gray-100 rounded-lg p-8 shadow-lg">
          {step === "form" ? (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Your Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="bg-white text-black border border-gray-300 p-3 rounded-lg w-full"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`bg-white text-black border p-3 rounded-lg w-full ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}

              <PhoneInput
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handlePhoneChange}
                defaultCountry="IN"
                international
                className={`bg-white text-black border p-3 rounded-lg w-full ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="bg-white text-black border border-gray-300 p-3 rounded-lg w-full"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg w-full"
              >
                {loading ? "Sending OTP..." : "Submit"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="bg-white text-black border border-gray-300 p-3 rounded-lg w-full"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg w-full"
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </form>
          )}

          {statusMessage && (
            <p className="text-sm text-center mt-3 text-gray-600">
              {statusMessage}
            </p>
          )}
        </div>

        {/* Map */}
        <div className="w-full md:w-1/2 h-[450px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.322121979646!2d77.19070767529064!3d28.673932275642237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03586419b693%3A0x627bb399c7e86209!2sBigwig%20Media%20Digital%20-%20Digital%20Marketing%20Company!5e1!3m2!1sen!2sin!4v1763114888587!5m2!1sen!2sin"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white text-black rounded-xl p-6 max-w-sm w-full shadow-xl text-center border border-gray-200">
            <h3 className="text-xl font-bold text-green-600 mb-4">
              Thank you!
            </h3>

            <p className="mb-4 text-gray-700">
              Your response has been added. Our representative will contact you
              within 24 hours.
            </p>

            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => setShowSuccessPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

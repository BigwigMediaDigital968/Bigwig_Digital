"use client";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { Phone, MapPin, Clock } from "lucide-react";

import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import ButtonFill from "../../../components/Button";

export default function ContactPage() {
  const SERVICES_LIST = [
    "SEO",
    "SMM",
    "Performance Marketing",
    "Content Marketing",
    "Website Development",
    "SMO",
    "Email Marketing",
    "Graphic Designing",
    "Influencer Marketing",
    "Affiliate Marketing",
    "ORM",
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+91",
    services: [] as string[],
    message: "",
  });

  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"form" | "otp">("form");
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    phone?: string;
  }>({});

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const validateInputs = () => {
    const newErrors: typeof errors = {};

    if (!formData.fullName.trim())
      newErrors.fullName = "Please enter your name.";

    if (!formData.email.includes("@"))
      newErrors.email = "Please enter a valid email address.";

    if (!formData.phone || formData.phone.length < 10)
      newErrors.phone = "Please enter a valid phone number.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const isSelected = prev.services.includes(service);

      return {
        ...prev,
        services: isSelected
          ? prev.services.filter((s: string) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  const handleSendOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    // console.log(formData);
    e.preventDefault();
    setStatusMessage("");

    if (!validateInputs()) return;

    setLoading(true);
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/lead/send-otp`,
        {
          name: formData.fullName,
          email: formData.email,
          phone: `${formData.countryCode}${formData.phone}`,
          services: formData.services,
          message: formData.message,
        },
      );

      setStep("otp");
      setStatusMessage("OTP sent! Please check your email.");
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      setStatusMessage(
        error.response?.data?.message || "Something went wrong.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/lead/verify-otp`,
        {
          email: formData.email,
          otp,
        },
      );

      setShowSuccessPopup(true);
      setTimeout(() => setShowSuccessPopup(false), 2500);

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
        countryCode: "+91",
        services: [],
      });

      setOtp("");
      setStep("form");
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      setStatusMessage(error.response?.data?.message || "Invalid OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-white">
      <title>Contact BigWig Media Digital | Get Free Consultation</title>
      <meta
        name="title"
        content="Contact BigWig Media Digital | Get Free Consultation"
      />
      <meta
        name="description"
        content="Contact Bigwig Media Digital, Digital Marketing Agency in Delhi. Call +91 96858 92813 or visit us at Gulabi Bagh, Delhi. Get in Touch Now!"
      />
      <link rel="canonical" href="https://www.bigwigmediadigital.com/contact" />

      {/* <!-- Open Graph Meta Tags --> */}
      <meta
        property="og:title"
        content="Contact BigWig Media Digital | Get Free Consultation"
      />
      <meta
        property="og:description"
        content="Contact Bigwig Media Digital, Digital Marketing Agency in Delhi. Call +91 96858 92813 or visit us at Gulabi Bagh, Delhi. Get in Touch Now!"
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/dyum0r6gf/image/upload/v1770032945/WhatsApp_Image_2026-02-02_at_4.12.04_PM_2_qj4azj.jpg"
      />
      <meta
        property="og:url"
        content="https://www.bigwigmediadigital.com/contact"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Bigwig Media Digital" />
      <meta property="og:locale" content="en_IN" />

      <Nav />

      <div
        className="w-full min-h-screen bg-cover bg-center relative py-12 "
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764323168/kaitlyn-baker-vZJdYl5JVXY-unsplash_skfolb.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative w-11/12 md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LEFT SIDE */}
          <div>
            <h1 className="text-4xl font-bold mb-13">CONTACT US</h1>

            {/* Call */}
            <div className="flex items-start gap-4 mb-10">
              <Phone size={32} className="text-[var(--color5)]" />
              <div>
                <h3 className="text-xl font-bold">Call Us</h3>
                <p className="opacity-80">+91 96858 92813</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 mb-10">
              <MapPin size={32} className="text-[var(--color5)]" />
              <div>
                <h3 className="text-xl font-bold">Location</h3>
                <p className="opacity-80 max-w-xs">
                  Plot # 2, Sanjay Nagar, Gulabi Bagh, Delhi 110007, India
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 mb-10">
              <Clock size={32} className="text-[var(--color5)]" />
              <div>
                <h3 className="text-xl font-bold">Business Hours</h3>
                <p className="opacity-80">
                  Mon – Sat: 10:30 am – 7 pm <br />
                  Sat: 2nd & 4th, Sun: Closed
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – FORM */}
          <div className="w-full">
            {step === "form" ? (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <div className="flex flex-col md:flex-row gap-5 w-full">
                  {/* Name */}
                  <div className="flex-1">
                    <label>Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-transparent border-b border-gray-400 p-2 outline-none focus:border-[var(--color5)]"
                      placeholder="Enter your Name"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex-1">
                    <label>Email</label>
                    <input
                      type="email"
                      required
                      className="w-full bg-transparent border-b border-gray-400 p-2 outline-none focus:border-[var(--color5)]"
                      placeholder="Enter a valid email address"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label>Phone</label>
                  <div className="flex gap-3 items-center mt-2">
                    {/* <select
                      className="p-3 rounded-md bg-[#050504] text-white outline-none focus:ring-2 focus:ring-[var(--color5)]"
                      value={formData.countryCode}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          countryCode: e.target.value,
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
                    </select> */}

                    <input
                      type="text"
                      required
                      className="bg-transparent border-b border-gray-400 p-2 flex-1 outline-none focus:border-[var(--color5)]"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* SERVICES CHECKBOX */}
                <div>
                  <label>Services</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
                    {SERVICES_LIST.map((service) => (
                      <label
                        key={service}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="accent-[var(--color5)] cursor-pointer"
                          checked={formData.services.includes(service)}
                          onChange={() => toggleService(service)}
                        />
                        <span>{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label>Message</label>
                  <textarea
                    rows={2}
                    className="w-full bg-transparent border-b border-gray-400 p-2 outline-none focus:border-[var(--color5)]"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  ></textarea>
                </div>

                {/* SEND OTP */}
                <ButtonFill
                  type="submit"
                  text={loading ? "Sending OTP..." : "SUBMIT"}
                />
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-10">
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-400 p-2 outline-none"
                />

                <ButtonFill
                  type="submit"
                  text={loading ? "Verifying..." : "VERIFY OTP"}
                />
              </form>
            )}

            {statusMessage && (
              <p className="text-[var(--color5)] mt-3">{statusMessage}</p>
            )}
          </div>
        </div>

        {/* MAP */}
        <div className="relative w-11/12 md:w-10/12 mx-auto mt-16 pb-16 ">
          {" "}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.322121979646!2d77.19070767529064!3d28.673932275642237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03586419b693%3A0x627bb399c7e86209!2sBigwig%20Media%20Digital%20-%20Digital%20Marketing%20Company!5e1!3m2!1sen!2in!4v1763114888587!5m2!1sen!2in"
            className="w-full h-[350px] rounded-lg shadow-xl"
            loading="lazy"
            allowFullScreen
          ></iframe>{" "}
        </div>
      </div>

      {/* SUCCESS POPUP */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-green-600">Thank You!</h3>
            <p>Your response has been submitted.</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

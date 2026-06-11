"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

interface ContactForm {
  name: string;
  email: string;
  phone: string; // now includes country code via PhoneInput
  description: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format or simple numeric check
    return phoneRegex.test(phone);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear errors as the user types
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { email, phone } = formData;
    let hasErrors = false;
    const newErrors: { email?: string; phone?: string } = {};

    if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address.";
      hasErrors = true;
    }

    if (!validatePhone(phone)) {
      newErrors.phone = "Please enter a valid phone number.";
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    try {
      await emailjs.send(
        "service_qyxu7x5", // Your Service ID
        "template_c221e6s", // Your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.description,
        },
        "fy4d7_jFodorXPOJT", // Your Public Key
      );

      setFormSubmitted(true);
    } catch (err) {
      console.error("EmailJS Error:", err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto pt-4">
      {formSubmitted ? (
        <div className="text-center text-green-600 mb-4">
          <p>Thank you for reaching out to us!</p>
          <p>We will get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="w-2/3 mx-auto ">
            <label
              htmlFor="name "
              className="block  text-sm font-medium text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="mt-1 p-2 block w-full rounded-md border border-gray-800 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="w-2/3 mx-auto ">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
              className="mt-1 p-2 block w-full rounded-md border border-gray-800 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="w-2/3 mx-auto ">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-white"
            >
              Phone Number hello
            </label>
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
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          <div className="w-2/3 mx-auto ">
            <label
              htmlFor="requirement"
              className="block text-sm font-medium text-white"
            >
              Requirements
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="Enter your requirements"
              rows={3}
              className="mt-1 p-2 block w-full rounded-md border border-gray-800 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="block mx-auto bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactUs;

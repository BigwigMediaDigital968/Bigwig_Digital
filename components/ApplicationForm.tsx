"use client";
import React, { useState } from "react";
import axios from "axios";

type FormDataType = {
  fullName: string;
  email: string;
  mobileNumber: string;
  experience: string;
  cctc: string;
  ectc: string;
  noticePeriod: string;
  coverLetter: string;
};

const ApplicationForm = () => {
  const [formData, setFormData] = useState<FormDataType>({
    fullName: "",
    email: "",
    mobileNumber: "",
    experience: "",
    cctc: "",
    ectc: "",
    noticePeriod: "",
    coverLetter: "",
  });

  const [resume, setResume] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!resume) {
      setMessage("Please upload a resume.");
      return;
    }

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    data.append("resume", resume);

    try {
      setLoading(true);
      setMessage("");

      await axios.post(
        "https://bigwigdigitalbackend.onrender.com/api/submit-job",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setMessage("Application submitted successfully! 🎉");

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        mobileNumber: "",
        experience: "",
        cctc: "",
        ectc: "",
        noticePeriod: "",
        coverLetter: "",
      });
      setResume(null);
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to submit application.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-200"
    >
      <h2 className="text-3xl font-bold mb-4 text-[var(--primary-color)]">
        Apply for this Job
      </h2>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[
          { name: "fullName", placeholder: "Full Name", type: "text" },
          { name: "email", placeholder: "Email", type: "email" },
          { name: "mobileNumber", placeholder: "Mobile Number", type: "tel" },
          { name: "experience", placeholder: "Total Experience", type: "text" },
          { name: "cctc", placeholder: "Current CTC", type: "text" },
          { name: "ectc", placeholder: "Expected CTC", type: "text" },
          { name: "noticePeriod", placeholder: "Notice Period", type: "text" },
        ].map((field) => (
          <input
            key={field.name}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name as keyof FormDataType]}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:ring-2 focus:ring-black focus:border-black transition"
            required={
              field.name === "fullName" ||
              field.name === "email" ||
              field.name === "mobileNumber"
            }
          />
        ))}

        {/* Cover letter + Resume */}
        <div className="md:col-span-2 space-y-4">
          <textarea
            name="coverLetter"
            placeholder="Write a short note (optional)…"
            value={formData.coverLetter}
            onChange={handleChange}
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:ring-2 focus:ring-black focus:border-black transition"
          />

          <label className="block w-full border-2 border-dashed border-gray-400 rounded-xl p-5 cursor-pointer hover:bg-gray-50 transition">
            <div className="text-center">
              <p className="font-semibold text-gray-700">
                {resume ? resume.name : "Upload Resume (PDF)"}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Click to browse or drag & drop
              </p>
            </div>
            <input
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={handleResumeChange}
              required
            />
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[var(--primary-color)] text-white py-3 rounded-xl text-lg font-semibold hover:bg-[var(--primary-color)]/90 cursor-pointer transition active:scale-95"
      >
        {loading ? "Submitting..." : "Submit Application"}
      </button>

      {/* Message */}
      {message && (
        <p
          className={`text-center text-sm font-medium ${
            message.includes("successfully") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
};

export default ApplicationForm;

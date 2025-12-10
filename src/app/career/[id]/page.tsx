"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Nav from "../../../../components/Nav";
import Footer from "../../../../components/Footer";
import ApplicationForm from "../../../../components/ApplicationForm";
import GetInTouch from "../../../../components/GetInTouch";

interface Job {
  _id: string;
  title: string;
  location: string;
  jd: string;
  responsibilities: string[];
  requirements: string[];
  jobType: string;
  workMode: string;
  createdAt: string;
}

export default function JobDetailsPage() {
  const params = useParams();
  const id = params?.id as string;

  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(
          `https://bigwigdigitalbackend.onrender.com/api/jobs/${id}`
        );
        const data = await res.json();
        setJob(data);
      } catch (err) {
        console.error("Failed to fetch job:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchJob();
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        <p className="text-lg font-medium text-gray-700">
          Loading job details...
        </p>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="text-center mt-10 text-red-500 text-xl">
        Job not found.
      </div>
    );
  }

  return (
    <div className="bg-[var(--color1)]">
      <Nav />

      {/* Header Section */}
      <div className="w-full relative overflow-hidden bg-gradient-to-r from-[#0a0a0a] via-[#101820] to-[#1e2a38] text-white py-20 px-6">
        {/* Decorative gradient glows */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[var(--color5)] opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[var(--color4)] opacity-20 blur-3xl rounded-full"></div>

        <div className="relative max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-xl">
            {job.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-lg opacity-90 mt-6">
            <p className="flex items-center gap-2">
              📍 <span>{job.location}</span>
            </p>
            <p className="flex items-center gap-2">
              🕒 <span>{job.jobType}</span>
            </p>
            <p className="flex items-center gap-2">
              🏢 <span>{job.workMode}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-11/12 md:w-5/6 mx-auto  py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT SECTION */}
        <div className="space-y-10">
          {/* JD Card */}
          <div className="bg-gradient-to-bl from-[var(--color1)] via-[var(--color2)] to-[var(--color1)] p-10 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow">
            <h2 className="text-3xl font-bold mb-4 text-[var(--color5)] flex items-center gap-2">
              <span className="text-2xl">📝</span> Job Description
            </h2>
            <p className="text-gray-200 leading-relaxed">{job.jd}</p>
          </div>

          {/* Responsibilities */}
          <div className="bg-gradient-to-bl from-[var(--color1)] via-[var(--color2)] to-[var(--color1)] p-10 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow">
            <h2 className="text-3xl font-bold mb-4 text-[var(--color5)] flex items-center gap-2">
              <span className="text-2xl">⚡</span> What You’ll Do
            </h2>

            <ul className="list-disc pl-6 text-gray-200 space-y-3">
              {job.responsibilities.map((res, index) => (
                <li key={index}>{res}</li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="bg-gradient-to-bl from-[var(--color1)] via-[var(--color2)] to-[var(--color1)] p-10 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow">
            <h2 className="text-3xl font-bold mb-4 text-[var(--color5)] flex items-center gap-2">
              <span className="text-2xl">🎯</span> Requirements / Skills
            </h2>

            <ul className="list-disc pl-6 text-gray-200 space-y-3">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT SECTION — FORM */}
        <div>
          <div className="bg-gradient-to-bl from-[var(--color1)] via-[var(--color2)] to-[var(--color1)] rounded-2xl shadow-2xl border border-gray-200 p-10 sticky top-32">
            <h3 className="text-3xl font-bold mb-6 text-[var(--color4)]">
              Apply Now
            </h3>
            <ApplicationForm />
          </div>
        </div>
      </div>
      <GetInTouch />
      <Footer />
    </div>
  );
}

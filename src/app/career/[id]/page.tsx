"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Nav from "../../../../components/Nav";
import Footer from "../../../../components/Footer";
import ApplicationForm from "../../../../components/ApplicationForm";

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
    <div>
      <Nav />

      {/* Header Section */}
      <div className="w-full bg-gradient-to-r from-black to-gray-800 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-4">{job.title}</h1>
          <div className="flex flex-wrap gap-6 text-lg opacity-90">
            <p>📍 {job.location}</p>
            <p>🕒 {job.jobType}</p>
            <p>🏢 {job.workMode}</p>
          </div>
        </div>
      </div>

      <div className="w-11/12 md:w-5/6 mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className=" space-y-10">
          {/* JD Card */}
          <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold mb-4 text-[var(--primary-color)]">
              Job Description
            </h2>
            <p className="text-gray-700 leading-relaxed">{job.jd}</p>
          </div>

          {/* Responsibilities */}
          <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold mb-4 text-[var(--primary-color)]">
              What You’ll Do
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {job.responsibilities.map((res, index) => (
                <li key={index}>{res}</li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold mb-4 text-[var(--primary-color)]">
              Requirements / Skills
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Application Form */}
        <div className="">
          <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-8 sticky top-36">
            <ApplicationForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

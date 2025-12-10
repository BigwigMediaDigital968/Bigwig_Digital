"use client";
import { useEffect, useState } from "react";
import cover_img from "../../../Assets/ABC (1).svg";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import Image from "next/image";
import Link from "next/link";

const benefits = [
  { title: "Professional Growth", desc: "Real-world learning", icon: "📈" },
  { title: "Skill Enhancement", desc: "Tools & mentorship", icon: "💡" },
  { title: "Great Culture", desc: "Friendly & flexible", icon: "👥" },
  { title: "Creative Freedom", desc: "Your ideas matter", icon: "🎨" },
  { title: "Fair Compensation", desc: "We value talent", icon: "💰" },
];

const process = [
  { title: "Submit Resume", icon: "📄" },
  { title: "Screening Call", icon: "📞", desc: "Quick discussion" },
  { title: "Assignment", icon: "📝", desc: "Role-based task" },
  { title: "Interview", icon: "🤝", desc: "Meet the team" },
  { title: "You're In!", icon: "🎉", desc: "Welcome aboard" },
];

interface JobOpening {
  _id: string;
  title: string;
  location: string;
  jd: string;
  jobType: string;
  workMode: string;
}

export default function Career() {
  const [jobs, setJobs] = useState<JobOpening[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://bigwigdigitalbackend.onrender.com/api/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
      <title>Digital Marketing Careers at BigWig Media | Join Our Team</title>
      <meta
        name="description"
        content="Discover digital marketing job opportunities at BigWig Media and grow your career with our expert team. Apply now."
      />

      <Nav />

      <div className="bg-white text-black">
        {/* HERO SECTION */}
        <section className="relative h-[350px] md:h-[450px] overflow-hidden">
          <Image
            src={cover_img}
            alt="Hiring Cover"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--primary-color)]/70 flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
              Join Our Team
            </h1>
            <p className="text-lg md:text-xl text-white mt-3 opacity-90">
              Build the Digital Future With Us
            </p>

            <button
              onClick={() =>
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
              }
              className="mt-6 bg-white text-[var(--primary-color)] px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
            >
              Explore Openings
            </button>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-14">
          {/* WHY WORK WITH US */}
          <section className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[var(--primary-color)]">
              Why Work With Us
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {benefits.map((item, i) => (
                <div
                  key={i}
                  className="bg-white border rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-5xl mb-3">{item.icon}</div>
                  <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CURRENT OPENINGS */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--primary-color)]">
              Current Openings
            </h2>

            {loading ? (
              <p className="text-center mt-6">Loading jobs...</p>
            ) : jobs.length === 0 ? (
              <p className="text-center mt-6">No job openings right now.</p>
            ) : (
              <div className="grid gap-8 md:grid-cols-3 mt-10">
                {jobs.map((job) => (
                  <div
                    key={job._id}
                    className="bg-white border rounded-xl shadow-lg p-6 flex flex-col relative"
                  >
                    <h4 className="text-xl font-bold mb-2">{job.title}</h4>

                    <p className="text-sm mb-1">📍 {job.location}</p>
                    <p className="text-sm mb-1">🧾 {job.jobType}</p>
                    <p className="text-sm mb-1">💼 {job.workMode}</p>

                    <p className="text-sm text-gray-600 mt-3 mb-16 line-clamp-3">
                      {job.jd}
                    </p>

                    {/* APPLY BUTTON FIXED AT BOTTOM */}
                    <Link
                      href={`/career/${job._id}`}
                      className="absolute bottom-6 left-6 right-6"
                    >
                      <button className="cursor-pointer w-full bg-[var(--primary-color)] text-white px-4 py-3 rounded-full font-medium hover:bg-[var(--primary-color)]/90 transition">
                        Apply Now
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* HIRING PROCESS */}
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[var(--primary-color)]">
              Our Hiring Process
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {process.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl shadow-md bg-white border hover:shadow-2xl transition hover:-translate-y-1"
                >
                  <div className="text-4xl mb-2">{step.icon}</div>
                  <h4 className="font-semibold">{step.title}</h4>
                  {step.desc && (
                    <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

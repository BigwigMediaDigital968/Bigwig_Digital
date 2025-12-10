"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import ButtonFill from "../../../components/Button"; // your existing button

import cover_img from "../../../Assets/ABC (1).svg"; // keep as is

// icons (lucide) - replace with your icons or keep
import { Star, Users, Sparkles, Rocket, TrendingUp } from "lucide-react";
import GetInTouch from "../../../components/GetInTouch";
import pin from "../../../Assets/pngimg.com - pin_PNG76.png";

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

  const benefits = [
    { title: "Professional Growth", desc: "Real-world learning", Icon: Star },
    { title: "Skill Enhancement", desc: "Tools & mentorship", Icon: Users },
    { title: "Creative Freedom", desc: "Your ideas matter", Icon: Sparkles },
    { title: "Precision Execution", desc: "Ship with impact", Icon: Rocket },
    { title: "Fair Compensation", desc: "We value talent", Icon: TrendingUp },
  ];

  const process = [
    { title: "Apply", desc: "Quick application", step: 1 },
    { title: "Screen", desc: "Short screening call", step: 2 },
    { title: "Assignment", desc: "Role-specific task", step: 3 },
    { title: "Interview", desc: "Meet the team", step: 4 },
    { title: "Offer", desc: "Welcome aboard", step: 5 },
  ];

  const stickyColors = ["#FFF9A8", "#FFD1DC", "#C7F9CC", "#A7E3FF"];

  return (
    <div className="min-h-screen bg-[var(--color1)] text-white">
      <Nav />

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="relative h-[60vh] md:h-[80vh] ">
          <Image
            src={cover_img}
            alt="cover"
            className="absolute inset-0 w-full h-full object-cover opacity-10"
            priority
          />

          <div className="absolute inset-0  flex items-center">
            <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="uppercase text-[var(--color5)] tracking-widest font-semibold inline-block border-b-2 border-[var(--color5)] pb-1">
                  Careers at Bigwig
                </p>
                <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-[var(--color4)]">
                  Build the Digital Future with Us
                </h1>
                <p className="mt-4 text-sm md:text-lg text-white/80 max-w-xl">
                  Join a team that crafts high-impact digital experiences. We
                  value curiosity, ownership, and collaboration.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <ButtonFill
                    text="Explore Openings"
                    onClick={() =>
                      window.scrollTo({
                        top: window.innerHeight,
                        behavior: "smooth",
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="w-11/12 md:w-5/6 mx-auto py-12 relative">
        {/* BENEFITS */}
        <section id="why" className="mb-16">
          <div className=" mb-8">
            <p className="text-[var(--color5)] text-lg font-semibold border-b w-fit mb-3 uppercase tracking-widest">
              Why Work With Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[var(--color4)] drop-shadow-lg mb-5">
              A few reasons people love working here
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.Icon;
              return (
                <div
                  key={i}
                  className="relative bg-white/5 border border-white/6 rounded-2xl p-6 backdrop-blur-sm shadow-md hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-[var(--color2)]/40 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[var(--color5)]" />
                  </div>
                  <h4 className="font-semibold text-lg text-white/95">
                    {b.title}
                  </h4>
                  <p className="text-sm text-white/70 mt-1">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CURRENT OPENINGS — PINNED PAPER CARDS */}
        <section className="py-12 text-white">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-[var(--color5)] text-lg font-semibold border-b w-fit mb-3 uppercase tracking-widest">
                Current Openings
              </h2>
              <p className="text-3xl md:text-4xl font-bold leading-tight text-[var(--color4)] drop-shadow-lg mb-5">
                Choose a role and start your journey with us.
              </p>
            </div>
          </div>

          {loading ? (
            <p className="text-center text-white/70">Loading jobs...</p>
          ) : jobs.length === 0 ? (
            <p className="text-center text-white/70">
              No job openings right now.
            </p>
          ) : (
            <div className="grid gap-8 lg:grid-cols-3">
              {jobs.map((job, idx) => (
                <article
                  key={job._id}
                  className={`
    bg-[var(--color2)] relative p-6 pt-12 
    shadow-[0_10px_25px_rgba(0,0,0,0.25)]
    transition-all duration-300 hover:-translate-y-2
    text-white
    rounded-[22px] 
    [clip-path:polygon(3%_0%,97%_0%,100%_96%,0%_100%)]
  `}
                >
                  {/* Paperclip */}
                  <div className="absolute top-0 right-4 w-10 h-10 flex items-center justify-center z-20">
                    <Image src={pin} alt="pin" className="w-10 h-8" />
                  </div>

                  <h3 className="text-xl font-bold mb-2 !text-[var(--color5)]">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 text-sm text-white/80 mb-3">
                    <span>📍 {job.location}</span>
                    <span>•</span>
                    <span>{job.jobType}</span>
                    <span>•</span>
                    <span>{job.workMode}</span>
                  </div>

                  <p className="text-sm !text-white line-clamp-4 mb-6">
                    {job.jd}
                  </p>

                  <div className="flex gap-3 items-center">
                    <Link href={`/career/${job._id}`}>
                      <ButtonFill text="Apply Now" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* HIRING PROCESS TIMELINE */}
        <section className="py-12">
          <div className=" mb-8">
            <h2 className="text-[var(--color5)] text-lg font-semibold border-b w-fit mb-3 uppercase tracking-widest">
              Hiring Process
            </h2>
            <p className="text-3xl md:text-4xl font-bold leading-tight text-[var(--color4)] drop-shadow-lg mb-5">
              Transparent process — quick decisions.
            </p>
          </div>

          <div className="relative">
            {/* horizontal line */}
            <div className="hidden md:block absolute left-0 right-0 top-8 h-0.5 bg-white/8"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {process.map((p) => (
                <div
                  key={p.step}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-[var(--color2)] flex items-center justify-center text-white font-semibold mb-3 shadow">
                    {p.step}
                  </div>
                  <h4 className="font-semibold text-white/95">{p.title}</h4>
                  <p className="text-xs text-white/60 mt-1">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* JOIN CTA */}
        <section className="py-12 grid md:grid-cols-2 gap-8 items-center bg-gradient-to-r from-[var(--color2)]/10 to-[var(--color3)]/6 rounded-2xl p-8">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-[var(--color4)]">
              Didn&#39;t find a role?
            </h3>
            <p className="text-white/70 mt-2">
              Send your resume and we&#39;ll keep it on file for future
              opportunities.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/contact">
              <ButtonFill text="Contact Us" />
            </Link>
          </div>
        </section>
      </main>
      <GetInTouch />
      <Footer />

      {/* Small CSS tweaks for paper/pin look */}
      <style jsx>{`
        /* make sure text on paper cards remains legible on dark bg */
        article p,
        article h3 {
          color: #0b1220;
        }

        /* subtle inner paper shadow */
        article::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 12px;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4);
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}

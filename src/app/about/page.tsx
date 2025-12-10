"use client";

import Image from "next/image";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";

import heroImg from "../../../Assets/Who are we.svg"; // replace with your hero image
import aboutImg from "../../../Assets/1759473431835.jpg"; // replace with your image
import aboutImg2 from "../../../Assets/map-lying-wooden-table.jpg";
import { useState } from "react";
import PopupForm from "../../../components/PopupForm";
import ButtonFill from "../../../components/Button";
import {
  Award,
  BarChart3,
  Cog,
  Facebook,
  FileText,
  Globe2,
  Layers,
  Linkedin,
  ListChecks,
  Rocket,
  ScanSearch,
  Send,
  Sparkles,
  TrendingUp,
  Twitter,
} from "lucide-react";
import why from "../../../Assets/Handleey-Social-Media-Post.webp";
import owner from "../../../Assets/owner.webp";
import GetInTouch from "../../../components/GetInTouch";
import Client from "../../../components/Clients";
import RainbowSteps from "../../../components/RainbowSteps";
import process from "../../../Assets/ircle.svg";
import imgae3 from "../../../Assets/Untitled design (1).svg";

export default function About() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <div className="bg-[var(--color1)] text-gray-200">
      <Nav />

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[50vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src={heroImg}
          alt="Agency Hero Image"
          fill
          priority
          className="object-cover brightness-50"
        />
      </section>

      {/* ================= ABOUT SECTION ================= */}

      <section className="w-11/12 md:w-5/6 mx-auto py-12 flex flex-col md:flex-row items-center gap-14">
        {/* LEFT SIDE TEXT */}
        <div className="md:w-1/2">
          <p className="text-[var(--color5)] uppercase text-lg font-semibold border-b mb-3 w-fit tracking-widest">
            The Bigwig Story
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color4)] mb-6">
            Building Brands That Win in the Digital Age
          </h2>

          <p className="text-base text-gray-200 leading-relaxed mb-6">
            At Bigwig Media Digital, we don’t just deliver marketing - we craft
            digital experiences that connect, convert, and create lasting
            impact. Based in New Delhi, India, we are a full-stack Digital
            Marketing Powerhouse driven by Creative Thinkers, Strategic
            Planners, and Platform-Obsessed Specialists who live and breathe the
            online world.
            <br />
            <br />
            From the moment an algorithm shifts on Google, Instagram, YouTube,
            Facebook, or Twitter, Our Team is already two steps ahead. With more
            than Eight Years of deep-rooted expertise, we design integrated,
            data-powered strategies that help businesses grow, compete, and
            dominate their digital landscapes.
          </p>
          {/* BUTTON */}
          <ButtonFill
            onClick={() => setIsPopupOpen(true)}
            text="Get in Touch"
            className="mt-6"
          />
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="w-full md:w-1/2">
          <Image
            src={aboutImg2}
            alt="About Bigwig Digital"
            className="rounded-2xl  w-full object-cover"
          />
        </div>
      </section>

      {/* ================= WHO WE ARE SECTION ================= */}
      <section className="w-11/12 md:w-5/6 mx-auto py-12 flex flex-col-reverse md:flex-row items-center gap-14">
        {/* LEFT SIDE IMAGE */}
        <div className="w-full md:w-1/2">
          <Image
            src={aboutImg}
            alt="About Bigwig Digital"
            className="rounded-2xl  w-full object-cover"
          />
        </div>
        {/* RIGHT SIDE TEXT */}
        <div className="md:w-1/2">
          <p className="text-[var(--color5)] uppercase text-lg font-semibold border-b mb-3 w-fit tracking-widest">
            Who We Are
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color4)] mb-6">
            A team built to power brands digitally.
          </h2>

          <p className="text-base text-gray-200 leading-relaxed mb-6">
            We are a team of curious minds and problem-solvers who blend
            creativity with precision. As a 360° digital marketing agency, our
            mission is simple, to power brands with smart, scalable digital
            strategies that help them rise, compete, and lead. Whether
            you&#39;re an emerging startup or an established enterprise, we
            build digital journeys that attract, engage, and convert.
          </p>

          {/* STATS BOXES */}
          <div className="grid grid-cols-2 gap-5 mt-6">
            <div className="bg-[#1E293B]/60 border border-white/10 rounded-xl p-5 shadow-md hover:shadow-lg transition flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#38BDF8]/20 flex items-center justify-center">
                <Award className="text-[#38BDF8] w-6 h-6" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white leading-tight">
                  8+ Years
                </h3>
                <p className="text-gray-400 text-sm">Industry Experience</p>
              </div>
            </div>

            <div className="bg-[#1E293B]/60 border border-white/10 rounded-xl p-5 shadow-md hover:shadow-lg transition flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#38BDF8]/20 flex items-center justify-center">
                <Globe2 className="text-[#38BDF8] w-6 h-6" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white leading-tight">
                  25+ Industries
                </h3>
                <p className="text-gray-400 text-sm">We’ve Worked Across</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR WORKING PROCESS SECTION ================= */}
      <section className="py-12 relative bg-gradient-to-b from-[var(--color1)] via-[var(--color2)] to-[var(--color1)]">
        <div className="w-11/12 md:w-5/6 mx-auto">
          {/* Title */}
          <div className="text-center mb-8">
            <p className="text-[var(--color5)] uppercase text-lg font-semibold mb-3 tracking-widest inline-block border-b-2 border-[var(--color5)]">
              Our Blueprint for Success
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color4)] mb-6">
              Turning smart ideas into measurable outcomes.
            </h2>
          </div>

          {/* DESKTOP — SHOW INFOGRAPHIC IMAGE */}
          <div className="hidden md:block">
            <Image
              src={process}
              alt="Bigwig Process"
              className="w-full mx-auto"
            />
          </div>

          {/* MOBILE/TABLET — SHOW BOXES */}
          <div className="md:hidden mt-10 grid grid-cols-1 gap-6">
            {[
              {
                title: "Understanding the Landscape",
                desc: "We analyze markets, competition, and audience behavior to uncover real opportunities.",
              },
              {
                title: "Strategic Blueprinting",
                desc: "We map clear, data-led directions that align with your brand’s objectives.",
              },
              {
                title: "Creative Engineering",
                desc: "Concepts turn into compelling visuals, content, and experiences.",
              },
              {
                title: "Precision Deployment",
                desc: "Campaigns go live with tactical execution across chosen platforms.",
              },
              {
                title: "Optimization & Evolution",
                desc: "We track, refine, and scale because great performance should never plateau.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
            bg-[var(--color1)]/70 border border-white/10 rounded-2xl
            shadow-[0_0_20px_rgba(0,0,0,0.3)] p-5 relative overflow-hidden
            transition-all duration-300 hover:shadow-[0_0_25px_rgba(167,235,242,0.35)]
          "
              >
                {/* Decorative blob */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-[var(--color4)]/20 blur-2xl rounded-full"></div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-[var(--color5)] mb-2 relative z-10">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed relative z-10">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <RainbowSteps/> */}

      <section className="py-12 bg-[var(--color1)]">
        <div className="w-11/12 md:w-5/6 mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          {/* Left Text Side */}
          <div className="md:w-1/2">
            <p className="text-[var(--color5)] uppercase text-lg font-semibold border-b mb-3 w-fit tracking-widest">
              Why We’re the Right Partner
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color4)] mb-6">
              Digital Excellence, Delivered Consistently
            </h2>
            <p className="text-gray-200 mb-8">
              We believe in going beyond the conventional. Every project we take
              on is powered by insight, creativity, and performance-driven
              execution.
            </p>

            {/* Small Box Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[var(--color2)] p-4 rounded-lg shadow-md">
                <h3 className="font-semibold mb-1 text-[var(--color4)]">
                  Built for the Modern Brand
                </h3>
                <p className="text-gray-200 text-sm">
                  We shape digital experiences that create visibility, value,
                  and long-term impact.
                </p>
              </div>
              <div className="bg-[var(--color2)] p-4 rounded-lg shadow-md">
                <h3 className="font-semibold mb-1 text-[var(--color4)]">
                  Powered by a Passionate Team
                </h3>
                <p className="text-gray-200 text-sm">
                  Strategists, creators, analysts & media experts working
                  together to deliver excellence.
                </p>
              </div>
              <div className="bg-[var(--color2)] p-4 rounded-lg shadow-md">
                <h3 className="font-semibold mb-1 text-[var(--color4)]">
                  A Strong Track Record
                </h3>
                <p className="text-gray-200 text-sm">
                  8+ years of transforming brands into industry leaders through
                  digital innovation.
                </p>
              </div>
              <div className="bg-[var(--color2)] p-4 rounded-lg shadow-md">
                <h3 className="font-semibold mb-1 text-[var(--color4)]">
                  Trusted by Leading Brands
                </h3>
                <p className="text-gray-200 text-sm">
                  Our clientele spans industries like eCommerce, retail, tech,
                  events, and more.{" "}
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Side */}
          <div className="md:w-1/2">
            <Image
              src={imgae3}
              alt="Why Choose Us"
              className="w-full rounded-lg "
            />
          </div>
        </div>
      </section>

      <Client />

      <section className="py-12">
        <div className="w-11/12 md:w-5/6 mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          {/* Left Side Image */}
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={owner} // replace with your founder image
              alt="Amandeep Singh"
              className="w-72 rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Right Side Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-[var(--color5)] uppercase font-semibold mb-2 tracking-widest inline-block border-b-2 border-[var(--color5)]">
              The Mind Behind Bigwig
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color4)] mb-6">
              A Message from Our Founder
            </h2>
            <p className="text-gray-200 mb-6 whitespace-pre-wrap">
              “Bigwig Media Digital was born from a desire to help brands
              navigate the digital world with clarity and confidence. My vision
              has always been simple, combining smart strategy with meaningful
              creativity to deliver results that truly matter. <br />
              <br />
              Every brand we work with becomes a part of our journey. Your
              challenges guide our thinking, and your growth drives our passion.
              Thank you for trusting us to power your digital presence, we’re
              committed to building success with you, every step of the way.”
            </p>
            <h3 className="text-xl font-semibold text-[var(--color5)] mb-1">
              Amandeep Singh
            </h3>
            <p className="text-gray-300">Founder</p>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA SECTION ================= */}

      <GetInTouch />

      <section className="w-full py-10 bg-gradient-to-r from-[var(--color1)] via-[var(--color2)] to-[var(--color3)] flex justify-center items-center">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[var(--color5)] px-6 leading-relaxed">
          We live by our motto –
          <span className="font-bold text-[var(--color4)]">
            {" "}
            “We create super-rich experiences online!”
          </span>
        </h2>
      </section>

      <Footer />
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}

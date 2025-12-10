"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import GetInTouch from "../../../components/GetInTouch";

import Image from "next/image";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import {
  allWorkItems,
  categories,
  CategoryKey,
  WorkItem,
} from "../../data/galleryData";

const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Filter data
  const filteredItems =
    activeCategory === "all"
      ? allWorkItems
      : allWorkItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="w-full text-white bg-[var(--color1)]">
      <Nav />
      <title>Our Work</title>
      <meta
        name="description"
        content="View our portfolio to see how we’ve helped businesses achieve digital success across industries."
      />
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/our-works"
      />

      <section className="py-5 w-11/12 md:w-5/6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          <span className="text-[var(--color5)]">Our Work</span>
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm font-medium">
          {categories.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`uppercase tracking-wide ${
                activeCategory === key
                  ? "text-[var(--color4)] underline underline-offset-4"
                  : "text-gray-500 hover:text-[var(--color4)]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* If SEO is empty */}
        {activeCategory === "seo" && filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-400 text-lg">
            SEO case studies coming soon!
          </div>
        )}

        {/* MAIN GRID */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((item: WorkItem, i) => {
            // ======================
            // WEBSITE ITEM
            // ======================
            if (item.type === "website") {
              return (
                <div
                  key={item.id}
                  className="border border-gray-200 shadow-lg rounded-lg overflow-hidden"
                  data-aos="fade-up"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full  object-contain transition-transform duration-300"
                  />
                  <h3 className="text-lg font-semibold px-4 py-3 text-center">
                    {item.title}
                  </h3>
                </div>
              );
            }

            // ======================
            // REEL ITEM
            // ======================
            if (item.type === "reel") {
              return (
                <div
                  key={item.id}
                  className="text-left"
                  data-aos="fade-up"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="overflow-hidden border border-gray-200 shadow-lg rounded-md">
                    <iframe
                      className="w-full aspect-video"
                      src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=${
                        hoveredIndex === i ? "1" : "0"
                      }&mute=1`}
                      title={item.title}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      draggable="false"
                    />
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold mt-4 inline-block hover:text-[var(--color5)]"
                  >
                    {item.title}
                  </a>
                </div>
              );
            }

            // ======================
            // POST ITEM
            // ======================
            if (item.type === "post") {
              return (
                <div
                  key={item.id}
                  className="text-left relative"
                  data-aos="fade-up"
                >
                  <div className="overflow-hidden border border-gray-200 shadow-lg rounded-md relative">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-[300px] object-cover transition-transform duration-300 hover:scale-105"
                      draggable="false"
                    />

                    {/* Social icons */}
                    <div className="absolute top-2 right-2 flex gap-2 z-10">
                      {item.socials.map((social, index) => {
                        let Icon;

                        switch (social.platform) {
                          case "instagram":
                            Icon = <FaInstagram className="text-pink-600" />;
                            break;
                          case "facebook":
                            Icon = <FaFacebookF className="text-blue-600" />;
                            break;
                          case "twitter":
                            Icon = <FaXTwitter className="text-blue-400" />;
                            break;
                          case "linkedin":
                            Icon = <FaLinkedinIn className="text-blue-700" />;
                            break;
                          default:
                            Icon = null;
                        }

                        return (
                          <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-1 rounded-full shadow-md hover:scale-110 transition-transform"
                          >
                            {Icon}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            // ======================
            // SEO ITEM (when added later)
            // ======================
            if (item.type === "seo") {
              return (
                <div
                  key={item.id}
                  className="border border-gray-200 shadow-lg rounded-lg p-5 text-center"
                  data-aos="fade-up"
                >
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  {item.description && (
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  )}
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full mt-3 rounded-lg"
                    />
                  )}
                </div>
              );
            }

            return null;
          })}
        </div>
      </section>

      <GetInTouch />
      <Footer />
    </div>
  );
};

export default GallerySection;

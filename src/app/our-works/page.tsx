"use client";
import React, { useState, useEffect } from "react";
import { postItems, PostItem } from "../../data/postData";
import { reelItems, ReelItem } from "../../data/reelData";
import { websiteItems, WebsiteItem } from "../../data/websiteData";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import Image from "next/image";

type Category = "all" | "creative" | "ai" | "cgi" | "videos" | "websites";

const filterLabels: { key: Category; label: string }[] = [
  { key: "all", label: "ALL" },
  { key: "creative", label: "CREATIVES" },
  { key: "ai", label: "AI" },
  { key: "cgi", label: "CGI" },
  { key: "videos", label: "REELS" },
  { key: "websites", label: "WEBSITES" },
];

const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const allItems: (PostItem | (ReelItem & { type?: string }) | WebsiteItem)[] =
    [
      ...postItems,
      ...reelItems.map((reel) => ({ ...reel, type: "videos" })),
      ...websiteItems,
    ];

  const filteredItems = allItems.filter((item) =>
    activeCategory === "all" ? true : item.type === activeCategory
  );

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="w-full text-black bg-white">
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
      <section className="py-5 max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-4">
          <span className="text-[#4E6CBA]">Our</span>{" "}
          <span className="text-[#DA4D42]">Work</span>
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm font-medium">
          {filterLabels.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`uppercase tracking-wide ${
                activeCategory === key
                  ? "text-[#4E6CBA] underline underline-offset-4"
                  : "text-gray-500 hover:text-[#4E6CBA]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid or Flex Layout */}
        {activeCategory === "websites" ? (
          <div className="flex flex-col gap-10">
            {filteredItems.map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 shadow-lg rounded-lg overflow-hidden"
                data-aos="fade-up"
              >
                {/* <a
                  href={(item as WebsiteItem).url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                > */}
                <Image
                  src={(item as WebsiteItem).image}
                  alt={(item as WebsiteItem).title}
                  className="w-full h-auto max-h-[500px] object-cover transition-transform duration-300 hover:scale-105"
                />
                {/* </a> */}
                <h3 className="text-lg sm:text-xl font-semibold px-4 py-3 text-center sm:text-left">
                  {(item as WebsiteItem).title}
                </h3>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredItems.map((item, i) =>
              "youtubeId" in item ? (
                <div
                  key={i}
                  className="text-left"
                  data-aos="fade-up"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="overflow-hidden border border-gray-200 shadow-lg shadow-gray-500 rounded-md">
                    <iframe
                      className="w-full aspect-video"
                      src={`https://www.youtube.com/embed/${
                        item.youtubeId
                      }?autoplay=${hoveredIndex === i ? "1" : "0"}&mute=1`}
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
                    className="text-lg font-semibold mt-4 inline-block hover:text-blue-600"
                  >
                    {item.title}
                  </a>
                </div>
              ) : "image" in item ? (
                <div
                  key={i}
                  className="border border-gray-200 shadow-lg rounded-lg overflow-hidden"
                  data-aos="fade-up"
                >
                  {/* <a
                    href={(item as WebsiteItem).url}
                    target="_blank"
                    rel="noopener noreferrer"
                  > */}
                  <Image
                    src={(item as WebsiteItem).image}
                    alt={(item as WebsiteItem).title}
                    className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105 "
                  />
                  {/* </a> */}
                  <h3 className="text-xl font-semibold px-4 py-2">
                    {(item as WebsiteItem).title}
                  </h3>
                </div>
              ) : (
                <div key={i} className="text-left relative" data-aos="fade-up">
                  <div className="overflow-hidden border border-gray-200 shadow-lg shadow-gray-500 rounded-md relative">
                    <a target="_blank" rel="noopener noreferrer">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        className="w-full md:h-[350px] h-[450px] object-fill transition-transform duration-300 transform hover:scale-105"
                        draggable="false"
                      />
                    </a>

                    {"socials" in item && (
                      <div className="absolute top-2 right-2 flex gap-2 z-10">
                        {item.socials.map((social, index) => {
                          const iconMap = {
                            instagram: (
                              <FaInstagram className="text-pink-600" />
                            ),
                            facebook: <FaFacebookF className="text-blue-600" />,
                            twitter: <FaXTwitter className="text-blue-400" />,
                            linkedin: (
                              <FaLinkedinIn className="text-blue-700" />
                            ),
                          };

                          return (
                            <a
                              key={index}
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-white p-1 rounded-full shadow-md hover:scale-110 transition-transform"
                            >
                              {iconMap[social.platform]}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default GallerySection;

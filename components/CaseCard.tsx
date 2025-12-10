"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick"; // Import the react-slick component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
const CaseCard: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // 👈 slow animation (you can adjust between 1000–1500 for even slower)
      once: false, // 👈 animate every time it scrolls into view
      mirror: false, // 👈 don't animate again when scrolling back up (optional)
      easing: "ease-in-out", // 👈 smoother slow animation
    });

    AOS.refresh(); // Ensures animations re-initialize correctly
  }, []);

  const cases = [
    {
      image:
        "https://img.freepik.com/free-photo/people-tablet-with-bar-graph_1134-473.jpg?t=st=1734521827~exp=1734525427~hmac=a538c7ecac674ca88ab223133d3c932a78502f43944562a09b9eac8f82b860f6&w=900",
      title: "Driving 75% Growth in E-commerce",
      description:
        "We implemented a comprehensive SEO and performance marketing strategy for an e-commerce brand, boosting conversions by 75% and significantly increasing revenue.",
      tags: ["SEO", "Performance Marketing", "E-commerce"],
    },
    {
      image:
        "https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063150.jpg?t=st=1734521679~exp=1734525279~hmac=62da27c16e954020d54a96e759573076fe3fa5f1d978970d95e0ca6db8fac276&w=900",
      title: "Social Media Engagement Growth",
      description:
        "For a fashion brand, we leveraged influencer marketing and compelling content to increase social media engagement and drive brand awareness from scratch.",
      tags: ["Social Media Management", "Influencer Marketing"],
    },
    {
      image:
        "https://img.freepik.com/premium-vector/viral-content-magnetic-attraction-people-communication_24908-2.jpg?w=740",
      title: "Scaling Lead Generation by 60%",
      description:
        "We boosted lead generation by 60% for a SaaS company by optimizing their website for SEO, running targeted ads, and delivering personalized content marketing strategies.",
      tags: ["SEO", "Lead Generation", "Content Marketing"],
    },
  ];

  const tagColorMap: { [key: string]: string } = {
    "Organic growth": "bg-teal-200",
    Advertising: "bg-red-300",
    "Content creation": "bg-green-300",
    SEO: "bg-yellow-300",
    "Influencer Marketing": "bg-purple-300",
    "Lead Generation": "bg-blue-300",
    "Performance Marketing": "bg-pink-200",
    "Social Media Management": "bg-orange-300",
    "Brand Awareness": "bg-indigo-200",
    "Creative Innovations": "bg-gray-200",
  };

  // Mobile view detection: consider width less than 768px as mobile
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slider settings for mobile view
  const sliderSettings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop sliding
    speed: 500,
    slidesToShow: 1, // Show one at a time
    slidesToScroll: 1,
    arrows: false, // Optionally hide arrows on mobile
    autoplay: true, // Automatically slide (optional)
    autoplaySpeed: 3000, // Duration between slides
  };

  return (
    <div className=" w-11/12 md:w-5/6 mb-10 py-4 mx-auto">
      {/* Header Section */}
      <h1 className="text-5xl font-bold  mb-4 text-center">Why Bigwig?</h1>
      <p className="text-center mb-6 text-gray-800 text-md md:text-xl">
        Let us be your <strong>3rd Eye &amp; 6th Sense</strong> and make your
        end results to be nothing but <strong>ROI</strong> spectacular.
      </p>

      {isMobile ? (
        // Mobile view: Render slider
        <Slider {...sliderSettings}>
          {cases.map((caseItem, index) => (
            <div key={index} className="px-2">
              <img
                src={caseItem.image}
                alt={caseItem.title}
                className="w-full h-64 object-cover rounded-3xl transition-transform duration-300 hover:rotate-3 hover:scale-105 hover:shadow-2xl"
              />
              <div className="p-4">
                <h3 className="text-md md:text-xl font-semibold text-gray-800">
                  {caseItem.title}
                </h3>
                <hr className="my-3 border-t-2" />
                <p className="text-gray-700 mt-2 text-sm md:text-md">
                  {caseItem.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {caseItem.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`text-sm md:text-md font-medium px-4 py-2 rounded-full ${
                        tagColorMap[tag] || "bg-gray-200"
                      } text-gray-700`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        // Desktop/Tablet view: Render grid layout
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-4">
          {cases.map((caseItem, index) => (
            <div key={index} data-aos="zoom-in">
              <img
                src={caseItem.image}
                alt={caseItem.title}
                className="w-full h-64 object-cover rounded-3xl transition-transform duration-300 hover:rotate-3 hover:scale-105 hover:shadow-2xl"
                draggable="false"
              />
              <div className="p-4">
                <h3 className="text-md md:text-xl font-semibold text-gray-800">
                  {caseItem.title}
                </h3>
                <hr className="my-3 border-t-2" />
                <p className="text-gray-700 mt-2 text-sm md:text-md">
                  {caseItem.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {caseItem.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`text-sm md:text-md font-medium px-4 py-2 rounded-full ${
                        tagColorMap[tag] || "bg-gray-200"
                      } text-gray-700`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CaseCard;

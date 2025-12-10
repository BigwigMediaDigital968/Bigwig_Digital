import React from "react";
import award1 from "../Assets/partner/Google-Partner-Logo-Vector.svg-.png";
import award2 from "../Assets/partner/Met-Business-Partners.png";
import award3 from "../Assets/partner/bing-ads.png";
import award4 from "../Assets/partner/hubspot.png";
import award5 from "../Assets/partner/wordpress.jpg";
import award6 from "../Assets/partner/tiktok-partners (1).png";
import award7 from "../Assets/partner/Shopify_Partner.png";
import award8 from "../Assets/partner/microsoft.png";
import Image from "next/image";
// Add more awards as needed

const awards = [
  {
    title: "Top Digital Marketing Agency 2024",
    image: award1,
  },
  {
    title: "Google Premier Partner",
    image: award2,
  },
  {
    title: "Best SEO Company",
    image: award3,
  },
  {
    title: "Top Digital Marketing Agency 2024",
    image: award4,
  },

  {
    title: "Best SEO Company",
    image: award5,
  },
  {
    title: "Top Digital Marketing Agency 2024",
    image: award6,
  },
  {
    title: "Google Premier Partner",
    image: award7,
  },
  {
    title: "Microsoft Partner",
    image: award8,
  },

  // Add more awards here if needed
];

const Partners: React.FC = () => {
  return (
    <section className="bg-gray-100 py-4 px-4 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-16">
        {/* Left: Title */}
        <div className="text-center md:text-left">
          <h2 className="text-xl text-gray-800">PARTNERSHIPS</h2>
        </div>

        {/* Right: Awards as images */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-8">
          {awards.map((award, index) => (
            <Image
              key={index}
              src={award.image}
              alt={award.title}
              title={award.title}
              className="w-12 h-10 md:w-20 md:h-16 object-contain hover:scale-105 transition"
              draggable="false"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

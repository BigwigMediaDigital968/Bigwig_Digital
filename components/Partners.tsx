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

  // {
  //   title: "Best SEO Company",
  //   image: award5,
  // },
  {
    title: "Top Digital Marketing Agency 2024",
    image: award6,
  },
  // {
  //   title: "Google Premier Partner",
  //   image: award7,
  // },
  {
    title: "Microsoft Partner",
    image: award8,
  },

  // Add more awards here if needed
];

const Partners: React.FC = () => {
  return (
    <section className="bg-[#011c40] text-[#a7ebf2] py-4">
      <div className="w-11/12 md:w-5/6 mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-16">
        {/* Left: Title */}
        <div className="text-center md:text-left">
          <h2 className="text-xl ">PARTNERSHIPS</h2>
        </div>

        {/* Right: Awards as images */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-20">
          {awards.map((award, index) => (
            <Image
              key={index}
              src={award.image}
              alt={award.title}
              title={award.title}
              className="w-12 h-10 md:w-20 md:h-16 object-contain hover:scale-105 transition invert"
              draggable="false"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

"use client";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import Link from "next/link";

const categoriesData = [
  {
    title: "Quick Links",
    items: [
      {
        name: "Careers",
        path: "/career",
      },
      { name: "Blogs", path: "/blogs" },
      { name: "FAQ", path: "/faq" },
      { name: "T&C", path: "/terms-and-condition" },
      { name: "Privacy Policy", path: "/privacy-policy" },
    ],
  },
  {
    title: "Services",
    items: [
      {
        name: "Search Engine Optimization",
        path: "/services/search-engine-optimization",
      },
      {
        name: "Social Media Marketing",
        path: "/services/social-media-marketing",
      },
      {
        name: "Performance Marketing",
        path: "/services/performance-marketing",
      },
      {
        name: "Content Marketing",
        path: "/services/content-marketing",
      },
      {
        name: "Website Designing & Development",
        path: "/services/website-design-development",
      },
      {
        name: "Email Marketing",
        path: "/services/email-marketing",
      },
      {
        name: "Social Media Optimization",
        path: "/services/social-media-optimization",
      },
      {
        name: "Graphic Designing",
        path: "/services/graphic-designing",
      },
      {
        name: "AI and CGI Marketing",
        path: "/services/ai-cgi-marketing",
      },
      {
        name: "Landing Page Optimization",
        path: "/services/landing-page-optimization",
      },
      {
        name: "Affiliate Marketing",
        path: "/services/affiliate-marketing",
      },
      { name: "Video Shoot", path: "/services/video-shoot" },
      {
        name: "Public Relations",
        path: "/services/public-relations",
      },
      {
        name: "Influencer Marketing",
        path: "/services/influencer-marketing",
      },
      {
        name: "Online Reputation Management",
        path: "/services/online-reputation-management",
      },
    ],
  },

  {
    title: "Blogs",
    items: [
      {
        name: "Search Engine Optimization",
        path: "https://www.bigwigmediadigital.com/blogs/category/search-engine-optimization",
      },
      {
        name: "Social Media Marketing",
        path: "https://www.bigwigmediadigital.com/blogs/category/social-media-marketing",
      },
      {
        name: "Performance Marketing",
        path: "https://www.bigwigmediadigital.com/blogs/category/performance-marketing",
      },
      {
        name: "Content Marketing",
        path: "https://www.bigwigmediadigital.com/blogs/category/content-marketing",
      },
      {
        name: "Website Designing & Development",
        path: "https://www.bigwigmediadigital.com/blogs/category/website-designing-&-development",
      },
      {
        name: "email marketing",
        path: "https://www.bigwigmediadigital.com/blogs/category/email-marketing",
      },
      {
        name: "social media optimization",
        path: "https://www.bigwigmediadigital.com/blogs/category/social-media-optimization",
      },
      {
        name: "graphic designing",
        path: "https://www.bigwigmediadigital.com/blogs/category/graphic-designing",
      },
      {
        name: "ai and cgi marketing",
        path: "https://www.bigwigmediadigital.com/blogs/category/ai-and-cgi-marketing",
      },
      {
        name: "landing page optimization",
        path: "https://www.bigwigmediadigital.com/blogs/category/landing-page-optimization",
      },
      {
        name: "affiliate marketing",
        path: "https://www.bigwigmediadigital.com/blogs/category/affiliate-marketing",
      },
      {
        name: "video shoot",
        path: "https://www.bigwigmediadigital.com/blogs/category/video-shoot",
      },
      {
        name: "public relations",
        path: "https://www.bigwigmediadigital.com/blogs/category/public-relations",
      },
      {
        name: "influencer marketing",
        path: "https://www.bigwigmediadigital.com/blogs/category/influencer-marketing",
      },
      {
        name: "online reputation management",
        path: "https://www.bigwigmediadigital.com/blogs/category/online-reputation-management",
      },
      {
        name: "digital marketing",
        path: "https://www.bigwigmediadigital.com/blogs/category/digital-marketing",
      },
    ],
  },
  // Add other main categories: Building Materials, Industrial Supplies, etc.
];

export default function CategoriesSection() {
  return (
    <div className="bg-white min-h-screen">
      <Nav />
      <div className="w-11/12 mx-auto p-4 md:p-8">
        {/* <h2 className="text-lg md:text-xl font-bold mb-4">Categories</h2> */}
        <div className="space-y-8">
          {categoriesData.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-md md:text-lg font-semibold mb-2 ">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-x-3 gap-y-2 text-sm md:text-base">
                {category.items.map((item, i) => (
                  <span key={i} className="flex items-center">
                    <Link
                      href={item.path}
                      className="text-gray-600 hover:text-blue-500 whitespace-nowrap"
                    >
                      {item.name}
                    </Link>
                    {i !== category.items.length - 1 && (
                      <span className="mx-2 text-gray-400">|</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

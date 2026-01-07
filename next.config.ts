import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "winprofx.com",
      "riverfront.vercel.app",
      "www.homesandlandgoa.com",
      "www.svgrepo.com",
      "res.cloudinary.com",
      "pngimg.com",
      "static.vecteezy.com",
      "freelogopng.com",
      "brandlogos.net",
      "images.seeklogo.com",
      "www.cablewirefair.com",
      "static.cdnlogo.com",
      "i.pinimg.com",
      "logoeps.com",
      "www.freelogovectors.net",
      "static.wikia.nocookie.net",
      "www.opju.ac.in",
      "bottindia.com",
      "www.integratedlognet.com",
      "www.stellarbinge.com",
      "www.khalsapropertydealers.com",
      "media.istockphoto.com",
      "cdn.jsdelivr.net",
      "cdn.worldvectorlogo.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/blogs/cgi-ads-agency-in-delhi-ai-powered-cgi-advertising",
        destination: "/services/graphic-designing",
        permanent: true, // ✅ 301 redirect
      },
      {
        source:
          "/blogs/social-media-marketing-agency-in-delhi-bigwig-media-digital",
        destination: "/services/social-media-marketing",
        permanent: true, // ✅ 301 redirect
      },
      {
        source:
          "/blogs/social-media-optimization-agency-in-delhi-bigwig-media-digital",
        destination: "/services/social-media-optimization",
        permanent: true, // ✅ 301 redirect
      },
      {
        source:
          "/blogs/performance-marketing-agency-in-delhi-for-business-growth",
        destination: "/services/performance-marketing",
        permanent: true, // ✅ 301 redirect
      },
      {
        source:
          "/blogs/content-marketing-agency-in-delhi-bigwig-media-digital-services",
        destination: "/services/content-marketing",
        permanent: true,
      },
      {
        source:
          "/blogs/website-designing-development-company-in-delhi-bigwig-media-digital",
        destination: "/services/website-design-development",
        permanent: true,
      },
      {
        source:
          "/blogs/leading-graphic-designing-agency-in-delhi-expert-company-bigwig-media-digital",
        destination: "/services/graphic-designing",
        permanent: true,
      },
      {
        source:
          "/blogs/email-marketing-agency-in-delhi-driving-roi-for-businesses",
        destination: "/services/email-marketing",
        permanent: true,
      },
      {
        source: "/blogs/seo-agency-in-delhi-driving-measurable-digital-growth",
        destination: "/services/search-engine-optimization",
        permanent: true,
      },
      {
        source: "/blogs/ORM-agency-in-delhi-building-trust-and-brand-value",
        destination: "/services/online-reputation-management",
        permanent: true,
      },
      {
        source: "/blogs/affiliate-marketing-agency-in-delhi-company-services",
        destination: "/services/affiliate-marketing",
        permanent: true,
      },
      {
        source: "/blogs/public-relations-agency-in-delhi-bigwig-media-digital",
        destination: "/services/search-engine-optimization",
        permanent: true,
      },
      {
        source:
          "/blogs/influencer-marketing-agency-in-delhi-bigwig-media-digital",
        destination: "/services/influencer-marketing",
        permanent: true,
      },
      {
        source: "/blogs/landing-page-optimization-agency-in-delhi",
        destination: "/services/website-design-development",
        permanent: true,
      },
      {
        source:
          "/blogs/video-shoot-agency-in-delhi-professional-video-shoot-services",
        destination: "/services/graphic-designing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

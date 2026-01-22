import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "winprofx.com" },
      { protocol: "https", hostname: "riverfront.vercel.app" },
      { protocol: "https", hostname: "www.homesandlandgoa.com" },
      { protocol: "https", hostname: "www.svgrepo.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "pngimg.com" },
      { protocol: "https", hostname: "static.vecteezy.com" },
      { protocol: "https", hostname: "freelogopng.com" },
      { protocol: "https", hostname: "brandlogos.net" },
      { protocol: "https", hostname: "images.seeklogo.com" },
      { protocol: "https", hostname: "www.cablewirefair.com" },
      { protocol: "https", hostname: "static.cdnlogo.com" },
      { protocol: "https", hostname: "i.pinimg.com" },
      { protocol: "https", hostname: "logoeps.com" },
      { protocol: "https", hostname: "www.freelogovectors.net" },
      { protocol: "https", hostname: "static.wikia.nocookie.net" },
      { protocol: "https", hostname: "www.opju.ac.in" },
      { protocol: "https", hostname: "bottindia.com" },
      { protocol: "https", hostname: "www.integratedlognet.com" },
      { protocol: "https", hostname: "www.stellarbinge.com" },
      { protocol: "https", hostname: "www.khalsapropertydealers.com" },
      { protocol: "https", hostname: "media.istockphoto.com" },
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
      { protocol: "https", hostname: "cdn.worldvectorlogo.com" },
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
      {
        source: "/services/website-design-development",
        destination: "/services/website-development-company-in-delhi",
        permanent: true, // 301
      },
    ];
  },
};

export default nextConfig;

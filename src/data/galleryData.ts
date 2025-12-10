// ==============================
// GALLERY DATA (UNIFIED FORMAT) — UPDATED WITH SEO TYPE
// ==============================

import { StaticImageData } from "next/image";

// ---------- IMPORT WEBSITE IMAGES ----------
import granth from "../../Assets/gallery/granth.png";
import cft from "../../Assets/gallery/cft.png";
import iln from "../../Assets/gallery/iln.png";
import binge from "../../Assets/gallery/binge.png";
import billion from "../../Assets/gallery/billion.png";
import eipl from "../../Assets/gallery/eipl.png";
import dbn from "../../Assets/gallery/dbn.png";
import pearls from "../../Assets/gallery/pearls.png";

// ---------- IMPORT REEL ITEMS ----------
import { reelItems } from "./reelData";

// ---------- IMPORT POST IMAGES ----------
import cgi1 from "../../Assets/gallery/cgi1.png";
import cgi2 from "../../Assets/gallery/cgi2.png";
import cgi3 from "../../Assets/gallery/cgi3.png";
import cgi4 from "../../Assets/gallery/cgi4.png";
import cgi5 from "../../Assets/gallery/ChatGPT Image Jun 3, 2025, 04_36_48 PM.png";
import cgi6 from "../../Assets/gallery/ChatGPT Image Jun 3, 2025, 06_27_27 PM.png";
import cgi7 from "../../Assets/gallery/ChatGPT Image May 31, 2025, 02_57_46 PM.png";
import static1 from "../../Assets/gallery/BigWig Static Post.png";
import static2 from "../../Assets/gallery/BigWig Static Post (1).png";
import static3 from "../../Assets/gallery/Bigwig Static Post (2).png";
import static4 from "../../Assets/gallery/BigWig Static Post (3).png";
import static5 from "../../Assets/gallery/BigWig Static Post (4).png";
import static6 from "../../Assets/gallery/BigWig Static Post (5).png";

// =====================================
// UNIFIED TYPE FOR ALL GALLERY ITEMS (now includes SEO)
// =====================================
export type WorkItem =
  | {
      id: string;
      type: "post"; // Creative/AI/CGI images
      category: "social-media";
      src: string | StaticImageData;
      alt: string;
      socials: { platform: string; url: string }[];
    }
  | {
      id: string;
      type: "reel"; // YouTube shorts
      category: "social-media";
      title: string;
      youtubeId: string;
      link: string;
    }
  | {
      id: string;
      type: "website"; // Website previews
      category: "websites";
      title: string;
      image: string | StaticImageData;
      url: string;
    }
  | {
      id: string;
      type: "seo"; // SEO case study / reports / screenshots
      category: "seo";
      title: string;
      description?: string;
      image?: string | StaticImageData; // optional screenshot or graph
      url?: string; // link to case study or PDF
    };

// =====================================
// SOCIAL LINKS (USED IN POST ITEMS)
// =====================================
const socialLinks = [
  {
    platform: "instagram",
    url: "https://www.instagram.com/bigwigmediadigital",
  },
  {
    platform: "facebook",
    url: "https://www.facebook.com/people/Bigwig-Digital/61575340735142/",
  },
  { platform: "twitter", url: "https://x.com/bigwig_digital" },
  {
    platform: "linkedin",
    url: "https://www.linkedin.com/company/bigwig-digital/",
  },
];

// =====================================
// POST ITEMS (STATIC + CGI)
// =====================================
const postSources = [
  { src: cgi1, alt: "CGI Post" },
  { src: cgi2, alt: "CGI Post" },
  { src: cgi3, alt: "CGI Post" },
  { src: cgi4, alt: "CGI Post" },
  { src: cgi5, alt: "CGI Post" },
  { src: cgi6, alt: "CGI Post" },
  { src: cgi7, alt: "CGI Post" },
  { src: static1, alt: "Creative Post" },
  { src: static2, alt: "Creative Post" },
  { src: static3, alt: "Creative Post" },
  { src: static4, alt: "Creative Post" },
  { src: static5, alt: "Creative Post" },
  { src: static6, alt: "Creative Post" },
];

// Convert to unified structure
export const postItemsUnified: WorkItem[] = postSources.map((p, index) => ({
  id: `post-${index}`,
  type: "post",
  category: "social-media",
  src: p.src,
  alt: p.alt,
  socials: socialLinks,
}));

// =====================================
// REEL ITEMS (YOUTUBE SHORTS)
// =====================================
export const reelItemsUnified: WorkItem[] = reelItems.map((r, index) => ({
  id: `reel-${index}`,
  type: "reel",
  category: "social-media",
  title: r.title,
  youtubeId: r.youtubeId,
  link: r.link,
}));

// =====================================
// WEBSITE ITEMS
// =====================================
export const websiteItemsUnified: WorkItem[] = [
  {
    id: "web-1",
    type: "website",
    category: "websites",
    title: "Granth Dream Homes",
    image: granth,
    url: "",
  },
  {
    id: "web-2",
    type: "website",
    category: "websites",
    title: "Close Friends Traders",
    image: cft,
    url: "",
  },
  {
    id: "web-3",
    type: "website",
    category: "websites",
    title: "Integrated Logistics Network",
    image: iln,
    url: "",
  },
  {
    id: "web-4",
    type: "website",
    category: "websites",
    title: "Steller Binge",
    image: binge,
    url: "",
  },
  {
    id: "web-5",
    type: "website",
    category: "websites",
    title: "Billion Dollar FX",
    image: billion,
    url: "",
  },
  {
    id: "web-6",
    type: "website",
    category: "websites",
    title: "Ethical Infrastructures Pvt Ltd",
    image: eipl,
    url: "",
  },
  {
    id: "web-7",
    type: "website",
    category: "websites",
    title: "Destiny By Numberrs",
    image: dbn,
    url: "",
  },
  {
    id: "web-8",
    type: "website",
    category: "websites",
    title: "Pearls India",
    image: pearls,
    url: "",
  },
];

// =====================================
// SEO ITEMS — currently EMPTY (add real data below)
// =====================================
// You currently mentioned you don't have SEO data; keep array empty so the SEO tab works.
// To add SEO data later, copy the example and fill values (remove the example or convert to real).
export const seoItemsUnified: WorkItem[] = [
  // Example (commented) — copy/paste and edit when you have real SEO case studies:
  /*
  {
    id: "seo-1",
    type: "seo",
    category: "seo",
    title: "SEO Case Study — Local Bakery",
    description: "Organic traffic +320% in 6 months. Top 3 for 12 target keywords.",
    // image: someImportedScreenshot,
    // url: "https://yourdomain.com/case-study/local-bakery",
  }
  */
];

// =====================================
// FINAL EXPORT: ALL WORK ITEMS
// =====================================
export const allWorkItems: WorkItem[] = [
  ...postItemsUnified,
  ...reelItemsUnified,
  ...websiteItemsUnified,
  ...seoItemsUnified, // included so the SEO tab exists (empty until you add items)
];

// =====================================
// FILTER CATEGORIES
// =====================================
export const categories = [
  { key: "all", label: "ALL" },
  { key: "social-media", label: "SOCIAL MEDIA" },
  { key: "seo", label: "SEO" }, // empty (future)
  { key: "websites", label: "WEBSITES" },
] as const;

export type CategoryKey = (typeof categories)[number]["key"];

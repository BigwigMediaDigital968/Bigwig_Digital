import type { Metadata } from "next";
import Script from "next/script";

import Blogs from "../../components/Blog";
import CaseCard from "../../components/CaseCard";
import Client from "../../components/Clients";
import Hero from "../../components/Hero";
import ImageSlider from "../../components/ImageSlider";
import Nav from "../../components/Nav";
import Partners from "../../components/Partners";
import Stats from "../../components/Stats";
import FAQ from "../../components/Faq";
import Footer from "../../components/Footer";
import ServicesPage from "../../components/Services";
import RainbowSteps from "../../components/RainbowSteps";
import OfferPopup from "../../components/OfferPopup";
import FloatingButton from "../../components/FloatingButton";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Delhi | Bigwig Media Digital",
  description:
    "Bigwig Media Digital is a leading digital marketing agency in Delhi offering SEO, social media marketing, website development & performance marketing solutions.",
  alternates: {
    canonical: "https://www.bigwigmediadigital.com/",
  },
  openGraph: {
    title: "Digital Marketing Agency in Delhi | Bigwig Media Digital",
    description:
      "Bigwig Media Digital is a leading digital marketing agency in Delhi offering SEO, social media marketing, website development & performance marketing solutions.",
    url: "https://www.bigwigmediadigital.com/",
    siteName: "Bigwig Media Digital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dyum0r6gf/image/upload/v1770032818/WhatsApp_Image_2026-02-02_at_4.12.04_PM_ac0qj8.jpg",
      },
    ],
  },
};

const faqs = [
  {
    question: "How to choose a digital marketing agency for small businesses?",
    answer:
      "To choose the right agency, look for proven portfolio and case studies, transparent pricing, clear marketing strategy, experience in small business marketing, and expertise in SEO, PPC, social media marketing and website design. Bigwig Media Digital provides customized marketing plans that fit small-business budgets and goals.",
  },
  {
    question:
      "How does digital marketing help businesses promote their services and products?",
    answer:
      "Digital marketing increases brand visibility through SEO, generates traffic and leads via Google Ads and Facebook Ads, boosts engagement with social media marketing, improves conversions using landing pages and email marketing, and builds trust through content and reviews.",
  },
  {
    question:
      "What are the benefits of hiring a digital marketing company in India?",
    answer:
      "Hiring a digital marketing company in India provides cost-effective solutions, access to skilled digital marketers, expertise in SEO and paid ads, better ROI with affordable packages, and faster turnaround with 24/7 support.",
  },
  {
    question:
      "What are the best and result-oriented digital marketing activities?",
    answer:
      "Top result-driven activities include SEO, Google Ads, social media marketing, content marketing, website design and CRO, email automation, branding and online reputation management.",
  },
  {
    question: "What is the process for starting a project with your agency?",
    answer:
      "Our process includes initial consultation, business research and competitor analysis, strategy planning, creating a customized marketing plan, campaign execution, and regular performance reporting with optimization.",
  },
  {
    question: "How do you measure the success of your campaigns?",
    answer:
      "We track website traffic, keyword rankings, leads and conversions, CTR, CPC, CPA, ROI, and social media growth using tools like Google Analytics, Search Console, SEMrush and Meta Insights.",
  },
  {
    question: "Why should I hire you for digital marketing?",
    answer:
      "Bigwig Media Digital offers customized and affordable marketing solutions, experienced SEO and PPC experts, full transparency, data-driven strategies and long-term ROI-focused growth.",
  },
  {
    question: "Why are digital marketing agencies important?",
    answer:
      "Digital marketing agencies bring modern expertise, advanced tools, strategic planning, professional campaign management and consistent brand growth while saving businesses time.",
  },
  {
    question: "How long does it take to see results from digital marketing?",
    answer:
      "SEO typically takes 3–6 months, paid ads can generate results immediately, and social media marketing shows growth within 30–60 days with consistent efforts.",
  },
  {
    question: "How can I achieve the best SEO services in a budget?",
    answer:
      "You can achieve budget-friendly SEO by choosing a reliable agency offering keyword optimization, on-page SEO, technical fixes and local SEO strategies that deliver maximum impact at minimal cost.",
  },
  {
    question:
      "How can Bigwig Media Digital help increase your website traffic?",
    answer:
      "We increase traffic through SEO, content marketing, social media promotion, paid advertising, keyword targeting, backlink building, Google Business optimization and performance-driven campaigns.",
  },
];

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question.trim(),
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.trim(),
      },
    })),
  };

  return (
    <>
      {/* FAQ JSON-LD ONLY FOR HOME PAGE */}
      <Script
        id="homepage-faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <Nav />
      <Hero />
      <Partners />
      <Stats />
      <Client />
      <RainbowSteps />
      <ServicesPage />
      <ImageSlider />
      <CaseCard />
      <Blogs />
      <FAQ />
      {/* <OfferPopup /> */}
      <FloatingButton />
      <Footer />
    </>
  );
}

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
import NewHero from "../../components/HeroNew";

export const metadata: Metadata = {
  title: "Best Digital Marketing Agency in Delhi | Bigwig Media Digital",
  description:
    "Top-rated Digital Marketing Agency in Delhi. SEO, PPC, SMM & Web Dev. Google Partner | 8+ Years | 500+ Clients. Get a Free Strategy Session!",
  keywords:
    "digital marketing agency in Delhi, best digital marketing company Delhi, SEO company in Delhi, social media marketing agency Delhi, website development company Delhi, performance marketing agency Delhi, online marketing services Delhi",
  alternates: {
    canonical: "https://www.bigwigmediadigital.com/",
  },
  openGraph: {
    title: "Best Digital Marketing Agency in Delhi | Bigwig Media Digital",
    description:
      "Top-rated Digital Marketing Agency in Delhi. SEO, PPC, SMM & Web Dev. Google Partner | 8+ Years | 500+ Clients. Get a Free Strategy Session!",
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
      "To choose the right digital marketing agency in Delhi, look for a proven portfolio, transparent pricing, and a clear ROI-driven marketing strategy. The agency should have experience in small business digital marketing and expertise in SEO, PPC, social media marketing, and website development. Bigwig Media Digital, a trusted digital marketing agency in Delhi, provides customized marketing plans tailored to small-business budgets and growth goals.",
  },
  {
    question:
      "How does digital marketing help businesses promote their services and products?",
    answer:
      "A professional digital marketing agency in Delhi helps businesses increase brand visibility through SEO, generate traffic and leads through Google Ads and Meta Ads, improve engagement via social media marketing, and boost conversions using landing pages and email marketing. Strategic online marketing services ensure your products and services reach the right audience at the right time.",
  },
  {
    question:
      " What are the benefits of hiring a digital marketing company in India?",
    answer:
      "Hiring a digital marketing company in India offers cost-effective marketing solutions, access to skilled SEO experts and PPC specialists, and better ROI through scalable packages. Agencies like Bigwig Media Digital provide professional SEO services, Google Ads management, and social media marketing at competitive pricing with dedicated support.",
  },
  {
    question:
      "What are the best and result-oriented digital marketing activities?",
    answer:
      "The most result-driven digital marketing services include Search Engine Optimization (SEO), Google Ads (PPC), social media marketing, content marketing, website design with conversion rate optimization, email marketing automation, and online reputation management. These activities improve rankings, traffic, brand authority, and overall conversions.",
  },
  {
    question: "What is the process for starting a project with your agency?",
    answer:
      "As a structured digital marketing agency in Delhi, our process includes an initial consultation, competitor analysis, strategic planning, customized marketing plan development, campaign execution across SEO and performance marketing, and regular reporting with optimization. We ensure transparency and consistent performance improvement.",
  },
  {
    question: "How do you measure the success of your campaigns?",
    answer:
      "As a data-driven performance marketing agency, we measure website traffic, keyword rankings, leads and conversions, CTR, CPC, CPA, ROI, and social media engagement. Using tools like Google Analytics, Search Console, SEMrush, and Meta Insights, we provide detailed reports and actionable insights.",
  },
  {
    question: "Why should I hire you for digital marketing?",
    answer:
      "Bigwig Media Digital is a trusted digital marketing agency in Delhi offering customized and affordable digital marketing solutions. Our experienced team specializes in SEO, PPC, social media marketing, and content strategy. We focus on transparency, data-driven execution, and long-term ROI-driven growth.",
  },
  {
    question: "Why are digital marketing agencies important?",
    answer:
      "A professional digital marketing agency in Delhi provides expertise in modern marketing strategies, access to advanced analytics tools, strategic campaign management, and consistent brand growth. Businesses save time and achieve better ROI with expert online marketing support.",
  },
  {
    question: "How long does it take to see results from digital marketing?",
    answer:
      "SEO services typically take 3–6 months to show strong organic growth, especially in competitive markets like Delhi. Paid ads such as Google Ads can generate results quickly, while social media marketing usually shows measurable growth within 30–60 days with consistent efforts.",
  },
  {
    question: "How can I achieve the best SEO services in a budget?",
    answer:
      "You can achieve affordable SEO services by choosing a reliable SEO company in Delhi like Bigwig Media Digital. Our budget-friendly SEO packages include keyword optimization, technical SEO, local SEO services, and authority building strategies to help you rank higher without overspending.",
  },
  {
    question:
      "How can Bigwig Media Digital help increase your website traffic?",
    answer:
      "As a performance-driven digital marketing agency in Delhi, Bigwig Media Digital increases website traffic through strategic SEO, content marketing, paid advertising campaigns, social media promotion, Google Business Profile optimization, and technical website improvements. Our data-backed approach ensures steady organic growth and qualified leads.",
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
      {/* <NewHero /> */}
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

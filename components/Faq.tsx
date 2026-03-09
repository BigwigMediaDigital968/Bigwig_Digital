"use client";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import faq_img from "../Assets/faq-img.png";
import Image from "next/image";

type Faq = {
  question: string;
  answer: string;
};

const faqs: Faq[] = [
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

const ToggleFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      // Delay to ensure DOM is mounted
      setTimeout(() => {
        const id = window.location.hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          const offset = 80;
          const sectionTop =
            el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: sectionTop, behavior: "smooth" });
        }
      }, 100);
    }
  }, []); // no Next.js hooks needed

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-[var(--color1)] text-white">
      <div className="mb-6 w-11/12 md:w-5/6 mx-auto">
        <p className="text-[var(--color5)] text-lg font-semibold border-b w-fit  mb-3 tracking-widest">
          Your Questions About Digital Marketing in Delhi, Answered
        </p>

        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white drop-shadow-lg">
          FAQs
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-evenly py-3 items-start ">
        <div className="md:flex items-start hidden">
          <Image
            src={faq_img}
            alt="FAQ Illustration"
            className="w-80 max-w-sm"
            draggable="false"
          />
        </div>
        <div className="space-y-5 pt-10 px-5">
          {faqs.map((faq, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-50 border text-gray-900 border-gray-700 rounded-lg pl-12 pr-6 py-3 relative max-w-xl w-full">
                <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold border-2 border-[var(--color5)]">
                  {index + 1}
                </div>

                <button
                  className="w-full text-left flex items-center justify-between cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-base font-medium">{faq.question}</h3>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Smooth slide-down */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out`}
                  style={{
                    maxHeight: openIndex === index ? "500px" : "0px",
                  }}
                >
                  <div className="pt-2 text-gray-700 whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToggleFAQ;

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
    answer: `To choose the right agency, look for:
• Proven portfolio and case studies  
• Transparent pricing 
• Clear marketing strategy  
• Experience in small business digital marketing 
• Expertise in SEO, PPC, social media marketing & website design
  
An agency like Bigwig Media Digital provides customized marketing plans that fit small-business budgets and goals.
    `,
  },
  {
    question:
      "How does digital marketing help businesses promote their services and products?",
    answer: `Digital marketing helps businesses by increasing:
• Brand visibility through SEO  
• Traffic and leads through Google Ads & Facebook Ads  
• Engagement through social media marketing  
• Conversions using landing pages and email marketing  
• Trust and credibility through content & reviews

It ensures your products/services reach the right audience at the right time.
    `,
  },
  {
    question:
      " What are the benefits of hiring a digital marketing company in India?",
    answer: `Hiring a digital marketing company in India provides:
• Cost-effective marketing solutions  
• Access to skilled digital marketers  
• Expertise in SEO, Google Ads, social media management  
• Better ROI with affordable packages  
• 24/7 support and faster turnaround

Indian agencies like Bigwig Media Digital offer top-quality services at competitive rates.  
    `,
  },
  {
    question:
      "What are the best and result-oriented digital marketing activities?",
    answer: `Top result-driven activities include:
• Search Engine Optimization (SEO)  
• Google Ads (PPC Advertising)  
• Social Media Marketing & Management  
• Content Marketing  
• Website Design and CRO  
• Email Marketing Automation  
• Branding & Online Reputation Management (ORM)

These improve rankings, traffic, brand presence, and conversions.
    `,
  },
  {
    question: "What is the process for starting a project with your agency?",
    answer: `Our process includes:
• Initial consultation  
• Business research & competitor analysis  
• Strategy planning based on your goals  
• Creating a customized marketing plan  
• Campaign execution  
• Weekly/monthly reporting & optimization

We ensure complete transparency and consistent performance improvements.

    `,
  },
  {
    question: "How do you measure the success of your campaigns?",
    answer: `We track:
• Website traffic  
• Keyword rankings  
• Leads & conversions  
• CTR, CPC & CPA  
• ROI tracking  
• Social media growth and engagement

Using tools like Google Analytics, Search Console, SEMrush, and Meta Insights, we
provide detailed performance reports.
    `,
  },
  {
    question: "Why should I hire you for digital marketing?",
    answer: `You should choose Bigwig Media Digital because we offer:
• Customized and affordable digital marketing solutions  
• Experienced team in SEO, PPC, SMM, and content marketing  
• 100% transparency and weekly performance reports  
• Data-driven strategies and proven results 
• Excellent communication and dedicated support

We focus on long-term growth and ROI, not just clicks.

    `,
  },
  {
    question: "Why are digital marketing agencies important?",
    answer: `Digital marketing agencies bring:
• Expertise in modern marketing trends  
• Access to advanced tools and analytics  
• Strategic planning for higher ROI  
• Professional management of campaigns 
• Consistent growth and brand building

Businesses save time and get better results with agency support.
    `,
  },
  {
    question: "How long does it take to see results from digital marketing?",
    answer: `SEO can take 3–6 months, while paid ads like Google Ads deliver results instantly. Social media marketing typically shows growth within 30–60 days with consistent efforts.  
    `,
  },
  {
    question: "How can I achieve the best SEO services in a budget?",
    answer: `You can achieve the best SEO services on a budget by choosing a reliable and affordable agency like Bigwig Media Digital. We offer cost-effective SEO packages that include keyword optimization, on-page SEO, technical fixes, and local SEO - helping you rank higher on Google without overspending. Our budget-friendly plans focus on high-impact SEO strategies, ensuring maximum results at minimal cost.
    `,
  },
  {
    question:
      "How can Bigwig Media Digital help increase your website traffic?",
    answer: `Bigwig Media Digital increases your website traffic through a strategic mix of SEO, content marketing, social media promotion, paid ads, and technical optimization. We focus on high-impact activities like keyword targeting, on-page SEO, quality backlinks, Google Business Profile optimization, and performance-driven campaigns. Our data-backed approach ensures steady growth in organic traffic, higher rankings, and more qualified visitors to your website.`,
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
          FAQs
        </p>

        <h1 className="text-3xl md:text-4xl font-bold leading-tight text-[var(--color4)] drop-shadow-lg">
          Helping You Make Smarter Decisions
        </h1>
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
                  className="w-full text-left flex items-center justify-between"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-base font-medium">{faq.question}</span>
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

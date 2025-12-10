"use client";
// src/pages/FAQ.tsx
import { useState } from "react";
import { ChevronDown } from "lucide-react"; // Optional: install lucide-react icons
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";

const faqData = [
  {
    question:
      "Who can benefit from BigWig Digital’s digital marketing services?",
    answer: `<strong> <a href="https://www.bigwigmediadigital.com/" class="text-[var(--color5)]  font-medium">BigWig Digital</a></strong>’s digital marketing services are perfect for startups, small businesses, and growing brands looking to increase online visibility, leads, and conversions through expert strategies.`,
  },
  {
    question: "Do you offer digital marketing services outside India?",
    answer:
      "Yes, BigWig Digital is a global digital marketing agency offering services like SEO, PPC advertising, and content marketing to clients across India and overseas.",
  },
  {
    question:
      "Can I choose individual digital marketing services instead of a full package?",
    answer:
      "Absolutely! At BigWig Digital, you can select specific services like SEO services, social media marketing, or PPC campaigns based on your business goals.",
  },
  {
    question: "What industries does your digital marketing agency work with?",
    answer:
      "We’ve delivered digital marketing services to industries like real estate, education, e-commerce, fashion, healthcare, and more. Our team builds tailored digital marketing strategies for every niche",
  },
  {
    question: "Do you offer website redesign or website development services?",
    answer:
      "Yes, BigWig Digital provides website designing and development services along with SEO-friendly website revamps to enhance user experience and search rankings.",
  },
  {
    question: "Do you manage PPC advertising campaigns?",
    answer:
      "Yes, our team at BigWig Digital runs highly targeted PPC advertising campaigns on platforms like Google Ads and Facebook Ads to generate quality leads for your business",
  },
  {
    question:
      "What is the cost of digital marketing services at BigWig Digital?",
    answer:
      "We offer budget-friendly digital marketing service packages that vary depending on your business size, goals, and selected services like SEO, content marketing, or paid ads",
  },
  {
    question:
      "Do you provide monthly digital marketing plans or one-time services?",
    answer:
      "BigWig Digital offers both monthly digital marketing plans and one-time project services like PPC advertising, website optimization, or social media campaigns.",
  },
  {
    question: "Can BigWig Digital help with email marketing services?",
    answer:
      "Yes, we offer complete digital marketing solutions including email marketing campaigns to boost engagement, retention, and sales.",
  },
  {
    question:
      "Do you provide branding and logo design along with digital marketing?",
    answer:
      "Yes, as a full-service digital marketing agency, we also offer logo design, brand identity setup, and basic graphic design services to help you build a strong online presence.",
  },
  {
    question: " Is content writing part of your digital marketing services?",
    answer:
      "Yes, BigWig Digital provides content marketing services, including writing SEO-optimized content for blogs, websites, ads, and social media.",
  },
  {
    question: "Will I get a dedicated digital marketing expert for my project?",
    answer:
      "Yes, every client at BigWig Digital is assigned a dedicated digital marketing manager to ensure smooth communication and project tracking.",
  },
  {
    question: "Can you audit my existing SEO and digital marketing strategy?",
    answer:
      "Yes, we offer free SEO audits and a detailed analysis of your current digital marketing strategy to find improvement areas and growth opportunities.",
  },
  {
    question:
      " Do you perform competitor analysis as part of your digital marketing strategy?",
    answer:
      "Yes, competitor research is a key part of our digital marketing strategy. We study your competitors to develop campaigns that outperform them in SEO, PPC, and social media marketing.",
  },
  {
    question:
      "What is the contract length for your digital marketing services?",
    answer:
      "At BigWig Digital, we offer flexible contract terms: monthly, quarterly, or project-based, based on the digital marketing services you choose.",
  },
  {
    question: "Can I be involved in the digital marketing process?",
    answer:
      "Of course! At BigWig Digital, we collaborate closely with clients during strategy planning, content creation, and campaign execution to match their vision.",
  },
  {
    question: "How do you maintain quality in your digital marketing services?",
    answer:
      "Our digital marketing agency uses top tools, regular performance checks, and result-driven strategies to deliver high-quality SEO services, content, and ad campaigns.",
  },
  {
    question: "Can you work with my in-house marketing team?",
    answer:
      "Yes, BigWig Digital can coordinate with your in-house team to support specific digital marketing tasks like SEO, social media, or paid ads.",
  },
  {
    question: "Is it possible to stop or pause digital marketing services?",
    answer:
      "Yes, our digital marketing service plans are flexible. You can pause or stop services with a short notice period, as agreed.",
  },
  {
    question: "How can I contact BigWig Digital to get started?",
    answer:
      "You can reach BigWig Digital through our contact page, email, or phone. We’ll schedule a consultation to understand your needs and start building your custom digital marketing strategy.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-[var(--color1)] text-white min-h-screen">
      <Nav />
      <title>FAQs - BigWig Digital</title>
      <meta
        name="description"
        content="Frequently asked questions about our services."
      />
      <link rel="canonical" href="https://www.bigwigmediadigital.com/faq" />

      <div className="md:w-3/4 w-11/12 mx-auto py-12">
        <h1 className="text-center text-3xl md:text-4xl font-bold mb-10 text-[var(--color5)]">
          Frequently Asked Questions
        </h1>

        <div className="space-y-5">
          {faqData.map((item, index) => (
            <div
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="cursor-pointer rounded-xl p-5 
                         backdrop-blur-md bg-white/10
                         border border-white/10 
                         hover:bg-white/20 transition-all duration-300"
            >
              {/* Question Row */}
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold text-[var(--color5)] drop-shadow">
                  {item.question}
                </p>

                <ChevronDown
                  className={`w-5 h-5 text-white transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p
                  className="text-gray-200 text-base leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                ></p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;

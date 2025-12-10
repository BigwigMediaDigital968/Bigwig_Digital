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
    question: "What services do you offer?",
    answer:
      "We offer a wide range of digital marketing services including SEO, content marketing, social media management, PPC advertising, and website optimization.",
  },
  {
    question: "How can digital marketing help my business?",
    answer:
      "Digital marketing helps increase your online visibility, drive targeted traffic to your website, and build lasting customer relationships through data-driven strategies.",
  },
  {
    question: "Do you create custom strategies for each business?",
    answer:
      "Yes, we tailor our strategies to fit the unique needs and goals of each client, ensuring maximum impact and return on investment.",
  },
  {
    question: "Can you help improve my website's SEO?",
    answer:
      "Absolutely! Our team specializes in optimizing website structure, content, and keywords to boost your rankings on search engines and drive organic traffic.",
  },
  {
    question: "Do you offer social media management services?",
    answer:
      "Yes, we manage and optimize social media accounts to increase engagement, grow your audience, and drive traffic through organic and paid strategies.",
  },
  {
    question: "What is the process for starting a project with your agency?",
    answer:
      "Getting started is easy! Reach out to us for a consultation, and we’ll work with you to develop a custom digital marketing plan tailored to your business needs.",
  },
  {
    question: "How do you measure the success of your campaigns?",
    answer:
      "We track key performance indicators (KPIs) like website traffic, conversion rates, engagement, and ROI to measure and optimize the success of our campaigns.",
  },
  {
    question: "Do you provide analytics and reporting?",
    answer:
      "Yes, we provide detailed analytics and regular reports to track the progress of your campaigns and ensure you are always informed of the results.",
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
    <section id="faq" className="text-white mb-10  w-11/12 md:w-5/6 mx-auto ">
      <h2 className="text-5xl font-bold text-center mb-2 text-white">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col md:flex-row justify-evenly py-3 items-start">
        <div className="md:flex items-start hidden">
          <Image
            src={faq_img}
            alt="FAQ Illustration"
            className="w-80 max-w-sm"
            draggable="false"
          />
        </div>
        <div className="space-y-5 pt-10">
          {faqs.map((faq, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-50 border text-gray-900 border-gray-700 rounded-lg pl-12 pr-6 py-3 relative max-w-xl w-full">
                <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold border-2 border-orange-500">
                  {index + 1}
                </div>

                <button
                  className="w-full text-left flex items-center justify-between"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="pt-2 text-gray-700 transition-all duration-300 ease-in-out">
                    {faq.answer}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToggleFAQ;

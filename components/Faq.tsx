"use client";
import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question:
        "What makes this trading robot different from others in the market?",
      answer:
        "Our Algopips uses advanced AI algorithms with 12 inner indicators and has been tested for 3 years before public release. It adapts to current market conditions and trades 24/7 with consistent profitability.",
    },
    {
      question: "How energy-efficient is this trading system?",
      answer:
        "Our trading system is highly optimized and energy-efficient, designed to run continuously without consuming excessive resources while maintaining peak performance.",
    },
    {
      question: "Is the trading robot suitable for beginners?",
      answer:
        "Zero trading knowledge is required. Our team provides complete setup and ongoing support, making it perfect for beginners who want to start automated trading.",
    },
    {
      question: "What security features does the system offer?",
      answer:
        "We implement advanced security protocols including encrypted connections, secure API integrations, and dedicated account managers to monitor your trading activities 24/7.",
    },
    {
      question: "Can the robot handle continuous, heavy-duty trading?",
      answer:
        "Yes, our robot is designed for continuous operation and can handle multiple trades across various platforms simultaneously without fatigue or performance degradation.",
    },
    {
      question: "What kind of customer support do you offer?",
      answer:
        "We provide 24/7 dedicated expert support with day and night shifts. Our team monitors your auto-trading activities and provides lifetime maintenance and support.",
    },
    {
      question:
        "How does this system contribute to sustainable trading practices?",
      answer:
        "Our system eliminates emotional trading, reduces human errors, and uses calculated strategies that contribute to more sustainable and consistent trading practices over time.",
    },
  ];

  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="flex items-center space-x-3 glass-blue rounded-full px-6 py-3 shadow-blue">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                <span className="text-blue-600 font-bold">FAQ</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
              Got Questions? Find{" "}
              <span className="text-gradient">Answers Here</span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Everything you need to know about our AI-powered trading system
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass-white rounded-2xl overflow-hidden shadow-blue border border-gray-100 hover:border-blue-200 transition-all duration-300"
              >
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-blue-50 transition-colors group"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span className="text-lg font-bold text-gray-900 pr-4 group-hover:text-blue-600 transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-blue-600 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-8 pb-6 border-t border-gray-100">
                    <div className="pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <div className="glass-white rounded-2xl p-8 shadow-blue border border-gray-100">
              <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Our support team is here to help you 24/7
              </p>
              <Link href={"contact"}>
                <button className="btn-gradient text-white font-bold px-8 py-4 rounded-xl shadow-blue hover:shadow-blue-lg transition-all duration-200">
                  Contact Support
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

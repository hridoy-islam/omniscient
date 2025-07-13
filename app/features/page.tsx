"use client";
import BreadCumb from "@/components/BreadCumb";
import Header from "@/components/Header";
import HeaderTop from "@/components/HeaderTop";
import Footer from "@/components/Footer";
import {
  BookOpen,
  Headphones,
  RefreshCw,
  Zap,
  DollarSign,
  Bot,
  Shield,
  Target,
  BarChart3,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";

export default function FeaturesPage() {
  const { openModal } = useModal();
  const features = [
    {
      icon: <Bot className="w-8 h-8 text-blue-600" />,
      title: "Algopips EA System",
      description:
        "The complete Algopips EA ready for quick-installation. Algopips EA comes with a quick-install wizard that will walk you through the simple install and configuration process. No additional skills, tools, or downloads are required. Just one-click the wizard, and let it do the rest!",
      color: "blue",
      stats: "One-Click Setup",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-purple-600" />,
      title: "Quick Strategy Guide",
      description:
        "We've included a detailed guide that will walk you through the best techniques for setting up and using Algopips. We'll show you how to maximize the performance of Algopips with our informative Quick Strategy Guide.",
      color: "purple",
      stats: "Step-by-Step",
    },
    {
      icon: <Headphones className="w-8 h-8 text-indigo-600" />,
      title: "24/7 Quick Response Support",
      description:
        "Our support desk is open 24/7 to answer your questions. We pride ourselves on rapid follow-up often answering questions within one business day.",
      color: "indigo",
      stats: "< 24 Hours",
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-cyan-600" />,
      title: "Lifetime Updates",
      description:
        "As a Algopips customer you will have access to all future updates to Algopips EA free of charge. We're giving you all you need to start trading with Algopips today.",
      color: "cyan",
      stats: "Forever Free",
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: "Precise and Scientific Trading",
      description:
        "Algopips takes human emotion out of the equation. It will flawlessly execute an optimized strategy every second of every session. This is the best way to trade Forex!",
      color: "green",
      stats: "99.9% Accuracy",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-violet-600" />,
      title: "Rapid Market Impulse Trading Levels",
      description:
        "Algopips sets your trades to take advantage of market volatility movement. Each trade can be configured based on your trading strategy.",
      color: "violet",
      stats: "Real-Time Analysis",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-600" />,
      title: "Optimal Money-Management",
      description:
        "Algopips systematically tracks your open trading positions and closes each out at the optimal profit levels.",
      color: "yellow",
      stats: "Smart Exits",
    },
    {
      icon: <Shield className="w-8 h-8 text-pink-600" />,
      title: "Advanced Security Features",
      description:
        "Your trading account is protected with bank-level security protocols, encrypted connections, and secure API integrations for complete peace of mind.",
      color: "pink",
      stats: "Bank-Level Security",
    },
  ];

  const benefits = [
    "Fully automated trading system",
    "No trading experience required",
    "Works 24/7 without supervision",
    "Adapts to market conditions",
    "Multiple currency pair support",
    "Risk management built-in",
    "Real-time performance monitoring",
    "Lifetime customer support",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <BreadCumb
        title="Features"
        subtitle="Discover the powerful features that make Algopips the ultimate automated trading solution"
      />

      {/* Features Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="flex items-center space-x-3 glass-blue rounded-full px-6 py-3 shadow-blue">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <span className="text-blue-600 font-bold">
                  Features Overview
                </span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Features Of{" "}
              <span className="text-gradient">Algopips Software</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the power of advanced AI-driven trading with our
              comprehensive suite of features designed to maximize your trading
              success.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 glass-white rounded-2xl p-4 shadow-blue border border-gray-100 hover:border-blue-200 transition-all duration-300"
              >
                <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-700 font-medium text-sm">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative glass-white rounded-3xl p-8 shadow-blue hover:shadow-blue-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 card-hover"
              >
                {/* Feature Number */}
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-blue">
                  <span className="text-white font-black text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div
                      className={`w-16 h-16 bg-${feature.color}-50 rounded-2xl flex items-center justify-center group-hover:bg-${feature.color}-100 transition-colors`}
                    >
                      {feature.icon}
                    </div>
                  </div>

                  {/* Title & Stats */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex-1 pr-4">
                      {feature.title}
                    </h3>
                    <div className="text-right">
                      <div
                        className={`text-${feature.color}-600 font-bold text-sm`}
                      >
                        {feature.stats}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>

                  {/* Hover Indicator */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center text-blue-600 font-semibold">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span className="text-sm">Available Now</span>
                    </div>
                  </div>
                </div>

                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                Why Choose <span className="text-gradient">Algopips?</span>
              </h2>
              <p className="text-xl text-gray-600">
                See how we compare to traditional trading methods
              </p>
            </div>

            <div className="glass-white rounded-3xl p-8 shadow-blue border border-gray-100">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Manual Trading */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Manual Trading
                  </h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>❌ Requires constant monitoring</li>
                    <li>❌ Emotional decision making</li>
                    <li>❌ Limited trading hours</li>
                    <li>❌ High stress levels</li>
                    <li>❌ Inconsistent results</li>
                  </ul>
                </div>

                {/* Other Robots */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Bot className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Other Robots
                  </h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>⚠️ Complex setup required</li>
                    <li>⚠️ Limited support</li>
                    <li>⚠️ No lifetime updates</li>
                    <li>⚠️ Basic strategies</li>
                    <li>⚠️ High maintenance</li>
                  </ul>
                </div>

                {/* Algopips */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Algopips
                  </h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>✅ One-click installation</li>
                    <li>✅ 24/7 expert support</li>
                    <li>✅ Lifetime free updates</li>
                    <li>✅ Advanced AI strategies</li>
                    <li>✅ Zero maintenance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="glass-blue rounded-3xl p-12 max-w-4xl mx-auto shadow-blue">
              <h3 className="text-4xl font-black text-gray-900 mb-6">
                Ready to Experience These Features?
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join thousands of successful traders who are already using
                Algopips to automate their trading and maximize their profits.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  onClick={() =>
                    openModal({
                      title: "Get Started with AI Trading",
                      subtitle:
                        "Download your trading robot and start your automated trading journey",
                      buttonText: "Start Trading Now",
                      type: "download",
                    })
                  }
                  className="btn-gradient text-white font-bold px-10 py-6 rounded-2xl text-lg shadow-blue-lg hover:shadow-blue group transition-all duration-200"
                >
                  Get Started Now
                  <Zap className="w-6 h-6 ml-3 inline group-hover:scale-110 transition-transform" />
                </button>

                <button
                  onClick={() =>
                    openModal({
                      title: "Get Started with AI Trading",
                      subtitle:
                        "Download your trading robot and start your automated trading journey",
                      buttonText: "Start Trading Now",
                      type: "download",
                    })
                  }
                  className="btn-outline-gradient text-gray-700 hover:text-blue-600 bg-white hover:bg-blue-50 font-bold px-10 py-6 rounded-2xl text-lg transition-all duration-200 group"
                >
                  <Shield className="w-6 h-6 mr-3 inline group-hover:scale-110 transition-transform" />
                  View Live Results
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

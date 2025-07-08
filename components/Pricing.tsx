"use client";
import { Button } from "@/components/ui/button";
import { Check, TrendingUp, Star, Crown } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      title: "Price Discussion",
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      features: [
        "Algopips account Setup",
        "Trader Account Setup",
        "VPS Server Setup",
        "Dedicated Account Manager",
        "24/7 Account Monitor",
        "Life Time Maintenance & Support",
      ],
      popular: false,
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "Price Discussion",
      icon: <Crown className="w-8 h-8 text-purple-600" />,
      features: [
        "Multiple account Setup",
        "Trader Account Setup",
        "VPS Server Setup",
        "Free Buy & Sell Indicator",
        "Free Signals",
        "Dedicated Account Manager",
        "24/7 Account Monitor",
        "Life Time Maintenance & Support",
      ],
      popular: true,
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-purple-50 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="flex items-center space-x-3 glass-blue rounded-full px-6 py-3 shadow-blue">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-bold">PRICING PLAN</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
            Get pricing plans for Hardware &{" "}
            <span className="text-gradient">Software Installation</span> for
            Auto Trading Robot.
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            One Time Installation & Life Time Benefits.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative glass-white rounded-3xl p-8 shadow-blue-lg border transition-all duration-300 card-hover ${
                plan.popular
                  ? "border-purple-200 ring-4 ring-purple-100"
                  : "border-gray-100 hover:border-blue-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-blue flex items-center space-x-2">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${plan.gradient} rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-blue`}
                >
                  {plan.icon}
                </div>
                <h3 className="text-3xl font-black text-gray-900">
                  {plan.title}
                </h3>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center mt-0.5 shadow-blue">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link href={"getstarted"}>
                <Button
                  className={`w-full py-6 rounded-2xl font-bold text-lg transition-all duration-200 ${
                    plan.popular
                      ? "btn-gradient text-white shadow-blue-lg hover:shadow-blue"
                      : "btn-outline-gradient text-gray-700 hover:text-blue-600 bg-white hover:bg-blue-50"
                  }`}
                >
                  Get Started
                </Button>
              </Link>

              {/* Background Glow */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-3xl opacity-50 -z-10"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <div className="glass-blue rounded-2xl p-6 max-w-2xl mx-auto shadow-blue">
            <p className="text-blue-700 font-medium">
              💡 <strong>Note:</strong> All plans include lifetime support and
              free updates. Contact us for custom enterprise solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

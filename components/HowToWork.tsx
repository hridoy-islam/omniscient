"use client";
import { Check, Cog, TrendingUp, Shield, Zap } from "lucide-react";

export default function HowToWork() {
  const features = [
    "Fully Automatic , Setup once and the rest on Autopilot",
    "The most popular forex robots are offered via the MetaTrader 4 platform.",
    "Open and Close trade Automatically",
    "Forex robots do not make order entry errors",
    "Eliminates Human Emotions such as fear and greed",
    "Our EA are coming with money management features and risk management",
    "Forex robots do not get tired",
    "3 Years on testing ( recently decided to sale for public)",
    "Analysis of market data with 12 inner indicators",
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-purple-50 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center justify-center mb-6">
                <div className="flex items-center space-x-3 glass-blue rounded-full px-6 py-3 shadow-blue">
                  <Cog className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-600 font-bold">How It Works</span>
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                How Does{" "}
                <span className="text-gradient">Algopips Software</span> Robot
                Work?
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                A Forex Algopips Robot that works as a fully Automated Forex
                Trading System that executes both Buy, Sell Trade Automatically
                & Close the Trade in Profit. Algopips Software is programmed to
                adapt to the current market conditions as it executes trades on
                both sides of the market 24/7.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center mt-0.5 shadow-blue">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors font-medium">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="relative">
              {/* Main Card */}
              <div className="glass-white rounded-3xl p-8 shadow-blue-lg border border-gray-100">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Trading Dashboard
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-600 font-semibold text-sm">
                      Live
                    </span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-blue-50 rounded-2xl p-4 text-center">
                    <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-black text-blue-600">
                      +24.5%
                    </div>
                    <div className="text-gray-600 text-sm font-medium">
                      Today's Profit
                    </div>
                  </div>
                  <div className="bg-purple-50 rounded-2xl p-4 text-center">
                    <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-black text-purple-600">
                      99.9%
                    </div>
                    <div className="text-gray-600 text-sm font-medium">
                      Success Rate
                    </div>
                  </div>
                </div>

                {/* Activity Feed */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">
                        EUR/USD Buy
                      </span>
                    </div>
                    <span className="text-green-600 font-bold">+$245</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">
                        GBP/USD Sell
                      </span>
                    </div>
                    <span className="text-blue-600 font-bold">+$189</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">
                        USD/JPY Buy
                      </span>
                    </div>
                    <span className="text-purple-600 font-bold">+$156</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 glass-white rounded-2xl p-4 shadow-blue animate-float">
                <Zap className="w-6 h-6 text-yellow-500" />
              </div>

              <div className="absolute -bottom-4 -left-4 glass-white rounded-2xl p-4 shadow-blue animate-float delay-1000">
                <div className="text-indigo-600 font-black text-lg">AI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

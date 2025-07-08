"use client";
import { Check, Bot, BarChart3, Brain, Target } from "lucide-react";

export default function RobotAnalyze() {
  const features = [
    "Robots can trade far more effectively and efficiently than any human",
    "Monitoring multiple trades, across multiple platforms simultaneously",
    "Consistent trading - robots always adhere to the rules you set for the",
    "Order entry achieved in seconds",
    "Instant reaction to stock market fluctuations",
    "Completely unemotional trading",
    "Trading when you can't be online. You sleep, the robot carries on trading",
    "Using a robot that is pre-programmed with specific trading system rules",
    "Automated robots have more capacity to process data than a human being",
    "Robots are not scared to take the risk that you might not want to make",
    "No instinctive or impulsive trading, everything is calculated",
    "Ability to back test to see the accuracy of the robot trader",
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Robot Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main Robot Card */}
              <div className="glass-white rounded-3xl p-8 shadow-blue-lg border border-gray-100">
                {/* Robot Brain Visualization */}
                <div className="text-center mb-8">
                  <div className="relative inline-block">
                    <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center shadow-blue-lg">
                      <Bot className="w-16 h-16 text-white" />
                    </div>
                    {/* Pulse Rings */}
                    <div className="absolute inset-0 w-32 h-32 border-4 border-blue-300 rounded-full animate-ping opacity-20"></div>
                    <div className="absolute inset-0 w-32 h-32 border-4 border-purple-300 rounded-full animate-ping opacity-20 delay-1000"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mt-4">
                    AI Analysis Engine
                  </h3>
                </div>

                {/* Analysis Steps */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-2xl">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        Market Analysis
                      </div>
                      <div className="text-gray-600 text-sm">
                        Real-time data processing
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-2xl">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        AI Decision Making
                      </div>
                      <div className="text-gray-600 text-sm">
                        12 indicators analysis
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-2xl">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        Trade Execution
                      </div>
                      <div className="text-gray-600 text-sm">
                        Automatic buy/sell orders
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 glass-white rounded-2xl p-4 shadow-blue animate-fade-in-up">
                <div className="text-blue-600 font-black text-xl">12</div>
                <div className="text-gray-500 text-sm font-medium">
                  Indicators
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 glass-white rounded-2xl p-4 shadow-blue animate-fade-in-up delay-500">
                <div className="text-green-600 font-black text-xl">24/7</div>
                <div className="text-gray-500 text-sm font-medium">Active</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center justify-center mb-6">
                <div className="flex items-center space-x-3 glass-blue rounded-full px-6 py-3 shadow-blue">
                  <Bot className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-600 font-bold">Auto Analyze</span>
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Robot Will Analyze The Chart Automatically &{" "}
                <span className="text-gradient">Take Trade</span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Buy using the Algopips Software automatic Robot Software
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4 max-h-96 overflow-y-auto pr-4">
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
        </div>
      </div>
    </section>
  );
}

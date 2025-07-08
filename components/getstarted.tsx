"use client";
import { useEffect, useState } from "react";
import type React from "react";

import { Button } from "@/components/ui/button";
import {
  Download,
  CheckCircle,
  Bot,
  Sparkles,
  User,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Zap,
} from "lucide-react";

export default function GetStarted() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          country: "",
          message: "",
        });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const features = [
    { icon: <Zap className="w-4 h-4" />, text: "Instant Download" },
    { icon: <Bot className="w-4 h-4" />, text: "AI-Powered Trading" },
    { icon: <CheckCircle className="w-4 h-4" />, text: "Setup Guide Included" },
    { icon: <Sparkles className="w-4 h-4" />, text: "24/7 Support" },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-20"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100 to-transparent"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-primary rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-12 h-12 bg-gradient-secondary rounded-full opacity-10 animate-float delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Success Message */}
          {isSubmitted && (
            <div className="mb-12 glass-white rounded-3xl p-8 text-center shadow-blue-lg border border-green-200">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-green-600 mb-4">
                Thank You!
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Your download will begin shortly. We'll also send you setup
                instructions and exclusive trading tips via email.
              </p>
              <div className="mt-6 flex items-center justify-center space-x-4">
                <div className="flex items-center space-x-2 text-green-600">
                  <Download className="w-5 h-5" />
                  <span className="font-medium">Download Starting...</span>
                </div>
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Information */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center justify-center mb-6">
                  <div className="flex items-center space-x-3 glass-blue rounded-full px-6 py-3 shadow-blue">
                    <Bot className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-600 font-bold">Get Started</span>
                  </div>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                  Download Your{" "}
                  <span className="text-gradient">AI Trading Robot</span>
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Get instant access to our powerful trading robot. Fill out the
                  form to download your AI trading assistant and start your
                  automated trading journey today.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 glass-white rounded-2xl p-4 shadow-blue border border-gray-100"
                  >
                    <div className="w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center">
                      <span className="text-blue-600">{feature.icon}</span>
                    </div>
                    <span className="text-gray-700 font-medium text-sm">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="glass-blue rounded-3xl p-6 shadow-blue">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-black text-blue-600 mb-1">
                      10K+
                    </div>
                    <div className="text-gray-600 text-sm font-medium">
                      Downloads
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-purple-600 mb-1">
                      99.9%
                    </div>
                    <div className="text-gray-600 text-sm font-medium">
                      Success Rate
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-indigo-600 mb-1">
                      24/7
                    </div>
                    <div className="text-gray-600 text-sm font-medium">
                      Support
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="glass-white rounded-3xl p-8 shadow-blue-lg border border-gray-100">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Start Your Download
                </h3>
                <p className="text-gray-600">
                  Fill out the form below to get instant access
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-900 font-medium mb-2"
                  >
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Email and Phone Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-900 font-medium mb-2"
                    >
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-900 font-medium mb-2"
                    >
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>
                </div>

                {/* City and Country Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-gray-900 font-medium mb-2"
                    >
                      <MapPin className="w-4 h-4 inline mr-2" />
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your city"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="country"
                      className="block text-gray-900 font-medium mb-2"
                    >
                      <MapPin className="w-4 h-4 inline mr-2" />
                      Country *
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your country"
                      required
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-900 font-medium mb-2"
                  >
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your trading goals and experience..."
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading || isSubmitted}
                  className="w-full btn-gradient text-white font-bold py-6 rounded-2xl text-lg shadow-blue-lg hover:shadow-blue disabled:opacity-50 disabled:cursor-not-allowed group transition-all duration-200"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                      Processing Download...
                    </div>
                  ) : isSubmitted ? (
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 mr-3" />
                      Download Complete!
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Download className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                      Download AI Trading Robot
                    </div>
                  )}
                </Button>

                {/* Security Notice */}
                <div className="text-center pt-4">
                  <p className="text-gray-500 text-sm leading-relaxed">
                    🔒 Your information is secure and will only be used to
                    provide you with trading support and updates. No spam,
                    unsubscribe anytime.
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Bottom Help Text */}
          <div className="text-center mt-12">
            <div className="glass-blue rounded-2xl p-6 max-w-2xl mx-auto shadow-blue">
              <p className="text-gray-700 font-medium">
                💡 Need help? Contact our support team at{" "}
                <a
                  href="mailto:support@algopips.net"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  support@algopips.net
                </a>{" "}
                or call{" "}
                <a
                  href="tel:+1-800-ROBOFX"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  +1-800-ROBOFX
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

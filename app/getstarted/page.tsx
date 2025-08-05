"use client";
import BreadCumb from "@/components/BreadCumb";
import type React from "react";

import Header from "@/components/Header";
import HeaderTop from "@/components/HeaderTop";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  CheckCircle,
  BookOpen,
  GraduationCap,
  Mail,
  Phone,
  MessageSquare,
  Calendar,
  ArrowRight,
  Lightbulb,
  Briefcase,
  Award,
  Handshake,
  MailCheck,
} from "lucide-react";

export default function AdmissionsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    programOfInterest: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
      // Simulate API call for inquiry submission
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const steps = [
    {
      icon: <BookOpen className="w-6 h-6 text-pink-600" />,
      title: "Explore Programs",
      description:
        "Discover our wide range of undergraduate and postgraduate courses.",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-rose-600" />,
      title: "Check Requirements",
      description:
        "Review the academic and English language entry criteria for your chosen program.",
    },
    {
      icon: <Mail className="w-6 h-6 text-purple-600" />,
      title: "Submit Application",
      description:
        "Complete our online application form and upload all required documents.",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-pink-600" />,
      title: "Receive Offer",
      description:
        "Get your admission offer and guidance on accepting your place.",
    },
  ];

  const benefits = [
    "World-class faculty and research opportunities",
    "Vibrant campus life and student support services",
    "Global alumni network and career placement assistance",
    "State-of-the-art facilities and learning resources",
    "Flexible study options and diverse program offerings",
    "Scholarship and financial aid opportunities",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative py-20 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Handshake className="w-16 h-16 text-purple-600 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-gray-900">Admissions </span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Guide
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Your step-by-step guide to joining Omniscient Education. Start
              your journey towards academic excellence today.
            </p>
          </div>
        </div>
      </section>

      {/* Success Message */}
      {isSubmitted && (
        <section className="py-12 bg-green-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="glass-white rounded-3xl p-8 shadow-blue-lg border border-green-200">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-green-600 mb-4">
                  Inquiry Submitted Successfully!
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Thank you for your interest. Our admissions team will review
                  your inquiry and get back to you shortly with more
                  information.
                </p>
                <div className="flex items-center justify-center space-x-6">
                  <div className="flex items-center space-x-2 text-green-600">
                    <Mail className="w-5 h-5" />
                    <span className="font-medium">Confirmation Email Sent</span>
                  </div>
                  <div className="flex items-center space-x-2 text-purple-600">
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium">Schedule a Call</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Information */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center justify-center mb-6">
                  <div className="flex items-center space-x-3 glass-blue rounded-full px-6 py-3 shadow-blue">
                    <GraduationCap className="w-5 h-5 text-pink-600" />
                    <span className="text-pink-600 font-bold">
                      Admissions Process
                    </span>
                  </div>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                  Your Path to{" "}
                  <span className="text-gradient">Global Education</span> Starts
                  Here
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  We're excited to help you begin your academic journey. Follow
                  these simple steps to apply and join our diverse community of
                  learners.
                </p>
              </div>

              {/* Steps Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="glass-white rounded-2xl p-6 shadow-blue border border-gray-100 hover:border-pink-200 transition-all duration-300 card-hover"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits List */}
              <div className="glass-blue rounded-3xl p-8 shadow-blue">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Award className="w-6 h-6 text-pink-600 mr-3" />
                  Why Choose Omniscient Education?
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="grid grid-cols-2 gap-6">
                <Button className="btn-outline-gradient text-gray-700 hover:text-pink-600 font-bold px-8 py-4 rounded-xl bg-white hover:bg-pink-50 transition-all duration-200">
                  <Lightbulb className="w-5 h-5 mr-2" />
                  Explore Scholarships
                </Button>
                <Button className="btn-outline-gradient text-gray-700 hover:text-pink-600 font-bold px-8 py-4 rounded-xl bg-white hover:bg-pink-50 transition-all duration-200">
                  <Briefcase className="w-5 h-5 mr-2" />
                  Career Services
                </Button>
              </div>
            </div>

            {/* Right Column - Inquiry Form */}
            <div className="glass-white rounded-3xl p-8 shadow-blue-lg border border-gray-100">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Submit Your Inquiry
                </h3>
                <p className="text-gray-600">
                  Fill out the form below and our team will contact you shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-900 font-medium mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
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
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-900 font-medium mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                      placeholder="+1 (555) 123-4567 (Optional)"
                    />
                  </div>
                </div>

                {/* Country and Program of Interest */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-gray-900 font-medium mb-2"
                    >
                      Country of Residence *
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                      placeholder="Your country"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="programOfInterest"
                      className="block text-gray-900 font-medium mb-2"
                    >
                      Program of Interest *
                    </label>
                    <select
                      id="programOfInterest"
                      name="programOfInterest"
                      value={formData.programOfInterest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                      required
                    >
                      <option value="">Select a program</option>
                      <option value="undergraduate">
                        Undergraduate Programs
                      </option>
                      <option value="postgraduate">
                        Postgraduate Programs
                      </option>
                      <option value="diploma">Diploma Programs</option>
                      <option value="certification">
                        Professional Certifications
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-900 font-medium mb-2"
                  >
                    Your Message / Questions *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your academic goals, questions, or specific interests..."
                    required
                  ></textarea>
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1 w-5 h-5 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                    required
                  />
                  <label
                    htmlFor="consent"
                    className="text-gray-600 text-sm leading-relaxed"
                  >
                    I agree to receive communications from Omniscient Education
                    regarding my inquiry, program updates, and relevant
                    information. I understand I can unsubscribe at any time.
                  </label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading || isSubmitted}
                  className="w-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-bold py-6 rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                      Submitting Inquiry...
                    </div>
                  ) : isSubmitted ? (
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 mr-3" />
                      Inquiry Sent!
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform" />
                      Submit Inquiry
                    </div>
                  )}
                </Button>

                {/* Security Notice */}
                <div className="text-center pt-4">
                  <p className="text-gray-500 text-sm leading-relaxed">
                    🔒 Your information is secure and encrypted. We respect your
                    privacy and will never share your data with third parties.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Support */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="glass-white rounded-3xl p-8 shadow-blue border border-gray-100 max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Need Personalized Guidance?
            </h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Our admissions advisors are ready to assist you with any questions
              about programs, applications, or campus life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Phone className="w-5 h-5 mr-2" />
                Call Us: +1-800-OMNISCIENT
              </Button>
              <Button className="border-2 border-pink-300 text-pink-600 hover:bg-pink-500 hover:text-white font-bold px-8 py-4 rounded-xl bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <MailCheck className="w-5 h-5 mr-2" />
                Send An Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

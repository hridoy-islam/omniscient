"use client";
import { useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Mahmudul Hasan",
      role: "Forex Trader",
      location: "Bangladesh",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Beyond Expectations!! - I was skeptical at first, but this robot has surpassed all my expectations. The energy efficiency and sleek design have made trading both cost-effective and enjoyable. A big thumbs up!",
      rating: 5,
      profit: "+$12,450",
      color: "blue",
    },
    {
      name: "Vikram Singh",
      role: "Professional Trader",
      location: "India",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Trading Made Simple and Rewarding! - As someone who's constantly on the move, I needed a trading solution that was compact and easy to manage. This robot delivered that and more. It's like having a reliable trading companion wherever I go.",
      rating: 5,
      profit: "+$8,920",
      color: "purple",
    },
    {
      name: "Neha Patel",
      role: "Investment Analyst",
      location: "UK",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Security and Performance in One! - The advanced security features give me peace of mind, knowing my trading activities are safe. Coupled with its high performance, this robot is truly a stellar investment.",
      rating: 5,
      profit: "+$15,680",
      color: "indigo",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="flex items-center space-x-3 glass-blue rounded-full px-6 py-3 shadow-blue">
              <Quote className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-bold">Customer Review</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
            A Glimpse into Happy{" "}
            <span className="text-gradient">Clients' Experiences</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            ⭐ Join the Journey of Joy and Triumph: As you explore the
            remarkable experiences of our valued clients, immerse yourself in
            their stories of delight and achievement. Each testimonial is a
            testament to the transformative power of our product, showcasing
            real-world impacts and the joy it brings to users.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glass-white rounded-3xl p-8 md:p-12 shadow-blue-lg border border-gray-100 relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-blue">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="pt-8">
              {/* Stars */}
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-500 fill-current"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center mb-8 font-medium italic">
                "{testimonials[currentSlide].quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center shadow-blue">
                  <span className="text-white font-bold text-2xl">
                    {testimonials[currentSlide].name.charAt(0)}
                  </span>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900">
                    {testimonials[currentSlide].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentSlide].role}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonials[currentSlide].location}
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-green-600">
                    {testimonials[currentSlide].profit}
                  </div>
                  <div className="text-gray-500 text-sm">Total Profit</div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-blue flex items-center justify-center hover:bg-blue-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-blue flex items-center justify-center hover:bg-blue-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Testimonial Thumbnails */}
        <div className="flex justify-center space-x-4 mb-12">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`p-4 rounded-2xl transition-all duration-300 ${
                index === currentSlide
                  ? "glass-blue shadow-blue border-2 border-blue-200"
                  : "glass-white shadow-blue border border-gray-100 hover:border-blue-200"
              }`}
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`w-12 h-12 bg-gradient-${testimonial.color} rounded-full flex items-center justify-center`}
                >
                  <span className="text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 text-xs">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="glass-white rounded-3xl p-8 max-w-4xl mx-auto shadow-blue border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Your Story Awaits
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              These are just a few of the countless happy stories we've
              received. Every client's journey with our product is unique, but
              the outcome is consistently joyous and successful. We invite you
              to become part of this thriving community and create your own
              success story!
            </p>
            <button className="btn-gradient text-white font-bold px-8 py-4 rounded-xl shadow-blue hover:shadow-blue-lg transition-all duration-200">
              Start Your Success Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

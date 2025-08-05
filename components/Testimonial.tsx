"use client";
import { useState } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
} from "lucide-react";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "MBA Graduate",
      university: "University of London",
      country: "🇬🇧 UK",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      text: "Omniscient Education made my dream of studying in London a reality. Their support throughout the application process was exceptional, and I couldn't have done it without their expert guidance.",
      course: "Master of Business Administration",
      year: "2023",
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      role: "Computer Science Student",
      university: "University of Manchester",
      country: "🇪🇬 Egypt",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      rating: 5,
      text: "The team at Omniscient helped me navigate the complex visa process and find the perfect university for my Computer Science degree. Their personalized approach made all the difference.",
      course: "BSc Computer Science",
      year: "2024",
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      role: "International Business Graduate",
      university: "University of Edinburgh",
      country: "🇪🇸 Spain",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      rating: 5,
      text: "From the initial consultation to graduation, Omniscient was with me every step of the way. Their career guidance helped me secure a fantastic job right after graduation.",
      course: "MSc International Business",
      year: "2023",
    },
    {
      id: 4,
      name: "David Chen",
      role: "Engineering Student",
      university: "Imperial College London",
      country: "🇨🇳 China",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      text: "The support I received from Omniscient was outstanding. They helped me with everything from university selection to accommodation, making my transition to UK education seamless.",
      course: "MEng Mechanical Engineering",
      year: "2024",
    },
    {
      id: 5,
      name: "Priya Patel",
      role: "Medicine Graduate",
      university: "University of Birmingham",
      country: "🇮🇳 India",
      image: "https://randomuser.me/api/portraits/women/46.jpg",
      rating: 5,
      text: "Omniscient's expertise in medical school applications was invaluable. They helped me prepare for interviews and guided me through the complex application requirements.",
      course: "MBBS Medicine",
      year: "2023",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-25 to-purple-25"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(219,39,119,0.06),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.06),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-8">
            <div className="bg-white/80 backdrop-blur-xl rounded-full px-8 py-4 shadow-xl border border-pink-100">
              <span className="text-pink-600 font-bold text-lg">
                Student Success Stories
              </span>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            <span className="text-gray-900">What Our</span>
            <br />
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-pink-700 bg-clip-text text-transparent">
              Students Say
            </span>
          </h2>

          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Hear from our successful graduates who have achieved their
            educational dreams with our support and guidance.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur-xl rounded-[3rem] p-12 shadow-2xl border border-pink-100 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(219,39,119,0.05),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05),transparent_50%)]"></div>

            {/* Quote Icon */}
            <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center opacity-20">
              <Quote className="w-8 h-8 text-white" />
            </div>

            <div className="relative z-10">
              <div className="grid lg:grid-cols-3 gap-12 items-center">
                {/* Student Info */}
                <div className="text-center lg:text-left">
                  <div className="relative inline-block mb-6">
                    <img
                      src={current.image || "/placeholder.svg"}
                      alt={current.name}
                      className="w-24 h-24 rounded-full mx-auto lg:mx-0 shadow-xl border-4 border-white"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {current.name}
                  </h3>
                  <p className="text-lg text-gray-600 mb-2">{current.role}</p>
                  <p className="text-purple-600 font-semibold mb-4">
                    {current.university}
                  </p>

                  <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4">
                    <span className="text-2xl">{current.country}</span>
                    <div className="flex items-center">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-500 fill-current"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-4 border border-pink-100">
                    <div className="text-sm text-gray-600 mb-1">Course</div>
                    <div className="font-semibold text-gray-900">
                      {current.course}
                    </div>
                    <div className="text-sm text-purple-600 mt-1">
                      Class of {current.year}
                    </div>
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="lg:col-span-2">
                  <div className="text-3xl md:text-4xl font-light text-gray-700 leading-relaxed mb-8 italic">
                    "{current.text}"
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentTestimonial(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentTestimonial
                              ? "bg-gradient-to-r from-pink-500 to-purple-500 w-8"
                              : "bg-gray-300 hover:bg-gray-400"
                          }`}
                        />
                      ))}
                    </div>

                    <div className="flex items-center space-x-4">
                      <button
                        onClick={prevTestimonial}
                        className="w-12 h-12 bg-white rounded-full shadow-lg border border-pink-100 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110 group"
                      >
                        <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-pink-600" />
                      </button>
                      <button
                        onClick={nextTestimonial}
                        className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110 group"
                      >
                        <ChevronRight className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          {[
            { number: "5,000+", label: "Happy Students" },
            { number: "98%", label: "Success Rate" },
            { number: "50+", label: "Countries" },
            { number: "15+", label: "Years Experience" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

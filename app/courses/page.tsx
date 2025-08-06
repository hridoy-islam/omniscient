"use client";
import { useState } from "react";
import {
  Search,
  Filter,
  Clock,
  Users,
  Star,
  BookOpen,
  Award,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All",
    "Business",
    "Technology",
    "Healthcare",
    "Education",
    "Engineering",
  ];

  const courses = [
    {
      id: 1,
      title: "Business Management & Leadership",
      category: "Business",
      image:
        "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
      duration: "12 weeks",
      students: 1250,
      rating: 4.9,
      price: "£2,499",
      level: "Intermediate",
      description:
        "Comprehensive program covering modern business practices and leadership skills.",
      features: [
        "Live Sessions",
        "Case Studies",
        "Certification",
        "Career Support",
      ],
    },
    {
      id: 2,
      title: "Data Science & Analytics",
      category: "Technology",
      image:
        "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
      duration: "16 weeks",
      students: 890,
      rating: 4.8,
      price: "£3,299",
      level: "Advanced",
      description:
        "Master data analysis, machine learning, and statistical modeling techniques.",
      features: [
        "Hands-on Projects",
        "Industry Tools",
        "Mentorship",
        "Job Placement",
      ],
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      category: "Business",
      image:
        "https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
      duration: "10 weeks",
      students: 2100,
      rating: 4.7,
      price: "£1,899",
      level: "Beginner",
      description:
        "Learn modern digital marketing strategies and tools for business growth.",
      features: [
        "Real Campaigns",
        "Analytics Tools",
        "Social Media",
        "SEO/SEM",
      ],
    },
    {
      id: 4,
      title: "Healthcare Administration",
      category: "Healthcare",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
      duration: "14 weeks",
      students: 650,
      rating: 4.9,
      price: "£2,799",
      level: "Intermediate",
      description:
        "Comprehensive training in healthcare management and administration.",
      features: [
        "Healthcare Systems",
        "Compliance",
        "Leadership",
        "Quality Management",
      ],
    },
    {
      id: 5,
      title: "Software Engineering Bootcamp",
      category: "Technology",
      image:
        "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
      duration: "20 weeks",
      students: 1500,
      rating: 4.8,
      price: "£4,999",
      level: "Beginner",
      description:
        "Intensive program to become a full-stack software developer.",
      features: [
        "Full-Stack Development",
        "Portfolio Projects",
        "Code Reviews",
        "Job Guarantee",
      ],
    },
    {
      id: 6,
      title: "Educational Leadership",
      category: "Education",
      image:
        "https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
      duration: "12 weeks",
      students: 420,
      rating: 4.9,
      price: "£2,299",
      level: "Advanced",
      description:
        "Develop leadership skills for educational institutions and organizations.",
      features: [
        "Leadership Theory",
        "Change Management",
        "Policy Development",
        "Research Methods",
      ],
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-gray-900">Explore Our </span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Courses
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Discover world-class programs designed to advance your career and
              unlock new opportunities.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex items-center space-x-2">
                  <Filter className="text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
              >
                <Link href="/courses/a">
                  {/* Course Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-purple-600">
                      {course.level}
                    </div>
                    {/* <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-bold text-gray-900">
                      {course.price}
                    </div> */}
                  </div>

                  {/* Course Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                        {course.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-semibold text-gray-700">
                          {course.rating}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {course.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {course.description}
                    </p>

                    {/* Course Stats */}
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students.toLocaleString()} students</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {course.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 rounded-xl transition-all duration-300 group">
                      <span className="flex items-center justify-center">
                        Enroll Now
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No courses found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Award className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl font-black mb-6">
              Start Your Learning Journey Today
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of students who have transformed their careers with
              our expert-led courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-all duration-300">
                Get Free Consultation
              </Button>
              <Button className="border-2 border-white text-purple-600 bg-white hover:bg-white hover:text-purple-600 font-bold px-8 py-4 rounded-xl transition-all duration-300">
                View All Programs
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

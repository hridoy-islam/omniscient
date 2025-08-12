"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeft,
  Clock,
  Users,
  Award,
  BookOpen,
  Globe,
  Star,
  Play,
  Download,
  CheckCircle,
  Calendar,
  MapPin,
  GraduationCap,
  Target,
  Briefcase,
  Heart,
  Share2,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { courses } from "@/utils/data";

export default function CourseDetailPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isEnrolled, setIsEnrolled] = useState(false);
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  const slug = params?.slug as string;
  const [course, setCourse] = useState<(typeof courses)[0] | null>(null);

  useEffect(() => {
    if (!slug) return;
    const found = courses.find((c) => c.slug === slug);
    if (!found) {
      setCourse(null);
    } else {
      setCourse(found);
    }
  }, [slug]);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Course Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            We couldn't find the course you're looking for.
          </p>
          <Button
            onClick={() => router.push("/courses")}
            className="bg-purple-600"
          >
            ← Back to Courses
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      icon: <BookOpen className="w-4 h-4" />,
    },
    {
      id: "curriculum",
      label: "Curriculum",
      icon: <GraduationCap className="w-4 h-4" />,
    },
    {
      id: "requirements",
      label: "Requirements",
      icon: <CheckCircle className="w-4 h-4" />,
    },
    {
      id: "careers",
      label: "Career Outcomes",
      icon: <Briefcase className="w-4 h-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-b">
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/courses"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Course Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                  {course.university}
                </span>
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                  {course.mode}
                </span>
              </div>

              <h1 className="text-4xl font-black text-gray-900 mb-4">
                {course.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6">{course.subtitle}</p>

              <div className="flex flex-wrap items-center gap-6 text-gray-600">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-purple-500" />
                  {course.location}
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-purple-500" />
                  {course.duration}
                </div>
                {course.intake && <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-purple-500" />
                  {course.intake}
                </div>}
                
                <div className="flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-500 fill-current" />
                  {course.rating} ({course.reviews} reviews)
                </div>
              </div>
            </div>

            {/* Enrollment Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-6 shadow-xl border-purple-100">
                <CardHeader className="text-center">
                  <div className="text-2xl font-black text-purple-600 mb-2">
                    {course.tuitionFee}
                  </div>
                   {course.tuitionFeeInternational &&  <div className="text-2xl font-black text-purple-600 mb-2">
                    {course.tuitionFeeInternational}
                  </div>}
                 
                  <p className="text-gray-600">Total Program Fee</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <Users className="w-6 h-6 mx-auto text-purple-500 mb-1" />
                      <div className="font-semibold">
                        {course.students.toLocaleString()}
                      </div>
                      <div className="text-gray-500">Students</div>
                    </div>
                    <div className="text-center">
                      <Award className="w-6 h-6 mx-auto text-purple-500 mb-1" />
                      <div className="font-semibold">Accredited</div>
                      <div className="text-gray-500">Program</div>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 rounded-xl"
                    onClick={() => setIsEnrolled(true)}
                  >
                    {isEnrolled ? "✓ Enrolled" : "Apply Now"}
                  </Button>

                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      className="flex-1 border-purple-200 text-purple-600 hover:bg-purple-50 bg-transparent"
                    >
                      <Heart className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-purple-200 text-purple-600 hover:bg-purple-50 bg-transparent"
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>

                  <div className="text-center text-sm text-gray-500">
                    💬 Need help?{" "}
                    <Link
                      href="/contact"
                      className="text-purple-600 hover:underline"
                    >
                      Contact us
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Course Image */}
      <div className="container mx-auto px-4 py-8">
        <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
          <img
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-t-lg font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-purple-50 text-purple-600 border-b-2 border-purple-600"
                  : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {activeTab === "overview" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Course Overview
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {course.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Program Highlights
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {course.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "curriculum" && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Course Curriculum
                </h2>
                <div className="space-y-4">
                  {course.modules.map((module, index) => (
                    <Card
                      key={index}
                      className="border-purple-100 hover:shadow-lg transition-shadow"
                    >
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {module.name}
                          </h3>
                          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                            {module.credits} Credits
                          </span>
                        </div>
                        {/* <div className="flex items-center text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          Duration: {module.duration}
                        </div> */}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "requirements" && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Entry Requirements
                </h2>
                <div className="space-y-4">
                  {course.requirements.map((requirement, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{requirement}</span>
                    </div>
                  ))}
                </div>

                <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Application Process
                    </h3>
                    <div className="space-y-2 text-gray-700">
                      <p>📝 Complete online application form</p>
                      <p>📄 Submit required documents</p>
                      <p>💬 Attend interview (if required)</p>
                      <p>✅ Receive admission decision</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "careers" && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Career Outcomes
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {course?.careerOutcomes &&
                    course.careerOutcomes.length > 0 &&
                    course.careerOutcomes.map((career, index) => (
                      <Card
                        key={index}
                        className="border-purple-100 hover:shadow-lg transition-shadow"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-3">
                            <Target className="w-6 h-6 text-purple-500" />
                            <span className="font-semibold text-gray-900">
                              {career}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>

                <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Career Support
                    </h3>
                    <div className="space-y-2 text-gray-700">
                      <p>🎯 Dedicated career counseling</p>
                      <p>🤝 Industry networking events</p>
                      <p>📈 Job placement assistance</p>
                      <p>💼 Alumni mentorship program</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-lg border-purple-100">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Play className="w-5 h-5 mr-2 text-purple-500" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start border-purple-200 text-purple-600 hover:bg-purple-50 bg-transparent"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Brochure
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-purple-200 text-purple-600 hover:bg-purple-50 bg-transparent"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Consultation
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-purple-200 text-purple-600 hover:bg-purple-50 bg-transparent"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Virtual Tour
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-purple-100">
              <CardHeader>
                <CardTitle>Related Courses</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {courses
                  .filter(
                    (c) => c.id !== course.id && c.category === course.category
                  )
                  .slice(0, 2)
                  .map((related) => (
                    <div
                      key={related.id}
                      className="p-3 border border-purple-100 rounded-lg hover:bg-purple-50 cursor-pointer transition-all"
                      onClick={() => router.push(`/courses/${related.slug}`)}
                    >
                      <h4 className="font-semibold text-gray-900">
                        {related.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {related.duration} • {related.tuitionFee}
                      </p>
                    </div>
                  ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

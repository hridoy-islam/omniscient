"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  subject: string;
  name: string;
  email: string;
  department: string;
  priority: string;
  message: string;
};

export default function SupportForm() {
  const [department, setDepartment] = useState("");
  const [priority, setPriority] = useState("");

  const {
    register,
    handleSubmit,
    formState,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      setTimeout(() => {
        reset();
        setDepartment("");
        setPriority("");
      }, 3000);
    }
  }, [formState, reset]);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Ticket Info */}
          <div className="space-y-8">
            <div>
              <p className="text-blue-600 font-semibold mb-2">Ticket</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Ticket Panel
              </h2>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Ticket ID
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Convert all information into tickets. We prioritize,
                  categorize and assign them to the right Department.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  For Support
                </h3>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <a
                    href="mailto:support@algopips.net"
                    className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
                  >
                    support@algopips.net
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  24/7 Technical Support
                </h4>
                <p className="text-gray-600">
                  Our technical support team is available around the clock to
                  assist with any mining-related issues or questions you may
                  have.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <Card className="shadow-2xl border-0">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl font-bold">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <Input
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    placeholder="Enter subject"
                    className="h-12"
                  />
                  {errors.subject && (
                    <span className="text-red-500 text-sm mt-1 block">
                      {errors.subject.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    {...register("name", { required: "Name is required" })}
                    placeholder="Enter your name"
                    className="h-12"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm mt-1 block">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                    type="email"
                    placeholder="Enter your email"
                    className="h-12"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm mt-1 block">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Department <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      {...register("department", {
                        required: "Please select a department",
                      })}
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="w-full h-12 px-3 py-2 border border-input bg-background rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring appearance-none"
                    >
                      <option value="">Select Department</option>
                      <option value="technical">Technical Support</option>
                      <option value="billing">Billing</option>
                      <option value="general">General Inquiry</option>
                      <option value="agreement">Agreement Support</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-4 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                  {errors.department && (
                    <span className="text-red-500 text-sm mt-1 block">
                      {errors.department.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Priority <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      {...register("priority", {
                        required: "Please select a priority",
                      })}
                      value={priority}
                      onChange={(e) => setPriority(e.target.value)}
                      className="w-full h-12 px-3 py-2 border border-input bg-background rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring appearance-none"
                    >
                      <option value="">Select Priority</option>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-4 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                  {errors.priority && (
                    <span className="text-red-500 text-sm mt-1 block">
                      {errors.priority.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    {...register("message")}
                    placeholder="Describe your issue or question..."
                    rows={4}
                    className="resize-none"
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    disabled={formState.isSubmitting}
                  >
                    {formState.isSubmitting ? "Submitting..." : "Submit Ticket"}
                  </Button>
                </div>
              </form>

              {formState.isSubmitSuccessful && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium text-center">
                    ✅ Thank you for contacting us! We'll get back to you soon.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

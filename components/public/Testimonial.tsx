"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useState } from "react";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Mahmudul Hasan",
      role: "Cryptocurrency Miner",
      content:
        '"Beyond Expectations!" - "I was skeptical at first, but this rig has surpassed all my expectations. The energy efficiency and sleek design have made mining both cost-effective and enjoyable. A big thumbs up!"',
      avatar: "https://randomuser.me/api/portraits/men/29.jpg",
    },
    {
      name: "Vikram Singh",
      role: "Digital Nomad",
      content:
        '"Mining Made Simple and Rewarding!" - "As someone who\'s constantly on the move, I needed a mining solution that was compact and easy to manage. This rig delivered that and more. It\'s like having a reliable mining companion wherever I go."',
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      name: "Neha Patel",
      role: "Blockchain Enthusiast",
      content:
        '"Security and Performance in One!" - "The advanced security features give me peace of mind, knowing my mining activities are safe. Coupled with its high performance, this rig is truly a stellar investment."',
      avatar: "https://randomuser.me/api/portraits/women/85.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold mb-4">Customer Review</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            A Glimpse into Happy Clients' Experiences
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            ⭐ Join the Journey of Joy and Triumph: As you explore the
            remarkable experiences of our valued clients, immerse yourself in
            their stories of delight and achievement. Each testimonial is a
            testament to the transformative power of our product, showcasing
            real-world impacts and the joy it brings to users.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="card-hover bg-white border-2 hover:border-blue-200 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-blue-600 mb-4" />
                  <p className="text-gray-700 leading-relaxed">
                    {testimonial.content}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-blue-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex justify-center space-x-2 mb-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          <div className="bg-blue-50 rounded-2xl p-8">
            <p className="text-blue-600 font-semibold mb-2">Conclusion</p>
            <p className="text-gray-700 max-w-4xl mx-auto">
              Your Story Awaits: These are just a few of the countless happy
              stories we've received. Every client's journey with our product is
              unique, but the outcome is consistently joyous and successful. We
              invite you to become part of this thriving community and create
              your own success story!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

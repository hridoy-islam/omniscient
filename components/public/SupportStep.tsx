import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  Book,
  Wrench,
  MessageCircle,
  FileText,
  HelpCircle,
} from "lucide-react";

export default function SupportStep() {
  const features = [
    {
      icon: Clock,
      title: "24/7 Customer Service",
      description:
        "Our team of expert support staff is available 24/7 to assist you with any technical issues, account queries, or trading challenges you may face. No matter the time zone or the complexity of your needs, we are always here to ensure a smooth trading experience.",
    },
    {
      icon: Book,
      title: "Robust Helpdesk",
      description:
        "Utilize our extensive knowledge base for instant answers to common questions, informative articles, and step-by-step guides designed to empower you with self-service support.",
    },
    {
      icon: Wrench,
      title: "Technical Troubleshooting",
      description:
        "Encounter a technical glitch? Our specialized technical support team is on standby to tackle any issues, ensuring your trading platform operates flawlessly.",
    },
  ];

  const additionalFeatures = [
    {
      icon: MessageCircle,
      title: "Customer Feedback",
      description:
        "Your insights and experiences are valuable to us. We encourage you to provide feedback so we can continuously improve and tailor our services to better meet your needs.",
    },
    {
      icon: FileText,
      title: "Support Tickets",
      description:
        "Have a more complex issue? Submit a support ticket through our system, and our team will follow up with thorough, dedicated assistance.",
    },
    {
      icon: HelpCircle,
      title: "Comprehensive FAQs",
      description:
        "Our Frequently Asked Questions (FAQs) provide quick answers to your most pressing questions, covering a wide array of topics.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Dedicated to Your Success in Trading At RoboFX
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We understand that seamless support is the cornerstone of your
            trading journey. Our Support Center is meticulously designed to
            provide you with comprehensive assistance, ensuring that every query
            and challenge you encounter is addressed with speed and precision.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-600 mb-8 text-center">
            Here for You, Around the Clock
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="card-hover border-2 hover:border-blue-200 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-600 mb-8 text-center">
            Feedback and Continuous Improvement
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <Card
                key={index}
                className="card-hover border-2 hover:border-blue-200 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Us Today
            </h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              For assistance, questions, or feedback, please don't hesitate to
              contact our support team. We are committed to providing you with
              exceptional support and ensuring that your trading experience with
              RoboFX is nothing short of excellent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

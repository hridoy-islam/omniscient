// "use client";
// import { Accordion, AccordionItem } from "@nextui-org/react";
// import { Icon } from "@iconify/react";

// export default function Faq() {
//   return (
//     <div className="py-10 bg-white">
//       <div className="container mx-auto ">
//         <div className="mb-5 space-y-4">
//           <h2 className="text-center text-primary">FAQ</h2>
//           <h3 className="text-center md:text-4xl sm:text-2xl">
//             Frequently Asked Questions (FAQs) for the Revolutionary Crypto
//             Mining Rig
//           </h3>
//         </div>

//         <Accordion>
//           <AccordionItem
//             key="first"
//             aria-label="first"
//             indicator={<Icon icon="ic:baseline-plus" color="black" />}
//             title="What makes this crypto mining rig different from others in the market?"
//           >
//             🌟 Answer: Our rig stands out due to its unparalleled hash rate
//             performance, energy-efficient operation, and user-friendly
//             interface. It's designed for both efficiency and sustainability,
//             making it a top choice for both experienced miners and beginners.
//           </AccordionItem>
//           <AccordionItem
//             key="second"
//             aria-label="second"
//             indicator={<Icon icon="ic:baseline-plus" color="black" />}
//             title="How energy-efficient is this mining rig?"
//           >
//             💡 Answer: Our rig is one of the most energy-efficient models
//             available today. It reduces power consumption significantly without
//             sacrificing performance, aligning with eco-friendly practices while
//             maximizing your mining profitability.
//           </AccordionItem>
//           <AccordionItem
//             key="third"
//             aria-label="third"
//             indicator={<Icon icon="ic:baseline-plus" color="black" />}
//             title="Is the mining rig suitable for beginners?"
//           >
//             🖥️ Answer: Absolutely! We've designed the interface to be intuitive
//             and user-friendly, ensuring that even those new to crypto mining can
//             set up and start mining with ease.
//           </AccordionItem>

//           <AccordionItem
//             key="fourth"
//             aria-label="fourth"
//             indicator={<Icon icon="ic:baseline-plus" color="black" />}
//             title="What security features does the rig offer?"
//           >
//             🔒 Answer: Security is a top priority for us. Our rig includes
//             advanced security protocols to protect your mining operations and
//             digital assets from various online threats, ensuring a safe mining
//             environment.
//           </AccordionItem>

//           <AccordionItem
//             key="five"
//             aria-label="five"
//             indicator={<Icon icon="ic:baseline-plus" color="black" />}
//             title="Can the rig handle continuous, heavy-duty mining?"
//           >
//             🚀 Answer: Yes, our rig is built for durability and continuous
//             operation. Its advanced cooling system ensures it stays at optimal
//             temperatures, reducing wear and tear for long-term, heavy-duty
//             mining.
//           </AccordionItem>

//           <AccordionItem
//             key="six"
//             aria-label="six"
//             indicator={<Icon icon="ic:baseline-plus" color="black" />}
//             title="What kind of customer support do you offer?"
//           >
//             🌐 Answer: We provide 24/7 customer support with a team of
//             knowledgeable experts ready to assist you with any technical issues
//             or queries you might have. Our goal is to ensure your mining
//             experience is seamless and profitable.
//           </AccordionItem>
//           <AccordionItem
//             key="seven"
//             aria-label="seven"
//             indicator={<Icon icon="ic:baseline-plus" color="black" />}
//             title="How does this rig contribute to a sustainable mining practice?"
//           >
//             💚 Answer: By focusing on energy efficiency and reduced power
//             consumption, our rig not only lowers your electricity costs but also
//             minimizes the environmental impact of crypto mining, contributing to
//             more sustainable practices in the industry.
//           </AccordionItem>
//         </Accordion>
//       </div>
//     </div>
//   );
// }

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  const faqs = [
    {
      question:
        "What makes this crypto mining rig different from others in the market?",
      answer:
        "Our crypto mining rig stands out due to its advanced GPU technology, energy-efficient operation, robust build quality, and user-friendly interface. It's designed to maximize mining efficiency while minimizing power consumption and maintenance requirements.",
    },
    {
      question: "How energy-efficient is this mining rig?",
      answer:
        "Our mining rig is engineered with cutting-edge energy efficiency technology, consuming significantly less power than traditional mining setups while maintaining optimal performance. This translates to lower electricity costs and reduced environmental impact.",
    },
    {
      question: "Is the mining rig suitable for beginners?",
      answer:
        "Our mining rig features a plug-and-play setup with an intuitive interface that makes it perfect for beginners. We also provide comprehensive documentation and 24/7 customer support to help you get started.",
    },
    {
      question: "What security features does the rig offer?",
      answer:
        "Our mining rig includes top-tier security protocols to protect your operations and digital assets. This includes secure boot processes, encrypted communications, and regular security updates to safeguard against potential threats.",
    },
    {
      question: "Can the rig handle continuous, heavy-duty mining?",
      answer:
        "Yes, our mining rig is built with high-quality components and robust construction specifically designed to withstand continuous mining operations. It features advanced cooling systems and durable hardware to ensure reliable 24/7 performance.",
    },
    {
      question: "What kind of customer support do you offer?",
      answer:
        "We provide dedicated 24/7 customer support with a team of mining experts available to assist with technical issues, setup questions, and general inquiries. Our support includes remote assistance, troubleshooting guides, and comprehensive documentation.",
    },
    {
      question:
        "How does this rig contribute to a sustainable mining practice?",
      answer:
        "Our rig promotes sustainable mining through its energy-efficient design, which reduces power consumption and carbon footprint. We also use environmentally conscious manufacturing processes and offer guidance on renewable energy integration for mining operations.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold mb-4">FAQ</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions (FAQs) for the Revolutionary Crypto
            Mining Rig
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

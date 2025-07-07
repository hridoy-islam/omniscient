// "use client";
// import { Card } from "@nextui-org/react";
// import { Icon } from "@iconify/react";
// import { useEffect } from "react";
// import { SubmitHandler, useForm } from "react-hook-form";

// type Inputs = {
//   name: string;
//   email: string;
//   phone: string;
//   message: string;
// };

// export default function Contact() {
//   const {
//     register,
//     handleSubmit,
//     formState,
//     formState: { errors, isSubmitSuccessful },
//   } = useForm<Inputs>();
//   const onSubmit: SubmitHandler<Inputs> = async (data) => {
//     await fetch("/api/email", {
//       method: "POST",
//       body: JSON.stringify(data),
//     });
//   };

//   useEffect(() => {
//     if (formState.isSubmitSuccessful) {
//       setTimeout(function () {
//         window.location.reload();
//       }, 3000);
//     }
//   }, [formState]);
//   return (
//     <div className="bg-primaryLight p-14">
//       <Card className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 px-10 py-16 container mx-auto">
//         <div className="space-y-8 flex flex-col justify-between">
//           <div>
//             <h2 className="text-4xl font-normal">Have Questions?</h2>
//             <h2 className="text-4xl font-normal">
//               Get in <span className="font-bold">Touch!</span>
//             </h2>
//           </div>

//           <div className="space-y-4">
//             <div className="flex gap-2 items-center">
//               <Icon icon="carbon:map" className="text-primary text-lg" />
//               <p>13thStreet, 47 W 13th St, New York, NY 10011, USA</p>
//             </div>

//             <div className="flex gap-2 items-center">
//               <Icon icon="ic:baseline-email" className="text-primary text-lg" />
//               <p>support@robofxtrader.com</p>
//             </div>

//             {/* <div className="flex gap-2 items-center">
//               <Icon icon="ep:phone" className="text-primary text-lg" />
//               <p>+19292301920</p>
//             </div> */}
//           </div>
//         </div>

//         <div className="">
//           <form
//             className="flex flex-col space-y-4"
//             onSubmit={handleSubmit(onSubmit)}
//           >
//             <input
//               type="text"
//               {...register("name", { required: true })}
//               id=""
//               placeholder="Name *"
//               className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
//             />
//             {errors.name && (
//               <span className="text-danger">This field is required</span>
//             )}
//             <input
//               type="text"
//               {...register("phone", { required: true })}
//               id=""
//               placeholder="Phone *"
//               className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
//             />
//             {errors.phone && (
//               <span className="text-danger">This field is required</span>
//             )}
//             <input
//               type="text"
//               {...register("email", { required: true })}
//               id=""
//               placeholder="Email"
//               className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
//             />
//             {errors.email && (
//               <span className="text-danger">This field is required</span>
//             )}
//             <textarea
//               {...register("message", { required: true })}
//               id=""
//               placeholder="Message"
//               className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
//             ></textarea>
//             {errors.message && (
//               <span className="text-danger">This field is required</span>
//             )}
//             <input
//               type="submit"
//               className="cursor-pointer btn-basic block w-1/3 p-3 rounded-lg"
//               value="Submit"
//             />
//           </form>
//           {formState.isSubmitSuccessful ? "Thank you for contacting us" : ""}
//         </div>
//       </Card>
//     </div>
//   );
// }

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your mining journey? Contact us today and let's
            discuss how we can help you achieve your cryptocurrency mining
            goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <Input type="tel" placeholder="+1 (555) 123-4567" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <Input placeholder="Mining Inquiry" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your mining goals..."
                  rows={4}
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-full text-lg font-semibold">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-8">
                We're here to help you succeed in your cryptocurrency mining
                journey. Reach out to us through any of the following channels.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">support@robomining.com</p>
                  <p className="text-gray-600">sales@robomining.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600">123 Mining Street</p>
                  <p className="text-gray-600">Crypto City, CC 12345</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Business Hours
                  </h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
              <h4 className="font-semibold text-gray-900 mb-2">
                24/7 Technical Support
              </h4>
              <p className="text-gray-600">
                Our technical support team is available around the clock to
                assist with any mining-related issues or questions you may have.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

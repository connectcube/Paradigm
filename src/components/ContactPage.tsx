import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactPage = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
    // In a real application, you would send this data to your backend
    alert("Form submitted successfully! We'll be in touch soon.");
    form.reset();
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden bg-[#030303]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#030303] opacity-40 mix-blend-overlay"></div>
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1800&q=80"
            alt="Contact Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/80 via-[#030303]/60 to-[#030303]/95"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl font-light text-white tracking-[0.15em] mb-6">
              <span>CONTACT</span>{" "}
              <span className="font-medium text-[#c9a96e]">US</span>
            </h1>
            <div className="w-20 h-[3px] mx-auto mt-8 bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mb-12 tracking-wide leading-relaxed font-light"
          >
            Connect with our team to explore investment opportunities or discuss
            how we can help you achieve your financial goals.
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-wider">
              GET IN <span className="text-[#c9a96e]">TOUCH</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our team of investment professionals is ready to assist you with
              any inquiries about our services, investment opportunities, or to
              schedule a consultation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#111111] border-[#222222] h-full">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="p-4 rounded-full bg-[#1a1a1a] mb-6">
                    <MapPin className="h-8 w-8 text-[#c9a96e]" />
                  </div>
                  <h3 className="text-xl font-medium mb-4">Our Locations</h3>
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <p className="font-medium">London (Headquarters)</p>
                      <p>One Canada Square</p>
                      <p>Canary Wharf, London</p>
                      <p>United Kingdom</p>
                    </div>
                    <div>
                      <p className="font-medium">New York</p>
                      <p>Park Avenue</p>
                      <p>New York, NY</p>
                      <p>United States</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#111111] border-[#222222] h-full">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="p-4 rounded-full bg-[#1a1a1a] mb-6">
                    <Mail className="h-8 w-8 text-[#c9a96e]" />
                  </div>
                  <h3 className="text-xl font-medium mb-4">Email & Phone</h3>
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <p className="font-medium">General Inquiries</p>
                      <p>info@paradigmgroup.global</p>
                      <p>+44 20 7123 4567</p>
                    </div>
                    <div>
                      <p className="font-medium">Investor Relations</p>
                      <p>investors@paradigmgroup.global</p>
                      <p>+44 20 7123 4568</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#111111] border-[#222222] h-full">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="p-4 rounded-full bg-[#1a1a1a] mb-6">
                    <Clock className="h-8 w-8 text-[#c9a96e]" />
                  </div>
                  <h3 className="text-xl font-medium mb-4">Office Hours</h3>
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <p className="font-medium">London & New York</p>
                      <p>Monday - Friday</p>
                      <p>9:00 AM - 6:00 PM</p>
                    </div>
                    <div>
                      <p className="font-medium">Private Appointments</p>
                      <p>Available upon request</p>
                      <p>Evenings and weekends</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl font-light mb-4 tracking-wider">
                SEND US A <span className="text-[#c9a96e]">MESSAGE</span>
              </h2>
              <p className="text-gray-300">
                Complete the form below and one of our representatives will
                contact you shortly.
              </p>
            </motion.div>

            <Card className="bg-[#111111] border-[#222222]">
              <CardContent className="p-8">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">
                              Full Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John Smith"
                                className="bg-[#1a1a1a] border-[#333333] focus:border-[#c9a96e]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">
                              Email Address
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="john@example.com"
                                className="bg-[#1a1a1a] border-[#333333] focus:border-[#c9a96e]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Subject</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="How can we help you?"
                              className="bg-[#1a1a1a] border-[#333333] focus:border-[#c9a96e]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please provide details about your inquiry..."
                              className="bg-[#1a1a1a] border-[#333333] focus:border-[#c9a96e] min-h-[150px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-center pt-4">
                      <Button
                        type="submit"
                        className="bg-[#c9a96e] hover:bg-[#b89355] text-black px-8 py-6 rounded-none flex items-center gap-2"
                      >
                        <Send className="h-4 w-4" />
                        Submit Message
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-wider">
              OUR <span className="text-[#c9a96e]">LOCATIONS</span>
            </h2>
          </motion.div>

          <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?w=1800&q=80"
              alt="Map of London"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#111111]/90 p-8 rounded-lg max-w-md w-full text-center">
              <h3 className="text-2xl font-light mb-4">
                PARADIGM <span className="text-[#c9a96e]">GROUP</span>
              </h3>
              <p className="text-gray-300 mb-6">
                One Canada Square, Canary Wharf
                <br />
                London, United Kingdom
              </p>
              <Button
                variant="outline"
                className="border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e]/10"
              >
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-wider">
            SCHEDULE A <span className="text-[#c9a96e]">CONSULTATION</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
            Interested in learning more about our investment opportunities? Our
            team is available for private consultations to discuss your
            financial goals and how we can help you achieve them.
          </p>
          <Button
            className="bg-[#c9a96e] hover:bg-[#b89355] text-black px-8 py-6 text-lg rounded-none"
            size="lg"
          >
            Book an Appointment
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactPage;

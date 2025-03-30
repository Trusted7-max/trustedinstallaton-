import React from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="bg-gradient-to-r from-ti-blue-900 to-ti-blue-700 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-xl text-ti-blue-100 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Get in touch with our team for professional DStv installation services.
            </p>
          </div>
        </div>
        
        {/* Wave shape divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#f8fafc" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#f8fafc" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#f8fafc"></path>
          </svg>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="order-2 lg:order-1 animate-fade-in">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-display font-bold mb-6 text-gray-900">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="order-1 lg:order-2 animate-slide-in-right">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                <h2 className="text-2xl font-display font-bold mb-6 text-gray-900">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-ti-blue-100 p-3 rounded-lg mr-4">
                      <Phone className="h-6 w-6 text-ti-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                      <p className="mt-2 text-base text-gray-600">
                        <a href="tel:+27834628367" className="hover:text-ti-blue-600">
                          +27 83 462 8367
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-ti-blue-100 p-3 rounded-lg mr-4">
                      <Mail className="h-6 w-6 text-ti-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a href="mailto:info@trustedinstallations.co.za" className="text-gray-600 hover:text-ti-blue-600 transition-colors">
                        info@trustedinstallations.co.za
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-ti-blue-100 p-3 rounded-lg mr-4">
                      <MapPin className="h-6 w-6 text-ti-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Coverage Area</h3>
                      <p className="text-gray-600">
                        We service all major provinces across South Africa including Johannesburg, Cape Town, Durban, and Pretoria.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-ti-blue-100 p-3 rounded-lg mr-4">
                      <Clock className="h-6 w-6 text-ti-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 4:00 PM<br />
                        Sunday: Available for emergencies
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">Our Promise</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-600 mr-2 mt-0.5" />
                      <p className="text-gray-600">Quick response to all inquiries</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-600 mr-2 mt-0.5" />
                      <p className="text-gray-600">Convenient appointment scheduling</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-600 mr-2 mt-0.5" />
                      <p className="text-gray-600">Professional and timely service</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-ti-blue-100 text-ti-blue-800 text-sm font-medium mb-4">
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">
              Common Questions About Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Find quick answers to the most common questions about our DStv installation services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-200">
              {[
                {
                  question: "What areas do you service?",
                  answer: "We offer our DStv installation services across all major provinces in South Africa, including Johannesburg, Cape Town, Durban, Pretoria, and surrounding areas."
                },
                {
                  question: "How soon can you schedule an installation?",
                  answer: "In most cases, we can schedule installations within 24-48 hours of your inquiry. For urgent needs, we also offer same-day service when possible."
                },
                {
                  question: "Do you provide warranties for your installations?",
                  answer: "Yes, we provide a 3-month warranty on all our installation work. This covers any issues related to our workmanship, giving you peace of mind."
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept cash, EFT, credit/debit cards, and mobile payment options for your convenience."
                },
                {
                  question: "Do I need to provide any equipment?",
                  answer: "No, we bring all necessary tools and equipment for the installation. If specific components need to be purchased, we'll discuss this with you beforehand."
                }
              ].map((faq, index) => (
                <div key={index} className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ti-blue-900 text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between py-10 bg-ti-blue-800 rounded-xl px-8 overflow-hidden relative">
            <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
            <div className="relative z-10 mb-6 md:mb-0">
              <h3 className="text-2xl font-display font-bold mb-2">Ready to get started?</h3>
              <p className="text-ti-blue-100">Contact us today for professional DStv installations.</p>
            </div>
            <div className="relative z-10">
              <a
                href="tel:+27834628367"
                className="inline-flex items-center px-6 py-3 bg-white text-ti-blue-900 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                <Phone className="mr-2 h-5 w-5" /> Call +27 83 462 8367
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

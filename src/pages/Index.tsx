
import React from "react";
import { Link } from "react-router-dom";
import { Tv, Radio, WifiIcon, CheckCircle2, ArrowRight, Phone, MapPin, Clock } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";

const Index = () => {
  const services = [
    {
      title: "DStv Installation",
      description: "Professional setup of DStv systems for crisp, clear viewing experience.",
      icon: <Tv className="h-6 w-6" />,
      features: ["Decoder setup", "Dish installation", "Signal optimization"],
      link: "/services/residential",
      imageUrl: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80",
    },
    {
      title: "Signal Troubleshooting",
      description: "Quick resolution for signal problems and picture quality issues.",
      icon: <Radio className="h-6 w-6" />,
      features: ["Signal diagnosis", "No signal fixes", "Picture quality enhancement"],
      link: "/services/residential",
      imageUrl: "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
    {
      title: "TV & Sound System Setup",
      description: "Expert mounting and configuration for optimal entertainment.",
      icon: <WifiIcon className="h-6 w-6" />,
      features: ["TV mounting", "Surround sound setup", "Cable management"],
      link: "/services/residential",
      imageUrl: "https://images.unsplash.com/photo-1558888401-3cc1de77652d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
  ];

  const testimonials = [
    {
      name: "John Smith",
      location: "Cape Town",
      rating: 5,
      text: "The technician was professional and efficient. My DStv is working perfectly now, and he even gave me some tips on optimizing my settings. Highly recommend!",
      date: "2 weeks ago",
    },
    {
      name: "Sarah Johnson",
      location: "Johannesburg",
      rating: 5,
      text: "Called in the morning for an emergency fix, and they were at my door by afternoon. Fast service and reasonable prices. Will definitely use them again!",
      date: "1 month ago",
    },
    {
      name: "David Nkosi",
      location: "Durban",
      rating: 4,
      text: "Very knowledgeable team that fixed my signal issues in no time. They were respectful of my home and cleaned up afterward. Great service!",
      date: "3 weeks ago",
    },
  ];

  return (
    <main>
      <HeroSection />

      {/* Services Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-ti-blue-100 text-ti-blue-800 text-sm font-medium mb-4">
              <span>Our Professional Services</span>
            </div>
            <h2 className="text-4xl font-display font-bold mb-6 text-gray-900">
              DStv Installation Services You Can Trust
            </h2>
            <p className="text-lg text-gray-600">
              We provide expert DStv installations, repairs, and TV mounting services 
              across major provinces of South Africa with certified technicians.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 bg-ti-blue-600 text-white font-medium rounded-lg hover:bg-ti-blue-700 transition-colors"
            >
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-ti-blue-100 text-ti-blue-800 text-sm font-medium mb-2">
                <span>Why Choose Us</span>
              </div>
              <h2 className="text-4xl font-display font-bold mb-6 text-gray-900">
                Trusted Installations: Your Premier DStv Solution
              </h2>
              <p className="text-lg text-gray-600">
                Trusted Installations is the number one solution for all your recommended DStv installations across major provinces of South Africa. We have approved DStv installers who can help you with professional decoder repairs and installations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-ti-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Certified Experts</h3>
                    <p className="text-gray-600 text-sm">
                      Our technicians are certified and trained by Multichoice
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-ti-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Fast Response</h3>
                    <p className="text-gray-600 text-sm">
                      Quick service and prompt arrival at your location
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-ti-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Quality Materials</h3>
                    <p className="text-gray-600 text-sm">
                      We use only high-quality, recommended components
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-ti-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Satisfaction Guarantee</h3>
                    <p className="text-gray-600 text-sm">
                      We guarantee the quality of our installations
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-ti-blue-600 text-white font-medium rounded-lg hover:bg-ti-blue-700 transition-colors"
                >
                  Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-ti-blue-600/20 to-ti-blue-400/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-white p-6 rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass p-5 rounded-lg flex flex-col space-y-2">
                  <div className="p-3 bg-ti-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-ti-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Always On Call</h3>
                  <p className="text-sm text-gray-600">Ready to dispatch technicians to your location</p>
                </div>
                <div className="glass p-5 rounded-lg flex flex-col space-y-2">
                  <div className="p-3 bg-ti-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-ti-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Wide Coverage</h3>
                  <p className="text-sm text-gray-600">Serving all major provinces in South Africa</p>
                </div>
                <div className="glass p-5 rounded-lg flex flex-col space-y-2">
                  <div className="p-3 bg-ti-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-ti-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Efficient Service</h3>
                  <p className="text-sm text-gray-600">Quick and reliable installation and repairs</p>
                </div>
                <div className="glass p-5 rounded-lg flex flex-col space-y-2">
                  <div className="p-3 bg-ti-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-ti-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Clean & Tidy</h3>
                  <p className="text-sm text-gray-600">We leave your site clean and tidy after service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section className="py-20 bg-ti-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-ti-blue-800/50 text-ti-blue-100 text-sm font-medium mb-4">
              <span>Comprehensive Services</span>
            </div>
            <h2 className="text-4xl font-display font-bold mb-6">
              Our Comprehensive DStv Installation Services
            </h2>
            <p className="text-lg text-ti-blue-100">
              We offer a complete range of DStv installation and repair services to meet all your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Fast DStv no signal troubleshooting",
              "Professional DStv Repair Services",
              "Additional TV point installations",
              "New DStv decoder setup",
              "DStv Extra View Connections",
              "Surround Sound setup and configuration",
              "Dish take-down & DStv Relocations",
              "DStv cable replacements",
              "Satellite dish replacements",
              "Satellite Dish Alignment",
              "LNB Replacements",
              "TV Mounting & Bracket Installations",
            ].map((service, index) => (
              <div key={index} className="bg-ti-blue-900/50 backdrop-blur-sm p-4 rounded-lg border border-ti-blue-800/50 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-ti-blue-300 mr-3 flex-shrink-0" />
                  <span>{service}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 bg-white text-ti-blue-900 font-medium rounded-lg hover:bg-ti-blue-50 transition-colors"
            >
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-ti-blue-100 text-ti-blue-800 text-sm font-medium mb-4">
              <span>Customer Testimonials</span>
            </div>
            <h2 className="text-4xl font-display font-bold mb-6 text-gray-900">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it. Here's what our satisfied customers have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center text-ti-blue-600 font-medium hover:text-ti-blue-800 transition-colors"
            >
              View More Testimonials <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-ti-blue-900 to-ti-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready for Crystal Clear Entertainment?
            </h2>
            <p className="text-xl text-ti-blue-100 mb-10 max-w-2xl mx-auto">
              Contact Trusted Installations today for professional DStv installation services and enjoy an uninterrupted viewing experience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-ti-blue-900 font-medium rounded-lg hover:bg-ti-blue-50 transition-colors shadow-lg"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:0737212512"
                className="px-8 py-4 bg-ti-blue-800 text-white font-medium rounded-lg hover:bg-ti-blue-700 transition-colors border border-ti-blue-600/30 flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" /> Call 073 721 2512
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;

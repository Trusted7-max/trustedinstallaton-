import React from "react";
import { Link } from "react-router-dom";
import { Tv, Radio, Building2, Hotel, SatelliteDish, ArrowRight, Phone, CheckCircle2, Network } from "lucide-react";

const ServicesCommercial = () => {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="bg-gradient-to-r from-ti-blue-900 to-ti-blue-700 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
              <span>Commercial Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              DStv Solutions for Business
            </h1>
            <p className="text-xl text-ti-blue-100 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Professional DStv installation and integration solutions for hotels, offices, restaurants, and other commercial properties.
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

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-ti-blue-100 text-ti-blue-800 text-sm font-medium mb-4">
                <span>Business Benefits</span>
              </div>
              <h2 className="text-4xl font-display font-bold mb-6 text-gray-900">
                Enhance Your Business with Professional DStv Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Trusted Installations provides tailored DStv solutions for businesses of all sizes. Our commercial services are designed to enhance customer experience, provide entertainment options, and create a professional atmosphere.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="p-3 bg-ti-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-ti-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Customized Solutions</h3>
                  <p className="text-gray-600 text-sm">
                    Tailored DStv setups designed for your specific business needs and space.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="p-3 bg-ti-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Tv className="h-6 w-6 text-ti-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Multi-Room Systems</h3>
                  <p className="text-gray-600 text-sm">
                    Connect multiple TVs to one system with independent channel control.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="p-3 bg-ti-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Network className="h-6 w-6 text-ti-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">High-Quality Distribution</h3>
                  <p className="text-gray-600 text-sm">
                    Signal distribution solutions that maintain HD/UHD quality across all screens.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="p-3 bg-ti-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <SatelliteDish className="h-6 w-6 text-ti-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Professional Installation</h3>
                  <p className="text-gray-600 text-sm">
                    Expert installation with minimal disruption to your business operations.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-ti-blue-600/20 to-ti-blue-400/20 rounded-2xl blur-xl"></div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80" 
                  alt="Commercial DStv Installation" 
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="bg-ti-blue-600 text-white px-3 py-1 rounded-lg text-sm font-medium">
                    Trusted by 500+ businesses
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service List Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-ti-blue-100 text-ti-blue-800 text-sm font-medium mb-4">
              <span>Commercial Services</span>
            </div>
            <h2 className="text-4xl font-display font-bold mb-6 text-gray-900">
              Our Commercial DStv Services
            </h2>
            <p className="text-lg text-gray-600">
              We provide comprehensive DStv solutions tailored for various commercial environments.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Hotel Solutions */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/3">
                  <div className="h-full w-full bg-ti-blue-600 flex items-center justify-center p-8">
                    <Hotel className="h-20 w-20 text-white" />
                  </div>
                </div>
                <div className="p-8 md:w-2/3">
                  <h3 className="text-2xl font-display font-semibold mb-4 text-gray-900">
                    Hotel & Hospitality Solutions
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Enhance guest experience with professional DStv installations in hotels, guest houses, and lodges. We provide solutions for individual rooms and common areas.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">HDMI to RF conversion</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Multi-room distribution</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Commercial packages</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">System maintenance</span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-ti-blue-600 font-medium hover:text-ti-blue-800 transition-colors"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Restaurant Solutions */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/3 md:order-2">
                  <div className="h-full w-full bg-ti-blue-700 flex items-center justify-center p-8">
                    <Tv className="h-20 w-20 text-white" />
                  </div>
                </div>
                <div className="p-8 md:w-2/3 md:order-1">
                  <h3 className="text-2xl font-display font-semibold mb-4 text-gray-900">
                    Restaurant & Bar Solutions
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Create an engaging atmosphere for your customers with strategically placed screens showing sports and entertainment. Perfect for restaurants, bars, and pubs.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Sports packages</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Multiple screen setup</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Audio integration</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Strategic placement</span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-ti-blue-600 font-medium hover:text-ti-blue-800 transition-colors"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Office Solutions */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/3">
                  <div className="h-full w-full bg-ti-blue-800 flex items-center justify-center p-8">
                    <Building2 className="h-20 w-20 text-white" />
                  </div>
                </div>
                <div className="p-8 md:w-2/3">
                  <h3 className="text-2xl font-display font-semibold mb-4 text-gray-900">
                    Office & Corporate Solutions
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Professional DStv installations for office reception areas, waiting rooms, and corporate break rooms. Stay updated with news and business channels.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Business packages</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">News channel focus</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Boardroom integration</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Discrete installations</span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-ti-blue-600 font-medium hover:text-ti-blue-800 transition-colors"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Healthcare Solutions */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/3 md:order-2">
                  <div className="h-full w-full bg-ti-blue-900 flex items-center justify-center p-8">
                    <Radio className="h-20 w-20 text-white" />
                  </div>
                </div>
                <div className="p-8 md:w-2/3 md:order-1">
                  <h3 className="text-2xl font-display font-semibold mb-4 text-gray-900">
                    Healthcare & Waiting Area Solutions
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Create a comfortable environment for patients and visitors with DStv installations in waiting rooms, patient lounges, and common areas.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Low volume setup</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Family-friendly channels</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Wall mounting options</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Centralized control</span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-ti-blue-600 font-medium hover:text-ti-blue-800 transition-colors"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-ti-blue-100 text-ti-blue-800 text-sm font-medium mb-4">
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-4xl font-display font-bold mb-6 text-gray-900">
              Commercial Installation Expertise
            </h2>
            <p className="text-lg text-gray-600">
              We understand the unique requirements of commercial DStv installations and provide tailored solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="p-4 bg-ti-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <CheckCircle2 className="h-8 w-8 text-ti-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Commercial Experience</h3>
              <p className="text-gray-600">
                Our team has extensive experience with commercial installations for various business types, ensuring we understand your specific needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="p-4 bg-ti-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <CheckCircle2 className="h-8 w-8 text-ti-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Business-First Approach</h3>
              <p className="text-gray-600">
                We work around your business hours to minimize disruption, with installation schedules that accommodate your operational needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="p-4 bg-ti-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <CheckCircle2 className="h-8 w-8 text-ti-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Ongoing Support</h3>
              <p className="text-gray-600">
                We provide comprehensive support and maintenance plans for commercial clients, ensuring your system continues to perform optimally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-ti-blue-100 text-ti-blue-800 text-sm font-medium mb-4">
              <span>Success Stories</span>
            </div>
            <h2 className="text-4xl font-display font-bold mb-6 text-gray-900">
              Our Commercial Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              See how we've helped businesses enhance their customer experience with our DStv solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 bg-ti-blue-700 flex items-center justify-center">
                <Hotel className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Cape Town Luxury Hotel
                </h3>
                <p className="text-gray-600 mb-4">
                  We installed a comprehensive DStv solution for a 50-room boutique hotel, providing HD content in all rooms with centralized management.
                </p>
                <div className="text-sm text-gray-500">
                  <span className="font-medium">Services:</span> Multi-room installation, HDMI to RF conversion, Central management system
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 bg-ti-blue-800 flex items-center justify-center">
                <Building2 className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Johannesburg Sports Bar
                </h3>
                <p className="text-gray-600 mb-4">
                  We set up a multi-screen sports viewing experience with 8 TVs showing different channels simultaneously, creating the ultimate sports viewing venue.
                </p>
                <div className="text-sm text-gray-500">
                  <span className="font-medium">Services:</span> Multiple screen installation, Audio distribution, Sports package setup
                </div>
              </div>
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
              <h3 className="text-2xl font-display font-bold mb-2">Enhance your business entertainment</h3>
              <p className="text-ti-blue-100">Contact us today for a customized commercial solution.</p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-ti-blue-900 font-medium rounded-lg hover:bg-ti-blue-50 transition-colors"
              >
                Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+27834628367"
                className="inline-flex items-center justify-center px-6 py-3 bg-ti-blue-700 text-white font-medium rounded-lg hover:bg-ti-blue-600 transition-colors border border-ti-blue-600/30"
              >
                <Phone className="mr-2 h-5 w-5" /> +27 83 462 8367
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesCommercial;

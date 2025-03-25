
import React from "react";
import { Link } from "react-router-dom";
import { Tv, Radio, WifiIcon, CheckCircle2, ArrowRight, Phone, Cable, SatelliteDish, Monitor } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  const residentialServices = [
    {
      title: "DStv Installation",
      description: "Professional setup of DStv systems for homes.",
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
      title: "TV Mounting",
      description: "Expert TV mounting services for optimal viewing.",
      icon: <Monitor className="h-6 w-6" />,
      features: ["Wall mount installation", "Cable management", "Perfect positioning"],
      link: "/services/residential",
      imageUrl: "https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  const commercialServices = [
    {
      title: "Commercial DStv",
      description: "DStv solutions for businesses, hotels, and public spaces.",
      icon: <Tv className="h-6 w-6" />,
      features: ["Multi-room setups", "Commercial packages", "Custom solutions"],
      link: "/services/commercial",
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Satellite System Setup",
      description: "Professional satellite systems for commercial properties.",
      icon: <SatelliteDish className="h-6 w-6" />,
      features: ["Commercial dish setup", "Multi-unit distribution", "HD/UHD capability"],
      link: "/services/commercial",
      imageUrl: "https://images.unsplash.com/photo-1578745365975-c637883181b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Cable Distribution",
      description: "Complex cable distribution solutions for businesses.",
      icon: <Cable className="h-6 w-6" />,
      features: ["Multi-room wiring", "Network integration", "Signal amplification"],
      link: "/services/commercial",
      imageUrl: "https://images.unsplash.com/photo-1596385653096-e61ddf5be28f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    },
  ];

  return (
    <main className="pt-24">
      {/* Header */}
      <section className="bg-gradient-to-r from-ti-blue-900 to-ti-blue-700 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              Our Services
            </h1>
            <p className="text-xl text-ti-blue-100 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Professional DStv installation and related services for both residential and commercial clients.
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

      {/* Residential Services */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-ti-blue-100 text-ti-blue-800 text-sm font-medium mb-4">
              <span>Residential Services</span>
            </div>
            <h2 className="text-4xl font-display font-bold mb-6 text-gray-900">
              DStv Services for Your Home
            </h2>
            <p className="text-lg text-gray-600">
              Professional installation and maintenance services for residential DStv customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {residentialServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services/residential"
              className="inline-flex items-center px-6 py-3 bg-ti-blue-600 text-white font-medium rounded-lg hover:bg-ti-blue-700 transition-colors"
            >
              View All Residential Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-ti-blue-100 text-ti-blue-800 text-sm font-medium mb-4">
              <span>Commercial Services</span>
            </div>
            <h2 className="text-4xl font-display font-bold mb-6 text-gray-900">
              DStv Solutions for Business
            </h2>
            <p className="text-lg text-gray-600">
              Professional installation and maintenance services for commercial properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services/commercial"
              className="inline-flex items-center px-6 py-3 bg-ti-blue-600 text-white font-medium rounded-lg hover:bg-ti-blue-700 transition-colors"
            >
              View All Commercial Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Certified Professionals */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-ti-blue-100 text-ti-blue-800 text-sm font-medium mb-2">
                <span>Certified Professionals</span>
              </div>
              <h2 className="text-4xl font-display font-bold mb-6 text-gray-900">
                Why Choose Trusted Installations?
              </h2>
              <p className="text-lg text-gray-600">
                Trusted Installations boasts the best DStv installers in the industry. Our technicians are continuously trained and always up to date with the latest Multichoice technologies.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-ti-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Multichoice Certified</h3>
                    <p className="text-gray-600 text-sm">
                      Our technicians are Multichoice certified and trained
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-ti-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Up-to-Date Training</h3>
                    <p className="text-gray-600 text-sm">
                      Regular attendance at Multichoice workshops
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-ti-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Professional Tools</h3>
                    <p className="text-gray-600 text-sm">
                      Equipped with industry-recommended tools
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-ti-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Service Guarantee</h3>
                    <p className="text-gray-600 text-sm">
                      Guaranteed high-quality installation
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-ti-blue-600 text-white font-medium rounded-lg hover:bg-ti-blue-700 transition-colors"
                >
                  Contact Our Technicians <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-ti-blue-600/20 to-ti-blue-400/20 rounded-2xl blur-xl"></div>
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="DStv Technician" 
                  className="w-full h-auto rounded-xl"
                />
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
              <h3 className="text-2xl font-display font-bold mb-2">Ready for expert DStv installation?</h3>
              <p className="text-ti-blue-100">Contact us today for professional service.</p>
            </div>
            <div className="relative z-10">
              <a 
                href="tel:0737212512" 
                className="inline-flex items-center px-6 py-3 bg-white text-ti-blue-900 font-medium rounded-lg hover:bg-ti-blue-50 transition-colors"
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

export default Services;

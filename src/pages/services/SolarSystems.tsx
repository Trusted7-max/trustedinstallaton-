import React from "react";
import { Link } from "react-router-dom";
import { Sun, CheckCircle2, ArrowRight, Shield, Zap, BatteryCharging, Wrench } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const SolarSystems = () => {
  const benefits = [
    { title: "Reduce Electricity Bills", description: "Generate your own power and significantly cut down on monthly utility costs." },
    { title: "Beat Load Shedding", description: "Keep your lights, fridge, and essential appliances running during outages." },
    { title: "Increase Property Value", description: "Homes equipped with solar energy systems have higher resale values." },
    { title: "Eco-Friendly", description: "Reduce your carbon footprint with clean, renewable energy." }
  ];

  const features = [
    "Tier 1 Solar Panels for Home",
    "High-Capacity Lithium-ion Batteries",
    "Hybrid & Off-grid Inverters",
    "Professional Certificate of Compliance (CoC)",
    "Full System Monitoring App Setup",
    "10-Year Workmanship Guarantee"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-ti-blue-900 text-white pt-32 pb-16 md:pt-40 md:pb-24 min-h-[60vh] flex flex-col justify-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-ti-blue-800 rounded-full inline-block">
                <Sun className="h-12 w-12 text-ti-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Power Your Home with the Best Solar Panels for 2025
            </h1>
            <p className="text-xl md:text-2xl text-ti-blue-100 mb-8 max-w-3xl mx-auto">
              Beat load shedding and reduce your electricity bill with our premium residential solar installations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#quote" className="bg-white text-ti-blue-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors text-lg flex items-center justify-center">
                Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Link to="/services" className="border border-ti-blue-400 text-white hover:bg-ti-blue-800 font-medium px-8 py-4 rounded-lg transition-colors text-lg flex items-center justify-center">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Left Column: Details */}
            <div className="flex flex-col">
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1172&q=80" 
                alt="Solar Systems Installation" 
                className="w-full h-80 object-cover rounded-xl shadow-lg mb-8"
              />
              <h2 className="text-3xl font-display font-semibold mb-6 text-gray-900">
                Reliable Residential Solar Installation
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                With electricity prices constantly rising and unpredictable power outages, there's never been a better time to invest in a solar energy system. We provide top-tier, affordable solar energy options customized to your household's specific needs.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-display font-semibold mb-6 text-gray-900">
                What's Included in Our Installations
              </h3>
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-ti-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Pricing & Quote */}
            <div id="quote" className="lg:mt-0">
              <div className="bg-ti-blue-50 p-8 rounded-2xl border border-ti-blue-100 sticky top-32">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-display font-semibold text-gray-900 mb-2">Estimated Pricing</h3>
                  <div className="text-4xl font-bold text-ti-blue-600 mb-2">Starting from R45,000</div>
                  <p className="text-gray-600 text-sm">
                    Includes: 3kW Hybrid Inverter, 1x Lithium Battery, 4x Panels + Professional Installation & CoC.
                  </p>
                  <div className="mt-4 inline-flex items-center text-xs font-medium bg-green-100 text-green-800 px-3 py-1 rounded-full">
                    <Shield className="w-3 h-3 mr-1" /> Financing Options Available
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <h4 className="text-xl font-semibold mb-6 text-center text-gray-900">Request a Site Inspection & Quote</h4>
                  <ContactForm defaultService="solar-installation" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default SolarSystems;

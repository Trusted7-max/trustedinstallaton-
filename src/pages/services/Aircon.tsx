import React from "react";
import { Link } from "react-router-dom";
import { Wind, CheckCircle2, ArrowRight, Shield, Thermometer, Fan } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Aircon = () => {
  const benefits = [
    { title: "Perfect Temperature Year-Round", description: "Stay cool in summer and warm in winter with modern inverter technology." },
    { title: "Energy Efficient", description: "Newer inverter split AC systems use up to 30% less electricity than older models." },
    { title: "Better Air Quality", description: "Advanced filtration systems remove dust, allergens, and bacteria from your air." },
    { title: "Quiet Operation", description: "Ductless heating and cooling systems are whisper-quiet, perfect for bedrooms." }
  ];

  const features = [
    "Inverter Split AC Installation",
    "Emergency Same-Day AC Repair",
    "Routine Maintenance & Regassing",
    "Ductless Heating & Cooling Solutions",
    "Commercial HVAC Systems",
    "All Major Brands Supported"
  ];

  return (
    <div>
      <section className="bg-ti-blue-900 text-white pt-32 pb-16 md:pt-40 md:pb-24 min-h-[60vh] flex flex-col justify-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-ti-blue-800 rounded-full inline-block">
                <Wind className="h-12 w-12 text-ti-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Fast, Reliable AC Repair & Installation Near You
            </h1>
            <p className="text-xl md:text-2xl text-ti-blue-100 mb-8 max-w-3xl mx-auto">
              From emergency same-day AC repairs to energy-efficient inverter split AC installations. We keep you comfortable.
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Left Column: Details */}
            <div className="flex flex-col">
              <img 
                src="https://images.unsplash.com/photo-1527689638836-411945a2b57c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1036&q=80" 
                alt="Aircon Service" 
                className="w-full h-80 object-cover rounded-xl shadow-lg mb-8"
              />
              <h2 className="text-3xl font-display font-semibold mb-6 text-gray-900">
                Top-Rated Air Conditioning Service Near Me
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Whether you're looking for an AC repair near me to fix a broken unit fast, or you want to upgrade to an energy-saving inverter split AC, our qualified technicians are ready to help. We pride ourselves on quick response times and quality workmanship.
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
                Air Conditioning Services
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

            <div id="quote" className="lg:mt-0">
              <div className="bg-ti-blue-50 p-8 rounded-2xl border border-ti-blue-100 sticky top-32">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-display font-semibold text-gray-900 mb-2">Estimated Pricing</h3>
                  <div className="text-4xl font-bold text-ti-blue-600 mb-2">Starting from R7,500</div>
                  <p className="text-gray-600 text-sm">
                    Installation includes a standard 12,000 BTU Inverter Split AC unit + piping and labor. 
                    <br/><br/>
                    <span className="font-semibold text-ti-blue-800">Repairs starting from R650 call-out.</span>
                  </p>
                  <div className="mt-4 inline-flex items-center text-xs font-medium bg-green-100 text-green-800 px-3 py-1 rounded-full">
                    <Shield className="w-3 h-3 mr-1" /> Licensed Technicians
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <h4 className="text-xl font-semibold mb-6 text-center text-gray-900">Book a Service or Installation</h4>
                  <ContactForm defaultService="aircon" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Aircon;

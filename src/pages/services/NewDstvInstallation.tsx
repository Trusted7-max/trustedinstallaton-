import React, from "react";
import { CheckCircle2, Shield, Wrench, Clock, Tv } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const NewDstvInstallation = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ti-blue-900 to-ti-blue-700 text-white pt-32 pb-16 md:pt-40 md:pb-24 min-h-[60vh] flex flex-col justify-center mb-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
              <span>DStv Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              New DStv Installation Services
            </h1>
            <p className="text-xl text-ti-blue-100 mb-8">
              Professional, fast, and reliable DStv installation. Get your favorite shows and movies set up perfectly the first time with our expert technicians.
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
              alt="DStv Installation" 
              className="w-full h-80 object-cover rounded-xl shadow-lg"
            />
            
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                Crystal Clear Entertainment, Installed Right
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether you are upgrading your home entertainment system or moving into a new house, our certified technicians provide seamless New DStv Installation services. We handle everything from the dish mounting to the decoder setup, ensuring you get the best possible signal strength and picture quality without the hassle.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <div className="h-12 w-12 bg-ti-blue-100 rounded-lg flex items-center justify-center text-ti-blue-600 mb-4">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Certified Technicians</h3>
                  <p className="text-gray-600">Our team is fully trained and certified to handle all DStv setups and configurations.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <div className="h-12 w-12 bg-ti-blue-100 rounded-lg flex items-center justify-center text-ti-blue-600 mb-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Turnaround</h3>
                  <p className="text-gray-600">We aim to get your DStv up and running quickly so you don't miss your favorite programs.</p>
                </div>
              </div>
            </div>

            <div className="bg-ti-blue-50 p-8 rounded-xl border border-ti-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included in the Installation?</h3>
              <ul className="space-y-4">
                {[
                  "Satellite dish mounting and alignment",
                  "Decoder setup and configuration",
                  "LNB installation and testing",
                  "Neat and secure cable routing",
                  "Signal strength optimization",
                  "Remote control setup and programming"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-ti-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Pricing Card */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Estimated Pricing</h3>
                <p className="text-gray-500 mb-4">Professional Installation</p>
                <div className="text-4xl font-display font-bold text-ti-blue-600 mb-2">
                  Starting from R650
                </div>
                <p className="text-sm text-gray-400">
                  *Final price depends on specific requirements and hardware needs.
                </p>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Get a Free Quote</h3>
                <ContactForm defaultService="dstv-installation" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewDstvInstallation;

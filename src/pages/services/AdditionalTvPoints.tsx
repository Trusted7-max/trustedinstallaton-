import React from "react";
import { CheckCircle2, Shield, Cable, Monitor, Share2 } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const AdditionalTvPoints = () => {
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
              Additional TV Points & Extra View
            </h1>
            <p className="text-xl text-ti-blue-100 mb-8">
              Extend your DStv experience to every room in the house. We install extra TV points and configure Extra View setups.
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80" 
              alt="Additional TV Points" 
              className="w-full h-80 object-cover rounded-xl shadow-lg"
            />
            
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                Watch What You Want, Where You Want
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Why limit your entertainment to the living room? With our Additional TV Points and Extra View installation services, we can connect multiple televisions to your DStv system. Keep the whole family happy by allowing everyone to watch different channels in different rooms, all under one subscription.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <div className="h-12 w-12 bg-ti-blue-100 rounded-lg flex items-center justify-center text-ti-blue-600 mb-4">
                    <Share2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Extra View Setup</h3>
                  <p className="text-gray-600">We configure XtraView so you can link up to three decoders under a single subscription.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <div className="h-12 w-12 bg-ti-blue-100 rounded-lg flex items-center justify-center text-ti-blue-600 mb-4">
                    <Cable className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Neat Cabling</h3>
                  <p className="text-gray-600">We ensure all new cables run to extra rooms are neatly concealed and professionally installed.</p>
                </div>
              </div>
            </div>

            <div className="bg-ti-blue-50 p-8 rounded-xl border border-ti-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Multi-Room Services</h3>
              <ul className="space-y-4">
                {[
                  "Installation of additional TV viewing points",
                  "DStv XtraView setup and linking",
                  "HDMI matrix and splitting solutions",
                  "Signal boosters for long cable runs",
                  "Smart TV internet connectivity",
                  "Testing picture quality across all points"
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
                <p className="text-gray-500 mb-4">Per Additional Point</p>
                <div className="text-4xl font-display font-bold text-ti-blue-600 mb-2">
                  Starting from R550
                </div>
                <p className="text-sm text-gray-400">
                  *Excludes cost of additional decoders if requested.
                </p>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Get a Free Quote</h3>
                <ContactForm defaultService="additional-tv-points" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdditionalTvPoints;

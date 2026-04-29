import React from "react";
import { CheckCircle2, Shield, Wrench, Clock, Activity } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const SignalTroubleshooting = () => {
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
              DStv Signal Troubleshooting
            </h1>
            <p className="text-xl text-ti-blue-100 mb-8">
              Experiencing E48-32 or lost signal? We diagnose and fix poor reception fast so you can get back to watching.
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
              alt="Signal Troubleshooting" 
              className="w-full h-80 object-cover rounded-xl shadow-lg"
            />
            
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                Restore Your Perfect Picture
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nothing is more frustrating than losing your DStv signal right before the big game or your favorite show. Whether it's due to bad weather, a misaligned dish, or faulty cabling, our expert technicians use advanced diagnostic tools to pinpoint the problem and restore your signal quickly.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <div className="h-12 w-12 bg-ti-blue-100 rounded-lg flex items-center justify-center text-ti-blue-600 mb-4">
                    <Activity className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Diagnostics</h3>
                  <p className="text-gray-600">We use professional signal meters to accurately detect and resolve reception issues.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <div className="h-12 w-12 bg-ti-blue-100 rounded-lg flex items-center justify-center text-ti-blue-600 mb-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Rapid Response</h3>
                  <p className="text-gray-600">We prioritize signal loss calls to ensure you experience minimal downtime.</p>
                </div>
              </div>
            </div>

            <div className="bg-ti-blue-50 p-8 rounded-xl border border-ti-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Issues We Fix</h3>
              <ul className="space-y-4">
                {[
                  "E48-32 No Signal Error",
                  "Pixelated or freezing picture",
                  "Missing channels",
                  "Satellite dish realignment after storms",
                  "Faulty LNB replacement",
                  "Damaged or degraded cabling"
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
                <p className="text-gray-500 mb-4">Diagnostic & Repair</p>
                <div className="text-4xl font-display font-bold text-ti-blue-600 mb-2">
                  Starting from R450
                </div>
                <p className="text-sm text-gray-400">
                  *Final price depends on if hardware replacement (like LNB) is needed.
                </p>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Get a Free Quote</h3>
                <ContactForm defaultService="signal-troubleshooting" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignalTroubleshooting;

import React from "react";
import { CheckCircle2, Shield, Monitor, PenTool, Tv } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const TvMounting = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ti-blue-900 to-ti-blue-700 text-white pt-32 pb-16 md:pt-40 md:pb-24 min-h-[60vh] flex flex-col justify-center mb-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
              <span>Audio/Visual Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Professional TV Mounting
            </h1>
            <p className="text-xl text-ti-blue-100 mb-8">
              Secure, level, and clean TV wall mounting services. We hide the cables and optimize your viewing angle.
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&auto=format&fit=crop&w=1057&q=80" 
              alt="TV Mounting" 
              className="w-full h-80 object-cover rounded-xl shadow-lg"
            />
            
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                Sleek, Secure, and Perfectly Positioned
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A wall-mounted TV instantly modernizes your living space, but it needs to be done right. Our professional TV Mounting service guarantees that your expensive television is securely fastened to the wall, perfectly leveled, and positioned for the optimal viewing angle. Say goodbye to messy cables and hello to a cinematic living room.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <div className="h-12 w-12 bg-ti-blue-100 rounded-lg flex items-center justify-center text-ti-blue-600 mb-4">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Installation</h3>
                  <p className="text-gray-600">We use high-quality brackets and heavy-duty anchors suitable for drywall, brick, or concrete.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <div className="h-12 w-12 bg-ti-blue-100 rounded-lg flex items-center justify-center text-ti-blue-600 mb-4">
                    <PenTool className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Cable Concealment</h3>
                  <p className="text-gray-600">We manage and hide unsightly wires to give your wall a clean, floating-screen appearance.</p>
                </div>
              </div>
            </div>

            <div className="bg-ti-blue-50 p-8 rounded-xl border border-ti-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mounting Services</h3>
              <ul className="space-y-4">
                {[
                  "Fixed, tilt, and full-motion bracket installation",
                  "Mounting on drywall, brick, and concrete",
                  "In-wall or trunking cable concealment",
                  "Soundbar mounting and integration",
                  "Optimal viewing height calculation",
                  "Connecting and configuring external devices"
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
                <p className="text-gray-500 mb-4">Professional Mounting</p>
                <div className="text-4xl font-display font-bold text-ti-blue-600 mb-2">
                  Starting from R450
                </div>
                <p className="text-sm text-gray-400">
                  *Price varies based on TV size and if a bracket needs to be supplied.
                </p>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Get a Free Quote</h3>
                <ContactForm defaultService="tv-mounting" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TvMounting;

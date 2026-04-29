import React from "react";
import { CheckCircle2, Shield, Speaker, Music, Settings } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const SurroundSoundSetup = () => {
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
              Home Theater & Surround Sound Setup
            </h1>
            <p className="text-xl text-ti-blue-100 mb-8">
              Immerse yourself in cinema-quality audio. We install, wire, and calibrate surround sound systems for the ultimate viewing experience.
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1142&q=80" 
              alt="Surround Sound Setup" 
              className="w-full h-80 object-cover rounded-xl shadow-lg"
            />
            
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                Bring the Cinema to Your Living Room
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Great video needs great audio. Our Surround Sound Setup service ensures you hear every whisper and feel every explosion. We handle everything from placing the speakers in the acoustically optimal locations to neatly running the speaker wire and calibrating the receiver to match your room's unique acoustics.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <div className="h-12 w-12 bg-ti-blue-100 rounded-lg flex items-center justify-center text-ti-blue-600 mb-4">
                    <Music className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Acoustic Calibration</h3>
                  <p className="text-gray-600">We fine-tune your receiver's EQ and delay settings to perfectly match your room's layout.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <div className="h-12 w-12 bg-ti-blue-100 rounded-lg flex items-center justify-center text-ti-blue-600 mb-4">
                    <Settings className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Clean Aesthetics</h3>
                  <p className="text-gray-600">Speaker wire is hidden away in walls, ceilings, or trunking to maintain a clean aesthetic.</p>
                </div>
              </div>
            </div>

            <div className="bg-ti-blue-50 p-8 rounded-xl border border-ti-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Audio Setup Services</h3>
              <ul className="space-y-4">
                {[
                  "5.1, 7.1, and Dolby Atmos system setups",
                  "Soundbar and subwoofer placement",
                  "In-ceiling and in-wall speaker installation",
                  "A/V Receiver wiring and configuration",
                  "Hidden speaker cable routing",
                  "Multi-zone audio setups"
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
                <p className="text-gray-500 mb-4">Setup & Calibration</p>
                <div className="text-4xl font-display font-bold text-ti-blue-600 mb-2">
                  Starting from R850
                </div>
                <p className="text-sm text-gray-400">
                  *Price depends on system complexity and cable concealment requirements.
                </p>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Get a Free Quote</h3>
                <ContactForm defaultService="surround-sound-setup" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SurroundSoundSetup;

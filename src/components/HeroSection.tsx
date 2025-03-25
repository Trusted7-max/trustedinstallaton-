
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0);
  const rotatingTexts = [
    "DStv Installation Experts",
    "Signal Troubleshooting",
    "TV Mounting Specialists",
    "Dish Alignment Pros",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-ti-blue-950 to-ti-blue-800 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      
      {/* Main content */}
      <div className="container-custom relative z-10 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 animate-slide-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-ti-blue-700/30 border border-ti-blue-500/30 text-ti-blue-200 text-sm font-medium mb-2">
              <Check className="mr-1 h-4 w-4" /> Approved DStv Installers
            </div>
            
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
              South Africa's Premier 
              <div className="h-16 sm:h-24 overflow-hidden mt-2">
                <div className="relative h-full">
                  {rotatingTexts.map((text, index) => (
                    <div 
                      key={index}
                      className={`absolute transition-all duration-700 ease-in-out w-full text-ti-blue-200 ${
                        index === textIndex 
                          ? "opacity-100 translate-y-0" 
                          : "opacity-0 translate-y-full"
                      }`}
                    >
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </h1>
            
            <p className="text-lg text-ti-blue-100 max-w-xl">
              Professional DStv installations, decoder repairs, and TV mounting services across major provinces in South Africa.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <Link 
                to="/contact" 
                className="bg-ti-blue-500 hover:bg-ti-blue-600 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                Get A Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/services" 
                className="bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/10 flex items-center justify-center"
              >
                Our Services
              </Link>
            </div>
            
            <div className="flex items-center space-x-4 pt-6">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-ti-blue-600 flex items-center justify-center text-white text-sm border-2 border-ti-blue-950">
                  <Check className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-ti-blue-600 flex items-center justify-center text-white text-sm border-2 border-ti-blue-950">
                  <Check className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-ti-blue-600 flex items-center justify-center text-white text-sm border-2 border-ti-blue-950">
                  <Check className="h-5 w-5" />
                </div>
              </div>
              <div className="text-sm text-ti-blue-100">
                <p>Trusted by 1000+ customers</p>
                <p className="text-xs text-ti-blue-300">Fast response and quality service</p>
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block animate-slide-in-right">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-ti-blue-600 to-ti-blue-400 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
            <div className="relative glass-dark p-4 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1597506893613-5c0c3b4d8891?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80" 
                alt="DStv Installation" 
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass-dark p-4 rounded-xl">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ti-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">24/7 Support</h3>
                      <p className="text-gray-300 text-sm">Call now for quick service</p>
                      <a href="tel:0737212512" className="text-ti-blue-300 hover:text-ti-blue-200 font-medium">
                        073 721 2512
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-24">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#f8fafc" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#f8fafc" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#f8fafc"></path>
        </svg>
      </div>
    </div>
  );
};

// Missing import for Phone icon
import { Phone } from "lucide-react";

export default HeroSection;

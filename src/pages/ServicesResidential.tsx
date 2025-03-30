import React from "react";
import { Link } from "react-router-dom";
import { Tv, Radio, Monitor, SatelliteDish, Wrench, Speaker, Cable, ArrowRight, Phone, CheckCircle2 } from "lucide-react";

const ServicesResidential = () => {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="bg-gradient-to-r from-ti-blue-900 to-ti-blue-700 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
              <span>Residential Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              DStv Services for Your Home
            </h1>
            <p className="text-xl text-ti-blue-100 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Professional installation, maintenance, and repair services for residential DStv customers.
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

      {/* Service List Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title mb-10">Our Residential Services</h2>
            
            <div className="space-y-10">
              {/* Service 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="bg-ti-blue-100 p-8 rounded-xl flex justify-center">
                    <Tv className="h-20 w-20 text-ti-blue-600" />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-display font-semibold mb-4 text-gray-900">
                    New DStv Installation
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Complete setup of new DStv systems, including decoder installation, satellite dish mounting, cabling, and system configuration. We ensure optimal signal strength and picture quality.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Decoder setup and configuration</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Satellite dish installation</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Cable routing and management</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Signal testing and optimization</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-10"></div>

              {/* Service 2 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="bg-ti-blue-100 p-8 rounded-xl flex justify-center">
                    <Radio className="h-20 w-20 text-ti-blue-600" />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-display font-semibold mb-4 text-gray-900">
                    Signal Troubleshooting
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Quick and effective diagnosis and resolution of DStv signal problems. We identify and fix issues affecting your viewing experience, from weak signals to complete signal loss.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">No signal troubleshooting</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Picture quality issues</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Satellite dish realignment</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Weather-related problems</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-10"></div>

              {/* Service 3 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="bg-ti-blue-100 p-8 rounded-xl flex justify-center">
                    <Wrench className="h-20 w-20 text-ti-blue-600" />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-display font-semibold mb-4 text-gray-900">
                    DStv Repair Services
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Professional repair services for DStv decoders and equipment. We diagnose and fix hardware issues to restore your viewing experience with minimal downtime.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Decoder troubleshooting</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Remote control issues</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Software updates</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Component replacement</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-10"></div>

              {/* Service 4 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="bg-ti-blue-100 p-8 rounded-xl flex justify-center">
                    <Cable className="h-20 w-20 text-ti-blue-600" />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-display font-semibold mb-4 text-gray-900">
                    Additional TV Points
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Installation of additional TV points to connect multiple televisions to your DStv system. Enjoy your favorite content in multiple rooms without compromising quality.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Multi-room setup</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Cable installation</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Signal boosting</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Testing across all points</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-10"></div>

              {/* Service 5 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="bg-ti-blue-100 p-8 rounded-xl flex justify-center">
                    <Monitor className="h-20 w-20 text-ti-blue-600" />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-display font-semibold mb-4 text-gray-900">
                    TV Mounting
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Professional TV mounting and wall bracket installation services. We ensure your TV is securely mounted with proper cable management for a clean, professional look.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Wall bracket installation</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">TV mounting and setup</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Cable concealment</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Optimal viewing position</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-10"></div>

              {/* Service 6 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="bg-ti-blue-100 p-8 rounded-xl flex justify-center">
                    <Speaker className="h-20 w-20 text-ti-blue-600" />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-display font-semibold mb-4 text-gray-900">
                    Surround Sound Setup
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Complete surround sound system installation and configuration. We set up your audio equipment for the ultimate home theater experience.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Speaker placement</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Receiver configuration</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Audio calibration</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-2" />
                      <span className="text-gray-700">Cable management</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-ti-blue-100 text-ti-blue-800 text-sm font-medium mb-4">
              <span>Pricing</span>
            </div>
            <h2 className="text-4xl font-display font-bold mb-6 text-gray-900">
              Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600">
              We offer competitive pricing for all our residential services. Contact us for a free, no-obligation quote.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8 border-b border-gray-200">
                <h3 className="text-2xl font-display font-semibold mb-4 text-gray-900">
                  How Our Pricing Works
                </h3>
                <p className="text-gray-600 mb-6">
                  Our pricing is determined by several factors, including the type of service, complexity of the installation, equipment required, and location. We always provide a detailed quote before beginning any work.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Free Assessment</h4>
                      <p className="text-gray-600">We provide a free assessment to determine your exact needs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Detailed Quote</h4>
                      <p className="text-gray-600">You receive a detailed quote with a breakdown of all costs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">No Hidden Fees</h4>
                      <p className="text-gray-600">We maintain complete transparency with no hidden charges</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-ti-blue-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Guaranteed Work</h4>
                      <p className="text-gray-600">All our installations and repairs come with a service guarantee</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-ti-blue-50">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Ready to get started with your DStv installation?
                  </h3>
                  <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 bg-ti-blue-600 text-white font-medium rounded-lg hover:bg-ti-blue-700 transition-colors"
                    >
                      Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                    <a
                      href="tel:+27834628367"
                      className="inline-flex items-center px-6 py-3 bg-white text-ti-blue-900 font-medium rounded-lg border border-ti-blue-200 hover:bg-gray-50 transition-colors"
                    >
                      <Phone className="mr-2 h-5 w-5" /> Call +27 83 462 8367
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-ti-blue-100 text-ti-blue-800 text-sm font-medium mb-4">
              <span>Our Process</span>
            </div>
            <h2 className="text-4xl font-display font-bold mb-6 text-gray-900">
              How We Work
            </h2>
            <p className="text-lg text-gray-600">
              Our simple, efficient process ensures a smooth experience from initial contact to completed installation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 h-full w-1 bg-ti-blue-100 transform md:translate-x-[-50%]"></div>
              <div className="space-y-12 relative">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 flex justify-end order-1 md:order-1 mb-8 md:mb-0">
                    <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-80 md:mr-8 relative">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">1. Contact Us</h3>
                      <p className="text-gray-600">
                        Reach out to us via phone, email, or our contact form to describe your needs.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 flex items-center justify-center w-10 h-10 bg-ti-blue-600 rounded-full transform md:translate-x-[-50%]">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="md:w-1/2 order-2 md:order-2"></div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 order-1 md:order-2 mb-8 md:mb-0">
                    <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-80 md:ml-8 relative">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">2. Assessment</h3>
                      <p className="text-gray-600">
                        We discuss your requirements and provide recommendations and a detailed quote.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 flex items-center justify-center w-10 h-10 bg-ti-blue-600 rounded-full transform md:translate-x-[-50%]">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="md:w-1/2 order-2 md:order-1"></div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 flex justify-end order-1 md:order-1 mb-8 md:mb-0">
                    <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-80 md:mr-8 relative">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">3. Scheduling</h3>
                      <p className="text-gray-600">
                        We arrange a convenient time for our technicians to visit your home.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 flex items-center justify-center w-10 h-10 bg-ti-blue-600 rounded-full transform md:translate-x-[-50%]">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="md:w-1/2 order-2 md:order-2"></div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 order-1 md:order-2 mb-8 md:mb-0">
                    <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-80 md:ml-8 relative">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">4. Installation</h3>
                      <p className="text-gray-600">
                        Our certified technicians complete the installation efficiently and professionally.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 flex items-center justify-center w-10 h-10 bg-ti-blue-600 rounded-full transform md:translate-x-[-50%]">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="md:w-1/2 order-2 md:order-1"></div>
                </div>

                {/* Step 5 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 flex justify-end order-1 md:order-1">
                    <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-80 md:mr-8 relative">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">5. Testing & Demo</h3>
                      <p className="text-gray-600">
                        We thoroughly test the system and demonstrate how to use it.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 flex items-center justify-center w-10 h-10 bg-ti-blue-600 rounded-full transform md:translate-x-[-50%]">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div className="md:w-1/2 order-2 md:order-2"></div>
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
              <h3 className="text-2xl font-display font-bold mb-2">Ready for crystal-clear entertainment?</h3>
              <p className="text-ti-blue-100">Contact us today for professional DStv installation.</p>
            </div>
            <div className="relative z-10">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-ti-blue-900 font-medium rounded-lg hover:bg-ti-blue-50 transition-colors"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesResidential;

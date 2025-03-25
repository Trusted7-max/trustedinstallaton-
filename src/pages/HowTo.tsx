
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle, AlertTriangle, Wrench, Settings2, CheckCircle2, Phone } from "lucide-react";

const HowTo = () => {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="bg-gradient-to-r from-ti-blue-900 to-ti-blue-700 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
              <span>DIY Guides</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              DStv Troubleshooting & How-To Guides
            </h1>
            <p className="text-xl text-ti-blue-100 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Helpful resources to solve common DStv issues and get the most from your system.
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

      {/* Troubleshooting Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-ti-blue-100 text-ti-blue-800 text-sm font-medium mb-4">
              <span>Common Issues</span>
            </div>
            <h2 className="text-4xl font-display font-bold mb-6 text-gray-900">
              DStv Troubleshooting Guide
            </h2>
            <p className="text-lg text-gray-600">
              Follow these steps to resolve common DStv issues. If the problem persists, our professional technicians are just a call away.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Issue 1: No Signal */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-100 bg-ti-blue-50">
                <div className="flex items-center">
                  <AlertTriangle className="h-6 w-6 text-ti-blue-600 mr-3" />
                  <h3 className="text-xl font-display font-semibold text-gray-900">
                    No Signal Issues
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  One of the most common DStv issues is signal loss. This can happen due to various reasons including bad weather, dish misalignment, or cable issues.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-ti-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-ti-blue-600 font-medium text-sm mt-0.5 mr-3">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Check Weather Conditions</h4>
                      <p className="text-gray-600 text-sm">
                        Heavy rain or storms can temporarily affect your signal. If the weather is bad, wait for it to improve and check again.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-ti-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-ti-blue-600 font-medium text-sm mt-0.5 mr-3">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Check Connections</h4>
                      <p className="text-gray-600 text-sm">
                        Ensure all cables are securely connected to your decoder and TV. Check for any visible damage to cables.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-ti-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-ti-blue-600 font-medium text-sm mt-0.5 mr-3">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Restart Your Decoder</h4>
                      <p className="text-gray-600 text-sm">
                        Turn off your decoder, unplug it from the power source, wait 30 seconds, then plug it back in and turn it on.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-ti-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-ti-blue-600 font-medium text-sm mt-0.5 mr-3">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Check Dish Alignment</h4>
                      <p className="text-gray-600 text-sm">
                        Visually inspect your satellite dish to ensure it hasn't moved or been damaged. If it appears misaligned, professional assistance is recommended.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Issue 2: Picture Quality */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-100 bg-ti-blue-50">
                <div className="flex items-center">
                  <Settings2 className="h-6 w-6 text-ti-blue-600 mr-3" />
                  <h3 className="text-xl font-display font-semibold text-gray-900">
                    Poor Picture Quality
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  If you're experiencing pixelation, freezing, or poor picture quality, try these steps to improve your viewing experience.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-ti-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-ti-blue-600 font-medium text-sm mt-0.5 mr-3">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Check Signal Strength</h4>
                      <p className="text-gray-600 text-sm">
                        Press Menu on your remote, go to Settings, then System Status to check your signal strength. It should ideally be above 70%.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-ti-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-ti-blue-600 font-medium text-sm mt-0.5 mr-3">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Check TV Settings</h4>
                      <p className="text-gray-600 text-sm">
                        Ensure your TV picture settings are optimized. Adjust brightness, contrast, and sharpness for the best viewing experience.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-ti-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-ti-blue-600 font-medium text-sm mt-0.5 mr-3">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Use HDMI Connection</h4>
                      <p className="text-gray-600 text-sm">
                        If you're not already using an HDMI cable to connect your decoder to your TV, switch to HDMI for better picture quality.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-ti-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-ti-blue-600 font-medium text-sm mt-0.5 mr-3">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Clean Equipment</h4>
                      <p className="text-gray-600 text-sm">
                        Dust on your decoder or dish can affect performance. Gently clean your equipment and ensure good ventilation around your decoder.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Issue 3: Remote Control */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-100 bg-ti-blue-50">
                <div className="flex items-center">
                  <Wrench className="h-6 w-6 text-ti-blue-600 mr-3" />
                  <h3 className="text-xl font-display font-semibold text-gray-900">
                    Remote Control Problems
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Issues with your remote control can be frustrating. Here's how to troubleshoot common remote control problems.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-ti-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-ti-blue-600 font-medium text-sm mt-0.5 mr-3">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Check Batteries</h4>
                      <p className="text-gray-600 text-sm">
                        Replace the batteries in your remote with fresh ones to ensure they have enough power.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-ti-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-ti-blue-600 font-medium text-sm mt-0.5 mr-3">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Clear Obstructions</h4>
                      <p className="text-gray-600 text-sm">
                        Ensure there's a clear line of sight between your remote and the decoder. Remove any objects blocking the signal.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-ti-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-ti-blue-600 font-medium text-sm mt-0.5 mr-3">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Clean Remote Sensors</h4>
                      <p className="text-gray-600 text-sm">
                        Gently clean the infrared sensor on the front of both the remote and the decoder using a soft, clean cloth.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-ti-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-ti-blue-600 font-medium text-sm mt-0.5 mr-3">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Reset Your Remote</h4>
                      <p className="text-gray-600 text-sm">
                        Remove the batteries, press all buttons once to discharge any remaining power, then reinsert the batteries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DStv Tips Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-ti-blue-100 text-ti-blue-800 text-sm font-medium mb-4">
              <span>Helpful Tips</span>
            </div>
            <h2 className="text-4xl font-display font-bold mb-6 text-gray-900">
              Get the Most from Your DStv
            </h2>
            <p className="text-lg text-gray-600">
              Optimize your DStv experience with these helpful tips and features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-ti-blue-100 p-4 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <CheckCircle2 className="h-6 w-6 text-ti-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">DStv Now App</h3>
              <p className="text-gray-600">
                Download the DStv Now app to watch your favorite shows on mobile devices. Simply log in with your DStv account details to access content on the go.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-ti-blue-100 p-4 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <CheckCircle2 className="h-6 w-6 text-ti-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Catchup Services</h3>
              <p className="text-gray-600">
                Use the DStv Catchup feature to watch shows you've missed. Navigate to the Catchup section on your decoder to find recently aired programs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-ti-blue-100 p-4 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <CheckCircle2 className="h-6 w-6 text-ti-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Recording Features</h3>
              <p className="text-gray-600">
                Set up recordings for your favorite shows or entire series. Use the TV Guide to select programs and press the record button on your remote.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-ti-blue-100 p-4 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <CheckCircle2 className="h-6 w-6 text-ti-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Parental Controls</h3>
              <p className="text-gray-600">
                Set up parental controls to restrict access to adult content. Go to Settings, then Parental Control to set up a PIN and restrictions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-ti-blue-100 p-4 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <CheckCircle2 className="h-6 w-6 text-ti-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Regular Updates</h3>
              <p className="text-gray-600">
                Keep your decoder software updated for the best performance. Your decoder will update automatically when connected to the internet.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-ti-blue-100 p-4 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <CheckCircle2 className="h-6 w-6 text-ti-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Energy Saving</h3>
              <p className="text-gray-600">
                Enable standby mode when not watching to save energy. Configure power saving settings in the System Settings menu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-ti-blue-100 text-ti-blue-800 text-sm font-medium mb-4">
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-4xl font-display font-bold mb-6 text-gray-900">
              Common Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to frequently asked questions about DStv installation and maintenance.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-200">
              {[
                {
                  question: "How often should I realign my DStv dish?",
                  answer: "Your DStv dish should remain properly aligned unless it's physically moved or damaged. If you notice signal issues, it might need realignment. We recommend a professional check-up every 1-2 years to ensure optimal positioning."
                },
                {
                  question: "Can weather affect my DStv signal?",
                  answer: "Yes, severe weather conditions like heavy rain, storms, or high winds can temporarily affect your DStv signal quality. The signal usually returns to normal once the weather improves."
                },
                {
                  question: "What's the difference between an Explora and a Single View decoder?",
                  answer: "The Explora decoder offers advanced features like recording, pause, rewind, and catchup services, with larger storage capacity. A Single View decoder provides basic viewing capabilities without these advanced features."
                },
                {
                  question: "How can I set up DStv Extra View?",
                  answer: "Extra View allows you to watch different channels on multiple TVs using one subscription. You'll need multiple decoders connected to the same satellite dish and properly linked on your account. Our technicians can help with professional setup."
                },
                {
                  question: "Why does my DStv say 'No Signal'?",
                  answer: "A 'No Signal' message can be caused by various issues including cable connections, dish alignment, LNB problems, or weather interference. Try the troubleshooting steps in our guide, and if the problem persists, contact our technicians."
                },
                {
                  question: "How do I improve my DStv picture quality?",
                  answer: "To improve picture quality, ensure you're using an HDMI connection, check your TV's picture settings, ensure good signal strength, and keep your decoder software updated. For HD channels, you'll need an HD decoder and subscription."
                }
              ].map((faq, index) => (
                <div key={index} className="p-6">
                  <div className="flex items-start">
                    <HelpCircle className="h-5 w-5 text-ti-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
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
              <h3 className="text-2xl font-display font-bold mb-2">Need expert help?</h3>
              <p className="text-ti-blue-100">Our technicians are ready to solve your DStv issues.</p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-ti-blue-900 font-medium rounded-lg hover:bg-ti-blue-50 transition-colors"
              >
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:0737212512"
                className="inline-flex items-center justify-center px-6 py-3 bg-ti-blue-700 text-white font-medium rounded-lg hover:bg-ti-blue-600 transition-colors border border-ti-blue-600/30"
              >
                <Phone className="mr-2 h-5 w-5" /> 073 721 2512
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowTo;

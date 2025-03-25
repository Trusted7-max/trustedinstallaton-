
import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ti-blue-950 text-white pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-ti-blue-600 font-bold">
                TI
              </div>
              <span className="font-display font-bold text-xl">Trusted Installations</span>
            </Link>
            <p className="text-gray-300 text-sm">
              We are South Africa's leading DStv installation company, providing professional and reliable services across major provinces.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <a href="#" className="bg-ti-blue-800 p-2 rounded-full hover:bg-ti-blue-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-ti-blue-800 p-2 rounded-full hover:bg-ti-blue-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-ti-blue-800 p-2 rounded-full hover:bg-ti-blue-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6 border-b border-ti-blue-800 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-ti-blue-400" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-ti-blue-400" />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/how-to" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-ti-blue-400" />
                  How To
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-ti-blue-400" />
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-ti-blue-400" />
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-ti-blue-400" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6 border-b border-ti-blue-800 pb-2">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/residential" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-ti-blue-400" />
                  DStv Installation
                </Link>
              </li>
              <li>
                <Link to="/services/residential" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-ti-blue-400" />
                  Signal Troubleshooting
                </Link>
              </li>
              <li>
                <Link to="/services/residential" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-ti-blue-400" />
                  TV Mounting
                </Link>
              </li>
              <li>
                <Link to="/services/residential" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-ti-blue-400" />
                  Extra View Setup
                </Link>
              </li>
              <li>
                <Link to="/services/commercial" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-ti-blue-400" />
                  Commercial Installations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6 border-b border-ti-blue-800 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-ti-blue-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:0737212512" className="text-white hover:text-ti-blue-300 transition-colors">
                    073 721 2512
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-ti-blue-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:info@trustedinstallations.co.za" className="text-white hover:text-ti-blue-300 transition-colors">
                    info@trustedinstallations.co.za
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-ti-blue-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">
                    Serving all major provinces across South Africa
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ti-blue-800 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Trusted Installations. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

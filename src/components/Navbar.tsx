import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        { name: "Residential", path: "/services/residential" },
        { name: "Commercial", path: "/services/commercial" },
      ],
    },
    { name: "How To", path: "/how-to" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 text-ti-blue-900 font-display font-bold text-2xl"
          >
            <div className="w-10 h-10 rounded-full bg-ti-blue-600 flex items-center justify-center text-white">
              TI
            </div>
            <span className="hidden sm:inline-block">Trusted Installations</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        location.pathname === item.path ||
                        location.pathname.startsWith(`${item.path}/`)
                          ? "text-ti-blue-600"
                          : "text-gray-700 hover:text-ti-blue-600 hover:bg-gray-100"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <div
                      className={`absolute top-full left-0 w-48 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 origin-top ${
                        isServicesOpen ? "block" : "hidden"
                      }`}
                    >
                      <div className="py-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className={`block px-4 py-2 text-sm ${
                              location.pathname === dropdownItem.path
                                ? "bg-ti-blue-50 text-ti-blue-600"
                                : "text-gray-700 hover:bg-gray-100 hover:text-ti-blue-600"
                            }`}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      location.pathname === item.path
                        ? "text-ti-blue-600"
                        : "text-gray-700 hover:text-ti-blue-600 hover:bg-gray-100"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Phone number display - desktop */}
          <div className="hidden md:flex items-center">
            <div className="text-sm">
              <p className="text-gray-600">Call:</p>
              <a href="tel:+27834628367" className="text-gray-900 font-medium">
                +27 83 462 8367
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[400px] my-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col space-y-2 pt-2 pb-3">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div className="space-y-2">
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={`flex items-center justify-between w-full px-4 py-2 text-base font-medium rounded-md ${
                        location.pathname === item.path ||
                        location.pathname.startsWith(`${item.path}/`)
                          ? "bg-ti-blue-50 text-ti-blue-600"
                          : "text-gray-700"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div
                      className={`transition-all duration-300 overflow-hidden ${
                        isServicesOpen ? "max-h-48" : "max-h-0"
                      }`}
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className={`block pl-8 pr-4 py-2 text-sm rounded-md ${
                            location.pathname === dropdownItem.path
                              ? "bg-ti-blue-50 text-ti-blue-600"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`block px-4 py-2 text-base font-medium rounded-md ${
                      location.pathname === item.path
                        ? "bg-ti-blue-50 text-ti-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="text-sm">
              <p className="text-gray-600">Call:</p>
              <a href="tel:+27834628367" className="text-gray-900 font-medium">
                +27 83 462 8367
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

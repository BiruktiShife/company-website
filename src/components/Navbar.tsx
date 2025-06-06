import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Scale, X, Menu, ChevronDown } from "lucide-react";
import { Button } from "./Button";

const serviceLinks = [
  {
    title: "Real Estate and Construction Litigation",
    href: "/services/real-estate-litigation",
    description: "Comprehensive legal solutions for property matters",
  },
  {
    title: "Intellectual Property",
    href: "/services/intellectual-property",
    description: "Protection for your innovations and creative works",
  },
  {
    title: "Entertainment, Sports and Fashion Law",
    href: "/services/entertainment-law",
    description: "Specialized legal services for creative industries",
  },
  {
    title: "Employment Litigation",
    href: "/services/employment-litigation",
    description: "Resolving workplace disputes and employment issues",
  },
  {
    title: "Family Law",
    href: "/services/family-law",
    description: "Compassionate legal support for family matters",
  },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
      timeoutRef.current = null;
    }, 200);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsTeamOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary shadow-lg" : "bg-transparent backdrop-blur-sm "
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-2 group"
              onClick={closeMenu}
            >
              <Scale className="h-8 w-8 text-white group-hover:text-accent-hover transition-colors duration-200" />
              <span className="text-xl font-bold text-white group-hover:text-accent-hover transition-colors duration-200">
                Law Office
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              to="/"
              className="text-white hover:text-accent-hover transition-colors duration-200 font-medium"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center space-x-2 text-white hover:text-accent-hover transition-colors duration-200 font-medium"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute left-0 mt-2 w-96 bg-white rounded-lg shadow-xl py-3 transform transition-all duration-200 ease-out origin-top-left
                  ${
                    isServicesOpen
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 -translate-y-2 invisible"
                  }`}
              >
                <div className="px-2">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className="block px-4 py-3 rounded-md hover:bg-yellow-50 transition-colors duration-200"
                      onClick={closeMenu}
                    >
                      <div className="font-medium text-gray-900">
                        {service.title}
                      </div>
                      <div className="text-sm text-gray-500 mt-0.5">
                        {service.description}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="text-white hover:text-accent-hover transition-colors duration-200 font-medium"
            >
              About Us
            </Link>

            <Link
              to="/team"
              className="text-white hover:text-accent-hover transition-colors duration-200 font-medium"
            >
              Team
            </Link>

            <Link
              to="/blog"
              className="text-white hover:text-accent-hover transition-colors duration-200 font-medium"
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className="text-white hover:text-accent-hover transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                className="text-white border-white hover:bg-yellow-600 hover:text-white transition-all duration-200 font-medium"
              >
                Request Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-accent-hover transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-primary/95 backdrop-blur-sm shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <Link
              to="/"
              className="block px-3 py-2 text-white hover:text-accent-hover font-medium rounded-md hover:bg-primary-hover/10 transition-colors duration-200"
              onClick={closeMenu}
            >
              Home
            </Link>

            {/* Mobile Services Menu */}
            <div className="space-y-1">
              <button
                className="flex items-center justify-between w-full px-3 py-2 text-white hover:text-accent-hover font-medium rounded-md hover:bg-primary-hover/10 transition-colors duration-200"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`pl-4 space-y-1 overflow-hidden transition-all duration-200 ${
                  isServicesOpen
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    className="block px-3 py-2 text-white hover:text-accent-hover rounded-md hover:bg-primary-hover/10 transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    <div className="font-medium">{service.title}</div>
                    <div className="text-sm text-gray-300 mt-0.5">
                      {service.description}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/about"
              className="block px-3 py-2 text-white hover:text-accent-hover font-medium rounded-md hover:bg-primary-hover/10 transition-colors duration-200"
              onClick={closeMenu}
            >
              About Us
            </Link>

            <Link
              to="/team"
              className="block px-3 py-2 text-white hover:text-accent-hover font-medium rounded-md hover:bg-primary-hover/10 transition-colors duration-200"
              onClick={closeMenu}
            >
              Team
            </Link>

            <Link
              to="/blog"
              className="block px-3 py-2 text-white hover:text-accent-hover font-medium rounded-md hover:bg-primary-hover/10 transition-colors duration-200"
              onClick={closeMenu}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className="block px-3 py-2 text-white hover:text-accent-hover font-medium rounded-md hover:bg-primary-hover/10 transition-colors duration-200"
              onClick={closeMenu}
            >
              Contact
            </Link>

            <div className="px-3 py-2">
              <Button
                variant="outline"
                className="w-full text-white border-white hover:bg-white hover:text-accent transition-all duration-200 font-medium"
                onClick={closeMenu}
              >
                Request Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

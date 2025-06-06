import { Link, useNavigate } from "react-router-dom";
import {
  Scale,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin as LinkedIn,
} from "lucide-react";

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-yellow-500" />
              <span className="text-xl font-bold text-white">Law Office</span>
            </Link>
            <p className="text-sm">
              Providing expert legal services with integrity and dedication
              since 1995.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 text-yellow-600"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 text-yellow-600"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 text-yellow-600"
              >
                <LinkedIn className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="hover:text-yellow-500 text-yellow-600"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-yellow-500 text-yellow-600"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="hover:text-yellow-500 text-yellow-600"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-yellow-500 text-yellow-600"
                >
                  Latest News
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="hover:text-yellow-500 text-yellow-600"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Practice Areas
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/corporate"
                  className="hover:text-yellow-500 text-yellow-600"
                >
                  Corporate Law
                </Link>
              </li>
              <li>
                <Link
                  to="/services/family"
                  className="hover:text-yellow-500 text-yellow-600"
                >
                  Family Law
                </Link>
              </li>
              <li>
                <Link
                  to="/services/criminal"
                  className="hover:text-yellow-500 text-yellow-600"
                >
                  Criminal Defense
                </Link>
              </li>
              <li>
                <Link
                  to="/services/real-estate"
                  className="hover:text-yellow-500 text-yellow-600"
                >
                  Real Estate
                </Link>
              </li>
              <li>
                <Link
                  to="/services/litigation"
                  className="hover:text-yellow-500 text-yellow-600"
                >
                  Civil Litigation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 cursor-pointer hover:text-yellow-500">
                <MapPin className="h-5 w-5 mt-1 text-yellow-500 text-yellow-600" />
                <span>
                  123 Legal Street, Suite 100
                  <br />
                  Addis Ababa, Ethiopia
                </span>
              </li>
              <li
                className="flex items-center space-x-3 cursor-pointer hover:text-yellow-500"
                onClick={() => navigate("/contact")}
              >
                <Phone className="h-5 w-5 text-yellow-600" />
                <span>(+251) 911-123-456</span>
              </li>
              <li
                className="flex items-center space-x-3 cursor-pointer hover:text-yellow-500"
                onClick={() => navigate("/contact")}
              >
                <Mail className="h-5 w-5 text-yellow-600" />
                <span>contact@yosephdesta.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              &copy; 2024 Yoseph Desta Law Office. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-sm hover:text-yellow-500 text-yellow-600"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm hover:text-yellow-500 text-yellow-600"
              >
                Terms of Service
              </Link>
              <Link
                to="/sitemap"
                className="text-sm hover:text-yellow-500 text-yellow-600"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

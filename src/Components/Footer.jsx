import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 text-center md:text-left">
        {/* Footer Top Section */}
        <div className="grid md:grid-cols-4 gap-12 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-semibold text-indigo-400">About Us</h3>
            <p className="mt-4 text-gray-400">
              We provide professional cleaning services that ensure your home or
              office remains spotless.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold text-indigo-400">
              Quick Links
            </h3>
            <ul className="mt-4 text-gray-400 space-y-2">
              <li>
                <a href="#home" className="hover:text-indigo-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-600">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-indigo-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-2xl font-semibold text-indigo-400">
              Contact Us
            </h3>
            <p className="mt-4 text-gray-400">📞 (336) 456-7890</p>
            <p className="text-gray-400">📍 123 Fleming St, Greensboro,NC</p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-2xl font-semibold text-indigo-400">
              Follow Us
            </h3>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-indigo-600"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-indigo-600"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-indigo-600"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 pt-6 mt-6">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Cleaning Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

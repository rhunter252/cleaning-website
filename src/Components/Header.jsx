import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold">
          Hunter Cleaning
        </a>
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#" className="text-gray-700 hover:text-indigo-600">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">
            Services
          </a>

          <a
            href="#"
            className="text-gray-700 hover:text-indigo-600 border-4 rounded-md font-bold border-indigo-600 p-3"
          >
            Contact
          </a>
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <a
            href="#"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            Services
          </a>
          <a
            href="#"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            About
          </a>
          <a
            href="#"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

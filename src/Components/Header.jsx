import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-lg font-semibold tracking-[0.2em]">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-emerald-500 text-white text-sm font-bold shadow-lg">
            KC
          </span>
          <span className="hidden sm:inline">KINGDOM CARE CLEANING</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors">
            Home
          </a>
          <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">
            About
          </a>
          <a href="#services" className="text-gray-700 hover:text-gray-900 transition-colors">
            Services
          </a>

          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-gray-900 px-5 py-2.5 text-white shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
          >
            Contact
          </a>
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-gray-900 shadow-sm transition hover:shadow-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-black/10 bg-white/95 backdrop-blur">
          <a
            href="#home"
            className="block px-6 py-3 text-gray-800 hover:bg-black/5 transition-colors"
          >
            Home
          </a>
          <a
            href="#services"
            className="block px-6 py-3 text-gray-800 hover:bg-black/5 transition-colors"
          >
            Services
          </a>
          <a
            href="#about"
            className="block px-6 py-3 text-gray-800 hover:bg-black/5 transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="block px-6 py-3 text-gray-800 hover:bg-black/5 transition-colors"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

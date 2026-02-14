import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-amber-200/30 bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 text-stone-100 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-4 py-1 sm:px-6">
        <a href="#home" className="group flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl ">
            <img
              src="./kccleaning.jpg"
              alt="Kingdom Care Cleaning logo"
              className="h-20 w-20 object-contain"
            />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-[0.16em] text-amber-100">
              KINGDOM CARE
            </span>
            <span className="block text-[11px] tracking-[0.24em] text-amber-300/80">
              CLEANING
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-2 rounded-full border border-amber-200/30 bg-stone-900/70 p-1 shadow-[0_8px_30px_rgba(0,0,0,0.35)] md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-stone-200 transition hover:bg-amber-200/15 hover:text-amber-100"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-amber-300 px-5 py-2 text-sm font-semibold text-stone-900 transition hover:bg-amber-200"
          >
            Contact
          </a>
        </nav>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-200/30 bg-stone-900/80 text-amber-100 shadow-sm transition hover:bg-stone-800 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-amber-200/20 bg-stone-950/95 px-4 pb-4 md:hidden sm:px-6">
          <div className="mt-3 space-y-1 rounded-2xl border border-amber-200/20 bg-stone-900/90 p-2 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-stone-100 transition hover:bg-amber-200/15 hover:text-amber-100"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 block rounded-xl bg-amber-300 px-4 py-3 text-center text-sm font-semibold text-stone-900 transition hover:bg-amber-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

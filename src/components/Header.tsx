import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "/images/hero/hummingbird.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Hummingbird Mobile Sips"
              className={`h-8 w-8 ${
                isScrolled ? "text-[rgb(225,162,241)]" : "text-white"
              }`}
            />
            <span
              className={`text-2xl font-bold ${
                isScrolled ? "text-slate-800" : "text-white"
              }`}
            >
              Hummingbird Mobile Sips
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors hover:text-pink-400 ${
                  isScrolled ? "text-slate-700" : "text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className={`hidden md:block px-6 py-2 rounded-full font-medium transition-all hover:scale-105 ${
              isScrolled
                ? "bg-purple-400 text-white hover:bg-purple-500"
                : "bg-white text-slate-800 hover:bg-gray-100"
            }`}
          >
            Book Now
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${
              isScrolled ? "text-slate-800" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-slate-700 hover:text bg-purple-400 hover:bg-amber-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button className="mx-4 mt-2 px-4 py-2 bg-purple-300 text-white rounded-full hover:bg-purple-500 transition-colors">
                Book Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from "react";
import { Menu, X, Instagram, Facebook } from "lucide-react";

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
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg py-2 sm:py-4"
            : "bg-transparent py-3 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 min-w-0">
              <img
                src="/HummingbirdMobileSips/images/hero/hummingbird.svg"
                alt="hummingbird"
                className={`h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0 ${
                  isScrolled ? "text-[rgb(225,162,241)]" : "text-white"
                }`}
              />
              <span
                className={`text-sm sm:text-xl lg:text-2xl font-bold truncate ${
                  isScrolled ? "text-slate-800" : "text-white"
                }`}
              >
                <span className="hidden sm:inline">
                  Hummingbird Mobile Sips
                </span>
                <span className="sm:hidden">HMS</span>
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
              className={`md:hidden p-2 flex-shrink-0 z-60 ${
                isMobileMenuOpen
                  ? "text-slate-800"
                  : isScrolled
                  ? "text-slate-800"
                  : "text-white"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="flex flex-col h-full">
            {/* Close button */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-800 p-2 z-60 relative"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 flex flex-col justify-center items-center space-y-8 px-8 -mt-20">
              {/* Social Media Icons */}
              <div className="flex space-x-6 mb-8">
                <a
                  href="#"
                  className="text-slate-800 hover:text-purple-400 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-slate-800 hover:text-purple-400 transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col items-center space-y-6">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-slate-800 text-xl font-light tracking-wide hover:text-purple-400 transition-colors uppercase"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* CTA Button */}
              <button
                className="mt-8 px-8 py-3 bg-purple-400 text-white rounded-full font-medium hover:bg-purple-500 transition-colors uppercase tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Your Event
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

import { Wine, Facebook, Instagram, Twitter, Heart } from "lucide-react";
import barSetup from "/HummingbirdMobileSips/images/footer/setup.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Wedding Bartending",
    "Corporate Events",
    "Private Parties",
    "Birthday Celebrations",
    "Custom Cocktails",
    "Event Planning",
  ];

  return (
    <footer className="relative bg-purple-300 text-white">
      {/* Blurred Background Layer */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${barSetup})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          filter: "blur(6px)",
        }}
      ></div>

      {/* Content Layer */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Wine className="h-8 w-8 text-purple-500" />
                <span className="text-2xl font-bold text-purple-500">
                  Hummingbird Mobile Sips
                </span>
              </div>
              <p className="text-purple-500 mb-6 max-w-md">
                Bringing exceptional cocktails and professional bartending
                services directly to your special events. Creating memorable
                experiences one drink at a time.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-slate-800 p-3 rounded-full text-pink-100 hover:text-amber-400 hover:bg-slate-700 transition-all"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-slate-800 p-3 rounded-full text-pink-100 hover:text-amber-400 hover:bg-slate-700 transition-all"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-slate-800 p-3 rounded-full text-pink-100 hover:text-amber-400 hover:bg-slate-700 transition-all"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-purple-500">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-purple-500 hover:text-emerald-50 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-purple-500">
                Our Services
              </h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service} className="text-purple-500">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-purple-600 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-pink-100 text-sm mb-4 md:mb-0">
                © {currentYear} Hummingbird Mobile Sips. All rights reserved.
              </div>

              <div className="flex items-center text-pink-100 text-sm">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500 mx-1" />
                <span>for unforgettable celebrations</span>
              </div>
            </div>

            <div className="mt-4 text-center md:text-left">
              <div className="text-pink-200 text-xs">
                Licensed • Insured • Professional • Reliable
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

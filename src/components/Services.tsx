import { Wine, Users, Clock, MapPin, Sparkles, Shield } from "lucide-react";

const Services = () => {
  const packages = [
    {
      name: "Essential Package",
      price: "$299",
      duration: "4 hours",
      guests: "Up to 25",
      features: [
        "Professional bartender",
        "Basic bar setup",
        "Classic cocktail menu",
        "All necessary equipment",
        "Ice and basic garnishes",
      ],
      popular: false,
    },
    {
      name: "Premium Package",
      price: "$499",
      duration: "5 hours",
      guests: "Up to 50",
      features: [
        "Experienced mixologist",
        "Elegant bar setup",
        "Craft cocktail menu",
        "Premium spirits selection",
        "Fresh garnishes & syrups",
        "Personalized menu cards",
      ],
      popular: true,
    },
    {
      name: "Luxury Package",
      price: "$799",
      duration: "6 hours",
      guests: "Up to 75",
      features: [
        "Master bartender duo",
        "Stunning bar presentation",
        "Signature cocktail creation",
        "Top-shelf spirits",
        "Molecular mixology options",
        "Custom menu design",
        "Event coordination",
      ],
      popular: false,
    },
  ];

  const services = [
    {
      icon: <Wine className="h-8 w-8" />,
      title: "Craft Cocktails",
      description:
        "Expertly mixed drinks using premium spirits and fresh ingredients",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Professional Service",
      description:
        "Trained bartenders who enhance your event with personality and skill",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Flexible Timing",
      description:
        "Available for events of any duration, from intimate gatherings to all-day celebrations",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "We Come to You",
      description:
        "Full mobile setup anywhere in the city - your home, venue, or outdoor space",
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Custom Menus",
      description:
        "Personalized cocktail menus tailored to your preferences and event theme",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Fully Licensed",
      description:
        "Insured and licensed professionals you can trust for your special event",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-pink-50/20 via-gray-50/60 to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate gatherings to grand celebrations, we provide
            exceptional bartending services tailored to your event's unique
            needs.
          </p>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="text-[rgb(216,148,255)] mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        s{/* Packages */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Event Packages
          </h3>
          <p className="text-lg text-gray-600">
            Choose the perfect package for your celebration
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 ${
                pkg.popular
                  ? "ring-2 ring-[rgb(216,148,255)] transform scale-105"
                  : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[rgb(216,148,255)] text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-slate-800 mb-2">
                  {pkg.name}
                </h4>
                <div className="text-4xl font-bold text-[rgb(216,148,255)] mb-2">
                  {pkg.price}
                </div>
                <div className="text-gray-600">
                  {pkg.duration} • {pkg.guests} guests
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-700"
                  >
                    <div className="w-2 h-2 bg-[rgb(216,148,255)] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  pkg.popular
                    ? "bg-[rgb(216,148,255)] text-white hover:bg-[rgb(216,148,255)]"
                    : "border-2 border-[rgb(216,148,255)] text-[rgb(216,148,255)] hover:bg-[rgb(216,148,255)] hover:text-white"
                }`}
              >
                Select Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

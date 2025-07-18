import { ChevronDown, Star, Users, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/HummingbirdMobileSips/images/hero/hero.png")`,
        }}
      >
        <div className="absolute inset-0 bg-slate-900 bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-16">
        <div className="animate-fade-in-up">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="block sm:inline">Hummingbird Mobile Sips</span>
            <span className="block text-purple-200">Bartending</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto px-2">
            Elevate your events with expertly crafted cocktails and professional
            service. We bring the bar to you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-purple-300 text-white rounded-full font-semibold text-base sm:text-lg hover:bg-purple-400 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Book Your Event
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-slate-800 transition-all duration-300">
              View Packages
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto px-4">
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-2">
                <Star className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400 mr-2" />
                <span className="text-xl sm:text-2xl font-bold">500+</span>
              </div>
              <span className="text-gray-300 text-sm sm:text-base">
                Events Served
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-2">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400 mr-2" />
                <span className="text-xl sm:text-2xl font-bold">98%</span>
              </div>
              <span className="text-gray-300 text-sm sm:text-base">
                Client Satisfaction
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-2">
                <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400 mr-2" />
                <span className="text-xl sm:text-2xl font-bold">5+</span>
              </div>
              <span className="text-gray-300 text-sm sm:text-base">
                Years Experience
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

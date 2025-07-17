import { Award, Clock, Heart, Sparkles } from "lucide-react";
// Use a public folder path for the image
const cucumberDrink = "/images/about/cucumber-drink.png";
const About = () => {
  const achievements = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Certified Mixologists",
      description:
        "Professionally trained bartenders with industry certifications",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "5+ Years Experience",
      description: "Serving the community with exceptional bartending services",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Passion for Craft",
      description:
        "Dedicated to creating memorable experiences through exceptional cocktails",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Premium Quality",
      description:
        "Only the finest spirits and freshest ingredients in every drink",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-pink-50 to-pink-50/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About Hummingbird Mobile Sips
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Hummingbird Mobile Sips and Sweets is a female-owned craft mobile
              bartending company, proudly providing Wilmington, North Carolina
              and its surrounding areas with thoughtfully constructed sips for
              any special event. Whether you are in search of a skilled
              bartender to complete your vision, or would prefer we handle a bit
              more of the logistics, Hummingbird will ensure your experience is
              seamless and unique. Choose from our select bar packages, and add
              on a desert order for a sweet finish. Have something else in mind?
              Let’s chat! Whatever your needs, we look forward to helping your
              guests sip pretty on your special day.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We believe every celebration deserves the perfect drink. Whether
              it's a wedding, corporate event, birthday party, or intimate
              gathering, we craft each cocktail with precision and serve with a
              smile that makes your event truly special.
            </p>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-[rgba(62,116,69,0.47)] text-300 mt-1">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={cucumberDrink}
                alt="Professional bartender crafting cocktails"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-[rgb(112,161,120)] mb-1">
                  500+
                </div>
                <div className="text-sm text-gray-600">Happy Events</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-[rgb(112,161,120)] mb-1">
                  98%
                </div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

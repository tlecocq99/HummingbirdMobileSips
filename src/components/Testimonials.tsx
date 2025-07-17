import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      event: "Wedding Reception",
      rating: 5,
      text: "Hummingbird Mobile Sips made our wedding absolutely perfect! The cocktails were incredible and Susie was so professional and fun. Our guests are still talking about the drinks!",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Michael Chen",
      event: "Corporate Event",
      rating: 5,
      text: "We hired Susie for our company's anniversary party and she exceeded all expectations. The setup was elegant, the service was top-notch, and the custom cocktail menu was a huge hit.",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Emily Rodriguez",
      event: "Birthday Celebration",
      rating: 5,
      text: "Amazing service for my 30th birthday! Susie created signature cocktails just for me and my friends loved the interactive experience. Professional, friendly, and talented!",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our happy clients have
            to say about their experience with Hummingbird Mobile Sips.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-[rgb(240,213,255)] p-3 rounded-full">
                  <Quote className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-amber-400 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-slate-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-[rgb(216,148,255)] text-white p-8 rounded-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Create Your Own Success Story?
            </h3>
            <p className="text-xl mb-6 text-amber-100">
              Join hundreds of satisfied clients who chose Hummingbird Mobile
              Sips for their special events.
            </p>
            <button className="bg-white text-[rgb(216,148,255)] px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
              Get Your Quote Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

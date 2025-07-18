import React, { useState } from "react";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      URL: "/HummingbirdMobileSips/images/gallery/lavcocktail.png",
      alt: "Elegant cocktail presentation",
    },
    {
      URL: "/HummingbirdMobileSips/images/gallery/heartcake.png",
      alt: "Professional bartender at work",
    },
    {
      URL: "/HummingbirdMobileSips/images/gallery/ofash.png",
      alt: "Craft cocktails with garnishes",
    },
    {
      URL: "/HummingbirdMobileSips/images/gallery/bar.png",
      alt: "Mobile bar setup",
    },
    {
      URL: "/HummingbirdMobileSips/images/gallery/peach.png",
      alt: "Colorful cocktail selection",
    },
    {
      URL: "/HummingbirdMobileSips/images/gallery/multiFlowerCake.png",
      alt: "Premium spirits collection",
    },
    {
      URL: "/HummingbirdMobileSips/images/gallery/flowerCake.png",
      alt: "Wedding cocktail service",
    },
    {
      URL: "/HummingbirdMobileSips/images/about/cucumber-drink.png",
      alt: "Event bartending setup",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our recent events and the beautiful cocktails
            we've crafted for celebrations just like yours.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(image.URL ?? null)}
            >
              <img
                src={image.URL ?? null}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900 bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Image
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
              <img
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;

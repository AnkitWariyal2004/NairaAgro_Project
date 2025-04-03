import React, { useEffect, useState } from "react";
import Image from "next/image";
import { faLeaf, faCow, faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Banner3 = () => {
  const images = [
    "/img/service/1.jpeg",
    "/img/service/2.jpeg",
    "/Gallary/4.jpeg",
    "/Gallary/5.jpeg",
    "/Gallary/6.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full bg-white py-10 px-5 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Content - Enhanced with farm products */}
        <div className="flex-1 space-y-6">
          <h3 className="text-green-700 text-lg font-semibold uppercase">
            Welcome to Naira Agro
          </h3>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Organic Farming & Premium Dairy Products
          </h1>

          {/* Updated Feature List with actual farm offerings */}
          <div className="space-y-4">
            {/* Moringa Powder */}
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 p-2 rounded-full">
                <FontAwesomeIcon icon={faLeaf} className="text-green-600 w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Moringa Powder</h4>
                <p className="text-gray-600 text-sm">
                  Nutrient-rich superfood packed with vitamins and antioxidants
                </p>
              </div>
            </div>

            {/* Sahiwal Cows */}
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 p-2 rounded-full">
                <FontAwesomeIcon icon={faCow} className="text-green-600 w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Sahiwal Cows</h4>
                <p className="text-gray-600 text-sm">
                  High-yield dairy breed producing 2,000-2,500kg milk per lactation
                </p>
              </div>
            </div>

            {/* Organic Farming */}
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 p-2 rounded-full">
                <FontAwesomeIcon icon={faSeedling} className="text-green-600 w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Organic Farming</h4>
                <p className="text-gray-600 text-sm">
                  Chemical-free cultivation of pulses, dals, and fruit trees
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-6 p-6 bg-green-50 rounded-xl">
            <h3 className="text-lg font-semibold text-green-700 mb-3">Why Choose Us?</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                <span>Direct from farm to your home</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                <span>100% organic and sustainable practices</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                <span>Supporting local farming communities</span>
              </li>
            </ul>
          </div>

          {/* Image Carousel */}
          <div className="relative w-full max-w-md h-64 mt-8 overflow-hidden rounded-2xl shadow-xl">
            {images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Farm product ${index + 1}`}
                fill
                className={`object-cover absolute transition-all duration-700 ease-in-out rounded-2xl
                  ${index === currentIndex ? "opacity-100 scale-100 z-10" : "opacity-0 scale-110 z-0"}`}
              />
            ))}
          </div>
        </div>

        {/* Right Content - Enhanced with product highlights */}
        <div className="flex-1 relative w-full max-w-xl flex justify-center items-center">
          {/* Main Image */}
          <Image
            src="/img/service/selling-img-1-1.png"
            alt="Organic Farm Products"
            width={600}
            height={600}
            className="w-full h-auto relative z-10"
          />

          {/* Product Badges */}
          <div className="absolute top-0 left-0 bg-white p-3 rounded-lg shadow-md z-20">
            <div className="text-center">
              <div className="text-green-600 font-bold text-xl">100%</div>
              <div className="text-xs text-gray-600">Organic</div>
            </div>
          </div>

          {/* Bottom Left Image - Moringa Powder */}
          <div className="absolute bottom-[45px] left-[-20px] z-20 bg-white p-3 rounded-full shadow-lg">
            <Image
              src="/img/service/selling-img-1-2.png"
              alt="Moringa Powder"
              width={120}
              height={120}
              className="w-20 h-20 object-contain"
            />
            <div className="absolute -bottom-2 -right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
              Superfood
            </div>
          </div>

          {/* Bottom Right Image - Dairy Products */}
          <div className="absolute bottom-[180px] right-[-20px] z-20 bg-white p-3 rounded-full shadow-lg animate-pulse">
            <Image
              src="/img/shep/product-shep-2.png"
              alt="Dairy Products"
              width={120}
              height={100}
              className="w-20 h-16 object-contain"
            />
            <div className="absolute -bottom-2 -right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
              A2 Milk
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner3;
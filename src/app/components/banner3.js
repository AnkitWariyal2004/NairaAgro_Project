import React, { useEffect, useState } from "react";
import Image from "next/image";

const Banner3 = () => {
  const images = [
    "/img/service/service-1-1.jpg",
    "/img/service/service-1-2.jpg",
    "/img/service/service-1-3.jpg",
    "/img/service/service-1-5.jpg",
    "/img/service/service-1-4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full bg-white py-10 px-5 md:px-16">
      {/* Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h3 className="text-green-700 text-lg font-semibold uppercase">
            Welcome to Naira Agro
          </h3>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Agriculture & Organic Product Farm
          </h1>

          {/* Feature List */}
          <div className="space-y-4">
            {/* List Item 1 */}
            <div className="flex items-center space-x-3">
              <Image
                src="/img/icon/list-icon.png"
                alt="List Icon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-gray-700 text-base">
                Before you can dive-in to creating an effective user experience
              </span>
            </div>

            {/* List Item 2 */}
            <div className="flex items-center space-x-3">
              <Image
                src="/img/icon/list-icon.png"
                alt="List Icon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-gray-700 text-base">
                Intuitive user experience for your users online
              </span>
            </div>

            {/* List Item 3 */}
            <div className="flex items-center space-x-3">
              <Image
                src="/img/icon/list-icon.png"
                alt="List Icon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-gray-700 text-base">
                Videos within it, each element influences
              </span>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative w-full max-w-md h-64 mt-8 overflow-hidden rounded-2xl shadow-xl">
            {images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                fill
                className={`object-cover absolute transition-all duration-700 ease-in-out rounded-2xl
                  ${index === currentIndex ? "opacity-100 scale-100 z-10" : "opacity-0 scale-110 z-0"}`}
              />
            ))}
          </div>
        </div>

        {/* Right Content - Main Banner */}
<div className="flex-1 relative w-full max-w-xl flex justify-center items-center">
  {/* Main Image */}
  <Image
    src="/img/service/selling-img-1-1.png"
    alt="Main Banner"
    width={600}
    height={600}
    className="w-full h-auto relative z-10"
  />

  {/* Bottom Left Image - Overlapping */}
  <Image
    src="/img/service/selling-img-1-2.png"
    alt="Bottom Left Overlap"
    width={180}
    height={180}
    className="absolute bottom-[45px] left-[-20px] z-20"
  />

  {/* Bottom Right Image - Overlapping */}
  <Image
    src="/img/shep/product-shep-2.png"
    alt="Bottom Right Overlap"
    width={180}
    height={150}
    className="absolute bottom-[180px] right-[-20px] z-20 animate-pulse"
  />
</div>

      </div>
    </div>
  );
};

export default Banner3;

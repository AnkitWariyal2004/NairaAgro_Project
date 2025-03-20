import React, { useEffect, useState } from "react";
import Image from "next/image";

const SwappingCards = () => {
  const cards = [
    {
      img: "/img/service/service-1-1.jpg",
      title: "More Plan",
      desc: "We provide a variety of agricultural plans suited to different needs.",
    },
    {
      img: "/img/service/service-1-2.jpg",
      title: "Our Plan",
      desc: "Carefully designed strategies for sustainable and efficient farming.",
    },
    {
      img: "/img/service/service-1-3.jpg",
      title: "Expert Farmer",
      desc: "Experienced farmers implementing best practices for high yield.",
    },
    {
      img: "/img/service/service-1-5.jpg",
      title: "Quality Product",
      desc: "Ensuring premium-quality, organic, and fresh agricultural products.",
    },
    {
      img: "/img/service/service-1-4.jpg",
      title: "Organic Growth",
      desc: "Sustainable farming methods that promote organic growth naturally.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = cards.length;
  const visibleCards = 7; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalCards]);

  return (
    <div className="px-6 py-16 flex flex-col items-center ">
      {/* Centered Icon */}
      <div className="w-24 h-24 mb-6">
        <Image src="/img/icon/about-icon-1-1.png" alt="Icon" width={96} height={96} />
      </div>

      {/* Top Border */}
      <img src="/img/shep/history-border.png" className="w-full pb-6" alt="Border" />

      {/* Section Title */}
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        How We Do Agriculture Work
      </h1>

      {/* Cards Container */}
      <div className="overflow-hidden w-full max-w-6xl relative">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleCards}%)`,
            width: `${(totalCards + visibleCards) * 100 / visibleCards}%`,
          }}
        >
          {/* Loop Cards for Infinite Scroll */}
          {[...cards, ...cards.slice(0, visibleCards)].map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / visibleCards}%` }}
            >
              <div className=" p-4 flex flex-col items-center text-center transition-transform transform hover:scale-105">
                {/* Image with Spinning Border */}
                <div className="relative w-40 h-40 flex justify-center items-center mb-4">
                  <div className="absolute animate-spin-slow w-40 h-40 border-4 border-dashed border-yellow-400 rounded-full"></div>
                  <div className="rounded-full overflow-hidden w-36 h-36 z-10 shadow-md">
                    <Image
                      src={card.img}
                      alt={card.title}
                      width={144}
                      height={144}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mt-2 max-w-xs">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Border */}
      <img src="/img/shep/history-border.png" className="w-full pt-8" alt="Border" />
    </div>
  );
};

export default SwappingCards;
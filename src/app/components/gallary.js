import React from "react";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  { "img": "/NCSIG/1.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/2.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/3.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/4.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/5.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/6.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/7.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/8.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/9.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/10.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/11.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/12.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/13.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/14.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/15.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/16.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/17.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/18.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/19.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/20.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/21.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/22.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/23.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/24.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/25.jpeg", "alt": "Farm team working" },
  { "img": "/NCSIG/26.jpeg", "alt": "Farm team working" },
  { "img": "/NCSIG/27.jpeg", "alt": "Farm team working" },
  { "img": "/NCSIG/28.jpeg", "alt": "Farm team working" },
  { "img": "/NCSIG/29.jpeg", "alt": "Farm team working" },
  { "img": "/NCSIG/30.jpeg", "alt": "Farm team working" },
  { "img": "/NCSIG/31.jpeg", "alt": "Farm team working" },
  { "img": "/NCSIG/32.jpeg", "alt": "Farm team working" }
];

const breakpointColumnsObj = {
  default: 3,
  1024: 3,
  768: 2,
  640: 1,
};

export default function Gallery() {
  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto text-center mb-12"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Our Gallery
        </h1>
        <div className="w-20 h-1 bg-green-600 mx-auto"></div>
      </motion.div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto gap-4 sm:gap-6"
          columnClassName="masonry-column"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="mb-4 sm:mb-6"
            >
              <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
                {/* Fixed size container with Next.js Image */}
                <div className="w-full aspect-[4/3] bg-gray-200 relative">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                </div>
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-10 h-1 bg-green-400 mb-2"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>
    </div>
  );
}
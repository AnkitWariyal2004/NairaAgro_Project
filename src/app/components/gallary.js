import React from "react";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";

const items = [
  { name: "Gallery Image", img: "/Gallary/1.jpg" },
  { name: "Gallery Image", img: "/Gallary/2.jpg" },
  { name: "Gallery Image", img: "/Gallary/IMG20250315074001.jpg" },
  { name: "Gallery Image", img: "/Gallary/IMG20250315074057.jpg" },
  { name: "Gallery Image", img: "/Gallary/IMG20250315074304.jpg" },
  { name: "Gallery Image", img: "/img/process/process-1-5.png" },
];

// Masonry Breakpoints
const breakpointColumnsObj = {
  default: 4, // 4 columns for large screens
  1024: 3, // 3 columns for medium screens
  768: 2, // 2 columns for tablets
  480: 1, // 1 column for mobile
};

export default function Gallary() {
  return (
    <div className="bg-gray-50 py-24">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4">
          <span className="text-green-700 font-semibold text-xl">
            SOME MEMORIES
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Our Gallery
          </h1>
          <p className="underline font-semibold text-gray-600 hover:text-green-700 cursor-pointer mt-4 md:mt-0">
            View More &gt;&gt;
          </p>
        </div>
      </div>

      {/* Masonry Grid */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-6 max-w-7xl mx-auto px-4"
        columnClassName="masonry-column"
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow mt-4 duration-300"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-auto object-cover rounded-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-end p-4"></div>
          </motion.div>
        ))}
      </Masonry>
    </div>
  );
}

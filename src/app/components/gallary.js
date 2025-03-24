import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    name: "Vegetables",
    
    img: "/img/process/process-1-1.png",
  },
  {
    name: "Legume",

    img: "/img/process/process-1-2.png",
  },
  {
    name: "Nuts",
    
    img: "/img/process/process-1-3.png",
  },
  {
    name: "Organic Fruits",
    
    img: "/img/process/process-1-1.png",
  },
  {
    name: "Dairy",
    
    img: "/img/process/process-1-4.png",
  },
  {
    name: "Cereal",
    
    img: "/img/process/process-1-5.png",
  },
];

export default function Gallary() {
  return (
    <div className="bg-gray-50 py-24">
      {/* Header Section */}
      <div className="text-center mb-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4">
        <span className="text-green-700 font-semibold text-xl text-start">
          SOME MEMORIES
        </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Our Gallary
          </h1>
          <p className="underline font-semibold text-gray-600 hover:text-green-700 cursor-pointer mt-4 md:mt-0">
            View More &gt;&gt;
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {items.slice(0, 4).map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-52 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-end p-4">
              {/* <h2 className="text-white text-xl font-bold">{item.name}</h2> */}
           
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full-Width Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto px-4 mt-6">
        {items.slice(4).map((item, index) => (
          <motion.div
            key={index + 4}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-1000"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-64 object-fill"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-end p-4">
              {/* <h2 className="text-white text-xl font-bold">{item.name}</h2> */}
            </div>
          </motion.div>
        ))}
      </div>
       {/* Grid Section */}
       <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {items.slice(0, 4).map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-52 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-end p-4">
              {/* <h2 className="text-white text-xl font-bold">{item.name}</h2> */}
           
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
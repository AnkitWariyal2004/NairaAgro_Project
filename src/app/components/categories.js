import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    name: "Vegetables",
    items: 40,
    img: "https://tse4.mm.bing.net/th?id=OIP.m0lMsFq10FkZPZN8WIqFtAHaEo&pid=Api",
  },
  {
    name: "Legume",
    items: 40,
    img: "https://imgs.search.brave.com/ovcAxH2TYBh0LyQ1A8UYfCb2MiNDTisYA29X4Vsf7X4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzU1Lzg1LzEy/LzM2MF9GXzI1NTg1/MTI3NF9DMm03Ulo3/UHdnMm9ieWtKejcx/UTB0TFRjQ2dJb3B6/ci5qcGc",
  },
  {
    name: "Nuts",
    items: 29,
    img: "https://tse1.mm.bing.net/th?id=OIP.635hmBwhpE5ToZ7qyuUyhwHaHa&pid=Api",
  },
  {
    name: "Organic Fruits",
    items: 42,
    img: "https://tse4.mm.bing.net/th?id=OIP.PSVcwDm23AKzjh_Q_KSxxwHaFm&pid=Api",
  },
  {
    name: "Dairy",
    items: 35,
    img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/9685/iStock-544807136.jpg",
  },
  {
    name: "Cereal",
    items: 50,
    img: "https://www.healthyfood.com/wp-content/uploads/2017/03/Everyday-shopping-Breakfast-cereals-768x510.jpg",
  },
];

export default function Categories() {
  return (
    <div className="bg-gray-50 py-12">
      {/* Header Section */}
      <div className="text-center mb-8">
        <span className="text-green-700 font-semibold text-xl text-start">
          OUR CATEGORIES
        </span>
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Browse Our Categories
          </h1>
          <p className="underline font-semibold text-gray-600 hover:text-green-700 cursor-pointer mt-4 md:mt-0">
            View All Categories &gt;&gt;
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
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
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4">
              <h2 className="text-white text-xl font-bold">{item.name}</h2>
              <p className="text-white text-lg">{item.items} items</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full-Width Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto px-4 mt-6">
        {items.slice(4).map((item, index) => (
          <motion.div
            key={index + 4}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4">
              <h2 className="text-white text-xl font-bold">{item.name}</h2>
              <p className="text-white text-lg">{item.items} items</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
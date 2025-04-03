import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    name: "Moringa Power:",
    items: "Ritch in antioxidats and nutrients, our moringa power is perfect for health enthusiasts.",
    img: "https://hips.hearstapps.com/hmg-prod/images/nutritional-supplement-moringa-powder-on-rustic-royalty-free-image-1659133952.jpg",
  },
  {
    name: "Sahewal and Gir Cows:",
    items: "We deal in the sale and purchase of these indigenous cow breeds, known for their high-quality milk and gentle nature.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0TIAiLxADMCTakkygOkTd93oSsH53VbGqj_KhK2NB3rViJ0Qs-vN0MCc6sCUbwXVo-KA&usqp=CAU",
  },
  {
    name: "Banana, Mango, and Guava Trees:",
    items: "Our network farm develops and nurtures these fruit trees using organic practices.",
    img: "https://i.ytimg.com/vi/Xls-36Fclso/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD_TeXp4eX3dvUenROTnqc2lHe58A",
  },
  {
    name: "Pulses and Dals:",
    items: "Our chakki-fresh pulses and dals are sourced from local farmers and processed with care to retain their nutritional value.",
    img: "https://cdn.shopaccino.com/refresh/articles/dal-pulse-745535_l.jpg?v=531",
  },
  {
    name: "Dairy Products: ",
    items: "We offer pure, organic milk, butter, ghee, and paneer, free from additives. Sourced sustainably, our fresh dairy ensures quality and nutrition.",
    img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/9685/iStock-544807136.jpg",
  },
  {
    name: "Cereals:",
    items: "ur farm-fresh cereals, including wheat, rice, and millet, are organically grown and packed with nutrition, ensuring purity and rich taste.",
    img: "https://www.healthyfood.com/wp-content/uploads/2017/03/Everyday-shopping-Breakfast-cereals-768x510.jpg",
  },
];

export default function Categories() {
  return (
    <div className="bg-gray-50 py-12">
      {/* Header Section */}
      <div className="text-center mb-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4">
        <span className="text-green-700 font-semibold text-xl text-start">
          OUR CATEGORIES
        </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Browse Our Categories
          </h1>
          {/* <p className="underline font-semibold text-gray-600 hover:text-green-700 cursor-pointer mt-4 md:mt-0">
            View All Categories &gt;&gt;
          </p> */}
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-8xl mx-auto px-4 md:px-16 md:pl-24 md:pr-24">
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
           <div className="absolute inset-0 bg-black bg-opacity-45 hover:backdrop-blur-sm flex flex-col justify-end p-4">

              <h2 className="text-white text-xl font-bold">{item.name}</h2>
              <p className="text-white text-lg">{item.items} items</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full-Width Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-8xl mx-auto px-4 mt-6 md:px-16 md:pl-24 md:pr-24">
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
            <div className="absolute inset-0 bg-black bg-opacity-45 hover:backdrop-blur-sm flex flex-col justify-end p-4">

              <h2 className="text-white text-xl font-bold">{item.name}</h2>
              <p className="text-white text-lg">{item.items} items</p>
            </div>
          </motion.div>
        ))}
        
      </div>
      <motion.div>
          <p className="text-center mt-5 p-3 text-gray-600 text-xl font-sans">&quot;Join us in our journey towards a healthier and more sustainable future&quot;</p>
        </motion.div>
    </div>
  );
}
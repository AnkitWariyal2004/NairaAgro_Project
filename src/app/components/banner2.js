import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const accordionData = [
  {
    title: "Hydroponics Farming",
    content:
      "Hydroponics is a modern, soil-less farming technique that allows plants to grow in nutrient-rich water solutions. This innovative method uses up to 90% less water than traditional farming, making it highly sustainable and eco-friendly.",
  },
  {
    title: "Vertical Farming",
    content:
      "Vertical farming is an innovative agricultural method where crops are grown in stacked layers, often within controlled indoor environments. This space-efficient technique maximizes food production while minimizing land use, making it ideal for urban areas.",
  },
  {
    title: "Organic Farming",
    content:
      "Organic farming is a sustainable agricultural practice that avoids synthetic fertilizers, pesticides, and genetically modified organisms (GMOs), focusing instead on natural methods to maintain soil fertility and crop health. By using compost, crop rotation, and biological pest control, this approach enhances biodiversity, conserves water, and improves soil quality",
  },
  {
    title: "Food Farming",
    content:
      "Food farming is the backbone of human civilization, providing nutritious crops and livestock to sustain global populations. It encompasses various methods, including traditional, organic, hydroponic, and vertical farming, to ensure efficient and sustainable food production.",
  },
];

export default function Banner1() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-gray-50 py-12">
      {/* Welcome Section */}
      <div className="text-center mb-12">
        <img
          src="/img/icon/counter-icon-2-4.png"
          alt="Organic Farm Icon"
          className="mx-auto w-16 h-16 mb-4"
        />
        <p className="text-lg text-green-600 font-semibold mb-2">
          WELCOME TO ORGANIC FARM
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold space-x-8 text-gray-800 max-w-7xl mx-auto">
          <span>Welcome to Naira Agro Farm </span>
          <br></br>
          <span className="text-green-700">Your Gateway to Pure Organic Products</span>
        </h1>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Accordion */}
          <div className="w-full max-w-2xl mx-auto space-y-4">
            <p className="text-lg text-gray-500">At Naira Agro Farm, we are passionate about providing pure organic products directly to our customers. Our mission is to promote sustainable farming practices, support local communities, and bring healthy living to your doorstep.</p>
            {accordionData.map((item, index) => (
              <div key={index} className="border-b border-gray-300 pb-2">
                {/* Accordion Header */}
                <button
                  className="w-full flex items-center justify-between text-left font-semibold text-lg md:text-xl py-3"
                  onClick={() => toggleAccordion(index)}
                >
                  <span
                    className={`${
                      openIndex === index ? "text-green-700" : "text-gray-800"
                    } transition-all`}
                  >
                    {item.title}
                  </span>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-yellow-400 text-yellow-400">
                    {openIndex === index ? (
                      <FaMinus className="text-green-700" />
                    ) : (
                      <FaPlus />
                    )}
                  </span>
                </button>

                {/* Accordion Content with Smooth Animation */}
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`overflow-hidden text-gray-600 ${
                    openIndex === index ? "pt-2" : "h-0"
                  }`}
                >
                  {item.content}
                </motion.div>
              </div>
            ))}
          </div>

          {/* Right Side - Image */}
          <div className="flex items-center justify-center">
            <img
              src="/img/about/about-1-1.jpg"
              alt="About Organic Farming"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
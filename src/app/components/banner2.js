import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const accordionData = [
  {
    title: "Hydroponics Farming",
    content:
      "Lorem ipsum dolor sit amet, porro quisquam lies est, qui dolorem ipsu. Lorem ipsum dolor sit a nui met, porro quisquam. qui dolorem ipsu quia dolor sit amet, consectetur, adipisci velit.",
  },
  {
    title: "Vertical Farming",
    content:
      "This is the content for Vertical Farming. It will be revealed when the button is clicked.",
  },
  {
    title: "Organic Farming",
    content:
      "This is the content for Organic Farming. It will be revealed when the button is clicked.",
  },
  {
    title: "Food Farming",
    content:
      "This is the content for Food Farming. It will be revealed when the button is clicked.",
  },
];

export default function Banner1() {
  const [openIndex, setOpenIndex] = useState(0);

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
          <span>Our mission is to provide great welfare for</span>
          <br></br>
          <span className="text-green-700"> animals, people, and the planet.</span>
        </h1>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Accordion */}
          <div className="w-full max-w-2xl mx-auto space-y-4">
            <p className="text-lg text-gray-500">Lorem ipsum dolor sit amet, porro quisquam est, qui dolorem ipsu quia dolor sit amet, consectetur, adipisci velit. Lorem ipsum dolor a sit amet, porro quisquam est, qui dolorem ipsu quia dolor sit amet, consectetur, adipisci velit.</p>
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
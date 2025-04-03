import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import Image from "next/image";

const accordionData = [
  {
    title: "Moringa Powder",
    content: (
      <>
        <p className="mb-4">Nutritional supplement made from dried Moringa oleifera leaves, packed with essential vitamins and minerals.</p>
        <h3 className="font-semibold text-green-700 mb-2">Benefits:</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Rich in antioxidants that protect against cell damage</li>
          <li>High in plant-based protein (great for vegetarians)</li>
          <li>Contains vitamins A, C, E and minerals like calcium & iron</li>
          <li>Reduces inflammation and supports digestive health</li>
          <li>Boosts energy levels and endurance</li>
        </ul>
        <h3 className="font-semibold text-green-700 mb-2">Uses:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Add to smoothies and juices</li>
          <li>Make nutritious tea</li>
          <li>Use in soups, stews and curries</li>
          <li>Incorporate into baked goods</li>
          <li>Take as capsules or supplements</li>
        </ul>
      </>
    ),
  },
  {
    title: "Sahiwal Cows",
    content: (
      <>
        <p className="mb-4">Premium dairy breed originating from Punjab, Pakistan, known for high milk production and heat tolerance.</p>
        <h3 className="font-semibold text-green-700 mb-2">Characteristics:</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Exceptional heat tolerance (ideal for tropical regions)</li>
          <li>Produces 2,000-2,500 kg milk per lactation</li>
          <li>Strong disease resistance and good fertility</li>
          <li>Long lactation period and excellent mothering ability</li>
          <li>Adaptable to various management systems</li>
        </ul>
      </>
    ),
  },
  {
    title: "Gir Cows",
    content: (
      <>
        <p className="mb-4">Premium Indian dairy breed from Gujarat, renowned for its high milk yield and distinctive appearance.</p>
        <h3 className="font-semibold text-green-700 mb-2">Characteristics:</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Excellent heat tolerance for tropical regions</li>
          <li>Produces 2,200-2,800 kg milk per lactation</li>
          <li>Strong immune system and disease resistance</li>
          <li>Good fertility rates and mothering ability</li>
          <li>Adaptable to different environments</li>
        </ul>
      </>
    ),
  },
  {
    title: "Our Organic Products",
    content: (
      <>
        <p className="mb-4">At Naira Agro Farm, we offer a range of pure organic products:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Moringa Powder:</strong> Rich in antioxidants and nutrients, perfect for health enthusiasts</li>
          <li><strong>Sahiwal and Gir Cows:</strong> Indigenous breeds known for high-quality milk</li>
          <li><strong>Fruit Trees:</strong> Banana, Mango, and Guava trees nurtured using organic practices</li>
          <li><strong>Pulses and Dals:</strong> Chakki-fresh products sourced from local farmers</li>
        </ul>
      </>
    ),
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
        <Image
          src="/img/icon/counter-icon-2-4.png"
          alt="Organic Farm Icon"
          width={64}
          height={64}
          className="mx-auto w-16 h-16 mb-4"
        />
        <p className="text-lg text-green-600 font-semibold mb-2">
          WELCOME TO NAIRA AGRO FARM
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold space-x-8 text-gray-800 max-w-7xl mx-auto">
          <span>Your Gateway to Pure Organic Products</span>
        </h1>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Accordion */}
          <div className="w-full max-w-2xl mx-auto space-y-4">
            <p className="text-lg text-gray-500">
              At Naira Agro Farm, we are passionate about providing pure organic products directly to our customers. 
              Our mission is to promote sustainable farming practices, support local communities, and bring healthy 
              living to your doorstep. Join us in our journey towards a healthier and more sustainable future!
            </p>
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
            <Image
              src="/Gallary/3.jpeg"
              alt="About Organic Farming"
              width={500}
              height={500}
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
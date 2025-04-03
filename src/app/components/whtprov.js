"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faCow,
  faSeedling,
  faBottleDroplet,
  faEarthAmericas
} from "@fortawesome/free-solid-svg-icons";

export default function Whtprovd() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <div
      ref={ref}
      className="min-h-screen bg-cover bg-center flex justify-center items-center relative px-4 md:px-8 lg:px-16 py-16"
      style={{ backgroundImage: "url('/img/bg/4.jpeg')" }}
    >
      <motion.div
        className="bg-[#276c23ae] w-full max-w-7xl p-6 md:p-10 rounded-2xl shadow-2xl backdrop-blur-sm"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
        }}
      >
        {/* Heading Section */}
        <motion.div
          className="text-center md:text-left px-2 md:px-6"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { y: -50, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 1 } },
          }}
        >
          <span className="text-gray-50 text-base md:text-lg font-semibold tracking-widest">
            OUR ORGANIC OFFERINGS
          </span>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-2 leading-tight">
            Premium Farm Products
          </h1>
        </motion.div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-2 md:px-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="flex flex-col p-6 rounded-xl bg-white bg-opacity-10 hover:bg-opacity-20 transition duration-300 h-full"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { delay: index * 0.2, duration: 0.7 },
                },
              }}
            >
              {/* Product Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 w-14 h-14 md:w-20 md:h-20 bg-yellow-400 border-4 border-yellow-100 rounded-full flex items-center justify-center shadow-lg">
                  {product.icon ? (
                    <FontAwesomeIcon 
                      icon={product.icon} 
                      className="w-8 h-8 md:w-10 md:h-10 text-white" 
                    />
                  ) : (
                    <Image
                      src={product.imageIcon}
                      alt={product.title}
                      width={40}
                      height={40}
                      className="w-8 h-8 md:w-10 md:h-10 object-contain"
                    />
                  )}
                </div>
                <h2 className="text-lg md:text-xl font-semibold text-white">
                  {product.title}
                </h2>
              </div>

              {/* Product Description */}
              <div className="space-y-3">
                <p className="text-gray-200 text-sm md:text-base">
                  {product.description}
                </p>
                
                {/* Benefits List */}
                {product.benefits && (
                  <div className="mt-3">
                    <h3 className="text-yellow-300 text-sm font-semibold mb-1">Benefits:</h3>
                    <ul className="text-gray-200 text-xs md:text-sm space-y-1 list-disc list-inside">
                      {product.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Uses List */}
                {product.uses && (
                  <div className="mt-3">
                    <h3 className="text-yellow-300 text-sm font-semibold mb-1">Uses:</h3>
                    <ul className="text-gray-200 text-xs md:text-sm space-y-1 list-disc list-inside">
                      {product.uses.map((use, i) => (
                        <li key={i}>{use}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// Product Data with Font Awesome icons
const products = [
  {
    icon: faLeaf,
    title: "Moringa Powder",
    description: "Nutritional supplement made from dried Moringa oleifera leaves, packed with essential vitamins and minerals.",
    benefits: [
      "Rich in antioxidants that protect against cell damage",
      "High in plant-based protein (great for vegetarians)",
      "Contains vitamins A, C, E and minerals like calcium & iron",
      "Reduces inflammation and supports digestive health",
      "Boosts energy levels and endurance"
    ],
    uses: [
      "Add to smoothies and juices",
      "Make nutritious tea",
      "Use in soups, stews and curries",
      "Incorporate into baked goods",
      "Take as capsules or supplements"
    ]
  },
  {
    icon: faCow,
    title: "Sahiwal Cows",
    description: "Premium dairy breed originating from Punjab, Pakistan, known for high milk production and heat tolerance.",
    benefits: [
      "Exceptional heat tolerance (ideal for tropical regions)",
      "Produces 2,000-2,500 kg milk per lactation",
      "Strong disease resistance and good fertility",
      "Long lactation period and excellent mothering ability",
      "Adaptable to various management systems"
    ],
    uses: [
      "High-quality dairy production",
      "Crossbreeding to improve other breeds",
      "Sustainable farming in hot climates"
    ]
  },
  {
    icon: faCow,
    title: "Gir Cows",
    description: "Premium Indian dairy breed from Gujarat, renowned for its high milk yield and distinctive appearance.",
    benefits: [
      "Excellent heat tolerance for tropical regions",
      "Produces 2,200-2,800 kg milk per lactation",
      "Strong immune system and disease resistance",
      "Good fertility rates and mothering ability",
      "Adaptable to different environments"
    ],
    uses: [
      "Premium dairy milk production",
      "Genetic improvement through crossbreeding",
      "Sustainable livestock farming"
    ]
  },
  {
    icon: faSeedling,
    title: "Organic Farming",
    description: "Chemical-free agricultural practices that prioritize environmental health and sustainability.",
    benefits: [
      "No synthetic pesticides or fertilizers",
      "Higher nutrient density in produce",
      "Better for soil health and biodiversity",
      "Reduces environmental pollution",
      "Supports local ecosystems"
    ],
    uses: [
      "Growing nutritious vegetables and fruits",
      "Sustainable livestock management",
      "Eco-conscious agricultural systems"
    ]
  },
  {
    icon: faBottleDroplet,
    title: "Premium Dairy",
    description: "Farm-fresh milk and dairy products from our heritage cattle breeds.",
    benefits: [
      "Higher nutritional content",
      "Rich in A2 beta-casein protein",
      "Better digestibility",
      "No artificial hormones",
      "Ethically produced"
    ],
    uses: [
      "Direct consumption as milk",
      "Making traditional dairy products",
      "Health supplements"
    ]
  },
  {
    icon: faEarthAmericas,
    title: "Sustainable Farming",
    description: "Holistic farming methods that work in harmony with nature.",
    benefits: [
      "Conserves water and soil resources",
      "Reduces carbon footprint",
      "Promotes biodiversity",
      "Creates resilient ecosystems",
      "Supports farmer livelihoods"
    ],
    uses: [
      "Organic crop production",
      "Responsible animal husbandry",
      "Eco-tourism and education"
    ]
  }
];
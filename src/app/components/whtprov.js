"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
      style={{ backgroundImage: "url('/img/bg/provide-bg-1.jpg')" }}
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
            HERE WE ARE
          </span>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-2 leading-tight">
            What We Provide
          </h1>
        </motion.div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-2 md:px-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 p-4 rounded-xl bg-white bg-opacity-10 hover:bg-opacity-20 transition duration-300"
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
              <div className="flex items-center justify-between gap-3">
{/* Circular Icon Wrapper */}
<div className="flex-shrink-0 w-14 h-14 md:w-20 md:h-20 bg-yellow-400 border-4 border-yellow-100 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition duration-300">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
              </div>

              {/* Text Section */}
              <div className="text-start sm:text-left">
                <h2 className="text-lg md:text-xl font-semibold text-white mb-1">
                  {feature.title}
                </h2>
                <p className="text-gray-200 text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
              </div>
              
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// Feature Data
const features = [
  {
    icon: "/img/icon/counter-icon1.png",
    title: "Quality Foods",
    description:
      "Fresh, nutritious, farm-to-table products for healthy living.",
  },
  {
    icon: "/img/icon/counter-icon2.png",
    title: "All Organic",
    description:
      "No chemicals, naturally grown, eco-friendly, and safe consumption.",
  },
  {
    icon: "/img/icon/counter-icon3.png",
    title: "Friendly Team",
    description:
      "Experienced, supportive, hardworking farmers ensuring top-quality produce.",
  },
  {
    icon: "/img/icon/counter-icon4.png",
    title: "Eco Friendly",
    description:
      "Sustainable practices reducing waste, protecting nature, and conserving resources.",
  },
  {
    icon: "/img/icon/counter-icon5.png",
    title: "Fresh Vegetables",
    description:
      "Pesticide-free, locally sourced, hand-picked, and rich in nutrients.",
  },
  {
    icon: "/img/icon/counter-icon6.png",
    title: "Use Green Products",
    description:
      "Biodegradable materials, organic fertilizers, and eco-conscious farming techniques.",
  },
];

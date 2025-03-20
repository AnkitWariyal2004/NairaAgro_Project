import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Whtprovd() {
  const controls = useAnimation(); // Animation controls
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true }); // Detect when visible

  // Start animation when in view
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <div
      ref={ref} // Attach ref to detect scroll position
      className="h-screen bg-cover bg-center flex justify-start items-center relative px-4 md:px-12"
      style={{ backgroundImage: "url('/img/bg/provide-bg-1.jpg')" }}
    >
      <motion.div
        className="bg-[#276c23ae] p-10 md:p-10 rounded-lg shadow-lg"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
        }}
      >
        {/* Heading Section */}
        <motion.div 
          className="text-center md:text-left"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { y: -50, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 1 } },
          }}
        >
          <span className="text-gray-50 text-xl font-semibold tracking-widest">HERE WE ARE</span>
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mt-2">What We Provide</h1>
        </motion.div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-4 p-4 rounded-lg bg-white bg-opacity-10 hover:bg-opacity-20 transition duration-300"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { delay: index * 0.2, duration: 0.7 } },
              }}
            >
              <div className="p-3 bg-yellow-400 border border-yellow-700 rounded-full shadow-lg transform hover:scale-110 transition duration-300">
                <img src={feature.icon} alt={feature.title} className="w-10 h-10" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">{feature.title}</h2>
                <p className="text-gray-200 text-sm">{feature.description}</p>
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
  { icon: "/img/icon/counter-icon1.png", title: "Quality Foods", description: "Fresh, nutritious, farm-to-table products for healthy living." },
  { icon: "/img/icon/counter-icon2.png", title: "All Organic", description: "No chemicals, naturally grown, eco-friendly, and safe consumption." },
  { icon: "/img/icon/counter-icon3.png", title: "Friendly Team", description: "Experienced, supportive, hardworking farmers ensuring top-quality produce." },
  { icon: "/img/icon/counter-icon4.png", title: "Eco Friendly", description: "Sustainable practices reducing waste, protecting nature, and conserving resources." },
  { icon: "/img/icon/counter-icon5.png", title: "Fresh Vegetables", description: "Pesticide-free, locally sourced, hand-picked, and rich in nutrients." },
  { icon: "/img/icon/counter-icon6.png", title: "Use Green Products", description: "Biodegradable materials, organic fertilizers, and eco-conscious farming techniques." },
];

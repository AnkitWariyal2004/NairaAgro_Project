import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Akaya_Kanadaka } from "next/font/google";

const akayaKanadaka = Akaya_Kanadaka({
  weight: "400",              // Only 400 weight is available for this font
  subsets: ["latin"],         // You can specify subsets for optimization
  display: "swap",            // Optional: avoids layout shift
  preload: true,              // Optional: preload for better performance
  variable: "--font-akaya",   // Optional: create a CSS variable if you want to use it in Tailwind or CSS
});
export default function AboutUs() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [activeSection, setActiveSection] = useState("mission");

  const sections = {
    mission: {
      title: "Our Mission",
      content:
        "At Green Valley Organic Farms, our mission is simple: to grow food that’s good for you and good for the planet. We believe in the power of organic farming to nourish both people and the environment.",
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      content: [
        "Certified Organic: All our products are certified organic by [Certification Body].",
        "Locally Grown: We’re proud to serve our local community with fresh, seasonal produce.",
        "Sustainable Practices: From composting to water conservation, we use eco-friendly methods.",
        "Farm-to-Table Freshness: Our produce is harvested at peak ripeness and delivered straight to your table.",
      ],
    },
    story: {
      title: "Our Story",
      content:
        "Green Valley Organic Farms was founded by [Founder’s Name], a third-generation farmer with a deep love for the land. What began as a passion project has blossomed into a thriving business that supports local families and promotes sustainable agriculture.",
    },
    team: {
      title: "Meet the Team",
      content: [
        "[Name]: Founder and Head Farmer",
        "[Name]: Organic Farming Specialist",
        "[Name]: Community Outreach Coordinator",
      ],
    },
    practices: {
      title: "Our Farming Practices",
      content: [
        "Crop Rotation: To maintain soil health and prevent pests naturally.",
        "Composting: Turning waste into nutrient-rich soil.",
        "No Synthetic Chemicals: We rely on natural methods to protect our crops.",
        "Pollinator-Friendly: We create habitats for bees and butterflies to support biodiversity.",
      ],
    },
    community: {
      title: "Our Commitment to the Community",
      content:
        "We partner with local schools, host farm tours, and participate in farmers' markets to educate and inspire others about the benefits of organic farming. A portion of our profits also goes toward [Local Initiative or Charity].",
    },
  };

  return (
    <div className="overflow-hidden pt-6 bg-yellow-400">
      {/* 🚜 Hero Section */}
      <div
        ref={heroRef}
        className="relative h-screen flex flex-col items-center md:items-end justify-center bg-cover bg-center text-center px-6"
        style={{ backgroundImage: "url('/img/bg/hero-bg-1-1.jpg')" }}
      >
        <div className="backdrop-blur-sm bg-black/20 p-3 rounded-xl shadow-lg md:mr-16">
        <motion.h1
        className="md:text-9xl text-6xl text-green-700 font-bold"
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={
          heroInView
            ? { opacity: 1, y: 0, scale: 1, rotate: 0 }
            : { opacity: 0, y: -50, scale: 0.8, rotate: -10 }
        }
        transition={{ duration: 1, type: "spring", bounce: 0.5 }}
      >
        About Our Farm
      </motion.h1>

      {/* Animated Subheading */}
      <motion.p
        className="text-2xl md:text-3xl text-gray-50 mt-4 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={
          heroInView
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 50, scale: 0.9 }
        }
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.4 }}
      >
        Committed to sustainable, organic farming for a healthier future.
      </motion.p>

      {/* Animated Description */}
      <motion.p
        className={`${akayaKanadaka.className} text-lg md:text-4xl mt-4 max-w-6xl mx-auto text-white`}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={
          heroInView
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 50, scale: 0.9 }
        }
        transition={{ duration: 1, delay: 0.5, type: "spring", bounce: 0.3 }}
      >
        Welcome to Green Valley Organic Farms, where nature and nourishment come
        together! Nestled in the heart of Uttarakhand, our family-owned farm has
        been cultivating the land with love and care since 1985.
      </motion.p>
        </div>
        
      </div>

      {/* 🎯 Interactive Section Buttons and Content */}
      <div  style={{ backgroundImage: "url('/img/bg/history-bg-1.jpg')" }} className="grid p-7 md:p-28 bg-cover grid-cols-1 md:grid-cols-3 gap-8 m-1 rounded-xl">
        {/* Buttons Column */}
        <div className="md:col-span-1 flex flex-col gap-4">
          {Object.keys(sections).map((key) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`px-6 py-2 rounded-lg transition-all ${
                activeSection === key
                  ? "bg-green-600 text-white md:text-3xl"
                  : "bg-gray-200 text-gray-700 hover:bg-green-500 md:text-2xl hover:text-white"
              }`}
            >
              {sections[key].title}
            </button>
          ))}
        </div>

        {/* Content Column */}
        <div className="md:col-span-2 flex items-center">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <h2 className="text-5xl font-bold text-green-800 mb-4">
              {sections[activeSection].title}
            </h2>
            {Array.isArray(sections[activeSection].content) ? (
              <ul className="list-disc list-inside text-gray-700 text-lg">
                {sections[activeSection].content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700 text-2xl">
                {sections[activeSection].content}
              </p>
            )}
          </motion.div>
        </div>
      </div>

    </div>
  );
}
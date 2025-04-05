import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

// ... (keep your existing accordionData and sliderImages arrays)

export default function Banner1() {
  const [openIndex, setOpenIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderHeight, setSliderHeight] = useState(0);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => 
        prev === sliderImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Match slider height to accordion content
  useEffect(() => {
    const updateHeight = () => {
      const accordion = document.querySelector('.accordion-container');
      if (accordion) {
        setSliderHeight(accordion.offsetHeight);
      }
    };
    
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [openIndex]);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === sliderImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? sliderImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-gray-50 py-12">
      {/* Welcome Section (unchanged) */}
      <div className="text-center mb-12">
        <Image
          src="/NCSIG/counter-icon-2-4.png"
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
          <div className="w-full max-w-2xl mx-auto space-y-4 accordion-container">
            <p className="text-lg text-gray-500">
              At Naira Agro Farm, we are passionate about providing pure organic products directly to our customers. 
              Our mission is to promote sustainable farming practices, support local communities, and bring healthy 
              living to your doorstep. Join us in our journey towards a healthier and more sustainable future!
            </p>
            {accordionData.map((item, index) => (
              <div key={index} className="border-b border-gray-300 pb-2">
                <button
                  className="w-full flex items-center justify-between text-left font-semibold text-lg md:text-xl py-3"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className={`${openIndex === index ? "text-green-700" : "text-gray-800"} transition-all`}>
                    {item.title}
                  </span>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-yellow-400 text-yellow-400">
                    {openIndex === index ? <FaMinus className="text-green-700" /> : <FaPlus />}
                  </span>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`overflow-hidden text-gray-600 ${openIndex === index ? "pt-2" : "h-0"}`}
                >
                  {item.content}
                </motion.div>
              </div>
            ))}
          </div>

          {/* Right Side - Full Height Slider */}
          <div className="relative w-full h-full">
            <div 
              className="relative w-full rounded-lg overflow-hidden shadow-lg"
              style={{ height: `${sliderHeight}px` }}
            >
              {/* Slide Images */}
              {sliderImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: currentSlide === index ? 1 : 0,
                    scale: currentSlide === index ? 1 : 0.98
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 ${currentSlide === index ? "z-10" : "z-0"}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </motion.div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-3 rounded-full shadow-md transition-all"
                aria-label="Previous slide"
              >
                <FaChevronLeft className="text-green-700 text-lg" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-3 rounded-full shadow-md transition-all"
                aria-label="Next slide"
              >
                <FaChevronRight className="text-green-700 text-lg" />
              </button>

              {/* Indicators */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentSlide === index ? 'bg-green-600 w-6' : 'bg-white/70'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const sliderImages = [
  {
    id: 1,
    src: "/NCSIG/aboutsection_c/4.jpeg",
    alt: "Organic Farm Landscape"
  },
  {
    id: 2,
    src: "/NCSIG/aboutsection_c/5.jpeg",
    alt: "Moringa Powder Production"
  },
  {
    id: 3,
    src: "/NCSIG/aboutsection_c/6.jpg",
    alt: "Sahiwal Cows Grazing"
  },
  {
    id: 4,
    src: "/NCSIG/aboutsection_c/7.jpeg",
    alt: "Farm Fresh Products"
  }
];


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
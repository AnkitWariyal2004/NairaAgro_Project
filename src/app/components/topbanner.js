"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { Akaya_Kanadaka } from "next/font/google";

const akayaKanadaka = Akaya_Kanadaka({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-akaya",
});

const texts = [
  "Welcome To Naira Agro",
  "Grow Your Dreams",
  "Harvest The Future",
  "Organic & Fresh",
  "Sustainable Farming",
  "Green Revolution",
];

// Array of background images
const backgroundImages = [
  "/NCSIG/slider_h/1.jpg",
  "/NCSIG/slider_h/2.jpeg",
  "/NCSIG/slider_h/3.jpeg",
];

export default function HeroSection() {
  const [currentText, setCurrentText] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);
  const textRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // GSAP animations on mount
    gsap.from(contentRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out"
    });

    // Text animation interval
    const textInterval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % texts.length);
        setFade(true);
      }, 500);
    }, 5000);


    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => {
      clearInterval(textInterval);
      clearInterval(imageInterval);
    };
  }, []);

  useEffect(() => {
    backgroundImages.forEach((src) => {
      const img = new window.Image(); 
      img.src = src;
    });
  }, []);

  return (
    <section className="relative w-full h-[650px] md:h-[675px] flex items-center overflow-hidden bg-gray-900">
      {/* Background Image with overlay - now with sliding effect */}
      <div className="absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out">
        {backgroundImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            ref={index === currentImage ? imageRef : null}
          >
            <Image
              src={src}
              alt="Farm Background"
              fill
              priority={index === 0}
              quality={100}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
          </div>
        ))}
      </div>

      {/* Content Container - Centered */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className="w-full max-w-4xl mx-auto text-center px-4 py-12"
          ref={contentRef}
        >
          {/* Animated Text */}
          <div className="overflow-hidden h-[120px] md:h-[150px] flex items-center justify-center">
            <h1
              className={`${akayaKanadaka.className} text-4xl md:text-5xl lg:text-6xl font-bold text-white transition-all duration-1000 ${
                fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              ref={textRef}
            >
              {texts[currentText]}
            </h1>
          </div>
          
          {/* Subtitle */}
          <p className="text-gray-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Provide great welfare for animals, people, and the planet.
          </p>
          
          {/* Contact Button */}
          <Link 
            href="#contact-us" 
            className="inline-block bg-green-400 hover:bg-green-500 text-gray-900 font-semibold text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-400/30"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
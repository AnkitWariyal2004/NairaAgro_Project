import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { Akaya_Kanadaka } from "next/font/google";

const akayaKanadaka = Akaya_Kanadaka({
  weight: "400",              // Only 400 weight is available for this font
  subsets: ["latin"],         // You can specify subsets for optimization
  display: "swap",            // Optional: avoids layout shift
  preload: true,              // Optional: preload for better performance
  variable: "--font-akaya",   // Optional: create a CSS variable if you want to use it in Tailwind or CSS
});

<Link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />;

const texts = [
  "Grow Your Dreams ",
  "Harvest The Future ",
  "Organic & Fresh ",
  "Sustainable Farming ",
  "Green Revolution ",
];

const images = [
  "/img/hero/hero-img-3-1.png",
  "/img/hero/hero-img-3-2.png",
  "/img/hero/hero-img-3-3.png",
];

export default function ShufflingBanner() {
  const [currentText, setCurrentText] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3200); // Change text every 3 seconds

    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5500); // Change image every 5 seconds

    return () => {
      clearInterval(textInterval);
      clearInterval(imageInterval);
    };
  }, []);

  return (
    <section
    className="mt-24 h-[75vh] md:h-[40vh] lg:h-[55vh] bg-cover bg-center flex justify-center items-end relative"
          style={{ backgroundImage: "url('/img/bg/counter-bg.jpg')" }}
    >
{/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div> */}
<div className="flex flex-col md:flex-row justify-between items-top w-full mt-24 md:pl-32">
      {/* Left Side - Text Content */}
      <div className="text-center md:text-left max-w-lg space-y-4">
        <h1 className={`${akayaKanadaka.className} text-6xl md:text-5xl lg:text-7xl font-semibold text-white animate-fade-in`}>
          {texts[currentText]}
        </h1>
        <p className="text-emerald-500 text-base md:text-lg">
          Provide great welfare for animals, people, and the planet.
        </p>
        <button
          className="text-lg md:text-xl text-white border-2 border-yellow-300 px-4 py-2 md:px-6 md:py-3 rounded-full transition-all duration-300 ease-in-out hover:bg-yellow-300 hover:text-black"
          
        >
          Contact Us
        </button>
      </div>
      
      {/* Right Side - Animated Image */}
      <div className="w-full md:w-1/3 mt-8 md:mt-0 relative">
        <Image
          key={currentImage} // Forces re-render for animation
          src={images[currentImage]}
          alt="Shuffling Banner"
          width={700}
          height={600}
          className="rounded-lg shadow-lg transition-all duration-1000 transform animate-fade-in"
        />
      </div>
    </div>
    </section>
    
  );
}
import { useState, useEffect } from "react";
import Image from "next/image";
import { Akaya_Kanadaka } from "next/font/google";
import Link from "next/link";

const akayaKanadaka = Akaya_Kanadaka({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-akaya",
});

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
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3200); // Change text every 3 seconds

    const imageInterval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(true); // Start fade in
      }, 500); // Wait for fade-out before changing image
    }, 5500); // Change image every 5.5 seconds

    return () => {
      clearInterval(textInterval);
      clearInterval(imageInterval);
    };
  }, []);

  return (
    <section
      className="mt-24 h-[71vh] md:h-[40vh] lg:h-[55vh] bg-cover bg-center flex justify-center items-end relative"
      style={{ backgroundImage: "url('/img/bg/4.jpeg')" }}
    >
      <div className="flex flex-col md:flex-row justify-between items-top w-full mt-24 md:pl-32 p-1">
        {/* Left Side - Text Content */}
        <div className="text-center md:text-left max-w-lg space-y-4">
          <h1
            className={`${akayaKanadaka.className} text-6xl md:text-5xl lg:text-7xl font-semibold text-white transition-opacity duration-1000 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {texts[currentText]}
          </h1>
          <p className="text-white text-base md:text-lg">
            Provide great welfare for animals, people, and the planet.
          </p>
          <div>
          <Link href="#contact-us" className="text-lg md:text-xl text-white border-2 border-yellow-300 px-4 py-2 md:px-6 md:py-3 rounded-full transition-all duration-300 ease-in-out hover:bg-yellow-300 hover:text-black mt-2" >
            Contact Us
          </Link>
          </div>
          
        </div>

        {/* Right Side - Animated Image (Fixed Flickering) */}
        <div className="w-full md:w-1/3 mt-8 md:mt-0 relative">
          <Image
            src={images[currentImage]}
            alt="Shuffling Banner"
            width={700}
            height={600}
            className={`rounded-lg shadow-lg transition-opacity duration-1000 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </section>
  );
}

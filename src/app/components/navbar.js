"use client";
import { Akaya_Kanadaka } from "next/font/google";

const akayaKanadaka = Akaya_Kanadaka({
  weight: "400",              // Only 400 weight is available for this font
  subsets: ["latin"],         // You can specify subsets for optimization
  display: "swap",            // Optional: avoids layout shift
  preload: true,              // Optional: preload for better performance
  variable: "--font-akaya",   // Optional: create a CSS variable if you want to use it in Tailwind or CSS
});

import React, { useState, useEffect, useRef } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaClock,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [navbarTop, setNavbarTop] = useState("top-[32px]"); // Track Green Navbar Position
  const menuRef = useRef(null);
  let lastScrollY = 0;

  // Hide/Show Yellow Navbar on Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowTopBar(false);
      } else {
        setShowTopBar(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update Green Navbar Position Smoothly
  useEffect(() => {
    setNavbarTop(showTopBar ? "top-[32px]" : "top-0");
  }, [showTopBar]);

  // Close Sidebar When Clicking Outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <div className="relative z-50">
      {/* 🔹 Top White Bar */}
      <div
        className={`fixed top-0 left-0 w-full bg-white p-1 transition-transform duration-500 ${
          showTopBar ? "translate-y-0" : "-translate-y-full"
        } z-50`}
      >
        <div className="flex justify-between font-serif font-semibold items-center text-[#333333] text-sm px-3">
          {/* Contact Info */}
          <div className="hidden md:flex gap-4">
            <p className="flex gap-2 items-center">
              <FaMapMarkerAlt /> Dineshpur, 263160
            </p>
            <p className="flex gap-2 items-center">
              <FaEnvelope /> info@email.com
            </p>
            <p className="flex gap-2 items-center">
              <FaPhone /> +91 9876556677
            </p>
            <p className="flex gap-2 items-center">
              <FaClock /> Mon-Sat: 09.30 to 06.00
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-2 md:gap-3 text-lg">
            <p className="flex items-center">follow us:</p>
            {[ FaInstagram, FaFacebookF, FaLinkedinIn].map((Icon, index) => (
        
              <Icon
                key={index}
                className="cursor-pointer transition-transform flex duration-300 hover:scale-125 hover:text-gray-700"
              />
            ))}
          </div>
        </div>
      </div>

      {/* 🔹 Main Green Navbar */}
      <div
        className={`fixed ${navbarTop} left-0 w-full bg-[#1a7b1a] p-4 flex justify-between items-center z-50 transition-all duration-500`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-white text-4xl font-semibold">naira.</span>
          <span className={`${akayaKanadaka.className} text-[#FFD700] text-4xl`}>Agro</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {["Home", "About Us", "Services","Gallary", "Contact Us"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-white text-2xl font-medium hover:text-yellow-400 transition-colors px-4"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>







{/* 🔹 Mobile Sidebar Menu */}
<div
  ref={menuRef}
  className={`fixed top-0 right-0 w-2/3 h-full bg-[#145214] text-white transform ${
    menuOpen ? "translate-x-0" : "translate-x-full"
  } transition-transform duration-300 ease-in-out shadow-lg rounded-l-xl z-[100] flex flex-col`}
>
  {/* Close Button */}
  <button
    className="absolute top-4 right-4 text-2xl hover:text-yellow-400 transition-colors"
    onClick={() => setMenuOpen(false)}
  >
    <FaTimes />
  </button>

  {/* Navigation Links Section */}
  <div className="flex flex-col mt-20 p-4 text-sm">
    {["Home", "About Us", "Services","Gallary", "Contact Us"].map((item, index) => (
      <React.Fragment key={index}>
        <a
          href={`#${item.toLowerCase().replace(" ", "-")}`}
          className="py-3 px-6 text-lg font-medium hover:text-yellow-400 transition-all duration-300 border-b border-gray-600"
          onClick={() => setMenuOpen(false)}
        >
          {item}
        </a>
      </React.Fragment>
    ))}
  </div>

  {/* Push Contact Info to Bottom */}
  <div className="mt-auto p-6 border-t border-gray-600">
    <p className="flex gap-2 items-center text-sm">
      <FaMapMarkerAlt /> Dineshpur, 263160
    </p>
    <p className="flex gap-2 items-center text-sm">
      <FaEnvelope /> info@email.com
    </p>
    <p className="flex gap-2 items-center text-sm">
      <FaPhone /> +91 9876556677
    </p>
    <p className="flex gap-2 items-center text-sm">
      <FaClock /> Mon-Sat: 09.30 to 06.00
    </p>
  </div>
</div>



      {/* Push Content Below Navbar */}
      <div className="mt-[70px] md:mt-[80px]"></div>
    </div>
  );
}

"use client"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaFacebookF,FaLinkedinIn, FaInstagram, FaTwitter, } from "react-icons/fa";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const emailInputRef = useRef(null);

  useEffect(() => {
    // GSAP Animations
    const footer = footerRef.current;

    gsap.from(footer, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: footer,
        start: "top 80%",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(".footer-item", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: footer,
        start: "top 80%",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(".email-input", {
      opacity: 0,
      x: -50,
      duration: 1,
      scrollTrigger: {
        trigger: footer,
        start: "top 80%",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${emailInputRef.current.value}`);
    emailInputRef.current.value = "";
  };

  return (
    <footer
      ref={footerRef}
      style={{ backgroundImage: "url('/img/bg/hero-bg-3.jpg')" }}
      className=" text-white py-12 px-4 md:px-8 lg:px-16 bg-cover"
    >
      <div className="max-w-7xl mx-auto">
        {/* Email Subscription Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Subscribe for Daily Updates
          </h2>
          <form onSubmit={handleSubscribe} className="flex justify-center">
            <input
              ref={emailInputRef}
              type="email"
              placeholder="Enter your email"
              className="email-input bg-white text-gray-800 rounded-l-lg py-3 px-4 w-64 md:w-80 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 text-green-900 font-semibold py-3 px-2 md:px-4 rounded-r-lg hover:bg-yellow-500 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="footer-item">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300 font-light">
              We are dedicated to sustainable farming practices, providing fresh
              and organic produce to our community.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-item">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-thin">
              <li>
                <a href="#home" className="text-gray-300 hover:text-yellow-400 duration-700 hover:scale-105">
                  Home
                </a>
              </li>
              <li>
                <a href="#about-us" className="text-gray-300 hover:text-yellow-400">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-yellow-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact-us" className="text-gray-300 hover:text-yellow-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-item">
            <h3 className="text-xl font-bold mb-4">Reach Our Farm</h3>
            <ul className="space-y-2 font-bold">
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-yellow-400" />
                <span className="text-gray-300">123 Farm Road, Green Valley</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-yellow-400" />
                <span className="text-gray-300">info@farmwebsite.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-yellow-400" />
                <span className="text-gray-300">+1 234 567 890</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaClock className="text-yellow-400" />
                <span className="text-gray-300">Mon - Fri: 8 AM - 6 PM</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="footer-item">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="text-2xl flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-yellow-400">
                <FaFacebookF/>
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400">
                <FaTwitter/>
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400">
                <FaInstagram/>
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400">
                <FaLinkedinIn/>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Nyra Agro. All rights reserved. Made with ❤️ by Jay Sarkar & Parvati & Son's P&L Comapny.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
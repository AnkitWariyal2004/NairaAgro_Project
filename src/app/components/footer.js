"use client"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

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
  }, []);

  return (
    <footer
      ref={footerRef}
      style={{ backgroundImage: "url('/img/bg/4.jpeg')" }}
      className="relative text-white py-12 px-4 md:px-8 lg:px-16 bg-cover bg-center"
    >
      {/* Green-tinted overlay with shadow effect */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.8)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="footer-item">
            <h3 className="text-xl font-bold mb-4 text-green-300 drop-shadow-lg">About Us</h3>
            <p className="text-gray-100 font-light shadow-[0_2px_10px_rgba(0,0,0,0.3)] p-4 rounded-lg bg-green-800/20">
              We are dedicated to sustainable farming practices, providing fresh
              and organic produce to our community.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-item">
            <h3 className="text-xl font-bold mb-4 text-green-300 drop-shadow-lg">Quick Links</h3>
            <ul className="space-y-2 font-thin">
              {['Home', 'About', 'Services', 'Gallary', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-100 hover:text-green-300 duration-300 flex items-center py-2 px-3 rounded-lg hover:bg-green-800/20 hover:shadow-md transition-all"
                  >
                    <span className="w-2 h-2 bg-green-300 rounded-full mr-2 shadow-sm"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-item">
            <h3 className="text-xl font-bold mb-4 text-green-300 drop-shadow-lg">Reach Our Farm</h3>
            <ul className="space-y-3">
              {[
                { icon: <FaMapMarkerAlt className="text-green-300 shadow-sm" />, text: "Naira Agro Farm, Bilgram Road Barbatapur Hardoi, Uttarpradesh" },
                { icon: <FaEnvelope className="text-green-300 shadow-sm" />, text: "info@nairaaagro.in" },
                { icon: <FaPhone className="text-green-300 shadow-sm" />, text: "+91 8265973335" },
                { icon: <FaClock className="text-green-300 shadow-sm" />, text: "Mon - Fri: 8 AM - 6 PM" }
              ].map((contact, index) => (
                <li key={index} className="flex items-start space-x-3 bg-green-800/20 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <span className="mt-1">{contact.icon}</span>
                  <span className="text-gray-100">{contact.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div className="footer-item">
            <h3 className="text-xl font-bold mb-4 text-green-300 drop-shadow-lg">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              {[
                { icon: <FaFacebookF />, color: "hover:bg-green-600" },
                { icon: <FaTwitter />, color: "hover:bg-green-600" },
                { icon: <FaInstagram />, color: "hover:bg-green-600" },
                { icon: <FaLinkedinIn />, color: "hover:bg-green-600" }
              ].map((social, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-gray-100 bg-green-700/50 text-2xl p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-12 pt-8 border-t border-green-700">
          <p className="text-green-100 font-light">
            &copy; {new Date().getFullYear()} Naira Agro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

<<<<<<< HEAD
  return(<nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
=======
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">

>>>>>>> cb20a0ef674aa3c4089c4dc5a9722ff1f8788d70
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/CSI/naira-logo.png" alt="Logo" width={180} height={60} layout="intrinsic" />
          {/* <span className="text-xl text-teal-600 font-bold">Turbo Weightronics</span> */}
        </Link>


        {/* Desktop Nav Links */ }
        {/* this is for desktop scren */}
        <div className="hidden md:flex space-x-6">
          <Link href="#" className="text-gray-700 hover:text-green-700">Home</Link>
          <Link href="#about-us" className="text-gray-700 hover:text-green-700">About Us</Link>
          <Link href="#services" className="text-gray-700 hover:text-green-700">Services</Link>
          <Link href="#contact-us" className="text-gray-700 hover:text-green-700">Contact</Link>
          <Link href="#gallary" className="text-gray-700 hover:text-green-700">Gallary</Link>
        </div>

        {/* Contact Us Button */}
        <Link href="#contact-us" className="hidden md:block bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700">
          Contact Us →
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <Link href="#" className="block px-6 py-3 text-gray-700 hover:bg-gray-100">Home</Link>
          <Link href="#about-us" className="block px-6 py-3 text-gray-700 hover:bg-gray-100">About Us</Link>
          <Link href="#services" className="block px-6 py-3 text-gray-700 hover:bg-gray-100">Services</Link>
          <Link href="#gallary" className="block px-6 py-3 text-gray-700 hover:bg-gray-100">Gallary</Link>
          {/* <Link href="#" className="block px-6 py-3 text-gray-700 hover:bg-gray-100">Pricing</Link> */}
          <Link href="#contact-us" className="block px-6 py-3 text-white bg-green-600 hover:bg-green-700">Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

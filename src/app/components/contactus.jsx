import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-col lg:flex-row gap-6 items-center justify-center bg-[url('/img/bg/hero-bg-1-2.jpg')] bg-no-repeat bg-cover bg-center p-6 md:p-8 lg:p-12">
      {/* Background Blur Overlay */}
      <div className="absolute inset-0 bg-black/40 "></div>

      {/* Contact & Map Container */}
      <div className="relative flex flex-col md:flex-row w-full max-w-5xl bg-white/10 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden">
        
        {/* Contact Form & Details */}
        <div className="flex-1 p-6 md:p-8 text-white">
          {/* Section Heading */}
          <h2 className="text-xl md:text-3xl font-bold text-[#1b8e2d] text-center md:text-left">Contact Us</h2>
          <p className="md:text-lg text-gray-200 text-center md:text-left mt-2">We’d love to hear from you!</p>

          {/* Contact Form */}
          <form className="space-y-4 mt-6">
            <input
            required
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg bg-white/20 backdrop-blur-md text-white placeholder-gray-300 focus:outline-none focus:border-[#1b8e2d] transition"
            />
            <input
            required
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg bg-white/20 backdrop-blur-md text-white placeholder-gray-300 focus:outline-none focus:border-[#1b8e2d] transition"
            />
            <textarea
            required
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white/20 backdrop-blur-md text-white placeholder-gray-300 focus:outline-none focus:border-[#1b8e2d] transition"
            />
            <button
              type="submit"
              className="w-full bg-[#1b8e2d] text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-green-700 transition shadow-lg"
            >
              Send Message
            </button>
          </form>

          {/* Contact Details */}
          <div className="space-y-4 text-gray-200 mt-6">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-[#1b8e2d] text-xl" />
              <p className="text-sm md:text-xl">+91 98765 43210</p>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#1b8e2d] text-xl" />
              <p className="text-sm md:text-xl">contact@cloudkitchen.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-[#1b8e2d] text-xl" />
              <p className="text-sm md:text-xl">123, Food Street, Mumbai, India</p>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="flex-1 p-6 md:p-8 bg-white/10 backdrop-blur-md border-t md:border-t-0 md:border-b-0 md:border-r-0 md:border-2 border-[#1b8e2d] shadow-2xl rounded-3xl">
          <h3 className="text-xl md:text-3xl font-bold text-[#ffffff] text-center mb-4">Farmer Trust</h3>
          <img src="/img/contact.webp" alt="support img" className="rounded-xl"/>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

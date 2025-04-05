import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const phoneNumber = "+918265973335";
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  // Replace with your actual Google Maps embed URL
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.263258928344!2d72.8537203153846!3d19.05598725872694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8afbfffffff%3A0x1ad797cbfc78b0a5!2sYour%20Business%20Name!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[url('/img/bg/hero-bg-1-2.jpg')] bg-no-repeat bg-cover bg-center p-4 sm:p-6 md:p-8 lg:p-12">
      {/* Background Blur Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Contact & Map Container */}
      <div className="relative w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-6 bg-white/10 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden">
        {/* Contact Form & Details */}
        <div className="p-6 md:p-8 lg:p-10 text-white">
          {/* Section Heading */}
          <div className="mb-8 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1b8e2d]">Contact Us</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 mt-2">
              We'd love to hear from you! Send us a message via WhatsApp.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300/50 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1b8e2d] focus:border-transparent transition"
              />
            </div>
            <div>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300/50 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1b8e2d] focus:border-transparent transition"
              />
            </div>
            <div>
              <textarea
                required
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-300/50 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1b8e2d] focus:border-transparent transition"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#128C7E] transition-all shadow-lg hover:shadow-[#25D366]/30"
            >
              <FaWhatsapp className="text-xl" />
              Send via WhatsApp
            </button>
          </form>

          {/* Contact Details */}
          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-4 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition">
              <div className="p-2 bg-[#1b8e2d]/20 rounded-full">
                <FaPhoneAlt className="text-[#1b8e2d] text-lg" />
              </div>
              <div>
                <p className="text-xs text-gray-300">Phone</p>
                <p className="text-sm md:text-base text-white">+91 8265973335</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition">
              <div className="p-2 bg-[#1b8e2d]/20 rounded-full">
                <FaEnvelope className="text-[#1b8e2d] text-lg" />
              </div>
              <div>
                <p className="text-xs text-gray-300">Email</p>
                <p className="text-sm md:text-base text-white">info@nairaagro.in</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition">
              <div className="p-2 bg-[#1b8e2d]/20 rounded-full">
                <FaMapMarkerAlt className="text-[#1b8e2d] text-lg" />
              </div>
              <div>
                <p className="text-xs text-gray-300">Address</p>
                <p className="text-sm md:text-base text-white">Naira Agro Farm, Bilgram Road Barbatapur Hardoi, Uttarpradesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="h-full p-6 md:p-8 lg:p-10 bg-white/5 backdrop-blur-sm border-t border-white/10 lg:border-t-0 lg:border-l lg:border-white/10 flex flex-col justify-center">
          <div className="text-center mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Our Location</h3>
            <p className="text-gray-300 mt-2">Visit us or drop a message</p>
          </div>
          
          {/* Google Maps Embed */}
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl border-2 border-white/20">
            <iframe
              src={googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[300px]"
            ></iframe>
          </div>
          
          <div className="mt-6 text-center">
            <a 
              href="https://maps.google.com?q=Your+Business+Address" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#1b8e2d] py-2 px-6 rounded-full font-medium hover:bg-gray-100 transition"
            >
              <FaMapMarkerAlt />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

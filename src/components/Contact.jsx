import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.");
      return;
    }

    setError("");

    emailjs
      .send(
        'your_service_id',   // ✅ Replace with your EmailJS service ID
        'your_template_id',  // ✅ Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'your_public_key'    // ✅ Replace with your EmailJS public key
      )
      .then(() => {
        setSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSuccess(false), 3000);
      })
      .catch(() => {
        setError("Something went wrong. Please try again later.");
      });
  };

  return (
    <main className="bg-white text-gray-800 font-[Genos]">
      {/* Hero Section */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-blue-100 to-white text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-blue-700 mb-4"
        >
          Let’s Build the Future Together
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          We’d love to hear from you — whether it’s a project idea, partnership opportunity, or just a quick hello.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-2xl p-4 shadow focus:outline-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-2xl p-4 shadow focus:outline-blue-500"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject (Optional)"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-2xl p-4 shadow"
            />
            <textarea
              name="message"
              placeholder="Your Message *"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-2xl p-4 shadow focus:outline-blue-500"
              required
            ></textarea>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-600 text-sm">Message sent successfully!</p>}
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-4 text-gray-700">
            <p><strong>📧 Email:</strong> prudhvirajub@bprnextgen.org</p>
            <p><strong>📞 Phone:</strong> +91 9765288888</p>
            <p><strong>📍 Location:</strong> Vishakhapatnam, India</p>
            <p><strong>🕐 Hours:</strong> Mon–Fri, 10:00 AM – 6:00 PM IST</p>
            <div className="flex gap-4 mt-4 text-blue-700 text-xl">
              <a href="#" className="hover:text-blue-900"><FaLinkedin /></a>
              <a href="#" className="hover:text-blue-900"><FaTwitter /></a>
              <a href="#" className="hover:text-blue-900"><FaGithub /></a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom Bar */}
      <section className="py-12 px-6 md:px-20 bg-blue-600 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">🚀 Ready to start your digital transformation journey?</h2>
        <p className="mb-6">Let’s connect and make it happen.</p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-white text-blue-600 rounded-xl shadow hover:bg-gray-100 transition"
        >
          Contact Us Now →
        </a>
      </section>
    </main>
  );
};

export default Contact;

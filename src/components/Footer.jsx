import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import githubIcon from '../assets/images/github.png';
import linkedinIcon from '../assets/images/linkedin.png';
import emailIcon from '../assets/images/email.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            BPR NextGen Solutions
          </h3>
          <p className="text-sm">
            Empowering businesses with future-ready digital solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/careers" className="hover:underline">Careers</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Get in Touch</h4>
          <p className="text-sm">📍 Vishakhapatnam, India</p>
          <p className="text-sm">📧 prudhvibprnextgensolutions@gmail.com</p>
          <p className="text-sm mb-4">📞 +91 9765288888</p>

          <div className="flex space-x-4 mt-2">
            <a
              href="https://www.linkedin.com/in/bpr-nextgen-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75"
              aria-label="LinkedIn"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="h-6 w-6 object-contain" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75"
              aria-label="GitHub"
            >
              <img src={githubIcon} alt="GitHub" className="h-6 w-6 object-contain" />
            </a>
            <a
              href="mailto:prudhvibprnextgensolutions@gmail.com"
              className="hover:opacity-75"
              aria-label="Email"
            >
              <img src={emailIcon} alt="Email" className="h-6 w-6 object-contain" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} BPR NextGen Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

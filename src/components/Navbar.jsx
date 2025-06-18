import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/bpr-logo.png';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="w-full pl-2 pr-6 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="BPR Logo" className="h-14 w-auto" />
            <span className="text-2xl font-bold text-blue-600">
              BPR <span className="text-orange-500">NextGen</span>
              <span className="text-2xl font-bold text-blue-600"> Solutions</span>
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6 hidden md:block">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
          <Link to="/careers" className="text-gray-700 hover:text-blue-600">Careers</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

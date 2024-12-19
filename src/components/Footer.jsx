// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';  // تأكد من الاستيراد الصحيح

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-blue-500 py-12 mt-16 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="space-y-6">
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="text-3xl hover:text-yellow-400 transition duration-300" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="text-3xl hover:text-yellow-400 transition duration-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="text-3xl hover:text-yellow-400 transition duration-300" />
            </a>
          </div>

          {/* Links */}
          <div className="text-lg space-y-4">
            <Link to="/" className="hover:text-yellow-400 transition duration-300">Home</Link>
            <Link to="/about" className="hover:text-yellow-400 transition duration-300">About</Link>
            <Link to="/contact" className="hover:text-yellow-400 transition duration-300">Contact</Link>
          </div>

          {/* Copyright */}
          <p className="text-sm mt-6">&copy; 2024 Korsis School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

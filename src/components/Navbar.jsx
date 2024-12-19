import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FaHome, FaBook, FaPhoneAlt, FaUserPlus, FaMoon, FaSun } from 'react-icons/fa';
import logo from '../img/araby ai images.png'; // قم بتغيير المسار حسب مكان الصورة لديك

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // حالة لتخزين الوضع (داكن أو فاتح)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // تغيير الحالة بين الوضع الداكن والفاتح
    document.documentElement.classList.toggle('dark', !isDarkMode); // إضافة أو إزالة الكلاس dark في الـ HTML
  };

  return (
    <nav className={`p-4 shadow-lg fixed w-full top-0 z-50 ${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-500 to-indigo-600'}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-3xl font-bold flex items-center">
          <img src={logo} alt="Logo" className="h-12 mr-2" />
          <Link to="/">School Korsis</Link>
        </div>
        
        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="flex items-center text-white text-lg hover:text-yellow-400 transition duration-300">
            <FaHome className="mr-2" /> Home
          </Link>
          <Link to="/about" className="flex items-center text-white text-lg hover:text-yellow-400 transition duration-300">
            <FaBook className="mr-2" /> About
          </Link>
          <Link to="/contact" className="flex items-center text-white text-lg hover:text-yellow-400 transition duration-300">
            <FaPhoneAlt className="mr-2" /> Contact
          </Link>
          <Link to="/register" className="flex items-center text-white text-lg hover:text-yellow-500 transition duration-300">
            <FaUserPlus className="mr-2" /> Register
          </Link>
        </div>
        
        {/* Hamburger Menu (for mobile) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white text-3xl">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        {/* Dark Mode Toggle Button */}
        <button onClick={toggleDarkMode} className="text-white text-2xl ml-4">
          {isDarkMode ? <FaSun /> : <FaMoon />} {/* تغيير الأيقونة حسب الوضع */}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-lg">
          <Link to="/" className="flex items-center text-white text-lg py-2 hover:text-yellow-400 transition duration-300">
            <FaHome className="mr-2" /> Home
          </Link>
          <Link to="/about" className="flex items-center text-white text-lg py-2 hover:text-yellow-400 transition duration-300">
            <FaBook className="mr-2" /> About
          </Link>
          <Link to="/contact" className="flex items-center text-white text-lg py-2 hover:text-yellow-400 transition duration-300">
            <FaPhoneAlt className="mr-2" /> Contact
          </Link>
          <Link to="/register" className="flex items-center text-white text-lg py-2 hover:text-yellow-400 transition duration-300">
            <FaUserPlus className="mr-2" /> Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

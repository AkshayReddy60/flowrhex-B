import React, { useState } from 'react';
import { FaPencilAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const MotionIcon = ({ IconComponent }) => (
  <motion.div
    whileHover={{
      scale: 1.4,
      backgroundColor: "#f87171", // Tailwind red-400
      color: "#ffffff",
    }}
    transition={{
      type: "spring",
      stiffness: 300,
    }}
    className="text-red-600 text-2xl rounded p-1 cursor-pointer"
  >
    <IconComponent />
  </motion.div>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Technology', path: '/technology' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-[#eb5a43] text-white text-xs sm:text-sm flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-20 xl:px-32 py-2 sm:py-3">
        <span className="mb-2 sm:mb-0">
          🕒 Opening Hours: Mon - Sat 9.00AM - 06.00PM
        </span>
        <div className="flex items-center space-x-3">
          <span className="hidden sm:inline">Follow Us:</span>
          <a
            href="https://www.facebook.com/flowrhextechnologies/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF className="text-sm sm:text-base cursor-pointer" />
          </a>
          <a
            href="https://x.com/flowrhex"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="text-sm sm:text-base cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/company/flowrhex-technologies/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-sm sm:text-base cursor-pointer" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCOYTYM0IP0E7aqCmpagijIg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube className="text-sm sm:text-base cursor-pointer" />
          </a>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-20 xl:px-32 py-2 bg-white">
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? (
              <FaTimes className="text-[#3cc9c5]" size={24} />
            ) : (
              <FaBars className="text-[#3cc9c5]" size={24} />
            )}
          </button>
        </div>

        {/* Logo & Company Info */}
        <div className="flex flex-col items-center lg:flex-row lg:items-center space-y-1 lg:space-y-0 lg:space-x-4 text-center lg:text-left mx-auto lg:mx-0">
          <h1 data-testid="logo">
            <span
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontSize: '32px',
                fontWeight: 700,
                lineHeight: '24px',
              }}
              className="text-[#818282]"
            >
              FLOW
            </span>
            <span
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontSize: '32px',
                fontWeight: 700,
                lineHeight: '24px',
              }}
              className="text-[#44BDB6]"
            >
              RHEX
            </span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[#3cc9c5]">
            PROBURGEON Pvt Ltd
          </p>
        </div>

        {/* Contact Info with Motion Icon */}
        <div className="hidden lg:flex items-center space-x-3">
          <MotionIcon IconComponent={FaPencilAlt} />
          <div className="flex flex-col items-start">
            <span className="text-lg font-bold text-gray-800">+91 9420586572</span>
            <a href="https://www.flowrhex.com" className="text-sm text-gray-500">
              www.flowrhex.com
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex lg:justify-start lg:space-x-12 bg-[#3cc9c5] text-white font-semibold py-4 lg:px-16 xl:px-28 sticky top-0 z-50">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={item.name} className="list-none pl-4 ">
              <Link
                to={item.path}
                className={`transition-colors duration-200 ${
                  isActive ? 'text-black font-bold' : 'hover:text-black'
                }`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          data-testid="mobile-menu"
          className="fixed inset-0 bg-[#1e1e23] z-50 flex flex-col items-start p-6 space-y-4 text-white lg:hidden"
        >
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li
                key={item.name}
                className="list-none text-white text-lg w-full border-b border-gray-700 py-3"
              >
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block ${
                    isActive ? 'text-[#3cc9c5] font-bold' : 'hover:text-[#3cc9c5]'
                  }`}
                >
                  {item.name.toUpperCase()}
                </Link>
              </li>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Navbar;

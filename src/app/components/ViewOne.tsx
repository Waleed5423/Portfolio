"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import img1 from "../media/img1.jpg";

const ViewOne = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [opacity, setOpacity] = useState(1);

  // Handle scroll for fade out effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 0;
      const fadeEnd = window.innerHeight; // after 100vh
      let newOpacity = 1;

      if (scrollY > fadeStart) {
        newOpacity = Math.max(0, 1 - scrollY / fadeEnd);
      }
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-screen bg-amber-50 font-['Geist',sans-serif] overflow-hidden z-50"
      style={{ opacity }}
    >
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-between items-center px-6 md:px-8 py-6 relative"
      >
        {/* Logo / Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 text-lg md:text-xl"
        >
          Web Developer & Designer
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden md:flex space-x-8"
        >
          {["Services", "Works", "About", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-600 hover:text-black transition-colors text-lg md:text-xl"
            >
              {item}
            </a>
          ))}
        </motion.nav>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col justify-between w-8 h-6 relative"
          >
            <motion.span
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 9 : 0,
              }}
              className="block h-1 bg-black rounded"
            />
            <motion.span
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              className="block h-1 bg-black rounded"
            />
            <motion.span
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? -9 : 0,
              }}
              className="block h-1 bg-black rounded"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 right-0 w-2/3 h-screen bg-white shadow-xl flex flex-col items-center justify-center space-y-8 text-2xl z-40"
      >
        {["Services", "Works", "About", "Contact"].map((item) => (
          <a key={item} href="#" className="text-gray-600 hover:text-black">
            {item}
          </a>
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="px-6 md:px-8 py-8">
        {/* Full width name at top center */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold text-black leading-none tracking-tight">
            WALEED ZULFIQAR
          </h1>
        </motion.div>

        {/* 3-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col justify-end"
          >
            <p className="text-gray-600 text-xl md:text-2xl leading-relaxed mb-8">
              Open to job opportunities worldwide. Passionate about building
              polished, intuitive, and thoughtful digital experiences that leave
              a mark.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-xl md:text-2xl font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 w-[200px] h-[50px] md:h-[60px]"
            >
              <span>CONTACT</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 7L17 17M17 17H7M17 17V7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
          </motion.div>

          {/* Middle column - Image */}
          <div className="flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative"
            >
              <div className="w-64 h-96 md:w-80 bg-gray-300 rounded-lg overflow-hidden shadow-2xl relative">
                <Image src={img1} alt="Hero" fill />
              </div>
            </motion.div>
          </div>

          {/* Right column - Date */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col items-end justify-end"
          >
            <div className="text-right">
              <div className="text-gray-500 text-base md:text-lg mb-1">
                AVAILABLE FOR WORK
              </div>
              <div className="text-6xl md:text-8xl font-bold text-black">
                {new Date()
                  .toLocaleString("default", { month: "short" })
                  .toUpperCase()}
                &apos;{new Date().getFullYear().toString().slice(2)}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ViewOne;

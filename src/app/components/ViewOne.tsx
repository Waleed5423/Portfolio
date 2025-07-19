"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import img1 from "../media/img1.jpg";

const ViewOne = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Smooth scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Apply spring physics to scroll progress for extra smoothness
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100,
    restDelta: 0.001,
  });

  // Content animations (slower, more dramatic)
  const contentOpacity = useTransform(smoothProgress, [0, 0.7], [1, 0]);
  const contentScale = useTransform(smoothProgress, [0, 0.7], [1, 0.92]);
  const contentY = useTransform(smoothProgress, [0, 1], [0, 200]);

  // Navbar animations (faster, disappears earlier)
  const navY = useTransform(smoothProgress, [0, 0.3], [0, -100]);
  const navOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);

  // Name for letter-by-letter animation
  const name = "WALEED ZULFIQAR";
  const letters = name.split("");

  // Paragraph for letter-by-letter animation
  const paragraphText =
    "Open to job opportunities worldwide. Passionate about building polished, intuitive, and thoughtful digital experiences that leave a mark.";
  const paragraphLetters = paragraphText.split("");

  // Date for letter-by-letter animation
  const dateText = "JUL'25";
  const dateLetters = dateText.split("");

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-amber-50 font-['Geist',sans-serif] overflow-hidden"
    >
      {/* Header - disappears quickly */}
      <motion.header
        style={{
          y: navY,
          opacity: navOpacity,
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-8 py-4 z-30"
      >
        {/* Logo / Text */}
        <div className="text-gray-600 text-sm md:text-base">
          Web Developer & Designer
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {["Services", "Works", "About", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-600 hover:text-black transition-colors text-sm md:text-base"
            >
              {item}
            </a>
          ))}
        </nav>

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
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="fixed top-0 right-0 w-2/3 h-screen bg-white shadow-xl flex flex-col items-center justify-center space-y-6 text-xl z-40"
      >
        {["Services", "Works", "About", "Contact"].map((item) => (
          <a key={item} href="#" className="text-gray-600 hover:text-black">
            {item}
          </a>
        ))}
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="flex flex-col h-full w-full items-center justify-center pt-16"
        style={{
          opacity: contentOpacity,
          scale: contentScale,
          y: contentY,
          transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Name with letter-by-letter animation */}
        <motion.div className="w-full text-center relative overflow-hidden">
          <div className="relative">
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] xl:text-[10rem] font-bold text-black leading-none tracking-tight whitespace-nowrap">
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={loaded ? { y: 0, opacity: 1 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </h1>

            {/* Covering div that slides up to reveal text */}
            <motion.div
              initial={{ y: 0 }}
              animate={loaded ? { y: "-100%" } : {}}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0 bg-amber-50 z-10"
            />
          </div>
        </motion.div>

        {/* 3-column content */}
        <div className="flex-grow flex items-end pb-8 px-6 md:px-8 w-full">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {/* Left Column */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col justify-end"
            >
              <div className="relative overflow-hidden mb-6">
                <p className="text-gray-600 text-lg md:text-2xl leading-relaxed">
                  {paragraphLetters.map((letter, i) => (
                    <motion.span
                      key={i}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={loaded ? { y: 0, opacity: 1 } : {}}
                      transition={{
                        duration: 0.6,
                        delay: 0.8 + i * 0.02,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="inline-block"
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </p>
                <motion.div
                  initial={{ y: 0 }}
                  animate={loaded ? { y: "-100%" } : {}}
                  transition={{
                    duration: 1.2,
                    delay: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0 bg-amber-50 z-10"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-black text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-lg md:text-2xl font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 w-[200px] h-[50px] md:h-[60px]"
              >
                <span>CONTACT</span>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
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

            {/* Middle Column - Image with slide-down animation */}
            <motion.div className="hidden md:flex justify-center items-end">
              <div className="w-full h-100 md:w-80 rounded-lg overflow-hidden relative">
                <motion.div
                  initial={{ y: "-100%" }}
                  animate={loaded ? { y: 0 } : {}}
                  transition={{
                    duration: 1,
                    delay: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0  z-20"
                >
                  <Image
                    src={img1}
                    alt="Hero"
                    fill
                    priority
                    className="object-cover"
                  />
                </motion.div>
                {/* Covering div that slides up to reveal image */}
                <motion.div
                  initial={{ y: 0 }}
                  animate={loaded ? { y: "-100%" } : {}}
                  transition={{
                    duration: 1.2,
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0 bg-amber-50 z-30"
                />
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-col items-end justify-end"
            >
              <div className="text-right">
                <div className="text-gray-500 text-sm md:text-base mb-1">
                  AVAILABLE FOR WORK
                </div>
                <div className="relative overflow-hidden">
                  <div className="text-5xl md:text-8xl font-bold text-black">
                    {dateLetters.map((letter, i) => (
                      <motion.span
                        key={i}
                        initial={{ y: "100%", opacity: 0 }}
                        animate={loaded ? { y: 0, opacity: 1 } : {}}
                        transition={{
                          duration: 0.6,
                          delay: 1.4 + i * 0.1,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="inline-block"
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </motion.span>
                    ))}
                  </div>
                  <motion.div
                    initial={{ y: 0 }}
                    animate={loaded ? { y: "-100%" } : {}}
                    transition={{
                      duration: 1.2,
                      delay: 1.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0 bg-amber-50 z-10"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ViewOne;

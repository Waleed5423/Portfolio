"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const ViewTwo = () => {
  const containerRef = useRef(null);

  // Smooth scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Apply spring physics for extra smoothness
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100,
    restDelta: 0.001,
  });

  // Create a subtle parallax effect for depth
  const y = useTransform(smoothProgress, [0, 1], [0, 50]);

  // Text for animations
  const headingText = "WHAT I DO /";
  const headingLetters = headingText.split("");
  const subheadingText = "(SERVICES)";
  const subheadingLetters = subheadingText.split("");
  const paragraphText =
    "I specialize in building modern digital solutions, including full-stack web applications, SaaS platforms, mobile applications, and custom software tailored to business needs. With expertise in both frontend and backend technologies, I create fast, scalable, and user-friendly systems that deliver real value. From designing sleek user interfaces to developing powerful server-side architectures, I help businesses, startups, and product teams turn ideas into reality. My skill set spans across web development, API integrations, software architecture, and mobile app development to ensure end-to-end solutions that perform seamlessly.";
  const paragraphLetters = paragraphText.split("");

  return (
    <motion.div
      ref={containerRef}
      className="relative z-50 min-h-screen bg-black font-['Geist',sans-serif] overflow-hidden px-6 md:px-16"
      style={{ y }}
    >
      {/* Rounded top corners container */}
      <div className="w-full h-full bg-black p-6 md:p-6 rounded-t-[3rem] md:rounded-t-[4rem] overflow-hidden">
        {/* Section Header */}
        <motion.div
          className="mb-14 pt-8 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Main heading with letter-by-letter animation */}
          <div className="relative">
            <h2 className="text-5xl md:text-[7rem] font-bold text-white leading-tight">
              {headingLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + i * 0.03,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`inline-block ${
                    letter === "/" ? "text-gray-400" : ""
                  }`}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </h2>
            <motion.div
              initial={{ y: 0 }}
              whileInView={{ y: "-100%" }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0 bg-black z-10"
            />
          </div>

          {/* Subheading with letter-by-letter animation */}
          <div className="relative mt-4">
            <p className="text-gray-400 text-2xl md:text-3xl">
              {subheadingLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.6 + i * 0.03,
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
              whileInView={{ y: "-100%" }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0 bg-black z-10"
            />
          </div>
        </motion.div>

        {/* Content with letter-by-letter animation */}
        <motion.div
          className="max-w-5xl relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <p className="text-gray-300 text-xl md:text-2xl leading-relaxed font-light">
              {paragraphLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 1.0 + i * 0.01,
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
              whileInView={{ y: "-100%" }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                delay: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0 bg-black z-10"
            />
          </div>
        </motion.div>
      </div>

      {/* Decorative border radius reveal effect */}
      <motion.div
        initial={{ scaleY: 1 }}
        whileInView={{ scaleY: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.4,
        }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 w-full h-32 bg-amber-50 origin-top z-0"
        style={{
          borderBottomLeftRadius: "3rem",
          borderBottomRightRadius: "3rem",
        }}
      />
    </motion.div>
  );
};

export default ViewTwo;

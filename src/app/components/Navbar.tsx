"use client"
import React, { useState } from 'react'

const Navbar = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
      isScrolled ? 'transform translate-y-0 bg-white/90 backdrop-blur-md shadow-lg' : 'transform -translate-y-full'
    }`}>
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Left side - Brand/Title */}
        <div className="text-gray-600 text-sm font-medium">
          Web Developer & Designer
        </div>
        
        {/* Hamburger Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col justify-center items-center w-8 h-8 space-y-1 group"
        >
          <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
            isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}></span>
          <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
            isMenuOpen ? 'opacity-0' : ''
          }`}></span>
          <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
            isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}></span>
        </button>
        
        {/* Mobile Menu */}
        <div className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4 pointer-events-none'
        }`}>
          <div className="px-6 py-4 space-y-3">
            <a href="#" className="block text-gray-600 hover:text-black transition-colors duration-200 text-sm font-medium py-2">
              Services
            </a>
            <a href="#" className="block text-gray-600 hover:text-black transition-colors duration-200 text-sm font-medium py-2">
              Works
            </a>
            <a href="#" className="block text-gray-600 hover:text-black transition-colors duration-200 text-sm font-medium py-2">
              About
            </a>
            <a href="#" className="block text-gray-600 hover:text-black transition-colors duration-200 text-sm font-medium py-2">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
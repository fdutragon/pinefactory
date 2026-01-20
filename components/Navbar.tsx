'use client'

import { useState, useEffect } from 'react'
import Logo from './Logo'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 left-0 right-0 ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-20">
          <Logo size="md" />
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Features
            </a>
            <a href="#script-features" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Script Details
            </a>
            <a href="#download" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Download
            </a>
            <a href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Pricing
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <a
              href="#pricing"
              className="px-5 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-md font-medium text-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

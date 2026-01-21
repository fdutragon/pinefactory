import React from 'react'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  }

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Minimalist Pine Tree */}
          <path
            d="M16 4L12 12H14L16 8L18 12H20L16 4Z"
            fill="currentColor"
            className="text-purple-600 dark:text-purple-400"
          />
          <path
            d="M16 10L10 20H14L16 16L18 20H22L16 10Z"
            fill="currentColor"
            className="text-green-600 dark:text-green-400"
          />
          {/* Simple trunk */}
          <rect
            x="15"
            y="20"
            width="2"
            height="4"
            fill="currentColor"
            className="text-gray-600 dark:text-gray-400"
          />
          {/* Minimalist factory base */}
          <rect
            x="8"
            y="24"
            width="16"
            height="4"
            rx="1"
            fill="currentColor"
            className="text-gray-700 dark:text-gray-300"
          />
          {/* Simple windows */}
          <circle
            cx="12"
            cy="26"
            r="0.5"
            fill="currentColor"
            className="text-purple-600 dark:text-purple-400"
          />
          <circle
            cx="20"
            cy="26"
            r="0.5"
            fill="currentColor"
            className="text-purple-600 dark:text-purple-400"
          />
        </svg>
      </div>
      <span className={`font-medium text-gray-900 dark:text-white ${textSizes[size]}`}>
        PineFactory
      </span>
    </div>
  )
}

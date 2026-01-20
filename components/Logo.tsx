import React from 'react'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  }

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Minimalist Pine + Factory icon */}
          <path
            d="M20 4L16 12H18L20 9L22 12H24L20 4Z"
            fill="currentColor"
            className="text-purple-600 dark:text-purple-400"
          />
          <path
            d="M20 12L12 24H18L20 18L22 24H28L20 12Z"
            fill="currentColor"
            className="text-purple-600 dark:text-purple-400"
          />
          <rect
            x="18"
            y="24"
            width="4"
            height="6"
            fill="currentColor"
            className="text-purple-600 dark:text-purple-400"
          />
          {/* Minimalist factory */}
          <rect
            x="10"
            y="30"
            width="20"
            height="10"
            fill="currentColor"
            className="text-gray-700 dark:text-gray-300 opacity-80"
          />
          <rect
            x="14"
            y="33"
            width="2"
            height="2"
            fill="currentColor"
            className="text-purple-600 dark:text-purple-400"
          />
          <rect
            x="24"
            y="33"
            width="2"
            height="2"
            fill="currentColor"
            className="text-purple-600 dark:text-purple-400"
          />
        </svg>
      </div>
      <span className={`font-semibold tracking-tight text-gray-900 dark:text-white ${textSizes[size]}`}>
        PineFactory
      </span>
    </div>
  )
}

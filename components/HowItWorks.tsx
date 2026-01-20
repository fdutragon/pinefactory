'use client'

import { motion } from 'framer-motion'
import { Download, Settings, TrendingUp, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Download,
    title: 'Purchase the Script',
    description: 'Choose the ideal script for your strategy and get instant download after payment.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    number: '02',
    icon: Settings,
    title: 'Configure on TradingView',
    description: 'Copy and paste the Pine Script code into TradingView editor and adjust parameters as needed.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Analyze Signals',
    description: 'The script will automatically identify entry and exit opportunities based on your strategy.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Execute & Profit',
    description: 'Follow the generated signals and execute your trades with confidence, maximizing your profits.',
    color: 'from-orange-500 to-red-500',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-green-400 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            In 4 simple steps, you'll be using professional scripts on TradingView
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 via-green-500 to-orange-500 transform -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative z-10">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 mx-auto`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className={`text-6xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-4 text-center`}>
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}


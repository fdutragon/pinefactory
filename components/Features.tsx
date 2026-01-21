'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, Code, TrendingUp, Clock, Users } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Extreme Reversion Logic',
    description: 'Advanced entry signals combining Bollinger Bands extreme levels with RSI oversold/overbought conditions for high-probability trades.',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    icon: Shield,
    title: 'Trailing Stop Protection',
    description: 'Dynamic trailing stop that activates after profit threshold, protecting your gains while allowing for continued upside.',
    color: 'from-green-400 to-emerald-500',
  },
  {
    icon: Code,
    title: 'Binance Integration',
    description: 'Ready-to-use alert messages with proper JSON payload formatting for seamless Binance bot integration.',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    icon: TrendingUp,
    title: 'Risk Management System',
    description: 'Dynamic position sizing, configurable risk percentage, and automatic win rate monitoring with pause functionality.',
    color: 'from-purple-400 to-pink-500',
  },
  {
    icon: Clock,
    title: 'Daily Reset & Control',
    description: 'Automatic daily reset with configurable timezone, win rate protection, and performance monitoring.',
    color: 'from-indigo-400 to-purple-500',
  },
  {
    icon: Users,
    title: 'Simulation Mode',
    description: 'Optional simulation mode after losses to test signals before risking real capital again.',
    color: 'from-red-400 to-pink-500',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-green-400 bg-clip-text text-transparent">
            Key Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need for professional automated trading
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-8 bg-white dark:bg-gray-800 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


'use client'

import { motion } from 'framer-motion'
import { FileCode, CheckCircle, Shield } from 'lucide-react'

export default function DownloadSection() {
  return (
    <section id="download" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-green-400 bg-clip-text text-transparent">
            Get the Script
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Professional Pine Script with all features included
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Download Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-purple-600 to-green-400 rounded-2xl p-6 shadow-2xl"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-green-400 p-3">
                  <FileCode className="w-full h-full text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    TRUMPUSDT Reversion
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Pine Script v6 Strategy
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Reversion Strategy</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Trailing Stops</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Risk Management</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Binance Ready</span>
                </div>
              </div>

              <a
                href="https://x.com/felipedutragon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-green-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Shield className="w-5 h-5" />
                Contact for Purchase
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


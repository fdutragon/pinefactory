'use client'

import { motion } from 'framer-motion'
import { Download, FileCode, CheckCircle, Copy, Shield } from 'lucide-react'
import { useState } from 'react'
import PaymentVerification from './PaymentVerification'

export default function DownloadSection() {
  const [copied, setCopied] = useState(false)
  const [showVerification, setShowVerification] = useState(false)

  const handleDownload = () => {
    // Create a download link
    const link = document.createElement('a')
    link.href = '/trumpusdt-reversion.pine'
    link.download = 'TRUMPUSDT-1M-Reversion.pine'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin + '/trumpusdt-reversion.pine')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="download" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-green-400 bg-clip-text text-transparent">
            Get Your Complete Script
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Download the full professional Pine Script code with all features included
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment Verification */}
          <PaymentVerification onVerified={() => setShowVerification(false)} />

          {/* Download Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-purple-600 to-green-400 rounded-2xl p-8 shadow-2xl"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 mb-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-600 to-green-400 p-4">
                  <FileCode className="w-full h-full text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    TRUMPUSDT-1M-Reversion
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Complete Pine Script v6 Strategy
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 mb-6">
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Extreme Reversion Strategy</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Trailing Stop Protection</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Risk Management System</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Binance Integration Ready</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Daily Reset & Win Rate Control</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Simulation Mode</span>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                  <div>
                    <p className="text-yellow-800 dark:text-yellow-300 text-sm font-semibold mb-1">
                      Secure Payment Verification
                    </p>
                    <p className="text-yellow-700 dark:text-yellow-400 text-xs">
                      After payment, verify your purchase to receive the complete code via email. 
                      This ensures only paying customers get access to the full script.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button
                  onClick={() => setShowVerification(true)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-md font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                >
                  <Shield className="w-4 h-4" />
                  Verify Payment & Get Code
                </button>
                <button
                  onClick={handleCopyLink}
                  className="w-full px-5 py-3 bg-transparent text-gray-900 dark:text-white rounded-md font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600"
                >
                  {copied ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Link Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" />
                      Copy Download Link
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h4 className="text-white font-semibold mb-3">📋 Installation Instructions</h4>
              <ol className="text-white/90 space-y-2 text-sm list-decimal list-inside">
                <li>Verify your payment using the form</li>
                <li>Check your email for the complete code</li>
                <li>Open TradingView and go to Pine Editor</li>
                <li>Click "New" and paste the code</li>
                <li>Click "Add to Chart" to apply the strategy</li>
                <li>Configure your parameters in the strategy settings</li>
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


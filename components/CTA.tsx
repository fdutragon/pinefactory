'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-green-400" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-block mb-6"
          >
            <Zap className="w-16 h-16 text-yellow-300" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Ready to Transform Your Trading?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join over 1,000 traders who are already maximizing their profits with our professional Pine Script scripts.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#pricing"
              className="group px-6 py-3 bg-white text-gray-900 rounded-md font-medium text-base hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              Get Started Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#features"
              className="px-6 py-3 bg-transparent text-white rounded-md font-medium text-base hover:bg-white/10 transition-colors border border-white/30"
            >
              View Features
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/80 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
              <span>Instant Download</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse" />
              <span>7-Day Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-300 rounded-full animate-pulse" />
              <span>Support Included</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


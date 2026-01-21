'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-chart-1 to-chart-2" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-background/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-background/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
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
            <Zap className="w-16 h-16 text-chart-4" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
            Ready to Automate Your Trading?
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join traders who have already automated their strategies and maximize profits 24/7 with custom Pine Scripts.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="https://x.com/felipedutragon"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-background text-foreground rounded-lg font-semibold text-base hover:bg-background/90 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contact Me
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#features"
              className="px-8 py-4 bg-background/10 backdrop-blur-sm text-primary-foreground rounded-lg font-semibold text-base hover:bg-background/20 transition-all duration-300 border border-background/30 shadow-lg hover:shadow-xl"
            >
              View Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-primary-foreground/80 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-chart-1 rounded-full animate-pulse" />
              <span>Fast Development</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-chart-2 rounded-full animate-pulse" />
              <span>Support Included</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-chart-3 rounded-full animate-pulse" />
              <span>Total Automation</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


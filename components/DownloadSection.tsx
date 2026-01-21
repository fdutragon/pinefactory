'use client'

import { motion } from 'framer-motion'
import { FileCode, CheckCircle, Shield } from 'lucide-react'

export default function DownloadSection() {
  return (
    <section id="download" className="py-24 bg-muted relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
            Automate Your Strategy
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Custom Pine Script development for TradingView
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Download Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-primary to-chart-1 rounded-2xl p-6 shadow-2xl"
          >
            <div className="bg-card rounded-xl p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-chart-1 p-3">
                  <FileCode className="w-full h-full text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Custom Automation
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Customized Pine Script
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-chart-1" />
                  <span>Any Strategy</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-chart-1" />
                  <span>Risk Management</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-chart-1" />
                  <span>Exchange Integration</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-chart-1" />
                  <span>Full Support</span>
                </div>
              </div>

              <a
                href="https://x.com/felipedutragon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-chart-1 text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Shield className="w-5 h-5" />
                Request Quote
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


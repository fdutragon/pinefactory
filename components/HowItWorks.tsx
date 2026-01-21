'use client'

import { motion } from 'framer-motion'
import { Download, Settings, TrendingUp, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Download,
    title: 'Tell Your Strategy',
    description: 'Describe your trading strategy, indicators used and entry and exit rules.',
    color: 'from-primary to-chart-1',
  },
  {
    number: '02',
    icon: Settings,
    title: 'Custom Development',
    description: 'I develop the customized Pine Script with your logic, risk management and necessary integrations.',
    color: 'from-chart-2 to-chart-3',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Testing & Optimization',
    description: 'We perform backtests, optimizations and fine adjustments to maximize strategy performance.',
    color: 'from-chart-1 to-chart-4',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Deploy & Support',
    description: 'We implement on TradingView, configure alerts and provide continuous support.',
    color: 'from-chart-5 to-destructive',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-background to-muted relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            In 4 simple steps, your strategy will be automated on TradingView
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-chart-1 via-chart-2 to-chart-3 transform -translate-y-1/2" />
          
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
                  <div className="bg-card rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative z-10">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 mx-auto`}>
                      <Icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <div className={`text-6xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-4 text-center`}>
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-center leading-relaxed">
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


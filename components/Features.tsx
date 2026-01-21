'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, Code, TrendingUp, Clock, Users } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Complete Automation',
    description: 'I transform your manual strategy into fully automated Pine Script with entries, exits and risk management.',
    color: 'from-chart-4 to-chart-5',
  },
  {
    icon: Shield,
    title: 'Advanced Risk Management',
    description: 'Stop loss, take profit, trailing stops and custom sizing based on your risk profile.',
    color: 'from-chart-1 to-chart-2',
  },
  {
    icon: Code,
    title: 'Exchange Integration',
    description: 'Direct connection with Binance, Bybit and other exchanges through webhooks and APIs for automatic execution.',
    color: 'from-chart-2 to-chart-3',
  },
  {
    icon: TrendingUp,
    title: 'Any Strategy',
    description: 'Scalping, swing trade, day trade, arbitrage - I automate strategies for any timeframe and market.',
    color: 'from-primary to-chart-4',
  },
  {
    icon: Clock,
    title: '24/7 Monitoring',
    description: 'Your bots work 24 hours a day, 7 days a week, without the need for constant supervision.',
    color: 'from-chart-3 to-chart-5',
  },
  {
    icon: Users,
    title: 'Personalized Support',
    description: 'Complete follow-up from creation to optimization of your automated strategy.',
    color: 'from-destructive to-chart-5',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-muted relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
            Automation Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to automate your trading strategies
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
                className="group relative p-8 bg-card rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-full h-full text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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


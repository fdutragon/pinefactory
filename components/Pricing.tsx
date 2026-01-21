'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: '$97',
    description: 'Ideal for beginners',
    features: [
      '1 Premium Pine Script',
      'Complete and documented code',
      'Email support (7 days)',
      'Updates for 30 days',
      'Step-by-step installation guide',
    ],
    popular: false,
    color: 'from-gray-500 to-gray-600',
  },
  {
    name: 'Professional',
    price: '$197',
    description: 'Best seller',
    features: [
      '3 Premium Pine Scripts',
      'Complete and documented code',
      'Priority support (30 days)',
      'Updates for 90 days',
      'Step-by-step installation guide',
      'Advanced strategies included',
      'Access to exclusive community',
    ],
    popular: true,
    color: 'from-primary to-chart-1',
  },
  {
    name: 'Enterprise',
    price: '$497',
    description: 'For serious traders',
    features: [
      '10 Premium Pine Scripts',
      'Complete and documented code',
      'VIP support (90 days)',
      'Lifetime updates',
      'Step-by-step installation guide',
      'Advanced strategies included',
      'Access to exclusive community',
      'Script customization',
      '1-on-1 consultation (1 hour)',
      'New scripts added automatically',
    ],
    popular: false,
    color: 'from-chart-2 to-chart-3',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-card via-muted to-background relative overflow-hidden w-full">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-chart-1/20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-chart-1/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible plans for traders of all levels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 backdrop-blur-sm border ${
                plan.popular
                  ? 'bg-gradient-to-br from-primary/90 via-primary to-chart-1/90 text-primary-foreground scale-105 shadow-2xl border-primary/50 ring-2 ring-primary/30'
                  : 'bg-card/60 text-card-foreground shadow-xl border-border/50 hover:bg-card/80'
              } hover:shadow-2xl hover:scale-[1.02] transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-chart-4 to-chart-5 text-foreground px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-primary-foreground' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className={`text-5xl font-bold ${plan.popular ? 'text-primary-foreground' : 'bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent'}`}>
                    {plan.price}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-primary-foreground' : 'text-chart-1'}`} />
                    <span className={plan.popular ? 'text-primary-foreground/90' : 'text-foreground'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://x.com/felipedutragon"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-background text-foreground hover:bg-background/90 shadow-lg hover:shadow-xl'
                    : 'bg-gradient-to-r from-primary to-chart-1 text-primary-foreground hover:opacity-90 shadow-lg hover:shadow-xl'
                }`}
              >
                Contact Me
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            💳 Secure payment via Credit Card, PayPal, or Crypto
          </p>
          <p className="text-sm text-muted-foreground">
            7-day money-back guarantee
          </p>
        </motion.div>
      </div>
    </section>
  )
}


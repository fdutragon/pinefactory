'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Carlos Silva',
    role: 'Day Trader',
    image: '👨‍💼',
    content: 'Felipe automated my scalping strategy perfectly. Now my trades run 24h without supervision and results improved by 60%.',
    rating: 5,
  },
  {
    name: 'Ana Costa',
    role: 'Swing Trader',
    image: '👩‍💼',
    content: 'Amazing how he managed to translate my complex manual strategy to Pine Script. Support is exceptional and code is clean and efficient.',
    rating: 5,
  },
  {
    name: 'Roberto Santos',
    role: 'Professional Trader',
    image: '👨‍💻',
    content: 'I automated 3 different strategies with Felipe. All work perfectly integrated with my broker. Positive ROI since the first month.',
    rating: 5,
  },
  {
    name: 'Mariana Oliveira',
    role: 'Beginner Trader',
    image: '👩‍🎓',
    content: 'As a beginner, he helped me automate a simple but effective strategy. I learned a lot about Pine Script in the process. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Felipe Almeida',
    role: 'Crypto Trader',
    image: '👨‍🚀',
    content: 'Perfect automation for crypto. My arbitrage strategy now runs by itself and captures opportunities I would miss manually.',
    rating: 5,
  },
  {
    name: 'Juliana Ferreira',
    role: 'Quantitative Trader',
    image: '👩‍⚖️',
    content: 'High quality code, well documented and optimized. Felipe understands both trading and programming. Long-term partnership guaranteed.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-background to-muted relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
            What My Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Traders who have already automated their strategies with me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              <Quote className="w-8 h-8 text-primary mb-4 opacity-50" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-chart-4 text-chart-4" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-chart-1 flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


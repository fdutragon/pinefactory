'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Carlos Silva',
    role: 'Professional Trader',
    image: '👨‍💼',
    content: 'PineFactory scripts completely transformed my trading. I increased my win rate by 40% and save hours of daily analysis.',
    rating: 5,
  },
  {
    name: 'Ana Costa',
    role: 'Day Trader',
    image: '👩‍💼',
    content: 'Finally found scripts that actually work! The support is excellent and results exceeded all expectations. 100% recommended.',
    rating: 5,
  },
  {
    name: 'Roberto Santos',
    role: 'Swing Trader',
    image: '👨‍💻',
    content: 'Invested in the Enterprise plan and it was the best decision. The scripts are professional, well-documented, and VIP support is impeccable. Positive ROI from the first month.',
    rating: 5,
  },
  {
    name: 'Mariana Oliveira',
    role: 'Beginner Trader',
    image: '👩‍🎓',
    content: 'As a beginner, I was lost. The scripts helped me understand the market better and I\'m already getting consistent results. The step-by-step guide is perfect!',
    rating: 5,
  },
  {
    name: 'Felipe Almeida',
    role: 'Crypto Trader',
    image: '👨‍🚀',
    content: 'I use the scripts mainly for cryptocurrencies and the results are incredible. The signal accuracy is impressive and I\'ve recovered my investment multiple times.',
    rating: 5,
  },
  {
    name: 'Juliana Ferreira',
    role: 'Options Trader',
    image: '👩‍⚖️',
    content: 'High-quality scripts that truly add value. The documentation is clear and the code is easy to customize. Worth every penny invested.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-green-400 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Over 1,000 traders trust PineFactory
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
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              <Quote className="w-8 h-8 text-purple-500 mb-4 opacity-50" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-green-400 flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
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


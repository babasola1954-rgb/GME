'use client'

import { motion } from 'motion/react'
import { AnimatedCounter } from './AnimatedCounter'

const metrics = [
  {
    label: 'Docking Score',
    value: -9.1,
    suffix: ' kcal/mol',
    color: 'from-cyan-400 to-blue-500',
    icon: '⚡',
    description: 'Exceptional binding affinity'
  },
  {
    label: 'QED Score',
    value: 0.83,
    suffix: '',
    color: 'from-purple-400 to-pink-500',
    icon: '🎯',
    description: 'Drug-like properties'
  },
  {
    label: 'Bioavailability',
    value: 0.55,
    suffix: '',
    color: 'from-green-400 to-emerald-500',
    icon: '💊',
    description: 'Oral absorption potential'
  },
  {
    label: 'Novelty Score',
    value: 100,
    suffix: '%',
    color: 'from-orange-400 to-red-500',
    icon: '🧬',
    description: 'Completely novel structure'
  }
]

export function MetricsDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, rotateY: 5 }}
          className="relative group"
        >
          <div className={`bg-gradient-to-br ${metric.color} p-0.5 rounded-2xl`}>
            <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-6 h-full">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{metric.icon}</span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-2 h-2 bg-gradient-to-r from-white to-transparent rounded-full opacity-60"
                />
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm text-gray-400 uppercase tracking-wide">
                  {metric.label}
                </h4>
                <div className={`text-3xl bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                  <AnimatedCounter 
                    end={metric.value} 
                    suffix={metric.suffix}
                    decimals={metric.suffix === '%' ? 0 : 2}
                  />
                </div>
                <p className="text-xs text-gray-500">{metric.description}</p>
              </div>

              {/* Hover effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
'use client'

import { motion } from 'motion/react'
import { useState } from 'react'

const roadmapSteps = [
  {
    title: 'Wet Lab Synthesis',
    description: 'Chemical synthesis and purification of Genesis-T1D-RxM-18',
    duration: '2-3 months',
    cost: '$150k',
    icon: '⚗️',
    details: 'Multi-step organic synthesis with advanced purification techniques'
  },
  {
    title: 'In Vitro PD-L1 Binding',
    description: 'Validation of target binding affinity and selectivity',
    duration: '1-2 months',
    cost: '$100k',
    icon: '🔬',
    details: 'Surface plasmon resonance and biochemical binding assays'
  },
  {
    title: 'ADMET + PK/PD Profiling',
    description: 'Comprehensive pharmacokinetic and toxicology studies',
    duration: '3-4 months',
    cost: '$200k',
    icon: '📊',
    details: 'In vitro and in vivo ADMET studies, dose-response analysis'
  },
  {
    title: 'IND-Enabling Studies',
    description: 'Regulatory-compliant safety and efficacy studies',
    duration: '6-8 months',
    cost: '$300k',
    icon: '📋',
    details: 'GLP toxicology, formulation development, regulatory filing'
  },
  {
    title: 'Patent & IP-NFT Licensing',
    description: 'Intellectual property protection and commercialization',
    duration: '2-3 months',
    cost: '$50k',
    icon: '🏛️',
    details: 'Patent prosecution, IP-NFT minting, licensing agreements'
  }
]

export function InteractiveRoadmap() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  return (
    <div className="space-y-8">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500" />
        
        {roadmapSteps.map((step, index) => (
          <motion.div
            key={index}
            className="relative flex items-start space-x-6 pb-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Timeline node */}
            <motion.div
              className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center cursor-pointer relative z-10"
              whileHover={{ scale: 1.2 }}
              onClick={() => setActiveStep(activeStep === index ? null : index)}
            >
              <span className="text-xl">{step.icon}</span>
              
              {/* Pulse effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
                animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Content */}
            <motion.div
              className="flex-grow bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 cursor-pointer"
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(34, 211, 238, 0.05)' }}
              onClick={() => setActiveStep(activeStep === index ? null : index)}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl text-white mb-2">{step.title}</h3>
                <div className="text-right">
                  <div className="text-sm text-cyan-400">{step.duration}</div>
                  <div className="text-lg text-green-400">{step.cost}</div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{step.description}</p>
              
              {/* Progress bar */}
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <motion.div
                  className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(index + 1) * 20}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
              </div>

              {/* Expanded details */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: activeStep === index ? 'auto' : 0,
                  opacity: activeStep === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-cyan-500/20">
                  <p className="text-gray-400 text-sm">{step.details}</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Summary stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
      >
        <div className="text-center p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
          <div className="text-3xl text-green-400 mb-2">
            <AnimatedCounter end={18} suffix=" months" />
          </div>
          <div className="text-gray-400">Total Timeline</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl">
          <div className="text-3xl text-blue-400 mb-2">
            <AnimatedCounter end={800} prefix="$" suffix="k" />
          </div>
          <div className="text-gray-400">Total Investment</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl">
          <div className="text-3xl text-purple-400 mb-2">
            <AnimatedCounter end={5} suffix=" phases" />
          </div>
          <div className="text-gray-400">Development Stages</div>
        </div>
      </motion.div>
    </div>
  )
}
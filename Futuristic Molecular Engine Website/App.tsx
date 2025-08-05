'use client'

import { useState, useEffect } from 'react'
import { motion } from 'motion/react'

// Simple Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Genesis Molecular Engine
          </div>
          
          <div className="hidden md:flex space-x-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'project', label: 'Project' },
              { id: 'solution', label: 'Solution' },
              { id: 'validation', label: 'Validation' },
              { id: 'roadmap', label: 'Roadmap' },
              { id: 'funding', label: 'Funding' },
              { id: 'contact', label: 'Contact' }
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

// Simple Animated Counter
function AnimatedCounter({ 
  end, 
  duration = 2, 
  prefix = '', 
  suffix = '', 
  decimals = 0 
}: {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
}) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      setCount(end * easeOutCubic)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [hasStarted, end, duration])

  useEffect(() => {
    const timer = setTimeout(() => setHasStarted(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <span>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  )
}

// Hero Section
function HeroSection() {
  const scrollToProject = () => {
    document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-black to-slate-800">
      {/* Simple background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>
      
      {/* Floating orbs */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-64 h-64 rounded-full opacity-20"
          style={{
            background: `radial-gradient(circle, ${
              ['#22d3ee', '#a855f7', '#ec4899', '#06b6d4', '#8b5cf6'][i]
            } 0%, transparent 70%)`,
            left: `${20 + i * 15}%`,
            top: `${10 + i * 20}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto text-center px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Genesis-T1D-RxM-18
          </h1>
          
          <div className="w-40 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12"
        >
          <p className="text-2xl md:text-4xl font-light text-gray-300 mb-6">
            AI-Generated PD-L1 Modulator for Type 1 Diabetes
          </p>
          <p className="text-lg md:text-xl font-light text-gray-400 max-w-3xl mx-auto">
            Revolutionary molecular engineering meets artificial intelligence to create the world's first oral PD-L1 modulator
          </p>
        </motion.div>

        {/* Key stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
              <AnimatedCounter end={9.1} decimals={1} />
            </div>
            <div className="text-sm text-gray-400">Docking Score</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
              <AnimatedCounter end={83} suffix="%" />
            </div>
            <div className="text-sm text-gray-400">QED Score</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent mb-2">
              <AnimatedCounter end={100} suffix="%" />
            </div>
            <div className="text-sm text-gray-400">Novel Structure</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.button
            onClick={scrollToProject}
            className="group relative px-12 py-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 text-lg">Explore the Future</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

// Content Section Component
function ContentSection({ 
  id, 
  title, 
  children, 
  variant = 'dark' 
}: {
  id: string
  title: string
  children: React.ReactNode
  variant?: 'light' | 'dark'
}) {
  const isDark = variant === 'dark'
  
  return (
    <section 
      id={id} 
      className={`min-h-screen flex items-center justify-center py-20 ${
        isDark 
          ? 'bg-gradient-to-br from-slate-900 to-black' 
          : 'bg-gradient-to-br from-slate-800 to-slate-900'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            {title}
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-black/20 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 md:p-12 shadow-[0_0_50px_rgba(34,211,238,0.1)]"
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}

// Validation Table
function ValidationTable() {
  const validationData = [
    { metric: 'Docking Score (PD-L1)', value: '–9.1 kcal/mol' },
    { metric: 'QED', value: '0.83' },
    { metric: 'LogP', value: '–1.78' },
    { metric: 'TPSA', value: '109.49' },
    { metric: 'Solubility', value: 'High' },
    { metric: 'Bioavailability Score', value: '0.55' },
    { metric: 'Synthetic Accessibility', value: '3.5' },
    { metric: 'CYP Inhibition', value: 'None' },
  ]

  return (
    <div className="overflow-hidden rounded-xl border border-cyan-500/20 bg-black/30 backdrop-blur-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
              <th className="px-6 py-4 text-left font-medium text-cyan-400">Metric</th>
              <th className="px-6 py-4 text-left font-medium text-cyan-400">Value</th>
            </tr>
          </thead>
          <tbody>
            {validationData.map((row, index) => (
              <motion.tr
                key={row.metric}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-b border-cyan-500/10 hover:bg-cyan-500/5 transition-colors duration-300"
              >
                <td className="px-6 py-4 text-gray-300">{row.metric}</td>
                <td className="px-6 py-4 text-white font-medium">{row.value}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      
      <HeroSection />

      {/* Project Summary */}
      <ContentSection id="project" title="Project Summary">
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                { icon: '🧠', text: 'AI-generated small molecule via Genesis Molecular Engine' },
                { icon: '🎯', text: 'Targets PD-L1 to modulate autoimmune response in Type 1 Diabetes' },
                { icon: '💊', text: 'High oral bioavailability, novel structure, low toxicity' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="text-2xl">{item.icon}</div>
                  <span className="text-lg text-gray-300">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-8 rounded-2xl border border-cyan-500/20"
            >
              <h4 className="text-2xl font-bold text-cyan-400 mb-6">Breakthrough Metrics</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Docking Score:</span>
                  <span className="text-white text-xl font-medium">–<AnimatedCounter end={9.1} decimals={1} /> kcal/mol</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">QED Score:</span>
                  <span className="text-white text-xl font-medium"><AnimatedCounter end={0.83} decimals={2} /></span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Molecular Weight:</span>
                  <span className="text-white text-xl font-medium"><AnimatedCounter end={216.17} decimals={2} /></span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </ContentSection>

      {/* Unmet Need */}
      <ContentSection id="need" title="The Critical Challenge" variant="light">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: '💉', 
              title: 'Lifelong Dependency',
              description: 'Patients require daily insulin injections with no alternative treatments',
              stat: '1.6M',
              statLabel: 'Americans affected'
            },
            { 
              icon: '🚫', 
              title: 'Treatment Gap',
              description: 'No oral small molecule therapies targeting immune checkpoints exist',
              stat: '0',
              statLabel: 'Oral alternatives'
            },
            { 
              icon: '🔬', 
              title: 'Emerging Target',
              description: 'PD-L1 represents a revolutionary therapeutic opportunity',
              stat: '95%',
              statLabel: 'Research potential'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl hover:border-red-400/40 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
              <p className="text-gray-300 mb-6">{item.description}</p>
              <div className="text-3xl font-bold text-red-400 mb-2">
                <AnimatedCounter 
                  end={parseFloat(item.stat.replace(/[^0-9.]/g, ''))} 
                  suffix={item.stat.replace(/[0-9.]/g, '')}
                  decimals={item.stat.includes('.') ? 1 : 0}
                />
              </div>
              <div className="text-sm text-gray-400">{item.statLabel}</div>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      {/* Our Solution */}
      <ContentSection id="solution" title="Revolutionary Solution">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '🥇',
              title: 'First-in-Class',
              description: 'Revolutionary PD-L1 modulator with unprecedented selectivity',
              features: ['Novel mechanism', 'High specificity', 'Optimized binding']
            },
            {
              icon: '💊',
              title: 'Oral Delivery',
              description: 'Convenient oral administration with immune rebalancing potential',
              features: ['Patient-friendly', 'High bioavailability', 'Targeted action']
            },
            {
              icon: '🎯',
              title: 'Root Cause',
              description: 'Addresses the fundamental autoimmune cause of Type 1 Diabetes',
              features: ['Disease modification', 'Long-term efficacy', 'Precision medicine']
            }
          ].map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-4xl mb-6 text-center">{solution.icon}</div>
              <h4 className="text-xl font-bold text-white mb-4 text-center">{solution.title}</h4>
              <p className="text-gray-300 mb-6 text-center">{solution.description}</p>
              <div className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                    <span className="text-sm text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      {/* Validation */}
      <ContentSection id="validation" title="Scientific Validation" variant="light">
        <ValidationTable />
      </ContentSection>

      {/* Novelty & IP */}
      <ContentSection id="novelty" title="Innovation & Intellectual Property">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-2xl font-bold text-cyan-400 mb-6">Breakthrough Novelty</h4>
            {[
              { icon: '📊', text: 'Tanimoto Similarity (vs DrugBank): Max 0.333' },
              { icon: '✨', text: '100% novel under Tanimoto < 0.4 threshold' },
              { icon: '🔐', text: 'SHA-256 + IPFS timestamped record' },
              { icon: '📋', text: 'Provisional patent in preparation' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="text-2xl">{item.icon}</div>
                <span className="text-lg text-gray-300">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-purple-500/20"
          >
            <h4 className="text-2xl font-bold text-purple-400 mb-6">IP Protection Strategy</h4>
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <div className="text-gray-400">Novel Structure</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  <AnimatedCounter end={0.333} decimals={3} />
                </div>
                <div className="text-gray-400">Max Similarity Score</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  <AnimatedCounter end={1} suffix=" patent" />
                </div>
                <div className="text-gray-400">IP Filing Prepared</div>
              </div>
            </div>
          </motion.div>
        </div>
      </ContentSection>

      {/* Roadmap */}
      <ContentSection id="roadmap" title="Development Roadmap" variant="light">
        <div className="space-y-8">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500" />
            
            {[
              {
                title: 'Wet Lab Synthesis',
                description: 'Chemical synthesis and purification of Genesis-T1D-RxM-18',
                duration: '2-3 months',
                cost: '$150k',
                icon: '⚗️'
              },
              {
                title: 'In Vitro PD-L1 Binding',
                description: 'Validation of target binding affinity and selectivity',
                duration: '1-2 months',
                cost: '$100k',
                icon: '🔬'
              },
              {
                title: 'ADMET + PK/PD Profiling',
                description: 'Comprehensive pharmacokinetic and toxicology studies',
                duration: '3-4 months',
                cost: '$200k',
                icon: '📊'
              },
              {
                title: 'IND-Enabling Studies',
                description: 'Regulatory-compliant safety and efficacy studies',
                duration: '6-8 months',
                cost: '$300k',
                icon: '📋'
              },
              {
                title: 'Patent & IP-NFT Licensing',
                description: 'Intellectual property protection and commercialization',
                duration: '2-3 months',
                cost: '$50k',
                icon: '🏛️'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="relative flex items-start space-x-6 pb-12"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center relative z-10"
                  whileHover={{ scale: 1.2 }}
                >
                  <span className="text-xl">{step.icon}</span>
                </motion.div>

                <motion.div
                  className="flex-grow bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <div className="text-right">
                      <div className="text-sm text-cyan-400">{step.duration}</div>
                      <div className="text-lg font-bold text-green-400">{step.cost}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{step.description}</p>
                  
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(index + 1) * 20}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </ContentSection>

      {/* Funding */}
      <ContentSection id="funding" title="Investment Opportunity">
        <div className="space-y-12">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                $<AnimatedCounter end={500} />k
              </div>
              <div className="text-xl text-gray-300">Seeking from VitaDAO</div>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Synthesis & Validation', 
                percentage: 30, 
                color: 'from-cyan-500 to-blue-600',
                amount: 150,
                description: 'Chemical synthesis, purification, and initial validation studies'
              },
              { 
                title: 'Toxicology & Profiling', 
                percentage: 40, 
                color: 'from-purple-500 to-pink-600',
                amount: 200,
                description: 'Comprehensive ADMET studies and pharmacological profiling'
              },
              { 
                title: 'IND Prep & IP Legal', 
                percentage: 30, 
                color: 'from-pink-500 to-red-600',
                amount: 150,
                description: 'Regulatory preparation, patent filing, and legal documentation'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${item.color}/10 p-8 rounded-2xl border border-opacity-20 hover:border-opacity-40 transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
              >
                <h4 className={`text-xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-4`}>
                  {item.title}
                </h4>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-3xl font-bold text-white">
                      <AnimatedCounter end={item.percentage} suffix="%" />
                    </span>
                    <span className="text-xl font-medium text-gray-300">
                      $<AnimatedCounter end={item.amount} />k
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <motion.div
                      className={`bg-gradient-to-r ${item.color} h-3 rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </div>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </ContentSection>

      {/* Contact */}
      <ContentSection id="contact" title="Connect With Us" variant="light">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-12 rounded-2xl border border-cyan-500/20">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center"
            >
              <span className="text-3xl">👨‍🔬</span>
            </motion.div>
            
            <h4 className="text-2xl font-bold text-white mb-2">Ebenezer Babasola</h4>
            <p className="text-lg text-gray-300 mb-2">Founder & Lead Scientist</p>
            <p className="text-lg text-gray-300 mb-6">Genesis Molecular Engine</p>
            <p className="text-lg text-gray-400 mb-8">Toronto, Canada</p>
            
            <motion.a
              href="mailto:ebenezer@genesismolecular.com"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-full hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>📧</span>
              <span>ebenezer@genesismolecular.com</span>
            </motion.a>
          </div>
        </motion.div>
      </ContentSection>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-black border-t border-cyan-500/20 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
                Genesis Molecular Engine
              </div>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Pioneering the future of molecular medicine through artificial intelligence and precision engineering.
              </p>
            </motion.div>
            
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-500">
                © 2025 Genesis Molecular Engine. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
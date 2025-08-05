'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { ParticleSystem } from './ParticleSystem'
import { AnimatedCounter } from './AnimatedCounter'

export function EnhancedHeroSection() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  const scrollToProject = () => {
    document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-800"
        style={{ y: y1 }}
      />
      
      {/* Enhanced particle system */}
      <ParticleSystem />
      
      {/* Animated molecular grid */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ y: y2 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#22d3ee_1px,transparent_1px),linear-gradient(to_bottom,#22d3ee_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]" />
      </motion.div>

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
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto text-center px-6 relative z-10">
        {/* Main title with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.h1 
            className="text-6xl md:text-9xl mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              backgroundSize: '200% 200%'
            }}
          >
            Genesis-T1D-RxM-18
          </motion.h1>
          
          {/* Animated underline */}
          <motion.div 
            className="w-40 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-8"
            animate={{ 
              scaleX: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Subtitle with typewriter effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12"
        >
          <p className="text-2xl md:text-4xl text-gray-300 mb-6">
            AI-Generated PD-L1 Modulator for Type 1 Diabetes
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
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
            <div className="text-3xl md:text-4xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
              <AnimatedCounter end={9.1} decimals={1} />
            </div>
            <div className="text-sm text-gray-400">Docking Score</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
              <AnimatedCounter end={83} suffix="%" />
            </div>
            <div className="text-sm text-gray-400">QED Score</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent mb-2">
              <AnimatedCounter end={100} suffix="%" />
            </div>
            <div className="text-sm text-gray-400">Novel Structure</div>
          </div>
        </motion.div>

        {/* Enhanced CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.button
            onClick={scrollToProject}
            className="group relative px-12 py-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10 text-lg">Explore the Future</span>
            
            {/* Button particles */}
            <motion.div
              className="absolute inset-0"
              initial={false}
              whileHover={{ opacity: 1 }}
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
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
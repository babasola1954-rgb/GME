'use client'

import { motion } from 'motion/react'
import { ReactNode } from 'react'

interface ContentSectionProps {
  id: string
  title: string
  children: ReactNode
  variant?: 'light' | 'dark'
}

export function ContentSection({ id, title, children, variant = 'dark' }: ContentSectionProps) {
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
          <h2 className="text-4xl md:text-6xl mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
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
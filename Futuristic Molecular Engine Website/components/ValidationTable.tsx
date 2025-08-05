'use client'

import { motion } from 'motion/react'

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

export function ValidationTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-cyan-500/20 bg-black/30 backdrop-blur-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
              <th className="px-6 py-4 text-left text-cyan-400">Metric</th>
              <th className="px-6 py-4 text-left text-cyan-400">Value</th>
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
                <td className="px-6 py-4 text-white">{row.value}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
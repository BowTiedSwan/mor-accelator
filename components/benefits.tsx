"use client"

import { motion } from "framer-motion"
import { Code2, Coins, Cpu, Gift } from "lucide-react"

const benefits = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Code",
    description: "Access to cutting-edge blockchain development tools and frameworks."
  },
  {
    icon: <Coins className="w-8 h-8" />,
    title: "Capital",
    description: "Seed funding and support for token launch initiatives."
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Compute",
    description: "High-performance computing resources for blockchain operations."
  },
  {
    icon: <Gift className="w-8 h-8" />,
    title: "Builder Rewards",
    description: "Exclusive incentives and rewards for active builders."
  }
]

export function Benefits() {
  return (
    <section className="py-24 bg-black/50">
      <div className="container px-4 mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Core Benefits
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="p-6 rounded-lg bg-black/40 border border-white/10 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mb-4 text-primary">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-white/70">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
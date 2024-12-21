"use client"

import { motion } from "framer-motion"
import { MessageSquare, Wallet, Gamepad2, Network, Database, Image, Users } from "lucide-react"

const useCases = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Chat",
    description: "Decentralized communication platforms"
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "DeFi",
    description: "Decentralized financial applications"
  },
  {
    icon: <Gamepad2 className="w-6 h-6" />,
    title: "Gaming",
    description: "Blockchain-based gaming experiences"
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: "Agent Interoperability",
    description: "Cross-chain communication solutions"
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "DePIN",
    description: "Decentralized Physical Infrastructure"
  },
  {
    icon: <Image className="w-6 h-6" />,
    title: "NFA",
    description: "Non-Fungible Asset platforms"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "DAO",
    description: "Decentralized Autonomous Organizations"
  }
]

export function UseCases() {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Use Cases
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              className="p-6 rounded-lg bg-black/40 border border-white/10 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mb-4 text-primary">{useCase.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
              <p className="text-white/70">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
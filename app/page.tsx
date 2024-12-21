"use client"

import { motion } from "framer-motion"
import { Benefits } from "@/components/benefits"
import { Hero } from "@/components/hero"
import { UseCases } from "@/components/use-cases"
import { Footer } from "@/components/footer"
import { MatrixBackground } from "@/components/matrix-background"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      <MatrixBackground />
      <div className="relative z-10">
        <Hero />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Benefits />
          <UseCases />
          <Footer />
        </motion.div>
      </div>
    </main>
  )
}
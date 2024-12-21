"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container px-4 mx-auto text-center">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Morpheus Accelerator
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Empowering the next generation of blockchain builders with resources, mentorship, and capital to bring their vision to life.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button size="lg" asChild>
            <Link href="/apply">
              Apply Now
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/learn-more">
              Learn More
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { MORBalance } from "./MORBalance"

export function Navbar() {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <Image 
            src="/logo-green.svg"
            alt="Morpheus Logo"
            width={24}
            height={24}
            className="w-9 h-9"
          />
          Morpheus
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm text-white/70 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/apply" className="text-sm text-white/70 hover:text-white transition-colors">
            Apply
          </Link>
          <Link href="/blog" className="text-sm text-white/70 hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/faq" className="text-sm text-white/70 hover:text-white transition-colors">
            FAQ
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <MORBalance />
          <Button variant="default" size="sm" asChild>
            <Link href="/apply">
              Apply Now
            </Link>
          </Button>
          <w3m-button size="sm"/>
        </div>
      </nav>
    </motion.header>
  )
}
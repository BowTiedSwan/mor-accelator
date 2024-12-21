import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Analytics } from '@/components/analytics'
import { headers } from "next/headers"
import { cookieToInitialState } from "wagmi"
import { config } from "@/config"
import Web3ModalProvider from "@/context"
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Morpheus Builder Accelerator',
  description: 'Empowering the next generation of blockchain builders',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const initialState = cookieToInitialState(config, headers().get("cookie"))
  
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
      </head>
      <body className={inter.className}>
        <Web3ModalProvider initialState={initialState}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <div className="min-h-screen bg-black text-white">
              <Navbar />
              {children}
              <Analytics />
            </div>
          </ThemeProvider>
        </Web3ModalProvider>
      </body>
    </html>
  )
}
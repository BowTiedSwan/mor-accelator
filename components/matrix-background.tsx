"use client"

import { useEffect, useRef } from "react"

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const safeCtx = ctx
    const safeCanvas = canvas

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const characters = "01"
    const fontSize = 14
    const columns = canvas.width / fontSize
    const drops: number[] = []

    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    function draw() {
      safeCtx.fillStyle = "rgba(0, 0, 0, 0.05)"
      safeCtx.fillRect(0, 0, safeCanvas.width, safeCanvas.height)

      safeCtx.fillStyle = "#0f0"
      safeCtx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length))
        safeCtx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > safeCanvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i] += 0.5
      }
    }

    const interval = setInterval(draw, 50)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full opacity-50"
    />
  )
}